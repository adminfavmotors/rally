import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rally Craft — Budowa i Serwis Samochodów Rajdowych",
  description: "Profesjonalny serwis i budowa rajdówek. Kraków, Polska.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${bebasNeue.variable} ${dmSans.variable}`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
