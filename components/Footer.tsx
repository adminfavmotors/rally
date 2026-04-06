"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink px-8 py-10 md:px-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="font-display text-[22px] tracking-wider text-bg">
          RALLY<span className="text-red">CRAFT</span>
        </div>
        <p className="font-body text-[12px] text-bg opacity-40">
          © 2025 Rally Craft. Wszelkie prawa zastrzeżone.
        </p>
        <div className="flex gap-8">
          {["Facebook", "Kontakt"].map((l) => (
            <Link
              key={l}
              href="#"
              className="font-body text-[12px] font-medium uppercase tracking-[0.12em] text-bg opacity-50 transition-opacity hover:opacity-100"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
