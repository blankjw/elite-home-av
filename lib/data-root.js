import path from "node:path"

export function dataRoot(env = process.env) {
  if (env.ELITE_DATA_ROOT) {
    return path.isAbsolute(env.ELITE_DATA_ROOT)
      ? env.ELITE_DATA_ROOT
      : path.resolve(/* turbopackIgnore: true */ process.cwd(), env.ELITE_DATA_ROOT)
  }
  if (env.VERCEL) return "/tmp/elite-data"
  return path.join(/* turbopackIgnore: true */ process.cwd(), ".data")
}
