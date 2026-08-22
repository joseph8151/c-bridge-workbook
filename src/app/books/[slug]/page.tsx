import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TierSelector from "@/components/TierSelector";
import TestCard from "@/components/TestCard";
import { tests, getTestBySlug, groupMeta } from "@/lib/tests";
import { getWhoFor, getSamplePreview } from "@/lib/productDetail";
import { getGuidesForTest } from "@/lib/guides";
import { getTestPriceLabel } from "@/lib/products";

export function generateStaticParams() {
  return tests.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) return {};
  return {
    title: `${test.name} 교재 | C-BRIDGE`,
    description: test.description,
  };
}

export default async function TestDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) notFound();

  const group = groupMeta[test.group];
  const whoFor = getWhoFor(test);
  const sample = getSamplePreview(test);
  const guides = getGuidesForTest(test.name);
  const related = tests.filter((t) => t.group === test.group && t.id !== test.id).slice(0, 3);

  return (
    <>
      <section className="border-b border-purple/10 bg-lavender/20 py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.14em]" style={{ color: group.color }}>
            {group.navLabel}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-black leading-tight text-ink md:text-5xl">
            {test.name} 완성 대비
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
            {test.tagline}를 문제부터 실전 모의시험까지 한 번에 준비하세요.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-ink/50">
            목표 Level에 따라 충분히 연습할 수 있도록 3가지 분량을 선택할 수 있습니다. {getTestPriceLabel()}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <TierSelector test={test} />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h2 className="font-serif text-2xl font-bold text-ink">이런 분께 추천합니다</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {whoFor.map((item) => (
              <li key={item} className="flex gap-3 rounded-[16px] bg-ivory p-4 text-sm text-ink/75">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h2 className="font-serif text-2xl font-bold text-ink">구매 전에 확인하세요</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[20px] border border-purple/15 bg-lavender/10 p-7">
              <p className="text-[10px] font-bold tracking-[0.16em] text-purple">{sample.label}</p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-ink">{sample.prompt}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">{sample.detail}</p>
            </div>

            {guides.length > 0 && (
              <div className="rounded-[20px] border border-purple/15 bg-plum p-7">
                <p className="text-[10px] font-bold tracking-[0.16em] text-gold">
                  처음 준비한다면 먼저 읽어보세요
                </p>
                <div className="mt-4 space-y-3">
                  {guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="block rounded-[12px] bg-ivory/5 p-4 text-sm font-semibold text-lavender/90 transition-colors hover:bg-ivory/10"
                    >
                      {g.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <h2 className="font-serif text-2xl font-bold text-ink">관련 시험</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TestCard key={t.id} test={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-plum py-14 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 text-center md:px-10">
          <p className="font-serif text-2xl font-bold text-ivory md:text-3xl">
            어떤 분량이 나에게 맞는지 아직 모르겠다면?
          </p>
          <Link
            href="/finder"
            className="rounded-[14px] bg-gold px-8 py-3.5 text-sm font-bold tracking-[0.04em] text-plum transition-transform hover:-translate-y-0.5"
          >
            무료 교재 추천 받기
          </Link>
        </div>
      </section>
    </>
  );
}
