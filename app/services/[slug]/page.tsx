import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SolutionDetail } from "@/components/solution-detail"
import { SOLUTIONS, solutionBySlug } from "@/lib/solutions"

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const solution = solutionBySlug(slug)
  if (!solution) return {}
  return { title: `${solution.title} | Elite Home AV`, description: solution.summary }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutionBySlug(slug)
  if (!solution) notFound()
  return <SolutionDetail solution={solution} />
}
