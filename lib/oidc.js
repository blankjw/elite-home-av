import { createHash, randomBytes } from "node:crypto"
import { compactVerify, importJWK, SignJWT } from "jose"

function b64url(buf) {
  return Buffer.from(buf).toString("base64url")
}

export function generatePkce() {
  const verifier = b64url(randomBytes(32))
  const challenge = b64url(createHash("sha256").update(verifier).digest())
  return { verifier, challenge, method: "S256" }
}

export async function discoverOidc(issuer, fetchImpl = fetch) {
  const base = issuer.endsWith("/") ? issuer : `${issuer}/`
  const res = await fetchImpl(new URL(".well-known/openid-configuration", base))
  if (!res.ok) throw new Error(`oidc discovery ${res.status}`)
  const doc = await res.json()
  if (!doc.authorization_endpoint || !doc.token_endpoint || !doc.jwks_uri) throw new Error("oidc discovery missing endpoints")
  return doc
}

export function createAuthorizationRequest({ issuer, clientId, redirectUri, audience, authorizationEndpoint }) {
  const pkce = generatePkce()
  const state = b64url(randomBytes(16))
  const nonce = b64url(randomBytes(16))
  const url = new URL(authorizationEndpoint || new URL("protocol/openid-connect/auth", issuer.endsWith("/") ? issuer : `${issuer}/`).toString())
  url.searchParams.set("response_type", "code")
  url.searchParams.set("client_id", clientId)
  url.searchParams.set("redirect_uri", redirectUri)
  url.searchParams.set("scope", "openid email")
  url.searchParams.set("state", state)
  url.searchParams.set("nonce", nonce)
  url.searchParams.set("code_challenge", pkce.challenge)
  url.searchParams.set("code_challenge_method", "S256")
  if (audience) url.searchParams.set("audience", audience)
  return { url: url.toString(), state, nonce, pkce }
}

export async function verifyIdToken(token, { issuer, audience, nonce, jwks }) {
  const [headerB64] = token.split(".")
  const header = JSON.parse(Buffer.from(headerB64, "base64url").toString())
  const jwk = jwks.keys.find((k) => k.kid === header.kid)
  if (!jwk) throw new Error("unknown kid")
  const key = await importJWK(jwk, jwk.alg || "RS256")
  const { payload } = await compactVerify(token, key)
  const claims = JSON.parse(new TextDecoder().decode(payload))
  if (claims.iss !== issuer) throw new Error("issuer mismatch")
  const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud]
  if (!aud.includes(audience)) throw new Error("audience mismatch")
  if (claims.nonce !== nonce) throw new Error("nonce mismatch")
  if (!claims.exp || claims.exp * 1000 < Date.now()) throw new Error("expired")
  if (!claims.sub) throw new Error("missing sub")
  return claims
}

export async function exchangeAuthorizationCode({ tokenEndpoint, code, redirectUri, clientId, clientSecret, codeVerifier, fetchImpl = fetch }) {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier,
  })
  const headers = { "content-type": "application/x-www-form-urlencoded" }
  if (clientSecret) {
    headers.authorization = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`
  }
  const tokenRes = await fetchImpl(tokenEndpoint, { method: "POST", headers, body })
  if (!tokenRes.ok) throw new Error("token exchange failed")
  return tokenRes.json()
}

export async function completeCallback({ query, expectedState, expectedNonce, issuer, clientId, audience, jwks, exchange }) {
  if (!query.code) throw new Error("missing code")
  if (query.state !== expectedState) throw new Error("state mismatch")
  const tokens = await exchange(query.code)
  const claims = await verifyIdToken(tokens.id_token, { issuer, audience: audience || clientId, nonce: expectedNonce, jwks })
  return { claims, tokens }
}

export async function signTestIdToken(privateJwk, claims) {
  return new SignJWT(claims).setProtectedHeader({ alg: "RS256", kid: privateJwk.kid }).sign(await importJWK(privateJwk, "RS256"))
}
