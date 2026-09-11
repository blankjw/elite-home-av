import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Hero } from "@/components/hero"
import { EditorialImage } from "@/components/editorial-image"
const links=[["Lighting","Light for every part of your day.","lighting"],["Automation","Your everyday routines, simplified.","automation"],["Surveillance & access","A clearer view. A more confident arrival.","surveillance"],["Networking & integration","A reliable foundation for it all.","networking"]] as const
export default function Home(){return <>
 <Hero/>
 <section id="possibilities" className="e-section e-paper">
  <div className="e-shell">
   <div className="e-section-heading"><div><p className="e-kicker">The possibilities</p><h2>One improvement.<br/>Or a complete property.</h2></div><p>From your favorite room to the systems behind it, technology should make the space better—and life simpler.</p></div>
   <div className="experience-pair">
    <Link href="/services/theater" className="experience-card"><div className="experience-photo"><EditorialImage name="cinema" alt="Generated private cinema concept with leather seating, acoustic walls and a wide screen"/><span className="image-note">AI-generated concept</span></div><div className="experience-caption"><div><p className="e-kicker">Home theater</p><h3>Make a night of staying in.</h3></div><ArrowUpRight aria-hidden="true"/></div></Link>
    <Link href="/services/audio" className="experience-card"><div className="experience-photo"><EditorialImage name="outdoor" alt="Generated outdoor audio concept with a discreet garden speaker beside a sunlit terrace"/><span className="image-note">AI-generated concept</span></div><div className="experience-caption"><div><p className="e-kicker">Home & outdoor audio</p><h3>Your soundtrack. Everywhere.</h3></div><ArrowUpRight aria-hidden="true"/></div></Link>
   </div>
   <div className="e-capabilities">{links.map(([name,copy,slug])=><Link key={slug} href={`/services/${slug}`}><div><h3>{name}</h3><p>{copy}</p></div><ArrowUpRight size={20} aria-hidden="true"/></Link>)}</div>
  </div>
 </section>
 <section className="control-story"><figure><EditorialImage name="control" alt="Generated close-up concept of a four-button bronze keypad on a limestone wall"/><figcaption>AI-generated design concept</figcaption></figure><div className="control-copy"><p className="e-kicker">Thoughtfully integrated</p><h2>Less to manage.<br/>More to enjoy.</h2><p>Welcome-home lighting. Music at a touch. An evening scene that brings it all together. Simple controls, designed around the way you live.</p><Link href="/services/automation" className="e-text-link">Explore automation <ArrowUpRight size={18}/></Link></div></section>
 <section className="e-section"><div className="e-shell e-relationship"><div><p className="e-kicker">A local relationship</p><h2>One conversation.<br/>A considered plan.</h2><p>Work directly with John Blank in Lumberton, from your first ideas through installation and handoff. For your home, your business, or the next space taking shape.</p><Link href="/gallery" className="e-text-link">Our approach <ArrowUpRight size={18}/></Link></div><ol className="e-process"><li><span>01</span><div><h3>Start with your day.</h3><p>What works, what frustrates you, and what you want to change.</p></div></li><li><span>02</span><div><h3>Plan the whole picture.</h3><p>Agree on the scope, then connect the details.</p></div></li><li><span>03</span><div><h3>Settle in. Stay supported.</h3><p>A usable handoff and a familiar person to call.</p></div></li></ol></div></section>
 <section className="e-care"><div className="e-shell e-care-inner"><figure><EditorialImage name="network" alt="Generated detail of organized blue network cables and black equipment"/><figcaption>AI-generated design concept</figcaption></figure><div><p className="e-kicker">ELITE Care</p><h2>Good technology.<br/>A lasting relationship.</h2><p>Planned maintenance, troubleshooting, and help as your needs change. Support shaped around your property.</p><Link href="/care" className="e-text-link">Discover ELITE Care <ArrowUpRight size={18}/></Link></div></div></section>
 </>}
