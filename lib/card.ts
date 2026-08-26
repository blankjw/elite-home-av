export const CARD = {
  firstName: 'John',
  lastName: 'Blank',
  fullName: 'John Blank',
  title: 'Owner',
  company: 'Elite Home AV LLC',
  location: 'Lumberton, TX · Southeast Texas',
  city: 'Lumberton',
  region: 'TX',
  country: 'United States',
  phoneDisplay: '(409) 790-7889',
  phoneTel: '4097907889',
  phoneE164: '+14097907889',
  email: 'john@elitehomeav.com',
  website: 'https://elitehomeav.com',
  websiteDisplay: 'elitehomeav.com',
  cardUrl: 'https://elitehomeav.com/card',
  vcfPath: '/card/john-blank.vcf',
  vcfFilename: 'John-Blank.vcf',
} as const

/** vCard 3.0 with CRLF line endings for iOS/Android Add to Contacts. */
export function buildVCard(): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'PRODID:-//Elite Home AV LLC//Digital Card//EN',
    `N:${CARD.lastName};${CARD.firstName};;;`,
    `FN:${CARD.fullName}`,
    `ORG:${CARD.company}`,
    `TITLE:${CARD.title}`,
    `TEL;TYPE=CELL,VOICE,MSG:${CARD.phoneE164}`,
    `EMAIL;TYPE=INTERNET,WORK:${CARD.email}`,
    `URL:${CARD.website}`,
    `ADR;TYPE=WORK:;;${CARD.city};${CARD.region};;;${CARD.country}`,
    'NOTE:Southeast Texas',
    'END:VCARD',
  ]

  return `${lines.join('\r\n')}\r\n`
}

export function vCardResponse(): Response {
  return new Response(buildVCard(), {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `inline; filename="${CARD.vcfFilename}"`,
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
