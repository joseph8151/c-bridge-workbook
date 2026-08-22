"use client";

import { useState } from "react";
import Link from "next/link";
import BookCover from "./BookCover";
import { Test, groupMeta, getLevelOptions } from "@/lib/tests";
import { Tier, tierMeta, tierOrder } from "@/lib/products";
import { getIncludesForTier, getBonusContent, getBookSet } from "@/lib/productDetail";
import { focusAreas } from "@/lib/focusAreas";

export default function TierSelector({ test }: { test: Test }) {
  const levelOptions = getLevelOptions(test);
  const [tier, setTier] = useState<Tier>("COMPLETE");
  const [target, setTarget] = useState<string>(levelOptions[Math.floor(levelOptions.length / 2)]);
  const [focus, setFocus] = useState<Set<string>>(new Set());

  const meta = tierMeta[tier];
  const includes = getIncludesForTier(test, tier);
  const bonus = getBonusContent(test);
  const bookSet = getBookSet(tier);
  const color = groupMeta[test.group].color;

  function toggleFocus(id: string) {
    setFocus((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const focusLabels = focusAreas.filter((f) => focus.has(f.id)).map((f) => f.label);
  const consultQuery = new URLSearchParams({
    test: test.name,
    tier: meta.label,
    target,
    ...(focusLabels.length ? { focus: focusLabels.join(", ") } : {}),
  }).toString();

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <div className="flex flex-wrap justify-center gap-2.5 lg:sticky lg:top-28 lg:justify-start">
        {bookSet.map((title, i) => (
          <BookCover
            key={title}
            test={test.name}
            skill={title}
            tag={meta.label}
            color={color}
            size={bookSet.length > 4 ? "sm" : "md"}
            tilt={i % 2 === 0 ? -4 : 4}
          />
        ))}
      </div>

      <div>
        <p className="text-[11px] font-bold tracking-[0.14em] text-ink/40">01 · 목표 선택</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {levelOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setTarget(opt)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                target === opt
                  ? "border-purple bg-purple text-ivory"
                  : "border-purple/20 text-ink/70 hover:border-purple/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <p className="mt-6 text-[11px] font-bold tracking-[0.14em] text-ink/40">02 · 분량 선택</p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {tierOrder.map((t) => {
            const m = tierMeta[t];
            const active = t === tier;
            return (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`relative rounded-[18px] border px-4 py-5 text-center transition-colors ${
                  active
                    ? "border-purple bg-purple text-ivory shadow-[0_12px_28px_-16px_rgba(69,53,101,0.5)]"
                    : "border-purple/15 bg-white/60 text-ink hover:border-purple/30"
                }`}
              >
                {m.badge && (
                  <span
                    className={`absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-[0.06em] ${
                      active ? "bg-gold text-plum" : "bg-lavender text-purple"
                    }`}
                  >
                    {m.badge}
                  </span>
                )}
                <p className="font-serif text-xl font-black">{m.label}</p>
                <p className={`mt-1 text-xs font-bold ${active ? "text-lavender" : "text-ink/50"}`}>
                  {m.price.toLocaleString()}원
                </p>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-[11px] font-bold tracking-[0.14em] text-ink/40">
          03 · 집중 영역 선택 (선택사항)
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {focusAreas.map((f) => (
            <button
              key={f.id}
              onClick={() => toggleFocus(f.id)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                focus.has(f.id)
                  ? "border-purple bg-purple text-ivory"
                  : "border-purple/20 text-ink/70 hover:border-purple/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-[20px] border border-purple/10 bg-white/60 p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-purple/60">
                {test.name} · {target} · {meta.name}
                {focusLabels.length > 0 && ` · ${focusLabels.join(" + ")}`}
              </p>
              <p className="mt-1 font-serif text-3xl font-black text-ink">
                {meta.price.toLocaleString()}원
              </p>
            </div>
            <p className="text-sm text-ink/50">
              {meta.pages}페이지 · 모의고사 {meta.mockTestsLabel}
            </p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink/60">{meta.shortDesc}</p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {includes.map((item) => (
              <div key={item} className="flex gap-2.5 text-sm text-ink/70">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple/50" />
                {item}
              </div>
            ))}
            {bonus.flatMap((b) => b.items).map((item) => (
              <div key={item} className="flex gap-2.5 text-sm text-ink/70">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {item}
              </div>
            ))}
          </div>

          <Link
            href={`/consultation?${consultQuery}`}
            className="mt-7 flex items-center justify-center rounded-[14px] bg-purple py-3.5 text-sm font-bold tracking-[0.04em] text-ivory transition-all hover:-translate-y-0.5 hover:bg-plum"
          >
            {meta.ctaLabel}
          </Link>
          <p className="mt-3 text-center text-xs text-ink/40">
            같은 분량이라도 목표와 집중 영역에 따라 문제 구성을 다르게 선택할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
