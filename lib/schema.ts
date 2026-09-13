import { SITE_URL } from "@/lib/seo"

export const AREA_SERVED = [
  { "@type": "City", name: "Lumberton, Texas" },
  { "@type": "City", name: "Beaumont, Texas" },
  { "@type": "AdministrativeArea", name: "Southeast Texas" },
] as const

const PROVIDER = {
  "@type": "LocalBusiness",
  name: "Elite Home AV LLC",
  telephone: "+1-409-790-7889",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lumberton",
    addressRegion: "TX",
    postalCode: "77657",
    addressCountry: "US",
  },
} as const

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Elite Home AV",
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: { "@type": "LocalBusiness", name: "Elite Home AV LLC", url: SITE_URL },
  }
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: `${SITE_URL}${path}`,
    provider: PROVIDER,
    areaServed: AREA_SERVED,
  }
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  }
}
