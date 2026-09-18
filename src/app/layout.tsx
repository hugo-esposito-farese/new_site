import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comptallié — Votre collaborateur comptable IA",
  description:
    "La pénurie de comptables ne doit plus freiner votre cabinet. Comptallié met un collaborateur comptable IA au service des cabinets français.",
  openGraph: {
    title: "Comptallié — Votre collaborateur comptable IA",
    description:
      "La pénurie de comptables ne doit plus freiner votre cabinet.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
