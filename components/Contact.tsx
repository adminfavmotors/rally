"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";

const viewport = { once: true, amount: 0.2 };

const contactItems = [
  {
    label: "Adres",
    value: "ul. PĂłĹ‚Ĺ‚anki 31L\n30-740, KrakĂłw",
  },
  {
    label: "Telefon",
    value: "+48 502 351 941\n+48 577 112 717",
  },
  {
    label: "Godziny",
    value: "Pon-Pt\n07:00 - 16:00",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gray px-6 py-24 text-center md:px-12 md:py-[120px]">
      <div className="mx-auto max-w-[700px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-red" />
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-red">
              Kontakt
            </p>
          </div>

          <h2 className="mt-6 font-display text-[clamp(48px,6vw,88px)] font-black uppercase leading-[0.9] text-white">
            <SplitText text="Zacznijmy Działać" stagger={0.1} delay={0.1} />
          </h2>

          <p className="mx-auto mt-8 max-w-[520px] text-[15px] font-light leading-[1.7] text-white/50">
            JeĹ›li przygotowujesz auto na sezon, potrzebujesz zaplecza serwisowego
            albo szukasz partnera technicznego na rajd, porozmawiajmy.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-gray px-7 py-8 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-red">
                {item.label}
              </p>
              <p className="mt-4 whitespace-pre-line text-[15px] font-light leading-[1.6] text-white/80">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            href="mailto:info@rallycraft.pl"
            className="clip-corner inline-flex items-center justify-center bg-red px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff3535]"
          >
            Napisz do nas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
