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

  const hasFilters = groups.size || query.trim();

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="시험명을 검색하세요. 예: TSC, SJPT, FLEX"
          className="w-full rounded-[14px] border border-purple/20 bg-ivory px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-purple focus:outline-none"
        />

        <div className="border-b border-purple/10 py-5">
          <p className="text-[11px] font-bold tracking-[0.16em] text-ink/50">시험 카테고리</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {groupFilters.map((g) => (
              <button
                key={g.id}
                onClick={() => setGroups((s) => toggle(s, g.id))}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  groups.has(g.id)
                    ? "border-purple bg-purple text-ivory"
                    : "border-purple/20 text-ink/70 hover:border-purple/40"
                }`}
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
                className="rounded-full border border-purple/15 bg-lavender/30 px-3.5 py-1.5 text-xs font-semibold text-ink/60"
              >
                {tierMeta[t].label}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink/40">
            모든 시험은 100P·200P·300P 세 가지 분량으로 제공됩니다. 각 시험 페이지에서 선택할 수
            있습니다.
          </p>
        </div>

        {Boolean(hasFilters) && (
          <button
            onClick={() => {
              setGroups(new Set());
              setQuery("");
            }}
            className="mt-2 text-xs font-bold tracking-[0.06em] text-purple hover:underline"
          >
            필터 초기화
          </button>
        )}
      </aside>

      <div>
        <p className="mb-6 text-sm text-ink/50">{filtered.length}개 시험</p>
        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((t) => (
              <TestCard key={t.id} test={t} />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] border border-purple/15 bg-lavender/20 p-12 text-center">
            <p className="text-sm text-ink/60">조건에 맞는 시험을 찾지 못했습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
