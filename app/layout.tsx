import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Barlow, Barlow_Condensed } from "next/font/google";

import LenisProvider from "@/components/LenisProvider";

import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rally Craft",
  description: "Rally car preparation company from Krakow, Poland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
