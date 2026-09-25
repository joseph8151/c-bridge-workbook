"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export interface ExamItem {
  name: string;
  desc: string;
  keywords?: string[];
}

export interface ExamGroup {
  label: string;
  items: ExamItem[];
}

function matches(item: ExamItem, query: string) {
  const haystack = [item.name, item.desc, ...(item.keywords ?? [])].join(" ").toLowerCase();
  return haystack.includes(query);
}

export default function ExamsFilter({ groups }: { groups: ExamGroup[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((g) => ({ ...g, items: g.items.filter((item) => matches(item, q)) }))
      .filter((g) => g.items.length > 0);
  }, [groups, query]);

  return (
    <div>
      <div className="border p-5" style={{ borderColor: "var(--color-line)" }}>
        <label className="text-xs font-bold tracking-[0.1em] text-ink/50" htmlFor="exam-search">
          시험 검색
        </label>
        <input
          id="exam-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="예: 셀반, 미시간영어, CELBAN, MET"
          className="mt-2 w-full border-0 border-b bg-transparent px-0 py-2 text-sm text-ink focus:outline-none"
          style={{ borderColor: "var(--color-line)" }}
        />
      </div>

      <div className="mt-14 space-y-14">
        {filtered.map((g) => (
          <div key={g.label}>
            <p className="text-xs font-bold tracking-[0.18em] text-ink/45">{g.label}</p>
            <div className="mt-4 border-t" style={{ borderColor: "var(--color-line)" }} />
            <div className="grid border-l sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--color-line)" }}>
              {g.items.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-r p-8"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  <p className="font-serif text-lg font-bold" style={{ color: "var(--color-inkstrong)" }}>
                    {item.name}
                  </p>
                  <p className="mt-1.5 text-sm text-ink/60">{item.desc}</p>
                  <Link
                    href={`/consultation?test=${encodeURIComponent(item.name)}`}
                    className="mt-4 inline-block text-xs font-bold tracking-[0.08em]"
                    style={{ color: "var(--color-rust)" }}
                  >
                    상담 →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-ink/50">검색 결과가 없습니다.</p>
        )}
      </div>

      <p className="mt-16 text-sm text-ink/50">
        목록에 없으면{" "}
        <Link href="/consultation" className="underline decoration-ink/25 underline-offset-4 hover:text-ink/80">
          상담
        </Link>
        에 시험명을 적으세요.
      </p>
    </div>
  );
}
