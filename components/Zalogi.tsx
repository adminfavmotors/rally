"use client";

import { motion } from "framer-motion";

const viewport = { once: true, amount: 0.2 };

const teams = [
  {
    backgroundText: "EVO X",
    championship: "RSMP / Tarmac Masters",
    driver: "Artur Równiatka / Wojciech Habuda",
    car: "Mitsubishi Lancer Evo X",
  },
  {
    backgroundText: "CIVIC",
    championship: "GSMP",
    driver: "Leon Zardzewiały",
    car: "Honda Civic",
  },
  {
    backgroundText: "R5",
    championship: "RSMP",
    driver: "Marek Nowak / Adam Grzelka",
    car: "Ford Fiesta R5",
  },
  {
    backgroundText: "CLIO",
    championship: "RSMP / RSMŚL",
    driver: "Michał Rokita / Rafał Ślęczka",
    car: "Renault Clio Sport",
  },
];

export default function Zalogi() {
  return (
    <section id="zalogi" className="bg-gray px-6 py-24 md:px-12 md:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-red" />
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-red">
              Załogi
            </p>
          </div>
          <h2 className="mt-6 font-display text-[clamp(48px,6vw,88px)] font-black uppercase leading-[0.9] text-white">
            Nasze
            <br />
            Załogi
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {teams.map((team, index) => (
            <motion.article
              key={team.driver}
              className="group relative aspect-[16/9] cursor-pointer overflow-hidden bg-gray2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={viewport}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a1a1a,#111111)]">
                <div className="flex h-full items-center justify-center px-6 text-center font-display text-[clamp(56px,8vw,80px)] font-black uppercase leading-none text-white/[0.04] select-none">
                  {team.backgroundText}
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(to_top,rgba(8,8,8,0.9)_0%,transparent_50%)] p-7">
                <p className="mb-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-red">
                  {team.championship}
                </p>
                <h3 className="font-display text-[22px] font-black uppercase tracking-[0.03em] leading-[1.1] text-white">
                  {team.driver}
                </h3>
                <p className="mt-1.5 text-[13px] font-light text-white/50">
                  {team.car}
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-red" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
