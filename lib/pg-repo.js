import { createHash, randomUUID } from "node:crypto"
import { PGlite } from "@electric-sql/pglite"
import { MIGRATION_0001 } from "./sql-migrations.js"
const SCHEMA = MIGRATION_0001

function hashPayload(payload) {
  return createHash("sha256").update(JSON.stringify(payload)).digest("hex")
}

function wrap(status, message) {
  const err = new Error(message)
  err.status = status
  return err
}

function repoApi(query, withTx, close) {
  return {
    async issueEstimate({ estimateId, revision, tenantId, propertyId, payload }) {
      const sha = hashPayload(payload)
      await query(
        "INSERT INTO estimate_revisions(estimate_id, revision, tenant_id, property_id, publication_state, content_sha256) VALUES($1,$2,$3,$4,'published',$5)",
        [estimateId, revision, tenantId, propertyId, sha],
      )
      return { estimateId, revision, content_sha256: sha }
    },
    async createRequest({ id, tenantId, propertyId, title, details, idempotencyKey }) {
      const payloadHash = hashPayload({ title, details, propertyId })
      const existing = await query("SELECT * FROM requests WHERE tenant_id=$1 AND idempotency_key=$2", [tenantId, idempotencyKey])
      if (existing.rows[0]) {
        if (existing.rows[0].payload_hash !== payloadHash) throw wrap(409, "idempotency payload mismatch")
        return { ...existing.rows[0], duplicate: true }
      }
      const rowId = id || randomUUID()
      try {
        await withTx(async (q) => {
          await q(
            "INSERT INTO requests(id, tenant_id, property_id, title, details, idempotency_key, payload_hash) VALUES($1,$2,$3,$4,$5,$6,$7)",
            [rowId, tenantId, propertyId, title, details, idempotencyKey, payloadHash],
          )
        })
      } catch (error) {
        if (error.status) throw error
        const race = await query("SELECT * FROM requests WHERE tenant_id=$1 AND idempotency_key=$2", [tenantId, idempotencyKey])
        if (race.rows[0] && race.rows[0].payload_hash === payloadHash) return { ...race.rows[0], duplicate: true }
        if (race.rows[0]) throw wrap(409, "idempotency payload mismatch")
        throw wrap(500, `request insert failed: ${error.message}`)
      }
      const { rows } = await query("SELECT * FROM requests WHERE tenant_id=$1 AND idempotency_key=$2", [tenantId, idempotencyKey])
      return rows[0]
    },
    async approve({ id, tenantId, actorId, subjectId, revision, sha256, decision, idempotencyKey }) {
      const issued = await query(
        "SELECT * FROM estimate_revisions WHERE estimate_id=$1 AND revision=$2 AND publication_state='published'",
        [subjectId, revision],
      )
      const est = issued.rows[0]
      if (!est) throw wrap(409, "stale or unpublished revision")
      if (est.tenant_id !== tenantId) throw wrap(403, "cross-tenant denial")
      if (est.content_sha256 !== sha256) throw wrap(409, "hash mismatch")
      const dupKey = await query("SELECT * FROM approval_decisions WHERE tenant_id=$1 AND idempotency_key=$2", [tenantId, idempotencyKey])
      if (dupKey.rows[0]) return { ...dupKey.rows[0], duplicate: true }
      const decided = await query("SELECT * FROM approval_decisions WHERE subject_id=$1 AND subject_revision=$2", [subjectId, revision])
      if (decided.rows[0]) throw wrap(409, "stale revision")
      try {
        await withTx(async (q) => {
          await q(
            "INSERT INTO approval_decisions(id, tenant_id, subject_id, subject_revision, content_sha256, decision, actor_principal_id, idempotency_key) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
            [id || randomUUID(), tenantId, subjectId, revision, sha256, decision, actorId, idempotencyKey],
          )
        })
      } catch (error) {
        if (error.status) throw error
        throw wrap(500, `approval insert failed: ${error.message}`)
      }
      const { rows } = await query("SELECT * FROM approval_decisions WHERE tenant_id=$1 AND idempotency_key=$2", [tenantId, idempotencyKey])
      return rows[0]
    },
    async grantMembership({ userId, propertyId }) {
      await query(
        "INSERT INTO memberships(user_id, property_id, status) VALUES($1,$2,'active') ON CONFLICT (user_id, property_id) DO UPDATE SET status='active'",
        [userId, propertyId],
      )
    },
    async canAccess(userId, propertyId) {
      const { rows } = await query(
        "SELECT 1 FROM memberships WHERE user_id=$1 AND property_id=$2 AND status='active'",
        [userId, propertyId],
      )
      return Boolean(rows[0])
    },
    async saveInquiry(row) {
      const id = row.id || randomUUID()
      await query(
        "INSERT INTO inquiries(id, intent, name, phone, email, service, message, status, delivered) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)",
        [id, row.intent || null, row.name, row.phone, row.email || null, row.service, row.message, row.status || "saved_local", row.delivered ? 1 : 0],
      )
      return { id, status: row.status || "saved_local", delivered: Boolean(row.delivered) }
    },
    async getInquiry(id) {
      const { rows } = await query("SELECT * FROM inquiries WHERE id=$1", [id])
      return rows[0] || null
    },
    async saveFileMetadata({ id, propertyId, uploadedBy, originalName, storageName, mime, size, putObject }) {
      const fileId = id || randomUUID()
      try {
        await withTx(async (q) => {
          await putObject()
          await q(
            "INSERT INTO files(id, property_id, uploaded_by, original_name, storage_name, mime, size) VALUES($1,$2,$3,$4,$5,$6,$7)",
            [fileId, propertyId, uploadedBy, originalName, storageName, mime, size],
          )
        })
      } catch (error) {
        throw wrap(error.status || 500, error.message)
      }
      return { id: fileId }
    },
    async close() {
      await close()
    },
  }
}

export async function createPgRepo(arg) {
  const connectionString = arg && typeof arg === "object" ? arg.connectionString : null
  const dataDir = typeof arg === "string" ? arg : undefined

  if (connectionString) {
    const { Pool } = await import("pg")
    const pool = new Pool({ connectionString })
    await pool.query(SCHEMA)
    const query = (text, params) => pool.query(text, params)
    const withTx = async (fn) => {
      const client = await pool.connect()
      try {
        await client.query("BEGIN")
        const result = await fn((text, params) => client.query(text, params))
        await client.query("COMMIT")
        return result
      } catch (error) {
        try { await client.query("ROLLBACK") } catch {}
        throw error
      } finally {
        client.release()
      }
    }
    return repoApi(query, withTx, () => pool.end())
  }

  const db = dataDir ? new PGlite(dataDir) : new PGlite()
  await db.exec(SCHEMA)
  const query = (text, params) => db.query(text, params)
  const withTx = async (fn) => {
    await db.query("BEGIN")
    try {
      const result = await fn((text, params) => db.query(text, params))
      await db.query("COMMIT")
      return result
    } catch (error) {
      await db.query("ROLLBACK")
      throw error
    }
  }
  return repoApi(query, withTx, () => db.close())
}
