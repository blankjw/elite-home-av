import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SOLUTIONS } from "@/lib/solutions"
export const metadata:Metadata=pageMetadata({title:"Home Technology Solutions in Southeast Texas | ELITE",description:"Explore integrated audio, theater, lighting, surveillance, automation, and networking for homes and businesses in Lumberton, Beaumont, and Southeast Texas.",path:"/services"})
export default function ServicesPage(){return <><PageHero label="Solutions" title={<>Better spaces.<br/>Working as one.</>} description="Sound, light, comfort, and connection. Start with one improvement or bring the whole property together."/><section className="e-section e-paper"><div className="e-shell"><div className="solution-directory">{SOLUTIONS.map(s=><article className="solution-tile" id={s.slug} key={s.slug}><Link href={`/services/${s.slug}`}><div className="experience-photo"><img src={s.image} alt={s.imageAlt} width={1536} height={1024} loading="lazy" decoding="async"/></div><h2>{s.title}<ArrowUpRight size={20}/></h2><p>{s.summary}</p></Link></article>)}</div><div className="e-capabilities"><Link href="/care"><div><h3>ELITE Care</h3><p>Support beyond installation.</p></div><ArrowUpRight size={20}/></Link><Link href="/contact"><div><h3>Start with your space</h3><p>Tell us what you want to change.</p></div><ArrowUpRight size={20}/></Link></div></div></section></>}
