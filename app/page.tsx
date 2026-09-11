import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Hero } from "@/components/hero"

const disciplines = [
  ["Connect", "Networks, racks, and concealed infrastructure that let every system share one backbone.", "/services/networking"],
  ["Protect", "Cameras, access, and monitoring planned as part of the house—not a bolted-on afterthought.", "/services/surveillance"],
  ["Automate", "Lighting, climate, shades, and scenes that behave the way the space is actually used.", "/services/automation"],
  ["Experience", "Theater, distributed audio, and the rooms people notice first—finished so they stay simple.", "/services/audio"],
] as const

export default function Home() {
  return <>
    <Hero />
    <section className="bg-[#F7F9FC] px-6 py-10 text-[#0B1526] md:px-10"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 md:items-center"><h2 className="font-serif">One improvement. Or a complete property.</h2><p className="max-w-lg text-sm leading-7 text-[#405165]">Come home to a space that already feels right. Unwind without thinking about the systems behind it. Leave knowing the place is looked after—whether that is one room or the whole property.</p></div></section>

    <section id="possibilities" className="bg-[#0B1526] px-6 py-16 text-[#F7F9FC] md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
        <figure className="overflow-hidden border border-[#B8C3CF]/30">
          <img src="/images/concepts/concealed-keypad-dusk-1536.webp" srcSet="/images/concepts/concealed-keypad-dusk-768.webp 768w, /images/concepts/concealed-keypad-dusk-1536.webp 1536w" sizes="(min-width: 1024px) 50vw, 100vw" width={1536} height={1024} loading="lazy" decoding="async" alt="Illustrative finished living room at dusk with warm light and a flush control on the wall" className="w-full object-cover" />
          <figcaption className="px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#B8C3CF]">Design inspiration</figcaption>
        </figure>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#B8C3CF]">How the day should feel</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.045em] md:text-5xl">Arrive. Unwind. Leave with confidence.</h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-[#B8C3CF]">Lights, comfort, and access ready when you walk in. An evening that settles without a hunt for remotes. A lock and a quiet house when you go.</p>
        </div>
      </div>
    </section>

    <section className="bg-[#F7F9FC] px-6 py-16 text-[#0B1526] md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#526274]">ELITE Care</p>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-5xl">The system should still make sense years later.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#405165]">When something changes, you have someone to call. Tell John what is happening, and we’ll work through the next step—troubleshooting, a service visit, or an upgrade that fits how you use the space.</p>
          <Link href="/care" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#245DC1]">ELITE Care <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#526274]">Your next step</p>
          <h2 className="mt-4 font-serif text-4xl tracking-[-0.045em] md:text-5xl">Start with a conversation.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#405165]">Call John in Lumberton or send a project inquiry. Tell us what works, what frustrates you, and what you want to change. We’ll help define a practical scope for your home or business.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#245DC1]">Talk with John <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>

    <section className="bg-[#152942] px-6 py-16 text-[#F7F9FC] md:px-10 md:py-24"><div className="mx-auto max-w-7xl">
      <div className="grid gap-8 border-b border-[#AAB6C5]/35 pb-10 md:grid-cols-[1fr_auto] md:items-end"><h2 className="max-w-2xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] md:text-6xl">Connect. Protect. Automate. Experience.</h2><Link href="/services" className="inline-flex items-center gap-3 text-sm text-[#D9E0E7] hover:text-white">View capabilities <ArrowUpRight className="h-4 w-4" /></Link></div>
      <ul className="discipline-list mt-2 divide-y divide-[#AAB6C5]/25">{disciplines.map(([title, copy, href]) => <li key={title} className="grid gap-5 py-8 md:grid-cols-[1fr_1.25fr] md:items-baseline"><h3 className="font-serif text-3xl tracking-[-0.035em]"><Link href={href} className="hover:text-white">{title}</Link></h3><p className="max-w-md text-sm leading-6 text-[#C3CCD7]">{copy}</p></li>)}</ul>
    </div></section>

  </>
}
