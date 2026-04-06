"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cars = [
  { name: "Mitsubishi Lancer Evo X", tag: "RSMP / Tarmac Masters", code: "EVO X" },
  { name: "Ford Fiesta R5", tag: "RSMP", code: "R5" },
  { name: "Renault Clio Sport", tag: "RSMP / RSMŚL", code: "CLIO" },
  { name: "Honda Civic", tag: "GSMP", code: "CIVIC" },
  { name: "Rajdówka #5", tag: "Budowa od podstaw", code: "BUILD" },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx: ReturnType<typeof gsap.context>;

    const init = () => {
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

    document.fonts.ready.then(init);
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-bg-alt">
      <div className="flex items-end justify-between px-8 py-12 md:px-16">
        <div>
          <p className="mb-3 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-red">
            <span className="h-px w-8 bg-red" />
            Nasze Maszyny
          </p>
          <h2 className="font-display text-[clamp(48px,7vw,100px)] leading-[0.88] text-ink">
            GALERIA
          </h2>
        </div>
        <p className="hidden font-body text-[12px] uppercase tracking-[0.15em] text-ink-muted md:block">
          Przewiń →
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex h-[65vh] w-max items-stretch gap-px pl-8 pr-16 md:pl-16"
      >
        {cars.map((car, i) => (
          <div
            key={i}
            className="group relative flex w-[40vw] min-w-[320px] flex-shrink-0 flex-col justify-end overflow-hidden bg-bg p-8"
            style={{ borderLeft: i === 0 ? "none" : "1px solid var(--border)" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-display text-[clamp(60px,8vw,100px)] text-ink"
              style={{ opacity: 0.04 }}
            >
              {car.code}
            </div>

            <div className="absolute left-0 top-0 h-[3px] w-16 bg-red transition-all duration-500 group-hover:w-full" />
            <div className="absolute left-0 top-0 h-16 w-[3px] bg-red" />

            <div className="relative z-10">
              <p className="mb-2 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-red">
                {car.tag}
              </p>
              <h3 className="font-display text-[clamp(22px,2.5vw,32px)] leading-tight text-ink">
                {car.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
