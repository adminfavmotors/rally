"use client";
import type { ReactNode } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: Lenis;
    let tick: ((time: number) => void) | undefined;

    try {
      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      });

      lenis.on("scroll", () => ScrollTrigger.update());
      tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      document.fonts.ready.then(() => ScrollTrigger.refresh());
    } catch (e) {
      console.error("Lenis init error:", e);
    }
    return () => {
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (tick) gsap.ticker.remove(tick);
    };
  }, []);
  return <>{children}</>;
}
