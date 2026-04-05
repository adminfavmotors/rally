"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";

export default function LenisProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let destroy: (() => void) | undefined;

    const init = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("@studio-freight/lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const update = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      destroy = () => {
        lenis.destroy();
        gsap.ticker.remove(update);
      };
    };

    void init();

    return () => {
      destroy?.();
    };
  }, []);

  return <>{children}</>;
}
