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
      "Outdoor and dock TV installation for Toledo Bend and Sam Rayburn lake houses. A display rated for a covered porch or an open dock. Power is coordinated with your electrician.",
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
      "Not for long. Heat, humidity, and bugs kill indoor TVs, even under a roof. Use one rated for the spot, whether that is a covered porch or an open dock.",
  },
  {
    question: "How do I get Wi-Fi to my boat dock?",
    answer:
      "A cable run to an outdoor access point at the dock, or a wireless link from the house. Wi-Fi over water works well with line of sight.",
  },
  {
    question: "Will Starlink work for my lake house?",
    answer:
      "If Starlink is the internet you have, we can make it reach the porch and the dock. Elite does not sell internet. The same is true for rural wireless or cable.",
  },
  {
    question: "Can I reboot my lake house internet remotely?",
    answer:
      "Yes. With remote-controllable power and a managed network, you or John can restart the gear from your phone.",
  },
  {
    question: "What speakers hold up on a dock?",
    answer:
      "Ones built for outdoor or marine exposure, not patio speakers moved outside. Sealed connections and cable in conduit.",
  },
  {
    question: "Will outdoor speakers bother the neighbors across the cove?",
    answer: "More speakers at a lower volume, aimed at the seating, keeps the sound where you are.",
  },
  {
    question: "Can you set up Wi-Fi and TVs for my vacation rental?",
    answer: "Yes. A guest network, simple remotes, a card on how to use it, and remote restarts.",
  },
  {
    question: "How do I protect my electronics from lightning at the lake?",
    answer:
      "Surge protection on the gear and the low-voltage lines. Unplug before a big storm if nothing is protecting the gear yet. Whole-house protection is your electrician's job.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Call (409) 790-9117 for a quote. It depends on the distance to the dock, the number of zones, where the TV goes, and whether the runs stay in the house or go outside. We do not list prices.",
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
              Your lake house should be easy. TV on the porch, music at the dock, Wi-Fi that reaches the boat, and a
              system you can fix from home. We set it up for Toledo Bend and Sam Rayburn lake houses.
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
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Scope</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">
              TV, audio, and Wi-Fi. Power stays with your electrician.
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SCOPE.map((item) => (
              <li key={item} className="border-t border-[#AAB6C5] pt-4 text-sm leading-6 text-[#33445A]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#526274]">
            We handle the AV and low-voltage side. We coordinate with your electrician for power to a dock or an outdoor
            TV, and for whole-house surge.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#0B1526] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#526274]">Picture</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] md:text-5xl">Outdoor and dock TV</h2>
            <p className="mt-6 text-sm leading-7 text-[#526274]">
              An indoor TV does not last outside. Use a display rated for a covered porch or an open dock.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Why an indoor TV dies outside</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                Heat, humidity, bugs, and glare. Even under a roof, an indoor set fails. Pick a display rated for where
                it hangs.
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Mounting and the cable run</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                A mount that tilts or swings, so you can see the screen from the chairs. We plan where the cable runs.
                We coordinate with your electrician for power.
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
              The porch, deck, fire pit, and dock can each have their own volume.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Zones</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                Porch, deck, fire pit, and dock each get their own control, so the dock is not stuck at the porch
                volume.
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Speakers for wet air</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                Speakers built for wet, humid air. Several smaller speakers, spread out, so it is not loud at one spot
                and the sound does not carry across the cove.
              </p>
            </article>
          </div>
          <p className="mt-8 text-sm leading-7 text-[#526274]">
            Inside the house, the same plan can cover{" "}
            <Link href="/services/audio" className="font-semibold text-[#0B1526] underline">
              whole-home audio
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
              The house blocks the signal. A cable run or a wireless link gets Wi-Fi to the dock.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Cable or a wireless link</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                A cable run to an outdoor access point, or a point-to-point wireless link from the house to the dock or
                boathouse. Over open water, line of sight usually works well.
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Whatever internet you already have</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                It works with cable, rural wireless, or Starlink. Elite does not sell internet. We make the connection
                reach the porch and the dock. See{" "}
                <Link href="/services/networking" className="font-semibold text-[#0B1526] underline">
                  networking
                </Link>
                .
              </p>
            </article>
            <article className="border-t border-[#AAB6C5] pt-6">
              <h3 className="text-xl font-semibold">Guest network for rental hosts</h3>
              <p className="mt-3 text-sm leading-6 text-[#526274]">
                Guests get their own network. It stays separate from yours, so a rental does not share the house login.
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
              A frozen router or streaming box can be restarted from your phone, or by John, so you do not have to drive
              up.
            </p>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#526274]">
              The rack has remote power control for the network and AV gear. You restart the box. John can do it too.
              That help sits with{" "}
              <Link href="/care" className="font-semibold text-[#0B1526] underline">
                ELITE Care
              </Link>
              . It is a restart for the gear, not a watch on the property.
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
              A game-day room, TVs in the bunk rooms, and whole-home audio can share one remote.
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
            . Porch and dock light scenes are low-voltage control, through{" "}
            <Link href="/services/lighting" className="font-semibold text-[#0B1526] underline">
              lighting
            </Link>{" "}
            and{" "}
            <Link href="/services/automation" className="font-semibold text-[#0B1526] underline">
              automation
            </Link>
            . Your electrician still handles the power.
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
            Job photos from lake installs go here. A porch TV, dock speakers, or Wi-Fi at the boathouse. None are posted
            yet. The lake can be named. The address will not.
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
              East Texas lightning and spring storms are hard on gear. We protect the equipment. We do not do panel work.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Surge protection on the equipment and on the low-voltage lines",
              "A ventilated cabinet for the gear",
              "Sealed outdoor connections",
              "Stainless hardware near the water",
            ].map((item) => (
              <li key={item} className="border-t border-[#AAB6C5] pt-4 text-sm leading-6 text-[#33445A]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#526274]">
            We coordinate with your electrician for whole-house surge or power.
          </p>
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
              We plan the visit around a weekend you are at the lake. Then we hand off by phone: what is where, written
              notes, and one number to call.
            </p>
            <p className="mt-4">
              That number is John&apos;s. He is the one contact, from Lumberton, even if you live somewhere else. Read a
              bit more{" "}
              <Link href="/about" className="font-semibold text-[#0B1526] underline">
                about Elite
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
            If you live in SETX and your lake place is on the Louisiana side near Many or Zwolle, call and ask. The
            wider map is on{" "}
            <Link href="/service-area" className="font-semibold text-[#0B1526] underline">
              service area
            </Link>
            .
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
            Tell us which lake and what is not working.
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
