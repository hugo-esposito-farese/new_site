import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  console.log("[waitlist] nouvelle inscription:", email);

  // Persistance dans le Google Sheet via un Apps Script Web App (voir
  // google-apps-script/waitlist.gs et README.md pour la mise en place).
  // Tant que la variable n'est pas configurée, l'email reste seulement
  // loggé ci-dessus.
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        console.error(
          "[waitlist] le Google Sheet a répondu avec une erreur:",
          res.status
        );
      }
    } catch (err) {
      console.error("[waitlist] échec de l'envoi vers le Google Sheet:", err);
    }
  } else {
    console.warn(
      "[waitlist] GOOGLE_SHEETS_WEBHOOK_URL non configurée — email non persisté dans le Sheet"
    );
  }

  return NextResponse.json({ ok: true });
}
