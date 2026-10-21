import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { SiteCta } from "@/components/site-cta"
import { pageMetadata } from "@/lib/seo"
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema"
import { CONTACT } from "@/lib/site"

const PATH = "/lake-house-tech-toledo-bend-sam-rayburn"
const TITLE = "Lake House TV, Audio & Wi-Fi | Toledo Bend & Sam Rayburn | Elite Home AV"
const DESCRIPTION =
  "Outdoor and dock TVs, music on the porch and dock, and Wi-Fi that reaches the water for Toledo Bend and Sam Rayburn lake houses. Call (409) 790-9117."

const AREA = [
  { "@type": "Place", name: "Toledo Bend" },
  { "@type": "Place", name: "Sam Rayburn Reservoir" },
  { "@type": "City", name: "Hemphill, Texas" },
  { "@type": "City", name: "Milam, Texas" },
  { "@type": "City", name: "Pineland, Texas" },
  { "@type": "City", name: "Brookeland, Texas" },
  { "@type": "City", name: "Zavalla, Texas" },
  { "@type": "City", name: "Jasper, Texas" },
  { "@type": "AdministrativeArea", name: "Sabine County, Texas" },
] as const

const SERVICES = [
  {
    name: "Outdoor and dock TV installation",
    description:
      "Outdoor and dock TV installation for Toledo Bend and Sam Rayburn lake houses. A display made for a covered porch or an open dock.",
  },
  {
    name: "Outdoor and dock audio",
    description:
      "Porch, patio, and dock audio zones for Toledo Bend and Sam Rayburn lake houses, with speakers built for wet, humid air.",
  },
  {
    name: "Lake house Wi-Fi and remote network management",
    description:
      "Wi-Fi from the lake house to the dock, a guest network for rental hosts, and a way to restart the network and AV gear from your phone.",
  },
] as const

const SCOPE = [
  "Outdoor and dock TVs",
  "Music on the porch, patio, and dock",
  "Wi-Fi from the house to the dock",
  "Remote restart of the network and AV gear",
  "Protection for the gear in storms and humidity",
] as const

const FAQS = [
  {
    question: "Can I put a regular TV outside?",
    answer:
      "Not for long. An indoor set cooks and takes on moisture, even under a porch roof. You want a TV made for outside.",
  },
  {
    question: "How do I get Wi-Fi to my boat dock?",
    answer:
      "Run cable to an outdoor access point on the dock, or put up a wireless bridge from the house. If there's a clear shot over the water, it's the easy case.",
  },
  {
    question: "Will Starlink work for my lake house?",
    answer:
      "Yes. Satellite, rural wireless, or cable can all feed the house. I get that signal out to the porch and the dock.",
  },
  {
    question: "Can I reboot my lake house internet remotely?",
    answer: "Yes. The rack can restart the router and streaming box from your phone. I can do it from my end too.",
  },
  {
    question: "What speakers hold up on a dock?",
    answer:
      "Ones made for rain and humidity, with sealed connections and the cable in conduit. A patio speaker dragged outside won't hold up.",
  },
  {
    question: "Will outdoor speakers bother the neighbors across the cove?",
    answer:
      "Not if you use more speakers, turned down and aimed at the chairs. The sound stays on your dock.",
  },
  {
    question: "Can you set up Wi-Fi and TVs for my vacation rental?",
    answer:
      "Yes. You get a guest network, one remote, a card that explains how to turn it on, and a way to restart it when a renter calls.",
  },
  {
    question: "How do I protect my electronics from lightning at the lake?",
    answer:
      "Put surge protection on the gear and the lines that feed it. Until that's in, unplug before a big storm.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Call (409) 790-9117. The quote depends on how far the dock is, how many zones you want, where the TV hangs, and how much cable has to leave the house.",
  },
] as const

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

