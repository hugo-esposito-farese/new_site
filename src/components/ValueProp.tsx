import { valueProp } from "@/lib/content";

export function ValueProp() {
  return (
    <section className="bg-cream px-6 pt-20 pb-4 sm:pt-28">
      <div className="mx-auto max-w-2xl">
        <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
          {valueProp}
        </p>
      </div>
    </section>
  );
}
