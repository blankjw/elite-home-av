import { createHash, randomUUID } from "node:crypto"
import path from "node:path"
import { Pool } from "pg"
import { createObjectStore, objectStorageKey } from "./object-store.js"
import { dataRoot } from "./data-root.js"
import { MIGRATION_0001, MIGRATION_0002 } from "./sql-migrations.js"

function sha(payload) {
  return createHash("sha256").update(typeof payload === "string" ? payload : JSON.stringify(payload)).digest("hex")
}

export class PostgresStore {
  constructor(pool, blobs) {
    this.pool = pool
    this.blobs = blobs
  }

  async q(text, params) {
    return this.pool.query(text, params)
  }
  async withTx(fn) {
    const client = await this.pool.connect()
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

  async userByEmail(email) {
    const { rows } = await this.q("SELECT * FROM users WHERE lower(email)=lower($1) AND invited=1", [email])
    return rows[0]
  }
  async user(id) {
    const { rows } = await this.q("SELECT * FROM users WHERE id=$1 AND invited=1", [id])
    return rows[0]
  }
  async properties(userId) {
    const { rows } = await this.q(
      "SELECT p.*, m.status FROM properties p JOIN memberships m ON m.property_id=p.id WHERE m.user_id=$1 AND m.status='active' ORDER BY p.id",
      [userId],
    )
    return rows
  }
  async canAccess(userId, propertyId) {
    const { rows } = await this.q("SELECT 1 FROM memberships WHERE user_id=$1 AND property_id=$2 AND status='active'", [userId, propertyId])
    return Boolean(rows[0])
  }
  async listFiles(propertyId, role) {
    const { rows } = await this.q(
      "SELECT id,original_name,mime,size,created_at FROM files WHERE property_id=$1 AND ($2='staff' OR client_visible::int=1) ORDER BY created_at DESC",
      [propertyId, role],
    )
    return rows
  }
  async createInquiry(row) {
    const id = randomUUID()
    const intent = row.intent === "existing_service" ? "existing_service" : "new_project"
    await this.q(
      "INSERT INTO inquiries(id,intent,name,phone,email,service,message,status,delivered) VALUES($1,$2,$3,$4,$5,$6,$7,'saved_local',0)",
      [id, intent, row.name, row.phone, row.email || null, row.service, row.message],
    )
    const { rows } = await this.q("SELECT * FROM inquiries WHERE id=$1", [id])
    return rows[0]
  }
  async getInquiry(id) {
    const { rows } = await this.q("SELECT * FROM inquiries WHERE id=$1", [id])
    return rows[0] || null
  }
  async enqueue(key, type, payload, q = this.q.bind(this)) {
    const existing = await q("SELECT * FROM outbox WHERE idempotency_key=$1", [key])
    if (existing.rows[0]) return { ...existing.rows[0], duplicate: true }
    const id = randomUUID()
    await q("INSERT INTO outbox(id,idempotency_key,event_type,payload) VALUES($1,$2,$3,$4)", [id, key, type, JSON.stringify(payload)])
    const { rows } = await q("SELECT * FROM outbox WHERE id=$1", [id])
    return { ...rows[0], duplicate: false }
  }
  async createRequest(actor, propertyId, title, details) {
    if (!(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const id = randomUUID()
    await this.withTx(async (q) => {
      await q(
        "INSERT INTO portal_requests(id,property_id,created_by,title,details,status) VALUES($1,$2,$3,$4,$5,'open')",
        [id, propertyId, actor.id, title, details],
      )
      await this.enqueue(`request:${id}:created`, "request.created", { requestId: id, propertyId }, q)
    })
    const { rows } = await this.q("SELECT * FROM portal_requests WHERE id=$1", [id])
    return rows[0]
  }
  async requests(userId, propertyId) {
    if (!(await this.canAccess(userId, propertyId))) throw new Error("forbidden")
    const { rows } = await this.q("SELECT * FROM portal_requests WHERE property_id=$1 ORDER BY created_at DESC", [propertyId])
    return rows
  }
  blobKey(propertyId, storageName) {
    if (this.blobs.adapter === "s3") return objectStorageKey(this.blobs.cfg.prefix, propertyId, storageName)
    return `${propertyId}/${storageName}`
  }
  async saveFileAsync(actor, propertyId, name, mime, bytes, requestId = null, clientVisible = true) {
    if (!(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const id = randomUUID()
    const storageName = `${id}-${createHash("sha256").update(bytes).digest("hex").slice(0, 16)}`
    const key = this.blobKey(propertyId, storageName)
    const client = await this.pool.connect()
    try {
      await client.query("BEGIN")
      await Promise.resolve(this.blobs.put(key, Buffer.from(bytes), mime || "application/octet-stream", propertyId))
      await client.query(
        "INSERT INTO files(id,property_id,request_id,uploaded_by,original_name,storage_name,mime,size,client_visible) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)",
        [id, propertyId, requestId, actor.id, name, storageName, mime, bytes.length, clientVisible ? 1 : 0],
      )
      await client.query("COMMIT")
    } catch (error) {
      try { await client.query("ROLLBACK") } catch {}
      throw error
    } finally {
      client.release()
    }
    const { rows } = await this.q("SELECT * FROM files WHERE id=$1", [id])
    return rows[0]
  }
  async fileAsync(actor, id) {
    const { rows } = await this.q("SELECT * FROM files WHERE id=$1", [id])
    const file = rows[0]
    if (!file || !(await this.canAccess(actor.id, file.property_id)) || (actor.role !== "staff" && Number(file.client_visible) !== 1)) throw new Error("not found")
    const bytes = await Promise.resolve(this.blobs.get(this.blobKey(file.property_id, file.storage_name), file.property_id))
    return { file, bytes: Buffer.from(bytes) }
  }
  async estimate(actor, propertyId, id, version) {
    if (!(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    if (id && version != null) {
      const { rows } = await this.q("SELECT * FROM estimates WHERE id=$1 AND version=$2 AND property_id=$3", [id, version, propertyId])
      return rows[0]
    }
    const { rows } = await this.q("SELECT * FROM estimates WHERE property_id=$1 AND status='issued' ORDER BY issued_at DESC LIMIT 1", [propertyId])
    return rows[0]
  }
  async issueEstimate(actor, propertyId, id, version, amount, payload) {
    if (actor.role !== "staff" || !(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    await this.q(
      "INSERT INTO estimates(id,property_id,version,status,amount,currency,payload,issued_at,created_by,content_sha256) VALUES($1,$2,$3,'issued',$4,'USD',$5,NOW(),$6,$7)",
      [id, propertyId, version, amount, JSON.stringify(payload), actor.id, sha(payload)],
    )
    return this.estimate(actor, propertyId, id, version)
  }
  async issuedEstimates(actor, propertyId) {
    if (!(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const { rows } = await this.q("SELECT * FROM estimates WHERE property_id=$1 AND status='issued' ORDER BY issued_at DESC", [propertyId])
    return rows
  }
  async decide(actor, propertyId, id, version, decision) {
    if (!["accepted", "declined"].includes(decision) || !(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const grant = await this.q("SELECT role FROM customer_access WHERE tenant_id=$1 AND principal_id=$2 AND property_id=$3", [propertyId, actor.id, propertyId])
    if (grant.rows[0]?.role !== "approver") throw new Error("forbidden")
    const approvalId = randomUUID()
    try {
      await this.withTx(async (q) => {
        const estRes = await q("SELECT * FROM estimates WHERE id=$1 AND version=$2 AND property_id=$3 AND status='issued' FOR UPDATE", [id, version, propertyId])
        const est = estRes.rows[0]
        if (!est) { const err = new Error("estimate unavailable"); err.status = 404; throw err }
        const binding = await q("SELECT 1 FROM approval_decisions WHERE subject_id=$1 AND subject_revision=$2 FOR UPDATE", [id, version])
        if (binding.rows[0]) {
          const err = new Error("decision already recorded")
          err.status = 409
          throw err
        }
        const mapped = decision === "accepted" ? "approved" : "rejected"
        await q(
          "INSERT INTO approvals(id,estimate_id,estimate_version,property_id,actor_id,decision,amount,currency) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
          [approvalId, id, version, propertyId, actor.id, decision, est.amount, est.currency],
        )
        await q(
          "INSERT INTO approval_decisions(id,tenant_id,subject_kind,subject_id,subject_revision,content_sha256,decision,actor_principal_id,idempotency_key) VALUES($1,$2,'estimate',$3,$4,$5,$6,$7,$8)",
          [randomUUID(), propertyId, id, version, est.content_sha256 || sha(est.payload), mapped, actor.id, `${id}:${version}:${actor.id}:${mapped}`],
        )
        await this.enqueue(`estimate:${id}:${version}:${actor.id}:${decision}`, "estimate.decision", { estimateId: id, version, propertyId, decision }, q)
      })
    } catch (error) {
      if (error.code === "23505") {
        const err = new Error("decision already recorded")
        err.status = 409
        throw err
      }
      throw error
    }
    const { rows } = await this.q("SELECT * FROM approvals WHERE id=$1", [approvalId])
    return rows[0]
  }
  async propertySummary(actor, propertyId) {
    if (!(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const property = (await this.q("SELECT name,location FROM properties WHERE id=$1", [propertyId])).rows[0]
    const requests = (await this.requests(actor.id, propertyId)).map((r) => ({ title: r.title, status: r.status }))
    const estimates = (await this.issuedEstimates(actor, propertyId)).map((e) => ({ version: e.version, amount: e.amount, currency: e.currency }))
    const milestones = (await this.q("SELECT title,planned_date,actual_date,delivery_state,readiness_state,published_summary FROM milestones WHERE property_id=$1 ORDER BY display_order", [propertyId])).rows
    return { property_label: property.name, location: property.location, requests, estimates, milestones }
  }
  async serviceEvents(propertyId) {
    const { rows } = await this.q("SELECT * FROM service_events WHERE property_id=$1 ORDER BY occurred_on DESC", [propertyId])
    return rows
  }
  async publishedMilestones(propertyId) {
    const { rows } = await this.q("SELECT * FROM milestones WHERE property_id=$1 ORDER BY display_order", [propertyId])
    return rows
  }
  async invoices(actor, propertyId) {
    if (!(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const { rows } = await this.q("SELECT id,original_name,mime,size,created_at FROM files WHERE property_id=$1 AND document_kind='invoice' AND approved=1 ORDER BY created_at DESC", [propertyId])
    return rows
  }
  async publishInvoice(actor, propertyId, title, bytes, mime = "application/pdf") {
    if (actor.role !== "staff" || !(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const file = await this.saveFileAsync(actor, propertyId, title, mime, bytes, null, true)
    await this.q("UPDATE files SET document_kind='invoice', approved=1 WHERE id=$1", [file.id])
    return file
  }
  async publishCustomerSafe(actor, fileId) {
    if (actor.role !== "staff") throw new Error("forbidden")
    const source = (await this.q("SELECT * FROM files WHERE id=$1", [fileId])).rows[0]
    if (!source || !(await this.canAccess(actor.id, source.property_id))) throw new Error("not found")
    const { bytes } = await this.fileAsync(actor, fileId)
    const copy = await this.saveFileAsync(actor, source.property_id, source.original_name.replace(/(\.[^.]+)?$/, "-customer$1"), source.mime, bytes, source.request_id, true)
    await this.q("UPDATE files SET approved=1, document_kind='customer_update' WHERE id=$1", [copy.id])
    return (await this.q("SELECT * FROM files WHERE id=$1", [copy.id])).rows[0]
  }
  async createServiceEvent(actor, propertyId, title, summary, requestId = null) {
    if (actor.role !== "staff" || !(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const id = randomUUID()
    await this.q(
      "INSERT INTO service_events(id,property_id,occurred_on,title,summary,request_id) VALUES($1,$2,$3,$4,$5,$6)",
      [id, propertyId, new Date().toISOString().slice(0, 10), title, summary, requestId],
    )
    return (await this.q("SELECT * FROM service_events WHERE id=$1", [id])).rows[0]
  }
  async outboxRows() {
    const { rows } = await this.q("SELECT * FROM outbox ORDER BY created_at DESC")
    return rows
  }
  async unpublishedFiles(actor, propertyId) {
    if (actor.role !== "staff" || !(await this.canAccess(actor.id, propertyId))) throw new Error("forbidden")
    const { rows } = await this.q("SELECT * FROM files WHERE property_id=$1 AND client_visible=0 ORDER BY created_at DESC", [propertyId])
    return rows
  }
  async seedDemo() {
    await this.q("INSERT INTO users(id,email,name,role,invited) VALUES('user_jordan','jordan@demo.elite.local','Jordan Ellis','customer',1) ON CONFLICT (id) DO NOTHING")
    await this.q("INSERT INTO users(id,email,name,role,invited) VALUES('staff_alex','alex@demo.elite.local','Alex Morgan','staff',1) ON CONFLICT (id) DO NOTHING")
    await this.q("INSERT INTO users(id,email,name,role,invited) VALUES('user_pat','pat@demo.elite.local','Pat Nguyen','customer',1) ON CONFLICT (id) DO NOTHING")
    await this.q("INSERT INTO properties(id,name,location) VALUES('prop_lake','Lakeview Residence','Lumberton, TX') ON CONFLICT (id) DO NOTHING")
    await this.q("INSERT INTO properties(id,name,location) VALUES('prop_studio','Calder Studio','Beaumont, TX') ON CONFLICT (id) DO NOTHING")
    await this.q("INSERT INTO properties(id,name,location) VALUES('prop_hold','Hold Property','Beaumont, TX') ON CONFLICT (id) DO NOTHING")
    // Intended demo grants: Jordan=Lakeview; Pat=Calder; Alex=all; Hold=staff only (isolation target).
    await this.q("INSERT INTO memberships(user_id,property_id,status) VALUES('user_jordan','prop_lake','active') ON CONFLICT DO NOTHING")
    await this.q("INSERT INTO memberships(user_id,property_id,status) VALUES('staff_alex','prop_lake','active') ON CONFLICT DO NOTHING")
    await this.q("INSERT INTO memberships(user_id,property_id,status) VALUES('staff_alex','prop_studio','active') ON CONFLICT DO NOTHING")
    await this.q("INSERT INTO memberships(user_id,property_id,status) VALUES('staff_alex','prop_hold','active') ON CONFLICT DO NOTHING")
    await this.q("INSERT INTO memberships(user_id,property_id,status) VALUES('user_pat','prop_studio','active') ON CONFLICT DO NOTHING")
    await this.q("INSERT INTO customer_access(tenant_id,principal_id,property_id,role,granted_by) VALUES('prop_lake','user_jordan','prop_lake','approver','staff_alex') ON CONFLICT DO NOTHING")
    await this.q("INSERT INTO customer_access(tenant_id,principal_id,property_id,role,granted_by) VALUES('prop_studio','user_pat','prop_studio','approver','staff_alex') ON CONFLICT DO NOTHING")
    await this.q("INSERT INTO customer_access(tenant_id,principal_id,property_id,role,granted_by) VALUES('prop_hold','staff_alex','prop_hold','approver','staff_alex') ON CONFLICT DO NOTHING")
  }
  async close() { await this.pool.end() }
}

export async function createPostgresStore(connectionString, options = {}) {
  const env = options.env || process.env
  const pool = new Pool({ connectionString })
  await pool.query(MIGRATION_0001)
  await pool.query(MIGRATION_0002)
  const uploadRoot = path.join(dataRoot(), "uploads")
  const blobs = createObjectStore(uploadRoot, env)
  const store = new PostgresStore(pool, blobs)
  const demo = env.DEMO_AUTH_ENABLED === "true" || options.seedDemo === true
  if (demo) await store.seedDemo()
  else if (options.seedDemo === false) { /* production principals are invited rows, never fixtures */ }
  return store
}
