import Link from 'next/link';
import { Phone, MapPin, Zap } from 'lucide-react';

const serviceLinks = [
  { href: '/services#audio', label: 'Home Audio' },
  { href: '/services#video', label: 'Home Video' },
  { href: '/services#automation', label: 'Home Automation' },
  { href: '/services#networking', label: 'Networking' },
  { href: '/services#surveillance', label: 'Surveillance' },
  { href: '/services#security', label: 'Security' },
  { href: '/services#electrical', label: 'Electrical' },
  { href: '/services#plumbing', label: 'Plumbing' },
  { href: '/services#construction', label: 'Construction & Remodel' },
  { href: '/services#design', label: 'Design' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const serviceAreas = [
  'Lumberton', 'Beaumont', 'Port Arthur', 'Galveston',
  'Toledo Bend', 'Sam Rayburn', 'Nederland', 'Vidor',
  'Orange', 'Silsbee', 'Jasper', 'Hardin County',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222222]">
      {/* CTA Bar */}
      <div className="bg-[#E8521A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-lg text-center sm:text-left">
            Ready to get started? One call handles everything.
          </p>
          <a
            href="tel:4097907889"
            className="flex items-center gap-2 bg-black text-white font-black text-xl px-6 py-3 rounded-sm hover:bg-[#0A0A0A] transition-colors whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            (409) 790-7889
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8521A] flex items-center justify-center rounded-sm">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="leading-none">
                <span className="block text-white font-black text-base tracking-tight">ELITE HOME AV</span>
                <span className="block text-[#E8521A] text-[10px] font-bold uppercase tracking-widest">
                  Complete Home Solutions
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              SE Texas&rsquo;s complete home solutions company. Every trade, one company, done right.
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-sm mb-2">
              <MapPin className="w-4 h-4 text-[#E8521A] mt-0.5 flex-shrink-0" />
              <span>Lumberton, TX | Serving all of SE Texas</span>
            </div>
            <a
              href="tel:4097907889"
              className="flex items-center gap-2 text-[#E8521A] font-bold hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              (409) 790-7889
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#E8521A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Navigation</h3>
            <ul className="space-y-2 mb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#E8521A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h3>
            <a
              href="tel:4097907889"
              className="btn-primary text-sm inline-flex"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Service Area</h3>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map((city) => (
                <span
                  key={city}
                  className="text-xs text-gray-400 bg-[#141414] border border-[#222222] px-2 py-1 rounded-sm"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-3">
              And everywhere in between — Jefferson County, Hardin County, the lake communities, and the coast.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {year} Elite Home AV LLC. All rights reserved. Lumberton, TX.
          </p>
          <p className="text-gray-600 text-xs">
            <a href="https://www.elitehomeav.com" className="hover:text-[#E8521A] transition-colors">
              www.elitehomeav.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
