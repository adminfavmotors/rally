"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
        yPercent: 110,
      });
      gsap.set(
        [eyebrowRef.current, subRef.current, ctaRef.current, statsRef.current],
        { opacity: 0, y: 20 }
      );

      const tl = gsap.timeline({ delay: 0.1 });

      tl.to(eyebrowRef.current, {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
      })
      .to(line1Ref.current, {
        yPercent: 0, duration: 1, ease: "expo.out",
      }, "-=0.3")
      .to(line2Ref.current, {
        yPercent: 0, duration: 1, ease: "expo.out",
      }, "-=0.75")
      .to(line3Ref.current, {
        yPercent: 0, duration: 1, ease: "expo.out",
      }, "-=0.75")
      .to(subRef.current, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      }, "-=0.5")
      .to(ctaRef.current, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      }, "-=0.5")
      .to(statsRef.current, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      }, "-=0.4");

      if (bgTextRef.current) {
        gsap.to(bgTextRef.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-bg px-8 pb-20 pt-32 md:px-16"
    >
      <div
        ref={bgTextRef}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display leading-none text-ink"
        style={{
          fontSize: "clamp(160px, 20vw, 300px)",
          opacity: 0.04,
          letterSpacing: "-0.02em",
        }}
      >
        RALLY
      </div>

      <div className="absolute left-0 top-0 h-full w-[3px] bg-yellow opacity-80" />

      <div className="relative z-10 max-w-[1400px]">
        <div
          ref={eyebrowRef}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-yellow" />
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.25em] text-ink-muted">
            Kraków, Polska — Od 2010
          </span>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div
            ref={line1Ref}
            className="font-display leading-[0.85] text-ink"
            style={{ fontSize: "clamp(80px, 12vw, 180px)" }}
          >
            BUDUJEMY
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div
            ref={line2Ref}
            className="font-display leading-[0.85] text-yellow"
            style={{ fontSize: "clamp(80px, 12vw, 180px)" }}
          >
            ZWYCIĘSKIE
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div
            ref={line3Ref}
            className="font-display leading-[0.85] text-ink"
            style={{ fontSize: "clamp(80px, 12vw, 180px)" }}
          >
            RAJDÓWKI
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div ref={subRef}>
            <p className="max-w-[380px] font-body text-[15px] font-light leading-[1.8] text-ink-muted">
              Profesjonalny serwis i budowa samochodów rajdowych.
              Obsługa załóg w RSMP, GSMP i imprezach ogólnopolskich.
            </p>
          </div>
          <div ref={ctaRef} className="flex items-center gap-6">
            <Link
              href="#uslugi"
              className="inline-flex items-center gap-3 bg-yellow px-7 py-4 font-body text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-yellow-dark"
            >
              Zobacz usługi
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link
              href="#about"
              className="font-body text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted underline underline-offset-4 transition-colors hover:text-yellow"
            >
              O nas
            </Link>
          </div>
        </div>

        <div
          ref={statsRef}
          className="mt-16 flex gap-12 border-t border-border pt-8"
        >
          {[
            { value: "15", suffix: "+", label: "Lat doświadczenia" },
            { value: "40", suffix: "+", label: "Rajdówek zbudowanych" },
            { value: "3", suffix: "×", label: "Tytuły mistrzowskie" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-[48px] leading-none text-ink">
                {s.value}<span className="text-yellow">{s.suffix}</span>
              </div>
              <div className="mt-1 font-body text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
