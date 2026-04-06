"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

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
            start: "top 80%",
            once: true,
          },
        });
      }

      if (textRef.current) {
        gsap.set(textRef.current, { opacity: 0, y: 40 });
        gsap.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      if (quoteRef.current) {
        gsap.set(quoteRef.current, { opacity: 0, y: 30 });
        gsap.to(quoteRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      const statDivs = statsRef.current?.children;
      if (statDivs && statDivs.length > 0) {
        gsap.set(Array.from(statDivs), { opacity: 0, x: -40 });
        gsap.to(Array.from(statDivs), {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
            once: true,
          },
        });
      }

      const statNums = statsRef.current?.querySelectorAll("[data-target]");
      statNums?.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
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
      <div className="mx-auto grid max-w-[1400px] gap-20 lg:grid-cols-2 lg:items-center">

        <div ref={statsRef} className="flex flex-col gap-12">
          {[
            { target: 15, suffix: "+", label: "Lat na rynku" },
            { target: 40, suffix: "+", label: "Zbudowanych rajdówek" },
            { target: 3, suffix: "×", label: "Tytuły mistrzowskie" },
          ].map((s, i) => (
            <div key={i} className={i > 0 ? "border-t border-border pt-12" : ""}>
              <div className="font-display text-[100px] leading-[0.85] text-ink">
                <span data-target={s.target}>0</span>
                <span className="text-yellow">{s.suffix}</span>
              </div>
              <p className="mt-2 font-body text-[12px] uppercase tracking-[0.15em] text-ink-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-4 flex items-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.3em] text-yellow">
            <span className="h-px w-8 bg-yellow" />
            Kim jesteśmy
          </p>
          <div className="mb-8 overflow-hidden">
            <div ref={titleRef} className="font-display text-[clamp(48px,6vw,80px)] leading-[0.9] text-ink">
              O RALLY CRAFT
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
          <div ref={quoteRef} className="mt-10 border-l-[3px] border-yellow pl-6">
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
