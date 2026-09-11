import { getRepo } from "./repo.js"
import { mailConfig, sendInquiryMail } from "./outbound-mail.js"

export async function handleInquiryCreate(body) {
  if (!body || typeof body !== "object") return { status: 400, json: { error: "invalid" } }
  const name = String(body.name || "").trim()
  const phone = String(body.phone || "").trim()
  const service = String(body.service || "").trim()
  const message = String(body.message || "").trim()
  if (!name || !phone || !service || !message) return { status: 400, json: { error: "required fields missing" } }
  const repo = await getRepo()
  const saved = await repo.createInquiry({ intent: body.intent, name, phone, email: body.email, service, message })
  const mail = mailConfig()
  let delivered = false
  if (mail.ok && mail.adapter !== "none") {
    const result = await sendInquiryMail({
      to: process.env.INQUIRY_TO || "john@elitehomeav.com",
      subject: `Inquiry ${service}`,
      text: `${name} ${phone}\n${message}`,
    })
    delivered = result.delivered
  }
  return {
    status: 200,
    json: {
      id: saved.id,
      status: saved.status,
      delivered,
      accepted: true,
      note: delivered ? "Queued to the configured mail adapter." : "Accepted and stored. Not emailed.",
    },
  }
}

export async function handleInquiryRead(id) {
  const repo = await getRepo()
  const row = await repo.getInquiry(id)
  if (!row) return { status: 404, json: { error: "not found" } }
  return {
    status: 200,
    json: {
      id: row.id,
      status: row.status,
      delivered: Boolean(row.delivered),
      accepted: true,
      intent: row.intent,
      note: row.delivered ? "Mail adapter reported delivered." : "Accepted and stored. Not emailed.",
    },
  }
}
