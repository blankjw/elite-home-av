/** Domain primitives used by the review preview and future ClickUp adapter. */

export function canAccessProperty(memberships, userId, propertyId) {
  return memberships.some((m) => m.userId === userId && m.propertyId === propertyId && m.status === "active")
}

export function visibleFiles(files, actor) {
  return files.filter((file) => file.propertyId === actor.propertyId && (actor.role === "staff" || file.clientVisible === true))
}

export function issueEstimate(estimate) {
  return Object.freeze({ ...estimate, status: "issued", issuedAt: estimate.issuedAt || new Date().toISOString() })
}

export function updateEstimate(estimate, patch) {
  if (estimate.status === "issued") throw new Error("Issued estimates are immutable; create a new version")
  return { ...estimate, ...patch }
}

export function recordEstimateDecision(estimate, decision, actorId, at = new Date().toISOString()) {
  if (estimate.status !== "issued") throw new Error("Only issued estimates can be decided")
  if (!['accepted', 'declined'].includes(decision)) throw new Error("Invalid decision")
  return Object.freeze({ estimateId: estimate.id, version: estimate.version, amount: estimate.amount, currency: estimate.currency, decision, actorId, at })
}

export function enqueueOnce(outbox, event) {
  const existing = outbox.find((item) => item.idempotencyKey === event.idempotencyKey)
  if (existing) return { outbox, item: existing, duplicate: true }
  const item = { ...event, status: "pending", attempts: 0 }
  return { outbox: [...outbox, item], item, duplicate: false }
}

export function markAttempt(item, confirmed, error) {
  return { ...item, attempts: item.attempts + 1, status: confirmed ? "confirmed" : "pending", lastError: confirmed ? undefined : error }
}
