"use client";

import { useMemo, useState } from "react";
import TestCard from "./TestCard";
import { tests, TestGroup, groupMeta } from "@/lib/tests";
import { tierMeta, tierOrder } from "@/lib/products";

const groupFilters = Object.values(groupMeta);

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export default function AllBooksClient() {
  const [groups, setGroups] = useState<Set<TestGroup>>(new Set());
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return tests.filter((t) => {
      if (groups.size && !groups.has(t.group)) return false;
      if (query.trim() && !t.name.toLowerCase().includes(query.trim().toLowerCase())) return false;
      return true;
    });
  }, [groups, query]);

  // 42개 시험을 한 목록에 나열하지 않고, 전문 영역별로 묶어 "전문 시험 대비 라이브러리"로 보여줍니다.
  const grouped = useMemo(() => {
    return groupFilters
      .map((g) => ({ meta: g, items: filtered.filter((t) => t.group === g.id) }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  const hasFilters = groups.size || query.trim();

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="시험명을 검색하세요. 예: SJPT, CELPIP, OET"
          className="w-full border px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
          style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }}
        />

        <div className="border-b py-5" style={{ borderColor: "var(--color-border)" }}>
          <p className="text-[11px] font-bold tracking-[0.16em] text-ink/50">전문 영역</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {groupFilters.map((g) => (
              <button
                key={g.id}
                onClick={() => setGroups((s) => toggle(s, g.id))}
                className="border px-3.5 py-1.5 text-xs font-semibold transition-colors"
                style={
                  groups.has(g.id)
                    ? { borderColor: "var(--color-bronze)", background: "var(--color-bronze)", color: "var(--color-paper)" }
                    : { borderColor: "var(--color-border)", color: "var(--color-muted)" }
                }
              >
                {g.navLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="py-5">
          <p className="text-[11px] font-bold tracking-[0.16em] text-ink/50">패키지 분량</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tierOrder.map((t) => (
              <span
                key={t}
                className="border px-3.5 py-1.5 text-xs font-semibold"
                style={{ borderColor: "var(--color-border)", background: "var(--color-paper-dark)", color: "var(--color-muted)" }}
              >
                {tierMeta[t].label} {tierMeta[t].name}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink/40">
            모든 시험은 200P·300P 두 가지 분량으로 제공됩니다. 각 시험 페이지에서 선택할 수
            있습니다.
          </p>
        </div>

        {Boolean(hasFilters) && (
          <button
            onClick={() => {
              setGroups(new Set());
              setQuery("");
            }}
            className="mt-2 text-xs font-bold tracking-[0.06em]"
            style={{ color: "var(--color-bronze)" }}
          >
            필터 초기화
          </button>
        )}
      </aside>

      <div>
        <p className="mb-6 text-sm text-ink/50">{filtered.length}개 시험</p>
        {grouped.length > 0 ? (
          <div className="space-y-14">
            {grouped.map(({ meta, items }) => (
              <div key={meta.id}>
                <p className="eyebrow" style={{ color: meta.color }}>
                  {meta.eyebrow}
                </p>
                <p className="mt-2 font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
                  {meta.name}
                </p>
                <div className="mt-6 grid gap-5 border-t pt-6 sm:grid-cols-2 xl:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
                  {items.map((t) => (
                    <TestCard key={t.id} test={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border p-8 text-center min-[361px]:p-12" style={{ borderColor: "var(--color-border)", background: "var(--color-paper-dark)" }}>
            <p className="text-sm text-ink/60">조건에 맞는 시험을 찾지 못했습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
