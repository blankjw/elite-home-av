import { DatabaseSync } from "node:sqlite"
import { mkdirSync } from "node:fs"
import { randomUUID } from "node:crypto"
import path from "node:path"
import { dataRoot } from "./data-root.js"

const DEFAULT_ROOT = dataRoot()

export class InquiryStore {
  constructor(filename = path.join(DEFAULT_ROOT, "inquiries.sqlite")) {
    if (filename !== ":memory:") mkdirSync(path.dirname(filename), { recursive: true })
    this.db = new DatabaseSync(filename)
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS inquiries(
        id TEXT PRIMARY KEY,
        intent TEXT NOT NULL,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        service TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'saved_local',
        created_at TEXT NOT NULL
      );
    `)
  }
  create(row) {
    const intent = row.intent === "existing_service" ? "existing_service" : "new_project"
    const id = randomUUID()
    const now = new Date().toISOString()
    this.db.prepare("INSERT INTO inquiries VALUES(?,?,?,?,?,?,?,?,?)").run(
      id, intent, String(row.name || "").trim(), String(row.phone || "").trim(),
      String(row.email || "").trim() || null, String(row.service || "").trim(),
      String(row.message || "").trim(), "saved_local", now,
    )
    return this.db.prepare("SELECT * FROM inquiries WHERE id=?").get(id)
  }
  get(id) { return this.db.prepare("SELECT * FROM inquiries WHERE id=?").get(id) }
  close() { this.db.close() }
}

let singleton
export function getInquiryStore() { return singleton ??= new InquiryStore() }
