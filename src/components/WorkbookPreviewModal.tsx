"use client";

import { useState } from "react";
import Image from "next/image";

export default function WorkbookPreviewModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden border text-left"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="img-fade relative h-48 w-full md:h-56">
          <Image
            src="/images/workbook-open.jpg"
            alt="C-BRIDGE 문제집 www.c-bridge.uk"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ objectPosition: "center" }}
          />
        </div>
        <span
          className="absolute bottom-3 left-3 border px-3.5 py-1.5 text-xs font-medium tracking-[0.04em]"
          style={{ background: "var(--color-paper)", borderColor: "var(--color-border)", color: "var(--color-ink)" }}
        >
          교재 미리보기 (Look inside)
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-5"
          style={{ background: "rgba(17,24,32,0.7)" }}
          role="dialog"
          aria-modal="true"
          aria-label="교재 미리보기"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden border"
            style={{ background: "var(--color-paper)", borderColor: "var(--color-border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="닫기"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border text-lg font-medium"
              style={{ background: "var(--color-paper)", borderColor: "var(--color-border)", color: "var(--color-ink)" }}
            >
              ×
            </button>
            <div className="img-fade relative h-[70vh] max-h-[560px] w-full">
              <Image
                src="/images/workbook-open.jpg"
                alt="C-BRIDGE 문제집 www.c-bridge.uk"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-contain"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
