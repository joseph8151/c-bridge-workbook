"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PreviewCard from "@/components/lookinside/PreviewCard";
import PreviewModal from "@/components/lookinside/PreviewModal";
import { lookInsidePreviews } from "@/lib/lookInsidePreviews";

const TOTAL = lookInsidePreviews.length;

export default function BookPreview({ testName }: { testName?: string }) {
  const ctaHref = testName ? `/consultation?test=${encodeURIComponent(testName)}` : "/exams";
  const ctaLabel = testName ? "이 구성 상담하기" : "내 시험 교재 보기";
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState(0);
  const [desktopActive, setDesktopActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / TOTAL;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setMobileActive(Math.min(TOTAL - 1, Math.max(0, idx)));
  }

  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader
          eyebrow="LOOK INSIDE"
          title="교재를 직접 확인해보세요."
          description="문제부터 해설, 실전 모의, 시험 직전 정리까지 실제 학습 흐름을 미리 확인해보세요."
        />

        {/* Mobile: horizontal scroll-snap carousel, ~1.1 cards visible so the
           next card peeks in — makes it obvious there's more to swipe to. */}
        <div className="mt-8 md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {lookInsidePreviews.map((page, i) => (
              <button
                key={page.no}
                type="button"
                onClick={() => setModalIndex(i)}
                className="shrink-0 cursor-pointer text-left"
                style={{ scrollSnapAlign: "start", width: "86%" }}
                aria-label={`${page.titleEn} 미리보기 확대`}
              >
                <div className="relative">
                  <PreviewCard page={page} />
                  <span
                    className="pointer-events-none absolute bottom-3 right-3 border px-2 py-1 text-[10px] font-medium tracking-[0.04em]"
                    style={{ borderColor: "var(--color-border)", background: "rgba(251,249,244,0.92)", color: "var(--color-ink)" }}
                  >
                    탭하여 확대 ↗
                  </span>
                </div>
                <p className="mt-3 text-xs font-bold tracking-[0.06em]" style={{ color: "var(--color-bronze)" }}>
                  {page.no} · {page.eyebrow}
                </p>
                <p className="font-serif text-base font-bold" style={{ color: "var(--color-ink)" }}>
                  {page.titleEn}
                </p>
                <p className="mt-1 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {page.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              {lookInsidePreviews.map((page, i) => (
                <span
                  key={page.no}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === mobileActive ? "18px" : "6px",
                    background: i === mobileActive ? "var(--color-bronze)" : "var(--color-border)",
                  }}
                />
              ))}
            </div>
            <span className="text-xs font-medium tracking-[0.04em]" style={{ color: "var(--color-muted)" }}>
              {mobileActive + 1} / {TOTAL}
            </span>
          </div>
        </div>

        {/* Desktop/tablet: one large preview + a thumbnail rail that swaps it. */}
        <div className="mt-10 hidden md:grid md:grid-cols-[1fr_200px] md:gap-8 lg:grid-cols-[1fr_240px] lg:gap-10">
          <button
            type="button"
            onClick={() => setModalIndex(desktopActive)}
            className="group relative mx-auto w-full max-w-[360px] cursor-pointer text-left"
            aria-label={`${lookInsidePreviews[desktopActive].titleEn} 확대`}
          >
            <PreviewCard page={lookInsidePreviews[desktopActive]} detail />
            <span
              className="absolute bottom-4 right-4 border px-2.5 py-1.5 text-[11px] font-medium tracking-[0.04em] transition-colors group-hover:border-[var(--color-bronze)] group-hover:text-[var(--color-bronze)]"
              style={{ borderColor: "var(--color-border)", background: "rgba(251,249,244,0.92)", color: "var(--color-ink)" }}
            >
              클릭하여 확대 ↗
            </span>
          </button>

          <div className="flex flex-col gap-3">
            {lookInsidePreviews.map((page, i) => {
              const active = i === desktopActive;
              return (
                <button
                  key={page.no}
                  type="button"
                  onClick={() => setDesktopActive(i)}
                  className="flex cursor-pointer items-center gap-3 border p-2.5 text-left transition-colors"
                  style={{
                    borderColor: active ? "var(--color-bronze)" : "var(--color-border)",
                    background: active ? "var(--color-paper-dark)" : "transparent",
                  }}
                >
                  <div className="w-14 shrink-0">
                    <PreviewCard page={page} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.06em]" style={{ color: "var(--color-bronze)" }}>
                      {page.no}
                    </p>
                    <p className="truncate text-xs font-bold" style={{ color: "var(--color-ink)" }}>
                      {page.titleEn}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-xs" style={{ color: "var(--color-muted)" }}>
          ※ 시험과 선택 구성에 따라 제공되는 자료는 달라질 수 있습니다.
        </p>

        <Link
          href={ctaHref}
          className="mt-6 inline-flex text-sm font-medium tracking-[0.02em] transition-colors hover:text-[var(--color-bronze)]"
          style={{ color: "var(--color-ink)" }}
        >
          {ctaLabel} <span className="arrow-slide ml-1.5">→</span>
        </Link>
      </Container>

      {modalIndex !== null && (
        <PreviewModal
          pages={lookInsidePreviews}
          index={modalIndex}
          onClose={() => setModalIndex(null)}
          onNavigate={setModalIndex}
        />
      )}
    </section>
  );
}
