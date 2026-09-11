"use client"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { BrandLockup } from "@/components/brand-lockup"
import { CONTACT, NAV_LINKS } from "@/lib/site"
export function Header(){
 const [open,setOpen]=useState(false);const path=usePathname();const button=useRef<HTMLButtonElement>(null)
 useEffect(()=>{function key(e:KeyboardEvent){if(e.key==="Escape"){setOpen(false);button.current?.focus()}}document.addEventListener("keydown",key);return()=>document.removeEventListener("keydown",key)},[])
 return <header className="e-header"><div className="e-shell e-header-inner"><BrandLockup variant="nav"/><nav className="e-desktop-nav" aria-label="Main navigation">{NAV_LINKS.map(([label,href])=><Link key={href} href={href} aria-current={path===href||(href==='/services'&&path.startsWith('/services/'))?"page":undefined}>{label}</Link>)}</nav><Link href="/contact" className="e-header-cta">Let’s talk <ArrowUpRight size={16}/></Link><button ref={button} className="e-menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open?<X/>:<Menu/>}</button></div>{open&&<nav id="mobile-navigation" className="e-mobile-nav" aria-label="Mobile navigation">{NAV_LINKS.map(([label,href])=><Link key={href} href={href} aria-current={path===href?"page":undefined} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={17}/></Link>)}<a href={CONTACT.phoneHref}>{CONTACT.phone}</a></nav>}</header>
}
