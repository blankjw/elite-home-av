import QRCode from 'qrcode'
import { CARD } from '@/lib/card'

export async function GET() {
  const png = await QRCode.toBuffer(CARD.cardUrl, {
    type: 'png',
    width: 160,
    margin: 1,
    errorCorrectionLevel: 'M',
    color: {
      dark: '#0A0A0A',
      light: '#FFFFFF',
    },
  })

  return new Response(Buffer.from(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
