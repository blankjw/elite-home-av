import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ScenePanel, type SceneVariant } from "@/components/scene-panel"

type FeatureCardProps = {
  href: string
  title: string
  tag: string
  scene: SceneVariant
  className?: string
}

export function FeatureCard({ href, title, tag, scene, className = "" }: FeatureCardProps) {
  return (
    <Link href={href} className={`group block h-full hover-lift ${className}`}>
      <ScenePanel
        variant={scene}
        label={tag}
        className="h-full min-h-[18rem] md:min-h-[24rem] group-hover:border-[#AAB6C5]/30 transition-colors"
      >
        <div className="flex items-end justify-between gap-4 w-full">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.02em]">{title}</h3>
            <p className="mt-2 text-sm text-white/60 group-hover:text-[#AAB6C5] transition-colors">
              Explore this service →
            </p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white group-hover:bg-[#AAB6C5] group-hover:border-[#AAB6C5] transition-all shrink-0">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </ScenePanel>
    </Link>
  )
}
