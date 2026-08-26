"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Segment = "residential" | "commercial"

type ServiceCard = {
  title: string
  href: string
  image: string
  alt: string
}

const residentialServices: ServiceCard[] = [
  { title: "Home Audio", href: "/services#audio", image: "/images/service-audio.jpg", alt: "Modern open living room" },
  { title: "Home Theater", href: "/services#theater", image: "/images/service-theater.jpg", alt: "Contemporary dining and living interior" },
  { title: "Lighting", href: "/services#lighting", image: "/images/service-lighting.jpg", alt: "Modern home exterior at dusk" },
  { title: "Surveillance & Access", href: "/services#surveillance", image: "/images/service-surveillance.jpg", alt: "Modern residence with pool" },
  { title: "Automation", href: "/services#automation", image: "/images/service-automation.jpg", alt: "Bright residential living room" },
  { title: "Networking", href: "/services#networking", image: "/images/service-networking.jpg", alt: "Modern home exterior" },
]

const commercialServices: ServiceCard[] = [
  { title: "Distributed Audio", href: "/services#audio", image: "/images/service-audio.jpg", alt: "Modern open living room" },
  { title: "Presentation Spaces", href: "/services#theater", image: "/images/service-theater.jpg", alt: "Contemporary dining and living interior" },
  { title: "Lighting Control", href: "/services#lighting", image: "/images/service-lighting.jpg", alt: "Modern home exterior at dusk" },
  { title: "Surveillance & Access", href: "/services#surveillance", image: "/images/service-surveillance.jpg", alt: "Modern residence with pool" },
  { title: "Automation", href: "/services#automation", image: "/images/service-automation.jpg", alt: "Bright residential living room" },
  { title: "Networking", href: "/services#networking", image: "/images/service-networking.jpg", alt: "Modern home exterior" },
]

function servicesFor(segment: Segment): ServiceCard[] {
  switch (segment) {
    case "residential":
      return residentialServices
    case "commercial":
      return commercialServices
    default: {
      const _exhaustive: never = segment
      return _exhaustive
    }
  }
}

export function Services() {
  const [segment, setSegment] = useState<Segment>("residential")
  const cards = servicesFor(segment)

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#3B6D9A]" />
              <p className="text-[#3B6D9A] text-sm font-semibold tracking-[0.2em] uppercase">
                What We Do
              </p>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#1E293B] leading-[0.9]">
              One System.
              <br />
              Built Around Your Space.
            </h2>
          </div>

          <div
            className="inline-flex self-start border border-[#D5DAE0] bg-white"
            role="group"
            aria-label="Project type"
          >
            <SegmentButton
              selected={segment === "residential"}
              onSelect={() => setSegment("residential")}
            >
              Residential
            </SegmentButton>
            <SegmentButton
              selected={segment === "commercial"}
              onSelect={() => setSegment("commercial")}
            >
              Commercial
            </SegmentButton>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <li key={`${segment}-${card.title}`}>
              <Link
                href={card.href}
                className="group relative block overflow-hidden aspect-[4/5] bg-[#1E293B]"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                  aria-hidden="true"
                />
                <h3 className="absolute bottom-5 left-5 right-5 font-bebas text-3xl sm:text-4xl tracking-wide text-white leading-none">
                  {card.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SegmentButton({
  selected,
  onSelect,
  children,
}: {
  selected: boolean
  onSelect: () => void
  children: string
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`px-6 py-3 text-sm font-semibold tracking-wide rounded-none transition-colors ${
        selected
          ? "bg-[#3B6D9A] text-white"
          : "bg-transparent text-[#64748B] hover:text-[#1E293B]"
      }`}
    >
      {children}
    </button>
  )
}
