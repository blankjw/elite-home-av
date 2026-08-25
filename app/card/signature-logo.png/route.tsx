import { ImageResponse } from 'next/og'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E8521A',
          color: '#FFFFFF',
          fontSize: 92,
          fontWeight: 700,
        }}
      >
        E
      </div>
    ),
    { width: 144, height: 144 },
  )
}
