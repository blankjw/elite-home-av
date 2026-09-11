import { createHmac, timingSafeEqual } from "node:crypto"

const secret = () => process.env.PORTAL_SESSION_SECRET || "review-preview-only-change-me-before-deploy"

function sign(value) {
  return createHmac("sha256", secret()).update(value).digest("base64url")
}

export function createSessionValue(userId, propertyId, now = Date.now()) {
  const payload = Buffer.from(JSON.stringify({ userId, propertyId, exp: now + 8 * 60 * 60 * 1000 })).toString("base64url")
  return `${payload}.${sign(payload)}`
}

export function parseSessionValue(value) {
  if (!value) return null
  const [payload, sig] = value.split(".")
  if (!payload || !sig) return null
  const expected = sign(payload)
  if (sig.length !== expected.length || !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString())
    return data.exp > Date.now() ? data : null
  } catch {
    return null
  }
}
