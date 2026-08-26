"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-[#D5DAE0] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-mark-light.png"
              alt="Elite Home AV"
              width={96}
              height={72}
              className="h-10 w-auto sm:h-12"
            />
            <span className="font-bebas text-xl sm:text-2xl tracking-[0.12em] text-[#1E293B]">
              ELITE HOME AV
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {[["Services", "/services"], ["Gallery", "/gallery"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <a 
                key={label}
                href={href} 
                className="relative text-sm text-[#64748B] hover:text-[#1E293B] transition-colors duration-300 tracking-wide group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#3B6D9A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:4097907889" 
              className="flex items-center gap-3 text-[#1E293B] hover:text-[#3B6D9A] transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-full border border-[#D5DAE0] group-hover:border-[#3B6D9A] group-hover:bg-[#3B6D9A]/10 flex items-center justify-center transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#64748B] tracking-wide">Call Now</span>
                <span className="text-sm font-semibold tracking-wide">(409) 790-7889</span>
              </div>
            </a>
            
            <Button 
              asChild
              className="bg-[#3B6D9A] hover:bg-[#2F5A80] text-white px-6 py-2.5 text-sm font-semibold tracking-wide rounded-none"
            >
              <a href="/contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-[#1E293B] border border-[#D5DAE0] hover:border-[#3B6D9A] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[#D5DAE0] overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-6 gap-1">
            {[["Services", "/services"], ["Gallery", "/gallery"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href], index) => (
              <a 
                key={label}
                href={href} 
                className="py-4 text-lg text-[#64748B] hover:text-[#1E293B] hover:pl-4 transition-all duration-300 border-b border-[#D5DAE0]"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a 
              href="tel:4097907889" 
              className="mt-4 flex items-center gap-3 py-4 text-[#3B6D9A]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">(409) 790-7889</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
