"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const info = [
  {
    label: "Adres",
    value: "ul. Półłanki 31L\n30-740, Kraków",
  },
  {
    label: "Telefon",
    value: "+48 502 351 941\n+48 577 112 717",
  },
  {
    label: "Godziny",
    value: "Pon-Pt\n07:00-16:00",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      const cards = infoRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.set(Array.from(cards), { opacity: 0, y: 40 });
        gsap.to(Array.from(cards), {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current.children, { opacity: 0, y: 24 });
        gsap.to(ctaRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 88%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="bg-bg-alt px-8 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div
          ref={introRef}
          className="grid gap-10 border-b border-border pb-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
              <span className="h-px w-8 bg-yellow" />
              Skontaktuj się
            </p>
            <div className="overflow-hidden">
              <div
                ref={titleRef}
                className="font-display text-[clamp(58px,9vw,132px)] leading-[0.88] text-ink"
              >
                ZACZNIJMY DZIAŁAĆ
              </div>
            </div>
          </div>

          <div className="space-y-5 md:justify-self-end">
            <p className="font-body text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              Gotowi na kolejny projekt i kolejny start
            </p>
            <p className="font-body text-[15px] font-light leading-[1.8] text-ink-muted">
              Jeśli szukasz zaplecza do budowy auta, przygotowania przed sezonem
              albo stałej obsługi serwisowej, zaczynamy od konkretnej rozmowy o
              Twoim kalendarzu, budżecie i celu sportowym.
            </p>
          </div>
        </div>

        <div className="grid gap-12 pt-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div ref={infoRef} className="grid gap-px bg-border md:grid-cols-3">
            {info.map((item) => (
              <article key={item.label} className="bg-bg-alt p-8 md:p-10">
                <p className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.25em] text-yellow">
                  {item.label}
                </p>
                <p className="whitespace-pre-line font-body text-[15px] font-light leading-[1.8] text-ink">
                  {item.value}
                </p>
              </article>
            ))}
          </div>

          <div
            ref={ctaRef}
            className="flex flex-col gap-5 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          >
            <p className="font-body text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              Pierwszy kontakt
            </p>
            <p className="max-w-[28ch] font-body text-[15px] font-light leading-[1.8] text-ink-muted">
              Opisz projekt lub plan startów. Wrócimy z konkretną propozycją
              dalszych kroków.
            </p>
            <div>
              <Link
                href="mailto:info@rallycraft.pl"
                className="inline-flex items-center gap-4 bg-yellow px-10 py-5 font-body text-[14px] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-yellow-dark"
              >
                Napisz do nas
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
