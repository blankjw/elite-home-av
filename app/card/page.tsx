import type { Metadata } from 'next'
import Image from 'next/image'
import { Globe, Mail, MapPin, MessageSquare, Phone, UserPlus } from 'lucide-react'
import { CARD } from '@/lib/card'
import { cardQrSvg, getLiveCardUrl } from '@/lib/qr'

export const metadata: Metadata = {
  title: 'John Blank | Elite Home AV',
  description:
    'Digital business card for John Blank, Owner of Elite Home AV LLC in Lumberton, TX. Call or text (409) 790-7889.',
  alternates: { canonical: CARD.cardUrl },
  openGraph: {
    title: 'John Blank | Elite Home AV',
    description: 'Owner, Elite Home AV LLC — Lumberton, TX · Southeast Texas',
    url: '/card',
    siteName: 'Elite Home AV',
    locale: 'en_US',
    type: 'profile',
  },
}

const NAVY = '#071525'
const GOLD = '#E6C98E'
const GOLD_DEEP = '#B7924B'
const IVORY = '#F1F0EB'

export default async function CardPage() {
  const cardUrl = await getLiveCardUrl()
  const qrSvg = await cardQrSvg(cardUrl)

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-16 sm:py-20"
      style={{ backgroundColor: IVORY }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: CARD.fullName,
            jobTitle: CARD.title,
            worksFor: {
              '@type': 'Organization',
              name: CARD.company,
              url: CARD.website,
            },
            email: CARD.email,
            telephone: CARD.phoneE164,
            url: CARD.cardUrl,
            address: {
              '@type': 'PostalAddress',
              addressLocality: CARD.city,
              addressRegion: CARD.region,
              addressCountry: 'US',
            },
          }),
        }}
      />

      <article
        className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(7,21,37,0.18)]"
        style={{ backgroundColor: '#fff', border: `1px solid ${GOLD}55` }}
      >
        <div className="h-2 w-full" style={{ backgroundColor: NAVY }} />
        <div className="h-1 w-full" style={{ backgroundColor: GOLD }} />

        <div className="px-8 pb-10 pt-8 text-center sm:px-10">
          <Image
            src="/images/eh-logo.png"
            alt="Elite Home AV"
            width={220}
            height={220}
            className="mx-auto h-auto w-full max-w-[180px] sm:max-w-[200px]"
            priority
          />

          <p
            className="mt-5 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: GOLD_DEEP }}
          >
            Integrated Technology
          </p>

          <h1
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
            style={{ color: NAVY }}
          >
            {CARD.fullName}
          </h1>
          <p className="mt-2 text-base font-semibold" style={{ color: GOLD_DEEP }}>
            {CARD.title}
          </p>
          <p className="mt-1 text-sm font-medium" style={{ color: NAVY }}>
            {CARD.company}
          </p>

          <div
            className="mx-auto mt-5 h-px w-24"
            style={{ backgroundColor: GOLD }}
          />

          <p
            className="mt-4 flex items-center justify-center gap-2 text-sm"
            style={{ color: '#5a6470' }}
          >
            <MapPin className="h-4 w-4" style={{ color: GOLD_DEEP }} aria-hidden="true" />
            {CARD.location}
          </p>

          <ul className="mt-8 space-y-0 text-left">
            <li style={{ borderBottom: '1px solid #e6e4de' }}>
              <a
                href={`tel:${CARD.phoneTel}`}
                className="group flex items-center gap-4 py-4 transition-opacity hover:opacity-80"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: NAVY }}
                >
                  <Phone className="h-4 w-4" style={{ color: GOLD }} aria-hidden="true" />
                </span>
                <span>
                  <span
                    className="block text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: GOLD_DEEP }}
                  >
                    Phone
                  </span>
                  <span className="mt-0.5 block text-lg font-semibold" style={{ color: NAVY }}>
                    {CARD.phoneDisplay}
                  </span>
                  <span
                    className="mt-0.5 flex items-center gap-1.5 text-xs"
                    style={{ color: '#6b7280' }}
                  >
                    <MessageSquare className="h-3 w-3" aria-hidden="true" />
                    Call or text
                  </span>
                </span>
              </a>
            </li>
            <li style={{ borderBottom: '1px solid #e6e4de' }}>
              <a
                href={`mailto:${CARD.email}`}
                className="group flex items-center gap-4 py-4 transition-opacity hover:opacity-80"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: NAVY }}
                >
                  <Mail className="h-4 w-4" style={{ color: GOLD }} aria-hidden="true" />
                </span>
                <span>
                  <span
                    className="block text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: GOLD_DEEP }}
                  >
                    Email
                  </span>
                  <span className="mt-0.5 block text-lg font-semibold" style={{ color: NAVY }}>
                    {CARD.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={CARD.website}
                className="group flex items-center gap-4 py-4 transition-opacity hover:opacity-80"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: NAVY }}
                >
                  <Globe className="h-4 w-4" style={{ color: GOLD }} aria-hidden="true" />
                </span>
                <span>
                  <span
                    className="block text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: GOLD_DEEP }}
                  >
                    Website
                  </span>
                  <span className="mt-0.5 block text-lg font-semibold" style={{ color: NAVY }}>
                    {CARD.websiteDisplay}
                  </span>
                </span>
              </a>
            </li>
          </ul>

          <a
            href={CARD.vcfPath}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-lg px-6 py-4 text-base font-semibold tracking-wide transition-opacity hover:opacity-90"
            style={{ backgroundColor: NAVY, color: GOLD }}
          >
            <UserPlus className="h-5 w-5" aria-hidden="true" />
            Save Contact
          </a>

          <figure className="mt-9 flex flex-col items-center">
            <div
              className="size-44 rounded-xl bg-white p-3 shadow-sm [&_svg]:block [&_svg]:h-full [&_svg]:w-full"
              style={{ border: `1px solid ${GOLD}66` }}
              role="img"
              aria-label={`QR code linking to ${cardUrl}`}
              dangerouslySetInnerHTML={{ __html: qrSvg }}
            />
            <figcaption
              className="mt-3 text-[11px] uppercase tracking-[0.2em]"
              style={{ color: '#6b7280' }}
            >
              Scan to open this card
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  )
}
