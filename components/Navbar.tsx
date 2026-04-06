"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#zalogi", label: "Załogi" },
  { href: "#about", label: "O Nas" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(245,244,240,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(14,14,14,0.08)" : "none",
      }}
    >
      <Link href="/" className="font-display text-2xl tracking-wider text-ink">
        RALLY<span className="text-red">CRAFT</span>
      </Link>
      <ul className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-body text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-red"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="#kontakt"
        className="hidden md:inline-flex items-center gap-2 bg-red px-5 py-2.5 font-body text-[13px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-red-dark"
      >
        Kontakt
      </Link>
    </nav>
  );
}
