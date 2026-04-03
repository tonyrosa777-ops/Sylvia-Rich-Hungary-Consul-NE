import { NextRequest, NextResponse } from "next/server";

interface QuizSubmission {
  name: string;
  email: string;
  note?: string;
  answers: Record<string, string>;
  recommendation: string;
}

export async function POST(req: NextRequest) {
  let body: QuizSubmission;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 422 });
  }

  const { name, email, note, answers, recommendation } = body;
  if (!name || !email) {
    return NextResponse.json({ error: "Invalid request" }, { status: 422 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONSUL_EMAIL = process.env.CONSUL_EMAIL ?? "sylvia@hungarianconsulne.com";

  const answerSummary = Object.entries(answers)
    .map(([k, v]) => `  ${k}: ${v}`)
    .join("\n");

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
          from: "quiz@hungarianconsulne.com",
          to: CONSUL_EMAIL,
          subject: `New Quiz Lead: ${name} — matched to ${recommendation}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Recommendation: ${recommendation}`,
            ``,
            `Answers:`,
            answerSummary,
            note ? `\nNote: ${note}` : "",
          ].join("\n"),
        }),
      });

      // Auto-reply to submitter
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
          subject: `Your consular service recommendation, ${name}`,
          text: [
            `Hello ${name},`,
            ``,
            `Thank you for completing the quiz. Based on your answers, I matched you to: ${recommendation}.`,
            ``,
            `I review every submission personally. If your situation calls for a direct answer before you book, I will be in touch.`,
            ``,
            `To book a Monday appointment in Derry, NH: https://hungarianconsulne.com/booking`,
            ``,
            `Sylvia Rich`,
            `Honorary Consul of Hungary — New England`,
            `hungarianconsulne.com`,
          ].join("\n"),
        }),
      });
    } catch {
      // Log and continue — never block user experience
      console.error("[quiz] Resend error — lead captured in log below");
    }
  }

  // Always log (development fallback + audit trail)
  console.log("[quiz] New submission", { name, email, recommendation, answers, note });

  return NextResponse.json({ ok: true });
}
