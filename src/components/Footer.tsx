import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/config";

export default function Footer() {
  const columns = Object.entries(footerLinks) as [
    keyof typeof footerLinks,
    (typeof footerLinks)[keyof typeof footerLinks],
  ][];

  return (
    <footer style={{ background: "var(--color-navy)", color: "var(--color-navy-text)" }}>
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
        <p
          className="max-w-3xl break-keep font-serif text-3xl font-bold leading-[1.2] tracking-[-0.01em] md:text-5xl"
          style={{ color: "var(--color-navy-text)" }}
        >
          BUILD THE SCORE.
          <br />
          CROSS THE BRIDGE.
        </p>

        <div className="mt-16 grid gap-12 border-t pt-12 md:grid-cols-[2fr_1fr_1fr]" style={{ borderColor: "rgba(245,243,238,0.14)" }}>
          <div>
            <p className="font-serif text-2xl font-bold tracking-tight">{siteConfig.brandName.replace("-", "—")}</p>
            <p className="eyebrow mt-3" style={{ color: "rgba(245,243,238,0.55)" }}>
              PROFESSIONAL LANGUAGE EXAM SERIES
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(245,243,238,0.7)" }}>
              {siteConfig.brandSub}
            </p>
            <Link href="/consultation" className="btn-primary-inverse mt-6 px-6 text-xs font-medium tracking-[0.08em]">
              교재 상담
            </Link>
          </div>

          {columns.map(([heading, links]) => (
            <div key={heading}>
              <p className="eyebrow" style={{ color: "rgba(245,243,238,0.4)" }}>
                {heading}
              </p>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[var(--color-bronze)]"
                      style={{ color: "rgba(245,243,238,0.85)" }}
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
          style={{ borderColor: "rgba(245,243,238,0.14)", color: "rgba(245,243,238,0.5)" }}
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.hours}</span>
          </div>
        </div>
        <p className="mt-3 text-xs" style={{ color: "rgba(245,243,238,0.5)" }}>
          {siteConfig.weekendNotice}
        </p>
        <p className="mt-1 text-xs" style={{ color: "rgba(245,243,238,0.4)" }}>
          {siteConfig.address}
        </p>
      </div>
    </footer>
  );
}
