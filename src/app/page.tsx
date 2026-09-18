import { Hero } from "@/components/Hero";
import { ValueProp } from "@/components/ValueProp";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProp />
      <FaqSection />
      <Footer />
    </main>
  );
}
