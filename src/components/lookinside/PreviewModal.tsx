"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PreviewCard from "./PreviewCard";
import type { PreviewPage } from "@/lib/lookInsidePreviews";

export default function PreviewModal({
  pages,
  index,
  onClose,
  onNavigate,
}: {
  pages: PreviewPage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const page = pages[index];

  const prev = useCallback(() => onNavigate((index - 1 + pages.length) % pages.length), [index, pages.length, onNavigate]);
  const next = useCallback(() => onNavigate((index + 1) % pages.length), [index, pages.length, onNavigate]);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  // Portal straight to <body>: an ancestor section uses transform for its
  // [data-reveal] scroll animation, which creates a CSS stacking context
  // that would otherwise trap this modal's z-index below the fixed,
  // z-index:50 sticky consult button no matter how high we set it here.
  // Safe without an SSR/mount guard — this component only ever mounts from
  // a client-side state change, never during the initial server render.
  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 min-[361px]:p-6"
      style={{ background: "rgba(17,24,32,0.78)" }}
      role="dialog"
      aria-modal="true"
      aria-label={`${page.titleEn} 미리보기`}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="닫기"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-2xl font-light text-white/90 transition-colors hover:text-white min-[361px]:right-5 min-[361px]:top-5"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="이전 미리보기"
        className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-2xl text-white/80 transition-colors hover:text-white min-[361px]:left-3"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="다음 미리보기"
        className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-2xl text-white/80 transition-colors hover:text-white min-[361px]:right-3"
      >
        →
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-0 mx-12 max-h-[82vh] w-full max-w-[380px] overflow-y-auto min-[430px]:mx-14"
        style={{ touchAction: "pinch-zoom" }}
      >
        <PreviewCard page={page} detail />
        <div className="mt-4 text-center">
          <p className="text-xs font-bold tracking-[0.08em] text-white/90">
            {page.no} · {page.eyebrow}
          </p>
          <p className="mt-1 text-[11px] text-white/60">{page.titleEn}</p>
        </div>
      </div>

      <p className="absolute bottom-4 text-xs font-medium tracking-[0.06em] text-white/60 min-[361px]:bottom-5">
        {index + 1} / {pages.length}
      </p>
    </div>,
    document.body
  );
}
