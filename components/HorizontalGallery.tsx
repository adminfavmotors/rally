"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PHOTOS = [
  { label: "Mitsubishi Lancer Evo X", tag: "RSMP / Tarmac Masters" },
  { label: "Ford Fiesta R5", tag: "RSMP" },
  { label: "Renault Clio Sport", tag: "RSMP / RSMŚL" },
  { label: "Honda Civic", tag: "GSMP" },
  { label: "Rajdówka #5", tag: "Budowa od podstaw" },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx: ReturnType<typeof gsap.context>;

    const init = () => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => ScrollTrigger.refresh(),
          },
        });

        const cards = track.querySelectorAll(".gallery-card");
        cards.forEach((card, i) => {
          const img = card.querySelector(".gallery-img-inner");
          const total = cards.length;

          gsap.fromTo(
            card,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: () =>
                  `top top-=${(i / total) * Math.abs(getScrollAmount()) * 0.9}`,
                end: () =>
                  `top top-=${((i + 0.8) / total) * Math.abs(getScrollAmount()) * 0.9}`,
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
            }
          );

          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.15 },
              {
                scale: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: () =>
                    `top top-=${(i / total) * Math.abs(getScrollAmount()) * 0.9}`,
                  end: () =>
                    `top top-=${((i + 0.8) / total) * Math.abs(getScrollAmount()) * 0.9}`,
                  scrub: 1.2,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
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
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#080808]">
      <div className="pointer-events-none absolute left-12 top-12 z-20">
        <p className="flex items-center gap-4 font-display text-[11px] font-bold uppercase tracking-[0.3em] text-[#d42b2b]">
          <span className="block h-px w-8 bg-[#d42b2b]" />
          Nasze Maszyny
        </p>
        <h2
          className="mt-3 font-display text-[clamp(48px,6vw,88px)] font-black uppercase leading-[0.9]"
          style={{ WebkitTextStroke: "1px rgba(245,245,240,0.08)" }}
        >
          Galeria
        </h2>
      </div>

      <div className="pointer-events-none absolute bottom-12 right-12 z-20 flex items-center gap-3">
        <span className="font-display text-[11px] uppercase tracking-[0.2em] text-white/30">
          Przewiń
        </span>
        <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
          <path
            d="M0 6h38M34 1l5 5-5 5"
            stroke="rgba(245,245,240,0.3)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        ref={trackRef}
        className="flex h-screen w-max items-center gap-6 pl-12 pr-24"
      >
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="gallery-card relative h-[65vh] w-[45vw] min-w-[380px] flex-shrink-0 overflow-hidden"
          >
            <div
              className="gallery-img-inner absolute inset-0 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, #${
                  ["1a1a1a", "141414", "111", "0f0f0f", "0d0d0d"][i % 5]
                } 0%, #080808 100%)`,
              }}
            >
              <span
                className="select-none font-display text-[clamp(48px,6vw,80px)] font-black uppercase text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}
              >
                {photo.label.split(" ").slice(-1)[0]}
              </span>
            </div>

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 50%)",
              }}
            />

            <div className="absolute left-0 top-0 h-[2px] w-12 bg-[#d42b2b]" />
            <div className="absolute left-0 top-0 h-12 w-[2px] bg-[#d42b2b]" />

            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#d42b2b]">
                {photo.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase leading-tight text-white">
                {photo.label}
              </h3>
            </div>

            <div className="absolute inset-0 border border-transparent transition-colors duration-300 hover:border-[#d42b2b]" />
          </div>
        ))}
      </div>
    </div>
  );
}
