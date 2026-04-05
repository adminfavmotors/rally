"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#services", label: "Usługi" },
  { href: "#zalogi", label: "Załogi" },
  { href: "#about", label: "O Nas" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[100] w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[rgba(8,8,8,0.92)] backdrop-blur-[12px]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="font-display text-[22px] font-black uppercase tracking-[0.12em] text-white"
        >
          Rally <span className="text-red">Craft</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-[13px] font-bold uppercase tracking-[0.15em] text-white/60 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
