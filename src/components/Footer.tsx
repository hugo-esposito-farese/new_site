import Image from "next/image";
import { brand, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-center">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5">
        <p className="font-sans text-lg font-bold text-white">
          {brand.socialHandle}
        </p>
        <a
          href={`mailto:${brand.contactEmail}`}
          className="font-sans text-white/80 hover:text-white"
        >
          Contact
        </a>
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
          <Image
            src="/logo-sciences-po.png"
            alt="Sciences Po"
            width={90}
            height={14}
          />
          <span className="font-sans text-sm font-medium text-ink">
            Pré-incubée à Sciences Po Paris
          </span>
        </div>
        <div className="flex items-center gap-6 pt-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm text-white/60 hover:text-white/90"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
