import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Our Work | Elite Home AV', description: 'Elite Home AV project portfolio and installation updates for Southeast Texas.', alternates: { canonical: 'https://www.elitehomeav.com/gallery' } };

export default function GalleryPage() {
  return <section className="min-h-screen bg-[#0A0A0A] pt-36 pb-24 px-6"><div className="max-w-3xl mx-auto text-center">
    <p className="text-[#E8521A] text-sm font-semibold tracking-[0.2em] uppercase mb-6">Our Work</p>
    <h1 className="font-bebas text-6xl sm:text-7xl text-white tracking-tight leading-none">Real Projects<br /><span className="text-[#E8521A]">Coming Soon.</span></h1>
    <p className="mt-8 text-lg text-[#9CA3AF] leading-relaxed">We&apos;re building this portfolio with real Southeast Texas installations, not stock photos dressed up as jobs. In the meantime, tell us what you&apos;re planning and we&apos;ll discuss the right approach for your home.</p>
    <Link href="/contact" className="inline-flex mt-10 bg-[#E8521A] hover:bg-[#d14816] text-white px-8 py-4 font-semibold">Request a Consultation</Link>
  </div></section>
}
