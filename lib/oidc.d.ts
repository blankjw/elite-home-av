export function generatePkce(): { verifier: string, challenge: string, method: string }
export function discoverOidc(issuer: string, fetchImpl?: typeof fetch): Promise<any>
export function createAuthorizationRequest(input: { issuer: string, clientId: string, redirectUri: string, audience?: string, authorizationEndpoint?: string }): { url: string, state: string, nonce: string, pkce: { verifier: string, challenge: string, method: string } }
export function exchangeAuthorizationCode(input: any): Promise<any>
export function verifyIdToken(token: string, input: { issuer: string, audience: string, nonce: string, jwks: { keys: any[] } }): Promise<any>
export function completeCallback(input: any): Promise<{ claims: any, tokens: any }>
export function signTestIdToken(privateJwk: any, claims: any): Promise<string>
