import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SiteCta } from "@/components/site-cta"
export const metadata: Metadata = { title: "Our Approach | Elite Home AV", description: "From the first conversation with John Blank to installation and ongoing support: how ELITE approaches your home or business.", alternates: { canonical: "https://www.elitehomeav.com/gallery" } }
const steps = [
 ["Begin with your day", "Tell us where technology gets in the way. A room that is difficult to use, an unreliable connection, or a new space taking shape gives us a concrete place to start."],
 ["Agree on the scope", "We discuss the rooms, equipment, installation needs, and priorities together. You can start with one improvement or plan several systems around the same property."],
 ["Plan for the finished space", "Equipment placement, wiring paths, access for service, and the way you control the system all matter. We work through those details before they become inconveniences."],
 ["Make the handoff usable", "Installation is only part of the work. We walk through how the system operates and how to reach ELITE when you need help or want to make a change."]
]
export default function Approach(){ return <><PageHero label="Our approach" title="A clear plan. A space that works for you." description="Work directly with John Blank, from the first conversation through installation and handoff. Based in Lumberton, serving homes and businesses across Southeast Texas."/><section className="bg-[#F7F9FC] px-6 py-16 text-[#0B1526] md:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-x-16 gap-y-12 md:grid-cols-2">{steps.map(([title,copy])=><article key={title} className="border-t border-[#AAB6C5] pt-6"><h2 className="font-serif text-3xl tracking-tight">{title}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#405165]">{copy}</p></article>)}</div><div className="mt-16 border-t border-[#AAB6C5] pt-8"><SiteCta href="/contact" variant="solid">Discuss your space</SiteCta></div></div></section></> }
