export function handlePortalUpload(store: any, session: any, file: { name: string; type?: string; bytes: Buffer; requestId?: string | null; clientVisible?: boolean }): Promise<any>
export function handlePortalDownload(store: any, session: any, id: string): Promise<{ file: any; bytes: Buffer }>
