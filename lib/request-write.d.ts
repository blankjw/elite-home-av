import type { PortalUser } from "./portal-store"
export function persistPortalRequest(actor: PortalUser, propertyId: string, title: string, details: string): Promise<any>
