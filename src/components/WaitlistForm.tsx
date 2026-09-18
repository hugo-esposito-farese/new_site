"use client";

import { useState } from "react";
import { hero } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export const HERO_EMAIL_INPUT_ID = "hero-email-input";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-sans text-white">
        Merci ! Vous êtes sur la liste d&apos;attente.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor={HERO_EMAIL_INPUT_ID} className="sr-only">
        Adresse email
      </label>
      <input
        id={HERO_EMAIL_INPUT_ID}
        type="email"
        required
        placeholder={hero.emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border border-white/30 bg-black/30 px-4 py-3 text-white placeholder-white/70 backdrop-blur-sm outline-none focus:border-white"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-md bg-white px-5 py-3 font-sans text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Envoi..." : `${hero.ctaLabel} →`}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-300">
          Une erreur est survenue, réessayez.
        </p>
      )}
    </form>
  );
}
