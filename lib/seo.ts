import type { Metadata } from "next"

export const SITE_URL = "https://www.elitehomeav.com"

export const OG_IMAGE = {
  url: "/og-elite.jpg",
  width: 1200,
  height: 630,
  alt: "Elite Home AV - integrated technology for homes and businesses in Southeast Texas",
} as const

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Elite Home AV",
      locale: "en_US",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
