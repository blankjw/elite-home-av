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
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#0A0A0A] border-b border-[#222222] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12]">
          <img
            src="https://image.pollinations.ai/prompt/luxury%20home%20theater%20smart%20home%20automation%20professional%20installation%20dark%20cinematic%20widescreen?width=1600&height=900&nologo=true&seed=777"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">About</p>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                Integrated Systems.
                <br />
                <span className="text-[#E8521A]">Thoughtfully Designed.</span>
              </h1>
              <div className="divider-orange mb-6" />
              <p className="text-gray-400 text-lg leading-relaxed">
                Elite Home AV designs technology around the way a space is actually used. From entertainment and lighting to cameras, access, and networking, each piece is planned to work as part of one dependable system.
              </p>
            </div>

            {/* TRX Card */}
            <div className="card-dark p-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E8521A] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-black text-2xl">John Blank</h2>
                  <p className="text-[#E8521A] font-bold text-sm uppercase tracking-widest">
                    Owner — Elite Home AV LLC
                  </p>
                </div>
              </div>
              <div className="border-t border-[#222222] pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-[#E8521A] flex-shrink-0" />
                  Lumberton, TX — Serving all of SE Texas
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0" />
                  Residential and commercial systems
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0" />
                  Clear design and installation process
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#E8521A] flex-shrink-0" />
                  One point of contact from consultation through setup
                </div>
              </div>
              <a href={PHONE_HREF} className="btn-primary w-full justify-center mt-2">
                <Phone className="w-4 h-4" />
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="py-20 md:py-24 bg-[#0d0d0d] border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Technology That Works Together
              </h2>
              <div className="divider-orange mb-6" />
              <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
                <p>
                  Technology works best when it is planned as one system—not added one piece at a time. Elite Home AV designs and installs home theater, audio, networking, surveillance, lighting control, access control, and automation for homes and businesses across Southeast Texas.
                </p>
                <p>
                  We start with how you use the space, then design the infrastructure around it. The result is a clean, dependable system where entertainment, lighting, cameras, access, and controls work together the way they should—simple to use and built to last.
                </p>
                <p className="text-[#E8521A] font-black text-xl">One system. One clear point of contact.</p>
              </div>
            </div>

            {/* Expertise / Tools Section */}
            <div className="card-dark p-6 md:p-8 border-l-4 border-[#E8521A]">
              <h3 className="text-white font-black text-xl mb-4">Planned Around the Entire System</h3>
              <p className="text-gray-300 leading-relaxed">
                Good integration is more than installing individual products. It begins with a clear plan for the room, the network, the equipment, and the people who will use it.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                That planning makes the finished system easier to use, easier to support, and far less likely to become a collection of disconnected apps and remotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="py-20 md:py-24 bg-[#0A0A0A] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What I Do</p>
            <h2 className="section-heading mb-4">Comprehensive Expertise.</h2>
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
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#E8521A] transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{trade.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 md:py-24 bg-[#0d0d0d] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Where I Work</p>
              <h2 className="section-heading mb-4">All of Southeast Texas</h2>
              <div className="divider-orange mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I serve all of Southeast Texas — and I mean all of it. From my home base in
                Lumberton to the coast at Galveston, the lakes at Toledo Bend and Sam Rayburn,
                and everywhere in between.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Jefferson County, Hardin County, the lake communities, the coast — if you&rsquo;re
                in SE Texas and you need the work done right, I&rsquo;ll be there.
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
                        : 'card-dark text-gray-300 hover:border-[#E8521A]/40 hover:text-white transition-colors'
                    }`}
                  >
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {area.city}
                    {area.note && <span className="text-white/70 text-xs font-normal">{area.note}</span>}
                  </div>
                ))}
                <div className="card-dark text-gray-500 text-sm px-3 py-2 rounded-sm italic">
                  + everywhere in between
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8521A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/80 text-lg mb-2">
            Call me. Tell me what you&rsquo;re trying to build.
          </p>
          <p className="text-white font-bold mb-8">
            I&rsquo;ll give you a straight answer on what it takes and what it costs.
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
