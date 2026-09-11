import { MAX_OBJECT_BYTES } from "./object-store.js"

export async function handlePortalUpload(store, session, { name, type, bytes, requestId = null, clientVisible = false }) {
  if (!session?.user) throw Object.assign(new Error("unauthorized"), { status: 401 })
  if (!bytes?.length) throw Object.assign(new Error("file required"), { status: 400 })
  if (bytes.length > MAX_OBJECT_BYTES) throw Object.assign(new Error("10MB limit"), { status: 413 })
  return store.saveFileAsync(session.user, session.propertyId, name, type || "application/octet-stream", Buffer.from(bytes), requestId, clientVisible)
}

export async function handlePortalDownload(store, session, id) {
  if (!session?.user) throw Object.assign(new Error("unauthorized"), { status: 401 })
  return store.fileAsync(session.user, id)
}
