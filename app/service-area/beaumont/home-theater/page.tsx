import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { SiteCta } from "@/components/site-cta"
import { pageMetadata } from "@/lib/seo"
import { PROCESS_STEPS } from "@/lib/process"
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema"
import { CONTACT } from "@/lib/site"

const PATH = "/service-area/beaumont/home-theater"
const TITLE = "Home Theater Installation in Beaumont, TX | Elite Home AV"
const DESCRIPTION =
  "Home theater and media room installation in Beaumont from a local Lumberton installer. One person from plan to handoff. Call (409) 790-9117 for a quote."

const AREA = [
  { "@type": "City", name: "Beaumont, Texas" },
  { "@type": "City", name: "Lumberton, Texas" },
  { "@type": "City", name: "Nederland, Texas" },
  { "@type": "City", name: "Port Arthur, Texas" },
  { "@type": "City", name: "Vidor, Texas" },
  { "@type": "City", name: "Orange, Texas" },
  { "@type": "City", name: "Silsbee, Texas" },
] as const

const INCLUDES = [
  {
    title: "Living-room theater",
    copy: "A TV or projector, sound, and the wires put away in the room you already use.",
  },
  {
    title: "Dedicated media room",
    copy: "A room set aside for movies, with the screen, seating, sound, and light planned together.",
  },
  {
    title: "Hiding wires and equipment",
    copy: "Cable runs and gear placed so they are not left out in the open.",
  },
  {
    title: "Low-voltage only",
    copy: "We handle the AV/low-voltage side and coordinate with your electrician.",
  },
] as const

const COST_DRIVERS = [
  "Living room or a dedicated media room",
  "TV or projector",
  "How much wire and equipment has to be hidden",
  "Where you sit, and the picture size that fits that spot",
  "Whether the room needs new low-voltage runs",
] as const

const FAQS = [
  {
    question: "How much does a home theater in Beaumont cost?",
    answer:
      "It depends on the room, a living-room theater or a dedicated media room, TV or projector, and how much wire and equipment has to be hidden. We do not list prices. Call (409) 790-9117 for a quote.",
  },
  {
    question: "Do I need a dedicated room?",
    answer:
      "No. A living room can be the theater. A dedicated media room is an option when you want that space used for movies. We plan either one.",
  },
  {
    question: "Should I get a TV or a projector?",
    answer:
      "A TV fits a lot of living rooms, including rooms with windows. A projector fits a room you can darken, when you want a larger picture. We look at the room and where you sit, then pick one.",
  },
  {
    question: "Can you hide the wires?",
    answer:
      "Yes. Hiding wires and equipment is part of the install. We run the low-voltage cabling and place the gear so it is not left out in the room.",
  },
  {
    question: "How long does an install take?",
    answer:
      "It depends on the room and how much has to be hidden. We tell you the time when the scope is set, before any work starts.",
  },
  {
    question: "What screen size do I need?",
    answer:
      "Size follows the seating distance and the room. We measure where you sit and choose a TV or screen that fits that spot. There is no default size.",
  },
  {
    question: "Do you work outside Beaumont?",
    answer:
      "Yes. We are based in Lumberton and also install in Nederland, Port Arthur, Vidor, Orange, and Silsbee, along with Beaumont.",
  },
  {
    question: "What if something breaks later?",
    answer: "Call John at (409) 790-9117. ELITE Care is the support after the install.",
  },
  {
    question: "Do you do the electrical work?",
    answer: "We handle the AV/low-voltage side and coordinate with your electrician.",
  },
] as const

const NEARBY = [
  { name: "Lumberton", href: "/service-area/lumberton" },
  { name: "Nederland" },
  { name: "Port Arthur" },
  { name: "Vidor" },
  { name: "Orange" },
  { name: "Silsbee" },
] as const

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

export default function BeaumontHomeTheaterPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({
            description: DESCRIPTION,
            areaServed: AREA,
          }),
          serviceSchema({
            name: "Home Theater Installation in Beaumont, TX",
            description: DESCRIPTION,
            path: PATH,
            areaServed: AREA,
          }),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service area", path: "/service-area" },
            { name: "Beaumont", path: "/service-area/beaumont" },
            { name: "Home theater", path: PATH },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="e-shell">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              <Link href="/service-area">Service area</Link>
              {" / "}
              <Link href="/service-area/beaumont">Beaumont</Link>
              {" / Home theater"}
            </p>
            <h1 className="section-title text-[clamp(2rem,4vw,3rem)]">
              Home Theater Installation in Beaumont, TX
            </h1>
            <p className="lead mt-5">
              Home theater and media room installation in Beaumont, from a Lumberton installer.
              John is the one person from plan to handoff.
            </p>
            <div className="mt-8">
              <SiteCta href={CONTACT.phoneHref} variant="solid">
                Call {CONTACT.phone} for a quote
              </SiteCta>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">What an install includes</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              The room, the picture, and the wires put away.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {INCLUDES.map((item) => (
              <article key={item.title} className="border-t border-[#AAB6C5] pt-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#526274]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28" aria-labelledby="beaumont-theater-photos">
        <div className="mx-auto max-w-7xl">
          <p className="e-kicker">Photos</p>
          <h2 id="beaumont-theater-photos" className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-.04em] text-white md:text-5xl">
            From the job
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C3CCD7]">
            Job photos from finished Beaumont installs go here. None are posted yet.
          </p>
          <div className="work-linework mt-10" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">How it works</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Three steps. John is the one contact.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              You talk to John from the first call through handoff. These are the same three steps we use on every job.
            </p>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="border-t border-[#AAB6C5] pt-6">
                <p className="text-sm font-semibold tabular-nums text-[#526274]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#526274]">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">TV or projector</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              The room decides.
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#526274]">
            Some Beaumont rooms work better with a TV. Some work better with a projector and a screen.
            Windows, how dark the room gets, and where you sit decide it. We look at the room before anything is ordered.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">What it costs</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              The quote follows the room.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              There is no price list on this page. Call {CONTACT.phone} for a quote. The cost depends on:
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {COST_DRIVERS.map((item) => (
              <li key={item} className="border-t border-[#AAB6C5] pt-4 text-sm leading-6 text-[#33445A]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">After the install</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Support when you need it later.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#526274]">
              After the system is in,{" "}
              <Link href="/care" className="font-semibold text-[#0B1526] underline">
                ELITE Care
              </Link>{" "}
              is how you get help. Planned checkups, and John if something needs a look.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Where we install</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Beaumont and nearby.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              We install in{" "}
              <Link href="/service-area/beaumont" className="font-semibold text-[#0B1526] underline">
                Beaumont
              </Link>{" "}
              and these nearby towns.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {NEARBY.map((town) => (
              <li key={town.name} className="border-t border-[#AAB6C5] pt-4 text-sm font-semibold">
                {"href" in town ? <Link href={town.href}>{town.name}</Link> : town.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28" aria-labelledby="beaumont-theater-faq">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Questions</p>
          <h2 id="beaumont-theater-faq" className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
            Before you call
          </h2>
          <div className="mt-12 space-y-8">
            {FAQS.map((faq) => (
              <article key={faq.question} className="border-t border-[#AAB6C5] pt-6">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-[#526274]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#152942] px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[.2em] text-[#B8C3CF]">Beaumont quote</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-[-.04em] md:text-5xl">
            Call John and tell him about the room.
          </h2>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold">
              {CONTACT.phone}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={CONTACT.emailHref} className="inline-flex items-center gap-2 text-sm font-semibold">
              {CONTACT.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-[#B8C3CF]">
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
