import { buildSignaturePreviewPage } from '@/lib/signature'

export function GET() {
  return new Response(buildSignaturePreviewPage(), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex',
    },
  })
}
