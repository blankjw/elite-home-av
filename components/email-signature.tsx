'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function EmailSignaturePanel({ html }: { html: string }) {
  const [copied, setCopied] = useState(false)

  async function copyHtml() {
    try {
      await navigator.clipboard.writeText(html)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      const area = document.getElementById('signature-html') as HTMLTextAreaElement | null
      area?.select()
    }
  }

  return (
    <section
      id="signature"
      className="scroll-mt-8 border-t border-[#1F1F1F] bg-[#0A0A0A] px-4 py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8521A]">
          Email signature
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
          One image, one link. Paste the HTML into Gmail or Outlook. Clicking the card
          opens elitehomeav.com/card.
        </p>

        <img
          src="/card/email-signature.png"
          width={500}
          height={150}
          alt="John Blank, Elite Home AV"
          className="mt-6 w-full max-w-[500px] border border-[#262626]"
        />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
            Copy HTML
          </p>
          <button
            type="button"
            onClick={copyHtml}
            className="inline-flex items-center gap-2 bg-[#E8521A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#d14816]"
          >
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy HTML'}
          </button>
        </div>
        <textarea
          id="signature-html"
          readOnly
          value={html}
          rows={4}
          className="mt-3 w-full resize-y border border-[#262626] bg-[#111111] p-4 font-mono text-xs leading-relaxed text-[#D1D5DB] outline-none focus:border-[#E8521A]"
          spellCheck={false}
        />
      </div>
    </section>
  )
}
