import "server-only"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import type { PortalUser } from "./portal-store"
import { getRepo } from "./repo"
import { createSessionValue, parseSessionValue } from "./session-token"

const COOKIE="elite_demo_session"
const demoEnabled=()=>process.env.DEMO_AUTH_ENABLED !== "false" && process.env.NODE_ENV !== "production" || process.env.DEMO_AUTH_ENABLED === "true"
export { createSessionValue, parseSessionValue }
export async function session(){
  const parsed=parseSessionValue((await cookies()).get(COOKIE)?.value)
  if(!parsed)return null
  const store=await getRepo()
  const user=await store.user(parsed.userId) as PortalUser|undefined
  if(!user||!(await store.canAccess(user.id,parsed.propertyId)))return null
  return {user,propertyId:parsed.propertyId,properties:await store.properties(user.id)}
}
export async function requireSession(role?:"staff"){const value=await session();if(!value)redirect("/login");if(role&&value.user.role!==role)redirect("/portal?denied=staff");return value}
export async function setSession(userId:string,propertyId:string){
  const secure = process.env.COOKIE_SECURE === "true" || (process.env.NODE_ENV === "production" && process.env.DEMO_AUTH_ENABLED !== "true")
  ;(await cookies()).set(COOKIE,createSessionValue(userId,propertyId),{httpOnly:true,sameSite:"lax",secure,path:"/",maxAge:8*60*60})
}
export async function clearSession(){(await cookies()).delete(COOKIE)}
export function allowDemoAuth(){return demoEnabled()}
