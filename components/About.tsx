"use client";

import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";

const viewport = { once: true, amount: 0.2 };

const stats = [
  { value: "15", suffix: "+", label: "Lat na rynku" },
  { value: "40", suffix: "+", label: "Zbudowanych rajdĂłwek" },
  { value: "3", suffix: "Ă—", label: "TytuĹ‚y mistrzowskie" },
];

export default function About() {
  return (
    <section id="about" className="bg-black px-6 py-24 md:px-12 md:py-[120px]">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:gap-20 lg:grid-cols-[1fr_1fr] lg:items-center">
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={index === 0 ? "" : "border-t border-white/10 pt-12"}
            >
              <div className="font-display text-[96px] font-black leading-[0.85] tracking-[-0.02em] text-white">
                {stat.value}
                <span className="text-red">{stat.suffix}</span>
              </div>
              <p className="mt-3 text-[13px] font-normal uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-red" />
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-red">
              O nas
            </p>
          </div>

          <h2 className="mt-6 font-display text-[clamp(36px,4vw,60px)] font-black uppercase leading-[0.92] text-white">
            <SplitText text="O Rally Craft" stagger={0.1} delay={0.2} />
          </h2>

          <div className="mt-8 space-y-6 text-[16px] font-light leading-[1.8] text-white/60">
            <p>
              Od lat budujemy i serwisujemy samochody rajdowe dla kierowcĂłw,
              ktĂłrzy oczekujÄ… czegoĹ› wiÄ™cej niĹĽ poprawnej specyfikacji.
              Tworzymy auta gotowe na realne obciÄ…ĹĽenia, z naciskiem na{" "}
              <span className="font-medium text-white">niezawodnoĹ›Ä‡</span>,{" "}
              <span className="font-medium text-white">tempo pracy</span> i
              precyzjÄ™ kaĹĽdego detalu.
            </p>
            <p>
              Rally Craft to zespĂłĹ‚ z Krakowa, ktĂłry Ĺ‚Ä…czy warsztatowe rzemiosĹ‚o
              z doĹ›wiadczeniem zdobytym na oesach. Pracujemy blisko z zaĹ‚ogami,
              bo najlepsze ustawienia i rozwiÄ…zania powstajÄ… wtedy, gdy{" "}
              <span className="font-medium text-white">mechanika</span>,{" "}
              <span className="font-medium text-white">strategia</span> i styl
              jazdy sÄ… traktowane jako jeden system.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-red pl-6">
            <div className="font-display text-[20px] font-bold uppercase tracking-[0.05em] leading-[1.6] text-white/85">
              <SplitText text="Każdy bolid to historia." stagger={0.06} delay={0.1} />
              <br />
              <SplitText text="Każdy rajd to wyzwanie." stagger={0.06} delay={0.4} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
