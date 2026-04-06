"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cars = [
  {
    name: "Mitsubishi Lancer Evo X",
    tag: "RSMP / Tarmac Masters",
    code: "EVO X",
    copy:
      "Samochód zbudowany pod szybkie, precyzyjne odcinki asfaltowe i maksymalną stabilność przy wysokiej prędkości.",
  },
  {
    name: "Ford Fiesta R5",
    tag: "RSMP",
    code: "R5",
    copy:
      "Nowoczesna platforma rajdowa przygotowana z naciskiem na powtarzalność ustawień, trakcję i szybkość reakcji serwisowej.",
  },
  {
    name: "Renault Clio Sport",
    tag: "RSMP / RSMŚL",
    code: "CLIO",
    copy:
      "Lekka konstrukcja zoptymalizowana do krótkich, agresywnych prób i wyścigowego tempa pracy całego zespołu.",
  },
  {
    name: "Honda Civic",
    tag: "GSMP",
    code: "CIVIC",
    copy:
      "Projekt przygotowany pod podjazdy górskie, gdzie liczy się balans, sztywność i pewność w szybkich zmianach kierunku.",
  },
  {
    name: "Rajdówka #5",
    tag: "Budowa od podstaw",
    code: "BUILD",
    copy:
      "Indywidualna realizacja prowadzona od pierwszego spawu po finalne strojenie, zgodnie z potrzebami kierowcy i kalendarzem sezonu.",
  },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx: ReturnType<typeof gsap.context> | undefined;
    let cancelled = false;

    const init = () => {
      if (cancelled) return;

      const getAmount = () => -(track.scrollWidth - window.innerWidth);

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: getAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.abs(getAmount())}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, section);

      ScrollTrigger.refresh();
    };

    if (document.fonts) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-bg-alt">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-8 py-12 md:px-16 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
              <span className="h-px w-8 bg-yellow" />
              Nasze Maszyny
            </p>
            <h2 className="font-display text-[clamp(54px,8vw,118px)] leading-[0.88] text-ink">
              GALERIA
            </h2>
          </div>

          <div className="grid max-w-[420px] gap-4 md:text-right">
            <p className="font-body text-[12px] uppercase tracking-[0.16em] text-ink-muted">
              Przewiń, aby wejść w rytm naszych projektów
            </p>
            <p className="font-body text-[15px] font-light leading-[1.75] text-ink-muted">
              Każda realizacja jest budowana wokół konkretnego celu: prędkości,
              niezawodności i gotowości do walki od pierwszego odcinka.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <div className="flex items-center justify-between font-body text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span>01 / 05</span>
            <span>Editorial Machine Archive</span>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex h-[68vh] w-max items-stretch gap-px pl-8 pr-16 md:pl-16"
      >
        {cars.map((car, i) => (
          <article
            key={car.name}
            className="group relative flex w-[42vw] min-w-[340px] flex-shrink-0 flex-col justify-between overflow-hidden bg-bg px-8 py-8 md:w-[38vw] md:px-10 md:py-10"
            style={{ borderLeft: i === 0 ? "none" : "1px solid var(--border)" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-display text-[clamp(70px,8vw,120px)] leading-none text-ink"
              style={{ opacity: 0.045, letterSpacing: "-0.03em" }}
            >
              {car.code}
            </div>

            <div className="absolute left-0 top-0 h-[3px] w-16 bg-yellow transition-all duration-500 group-hover:w-full" />
            <div className="absolute left-0 top-0 h-16 w-[3px] bg-yellow" />

            <div className="relative z-10 flex items-start justify-between gap-6 border-b border-border pb-6">
              <p className="font-display text-[64px] leading-none text-ink/10">
                0{i + 1}
              </p>
              <div className="max-w-[240px] text-right">
                <p className="font-body text-[11px] font-medium uppercase tracking-[0.22em] text-yellow">
                  {car.tag}
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-auto max-w-[520px]">
              <h3 className="font-display text-[clamp(28px,3vw,40px)] leading-[0.95] text-ink">
                {car.name}
              </h3>
              <p className="mt-5 max-w-[420px] font-body text-[14px] font-light leading-[1.8] text-ink-muted">
                {car.copy}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-yellow transition-all duration-500 group-hover:w-20" />
                <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                  Rally Craft Spec
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
