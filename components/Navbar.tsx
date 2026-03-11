'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Zap } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#0A0A0A] border-b border-[#222222] shadow-lg'
          : 'bg-[#0A0A0A]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 bg-[#E8521A] flex items-center justify-center rounded-sm group-hover:bg-[#c44515] transition-colors">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="leading-none">
              <span className="block text-white font-black text-lg tracking-tight">ELITE HOME AV</span>
              <span className="block text-[#E8521A] text-[10px] font-bold uppercase tracking-widest">
                Complete Home Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors rounded-sm ${
                  pathname === link.href
                    ? 'text-[#E8521A]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA - Desktop */}
          <a
            href="tel:4097907889"
            className="hidden md:flex items-center gap-2 bg-[#E8521A] text-white font-bold px-4 py-2 rounded-sm hover:bg-[#c44515] transition-colors text-sm whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            (409) 790-7889
          </a>

          {/* Mobile: Phone icon + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:4097907889"
              className="flex items-center gap-1.5 text-[#E8521A] font-bold text-sm"
              aria-label="Call Elite Home AV"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(409) 790-7889</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="text-white p-1"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#222222]">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-base font-semibold uppercase tracking-wide transition-colors rounded-sm ${
                  pathname === link.href
                    ? 'text-[#E8521A] bg-[#141414]'
                    : 'text-gray-300 hover:text-white hover:bg-[#141414]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[#222222]">
              <a
                href="tel:4097907889"
                className="flex items-center justify-center gap-2 bg-[#E8521A] text-white font-bold px-6 py-3 rounded-sm text-base w-full"
              >
                <Phone className="w-5 h-5" />
                Call Now — (409) 790-7889
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
