"use client";

import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
      {/* Next.js SSRs this client component's initial markup, so crawlers still see the schema. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="border-b" style={{ borderColor: "var(--color-border)" }}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="break-keep text-[15px] font-medium md:text-base" style={{ color: "var(--color-ink)" }}>
                {item.q}
              </span>
              <span aria-hidden className="shrink-0 text-xl font-light" style={{ color: "var(--color-bronze)" }}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p
                id={`faq-panel-${i}`}
                role="region"
                className="break-keep pb-6 text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
