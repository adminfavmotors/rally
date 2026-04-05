"use client";

import { motion } from "framer-motion";

const items = [
  "RSMP",
  "GSMP",
  "Budowa Rajdówek",
  "Serwis Techniczny",
  "Modyfikacje",
  "Obsługa Imprez",
];

function MarqueeSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center whitespace-nowrap"
      aria-hidden={hidden}
    >
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center">
          <span className="px-12 font-display text-[13px] font-bold uppercase tracking-[0.2em] text-muted">
            {item}
          </span>
          <span className="font-display text-[16px] font-bold text-red">
            ✦
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-gray py-[14px]">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <MarqueeSet />
        <MarqueeSet hidden />
      </motion.div>
    </section>
  );
}
