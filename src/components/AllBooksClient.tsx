"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { products, ProductType } from "@/lib/products";
import { Level, TestId } from "@/lib/testMeta";

const testFilters: { id: TestId; label: string }[] = [
  { id: "TOEFL", label: "TOEFL" },
  { id: "IELTS", label: "IELTS" },
  { id: "PTE", label: "PTE" },
  { id: "DET", label: "DET" },
  { id: "JUNIOR", label: "Junior" },
];

const skillFilters = ["Reading", "Listening", "Speaking", "Writing", "Vocabulary"];

const levelFilters: Level[] = ["FOUNDATION", "TARGET", "ADVANCED", "FINAL"];

const typeFilters: ProductType[] = ["Practice Book", "Advanced Book", "Mock Test", "Package"];

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

function FilterGroup<T extends string>({
  title,
  options,
  selected,
  onToggle,
  format,
}: {
  title: string;
  options: readonly T[];
  selected: Set<T>;
  onToggle: (value: T) => void;
  format?: (value: T) => string;
}) {
  return (
    <div className="border-b border-purple/10 py-5 first:pt-0">
      <p className="text-[11px] font-bold tracking-[0.16em] text-ink/50">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onToggle(opt)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              selected.has(opt)
                ? "border-purple bg-purple text-ivory"
                : "border-purple/20 text-ink/70 hover:border-purple/40"
            }`}
          >
            {format ? format(opt) : opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AllBooksClient() {
  const searchParams = useSearchParams();

  const [tests, setTests] = useState<Set<TestId>>(
    () => new Set(searchParams.get("test") ? [searchParams.get("test") as TestId] : []),
  );
  const [skills, setSkills] = useState<Set<string>>(
    () => new Set(searchParams.get("skill") ? [searchParams.get("skill") as string] : []),
  );
  const [levels, setLevels] = useState<Set<Level>>(new Set());
  const [types, setTypes] = useState<Set<ProductType>>(
    () => new Set(searchParams.get("type") ? [searchParams.get("type") as ProductType] : []),
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (tests.size && !tests.has(p.test)) return false;
      if (skills.size && ![...skills].some((s) => p.skill.toLowerCase().includes(s.toLowerCase())))
        return false;
      if (levels.size && !levels.has(p.level)) return false;
      if (types.size && !types.has(p.type)) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q))
          return false;
      }
      return true;
    });
  }, [tests, skills, levels, types, query]);

  const hasFilters = tests.size || skills.size || levels.size || types.size || query.trim();

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          className="w-full rounded-sm border border-purple/20 bg-ivory px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-purple focus:outline-none"
        />
        <FilterGroup
          title="FILTER BY TEST"
          options={testFilters.map((t) => t.id)}
          selected={tests}
          onToggle={(id) => setTests((s) => toggle(s, id))}
          format={(id) => testFilters.find((t) => t.id === id)?.label ?? id}
        />
        <FilterGroup
          title="FILTER BY SKILL"
          options={skillFilters}
          selected={skills}
          onToggle={(id) => setSkills((s) => toggle(s, id))}
        />
        <FilterGroup
          title="FILTER BY LEVEL"
          options={levelFilters}
          selected={levels}
          onToggle={(id) => setLevels((s) => toggle(s, id))}
        />
        <FilterGroup
          title="FILTER BY PRODUCT TYPE"
          options={typeFilters}
          selected={types}
          onToggle={(id) => setTypes((s) => toggle(s, id))}
        />
        {Boolean(hasFilters) && (
          <button
            onClick={() => {
              setTests(new Set());
              setSkills(new Set());
              setLevels(new Set());
              setTypes(new Set());
              setQuery("");
            }}
            className="mt-4 text-xs font-bold tracking-[0.08em] text-purple hover:underline"
          >
            CLEAR ALL FILTERS
          </button>
        )}
      </aside>

      <div>
        <p className="mb-6 text-sm text-ink/50">{filtered.length} books found</p>
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-sm border border-purple/15 bg-lavender/20 p-12 text-center">
            <p className="text-sm text-ink/60">조건에 맞는 문제집을 찾지 못했습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
