"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import TestCard from "./TestCard";
import { tests } from "@/lib/tests";
import { tierMeta, tierOrder } from "@/lib/products";
import {
  examCategoryOrder,
  examCategoryMeta,
  getGroupsForCategory,
  getTestsForGroup,
  getComingSoonForGroup,
  type ExamCategoryId,
} from "@/lib/examCategories";

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export default function AllBooksClient() {
  const [query, setQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<Set<ExamCategoryId>>(new Set());
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  // URL hash로 특정 카테고리에 바로 진입 (예: /all-books#healthcare-medical)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && (examCategoryOrder as string[]).includes(hash)) {
      requestAnimationFrame(() => {
        setOpenCategories(new Set([hash as ExamCategoryId]));
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const q = query.trim().toLowerCase();
  const isSearching = q.length > 0;

  const matchesQuery = useMemo(() => {
    const matched = new Set<string>();
    if (!isSearching) return matched;
    tests.forEach((t) => {
      const haystack = [t.name, ...(t.keywords ?? [])].join(" ").toLowerCase();
      if (haystack.includes(q)) matched.add(t.slug);
    });
    return matched;
  }, [q, isSearching]);

  const totalMatchCount = useMemo(() => {
    if (!isSearching) return tests.length;
    return tests.filter((t) => matchesQuery.has(t.slug)).length;
  }, [isSearching, matchesQuery]);

  function jumpToCategory(id: ExamCategoryId | null) {
    if (id === null) {
      setOpenCategories(new Set());
      setOpenGroups(new Set());
      document.getElementById("all-books-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setOpenCategories(new Set([id]));
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const hasFilters = openCategories.size > 0 || query.trim().length > 0;

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
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/50">카테고리</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => jumpToCategory(null)}
              className="border px-3.5 py-1.5 text-xs font-semibold transition-colors"
              style={
                openCategories.size === 0
                  ? { borderColor: "var(--color-bronze)", background: "var(--color-bronze)", color: "var(--color-paper)" }
                  : { borderColor: "var(--color-border)", color: "var(--color-muted)" }
              }
            >
              전체
            </button>
            {examCategoryOrder.map((id) => (
              <button
                key={id}
                onClick={() => jumpToCategory(id)}
                className="border px-3.5 py-1.5 text-xs font-semibold transition-colors"
                style={
                  openCategories.has(id)
                    ? { borderColor: "var(--color-bronze)", background: "var(--color-bronze)", color: "var(--color-paper)" }
                    : { borderColor: "var(--color-border)", color: "var(--color-muted)" }
                }
              >
                {examCategoryMeta[id].navLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="py-5">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/50">패키지 분량</p>
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
            대부분의 시험은 200P·300P 두 가지 분량으로 제공됩니다. SPA·EPTA·Versant·CELPE-Bras는
            100P, ESPT·TEPS Speaking·OPIc는 60P 집중 구성으로 제공됩니다. 각 시험 페이지에서
            확인할 수 있습니다.
          </p>
        </div>

        {Boolean(hasFilters) && (
          <button
            onClick={() => {
              setQuery("");
              jumpToCategory(null);
            }}
            className="mt-2 text-xs font-semibold tracking-[0.06em]"
            style={{ color: "var(--color-bronze)" }}
          >
            필터 초기화
          </button>
        )}
      </aside>

      <div id="all-books-top">
        <p className="mb-6 text-sm text-ink/50">
          {isSearching ? `검색 결과 ${totalMatchCount}개 시험` : `전체 ${totalMatchCount}개 시험`}
        </p>

        {isSearching && totalMatchCount === 0 ? (
          <div className="border p-8 text-center min-[361px]:p-12" style={{ borderColor: "var(--color-border)", background: "var(--color-paper-dark)" }}>
            <p className="text-sm text-ink/60">조건에 맞는 시험을 찾지 못했습니다.</p>
          </div>
        ) : (
          <div className="space-y-5">
            {examCategoryOrder.map((categoryId) => (
              <CategorySection
                key={categoryId}
                categoryId={categoryId}
                query={q}
                isSearching={isSearching}
                matchesQuery={matchesQuery}
                isOpen={openCategories.has(categoryId)}
                onToggle={() => setOpenCategories((s) => toggle(s, categoryId))}
                openGroups={openGroups}
                onToggleGroup={(groupId) => setOpenGroups((s) => toggle(s, groupId))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CategorySection({
  categoryId,
  query,
  isSearching,
  matchesQuery,
  isOpen,
  onToggle,
  openGroups,
  onToggleGroup,
}: {
  categoryId: ExamCategoryId;
  query: string;
  isSearching: boolean;
  matchesQuery: Set<string>;
  isOpen: boolean;
  onToggle: () => void;
  openGroups: Set<string>;
  onToggleGroup: (groupId: string) => void;
}) {
  const meta = examCategoryMeta[categoryId];
  const groups = getGroupsForCategory(categoryId);

  const groupsWithTests = groups.map((g) => ({
    group: g,
    tests: getTestsForGroup(g),
    comingSoon: getComingSoonForGroup(g.id),
  }));

  const visibleGroups = isSearching
    ? groupsWithTests
        .map(({ group, tests: groupTests, comingSoon }) => ({
          group,
          comingSoon,
          tests: groupTests.filter((t) => matchesQuery.has(t.slug)),
        }))
        .filter((g) => g.tests.length > 0)
    : groupsWithTests;

  if (isSearching && visibleGroups.length === 0) return null;

  const categoryCount = new Set(visibleGroups.flatMap((g) => g.tests.map((t) => t.slug))).size;
  const expanded = isOpen || isSearching;

  return (
    <div id={categoryId} className="scroll-mt-24 border" style={{ borderColor: "var(--color-border)" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors min-[430px]:p-7"
      >
        <span>
          <span className="eyebrow" style={{ color: "var(--color-bronze)" }}>
            {meta.navLabelEn}
          </span>
          <span className="mt-2 block font-serif text-xl font-medium tracking-[-0.02em] md:text-2xl" style={{ color: "var(--color-ink)" }}>
            {meta.navLabel}
          </span>
          <span className="mt-1.5 block max-w-xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            {meta.description}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-3 pt-1">
          <span className="text-xs font-semibold" style={{ color: "var(--color-muted)" }}>
            {categoryCount > 0 ? `${categoryCount}개 시험` : "준비 중"}
          </span>
          <span
            className="text-lg leading-none transition-transform"
            style={{ color: "var(--color-bronze)", transform: expanded ? "rotate(180deg)" : "none" }}
          >
            ▾
          </span>
        </span>
      </button>

      {expanded && (
        <div className="border-t px-6 pb-6 min-[430px]:px-7 min-[430px]:pb-7" style={{ borderColor: "var(--color-border)" }}>
          <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>
            {visibleGroups.map(({ group, tests: groupTests, comingSoon }) => (
              <GroupSection
                key={group.id}
                group={group}
                tests={groupTests}
                comingSoon={comingSoon}
                isOpen={openGroups.has(group.id) || isSearching}
                onToggle={() => onToggleGroup(group.id)}
                query={query}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function GroupSection({
  group,
  tests: groupTests,
  comingSoon,
  isOpen,
  onToggle,
  query,
}: {
  group: ReturnType<typeof getGroupsForCategory>[number];
  tests: ReturnType<typeof getTestsForGroup>;
  comingSoon: ReturnType<typeof getComingSoonForGroup>;
  isOpen: boolean;
  onToggle: () => void;
  query: string;
}) {
  const count = groupTests.length;

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-2 text-left"
      >
        <span>
          <span className="block text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
            {group.label}
          </span>
          <span className="mt-0.5 block text-xs" style={{ color: "var(--color-muted)" }}>
            {group.description}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2.5">
          <span className="text-xs" style={{ color: "var(--color-muted)" }}>
            {count}개{comingSoon.length > 0 ? ` +${comingSoon.length}` : ""}
          </span>
          <span
            className="text-sm leading-none transition-transform"
            style={{ color: "var(--color-bronze)", transform: isOpen ? "rotate(180deg)" : "none" }}
          >
            ▾
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="mt-2 border-t" style={{ borderColor: "var(--color-border)" }}>
          {group.summaryLink && (
            <Link
              href={group.summaryLink.href}
              className="card-hover block border-t py-5"
              style={{ borderColor: "var(--color-line)" }}
            >
              <span className="block text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {group.summaryLink.desc}
              </span>
              <span className="mt-2 inline-flex text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                {group.summaryLink.label} <span className="arrow-slide ml-1.5">→</span>
              </span>
            </Link>
          )}
          {groupTests.map((t) => (
            <TestCard key={t.id} test={t} />
          ))}
          {comingSoon.map((c) => (
            <div
              key={c.id}
              className="flex items-baseline justify-between gap-4 border-t py-5 opacity-50"
              style={{ borderColor: "var(--color-line)" }}
            >
              <span>
                <span className="block font-serif text-lg font-semibold leading-snug tracking-[-0.01em]" style={{ color: "var(--color-inkstrong)" }}>
                  {c.name}
                </span>
                <span className="mt-0.5 block text-sm leading-relaxed text-ink/60">{c.note}</span>
              </span>
              <span className="shrink-0 text-xs font-semibold tracking-[0.08em]" style={{ color: "var(--color-muted)" }}>
                준비 중
              </span>
            </div>
          ))}
          {count === 0 && comingSoon.length === 0 && !group.summaryLink && (
            <p className="py-5 text-sm" style={{ color: "var(--color-muted)" }}>
              {query ? "검색 결과가 없습니다." : "곧 추가될 시험입니다."}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
