"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const teams = [
  {
    driver: "Artur Równiatka / Wojciech Habuda",
    champ: "RSMP / Tarmac Masters",
    car: "Mitsubishi Lancer Evo X",
    num: "01",
    code: "EVO X",
  },
  {
    driver: "Leon Zardzewiały",
    champ: "GSMP",
    car: "Honda Civic",
    num: "02",
    code: "CIVIC",
  },
  {
    driver: "Marek Nowak / Adam Grzelka",
    champ: "RSMP",
    car: "Ford Fiesta R5",
    num: "03",
    code: "R5",
  },
  {
    driver: "Michał Rokita / Rafał Ślęczka",
    champ: "RSMP / RSMŚL",
    car: "Renault Clio Sport",
    num: "04",
    code: "CLIO",
  },
];

export default function Zalogi() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const cards = gridRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.set(Array.from(cards), { opacity: 0, y: 56 });
        gsap.to(Array.from(cards), {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
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
      id="zalogi"
      ref={sectionRef}
      className="bg-bg-alt px-8 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div
          ref={introRef}
          className="mb-16 grid gap-10 border-b border-border pb-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
              <span className="h-px w-8 bg-yellow" />
              Nasi kierowcy
            </p>
            <div className="overflow-hidden">
              <div
                ref={titleRef}
                className="font-display text-[clamp(58px,8vw,124px)] leading-[0.88] text-ink"
              >
                NASZE ZAŁOGI
              </div>
            </div>
          </div>

          <div className="space-y-5 md:justify-self-end">
            <p className="font-body text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              Zespół zbudowany wokół realnego ścigania
            </p>
            <p className="font-body text-[15px] font-light leading-[1.8] text-ink-muted">
              Każda załoga pracuje z nami inaczej, ale cel pozostaje ten sam:
              stworzyć samochód i zaplecze techniczne gotowe na presję sezonu.
            </p>
          </div>
        </div>

        <div ref={gridRef} className="grid gap-px bg-border sm:grid-cols-2">
          {teams.map((team) => (
            <article
              key={team.num}
              className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-bg-alt p-10 transition-colors duration-300 hover:bg-bg"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-6 font-display text-[88px] leading-none text-ink opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.1]"
              >
                {team.code}
              </div>

              <div className="relative z-10 flex items-start justify-between gap-6 border-b border-border pb-8">
                <div>
                  <p className="font-body text-[11px] font-medium uppercase tracking-[0.22em] text-yellow">
                    {team.champ}
                  </p>
                </div>
                <span className="font-display text-[46px] leading-none text-ink/12">
                  {team.num}
                </span>
              </div>

              <div className="relative z-10 pt-8">
                <h3 className="font-display text-[clamp(24px,2.7vw,38px)] leading-[0.96] text-ink">
                  {team.driver}
                </h3>
                <p className="mt-4 font-body text-[14px] font-light leading-[1.8] text-ink-muted">
                  {team.car}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-yellow transition-all duration-500 group-hover:w-20" />
                  <span className="font-body text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    Rally Craft Crew
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
