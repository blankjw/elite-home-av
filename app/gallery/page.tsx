import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Work | Elite Home AV',
  description: 'Elite Home AV project portfolio and installation updates for Southeast Texas.',
  alternates: { canonical: 'https://www.elitehomeav.com/gallery' },
};

const frames = [
  'Audio',
  'Theater',
  'Lighting',
  'Surveillance',
  'Networking',
  'Integration',
];

export default function GalleryPage() {
  return (
    <section className="relative min-h-screen bg-[#F4F6F8] pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1d120d_0%,#F4F6F8_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#3B6D9A] text-sm font-semibold tracking-[0.2em] uppercase mb-6">Our Work</p>
          <h1 className="font-bebas text-6xl sm:text-7xl text-[#1E293B] tracking-tight leading-none">
            Real Projects
            <br />
            <span className="text-[#3B6D9A]">Coming Soon.</span>
          </h1>
          <p className="mt-8 text-lg text-[#64748B] leading-relaxed">
            We&apos;re building this portfolio with real Southeast Texas installations, not stock photos dressed up as jobs. In the meantime, tell us what you&apos;re planning and we&apos;ll discuss the right approach for your home.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {frames.map((label, i) => (
            <div
              key={label}
              className="aspect-[4/3] bg-white border border-[#D5DAE0] flex flex-col items-center justify-center gap-3 text-center px-3"
            >
              <Camera className="w-6 h-6 text-[#3B6D9A]/70" strokeWidth={1.5} />
              <p className="font-bebas text-xl tracking-wide text-[#1E293B]/90">{label}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748B]">
                {i === 0 ? 'Photos in review' : 'Reserved for real work'}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3B6D9A] hover:bg-[#2F5A80] text-white px-8 py-4 font-semibold"
          >
            Request a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
