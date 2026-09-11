import { DatabaseSync } from "node:sqlite"
import { createHash, randomUUID } from "node:crypto"
import { mkdirSync, readFileSync, existsSync } from "node:fs"
import path from "node:path"
import { dispatchClickUpWrite, loadPortalClickUpMapping } from "./clickup-mapping.js"
import { LocalObjectStore, createObjectStore, objectStorageKey } from "./object-store.js"
import { dataRoot } from "./data-root.js"

const DEFAULT_ROOT = dataRoot()

const TENANT = "elite-v1-fixture"

function sha(payload) {
  return createHash("sha256").update(typeof payload === "string" ? payload : JSON.stringify(payload)).digest("hex")
}

export class PortalStore {
  constructor(filename = path.join(DEFAULT_ROOT, "portal.sqlite"), uploadRoot = path.join(DEFAULT_ROOT, "uploads"), blobs = null) {
    if (filename !== ":memory:") mkdirSync(path.dirname(filename), { recursive: true })
    mkdirSync(uploadRoot, { recursive: true })
    this.uploadRoot = uploadRoot
    this.blobs = blobs || new LocalObjectStore(uploadRoot)
    this.db = new DatabaseSync(filename)
    this.db.exec(`
      PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
      CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY,email TEXT UNIQUE NOT NULL,name TEXT NOT NULL,role TEXT NOT NULL CHECK(role IN ('customer','staff')),invited INTEGER NOT NULL DEFAULT 1);
      CREATE TABLE IF NOT EXISTS properties(id TEXT PRIMARY KEY,name TEXT NOT NULL,location TEXT NOT NULL);
      CREATE TABLE IF NOT EXISTS memberships(user_id TEXT NOT NULL,property_id TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'active',PRIMARY KEY(user_id,property_id),FOREIGN KEY(user_id) REFERENCES users(id),FOREIGN KEY(property_id) REFERENCES properties(id));
      CREATE TABLE IF NOT EXISTS requests(id TEXT PRIMARY KEY,property_id TEXT NOT NULL,created_by TEXT NOT NULL,title TEXT NOT NULL,details TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'open',created_at TEXT NOT NULL);
      CREATE TABLE IF NOT EXISTS files(id TEXT PRIMARY KEY,property_id TEXT NOT NULL,request_id TEXT,uploaded_by TEXT NOT NULL,original_name TEXT NOT NULL,storage_name TEXT NOT NULL,mime TEXT NOT NULL,size INTEGER NOT NULL,client_visible INTEGER NOT NULL DEFAULT 1,created_at TEXT NOT NULL);
      CREATE TABLE IF NOT EXISTS estimates(id TEXT NOT NULL,property_id TEXT NOT NULL,version INTEGER NOT NULL,status TEXT NOT NULL,amount INTEGER NOT NULL,currency TEXT NOT NULL,payload TEXT NOT NULL,issued_at TEXT,created_by TEXT NOT NULL,PRIMARY KEY(id,version));
      CREATE TRIGGER IF NOT EXISTS immutable_issued_estimate BEFORE UPDATE ON estimates WHEN OLD.status='issued' BEGIN SELECT RAISE(ABORT,'issued estimates are immutable'); END;
      CREATE TABLE IF NOT EXISTS approvals(id TEXT PRIMARY KEY,estimate_id TEXT NOT NULL,estimate_version INTEGER NOT NULL,property_id TEXT NOT NULL,actor_id TEXT NOT NULL,decision TEXT NOT NULL,amount INTEGER NOT NULL,currency TEXT NOT NULL,created_at TEXT NOT NULL,UNIQUE(estimate_id,estimate_version,actor_id));
      CREATE TABLE IF NOT EXISTS outbox(id TEXT PRIMARY KEY,idempotency_key TEXT UNIQUE NOT NULL,event_type TEXT NOT NULL,payload TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',attempts INTEGER NOT NULL DEFAULT 0,last_error TEXT,created_at TEXT NOT NULL,confirmed_at TEXT);
      CREATE TABLE IF NOT EXISTS audit(id TEXT PRIMARY KEY,actor_id TEXT NOT NULL,property_id TEXT,action TEXT NOT NULL,entity_type TEXT NOT NULL,entity_id TEXT NOT NULL,detail TEXT NOT NULL,created_at TEXT NOT NULL);
    `)
    this.migrate()
    this.seed()
  }

