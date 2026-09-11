import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return <section className="editorial-hero" aria-labelledby="hero-title">
    <img className="hero-photograph" src="/images/concepts/circadian-living-dusk-1536.webp" srcSet="/images/concepts/circadian-living-dusk-768.webp 768w, /images/concepts/circadian-living-dusk-1536.webp 1536w" sizes="100vw" width={1536} height={1024} fetchPriority="high" loading="eager" alt="Illustrative architectural interior at dusk, with warm lighting and concealed controls" />
    <div className="hero-shade" />
    <div className="hero-content">
      <p className="hero-eyebrow hero-enter">ELITE · INTEGRATED TECHNOLOGY · SOUTHEAST TEXAS</p>
      <h1 id="hero-title" className="hero-enter">Advanced technology.<br/><em>Everyday simplicity.</em></h1>
      <p className="hero-description hero-enter">Spaces that respond to you. Effortless everyday routines. Everything working together, with someone to turn to when you need support.</p>
      <div className="hero-actions hero-enter"><Link href="/contact" className="hero-primary">Explore your project <ArrowUpRight size={17}/></Link><Link href="/services" className="hero-secondary">Discover the possibilities <ArrowUpRight size={17}/></Link></div>
    </div>
    <div className="hero-foot"><a href="#possibilities" className="hero-scroll"><span className="scroll-line"/><ArrowDown size={15}/> Explore what’s possible</a><span>Design inspiration</span></div>
  </section>
}
