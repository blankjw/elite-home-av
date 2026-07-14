import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const bebasNeue = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-bebas'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elitehomeav.com'),
  title: 'Elite Home AV LLC | Integrated Technology for Homes & Businesses',
  description: 'Home audio, theater, lighting, surveillance, access control, automation, and networking for residential and commercial spaces in Southeast Texas.',
  keywords: ['home theater', 'home audio', 'lighting control', 'surveillance', 'access control', 'automation', 'networking', 'Lumberton TX', 'Southeast Texas'],
  alternates: { canonical: '/' },
  openGraph: { title: 'Elite Home AV | Integrated Technology for Homes & Businesses', description: 'Audio, theater, lighting, surveillance, access control, automation, and networking in Southeast Texas.', url: '/', siteName: 'Elite Home AV', locale: 'en_US', type: 'website' },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Elite Home AV LLC', url: 'https://www.elitehomeav.com', telephone: '+1-409-790-7889', email: 'john@elitehomeav.com', address: { '@type': 'PostalAddress', addressLocality: 'Lumberton', addressRegion: 'TX', postalCode: '77657', addressCountry: 'US' }, areaServed: { '@type': 'AdministrativeArea', name: 'Southeast Texas' }, description: 'Integrated audio, theater, lighting, surveillance, access control, automation, and networking for homes and businesses.' }) }} />
        <Header />
        <main className="min-h-screen bg-background">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
