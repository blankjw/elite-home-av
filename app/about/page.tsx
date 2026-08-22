import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone, MapPin, CheckCircle2, ArrowRight, Music, Monitor,
  Lightbulb, Camera, SlidersHorizontal, Network, KeyRound, Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Elite Home AV | Lumberton, TX',
  description:
    'Integrated audio, theater, lighting, surveillance, access control, automation, and networking for Southeast Texas homes and businesses.',
  alternates: { canonical: 'https://www.elitehomeav.com/about' },
};

const PHONE = '(409) 790-7889';
const PHONE_HREF = 'tel:4097907889';

const trades = [
  { icon: Music, name: 'Home Audio', slug: 'audio', desc: 'Whole-home systems, outdoor speakers, listening rooms, surround sound' },
  { icon: Monitor, name: 'Home Theater', slug: 'theater', desc: 'Media rooms, projectors, displays, and immersive viewing' },
  { icon: Lightbulb, name: 'Lighting', slug: 'lighting', desc: 'Lighting control designed around the space and the people using it' },
  { icon: Camera, name: 'Surveillance', slug: 'surveillance', desc: 'Camera systems that give you clear visibility when it matters' },
  { icon: KeyRound, name: 'Access Control', slug: 'access', desc: 'Simple, practical control over who can enter a space' },
  { icon: SlidersHorizontal, name: 'Automation', slug: 'automation', desc: 'Control that makes everyday technology easier to use' },
  { icon: Network, name: 'Networking & Integration', slug: 'networking', desc: 'The dependable backbone that keeps the system connected' },
];

