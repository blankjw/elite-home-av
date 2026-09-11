import type { ReactNode } from "react"

export type SceneVariant =
  | "theater"
  | "audio"
  | "lighting"
  | "surveillance"
  | "automation"
  | "network"
  | "ambient"
  | "rack"

type ScenePanelProps = {
  variant?: SceneVariant
  className?: string
  children?: ReactNode
  label?: string
  aspect?: "wide" | "square" | "tall" | "hero" | "fill"
}

const variantStyles: Record<SceneVariant, string> = {
  theater:
    "bg-[radial-gradient(ellipse_80%_70%_at_50%_100%,rgba(232,82,26,0.35),transparent_55%),linear-gradient(160deg,#0c1424_0%,#140a08_45%,#071525_100%)]",
  audio:
    "bg-[radial-gradient(ellipse_70%_60%_at_20%_80%,rgba(232,82,26,0.22),transparent_50%),linear-gradient(145deg,#101820_0%,#071525_100%)]",
  lighting:
    "bg-[radial-gradient(ellipse_60%_50%_at_70%_30%,rgba(255,180,100,0.18),transparent_55%),linear-gradient(200deg,#1a1208_0%,#071525_100%)]",
  surveillance:
    "bg-[radial-gradient(ellipse_55%_45%_at_50%_40%,rgba(100,160,220,0.12),transparent_50%),linear-gradient(180deg,#0a1018_0%,#071525_100%)]",
  automation:
    "bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(232,82,26,0.15),transparent_50%),linear-gradient(135deg,#121212_0%,#071525_100%)]",
  network:
    "bg-[radial-gradient(ellipse_45%_35%_at_30%_60%,rgba(232,82,26,0.12),transparent_45%),linear-gradient(160deg,#0d0d12_0%,#071525_100%)]",
  ambient:
    "bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(232,82,26,0.08),transparent_60%),linear-gradient(180deg,#111_0%,#071525_100%)]",
  rack:
    "bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,#0f0f0f_0%,#071525_100%)] bg-[size:24px_24px,24px_24px,auto]",
}

const aspectStyles = {
  wide: "aspect-[16/9] min-h-[10rem]",
  square: "aspect-square min-h-[12rem]",
  tall: "aspect-[3/4] min-h-[14rem]",
  hero: "min-h-[clamp(14rem,32vw,22rem)]",
  fill: "min-h-full h-full",
}

export function ScenePanel({
  variant = "ambient",
  className = "",
  children,
  label,
  aspect = "wide",
}: ScenePanelProps) {
  return (
    <div
      className={`relative overflow-hidden border border-[#31445A] ${variantStyles[variant]} ${aspectStyles[aspect]} ${className}`}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.35] pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#071525] via-[#071525]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {label ? (
        <p className="absolute top-4 left-4 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-white/50">
          {label}
        </p>
      ) : null}
      {children ? <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">{children}</div> : null}
    </div>
  )
}
