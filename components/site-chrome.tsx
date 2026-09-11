"use client"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { RevealMotion } from "@/components/reveal-motion"
import { Footer } from "@/components/footer"
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const bare = path.startsWith('/portal') || path.startsWith('/login')
  return <>
    {bare ? null : <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-[#0B1526]">Skip to content</a>}
    {bare ? null : <Header />}
    <main id="main-content" className={bare ? "min-h-screen" : "min-h-screen marketing-page"}>{children}</main>
    {bare ? null : <><Footer /><RevealMotion /></>}
  </>
}