const serviceAreas = [
  { city: 'Lumberton', note: '(Home Base)' },
  { city: 'Beaumont', note: '' },
  { city: 'Port Arthur', note: '' },
  { city: 'Galveston', note: '' },
  { city: 'Toledo Bend', note: '' },
  { city: 'Sam Rayburn', note: '' },
  { city: 'Nederland', note: '' },
  { city: 'Vidor', note: '' },
  { city: 'Orange', note: '' },
  { city: 'Silsbee', note: '' },
  { city: 'Jasper', note: '' },
  { city: 'Hardin County', note: '' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#0A0A0A] border-b border-[#262626] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#2a140c_0%,#0A0A0A_58%)]" />
        <div className="absolute -right-16 top-10 w-[520px] opacity-[0.07] pointer-events-none hidden lg:block">
          {/* Local brand mark only — no remote stock imagery */}
          <img src="/images/hero-logo.png" alt="" className="w-full hero-logo-img" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-stretch">
            <div className="flex flex-col justify-center">
              <p className="section-label mb-3">About</p>
              <h1 className="font-bebas text-5xl md:text-7xl tracking-tight text-white leading-[0.9] mb-4">
                Integrated Systems.
                <br />
                <span className="text-[#E8521A]">Thoughtfully Designed.</span>
              </h1>
              <div className="divider-orange mb-6" />
              <p className="text-[#D1D5DB] text-lg leading-relaxed max-w-xl">
                Elite Home AV designs technology around the way a space is actually used. From entertainment and lighting to cameras, access, and networking, each piece is planned to work as part of one dependable system.
              </p>
            </div>

            <div className="card-dark p-7 md:p-8 flex flex-col gap-6 border border-[#262626] bg-[#141414]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#E8521A] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-bebas text-3xl tracking-wide text-white leading-none">John Blank</h2>
                  <p className="text-[#E8521A] font-semibold text-xs uppercase tracking-[0.18em] mt-1">
                    Owner — Elite Home AV LLC
                  </p>
                </div>
              </div>
              <div className="border-t border-[#262626] pt-6 grid gap-3">
                <div className="flex items-start gap-3 text-sm text-[#D1D5DB]">
                  <MapPin className="w-4 h-4 text-[#E8521A] flex-shrink-0 mt-0.5" />
                  Lumberton, TX — Serving Southeast Texas
                </div>
                <div className="flex items-start gap-3 text-sm text-[#D1D5DB]">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0 mt-0.5" />
                  Residential and commercial systems
                </div>
                <div className="flex items-start gap-3 text-sm text-[#D1D5DB]">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0 mt-0.5" />
                  Clear design and installation process
                </div>
                <div className="flex items-start gap-3 text-sm text-[#D1D5DB]">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0 mt-0.5" />
                  One point of contact from consultation through setup
                </div>
              </div>
              <a href={PHONE_HREF} className="btn-primary w-full justify-center mt-auto">
                <Phone className="w-4 h-4" />
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#0d0d0d] border-b border-[#262626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl tracking-tight text-white mb-4">
                Technology That Works Together
              </h2>
              <div className="divider-orange mb-6" />
              <div className="space-y-5 text-[#D1D5DB] leading-relaxed text-lg">
                <p>
                  Technology works best when it is planned as one system—not added one piece at a time. Elite Home AV designs and installs home theater, audio, networking, surveillance, lighting control, access control, and automation for homes and businesses across Southeast Texas.
                </p>
                <p>
                  We start with how you use the space, then design the infrastructure around it. The result is a clean, dependable system where entertainment, lighting, cameras, access, and controls work together the way they should—simple to use and built to last.
                </p>
                <p className="text-[#E8521A] font-bebas text-2xl tracking-wide">One system. One clear point of contact.</p>
              </div>
            </div>

            <div className="card-dark p-6 md:p-8 border-l-4 border-[#E8521A]">
              <h3 className="font-bebas text-2xl tracking-wide text-white mb-4">Planned Around the Entire System</h3>
              <p className="text-[#D1D5DB] leading-relaxed">
                Good integration is more than installing individual products. It begins with a clear plan for the room, the network, the equipment, and the people who will use it.
              </p>
              <p className="text-[#D1D5DB] leading-relaxed mt-4">
                That planning makes the finished system easier to use, easier to support, and far less likely to become a collection of disconnected apps and remotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-heading mb-4">Integrated Trades.</h2>
            <div className="divider-orange mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trades.map((trade) => {
              const Icon = trade.icon;
              return (
                <Link
                  key={trade.name}
                  href={`/services#${trade.slug}`}
                  className="group card-dark p-5 hover:border-[#E8521A]/50 transition-all duration-300"
                >
                  <div className="w-9 h-9 bg-[#E8521A]/10 rounded-sm flex items-center justify-center mb-3 group-hover:bg-[#E8521A] transition-colors">
                    <Icon className="w-4 h-4 text-[#E8521A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bebas text-xl tracking-wide text-white mb-1 group-hover:text-[#E8521A] transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-[#A3A3A3] text-xs leading-relaxed">{trade.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#0d0d0d] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Where We Work</p>
              <h2 className="section-heading mb-4">Southeast Texas</h2>
              <div className="divider-orange mb-6" />
              <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4">
                Based in Lumberton, Elite Home AV serves homes and businesses across Southeast Texas — including the Golden Triangle, nearby lake communities, and the coast.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                Jefferson County, Hardin County, and surrounding communities. If you&rsquo;re in SE Texas and you need the work planned as one system, we can talk through it.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <div
                    key={area.city}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-sm text-sm font-semibold ${
                      area.note
                        ? 'bg-[#E8521A] text-white'
                        : 'card-dark text-[#D1D5DB] hover:border-[#E8521A]/40 hover:text-white transition-colors'
                    }`}
                  >
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {area.city}
                    {area.note && <span className="text-white/80 text-xs font-normal">{area.note}</span>}
                  </div>
                ))}
                <div className="card-dark text-[#A3A3A3] text-sm px-3 py-2 rounded-sm italic">
                  + surrounding SE Texas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E8521A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-tight text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white text-lg mb-2">
            Call and tell us what you&rsquo;re trying to build.
          </p>
          <p className="text-white font-semibold mb-8">
            We&rsquo;ll give you a straight answer on what it takes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-black text-white font-black text-2xl px-10 py-5 rounded-sm hover:bg-[#0A0A0A] transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-5 rounded-sm hover:bg-white hover:text-black transition-colors w-full sm:w-auto justify-center text-lg"
            >
              Contact Form
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
