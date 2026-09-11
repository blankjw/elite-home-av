import { mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs"
import path from "node:path"
import { parseObjectStorage } from "./runtime-config.js"
import { createS3Client, createS3Store } from "./s3-store.js"

export const MAX_OBJECT_BYTES = 10 * 1024 * 1024
export const ALLOWED_OBJECT_TYPES = new Set([
  "application/octet-stream",
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "text/plain",
])

export function assertObjectPayload(bytes, contentType = "application/octet-stream") {
  if (!Buffer.isBuffer(bytes) && !(bytes instanceof Uint8Array)) throw new Error("bytes required")
  if (bytes.length === 0) throw new Error("empty object")
  if (bytes.length > MAX_OBJECT_BYTES) throw new Error("10MB limit")
  if (!ALLOWED_OBJECT_TYPES.has(contentType)) throw new Error("type not allowed")
}

export function objectStorageKey(prefix, propertyId, storageName) {
  if (!/^[a-zA-Z0-9_-]+$/.test(propertyId)) throw new Error("unsafe property id")
  if (!/^[a-zA-Z0-9._-]+$/.test(storageName)) throw new Error("unsafe storage name")
  const base = prefix.endsWith("/") ? prefix : `${prefix}/`
  return `${base}${propertyId}/${storageName}`
}

export function assertOwnedKey(key, prefix, propertyId) {
  if (key.includes("..") || key.startsWith("/") || key.includes("\\")) throw new Error("unsafe key")
  const expectedPrefix = objectStorageKey(prefix, propertyId, "x").slice(0, -1)
  if (!key.startsWith(expectedPrefix)) throw new Error("cross-tenant key")
}

export class LocalObjectStore {
  constructor(root) {
    this.root = root
    this.adapter = "local"
    mkdirSync(root, { recursive: true })
  }
  put(key, bytes, contentType = "application/octet-stream", _propertyId) {
    assertObjectPayload(bytes, contentType)
    if (key.includes("..") || path.isAbsolute(key)) throw new Error("unsafe key")
    const full = path.join(this.root, key)
    mkdirSync(path.dirname(full), { recursive: true })
    writeFileSync(full, bytes, { mode: 0o600 })
    return { adapter: "local", key, private: true }
  }
  get(key, _propertyId) {
    if (key.includes("..") || path.isAbsolute(key)) throw new Error("unsafe key")
    return readFileSync(path.join(this.root, key))
  }
  delete(key, _propertyId) {
    if (key.includes("..") || path.isAbsolute(key)) throw new Error("unsafe key")
    unlinkSync(path.join(this.root, key))
    return { adapter: "local", key, deleted: true }
  }
}

export class S3ObjectStore {
  constructor(env = process.env, client = null) {
    const parsed = parseObjectStorage(env)
    if (!parsed.ok) throw new Error(parsed.reason)
    const accessKeyId = env.AWS_ACCESS_KEY_ID || env.S3_ACCESS_KEY_ID
    const secretAccessKey = env.AWS_SECRET_ACCESS_KEY || env.S3_SECRET_ACCESS_KEY
    if (!client && (!accessKeyId || !secretAccessKey)) {
      throw new Error("S3 identity incomplete: region, accessKeyId, secretAccessKey required")
    }
    this.cfg = parsed
    this.adapter = "s3"
    this.client = client || createS3Client({
      region: parsed.region,
      endpoint: env.S3_ENDPOINT || parsed.endpoint,
      accessKeyId,
      secretAccessKey,
      sessionToken: env.AWS_SESSION_TOKEN || env.S3_SESSION_TOKEN,
      forcePathStyle: Boolean(env.S3_ENDPOINT),
    })
    this.inner = createS3Store(this.client, parsed.bucket)
  }
  objectUrl(key) {
    return `${this.cfg.endpoint}/${this.cfg.bucket}/${this.cfg.prefix}${key}`
  }
  async put(key, bytes, contentType = "application/octet-stream", propertyId) {
    assertObjectPayload(bytes, contentType)
    assertOwnedKey(key, this.cfg.prefix, propertyId)
    return this.inner.put(key, bytes, contentType)
  }
  async get(key, propertyId) {
    assertOwnedKey(key, this.cfg.prefix, propertyId)
    return this.inner.get(key)
  }
  async delete(key, propertyId) {
    assertOwnedKey(key, this.cfg.prefix, propertyId)
    return this.inner.delete(key)
  }
}

export function createObjectStore(root, env = process.env) {
  const review = env.ELITE_ALLOW_REVIEW_PRODUCTION === "true" || env.DEMO_AUTH_ENABLED === "true"
  if (env.NODE_ENV === "production" && !review) {
    if (!env.S3_BUCKET || !env.S3_REGION) throw new Error("OBJECT_STORAGE missing S3_BUCKET/S3_REGION")
    return new S3ObjectStore(env)
  }
  return new LocalObjectStore(root)
}
