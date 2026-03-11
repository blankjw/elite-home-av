import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery | Elite Home AV — SE Texas Project Photos',
  description:
    'See completed home audio, home theater, smart home automation, and construction projects by Elite Home AV LLC in SE Texas. (409) 790-7889.',
  alternates: { canonical: 'https://www.elitehomeav.com/gallery' },
};

const PHONE_HREF = 'tel:4097907889';

// Gallery categories and placeholder items
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'audio', label: 'Home Audio' },
  { id: 'video', label: 'Home Theater' },
  { id: 'automation', label: 'Automation' },
  { id: 'networking', label: 'Networking' },
  { id: 'surveillance', label: 'Surveillance' },
  { id: 'construction', label: 'Construction' },
];

// 18 placeholder gallery items — swap image src with real photos
const galleryItems = [
  { id: 1, category: 'audio', title: 'Whole-Home Audio — Beaumont, TX', description: 'Multi-zone Sonos system with in-ceiling speakers throughout', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/42/800/600' },
  { id: 2, category: 'video', title: 'Dedicated Home Theater — Lumberton, TX', description: '4K projector, acoustic panels, stadium seating', aspectRatio: 'aspect-video', image: 'https://picsum.photos/seed/84/800/600' },
  { id: 3, category: 'construction', title: 'Media Room Buildout — Port Arthur, TX', description: 'Framing, drywall, pre-wire, and AV integration', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/126/800/600' },
  { id: 4, category: 'automation', title: 'Control4 Smart Home — Lumberton, TX', description: 'Full home automation — lighting, climate, AV, security', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/168/800/600' },
  { id: 5, category: 'networking', title: 'Structured Wiring — Beaumont, TX', description: 'Cat6A throughout, network closet, Ubiquiti Wi-Fi', aspectRatio: 'aspect-video', image: 'https://picsum.photos/seed/210/800/600' },
  { id: 6, category: 'surveillance', title: '4K Camera System — SE Texas Lake Property', description: 'Perimeter coverage, night vision, remote access', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/252/800/600' },
  { id: 7, category: 'audio', title: 'Outdoor Patio Audio — Nederland, TX', description: 'Weather-rated Klipsch speakers for pool deck area', aspectRatio: 'aspect-video', image: 'https://picsum.photos/seed/294/800/600' },
  { id: 8, category: 'video', title: 'Outdoor Entertainment Wall — Vidor, TX', description: 'Covered patio TV, weatherproof enclosure, full sound', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/336/800/600' },
  { id: 9, category: 'construction', title: 'Theater Room Addition — Silsbee, TX', description: 'New addition: framing, insulation, acoustic treatment', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/378/800/600' },
  { id: 10, category: 'automation', title: 'Lutron Lighting Control — Beaumont, TX', description: 'Whole-home lighting scenes, motorized shades', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/420/800/600' },
  { id: 11, category: 'networking', title: 'Network Rack Install — Lumberton, TX', description: 'Patch panel, managed switch, UPS, clean cable management', aspectRatio: 'aspect-video', image: 'https://picsum.photos/seed/462/800/600' },
  { id: 12, category: 'surveillance', title: 'Security Camera System — Port Arthur, TX', description: '8-camera 4K NVR system, driveway to backyard', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/504/800/600' },
  { id: 13, category: 'audio', title: 'Home Listening Room — SE Texas', description: 'High-end two-channel audio with acoustic treatment', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/546/800/600' },
  { id: 14, category: 'video', title: '4K Theater Upgrade — Beaumont, TX', description: 'OLED display, Dolby Atmos, clean cable management', aspectRatio: 'aspect-video', image: 'https://picsum.photos/seed/588/800/600' },
  { id: 15, category: 'construction', title: 'Custom Entertainment Wall — Lumberton, TX', description: 'Built-in cabinetry, floating shelves, hidden wiring', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/630/800/600' },
  { id: 16, category: 'automation', title: 'Smart Home System — Galveston, TX', description: 'Full integration: audio, video, lighting, security', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/672/800/600' },
  { id: 17, category: 'networking', title: 'Wi-Fi Coverage Expansion — Toledo Bend', description: 'Eero Pro mesh network, outbuilding coverage, 40+ devices', aspectRatio: 'aspect-square', image: 'https://picsum.photos/seed/714/800/600' },
  { id: 18, category: 'construction', title: 'Home Remodel + AV Pre-Wire — Beaumont', description: 'Full kitchen remodel with whole-home AV integration', aspectRatio: 'aspect-video', image: 'https://picsum.photos/seed/756/800/600' },
];

// Generate a deterministic placeholder color from item id
function getPlaceholderColor(id: number): string {
  const shades = ['#141414', '#181818', '#1a1a1a', '#161616', '#1c1c1c'];
  return shades[id % shades.length];
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0A0A0A] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Our Work</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Project<br />
            <span className="text-[#E8521A]">Gallery</span>
          </h1>
          <div className="divider-orange mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            A sample of what we&rsquo;ve built across Southeast Texas. From dedicated home theaters
            and smart home systems to construction and remodels — this is what &ldquo;done right&rdquo; looks like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="btn-primary">
              <Phone className="w-4 h-4" />
              Call (409) 790-7889
            </a>
            <Link href="/contact" className="btn-outline-orange">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filters (static — enhancement: add JS filtering) */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#222222] overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-0 min-w-max py-1">
            {categories.map((cat) => (
              <span
                key={cat.id}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wide cursor-default whitespace-nowrap border-b-2 ${
                  cat.id === 'all'
                    ? 'text-[#E8521A] border-[#E8521A]'
                    : 'text-gray-400 border-transparent'
                }`}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group card-dark overflow-hidden hover:border-[#E8521A]/40 transition-all duration-300"
              >
                {/* AI-generated project image */}
                <div
                  className={`w-full ${item.aspectRatio} relative overflow-hidden bg-[#141414]`}
                >
                  <img 
                    src={(item as any).image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                  {/* Category tag */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#E8521A] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                      {categories.find((c) => c.id === item.category)?.label ?? item.category}
                    </span>
                  </div>
                </div>
                {/* Caption */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#E8521A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8521A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
            Ready to Be Our Next Project?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Call us and tell us what you&rsquo;re trying to build. We&rsquo;ll give you a straight answer.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-black text-white font-black text-2xl px-10 py-5 rounded-sm hover:bg-[#0A0A0A] transition-colors"
          >
            <Phone className="w-6 h-6" />
            (409) 790-7889
          </a>
        </div>
      </section>
    </>
  );
}
