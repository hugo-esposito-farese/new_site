import Image from "next/image";
import { brand, hero } from "@/lib/content";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark gradient so the white text stays legible over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
      {/* Subtle film grain, matching the reference's analog texture */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: "url(/grain.png)",
          backgroundSize: "128px 128px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 flex justify-center pt-10">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-comptallie.png"
            alt=""
            width={22}
            height={22}
            className="opacity-95"
          />
          <span className="font-sans text-lg font-medium text-white">
            {brand.name}
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-auto flex flex-col items-center gap-6 px-6 pb-16 text-center sm:pb-20">
        <h1 className="font-display max-w-3xl text-4xl italic text-white sm:text-6xl">
          {hero.headline}
        </h1>
        <p className="max-w-xl font-sans text-lg text-white/90">
          {hero.subtitle}
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}
