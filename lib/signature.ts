import { CARD } from '@/lib/card'

export const SIGNATURE_IMAGE_SRC = 'https://elitehomeav.com/card/email-signature.png'
export const SIGNATURE_IMAGE_WIDTH = 500

/** Gmail/Outlook snippet: one hosted card image linking to the digital card. */
export const SIGNATURE_HTML = `<a href="${CARD.cardUrl}"><img src="${SIGNATURE_IMAGE_SRC}" width="${SIGNATURE_IMAGE_WIDTH}" alt="John Blank, Elite Home AV" style="border:0;display:block;" /></a>`
