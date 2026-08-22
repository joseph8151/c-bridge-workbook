"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-purple/10 border-y border-purple/10">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-lg font-bold text-ink md:text-xl">{item.q}</span>
              <span
                className={`shrink-0 text-xl text-purple transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 text-sm leading-relaxed text-ink/65 md:text-base">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
