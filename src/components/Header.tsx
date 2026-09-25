"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/config";
import BridgeMark from "@/components/BridgeMark";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur transition-[background-color,border-color] duration-300"
      style={{
        background: scrolled ? "rgba(245,243,238,0.92)" : "rgba(245,243,238,0)",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="C-BRIDGE 홈">
          <BridgeMark size={36} />
          <span className="text-sm font-medium tracking-[0.16em]" style={{ color: "var(--color-ink)" }}>
            C—BRIDGE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-[0.08em] transition-colors hover:text-[var(--color-bronze)]"
              style={{ color: "var(--color-ink)", opacity: 0.85 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/finder" className="btn-primary hidden px-6 text-xs font-medium tracking-[0.1em] md:inline-flex">
          FIND YOUR EXAM
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
            style={{ background: "var(--color-ink)" }}
          />
          <span
            className={`h-[1.5px] w-6 transition-opacity ${open ? "opacity-0" : ""}`}
            style={{ background: "var(--color-ink)" }}
          />
          <span
            className={`h-[1.5px] w-6 transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            style={{ background: "var(--color-ink)" }}
          />
        </button>
      </div>

      {open && (
        <div
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t px-5 pb-6 pt-2 lg:hidden"
          style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }}
        >
          <nav className="flex flex-col divide-y" style={{ borderColor: "var(--color-border)" }} aria-label="모바일 메뉴">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-sm font-medium tracking-[0.04em]"
                style={{ color: "var(--color-ink)", borderColor: "var(--color-border)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/finder"
            onClick={() => setOpen(false)}
            className="btn-primary mt-5 block px-5 text-center text-xs font-medium tracking-[0.1em]"
          >
            FIND YOUR EXAM
          </Link>
        </div>
      )}
    </header>
  );
}
