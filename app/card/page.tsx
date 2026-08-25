import type { Metadata } from 'next'
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

export default async function CardPage() {
  const cardUrl = await getLiveCardUrl()
  const qrSvg = await cardQrSvg(cardUrl)

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] px-4 py-16 sm:py-24">
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#E8521A]/8 blur-[140px]" />

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

      <article className="relative w-full max-w-md text-center">
        <p className="font-bebas text-2xl tracking-[0.12em] text-white sm:text-3xl">
          ELITE HOME <span className="text-[#E8521A]">AV</span>
        </p>
        <div className="mx-auto mt-4 h-px w-16 bg-[#E8521A]" />

        <h1 className="mt-10 font-bebas text-5xl leading-none tracking-tight text-white sm:text-6xl">
          {CARD.fullName}
        </h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#E8521A]">
          {CARD.title}
        </p>
        <p className="mt-2 text-lg font-semibold text-white">{CARD.company}</p>
        <div className="mx-auto mt-5 h-px w-8 bg-[#E8521A]/70" />
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#9CA3AF]">
          <MapPin className="h-4 w-4 text-[#E8521A]" aria-hidden="true" />
          {CARD.location}
        </p>

        <ul className="mt-10 space-y-0 text-left">
          <li className="border-b border-[#262626]">
            <a
              href={`tel:${CARD.phoneTel}`}
              className="group flex items-center gap-4 py-4 transition-colors hover:text-[#E8521A]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#262626] transition-colors group-hover:border-[#E8521A] group-hover:bg-[#E8521A]/10">
                <Phone className="h-4 w-4 text-[#E8521A]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#E8521A]">
                  Phone
                </span>
                <span className="mt-0.5 block text-base font-semibold text-white group-hover:text-[#E8521A]">
                  {CARD.phoneDisplay}
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <MessageSquare className="h-3 w-3" aria-hidden="true" />
                  Call or text
                </span>
              </span>
            </a>
          </li>
          <li className="border-b border-[#262626]">
            <a
              href={`mailto:${CARD.email}`}
              className="group flex items-center gap-4 py-4 transition-colors"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#262626] transition-colors group-hover:border-[#E8521A] group-hover:bg-[#E8521A]/10">
                <Mail className="h-4 w-4 text-[#E8521A]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#E8521A]">
                  Email
                </span>
                <span className="mt-0.5 block text-base font-semibold text-white group-hover:text-[#E8521A]">
                  {CARD.email}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={CARD.website}
              className="group flex items-center gap-4 py-4 transition-colors"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#262626] transition-colors group-hover:border-[#E8521A] group-hover:bg-[#E8521A]/10">
                <Globe className="h-4 w-4 text-[#E8521A]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#E8521A]">
                  Website
                </span>
                <span className="mt-0.5 block text-base font-semibold text-white group-hover:text-[#E8521A]">
                  {CARD.websiteDisplay}
                </span>
              </span>
            </a>
          </li>
        </ul>

        <a
          href={CARD.vcfPath}
          className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-[#E8521A] px-6 py-4 text-base font-semibold tracking-wide text-white transition-colors hover:bg-[#d14816]"
        >
          <UserPlus className="h-5 w-5" aria-hidden="true" />
          Save Contact
        </a>

        <figure className="mt-10 flex flex-col items-center">
          <div
            className="size-52 border border-[#262626] bg-white p-3 [&_svg]:block [&_svg]:h-full [&_svg]:w-full"
            role="img"
            aria-label={`QR code linking to ${cardUrl}`}
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />
          <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-[#6B7280]">
            Scan to save
          </figcaption>
        </figure>
      </article>
    </section>
  )
}
