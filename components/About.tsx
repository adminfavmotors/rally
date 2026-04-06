"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      const statEls = statsRef.current?.querySelectorAll(".stat-num");
      statEls?.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        gsap.fromTo(
          { val: 0 },
          { val: target },
          {
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
              el.textContent = Math.round(this.targets()[0].val).toString();
            },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
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
      <div className="mx-auto grid max-w-[1400px] gap-20 lg:grid-cols-2 lg:items-center">
        <div ref={statsRef} className="flex flex-col gap-12">
          {[
            { target: 15, suffix: "+", label: "Lat na rynku" },
            { target: 40, suffix: "+", label: "Zbudowanych rajdówek" },
            { target: 3, suffix: "×", label: "Tytuły mistrzowskie" },
          ].map((s, i) => (
            <div
              key={i}
              className={i > 0 ? "border-t border-border pt-12" : ""}
            >
              <div className="font-display text-[100px] leading-[0.85] text-ink">
                <span className="stat-num" data-target={s.target}>
                  0
                </span>
                <span className="text-red">{s.suffix}</span>
              </div>
              <p className="mt-2 font-body text-[12px] uppercase tracking-[0.15em] text-ink-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-red">
            <span className="h-px w-8 bg-red" />
            Kim jesteśmy
          </p>
          <div ref={headingRef} className="mb-8">
            <div className="font-display text-[clamp(48px,6vw,80px)] leading-[0.9] text-ink">
              {"O RALLY CRAFT".split(" ").map((word, i) => (
                <span key={i} className="word mr-4 inline-block overflow-hidden">
                  <span className="inline-block">{word}</span>
                </span>
              ))}
            </div>
          </div>
          <div ref={textRef} className="space-y-5 font-body text-[15px] font-light leading-[1.8] text-ink-muted">
            <p>
              Od lat budujemy i serwisujemy samochody rajdowe dla kierowców,
              którzy oczekują czegoś więcej niż poprawnej specyfikacji.
              Tworzymy auta gotowe na realne obciążenia, z naciskiem na{" "}
              <strong className="font-medium text-ink">niezawodność</strong>,{" "}
              <strong className="font-medium text-ink">tempo pracy</strong>{" "}
              i precyzję każdego detalu.
            </p>
            <p>
              Rally Craft to zespół z Krakowa, który łączy warsztatowe
              rzemiosło z doświadczeniem zdobytym na oesach.
            </p>
          </div>
          <div className="mt-10 border-l-[3px] border-red pl-6">
            <p className="font-display text-[22px] leading-[1.3] text-ink">
              KAŻDY BOLID TO HISTORIA.
              <br />
              KAŻDY RAJD TO WYZWANIE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
