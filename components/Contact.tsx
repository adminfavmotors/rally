"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const info = [
  { label: "Adres", value: "ul. Półłanki 31L\n30-740, Kraków" },
  { label: "Telefon", value: "+48 502 351 941\n+48 577 112 717" },
  { label: "Godziny", value: "Pon–Pt\n07:00–16:00" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headingRef.current?.querySelectorAll(".word span");
      if (words) {
        gsap.set(words, { yPercent: 110 });
        gsap.to(words, {
          yPercent: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
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
      className="bg-bg px-8 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
          <span className="h-px w-8 bg-yellow" />
          Skontaktuj się
        </p>
        <div ref={headingRef} className="mb-20">
          <div className="font-display text-[clamp(56px,9vw,130px)] leading-[0.88] text-ink">
            {"ZACZNIJMY DZIAŁAĆ".split(" ").map((word, i) => (
              <span key={i} className="word mr-6 inline-block overflow-hidden">
                <span className="inline-block">{word}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {info.map((item) => (
            <div key={item.label} className="bg-bg p-10">
              <p className="mb-4 font-body text-[10px] font-medium uppercase tracking-[0.25em] text-yellow">
                {item.label}
              </p>
              <p className="whitespace-pre-line font-body text-[15px] font-light leading-[1.7] text-ink">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="mailto:info@rallycraft.pl"
            className="inline-flex items-center gap-4 bg-yellow px-10 py-5 font-body text-[14px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-yellow-dark"
          >
            Napisz do nas
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
