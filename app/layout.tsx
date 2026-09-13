import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SiteChrome } from '@/components/site-chrome'
import { Inter, Manrope } from 'next/font/google'
import { JsonLd } from '@/components/json-ld'
import { blockSearchIndex } from '@/lib/seo-mode'
import { OG_IMAGE, SITE_URL } from '@/lib/seo'
import { websiteSchema } from '@/lib/schema'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

const SITE_DESCRIPTION =
  'Elite Home AV plans audio, theater, lighting, surveillance, automation, and networking for homes and businesses in Lumberton, Beaumont, and Southeast Texas.'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Elite Home AV LLC',
  url: SITE_URL,
  telephone: '+1-409-790-7889',
  email: 'john@elitehomeav.com',
  image: `${SITE_URL}${OG_IMAGE.url}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lumberton',
    addressRegion: 'TX',
    postalCode: '77657',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Lumberton, Texas' },
    { '@type': 'City', name: 'Beaumont, Texas' },
    { '@type': 'AdministrativeArea', name: 'Southeast Texas' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-409-790-7889',
    contactType: 'sales and service',
    areaServed: 'Southeast Texas',
  },
  description:
    'Integrated audio, theater, lighting, surveillance, access control, automation, and networking for homes and businesses in Southeast Texas.',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Integrated Home Technology in Southeast Texas | ELITE',
  description: SITE_DESCRIPTION,
  keywords: ['home theater', 'home audio', 'lighting control', 'surveillance', 'access control', 'automation', 'networking', 'Lumberton TX', 'Southeast Texas'],
  alternates: { canonical: '/' },
  robots: blockSearchIndex() ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    title: 'Elite Home AV | Integrated Technology for Homes & Businesses',
    description:
      'Thoughtfully integrated spaces, straightforward everyday control, and support beyond installation. Based in Lumberton, serving Southeast Texas.',
    url: '/',
    siteName: 'Elite Home AV',
    locale: 'en_US',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Home AV | Integrated Technology for Homes & Businesses',
    description:
      'Thoughtfully integrated spaces, straightforward everyday control, and support beyond installation. Serving Southeast Texas.',
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1526',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <JsonLd data={[localBusiness, websiteSchema()]} />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  )
}
