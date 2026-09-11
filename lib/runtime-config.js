const REQUIRED = {
  oidc: ["OIDC_ISSUER", "OIDC_CLIENT_ID", "OIDC_CLIENT_SECRET", "OIDC_REDIRECT_URI"],
  database: ["DATABASE_URL"],
  objectStorage: ["S3_BUCKET", "S3_REGION"],
}

export function parseDatabaseUrl(url) {
  if (!url) return { ok: false, reason: "DATABASE_URL missing" }
  let parsed
  try { parsed = new URL(url) } catch { return { ok: false, reason: "DATABASE_URL is not a URL" } }
  if (!["postgres:", "postgresql:"].includes(parsed.protocol)) return { ok: false, reason: "DATABASE_URL must be postgres" }
  if (!parsed.hostname || !parsed.pathname || parsed.pathname === "/") return { ok: false, reason: "DATABASE_URL needs host and database name" }
  const ssl = parsed.searchParams.get("sslmode")
  return { ok: true, host: parsed.hostname, database: parsed.pathname.slice(1), sslmode: ssl || "require", adapter: "postgres" }
}

export function parseObjectStorage(env = process.env) {
  const bucket = env.S3_BUCKET, region = env.S3_REGION
  if (!bucket || !region) return { ok: false, reason: "S3_BUCKET and S3_REGION required" }
  const endpoint = env.S3_ENDPOINT || `https://s3.${region}.amazonaws.com`
  return { ok: true, bucket, region, endpoint, prefix: env.S3_PREFIX || "elite-portal/", adapter: "s3" }
}

export function parseAuthProvider(env = process.env) {
  const provider = env.AUTH_PROVIDER || (env.NODE_ENV === "production" ? "" : "demo")
  if (provider === "demo") {
    if (env.NODE_ENV === "production" && env.DEMO_AUTH_ENABLED !== "true") {
      return { ok: false, reason: "demo auth forbidden in production unless DEMO_AUTH_ENABLED=true for isolated review" }
    }
    return { ok: true, adapter: "demo", inviteOnly: true }
  }
  if (provider === "oidc") {
    const missing = REQUIRED.oidc.filter((key) => !env[key])
    if (missing.length) return { ok: false, reason: `OIDC missing ${missing.join(",")}` }
    try { new URL(env.OIDC_ISSUER); new URL(env.OIDC_REDIRECT_URI) } catch { return { ok: false, reason: "OIDC URLs invalid" } }
    return { ok: true, adapter: "oidc", issuer: env.OIDC_ISSUER, redirect: env.OIDC_REDIRECT_URI }
  }
  return { ok: false, reason: "AUTH_PROVIDER must be oidc or demo" }
}

export function productionReadiness(env = process.env) {
  const auth = parseAuthProvider(env)
  const database = env.DATABASE_URL ? parseDatabaseUrl(env.DATABASE_URL) : { ok: false, reason: "DATABASE_URL missing" }
  const objectStorage = parseObjectStorage(env)
  const session = Boolean(env.PORTAL_SESSION_SECRET && env.PORTAL_SESSION_SECRET.length >= 32)
  return {
    auth,
    database,
    objectStorage,
    sessionSecret: session ? { ok: true } : { ok: false, reason: "PORTAL_SESSION_SECRET >= 32 chars" },
    clickupWrites: { ok: false, reason: "write_target_list_id null until Main allowlists candidate list" },
    ready: auth.ok && database.ok && objectStorage.ok && session && env.AUTH_PROVIDER === "oidc",
  }
}

export function assertReviewOrConfigured(env = process.env) {
  if (env.NODE_ENV !== "production") return { ok: true, mode: "review-sqlite" }
  const report = productionReadiness(env)
  if (!report.ready && env.ELITE_ALLOW_REVIEW_PRODUCTION === "true") return { ok: true, mode: "review-preview", report }
  return report
}
