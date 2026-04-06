"use client";
import { motion } from "framer-motion";

const items = ["RSMP", "GSMP", "Budowa Rajdówek", "Serwis Techniczny", "Modyfikacje", "Obsługa Imprez", "Kraków", "Od 2010"];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-ink py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-10 font-display text-[14px] tracking-[0.2em] text-bg"
          >
            {item}
            <span className="ml-10 text-yellow">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
