import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteCta } from "@/components/site-cta"
import { CASE_STUDIES } from "@/lib/case-studies"

const study = CASE_STUDIES.find((item) => item.slug === "under-the-surface")!

export const metadata: Metadata = {
  title: "Private Case Study Review | Elite Home AV",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.elitehomeav.com/gallery" },
}

export default function UnderTheSurfaceReview() {
  if (process.env.PORTFOLIO_REVIEW !== "1") notFound()
  return <div className="case-study-review">
    <header className="case-study-hero"><div className="e-shell">
      <p className="e-kicker">Private review · not for publication</p><h1>{study.title}</h1><p>{study.summary}</p>
      <dl><div><dt>Location</dt><dd>{study.location}</dd></div><div><dt>Status</dt><dd>{study.status}</dd></div><div><dt>Story type</dt><dd>Under the Surface</dd></div></dl>
    </div></header>
    <section className="case-study-body e-paper"><div className="e-shell">
      <div className="case-study-scope" aria-label="Project planning scope">{study.scope.map((item) => <span key={item}>{item}</span>)}</div>
      <div className="case-study-chapters">{study.chapters.map((chapter, index) => <article key={chapter.label}>
        <div><p className="e-kicker">{chapter.label}</p><h2>{chapter.title}</h2><p>{chapter.copy}</p></div>
        <div className="case-study-media-slot" aria-label={`${chapter.label} photography awaiting approval`}><div className="work-linework" aria-hidden="true"><span/><span/><span/><span/></div><p>Approved photography inserts here</p><span>{study.mediaSlots[index]}</span></div>
      </article>)}</div>
      <div className="case-study-review-note"><p className="e-kicker">Publication gate</p><h2>Structure complete. Photography and final claims remain held.</h2><p>This route is available only when the private portfolio-review build flag is enabled. It is excluded from the sitemap, marked noindex, and returns 404 in the normal production configuration.</p><SiteCta href="/contact" variant="solid">Discuss a similar project</SiteCta></div>
    </div></section>
  </div>
}
