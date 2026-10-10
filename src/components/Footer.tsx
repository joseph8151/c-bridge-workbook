import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/config";

export default function Footer() {
  const columns = Object.entries(footerLinks) as [
    keyof typeof footerLinks,
    (typeof footerLinks)[keyof typeof footerLinks],
  ][];

  return (
    <>
      {/* 얇은 포인트 룰 — 피스타치오는 버튼과 여기에만 */}
      <div style={{ height: 2, background: "var(--color-bronze)" }} aria-hidden="true" />
      <footer style={{ background: "var(--color-paper)", color: "var(--color-ink)" }}>
        <div className="mx-auto max-w-[1320px] px-4 min-[361px]:px-5 pt-14 pb-24 min-[361px]:pt-16 md:px-10 md:py-20">
          <p
            className="max-w-3xl break-keep text-3xl font-medium leading-[1.2] tracking-[-0.01em] md:text-5xl"
            style={{ color: "var(--color-ink)" }}
          >
            BUILD THE SCORE.
            <br />
            CROSS THE BRIDGE.
          </p>

          <div className="mt-16 grid gap-12 border-t pt-12 md:grid-cols-[2fr_1fr_1fr]" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-2xl font-medium tracking-tight" style={{ color: "var(--color-ink)" }}>
                {siteConfig.brandName.replace("-", "—")}
              </p>
              <p className="eyebrow mt-3" style={{ color: "var(--color-muted)" }}>
                PROFESSIONAL LANGUAGE EXAM SERIES
              </p>
              <p className="mt-5 max-w-xs text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {siteConfig.brandSub}
              </p>
              <Link href="/consultation" className="btn-primary mt-6 px-6 text-xs font-medium tracking-[0.08em]">
                교재 상담
              </Link>
            </div>

            {columns.map(([heading, links]) => (
              <div key={heading}>
                <p className="eyebrow" style={{ color: "var(--color-muted)" }}>
                  {heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-[var(--color-bronze)]"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-16 flex flex-col gap-4 border-t pt-8 text-xs md:flex-row md:items-center md:justify-between"
            style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}
          >
            <p>
              © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>{siteConfig.hours}</span>
            </div>
          </div>
          <p className="mt-3 text-xs" style={{ color: "var(--color-muted)" }}>
            {siteConfig.weekendNotice}
          </p>
          <p className="mt-1 text-xs" style={{ color: "var(--color-muted)" }}>
            {siteConfig.address}
          </p>
        </div>
      </footer>
    </>
  );
}
