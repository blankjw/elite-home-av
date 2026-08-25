import { ImageResponse } from 'next/og'
import QRCode from 'qrcode'
import { CARD } from '@/lib/card'
import { SIGNATURE } from '@/lib/signature'

export async function GET() {
  const qrDataUrl = await QRCode.toDataURL(CARD.cardUrl, {
    width: 160,
    margin: 1,
    errorCorrectionLevel: 'M',
    color: {
      dark: '#0A0A0A',
      light: '#FFFFFF',
    },
  })

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div style={{ width: 6, height: '100%', backgroundColor: '#E8521A' }} />
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            padding: '16px 16px 16px 14px',
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              backgroundColor: '#E8521A',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 46,
              fontWeight: 700,
              marginRight: 14,
            }}
          >
            E
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', fontSize: 18, fontWeight: 700, lineHeight: 1.2 }}>
              {CARD.fullName}
            </div>
            <div style={{ display: 'flex', fontSize: 13, color: '#E8521A', marginTop: 2 }}>
              {CARD.title} | {CARD.company}
            </div>
            <div style={{ display: 'flex', fontSize: 13, color: '#D1D5DB', marginTop: 10 }}>
              {CARD.phoneDisplay} · {CARD.email}
            </div>
            <div style={{ display: 'flex', fontSize: 13, color: '#D1D5DB', marginTop: 2 }}>
              {CARD.websiteDisplay} · Digital Card
            </div>
          </div>
          <img
            src={qrDataUrl}
            width={SIGNATURE.qrDisplay}
            height={SIGNATURE.qrDisplay}
            alt=""
            style={{ width: SIGNATURE.qrDisplay, height: SIGNATURE.qrDisplay, marginLeft: 12 }}
          />
        </div>
      </div>
    ),
    { width: SIGNATURE.width, height: SIGNATURE.height },
  )
}
