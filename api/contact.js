import { getTransporter } from "../server/utils/mailer.js";
import { escapeHtml } from "../server/utils/escapeHtml.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res
        .status(400)
        .json({ error: "Name, email and message are all required." });
    }
    if (!EMAIL_RE.test(email.trim())) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address." });
    }

    const transporter = getTransporter();
    const recipient = process.env.MAIL_TO || process.env.SMTP_USER;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: email.trim(),
      subject: `New website enquiry from ${name.trim()} — Ajibade Durojaiye & Co.`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #0B1F3A;">
          <h2 style="color:#0B1F3A;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res
      .status(500)
      .json({
        error:
          "Unable to send your message right now. Please try again shortly.",
      });
  }
}
