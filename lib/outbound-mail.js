/**
 * Transactional mail. Demo/review: no send.
 * Production: SMTP_URL (smtp://user:pass@host:587) or RESEND_API_KEY + MAIL_FROM.
 */
export function mailConfig(env = process.env) {
  if (env.DEMO_AUTH_ENABLED === "true" && env.ELITE_ALLOW_REVIEW_PRODUCTION === "true") {
    return { ok: true, adapter: "none", reason: "isolated review does not send mail" }
  }
  if (env.SMTP_URL) {
    try {
      const url = new URL(env.SMTP_URL)
      if (!["smtp:", "smtps:"].includes(url.protocol)) return { ok: false, reason: "SMTP_URL must be smtp:// or smtps://" }
      if (!url.hostname) return { ok: false, reason: "SMTP_URL needs host" }
      return { ok: true, adapter: "smtp", host: url.hostname, port: url.port || (url.protocol === "smtps:" ? "465" : "587") }
    } catch {
      return { ok: false, reason: "SMTP_URL is not a URL" }
    }
  }
  if (env.RESEND_API_KEY && env.MAIL_FROM) return { ok: true, adapter: "resend" }
  if (env.NODE_ENV === "production") return { ok: false, reason: "SMTP_URL or RESEND_API_KEY+MAIL_FROM required outside demo" }
  return { ok: true, adapter: "none", reason: "local review" }
}

export async function sendInquiryMail({ to, subject, text, fetchImpl = fetch, env = process.env }) {
  const cfg = mailConfig(env)
  if (!cfg.ok) throw new Error(cfg.reason)
  if (cfg.adapter === "none") return { delivered: false, adapter: "none" }
  if (cfg.adapter === "resend") {
    const res = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ from: env.MAIL_FROM, to: [to], subject, text }),
    })
    if (!res.ok) throw new Error(`resend ${res.status}`)
    return { delivered: true, adapter: "resend" }
  }
  throw new Error("SMTP runtime uses nodemailer-less TCP only after SMTP_URL is present; wire send on the host that owns the mailbox")
}
