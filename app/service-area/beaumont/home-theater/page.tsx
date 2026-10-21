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
    copy: "TV or projector in the room you already sit in. Speaker wire goes in the wall.",
  },
  {
    title: "Media room",
    copy: "Screen, seats, sound, and the lights for a room that is just for movies.",
  },
  {
    title: "Gear out of the way",
    copy: "The rack goes in a closet. You should not see a pile of boxes by the couch.",
  },
] as const

const COST_DRIVERS = [
  "Living room or a separate media room",
  "TV or projector",
  "How much wire has to be hidden",
  "Where the couch sits, and the picture size that fits",
  "How far the cable has to run",
] as const

const FAQS = [
  {
    question: "How much does a home theater in Beaumont cost?",
    answer:
      "Call (409) 790-9117 for a quote. The room, a TV or a projector, and how much wire has to be hidden change the number.",
  },
  {
    question: "Do I need a dedicated room?",
    answer: "No. The living room works. A separate media room is there if you want the seats and the screen in their own space.",
  },
  {
    question: "Should I get a TV or a projector?",
    answer:
      "TV if you have windows and you watch during the day. Projector if you can darken the room and you want a bigger picture. John will say which one after he sees the room.",
  },
  {
    question: "Can you hide the wires?",
    answer: "Yes. Speaker wire, video cable, and the rack go in the wall or a closet.",
  },
  {
    question: "How long does an install take?",
    answer:
      "John will tell you once he knows the room. A living room with a short wire run is a smaller job than a media room that needs new cable.",
  },
  {
    question: "What screen size do I need?",
    answer: "He measures from the couch to the wall and picks the size from that.",
  },
  {
    question: "Do you work outside Beaumont?",
    answer: "Yes. Lumberton is home. Nederland, Port Arthur, Vidor, Orange, and Silsbee are regular stops too.",
  },
  {
    question: "What if something breaks later?",
    answer: "Call John at (409) 790-9117. ELITE Care is the checkup and the repair.",
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
              John installs home theaters in Beaumont. He lives in Lumberton. You talk to him from the first call until he walks you through the finished room.
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
              Living room, or a room just for movies.
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
            Beaumont job photos go here once an install is ready to show.
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
              You deal with John.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              One person on the job. Same three steps as the rest of the work.
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
              TV or a projector.
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#526274]">
            A bright living room wants a TV. A room you can darken can take a projector and a screen. John looks at the windows and the couch before he orders anything.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">What it costs</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              What changes the quote.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              Call {CONTACT.phone}. The number moves with:
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
              Call John if it acts up later.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#526274]">
              <Link href="/care" className="font-semibold text-[#0B1526] underline">
                ELITE Care
              </Link>{" "}
              is the checkup and the repair. Same guy who put it in.
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
              <Link href="/service-area/beaumont" className="font-semibold text-[#0B1526] underline">
                Beaumont
              </Link>
              , and the towns next door.
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
