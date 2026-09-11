export type Membership = { userId: string; propertyId: string; status: string }
export type PortalFile = { propertyId: string; clientVisible: boolean; name?: string }
export type Actor = { propertyId: string; role: 'customer' | 'staff' }
export type Estimate = { id: string; version: number; amount: number; currency: string; status: string; issuedAt?: string; [key: string]: unknown }
export function canAccessProperty(memberships: Membership[], userId: string, propertyId: string): boolean
export function visibleFiles(files: PortalFile[], actor: Actor): PortalFile[]
export function issueEstimate<T extends Estimate>(estimate: T): Readonly<T>
export function updateEstimate<T extends Estimate>(estimate: T, patch: Partial<T>): T
export function recordEstimateDecision(estimate: Estimate, decision: 'accepted' | 'declined', actorId: string, at?: string): Readonly<Record<string, unknown>>
export function enqueueOnce<T extends { idempotencyKey: string }>(outbox: T[], event: T): { outbox: T[]; item: T; duplicate: boolean }
export function markAttempt<T extends { attempts: number }>(item: T, confirmed: boolean, error?: string): T & { status: string; lastError?: string }
