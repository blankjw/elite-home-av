"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { BrandLockup } from "@/components/brand-lockup"
import { CONTACT, NAV_LINKS } from "@/lib/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#071525]/90 backdrop-blur-md border-b border-[#31445A]" : "bg-gradient-to-b from-[#071525]/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <BrandLockup variant="nav" />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-[#C3CCD7] hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#AAB6C5] hover:after:w-full after:transition-all"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-sm">
          <a href={CONTACT.phoneHref} className="text-[#C3CCD7] hover:text-white transition-colors">
            {CONTACT.phone}
          </a>
          <Link
            href="/contact"
            className="glow-button inline-flex items-center bg-[#AAB6C5] text-[#0B1526] px-4 py-2 font-medium hover:bg-[#7E8C9B] transition-colors"
          >
            Get started
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#C3CCD7] hover:text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="lg:hidden border-t border-[#31445A] px-6 py-4 space-y-4 bg-[#071525]">
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="block text-[#C3CCD7] hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a href={CONTACT.phoneHref} className="block text-white">
            {CONTACT.phone}
          </a>
          <Link
            href="/contact"
            className="inline-block bg-[#AAB6C5] text-[#0B1526] px-4 py-2 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Get started
          </Link>
        </nav>
      ) : null}
    </header>
  )
}