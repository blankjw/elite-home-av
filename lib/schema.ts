import { SITE_URL } from "@/lib/seo"
import { SOCIAL_URLS } from "@/lib/site"

export const AREA_SERVED = [
  { "@type": "City", name: "Lumberton, Texas" },
  { "@type": "City", name: "Beaumont, Texas" },
  { "@type": "AdministrativeArea", name: "Southeast Texas" },
] as const

const PROVIDER = {
  "@type": "LocalBusiness",
  name: "Elite Home AV LLC",
  sameAs: SOCIAL_URLS,
  telephone: "+14097909117",
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
    publisher: { "@type": "LocalBusiness", name: "Elite Home AV LLC", url: SITE_URL, sameAs: SOCIAL_URLS },
  }
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed = AREA_SERVED,
}: {
  name: string
  description: string
  path: string
  areaServed?: readonly { "@type": string; name: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: `${SITE_URL}${path}`,
    provider: PROVIDER,
    areaServed,
  }
}

export function localBusinessSchema({
  description,
  areaServed = AREA_SERVED,
}: {
  description: string
  areaServed?: readonly { "@type": string; name: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Elite Home AV LLC",
    url: SITE_URL,
    sameAs: SOCIAL_URLS,
    telephone: "+14097909117",
    email: "john@elitehomeav.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lumberton",
      addressRegion: "TX",
      postalCode: "77657",
      addressCountry: "US",
    },
    areaServed,
    description,
  }
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
