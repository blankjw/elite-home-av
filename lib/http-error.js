const PUBLIC = {
  403: "forbidden",
  404: "not found",
  409: "conflict",
  500: "unable to record",
  503: "unavailable",
}

export function attachStatus(err, status) {
  err.status = status
  return err
}

export function statusFromError(error) {
  if (error && typeof error.status === "number") return error.status
  const message = error instanceof Error ? error.message : ""
  if (message === "forbidden") return 403
  if (message === "estimate unavailable" || message === "not found") return 404
  if (message === "decision already recorded" || message === "hash mismatch" || message === "stale revision") return 409
  if (message === "unavailable") return 503
  return 500
}

export function publicDecisionError(error) {
  const status = statusFromError(error)
  return { status, error: PUBLIC[status] || PUBLIC[500] }
}

export function durableApprovals(env = process.env, adapter) {
  return Boolean(env.DATABASE_URL) && adapter === "postgres"
}
