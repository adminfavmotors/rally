"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";

const headlineLines = [
  { text: "Budujemy", className: "text-white", delay: 0.1 },
  { text: "ZwyciÄ™skie", className: "text-red", delay: 0.22 },
  { text: "RajdĂłwki", className: "text-white", delay: 0.34 },
];

const stats = [
  { value: "15", accent: "+", label: "Lat doĹ›wiadczenia" },
  { value: "40", accent: "+", label: "RajdĂłwek zbudowanych" },
  { value: "3", accent: "Ă—", label: "TytuĹ‚y mistrzowskie" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4.16663 10H15.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.8334 5L15.8334 10L10.8334 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black px-6 pb-16 pt-32 md:px-12 md:pb-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, #1a0a0a 0%, #080808 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,245,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 top-0 w-1"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #d42b2b 30%, #d42b2b 70%, transparent)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20px] top-1/2 -translate-y-1/2 font-display text-[clamp(180px,22vw,320px)] font-black uppercase leading-none text-transparent"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}
        animate={{ x: [0, -30] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        RALLY
      </motion.div>

      <div className="relative z-10 flex w-full max-w-[1440px] flex-col">
        <div className="max-w-[900px]">
          <motion.div
            className="flex items-center gap-4"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px w-10 bg-red" />
            <SplitText
              text="Kraków, Polska - Od 2010"
              className="font-display text-[12px] font-bold uppercase tracking-[0.25em] text-red"
              stagger={0.05}
              delay={0}
            />
          </motion.div>

          <div className="mt-6 space-y-1">
            {headlineLines.map((line) => (
              <div key={line.text} className="overflow-hidden">
                <motion.span
                  className={`block font-display text-[clamp(72px,10vw,140px)] font-black uppercase leading-[0.88] tracking-[-0.01em] ${line.className}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: line.delay,
                  }}
                >
                  {line.text}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.p
            className="mt-8 max-w-[420px] text-[15px] font-light leading-[1.7] text-white/[0.55]"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Profesjonalny serwis i budowa samochodĂłw rajdowych. ObsĹ‚uga zaĹ‚Ăłg
            w RSMP, GSMP i imprezach ogĂłlnopolskich.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-6"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="#services"
              className="clip-corner inline-flex items-center gap-3 bg-red px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff3535]"
            >
              <span>Zobacz usĹ‚ugi</span>
              <ArrowIcon />
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center gap-3 border-b border-white/20 pb-1 font-display text-[13px] font-bold uppercase tracking-[0.15em] text-white/60 transition-all duration-200 hover:border-white hover:text-white"
            >
              <span>O nas</span>
              <ArrowIcon />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 mt-14 flex w-full flex-col gap-8 lg:absolute lg:bottom-20 lg:right-12 lg:mt-0 lg:w-auto lg:items-end"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="lg:text-right">
              <div className="font-display text-[48px] font-black leading-none text-white">
                {stat.value}
                <span className="text-red">{stat.accent}</span>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
