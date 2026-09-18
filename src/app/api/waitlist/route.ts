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
  //
  // En GET (pas POST) : script.google.com/.../exec répond par une
  // redirection 302 vers script.googleusercontent.com, et fetch() rétrograde
  // une requête POST en GET en suivant une redirection — doPost ne recevait
  // donc jamais le corps envoyé. GET n'a pas ce problème.
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  // DEBUG TEMPORAIRE : le champ `sheet` est renvoyé au client pour
  // diagnostiquer pourquoi les emails n'arrivent pas dans le Sheet (pas de
  // visibilité sur les logs Vercel depuis cette session). À retirer une
  // fois le problème résolu.
  let sheetDebug: Record<string, unknown> = {
    hasWebhookUrl: Boolean(webhookUrl),
    webhookUrlPreview: webhookUrl
      ? `${webhookUrl.slice(0, 45)}...${webhookUrl.slice(-10)}`
      : null,
  };

  if (webhookUrl) {
    try {
      const url = `${webhookUrl}?email=${encodeURIComponent(email)}`;
      const res = await fetch(url);
      const text = await res.text();
      sheetDebug = { ...sheetDebug, status: res.status, body: text.slice(0, 300) };
      if (!res.ok || !text.includes('"ok":true')) {
        console.error(
          "[waitlist] réponse inattendue du Google Sheet:",
          res.status,
          text
        );
      }
    } catch (err) {
      sheetDebug = {
        ...sheetDebug,
        error: err instanceof Error ? err.message : String(err),
      };
      console.error("[waitlist] échec de l'envoi vers le Google Sheet:", err);
    }
  } else {
    console.warn(
      "[waitlist] GOOGLE_SHEETS_WEBHOOK_URL non configurée — email non persisté dans le Sheet"
    );
  }

  return NextResponse.json({ ok: true, sheetDebug });
}
