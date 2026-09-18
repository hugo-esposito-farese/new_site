import { Faq } from "@/components/Faq";
import { JoinWaitlistButton } from "@/components/JoinWaitlistButton";

export function FaqSection() {
  return (
    <section className="bg-cream px-6 pt-8 pb-24">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-10">
        <Faq />
        <JoinWaitlistButton />
      </div>
    </section>
  );
}
