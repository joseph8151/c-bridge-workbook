"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/config";
import BridgeMark from "@/components/BridgeMark";

const primaryLinks = navLinks.filter((l) => l.href !== "/consultation");

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
      className="sticky top-0 z-50 w-full transition-[background-color,border-color] duration-300"
      style={{
        background: scrolled ? "rgba(246,240,228,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <BridgeMark size={44} className="hidden md:block" />
          <Image
            src="/images/mobile-mark.jpg"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover md:hidden"
            style={{ border: "1px solid var(--color-line)" }}
          />
          <span className="text-xs font-bold tracking-[0.14em] text-[var(--color-inkstrong)] md:text-sm">
            C-BRIDGE
          </span>
          <Image
            src="/images/logo-mark.jpg"
            alt=""
            width={26}
            height={38}
            className="hidden object-cover md:block"
            style={{ border: "1px solid rgba(42,46,36,0.35)" }}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-[0.08em] text-ink/80 transition-colors hover:text-[var(--color-rust)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-col items-end gap-1 md:flex">
          <Link
            href="/consultation"
            className="btn-primary rounded-sm px-5 py-2.5 text-xs font-bold tracking-[0.1em]"
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
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-ink/10 bg-paper px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col divide-y divide-ink/10">
            {primaryLinks.map((link) => (
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
            className="btn-primary mt-4 block rounded-sm px-5 py-3 text-center text-xs font-bold tracking-[0.1em]"
          >
            상담
          </Link>
          <p className="mt-2 text-center text-[11px] text-ink/45">{siteConfig.weekendNotice}</p>
        </div>
      )}
    </header>
  );
}
