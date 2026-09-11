import Link from "next/link"
import { SiteCta } from "@/components/site-cta"

export function IntroStrip() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center border-l-4 border-[#AAB6C5] pl-6 md:pl-8">
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-snug tracking-[-0.02em] max-w-2xl">
            &ldquo;You shouldn&apos;t need three contractors and a folder of remotes to use your own house.&rdquo;
          </blockquote>
          <div className="lg:text-right shrink-0">
            <p className="text-sm text-[#9BA7B5]">John Blank · Owner</p>
            <Link href="/about" className="mt-2 inline-block text-sm text-[#AAB6C5] hover:text-white transition-colors">
              About Elite Home AV →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
