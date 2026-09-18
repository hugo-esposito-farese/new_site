"use client";

import { hero } from "@/lib/content";
import { HERO_EMAIL_INPUT_ID } from "@/components/WaitlistForm";

export function JoinWaitlistButton() {
  function scrollToHeroEmail() {
    const input = document.getElementById(HERO_EMAIL_INPUT_ID);
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
    (input as HTMLInputElement | null)?.focus();
  }

  return (
    <button
      type="button"
      onClick={scrollToHeroEmail}
      className="rounded-md bg-ink px-6 py-3 font-sans text-sm font-medium text-cream transition-opacity hover:opacity-90"
    >
      {hero.ctaLabel} →
    </button>
  );
}
