import { headers } from 'next/headers'
import QRCode from 'qrcode'
import { CARD } from '@/lib/card'

export async function getLiveCardUrl(): Promise<string> {
  const headerList = await headers()
  const host = (headerList.get('x-forwarded-host') ?? headerList.get('host') ?? '')
    .split(',')[0]
    .trim()

  if (!host || /localhost|127\.0\.0\.1/i.test(host)) {
    return CARD.cardUrl
  }

  if (/(^|\.)elitehomeav\.com$/i.test(host)) {
    return CARD.cardUrl
  }

  const proto = headerList.get('x-forwarded-proto') ?? 'https'
  return `${proto}://${host}/card`
}

export async function cardQrSvg(url: string): Promise<string> {
  const svg = await QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 1,
    width: 240,
    color: {
      dark: '#0A0A0A',
      light: '#FFFFFF',
    },
  })

  return svg.replace(/<\?xml[^?]*\?>\s*/i, '').trim()
}