export default function LakeHouseTechPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({ description: DESCRIPTION, areaServed: AREA }),
          ...SERVICES.map((service) =>
            serviceSchema({
              name: service.name,
              description: service.description,
              path: PATH,
              areaServed: AREA,
            }),
          ),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Lake house tech", path: PATH },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="e-shell">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              <Link href="/">Home</Link>
              {" / Lake house tech"}
            </p>
            <h1 className="section-title text-[clamp(2rem,4vw,3rem)]">
              Lake House TV, Music &amp; Wi-Fi for Toledo Bend and Sam Rayburn
            </h1>
            <p className="lead mt-5">
              I set up TVs, music, and Wi-Fi for lake houses on Toledo Bend and Sam Rayburn. That covers the porch and the dock, plus the rooms inside.
            </p>
            <p className="mt-4 text-sm text-[#9BA7B5]">Last updated October 21, 2026.</p>
            <div className="mt-8">
              <SiteCta href={CONTACT.phoneHref} variant="solid">
                Call {CONTACT.phone}
              </SiteCta>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">The job</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              TV, music, and Wi-Fi all the way out to the dock.
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SCOPE.map((item) => (
              <li key={item} className="border-t border-[#AAB6C5] pt-4 text-sm leading-6 text-[#33445A]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Picture</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">Outdoor and dock TV</h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              An indoor TV won't last out there.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Why an indoor TV dies outside</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                Heat gets inside the case and humidity fogs the screen. Bugs build nests in the vents. A porch roof helps, but it's still not an indoor room. Out on an open dock you need a set built for weather and glare.
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Mount and cables</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                The screen can tilt or swing toward the chairs. The cable runs back to the rack in the house.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Sound</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Music on the porch, patio, and dock
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              The dock doesn't have to play as loud as the porch.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Zones</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                The porch, deck, fire pit, and dock each get their own volume.
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Speakers that can get wet</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                These are made for rain and humidity. I put a few smaller ones around the chairs so one seat doesn't get blasted and the sound doesn't carry across the cove.
              </p>
            </article>
          </div>
          <p className="mt-8 text-sm leading-7 text-[#526274]">
            The rooms inside can run on the{" "}
            <Link href="/services/audio" className="font-semibold text-[#0B1526] underline">
              same system
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Connection</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Wi-Fi from the house to the water
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              By the time the signal gets through the house walls, there's not much left for the water.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Cable or a wireless bridge</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                I can run cable to an outdoor access point on the dock, or aim a wireless bridge at the dock or boathouse. If there's a clear shot over open water, that works well.
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">The internet you already have</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                <Link href="/services/networking" className="font-semibold text-[#0B1526] underline">
                  Cable, rural wireless, or satellite
                </Link>
                , I carry that signal out to the porch and the dock.
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Guest network for rentals</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                Renters get their own login, and yours stays separate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">When you are not there</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Restart it from home
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              The router locks up or the streaming box freezes. You shouldn't have to drive up there for that.
            </p>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#526274]">
              The rack can power-cycle them from your phone, and I can do it from Lumberton. That's part of{" "}
              <Link href="/care" className="font-semibold text-[#0B1526] underline">
                ELITE Care
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Indoors</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Inside the lake house
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              A game-day room, TVs in the bunk rooms, and music through the house, all on one remote.
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#526274]">
            See{" "}
            <Link href="/services/theater" className="font-semibold text-[#0B1526] underline">
              home theater
            </Link>{" "}
            and{" "}
            <Link href="/services/audio" className="font-semibold text-[#0B1526] underline">
              home audio
            </Link>
            . With{" "}
            <Link href="/services/lighting" className="font-semibold text-[#0B1526] underline">
              lighting
            </Link>{" "}
            and{" "}
            <Link href="/services/automation" className="font-semibold text-[#0B1526] underline">
              automation
            </Link>
            , the porch and dock lights can come on with the rest of the house.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28" aria-labelledby="lake-house-photos">
        <div className="mx-auto max-w-7xl">
          <p className="e-kicker">Photos</p>
          <h2 id="lake-house-photos" className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-.04em] text-white md:text-5xl">
            From the job
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C3CCD7]">
            Lake job photos go here: porch TV, dock speakers, Wi-Fi at the boathouse. None are posted yet.
          </p>
          <div className="work-linework mt-10" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">The gear</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Storms, surge, and humidity
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              Spring storms and lake humidity are hard on electronics.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Surge protection on the gear and the lines that feed it",
              "A cabinet that can breathe",
              "Sealed outdoor connections",
              "Stainless hardware down by the water",
            ].map((item) => (
              <li key={item} className="border-t border-[#AAB6C5] pt-4 text-sm leading-6 text-[#33445A]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Part-time owners</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              How a job works when you are not there full-time
            </h2>
          </div>
          <div className="text-sm leading-7 text-[#526274]">
            <p>
              We'll plan the work for a weekend you're at the camp. After that I'll walk you through it over the phone, and you'll have notes on what's where.
            </p>
            <p className="mt-4">
              My number is the one you call. I work out of{" "}
              <Link href="/about" className="font-semibold text-[#0B1526] underline">
                Lumberton
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Towns</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              Lake communities we serve
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Toledo Bend</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                Hemphill, Milam, Pineland, the south end, and the Sabine County side.
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Sam Rayburn</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">Brookeland, Zavalla, and Jasper.</p>
            </article>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#526274]">
            If you live in SETX and your camp is on the Louisiana side near{" "}
            <Link href="/service-area" className="font-semibold text-[#0B1526] underline">
              Many or Zwolle
            </Link>
            , give me a call and ask.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28" aria-labelledby="lake-house-faq">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Questions</p>
          <h2 id="lake-house-faq" className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
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
          <p className="text-xs uppercase tracking-[.2em] text-[#B8C3CF]">Lake house quote</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-[-.04em] md:text-5xl">
            Tell me which lake you're on and what's not working.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C3CCD7]">
            Builders and rental managers can call the same number.
          </p>
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
