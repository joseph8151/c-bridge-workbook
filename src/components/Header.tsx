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
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-serif text-2xl font-black tracking-tight text-purple md:text-3xl">
            C-BRIDGE
          </span>
          <span className="hidden text-[11px] font-bold tracking-[0.14em] text-ink/40 sm:inline">
            성인 어학시험 전문 문제집
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

        <div className="hidden flex-col items-end gap-1 md:flex">
          <Link
            href="/consultation"
            className="rounded-sm px-5 py-2.5 text-xs font-bold tracking-[0.1em] text-paper transition-all hover:brightness-90"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
          <span className="text-[10px] text-ink/45">{siteConfig.weekendNotice}</span>
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
            href="/consultation"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-sm px-5 py-3 text-center text-xs font-bold tracking-[0.1em] text-paper"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
          <p className="mt-2 text-center text-[11px] text-ink/45">{siteConfig.weekendNotice}</p>
        </div>
      )}
    </header>
  );
}
