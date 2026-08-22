"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { megaMenuGroups, navLinks, siteConfig } from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
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
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[13px] font-bold tracking-[0.06em] text-ink/80 transition-colors hover:text-purple"
            >
              시험 찾기
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-sm border border-purple/10 bg-ivory p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-2">
                  {megaMenuGroups.map((g) => (
                    <Link
                      key={g.href}
                      href={g.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-sm px-4 py-3 text-sm font-bold text-ink/80 transition-colors hover:bg-lavender/50 hover:text-purple"
                    >
                      {g.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-3 border-t border-purple/10 pt-3">
                  <Link
                    href="/all-books"
                    onClick={() => setMenuOpen(false)}
                    className="text-xs font-bold tracking-[0.06em] text-purple hover:underline"
                  >
                    전체 시험 · 교재 보기 →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold tracking-[0.06em] text-ink/80 transition-colors hover:text-purple"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 rounded-sm border border-purple/25 px-3.5 py-2.5 text-xs font-bold tracking-[0.08em] text-purple transition-colors hover:bg-lavender"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            CALL
          </a>
          <Link
            href="/all-books"
            className="rounded-sm bg-purple px-5 py-2.5 text-xs font-bold tracking-[0.1em] text-ivory transition-colors hover:bg-plum"
          >
            내 교재 찾기
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
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-purple/10 bg-ivory px-5 pb-6 pt-2 lg:hidden">
          <p className="pt-3 text-[11px] font-bold tracking-[0.14em] text-ink/40">시험 찾기</p>
          <nav className="flex flex-col divide-y divide-purple/10">
            {megaMenuGroups.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-bold text-ink/80"
              >
                {g.label}
              </Link>
            ))}
          </nav>
          <p className="pt-4 text-[11px] font-bold tracking-[0.14em] text-ink/40">바로가기</p>
          <nav className="flex flex-col divide-y divide-purple/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-bold text-ink/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/all-books"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-sm bg-purple px-5 py-3 text-center text-xs font-bold tracking-[0.1em] text-ivory"
          >
            내 교재 찾기
          </Link>
        </div>
      )}
    </header>
  );
}
