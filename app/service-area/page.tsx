import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { ArrowUpRight, Building2, Home, MapPin } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = pageMetadata({
  title: "Home Technology in Lumberton & Beaumont | ELITE",
  description: "Elite Home AV plans, installs, and supports integrated technology for homes and businesses in Lumberton, Beaumont, and across Southeast Texas.",
  path: "/service-area",
})

const areas: ReadonlyArray<{
  icon: typeof Home
  title: string
  copy: string
  href?: string
}> = [
  {
    icon: Home,
    title: "Lumberton",
    href: "/service-area/lumberton",
    copy: "ELITE is based in Lumberton. We help homeowners bring audio, lighting, theater, surveillance, automation, and reliable networking together without making daily life more complicated.",
  },
  {
    icon: Building2,
    title: "Beaumont",
    href: "/service-area/beaumont",
    copy: "For Beaumont homes and businesses, we plan the visible experience and the infrastructure behind it as one system—from a single-room improvement to a complete property.",
  },
  {
    icon: MapPin,
    title: "Southeast Texas",
    copy: "Our wider service area includes Southeast Texas communities where a local, accountable technology partner matters before, during, and after installation.",
  },
]

export default function ServiceAreaPage() {
  return <>
    <PageHero
      label="Local service"
      title={<>Based here.<br/>Built around your property.</>}
      description="Elite Home AV is based in Lumberton and serves homes and businesses across Beaumont and Southeast Texas."
    />
    <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {areas.map(({ icon: Icon, title, copy, href }) => <article key={title} className="border-t border-[#AAB6C5] pt-6">
            <Icon className="h-6 w-6 text-[#245DC1]" />
            <h2 className="mt-8 text-2xl font-semibold">
              {href ? <Link href={href} className="inline-flex items-center gap-2">{title}<ArrowUpRight className="h-4 w-4" /></Link> : title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#526274]">{copy}</p>
          </article>)}
        </div>
        <div className="mt-16 grid gap-8 border-t border-[#AAB6C5] pt-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">One room or the whole property</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">Start with what should work better.</h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#526274]">Tell us where the property is and what you want to change. We will confirm service availability, talk through the right scope, and keep the first conversation practical.</p>
            <div className="mt-7 flex flex-wrap gap-6">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold">Explore solutions <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-[#526274]">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