  migrate() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS customer_access(
        tenant_id TEXT NOT NULL, principal_id TEXT NOT NULL, property_id TEXT NOT NULL,
        role TEXT NOT NULL CHECK(role IN ('viewer','requester','approver')),
        granted_by TEXT NOT NULL, granted_at TEXT NOT NULL,
        UNIQUE(tenant_id, principal_id, property_id)
      );
      CREATE TABLE IF NOT EXISTS change_order_revisions(
        id TEXT PRIMARY KEY, change_order_id TEXT NOT NULL, property_id TEXT NOT NULL,
        base_estimate_id TEXT NOT NULL, base_estimate_revision INTEGER NOT NULL,
        revision INTEGER NOT NULL, scope_delta TEXT NOT NULL, amount_delta_minor INTEGER NOT NULL,
        publication_state TEXT NOT NULL, content_sha256 TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS approval_decisions(
        id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL, subject_kind TEXT NOT NULL,
        subject_id TEXT NOT NULL, subject_revision INTEGER NOT NULL, content_sha256 TEXT NOT NULL,
        decision TEXT NOT NULL CHECK(decision IN ('approved','rejected')),
        actor_principal_id TEXT NOT NULL, decided_at TEXT NOT NULL, idempotency_key TEXT UNIQUE NOT NULL
      );
      CREATE TABLE IF NOT EXISTS budgets(
        id TEXT PRIMARY KEY, property_id TEXT NOT NULL, base_estimate_id TEXT NOT NULL,
        base_revision INTEGER NOT NULL, authorized_total_minor INTEGER NOT NULL, as_of TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS milestones(
        id TEXT PRIMARY KEY, property_id TEXT NOT NULL, title TEXT NOT NULL, display_order INTEGER NOT NULL,
        planned_date TEXT, actual_date TEXT, delivery_state TEXT NOT NULL, readiness_state TEXT NOT NULL,
        published_summary TEXT NOT NULL, curated_by TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS service_events(
        id TEXT PRIMARY KEY, property_id TEXT NOT NULL, occurred_on TEXT NOT NULL, title TEXT NOT NULL, summary TEXT NOT NULL, request_id TEXT
      );
    `)
    const cols = this.db.prepare("PRAGMA table_info(estimates)").all().map((c) => c.name)
    if (!cols.includes("content_sha256")) this.db.exec("ALTER TABLE estimates ADD COLUMN content_sha256 TEXT")
    if (!cols.includes("line_items")) this.db.exec("ALTER TABLE estimates ADD COLUMN line_items TEXT")
    const fileCols = this.db.prepare("PRAGMA table_info(files)").all().map((c) => c.name)
    if (!fileCols.includes("document_kind")) this.db.exec("ALTER TABLE files ADD COLUMN document_kind TEXT NOT NULL DEFAULT 'file'")
    if (!fileCols.includes("approved")) this.db.exec("ALTER TABLE files ADD COLUMN approved INTEGER NOT NULL DEFAULT 0")
    const svcCols = this.db.prepare("PRAGMA table_info(service_events)").all().map((c) => c.name)
    if (svcCols.length && !svcCols.includes("request_id")) this.db.exec("ALTER TABLE service_events ADD COLUMN request_id TEXT")
  }

  seed() {
    const tx = this.db.prepare("INSERT OR IGNORE INTO users(id,email,name,role) VALUES(?,?,?,?)")
    tx.run("user_jordan","jordan@demo.elite.local","Jordan Ellis","customer")
    tx.run("staff_alex","alex@demo.elite.local","Alex Morgan","staff")
    tx.run("user_pat","pat@demo.elite.local","Pat Nguyen","customer")
    const prop = this.db.prepare("INSERT OR IGNORE INTO properties(id,name,location) VALUES(?,?,?)")
    prop.run("prop_lake","Lakeview Residence","Lumberton, TX")
    prop.run("prop_studio","Calder Studio","Beaumont, TX")
    prop.run("prop_hold","Hold Property","Beaumont, TX")
    const mem = this.db.prepare("INSERT OR IGNORE INTO memberships(user_id,property_id,status) VALUES(?,?, 'active')")
    // Intended demo grants: Jordan=Lakeview only; Pat=Calder only; Alex=all three; nobody except staff on Hold.
    mem.run("user_jordan","prop_lake"); mem.run("user_pat","prop_studio"); mem.run("staff_alex","prop_lake"); mem.run("staff_alex","prop_studio"); mem.run("staff_alex","prop_hold")
    const payload = { label: "Whole-home integration · optional additions" }
    this.db.prepare("INSERT OR IGNORE INTO estimates(id,property_id,version,status,amount,currency,payload,issued_at,created_by,content_sha256,line_items) VALUES(?,?,?,?,?,?,?,?,?,?,?)")
      .run("est_lake","prop_lake",3,"issued",1892000,"USD",JSON.stringify(payload),"2026-09-09T12:00:00.000Z","staff_alex",sha(payload),JSON.stringify([{ description: "Integration", quantity_decimal: "1", unit_price_minor: 1892000, line_total_minor: 1892000 }]))
    const grant = this.db.prepare("INSERT OR IGNORE INTO customer_access VALUES(?,?,?,?,?,?)")
    grant.run(TENANT,"user_jordan","prop_lake","approver","staff_alex",new Date().toISOString())
    grant.run(TENANT,"user_pat","prop_studio","approver","staff_alex",new Date().toISOString())
    grant.run(TENANT,"staff_alex","prop_lake","approver","staff_alex",new Date().toISOString())
    grant.run(TENANT,"staff_alex","prop_studio","approver","staff_alex",new Date().toISOString())
    grant.run(TENANT,"staff_alex","prop_hold","approver","staff_alex",new Date().toISOString())
    this.db.prepare("INSERT OR IGNORE INTO milestones VALUES(?,?,?,?,?,?,?,?,?,?)").run(
      "ms_lake_1","prop_lake","Rough-in complete",1,null,"2026-08-12","complete","ready","Prewire complete. Dates shown only when published.","staff_alex",
    )
    this.db.prepare("INSERT OR IGNORE INTO requests VALUES(?,?,?,?,?,?,?)").run(
      "req_lake_wall","prop_lake","user_jordan","Media-wall dimensions","Need the media-wall photo for trim.","open","2026-09-08T15:00:00.000Z",
    )
    const actor = { id: "user_jordan", role: "customer" }
    const staff = { id: "staff_alex", role: "staff" }
    if (!this.db.prepare("SELECT 1 FROM files WHERE id=?").get("file_lake_private")) {
      const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==", "base64")
      const previousBlobs = this.blobs
      this.blobs = new LocalObjectStore(this.uploadRoot)
      const priv = this.saveFile(staff, "prop_lake", "media-wall-internal.png", "image/png", png, "req_lake_wall", false)
      this.db.prepare("UPDATE files SET id=?, approved=0 WHERE id=?").run("file_lake_private", priv.id)
      const vis = this.saveFile(staff, "prop_lake", "media-wall-approved.png", "image/png", png, "req_lake_wall", true)
      this.db.prepare("UPDATE files SET id=?, approved=1 WHERE id=?").run("file_lake_customer", vis.id)
      this.blobs = previousBlobs
    }
    this.db.prepare("INSERT OR IGNORE INTO service_events(id,property_id,occurred_on,title,summary) VALUES(?,?,?,?,?)").run(
      "svc_lake_1","prop_lake","2026-09-08","Network tuning","Completed and published for this property.",
    )
  }
  serviceEvents(propertyId) { return this.db.prepare("SELECT * FROM service_events WHERE property_id=? ORDER BY occurred_on DESC").all(propertyId) }
  publishedMilestones(propertyId) { return this.db.prepare("SELECT * FROM milestones WHERE property_id=? ORDER BY display_order").all(propertyId) }

  userByEmail(email) { return this.db.prepare("SELECT * FROM users WHERE lower(email)=lower(?) AND invited=1").get(email) }
  user(id) { return this.db.prepare("SELECT * FROM users WHERE id=? AND invited=1").get(id) }
  properties(userId) { return this.db.prepare("SELECT p.*,m.status FROM properties p JOIN memberships m ON m.property_id=p.id WHERE m.user_id=? AND m.status='active' ORDER BY p.id").all(userId) }
  canAccess(userId, propertyId) { return !!this.db.prepare("SELECT 1 FROM memberships WHERE user_id=? AND property_id=? AND status='active'").get(userId,propertyId) }
  grantRole(userId, propertyId) {
    const row = this.db.prepare("SELECT role FROM customer_access WHERE tenant_id=? AND principal_id=? AND property_id=?").get(TENANT,userId,propertyId)
    return row?.role || null
  }
  audit(actorId, propertyId, action, type, entityId, detail={}) { this.db.prepare("INSERT INTO audit VALUES(?,?,?,?,?,?,?,?)").run(randomUUID(),actorId,propertyId,action,type,entityId,JSON.stringify(detail),new Date().toISOString()) }
  enqueue(key,type,payload) { const existing=this.db.prepare("SELECT * FROM outbox WHERE idempotency_key=?").get(key); if(existing)return {...existing,duplicate:true}; const id=randomUUID(),now=new Date().toISOString(); this.db.prepare("INSERT INTO outbox(id,idempotency_key,event_type,payload,created_at) VALUES(?,?,?,?,?)").run(id,key,type,JSON.stringify(payload),now); return {...this.db.prepare("SELECT * FROM outbox WHERE id=?").get(id),duplicate:false} }
  markOutbox(id,confirmed,error=null) { this.db.prepare("UPDATE outbox SET attempts=attempts+1,status=?,last_error=?,confirmed_at=? WHERE id=?").run(confirmed?"confirmed":"pending",confirmed?null:error,confirmed?new Date().toISOString():null,id); return this.db.prepare("SELECT * FROM outbox WHERE id=?").get(id) }
  confirmClickUp(id, action="customer_request") {
    const mapping = loadPortalClickUpMapping()
    try {
      dispatchClickUpWrite(mapping, action)
    } catch (error) {
      return this.markOutbox(id, false, error.message)
    }
    throw new Error("ClickUp live writes disabled")
  }
  createRequest(actor,propertyId,title,details) { if(!this.canAccess(actor.id,propertyId))throw new Error("forbidden"); const id=randomUUID(),now=new Date().toISOString(); this.db.prepare("INSERT INTO requests VALUES(?,?,?,?,?,?,?)").run(id,propertyId,actor.id,title,details,"open",now); this.enqueue(`request:${id}:created`,"request.created",{requestId:id,propertyId}); this.audit(actor.id,propertyId,"create","request",id); return this.db.prepare("SELECT * FROM requests WHERE id=?").get(id) }
  requests(userId,propertyId) { if(!this.canAccess(userId,propertyId))throw new Error("forbidden"); return this.db.prepare("SELECT * FROM requests WHERE property_id=? ORDER BY created_at DESC").all(propertyId) }
  blobKey(propertyId, storageName) {
    if (this.blobs.adapter === "s3") return objectStorageKey(this.blobs.cfg.prefix, propertyId, storageName)
    return `${propertyId}/${storageName}`
  }
  insertFileRow(id, propertyId, requestId, actor, name, storageName, mime, size, clientVisible) {
    const now = new Date().toISOString()
    this.db.prepare("INSERT INTO files(id,property_id,request_id,uploaded_by,original_name,storage_name,mime,size,client_visible,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)").run(id,propertyId,requestId,actor.id,name,storageName,mime,size,clientVisible?1:0,now)
    this.audit(actor.id,propertyId,"upload","file",id,{name})
    return this.db.prepare("SELECT * FROM files WHERE id=?").get(id)
  }
  saveFile(actor,propertyId,name,mime,bytes,requestId=null,clientVisible=true) {
    if(!this.canAccess(actor.id,propertyId))throw new Error("forbidden")
    const id=randomUUID()
    const storageName=`${id}-${createHash('sha256').update(bytes).digest('hex').slice(0,16)}`
    const key=this.blobKey(propertyId, storageName)
    const put=this.blobs.put(key, Buffer.from(bytes), mime || "application/octet-stream", propertyId)
    if (put && typeof put.then === "function") throw new Error("async object store: use saveFileAsync")
    return this.insertFileRow(id,propertyId,requestId,actor,name,storageName,mime,bytes.length,clientVisible)
  }
  async saveFileAsync(actor,propertyId,name,mime,bytes,requestId=null,clientVisible=true) {
    if(!this.canAccess(actor.id,propertyId))throw new Error("forbidden")
    const id=randomUUID()
    const storageName=`${id}-${createHash('sha256').update(bytes).digest('hex').slice(0,16)}`
    const key=this.blobKey(propertyId, storageName)
    await Promise.resolve(this.blobs.put(key, Buffer.from(bytes), mime || "application/octet-stream", propertyId))
    return this.insertFileRow(id,propertyId,requestId,actor,name,storageName,mime,bytes.length,clientVisible)
  }
  readFileBytes(file) {
    const key=this.blobKey(file.property_id, file.storage_name)
    try {
      const got=this.blobs.get(key, file.property_id)
      if (got && typeof got.then === "function") throw new Error("async")
      return got
    } catch {
      const diskPath=path.join(this.uploadRoot,file.property_id,file.storage_name)
      if(!existsSync(diskPath))throw new Error("not found")
      return readFileSync(diskPath)
    }
  }
  file(actor,id) {
    const file=this.db.prepare("SELECT * FROM files WHERE id=?").get(id)
    if(!file||!this.canAccess(actor.id,file.property_id)||(actor.role!=="staff"&&Number(file.client_visible)!==1))throw new Error("not found")
    return {file,bytes:this.readFileBytes(file)}
  }
  async fileAsync(actor,id) {
    const file=this.db.prepare("SELECT * FROM files WHERE id=?").get(id)
    if(!file||!this.canAccess(actor.id,file.property_id)||(actor.role!=="staff"&&Number(file.client_visible)!==1))throw new Error("not found")
    const key=this.blobKey(file.property_id, file.storage_name)
    try {
      const bytes=await Promise.resolve(this.blobs.get(key, file.property_id))
      return {file,bytes:Buffer.from(bytes)}
    } catch {
      const diskPath=path.join(this.uploadRoot,file.property_id,file.storage_name)
      if(!existsSync(diskPath))throw new Error("not found")
      return {file,bytes:readFileSync(diskPath)}
    }
  }
  estimate(actor,propertyId,id,version) {
    if(!this.canAccess(actor.id,propertyId))throw new Error("forbidden")
    if (id && version != null) return this.db.prepare("SELECT * FROM estimates WHERE id=? AND version=? AND property_id=?").get(id,version,propertyId)
    return this.db.prepare("SELECT * FROM estimates WHERE property_id=? AND status='issued' ORDER BY issued_at DESC LIMIT 1").get(propertyId)
  }
  publishCustomerSafe(actor, fileId) {
    if (actor.role !== "staff") throw new Error("forbidden")
    const source = this.db.prepare("SELECT * FROM files WHERE id=?").get(fileId)
    if (!source || !this.canAccess(actor.id, source.property_id)) throw new Error("not found")
    const { bytes } = this.file(actor, fileId)
    const copy = this.saveFile(actor, source.property_id, source.original_name.replace(/(\.[^.]+)?$/, "-customer$1"), source.mime, bytes, source.request_id, true)
    this.db.prepare("UPDATE files SET approved=1, document_kind='customer_update' WHERE id=?").run(copy.id)
    this.audit(actor.id, source.property_id, "publish", "file", copy.id, { source: fileId })
    return this.db.prepare("SELECT * FROM files WHERE id=?").get(copy.id)
  }
  createServiceEvent(actor, propertyId, title, summary, requestId=null) {
    if (actor.role !== "staff" || !this.canAccess(actor.id, propertyId)) throw new Error("forbidden")
    const id = randomUUID()
    this.db.prepare("INSERT INTO service_events(id,property_id,occurred_on,title,summary,request_id) VALUES(?,?,?,?,?,?)").run(id, propertyId, new Date().toISOString().slice(0,10), title, summary, requestId)
    this.audit(actor.id, propertyId, "publish", "service_event", id, { requestId })
    return this.db.prepare("SELECT * FROM service_events WHERE id=?").get(id)
  }
  unpublishedFiles(actor, propertyId) {
    if (actor.role !== "staff" || !this.canAccess(actor.id, propertyId)) throw new Error("forbidden")
    return this.db.prepare("SELECT * FROM files WHERE property_id=? AND client_visible=0 ORDER BY created_at DESC").all(propertyId)
  }
  issueEstimate(actor,propertyId,id,version,amount,payload) {
    if(actor.role!=="staff"||!this.canAccess(actor.id,propertyId))throw new Error("forbidden")
    const lineItems = payload.line_items || [{ description: payload.label || "Issued estimate", quantity_decimal: "1", unit_price_minor: amount, line_total_minor: amount }]
    this.db.prepare("INSERT INTO estimates(id,property_id,version,status,amount,currency,payload,issued_at,created_by,content_sha256,line_items) VALUES(?,?,?,?,?,?,?,?,?,?,?)")
      .run(id,propertyId,version,"issued",amount,"USD",JSON.stringify(payload),new Date().toISOString(),actor.id,sha(payload),JSON.stringify(lineItems))
    this.audit(actor.id,propertyId,"publish","estimate",`${id}:${version}`)
    return this.estimate(actor,propertyId,id,version)
  }
  issuedEstimates(actor,propertyId) { if(!this.canAccess(actor.id,propertyId))throw new Error("forbidden"); return this.db.prepare("SELECT * FROM estimates WHERE property_id=? AND status='issued' ORDER BY issued_at DESC").all(propertyId) }
  decide(actor,propertyId,id,version,decision) {
    if(!["accepted","declined"].includes(decision)||!this.canAccess(actor.id,propertyId))throw new Error("forbidden")
    if(this.grantRole(actor.id,propertyId)!=="approver") throw new Error("forbidden")
    const est=this.estimate(actor,propertyId,id,version)
    if(!est||est.status!=="issued"){const err=new Error("estimate unavailable");err.status=404;throw err}
    const mapped = decision === "accepted" ? "approved" : "rejected"
    const contentSha = est.content_sha256 || sha(est.payload)
    const approvalId=randomUUID(),now=new Date().toISOString()
    const binding = this.db.prepare("SELECT * FROM approval_decisions WHERE subject_id=? AND subject_revision=?").get(id, version)
    if (binding) {
      const err = new Error("decision already recorded")
      err.status = 409
      throw err
    }
    this.db.prepare("INSERT INTO approvals VALUES(?,?,?,?,?,?,?,?,?)").run(approvalId,id,version,propertyId,actor.id,decision,est.amount,est.currency,now)
    this.db.prepare("INSERT INTO approval_decisions VALUES(?,?,?,?,?,?,?,?,?,?)").run(randomUUID(),TENANT,"estimate",id,version,contentSha,mapped,actor.id,now,`${id}:${version}:${actor.id}:${mapped}`)
    this.enqueue(`estimate:${id}:${version}:${actor.id}:${decision}`,"estimate.decision",{estimateId:id,version,propertyId,decision,amount:est.amount,currency:est.currency})
    this.audit(actor.id,propertyId,decision,"estimate",`${id}:${version}`)
    return this.db.prepare("SELECT * FROM approvals WHERE id=?").get(approvalId)
  }
  decideHashed(actor, propertyId, { subjectId, revision, sha256, decision, idempotencyKey }) {
    if (!this.canAccess(actor.id, propertyId) || this.grantRole(actor.id, propertyId) !== "approver") {
      const err = new Error("forbidden")
      err.status = 403
      throw err
    }
    const est = this.estimate(actor, propertyId, subjectId, revision)
    if (!est) {
      const err = new Error("stale revision")
      err.status = 409
      throw err
    }
    const expected = est.content_sha256 || sha(est.payload)
    if (expected !== sha256) {
      const err = new Error("hash mismatch")
      err.status = 409
      throw err
    }
    const dup = this.db.prepare("SELECT * FROM approval_decisions WHERE idempotency_key=?").get(idempotencyKey)
    if (dup) return { ...dup, duplicate: true }
    const decided = this.db.prepare("SELECT * FROM approval_decisions WHERE subject_id=? AND subject_revision=?").get(subjectId, revision)
    if (decided) {
      const err = new Error("stale revision")
      err.status = 409
      throw err
    }
    const id = randomUUID()
    this.db.prepare("INSERT INTO approval_decisions VALUES(?,?,?,?,?,?,?,?,?,?)").run(id, TENANT, "estimate", subjectId, revision, sha256, decision, actor.id, new Date().toISOString(), idempotencyKey)
    return this.db.prepare("SELECT * FROM approval_decisions WHERE id=?").get(id)
  }
  publishChangeOrder(actor, propertyId, baseId, baseRevision, scopeDelta, amountDeltaMinor) {
    if (actor.role !== "staff" || !this.canAccess(actor.id, propertyId)) throw new Error("forbidden")
    const base = this.estimate(actor, propertyId, baseId, baseRevision)
    if (!base) throw new Error("missing base estimate")
    const id = randomUUID()
    const payload = { scopeDelta, amountDeltaMinor, baseId, baseRevision }
    this.db.prepare("INSERT INTO change_order_revisions VALUES(?,?,?,?,?,?,?,?,?,?)").run(
      id, id, propertyId, baseId, baseRevision, 1, scopeDelta, amountDeltaMinor, "published", sha(payload),
    )
    return this.db.prepare("SELECT * FROM change_order_revisions WHERE id=?").get(id)
  }
  deriveBudget(actor, propertyId, baseId, baseRevision) {
    if (!this.canAccess(actor.id, propertyId)) throw new Error("forbidden")
    const base = this.estimate(actor, propertyId, baseId, baseRevision)
    const approved = this.db.prepare("SELECT * FROM approval_decisions WHERE subject_id=? AND subject_revision=? AND decision='approved'").get(baseId, baseRevision)
    if (!base || !approved) throw new Error("unapproved base")
    const deltas = this.db.prepare("SELECT amount_delta_minor FROM change_order_revisions WHERE property_id=? AND base_estimate_id=? AND publication_state='published'").all(propertyId, baseId)
    const total = base.amount + deltas.reduce((sum, row) => sum + row.amount_delta_minor, 0)
    const id = randomUUID()
    this.db.prepare("INSERT INTO budgets VALUES(?,?,?,?,?,?)").run(id, propertyId, baseId, baseRevision, total, new Date().toISOString())
    return this.db.prepare("SELECT * FROM budgets WHERE id=?").get(id)
  }
  publishInvoice(actor, propertyId, title, bytes, mime = "application/pdf") {
    if (actor.role !== "staff" || !this.canAccess(actor.id, propertyId)) throw new Error("forbidden")
    const file = this.saveFile(actor, propertyId, title, mime, bytes, null, true)
    this.db.prepare("UPDATE files SET document_kind='invoice', approved=1 WHERE id=?").run(file.id)
    this.audit(actor.id, propertyId, "publish", "invoice", file.id, { title })
    return this.db.prepare("SELECT id,original_name,mime,size,created_at,document_kind,approved FROM files WHERE id=?").get(file.id)
  }
  listFiles(propertyId, role) {
    return this.db.prepare("SELECT id,original_name,mime,size,created_at FROM files WHERE property_id=? AND (?='staff' OR client_visible=1) ORDER BY created_at DESC").all(propertyId, role)
  }
  invoices(actor, propertyId) {
    if (!this.canAccess(actor.id, propertyId)) throw new Error("forbidden")
    return this.db.prepare("SELECT id,original_name,mime,size,created_at FROM files WHERE property_id=? AND document_kind='invoice' AND approved=1 ORDER BY created_at DESC").all(propertyId)
  }
  propertySummary(actor, propertyId) {
    if (!this.canAccess(actor.id, propertyId)) throw new Error("forbidden")
    const property = this.db.prepare("SELECT name,location FROM properties WHERE id=?").get(propertyId)
    const requests = this.requests(actor.id, propertyId).map((r) => ({ title: r.title, status: r.status }))
    const estimates = this.issuedEstimates(actor, propertyId).map((e) => ({ version: e.version, amount: e.amount, currency: e.currency }))
    const milestones = this.db.prepare("SELECT title,planned_date,actual_date,delivery_state,readiness_state,published_summary FROM milestones WHERE property_id=? ORDER BY display_order").all(propertyId)
    return { property_label: property.name, location: property.location, requests, estimates, milestones }
  }
  auditRows() { return this.db.prepare("SELECT * FROM audit ORDER BY created_at DESC").all() }
  outboxRows() { return this.db.prepare("SELECT * FROM outbox ORDER BY created_at DESC").all() }
  close(){ this.db.close() }
}

let singleton
export function getPortalStore(){
  if (singleton) return singleton
  const uploadRoot = path.join(DEFAULT_ROOT, "uploads")
  singleton = new PortalStore(path.join(DEFAULT_ROOT, "portal.sqlite"), uploadRoot, createObjectStore(uploadRoot))
  return singleton
}
