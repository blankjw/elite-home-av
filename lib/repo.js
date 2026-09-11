import { getPortalStore } from "./portal-store.js"
import { getInquiryStore } from "./inquiry-store.js"
import { createPostgresStore } from "./postgres-store.js"

export function allowSqliteFallback(env = process.env) {
  return env.DEMO_AUTH_ENABLED === "true" || env.NODE_ENV !== "production"
}

function asyncify(store, inquiries) {
  return {
    adapter: "sqlite",
    async userByEmail(email) { return store.userByEmail(email) },
    async user(id) { return store.user(id) },
    async properties(userId) { return store.properties(userId) },
    async canAccess(userId, propertyId) { return store.canAccess(userId, propertyId) },
    async listFiles(propertyId, role) { return store.listFiles(propertyId, role) },
    async createInquiry(row) { return inquiries.create(row) },
    async getInquiry(id) { return inquiries.get(id) },
    async createRequest(actor, propertyId, title, details) { return store.createRequest(actor, propertyId, title, details) },
    async requests(userId, propertyId) { return store.requests(userId, propertyId) },
    async saveFileAsync(...args) { return store.saveFileAsync(...args) },
    async fileAsync(...args) { return store.fileAsync(...args) },
    async estimate(...args) { return store.estimate(...args) },
    async issueEstimate(...args) { return store.issueEstimate(...args) },
    async issuedEstimates(...args) { return store.issuedEstimates(...args) },
    async decide() {
      const err = new Error("unavailable")
      err.status = 503
      throw err
    },
    async propertySummary(...args) { return store.propertySummary(...args) },
    async serviceEvents(id) { return store.serviceEvents(id) },
    async publishedMilestones(id) { return store.publishedMilestones(id) },
    async invoices(...args) { return store.invoices(...args) },
    async publishInvoice(...args) { return store.publishInvoice(...args) },
    async publishCustomerSafe(...args) { return store.publishCustomerSafe(...args) },
    async createServiceEvent(...args) { return store.createServiceEvent(...args) },
    async outboxRows() { return store.outboxRows() },
    async unpublishedFiles(...args) { return store.unpublishedFiles(...args) },
    async close() { store.close(); inquiries.close() },
  }
}

let pgPromise
let sqlitePromise

export async function getRepo(env = process.env) {
  if (env.DATABASE_URL) {
    pgPromise ??= createPostgresStore(env.DATABASE_URL, { env, seedDemo: env.DEMO_AUTH_ENABLED === "true" }).then((store) => {
      store.adapter = "postgres"
      return store
    })
    return pgPromise
  }
  if (!allowSqliteFallback(env)) throw new Error("DATABASE_URL required outside explicit demo")
  sqlitePromise ??= Promise.resolve(asyncify(getPortalStore(), getInquiryStore()))
  return sqlitePromise
}

export function resetRepoForTests() {
  pgPromise = null
  sqlitePromise = null
}
