"use client"

import { FormEvent, Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { track } from "@vercel/analytics"
import { SiteCta } from "@/components/site-cta"
import { CONTACT } from "@/lib/site"

const services = [
  "Home audio",
  "Home theater",
  "Lighting",
  "Surveillance & access control",
  "Automation",
  "Networking & integration",
  "Not sure yet",
]

type Status = "idle" | "submitting" | "saved" | "error"

function ContactFormInner() {
  const params = useSearchParams()
  const presetIntent = params.get("intent") === "existing_service" ? "existing_service" : "new_project"
  const presetService = params.get("service") || ""
  const [status, setStatus] = useState<Status>("idle")
  const [formData, setFormData] = useState({
    intent: presetIntent,
    name: "",
    phone: "",
    email: "",
    service: services.includes(presetService) ? presetService : "",
    message: "",
  })

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    try {
      const res = await fetch("https://formspree.io/f/mkjnaddb", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Submission failed")
      track("contact_form_submitted", {
        intent: formData.intent,
        service: formData.service,
      })
      setStatus("saved")
    } catch {
      track("contact_form_error", { intent: formData.intent })
      setStatus("error")
    }
  }

  const fieldClass =
    "w-full bg-[#152942] border border-[#78899C] rounded-sm text-white placeholder-[#B8C3CF] px-3 py-3 text-sm focus:border-[#AAB6C5] transition-colors"

  if (status === "saved") {
    return (
      <div className="border-t border-[#31445A] pt-8">
        <h2 className="text-xl font-medium text-white">Thank you for getting in touch.</h2>
        <p className="mt-3 text-[#C3CCD7] leading-relaxed">
          Your inquiry was accepted. John will follow up using the contact details you provided. For time-sensitive help, please call.
        </p>
        <div className="mt-6">
          <SiteCta href={CONTACT.phoneHref} variant="text">
            Call {CONTACT.phone}
          </SiteCta>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-[#31445A] pt-8">
      <h2 className="text-xl font-medium text-white mb-6">{formData.intent === "existing_service" ? "Request service" : "Project inquiry"}</h2>
      {status === "error" ? (
        <p role="alert" className="mb-6 text-sm text-red-400">Your message could not be sent. Please try again or call {CONTACT.phone}.</p>
      ) : null}
      <div className="space-y-6">
        <fieldset className="text-sm text-[#C3CCD7]">
          <legend className="text-xs text-[#9BA7B5] mb-2">What do you need?</legend>
          <label className="mr-6 inline-flex min-h-11 items-center"><input type="radio" name="intent" checked={formData.intent === "new_project"} onChange={() => setFormData((p) => ({ ...p, intent: "new_project" }))} className="mr-2" />New project</label>
          <label className="inline-flex min-h-11 items-center"><input type="radio" name="intent" checked={formData.intent === "existing_service"} onChange={() => setFormData((p) => ({ ...p, intent: "existing_service" }))} className="mr-2" />Existing system / ELITE Care</label>
        </fieldset>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs text-[#9BA7B5] mb-2">Name</label>
            <input id="name" autoComplete="name" required value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className={fieldClass} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs text-[#9BA7B5] mb-2">Phone</label>
            <input id="phone" autoComplete="tel" type="tel" required value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} className={fieldClass} />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-[#9BA7B5] mb-2">Email (optional)</label>
          <input id="email" autoComplete="email" type="email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="service" className="block text-xs text-[#9BA7B5] mb-2">Solution</label>
          <select id="service" required value={formData.service} onChange={(e) => setFormData((p) => ({ ...p, service: e.target.value }))} className={`${fieldClass} bg-[#0B1526]`}>
            <option value="" disabled>Select a solution</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-xs text-[#9BA7B5] mb-2">Details</label>
          <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} className={`${fieldClass} resize-none`} />
        </div>
        <p className="text-xs text-[#9BA7B5]">Your details are used to respond to your inquiry. Please don’t include passwords or access codes.</p>
        <button type="submit" disabled={status === "submitting"} className="e-button disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  )
}

export default function ContactForm() {
  return <Suspense fallback={<p className="text-sm text-[#9BA7B5]">Loading form…</p>}><ContactFormInner /></Suspense>
}
