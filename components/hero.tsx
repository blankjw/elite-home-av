import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { EditorialImage } from "@/components/editorial-image"
export function Hero(){return <section className="arrival" aria-labelledby="hero-title">
 <div className="e-shell arrival-heading">
  <div><p className="e-kicker">Southeast Texas · Homes & businesses</p><h1 id="hero-title">Advanced technology.<br/><span>Everyday simplicity.</span></h1></div>
  <div className="arrival-intro"><p>Spaces that respond to you. <br/>Everything working together. <br/>Someone to turn to.</p><Link className="e-button" href="/contact">Explore your project <ArrowUpRight size={18}/></Link></div>
 </div>
 <figure className="arrival-figure"><EditorialImage name="arrival" alt="Generated concept of a contemporary home with warm architectural lighting beneath a blue evening sky" priority sizes="100vw"/><figcaption><span>AI-generated design concept</span><a href="#possibilities">Discover what’s possible <ArrowDown size={15}/></a></figcaption></figure>
</section>}
