import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  // TODO avant lancement réel : cette route ne fait que logger l'email
  // (visible dans les logs de la fonction Vercel) — elle ne le persiste
  // nulle part de façon fiable. Brancher un vrai stockage avant d'envoyer
  // du trafic payant sur cette page : Resend (email de notif), Google
  // Sheet, Airtable, Supabase... au choix.
  console.log("[waitlist] nouvelle inscription:", email);

  return NextResponse.json({ ok: true });
}
