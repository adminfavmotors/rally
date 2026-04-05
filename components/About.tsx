"use client";

import { motion } from "framer-motion";

const viewport = { once: true, amount: 0.2 };

const stats = [
  { value: "15", suffix: "+", label: "Lat na rynku" },
  { value: "40", suffix: "+", label: "Zbudowanych rajdówek" },
  { value: "3", suffix: "×", label: "Tytuły mistrzowskie" },
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
            O
            <br />
            Rally Craft
          </h2>

          <div className="mt-8 space-y-6 text-[16px] font-light leading-[1.8] text-white/60">
            <p>
              Od lat budujemy i serwisujemy samochody rajdowe dla kierowców,
              którzy oczekują czegoś więcej niż poprawnej specyfikacji.
              Tworzymy auta gotowe na realne obciążenia, z naciskiem na{" "}
              <span className="font-medium text-white">niezawodność</span>,{" "}
              <span className="font-medium text-white">tempo pracy</span> i
              precyzję każdego detalu.
            </p>
            <p>
              Rally Craft to zespół z Krakowa, który łączy warsztatowe rzemiosło
              z doświadczeniem zdobytym na oesach. Pracujemy blisko z załogami,
              bo najlepsze ustawienia i rozwiązania powstają wtedy, gdy{" "}
              <span className="font-medium text-white">mechanika</span>,{" "}
              <span className="font-medium text-white">strategia</span> i styl
              jazdy są traktowane jako jeden system.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-red pl-6">
            <p className="whitespace-pre-line font-display text-[20px] font-bold uppercase tracking-[0.05em] leading-[1.4] text-white/85">
              Każdy bolid to historia.
              {"\n"}
              Każdy rajd to wyzwanie.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
