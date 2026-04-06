"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teams = [
  { driver: "Artur Równiatka / Wojciech Habuda", champ: "RSMP / Tarmac Masters", car: "Mitsubishi Lancer Evo X", num: "01" },
  { driver: "Leon Zardzewiały", champ: "GSMP", car: "Honda Civic", num: "02" },
  { driver: "Marek Nowak / Adam Grzelka", champ: "RSMP", car: "Ford Fiesta R5", num: "03" },
  { driver: "Michał Rokita / Rafał Ślęczka", champ: "RSMP / RSMŚL", car: "Renault Clio Sport", num: "04" },
];

export default function Zalogi() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".team-card");
      if (cards) {
        gsap.set(cards, { opacity: 0, y: 50 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
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
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16">
          <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
            <span className="h-px w-8 bg-yellow" />
            Nasi kierowcy
          </p>
          <h2 className="font-display text-[clamp(56px,8vw,120px)] leading-[0.88] text-ink">
            NASZE ZAŁOGI
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-px bg-border sm:grid-cols-2">
          {teams.map((t) => (
            <div
              key={t.num}
              className="team-card group relative bg-bg-alt p-10 transition-colors duration-300 hover:bg-bg"
            >
              <div
                aria-hidden="true"
                className="mb-6 font-display text-[80px] leading-none text-ink opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.1]"
              >
                {t.num}
              </div>
              <p className="mb-2 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-yellow">
                {t.champ}
              </p>
              <h3 className="mb-1 font-display text-[clamp(20px,2vw,26px)] leading-tight text-ink">
                {t.driver}
              </h3>
              <p className="font-body text-[13px] font-light text-ink-muted">
                {t.car}
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
