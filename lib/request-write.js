import { getRepo } from "./repo.js"

export async function persistPortalRequest(actor, propertyId, title, details) {
  return (await getRepo()).createRequest(actor, propertyId, title, details)
}
