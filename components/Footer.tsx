"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-8 py-10 md:px-16 md:py-12">
      <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[auto_1fr_auto] md:items-end">
        <div>
          <div className="font-display text-[28px] leading-none tracking-[0.08em] text-bg">
            RALLY<span className="text-yellow">CRAFT</span>
          </div>
          <p className="mt-3 font-body text-[12px] uppercase tracking-[0.16em] text-white/35">
            Kraków, Polska
          </p>
        </div>

        <p className="font-body text-[12px] leading-[1.8] text-white/45 md:justify-self-center">
          © 2025 Rally Craft. Wszelkie prawa zastrzeżone.
        </p>

        <div className="flex flex-wrap gap-8 md:justify-self-end">
          <Link
            href="https://www.facebook.com/"
            className="font-body text-[12px] font-medium uppercase tracking-[0.12em] text-white/50 transition-colors hover:text-yellow"
          >
            Facebook
          </Link>
          <Link
            href="#kontakt"
            className="font-body text-[12px] font-medium uppercase tracking-[0.12em] text-white/50 transition-colors hover:text-yellow"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
