"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const viewport = { once: true, amount: 0.2 };

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-white/[0.06] bg-black px-6 py-8 md:px-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="font-display text-[22px] font-black uppercase tracking-[0.12em] text-white">
          Rally <span className="text-red">Craft</span>
        </div>

        <p className="text-[12px] font-normal tracking-[0.05em] text-muted">
          © 2025 Rally Craft. Wszelkie prawa zastrzeżone.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.facebook.com"
            className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-muted transition-colors duration-200 hover:text-white"
          >
            Facebook
          </Link>
          <Link
            href="#contact"
            className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-muted transition-colors duration-200 hover:text-white"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
