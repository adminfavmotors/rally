"use client";

import { motion } from "framer-motion";
import { Settings2, Users, Wrench } from "lucide-react";
import SplitText from "@/components/SplitText";

const viewport = { once: true, amount: 0.2 };

const services = [
  {
    number: "01",
    title: "Budowa\nRajdówek",
    description:
      "Kompleksowa budowa samochodów rajdowych od podstaw. Każdy detal projektowany pod zawodnika i trasę.",
    icon: Settings2,
  },
  {
    number: "02",
    title: "Modyfikacje\ni Naprawy",
    description:
      "Tuning, modyfikacje układu napędowego, zawieszenia i bezpieczeństwa. Szybkie naprawy między odcinkami.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Obsługa\nImprez",
    description:
      "Pełna obsługa techniczna podczas rajdów. Serwis na trasie, wsparcie logistyczne i analiza danych.",
    icon: Users,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black px-6 py-24 md:px-12 md:py-[120px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          className="mb-16 flex flex-col gap-10 md:mb-20 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-red" />
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-red">
                Co robimy
              </p>
            </div>
            <h2 className="mt-6 font-display text-[clamp(48px,6vw,88px)] font-black uppercase leading-[0.9]">
              <SplitText text="Nasze Usługi" stagger={0.1} delay={0.1} />
            </h2>
          </div>

          <p className="max-w-[320px] text-[15px] font-light leading-[1.7] text-white/50">
            Kompleksowa obsługa techniczna samochodów rajdowych - od projektu
            po metę.
          </p>
        </motion.div>

        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                className="group relative overflow-hidden bg-black px-8 py-10 md:px-10 md:py-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-8 font-display text-[72px] font-black leading-none text-white/[0.05] transition-colors duration-300 group-hover:text-[rgba(212,43,43,0.15)]">
                  {service.number}
                </div>

                <Icon className="mb-6 h-10 w-10 text-red" strokeWidth={1.6} />

                <h3 className="font-display text-[24px] font-bold uppercase tracking-[0.05em] text-white">
                  <SplitText
                    text={service.title.replace("\n", " ")}
                    delay={index * 0.1}
                    stagger={0.08}
                  />
                </h3>

                <p className="mt-5 text-[14px] font-light leading-[1.7] text-white/50">
                  {service.description}
                </p>

                <div className="mt-8 inline-flex translate-x-[-8px] items-center gap-2 font-display text-[12px] font-bold uppercase tracking-[0.15em] text-red opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <span>Dowiedz się więcej</span>
                  <span aria-hidden="true">→</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
