import { readFileSync } from "node:fs"
import path from "node:path"

const DEFAULT_MAPPING = path.join(process.cwd(), "config/elite-portal-clickup-bounded-mapping-20260910.json")
const CRM_ACTIVE = "901420208001"

export function loadPortalClickUpMapping(file = DEFAULT_MAPPING) {
  return JSON.parse(readFileSync(file, "utf8"))
}

export function resolveWriteTarget(mapping, action) {
  const target = mapping?.action_mapping?.[action]?.clickup_write_target ?? null
  if (!target) {
    throw new Error(`ClickUp write blocked: no mapping for ${action}`)
  }
  if (target === CRM_ACTIVE || target?.list_id === CRM_ACTIVE) {
    throw new Error("ClickUp write blocked: CRM Active is never an intake or write target")
  }
  return target
}

export function dispatchClickUpWrite(mapping, action) {
  resolveWriteTarget(mapping, action)
  throw new Error("ClickUp live writes disabled")
}

export function resolveOperationalStatus(contract, name) {
  const row = contract?.required_operational?.[name]
  if (!row || !row.id || row.inherited_crm && ["submitted", "triaged", "resolved"].includes(name)) {
    throw new Error(`ClickUp status blocked: ${name} has no explicit operational id`)
  }
  if (["submitted", "triaged", "resolved"].includes(name) && !row.id) {
    throw new Error(`ClickUp status blocked: ${name} missing`)
  }
  return row.id
}
