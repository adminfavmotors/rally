"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    num: "01",
    title: "Budowa Rajdówek",
    desc: "Kompleksowa budowa samochodów rajdowych od podstaw. Każdy detal projektowany pod zawodnika i trasę.",
    stat: "40+ aut",
  },
  {
    num: "02",
    title: "Modyfikacje i Naprawy",
    desc: "Tuning układu napędowego, zawieszenia i bezpieczeństwa. Szybkie naprawy między odcinkami specjalnymi.",
    stat: "24h serwis",
  },
  {
    num: "03",
    title: "Obsługa Imprez",
    desc: "Pełna obsługa techniczna podczas rajdów. Serwis na trasie, wsparcie logistyczne i analiza danych.",
    stat: "100+ rajdów",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.set(titleRef.current, { yPercent: 110 });
        gsap.to(titleRef.current, {
          yPercent: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: titleRef.current.parentElement,
            start: "top 80%",
            once: true,
          },
        });
      }

      const cards = cardsRef.current?.querySelectorAll("article");
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 70 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 78%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="uslugi"
      ref={sectionRef}
      className="bg-bg px-8 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
            <span className="h-px w-8 bg-yellow" />
            Co robimy
          </p>
          <div className="overflow-hidden">
            <div ref={titleRef} className="font-display text-[clamp(56px,8vw,120px)] leading-[0.88] text-ink">
              NASZE USŁUGI
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid gap-px bg-border md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.num}
              className="group bg-bg p-10 transition-colors duration-300 hover:bg-bg-alt"
            >
              <div className="mb-8 font-display text-[80px] leading-none text-ink opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.12]">
                {s.num}
              </div>
              <div className="mb-6 h-px w-12 bg-yellow" />
              <h3 className="mb-4 font-display text-[28px] leading-tight text-ink">
                {s.title}
              </h3>
              <p className="mb-8 font-body text-[14px] font-light leading-[1.8] text-ink-muted">
                {s.desc}
              </p>
              <div className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-yellow">
                {s.stat}
              </div>
              <div className="mt-6 h-[2px] w-0 bg-yellow transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
