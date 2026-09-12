import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BrandLockup } from "@/components/brand-lockup"
import { CONTACT } from "@/lib/site"

export function Footer() {
  return <footer className="e-footer"><div className="e-shell"><div className="e-footer-invite"><div><p className="e-kicker">Your next chapter</p><h2>Let’s talk about your space.</h2></div><Link href="/contact" className="e-button">Start a conversation <ArrowUpRight size={18}/></Link></div><div className="e-footer-grid"><div><BrandLockup variant="footer" linked={false}/><p className="e-footer-description">Integrated technology.<br/>Personal service. Southeast Texas.</p></div><div><p className="e-kicker">Get in touch</p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a><a href={CONTACT.emailHref}>{CONTACT.email}</a><p>{CONTACT.location}</p></div><div><p className="e-kicker">Explore</p><Link href="/services">Solutions</Link><Link href="/service-area">Service area</Link><Link href="/gallery">Our approach</Link><Link href="/care">ELITE Care</Link><Link href="/about">About ELITE</Link></div></div><div className="e-footer-bottom"><span>© {new Date().getFullYear()} Elite Home AV LLC</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></div></footer>
}
