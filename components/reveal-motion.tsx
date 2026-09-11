"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
/** Never hide content. Reduced-motion stays fully visible. Optional one-time class for motion preference. */
export function RevealMotion() {
  const path = usePathname()
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) {
      document.querySelectorAll(".reveal-pending").forEach((el) => el.classList.remove("reveal-pending"))
      return
    }
    const items = [...document.querySelectorAll<HTMLElement>(".marketing-page section:not(.editorial-hero) > div")]
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-seen")
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.08, rootMargin: "40px" })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [path])
  return null
}
