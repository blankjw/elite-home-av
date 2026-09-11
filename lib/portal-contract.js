import { createHash, randomUUID } from "node:crypto"
import { DatabaseSync } from "node:sqlite"
import { dispatchClickUpWrite, loadPortalClickUpMapping } from "./clickup-mapping.js"

const CRM_ACTIVE = "901420208001"
const PRIVATE = new Set([
  "clickup_id",
  "customer_task_id",
  "property_task_id",
  "source_reference",
  "internal_cost_minor",
  "margin",
  "granted_by",
  "content_sha256",
])

export function hashContent(payload) {
  return createHash("sha256").update(JSON.stringify(payload)).digest("hex")
}

export function publicDto(record) {
  const out = {}
  for (const [key, value] of Object.entries(record)) {
    if (PRIVATE.has(key) || key.endsWith("_task_id")) continue
    out[key] = value
  }
  return out
}

export class ContractStore {
  constructor(filename = ":memory:") {
    this.db = new DatabaseSync(filename)
    this.db.exec(`
      PRAGMA foreign_keys=ON;
      CREATE TABLE tenants(id TEXT PRIMARY KEY);
      CREATE TABLE principals(id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL);
      CREATE TABLE customer_access(
        tenant_id TEXT NOT NULL, principal_id TEXT NOT NULL,
        customer_task_id TEXT NOT NULL, property_task_id TEXT NOT NULL,
        role TEXT NOT NULL CHECK(role IN ('viewer','requester','approver')),
        granted_by TEXT NOT NULL, granted_at TEXT NOT NULL,
        UNIQUE(tenant_id, principal_id, customer_task_id, property_task_id)
      );
      CREATE TABLE estimate_revisions(
        estimate_id TEXT NOT NULL, revision INTEGER NOT NULL,
        tenant_id TEXT NOT NULL, property_task_id TEXT NOT NULL,
        publication_state TEXT NOT NULL,
        total_minor INTEGER NOT NULL, content_sha256 TEXT NOT NULL,
        PRIMARY KEY(estimate_id, revision)
      );
      CREATE TRIGGER immutable_published BEFORE UPDATE ON estimate_revisions
        WHEN OLD.publication_state='published'
        BEGIN SELECT RAISE(ABORT,'published revision immutable'); END;
      CREATE TABLE approval_decisions(
        id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL,
        subject_kind TEXT NOT NULL, subject_id TEXT NOT NULL,
        subject_revision INTEGER NOT NULL, content_sha256 TEXT NOT NULL,
        decision TEXT NOT NULL CHECK(decision IN ('approved','rejected')),
        actor_principal_id TEXT NOT NULL, decided_at TEXT NOT NULL,
        idempotency_key TEXT NOT NULL,
        UNIQUE(idempotency_key)
      );
      CREATE TABLE integration_operations(
        id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL,
        idempotency_key TEXT NOT NULL, payload_hash TEXT NOT NULL,
        operation TEXT NOT NULL, state TEXT NOT NULL,
        UNIQUE(tenant_id, operation, idempotency_key)
      );
    `)
  }

  seedSynthetic() {
    this.db.prepare("INSERT INTO tenants VALUES('elite-v1-fixture')").run()
    this.db.prepare("INSERT INTO principals VALUES('approver-1','elite-v1-fixture')").run()
    this.db.prepare("INSERT INTO principals VALUES('viewer-2','elite-v1-fixture')").run()
    this.db.prepare("INSERT INTO principals VALUES('other-tenant','tenant-b')").run()
    this.grant("elite-v1-fixture", "approver-1", "cust-1", "prop-1", "approver", "staff-1")
    this.grant("elite-v1-fixture", "viewer-2", "cust-1", "prop-1", "viewer", "staff-1")
    this.db.prepare("INSERT INTO estimate_revisions VALUES(?,?,?,?,?,?,?)").run(
      "est-1", 1, "elite-v1-fixture", "prop-1", "published", 1000, hashContent({ scope: "v1" }),
    )
  }

  grant(tenant, principal, customer, property, role, grantedBy) {
    this.db.prepare("INSERT INTO customer_access VALUES(?,?,?,?,?,?,?)").run(
      tenant, principal, customer, property, role, grantedBy, new Date().toISOString(),
    )
  }

  canApprove(tenant, principal, property) {
    return !!this.db.prepare(
      "SELECT 1 FROM customer_access WHERE tenant_id=? AND principal_id=? AND property_task_id=? AND role='approver'",
    ).get(tenant, principal, property)
  }

  approve({ tenant, actor, subjectId, revision, sha256, decision, idempotencyKey }) {
    const est = this.db.prepare("SELECT * FROM estimate_revisions WHERE estimate_id=? AND revision=?").get(subjectId, revision)
    if (!est || est.publication_state !== "published") {
      const err = new Error("stale or unpublished revision")
      err.status = 409
      throw err
    }
    if (est.tenant_id !== tenant) {
      const err = new Error("cross-tenant denial")
      err.status = 403
      throw err
    }
    if (est.content_sha256 !== sha256) {
      const err = new Error("hash mismatch")
      err.status = 409
      throw err
    }
    if (!this.canApprove(tenant, actor, est.property_task_id)) {
      const err = new Error("actor is not an approver")
      err.status = 403
      throw err
    }
    const existing = this.db.prepare("SELECT * FROM approval_decisions WHERE subject_id=? AND subject_revision=?").get(subjectId, revision)
    if (existing) {
      const err = new Error("revision already decided")
      err.status = 409
      throw err
    }
    const id = randomUUID()
    this.db.prepare(
      "INSERT INTO approval_decisions VALUES(?,?,?,?,?,?,?,?,?,?)",
    ).run(id, tenant, "estimate", subjectId, revision, sha256, decision, actor, new Date().toISOString(), idempotencyKey)
    return this.db.prepare("SELECT * FROM approval_decisions WHERE id=?").get(id)
  }

  enqueueProjection(mapping, action, tenant, key, payload) {
    const payloadHash = hashContent(payload)
    const dup = this.db.prepare(
      "SELECT * FROM integration_operations WHERE tenant_id=? AND operation=? AND idempotency_key=?",
    ).get(tenant, action, key)
    if (dup) {
      if (dup.payload_hash !== payloadHash) {
        const err = new Error("idempotency payload mismatch")
        err.status = 409
        throw err
      }
      return { ...dup, duplicate: true }
    }
    this.db.prepare("INSERT INTO integration_operations VALUES(?,?,?,?,?,?)").run(
      randomUUID(), tenant, key, payloadHash, action, "pending",
    )
    try {
      dispatchClickUpWrite(mapping, action)
    } catch (error) {
      this.db.prepare(
        "UPDATE integration_operations SET state='failed' WHERE tenant_id=? AND operation=? AND idempotency_key=?",
      ).run(tenant, action, key)
      return { state: "failed", error: error.message, clickupWrite: false }
    }
    return { state: "pending" }
  }

  close() {
    this.db.close()
  }
}

export function ownerMappingOrThrow() {
  const mapping = loadPortalClickUpMapping()
  if (mapping.action_mapping.customer_request.clickup_write_target === CRM_ACTIVE) {
    throw new Error("CRM Active is never an intake target")
  }
  return mapping
}
