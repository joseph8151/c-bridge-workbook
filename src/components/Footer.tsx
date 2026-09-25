import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/config";

export default function Footer() {
  const columns = Object.entries(footerLinks) as [
    keyof typeof footerLinks,
    (typeof footerLinks)[keyof typeof footerLinks],
  ][];

  return (
    <footer style={{ background: "var(--color-inkstrong)", color: "var(--color-paper)" }}>
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-14">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl font-black tracking-tight md:text-4xl">
              {siteConfig.brandName}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              {siteConfig.brandSub}
            </p>
            <Link
              href="/consultation"
              className="btn-primary mt-6 rounded-sm px-6 text-xs font-bold"
            >
              상담
            </Link>
          </div>

          {columns.map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-bold tracking-[0.18em] text-paper/50">{heading}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/85 transition-colors hover:text-[var(--color-rust)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.email}</span>
            <span>{siteConfig.hours}</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-paper/50">{siteConfig.weekendNotice}</p>
        <p className="mt-1 text-xs text-paper/40">{siteConfig.address}</p>
      </div>
    </footer>
  );
}
