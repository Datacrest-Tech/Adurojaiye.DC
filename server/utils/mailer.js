import nodemailer from 'nodemailer'

let transporter

/**
 * Lazily creates (and caches) the Nodemailer SMTP transporter using
 * credentials from environment variables. Throws a clear error if the
 * required variables are missing, instead of failing silently later.
 */
export function getTransporter() {
  if (transporter) return transporter

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in backend/.env'
    )
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587/25
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  return transporter
}

export async function verifyMailer() {
  const t = getTransporter()
  await t.verify()
}
