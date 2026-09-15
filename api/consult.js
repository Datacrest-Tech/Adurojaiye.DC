import { getTransporter } from "../server/utils/mailer.js";
import { escapeHtml } from "../server/utils/escapeHtml.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const {
      name,
      industry,
      phone,
      email,
      yearsInOperation,
      interests = [],
      notes = "",
    } = req.body || {};

    if (
      !name?.trim() ||
      !industry?.trim() ||
      !phone?.trim() ||
      !email?.trim() ||
      !yearsInOperation
    ) {
      return res.status(400).json({
        error:
          "Name, business industry, phone, email and years in operation are all required.",
      });
    }
    if (!EMAIL_RE.test(email.trim())) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address." });
    }

    const interestList = Array.isArray(interests)
      ? interests
      : [interests].filter(Boolean);
    const transporter = getTransporter();
    const recipient = process.env.MAIL_TO || process.env.SMTP_USER;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: email.trim(),
      subject: `New consultation request from ${name.trim()} — Ajibade Durojaiye & Co.`,
      text:
        `Name: ${name}\nBusiness Industry: ${industry}\nPhone: ${phone}\nEmail: ${email}\n` +
        `Years In Operation: ${yearsInOperation}\nInterested In: ${interestList.join(", ") || "—"}\n\n` +
        `Additional Notes:\n${notes || "—"}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #0B1F3A;">
          <h2 style="color:#0B1F3A;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Business Industry:</strong> ${escapeHtml(industry)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Years In Operation:</strong> ${escapeHtml(yearsInOperation)}</p>
          <p><strong>Interested In:</strong> ${escapeHtml(interestList.join(", ") || "—")}</p>
          <p><strong>Additional Notes:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(notes || "—")}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Consult form error:", error);
    return res
      .status(500)
      .json({
        error:
          "Unable to submit your request right now. Please try again shortly.",
      });
  }
}
