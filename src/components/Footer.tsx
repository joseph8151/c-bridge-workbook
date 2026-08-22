import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/config";

export default function Footer() {
  const columns = Object.entries(footerLinks) as [
    keyof typeof footerLinks,
    (typeof footerLinks)[keyof typeof footerLinks],
  ][];

  return (
    <footer className="bg-plum text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <p className="font-serif text-3xl font-black tracking-tight md:text-4xl">
              {siteConfig.brandName}
            </p>
            <p className="mt-3 text-xs font-bold tracking-[0.18em] text-gold">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-lavender/80">
              {siteConfig.brandSub}
            </p>
          </div>

          {columns.map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-bold tracking-[0.18em] text-lavender/60">{heading}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-lavender/90 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-lavender/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.email}</span>
            <span>{siteConfig.hours}</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-lavender/50">{siteConfig.address}</p>
      </div>
    </footer>
  );
}
