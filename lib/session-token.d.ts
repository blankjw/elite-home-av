export function createSessionValue(userId: string, propertyId: string, now?: number): string
export function parseSessionValue(value?: string): { userId: string, propertyId: string, exp: number } | null
