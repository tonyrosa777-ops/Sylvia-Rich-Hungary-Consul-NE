import { NextRequest, NextResponse } from "next/server";

interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  let body: ContactSubmission;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 422 });
  }

  const { name, email, subject, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONSUL_EMAIL = process.env.CONSUL_EMAIL ?? "sylvia@hungarianconsulne.com";

  if (RESEND_API_KEY) {
    try {
      // Notify Sylvia
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "contact@hungarianconsulne.com",
          to: CONSUL_EMAIL,
          reply_to: email,
          subject: `Contact Form: ${subject || "General Inquiry"} — ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Subject: ${subject || "—"}`,
            ``,
            `Message:`,
            message,
          ].join("\n"),
        }),
      });

      // Auto-reply to sender
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Sylvia Rich <noreply@hungarianconsulne.com>",
          to: email,
          reply_to: CONSUL_EMAIL,
          subject: `Message received — Honorary Consulate of Hungary, New England`,
          text: [
            `Hello ${name},`,
            ``,
            `Thank you for reaching out. I have received your message and will respond within one business day.`,
            ``,
            `If your matter is time-sensitive, I recommend booking a Monday appointment directly:`,
            `https://hungarianconsulne.com/booking`,
            ``,
            `Sylvia Rich`,
            `Honorary Consul of Hungary — New England`,
            `hungarianconsulne.com`,
          ].join("\n"),
        }),
      });
    } catch {
      console.error("[contact] Resend error — message captured in log below");
    }
  }

  console.log("[contact] New message", { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
