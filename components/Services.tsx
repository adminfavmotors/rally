"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    num: "01",
    title: "Budowa Rajdówek",
    desc: "Kompleksowa budowa samochodów rajdowych od podstaw. Każdy detal projektowany pod zawodnika, trasę i docelowy styl jazdy.",
    stat: "40+ aut",
    detail: "Od pierwszego spawu po finalne strojenie.",
  },
  {
    num: "02",
    title: "Modyfikacje i Naprawy",
    desc: "Tuning układu napędowego, zawieszenia i bezpieczeństwa. Szybkie naprawy między odcinkami specjalnymi oraz przygotowanie pod nowe warunki.",
    stat: "24h serwis",
    detail: "Precyzja warsztatowa pod presją czasu.",
  },
  {
    num: "03",
    title: "Obsługa Imprez",
    desc: "Pełna obsługa techniczna podczas rajdów. Serwis na trasie, wsparcie logistyczne, analiza ustawień i gotowość całego zespołu.",
    stat: "100+ rajdów",
    detail: "Wsparcie od biwaku po ostatni oes.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
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
            start: "top 82%",
            once: true,
          },
        });
      }

      if (introRef.current) {
        gsap.set(introRef.current.children, { opacity: 0, y: 28 });
        gsap.to(introRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 84%",
            once: true,
          },
        });
      }

      const cards = cardsRef.current?.querySelectorAll("article");
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 72 });
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
      <div className="mx-auto max-w-[1440px]">
        <div
          ref={introRef}
          className="mb-20 grid gap-10 border-b border-border pb-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
              <span className="h-px w-8 bg-yellow" />
              Co robimy
            </p>
            <div className="overflow-hidden">
              <div
                ref={titleRef}
                className="font-display text-[clamp(58px,8vw,124px)] leading-[0.88] text-ink"
              >
                NASZE USŁUGI
              </div>
            </div>
          </div>

          <div className="space-y-5 md:justify-self-end">
            <p className="font-body text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              Kompleksowy pakiet przygotowania rajdowego
            </p>
            <p className="font-body text-[15px] font-light leading-[1.8] text-ink-muted">
              Budujemy system pracy wokół samochodu, kierowcy i kalendarza
              startów. Każda usługa ma prowadzić do jednego celu: szybszego i
              pewniejszego przejazdu.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid gap-px bg-border md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.num}
              className="group flex min-h-[420px] flex-col justify-between bg-bg p-10 transition-colors duration-300 hover:bg-bg-alt"
            >
              <div>
                <div className="flex items-start justify-between gap-6">
                  <div className="font-display text-[88px] leading-none text-ink/10 transition-all duration-300 group-hover:text-ink/15">
                    {service.num}
                  </div>
                  <div className="mt-3 h-px w-14 bg-yellow transition-all duration-500 group-hover:w-24" />
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <p className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-yellow">
                    {service.stat}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(28px,2.8vw,40px)] leading-[0.95] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-5 font-body text-[14px] font-light leading-[1.85] text-ink-muted">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-border pt-6">
                <p className="font-body text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                  {service.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
