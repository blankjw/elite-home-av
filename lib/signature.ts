import { CARD } from '@/lib/card'

const PROD = 'https://elitehomeav.com'

export const SIGNATURE = {
  width: 520,
  height: 148,
  logoSrc: `${PROD}/card/signature-logo.png`,
  logoDisplay: 72,
  qrSrc: `${PROD}/card/signature-qr.png`,
  qrDisplay: 80,
  pngSrc: `${PROD}/card/signature.png`,
  htmlPath: '/card/signature.html',
} as const

/**
 * Paste-ready email signature for Gmail and Outlook.
 * Table layout, inline styles, web-safe fonts.
 * Pass origin '' for same-host preview images; default is production.
 */
export function buildSignatureHtml(origin: string = PROD): string {
  const logo = SIGNATURE.logoDisplay
  const qr = SIGNATURE.qrDisplay
  const logoSrc = `${origin}/card/signature-logo.png`
  const qrSrc = `${origin}/card/signature-qr.png`

  return `<!-- Elite Home AV email signature for John Blank.
     Paste into Gmail (Settings → General → Signature) or Outlook (Signatures).
     Images load from ${PROD} after deploy. -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${SIGNATURE.width}" style="width:${SIGNATURE.width}px;max-width:${SIGNATURE.width}px;border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;">
  <tr>
    <td width="6" bgcolor="#E8521A" style="width:6px;background-color:#E8521A;font-size:0;line-height:0;">&nbsp;</td>
    <td bgcolor="#0A0A0A" style="background-color:#0A0A0A;padding:16px 16px 16px 14px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        <tr>
          <td width="${logo}" valign="top" style="width:${logo}px;padding:0 14px 0 0;">
            <a href="${CARD.website}" style="text-decoration:none;">
              <img src="${logoSrc}" width="${logo}" height="${logo}" alt="Elite Home AV" border="0" style="display:block;border:0;width:${logo}px;height:${logo}px;" />
            </a>
          </td>
          <td valign="middle" style="font-family:Arial,Helvetica,sans-serif;color:#FFFFFF;">
            <span style="font-size:18px;line-height:22px;font-weight:bold;color:#FFFFFF;">${CARD.fullName}</span><br />
            <span style="font-size:13px;line-height:18px;color:#E8521A;">${CARD.title} | ${CARD.company}</span><br />
            <span style="font-size:13px;line-height:20px;color:#D1D5DB;">
              <a href="tel:${CARD.phoneTel}" style="color:#D1D5DB;text-decoration:none;">${CARD.phoneDisplay}</a>
              &nbsp;&middot;&nbsp;
              <a href="mailto:${CARD.email}" style="color:#D1D5DB;text-decoration:none;">${CARD.email}</a>
            </span><br />
            <span style="font-size:13px;line-height:20px;color:#D1D5DB;">
              <a href="${CARD.website}" style="color:#D1D5DB;text-decoration:none;">${CARD.websiteDisplay}</a>
              &nbsp;&middot;&nbsp;
              <a href="${CARD.cardUrl}" style="color:#E8521A;text-decoration:underline;">Digital Card</a>
            </span>
          </td>
          <td width="${qr}" valign="middle" style="width:${qr}px;padding:0 0 0 12px;">
            <a href="${CARD.cardUrl}" style="text-decoration:none;">
              <img src="${qrSrc}" width="${qr}" height="${qr}" alt="Digital Card QR" border="0" style="display:block;border:0;width:${qr}px;height:${qr}px;background-color:#FFFFFF;" />
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`
}

export function buildSignaturePreviewPage(): string {
  const preview = buildSignatureHtml('')
  const snippet = buildSignatureHtml()
  const escaped = snippet
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex" />
  <title>Email signature — ${CARD.fullName}</title>
  <style>
    body { margin: 0; background: #f4f4f5; color: #111; font-family: Arial, Helvetica, sans-serif; }
    .wrap { max-width: 720px; margin: 0 auto; padding: 32px 16px 64px; }
    h1 { font-size: 22px; margin: 0 0 8px; }
    p { color: #444; font-size: 14px; line-height: 1.5; }
    .preview { background: #fff; border: 1px solid #ddd; padding: 24px; margin: 20px 0; }
    .label { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #666; margin: 24px 0 8px; }
    pre { background: #111; color: #e5e5e5; padding: 16px; overflow: auto; font-size: 12px; line-height: 1.45; white-space: pre-wrap; word-break: break-word; }
    a.back { color: #E8521A; }
    button { background: #E8521A; color: #fff; border: 0; padding: 8px 14px; font-size: 14px; font-weight: 700; cursor: pointer; }
  </style>
</head>
<body>
  <div class="wrap">
    <p><a class="back" href="/card">← Digital card</a></p>
    <h1>Email signature</h1>
    <p>Preview as it should appear in Gmail or Outlook. Copy the HTML below into your signature settings, or select the preview and paste into a compose window.</p>
    <div class="label">Preview</div>
    <div class="preview">
      ${preview}
    </div>
    <div class="label">Raw HTML — paste into Gmail or Outlook</div>
    <p><button type="button" id="copy-btn">Copy HTML</button></p>
    <pre id="snippet">${escaped}</pre>
    <script>
      document.getElementById('copy-btn').addEventListener('click', function () {
        var btn = this;
        navigator.clipboard.writeText(document.getElementById('snippet').innerText).then(function () {
          btn.textContent = 'Copied';
        });
      });
    </script>
  </div>
</body>
</html>`
}
