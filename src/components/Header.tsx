"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-purple/10 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-black tracking-tight text-purple md:text-3xl">
            C-BRIDGE
          </span>
          <span className="hidden text-[10px] font-bold tracking-[0.2em] text-ink/50 md:inline">
            TEST PREP
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold tracking-[0.1em] text-ink/80 transition-colors hover:text-purple"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/all-books"
            aria-label="Search books"
            className="text-ink/70 transition-colors hover:text-purple"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 rounded-sm border border-purple/25 px-4 py-2.5 text-xs font-bold tracking-[0.1em] text-purple transition-colors hover:bg-lavender"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            CALL
            <span className="hidden font-semibold tracking-normal text-ink/50 xl:inline">
              {siteConfig.phone}
            </span>
          </a>
          <Link
            href="/consultation"
            className="rounded-sm bg-purple px-5 py-2.5 text-xs font-bold tracking-[0.1em] text-ivory transition-colors hover:bg-plum"
          >
            CONSULTATION
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-[2px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-purple/10 bg-ivory px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col divide-y divide-purple/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-sm font-bold tracking-[0.1em] text-ink/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/consultation"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-sm bg-purple px-5 py-3 text-center text-xs font-bold tracking-[0.1em] text-ivory"
          >
            CONSULTATION
          </Link>
        </div>
      )}
    </header>
  );
}
