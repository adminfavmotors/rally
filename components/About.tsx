"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      if (copyRef.current) {
        gsap.set(copyRef.current.children, { opacity: 0, y: 30 });
        gsap.to(copyRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: copyRef.current,
            start: "top 82%",
            once: true,
          },
        });
      }

      if (quoteRef.current) {
        gsap.set(quoteRef.current, { opacity: 0, y: 36 });
        gsap.to(quoteRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 88%",
            once: true,
          },
        });
      }

      const stats = statsRef.current?.querySelectorAll("article");
      if (stats && stats.length > 0) {
        gsap.set(stats, { opacity: 0, x: -42 });
        gsap.to(stats, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 78%",
            once: true,
          },
        });
      }

      const statNums = statsRef.current?.querySelectorAll("[data-target]");
      statNums?.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        const value = { current: 0 };

        gsap.to(value, {
          current: target,
          duration: 1.9,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(value.current).toString();
          },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 78%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-bg px-8 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div
          ref={introRef}
          className="grid gap-10 border-b border-border pb-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
              <span className="h-px w-8 bg-yellow" />
              Kim jesteśmy
            </p>
            <div className="overflow-hidden">
              <div
                ref={titleRef}
                className="font-display text-[clamp(58px,8vw,124px)] leading-[0.88] text-ink"
              >
                O RALLY CRAFT
              </div>
            </div>
          </div>

          <div className="space-y-5 md:justify-self-end">
            <p className="font-body text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              Warsztat, który myśli jak zespół rajdowy
            </p>
            <p className="font-body text-[15px] font-light leading-[1.8] text-ink-muted">
              Budujemy proces od projektu po ostatni serwis na mecie. Liczy się
              nie tylko szybkość auta, ale też spójność decyzji, przygotowanie
              zespołu i powtarzalna jakość pracy.
            </p>
          </div>
        </div>

        <div className="grid gap-14 pt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] lg:items-start">
          <div>
            <div
              ref={copyRef}
              className="space-y-6 font-body text-[15px] font-light leading-[1.9] text-ink-muted"
            >
              <p>
                Od lat budujemy i serwisujemy samochody rajdowe dla kierowców,
                którzy oczekują czegoś więcej niż poprawnej specyfikacji.
                Tworzymy auta gotowe na realne obciążenia, z naciskiem na{" "}
                <strong className="font-medium text-ink">niezawodność</strong>,{" "}
                <strong className="font-medium text-ink">tempo pracy</strong> i{" "}
                <strong className="font-medium text-ink">
                  precyzję każdego detalu
                </strong>
                .
              </p>
              <p>
                Rally Craft to zespół z Krakowa, który łączy warsztatowe
                rzemiosło z doświadczeniem zdobytym na oesach. Nie projektujemy
                samochodów do katalogu. Budujemy maszyny gotowe na presję sezonu
                i decyzje podejmowane w sekundach.
              </p>
            </div>

            <div
              ref={quoteRef}
              className="mt-12 max-w-[560px] border-l-[3px] border-yellow pl-6"
            >
              <p className="font-display text-[clamp(30px,3vw,42px)] leading-[0.95] text-ink">
                KAŻDY BOLID TO HISTORIA.
                <br />
                KAŻDY RAJD TO WYZWANIE.
              </p>
            </div>
          </div>

          <div
            ref={statsRef}
            className="grid gap-px bg-border sm:grid-cols-3 lg:grid-cols-1"
          >
            {[
              {
                target: 15,
                suffix: "+",
                label: "Lat na rynku",
                detail: "Budowa marki oparta na pracy w realnym sezonie.",
              },
              {
                target: 40,
                suffix: "+",
                label: "Zbudowanych rajdówek",
                detail: "Projekty od pełnej budowy po precyzyjne przebudowy.",
              },
              {
                target: 3,
                suffix: "×",
                label: "Tytuły mistrzowskie",
                detail: "Doświadczenie potwierdzone wynikiem, nie deklaracją.",
              },
            ].map((stat) => (
              <article key={stat.label} className="bg-bg-alt p-8 md:p-10">
                <div className="font-display text-[clamp(72px,7vw,108px)] leading-[0.85] text-ink">
                  <span data-target={stat.target}>0</span>
                  <span className="text-yellow">{stat.suffix}</span>
                </div>
                <p className="mt-3 font-body text-[12px] uppercase tracking-[0.16em] text-ink">
                  {stat.label}
                </p>
                <p className="mt-4 max-w-[26ch] font-body text-[14px] font-light leading-[1.8] text-ink-muted">
                  {stat.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
