export const BRAND = {
  navy: "#0B1526",
  navyLight: "#152942",
  silver: "#B8C3CF",
  graphite: "#252D37",
  softWhite: "#F7F9FC",
  blue: "#245DC1",
} as const

export const CONTACT = {
  phone: "(409) 790-9117",
  phoneHref: "tel:+14097909117",
  email: "john@elitehomeav.com",
  emailHref: "mailto:john@elitehomeav.com",
  location: "Lumberton, TX 77657",
  area: "Southeast Texas",
} as const

export const FACEBOOK_URL = "https://www.facebook.com/elitehomeav"

export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/elitehomeavllc" },
  { label: "Instagram", href: "https://www.instagram.com/elitehomeavllc/" },
  { label: "Facebook", href: FACEBOOK_URL },
  { label: "TikTok", href: "https://www.tiktok.com/@elitehomeavllc" },
  { label: "YouTube", href: "https://www.youtube.com/@EliteHomeAVllc" },
] as const

export const SOCIAL_URLS = SOCIAL_LINKS.map(({ href }) => href)

export const NAV_LINKS = [
  ["Solutions", "/services"],
  ["Our Work", "/gallery"],
  ["ELITE Care", "/care"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const
