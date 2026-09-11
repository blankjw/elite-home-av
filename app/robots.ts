import type { MetadataRoute } from "next"
import { blockSearchIndex } from "@/lib/seo-mode"

export default function robots(): MetadataRoute.Robots {
  if (blockSearchIndex()) {
    return { rules: { userAgent: "*", disallow: "/" } }
  }
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://www.elitehomeav.com/sitemap.xml" }
}
