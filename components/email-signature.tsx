'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { SIGNATURE } from '@/lib/signature'

export function EmailSignaturePanel({
  previewHtml,
  copyHtml,
}: {
  previewHtml: string
  copyHtml: string
}) {
  const [copied, setCopied] = useState(false)

  async function copyHtmlSource() {
    try {
      await navigator.clipboard.writeText(copyHtml)
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
      className="scroll-mt-8 border-t border-[#1F1F1F] bg-[#0A0A0A] px-4 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8521A]">
          Email signature
        </p>
        <h2 className="mt-3 font-bebas text-4xl tracking-tight text-white sm:text-5xl">
          Paste into Gmail or Outlook
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#9CA3AF]">
          Compact table layout with inline styles. Select the preview and copy, or copy the
          HTML source. Images use{' '}
          <span className="text-white">elitehomeav.com</span> URLs so they load after deploy.
        </p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
          Preview
        </p>
        <div className="mt-3 overflow-x-auto border border-[#262626] bg-white p-6">
          <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
            Raw HTML
          </p>
          <button
            type="button"
            onClick={copyHtmlSource}
            className="inline-flex items-center gap-2 bg-[#E8521A] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#d14816]"
          >
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy HTML'}
          </button>
        </div>
        <textarea
          id="signature-html"
          readOnly
          value={copyHtml}
          rows={14}
          className="mt-3 w-full resize-y border border-[#262626] bg-[#111111] p-4 font-mono text-xs leading-relaxed text-[#D1D5DB] outline-none focus:border-[#E8521A]"
          spellCheck={false}
        />

        <p className="mt-6 text-sm text-[#6B7280]">
          Standalone preview:{' '}
          <a href={SIGNATURE.htmlPath} className="text-[#E8521A] hover:underline">
            /card/signature.html
          </a>
          {' · '}
          Signature image:{' '}
          <a href="/card/signature.png" className="text-[#E8521A] hover:underline">
            /card/signature.png
          </a>
        </p>
      </div>
    </section>
  )
}
