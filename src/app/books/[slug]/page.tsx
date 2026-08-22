import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TierSelector from "@/components/TierSelector";
import TestCard from "@/components/TestCard";
import { tests, getTestBySlug, groupMeta } from "@/lib/tests";
import { getWhoFor, getSamplePreview } from "@/lib/productDetail";
import { getGuidesForTest } from "@/lib/guides";
import { getTestPriceLabel } from "@/lib/products";
import { getTestIntro, getTestTips } from "@/lib/testContent";
import { getTestimonialForTest } from "@/lib/reviews";

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
  const intro = getTestIntro(test);
  const tips = getTestTips(test);
  const testimonial = getTestimonialForTest(test.name);

  return (
    <>
      <section className="border-b border-purple/10 bg-lavender/20 py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.14em]" style={{ color: group.color }}>
            {group.navLabel}
          </p>
          <h1 className="mt-3 break-keep font-serif text-3xl font-black leading-tight text-ink md:text-4xl">
            {test.name} 완성 대비
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
            {test.tagline}를 문제부터 실전 모의시험까지 한 번에 준비하세요.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-ink/50">
            목표 Level에 따라 충분히 연습할 수 있도록 3가지 분량을 선택할 수 있습니다. {getTestPriceLabel()}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["목표점수 선택 가능", "영역 집중 선택 가능", "맞춤 구성 가능"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[11px] font-bold text-gold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-14 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-col gap-6 rounded-[24px] border border-purple/10 bg-lavender/10 p-7 md:flex-row md:items-start md:gap-10 md:p-9">
            <div className="shrink-0">
              <span
                className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-[0.1em]"
                style={{ background: "var(--color-lavender)", color: group.color }}
              >
                시험 소개
              </span>
            </div>
            <p className="max-w-3xl break-keep text-sm leading-relaxed text-ink/75 md:text-base">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <TierSelector test={test} />
        </div>
      </section>

      <section className="bg-lavender/20 py-14 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="text-center text-sm font-bold tracking-[0.06em] text-purple">
            이렇게 주문할 수 있습니다
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { no: "01", title: "시험 선택", desc: `예: ${test.name}` },
              { no: "02", title: "목표 선택", desc: "예: 목표 점수/레벨" },
              { no: "03", title: "분량 선택", desc: "100P / 200P / 300P" },
              { no: "04", title: "집중 영역 선택", desc: "예: Reading + Writing" },
              { no: "05", title: "맞춤 구성 확인", desc: "선택에 맞는 문제 비중으로 안내" },
            ].map((s) => (
              <div key={s.no} className="rounded-[16px] bg-ivory p-5 text-center">
                <span className="font-serif text-2xl font-black text-purple/30">{s.no}</span>
                <p className="mt-2 text-sm font-bold text-ink">{s.title}</p>
                <p className="mt-1 text-xs text-ink/50">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 rounded-[20px] border border-purple/15 bg-ivory p-7 text-center">
            <p className="font-serif text-lg font-bold text-ink">원하는 구성이 없나요?</p>
            <p className="text-sm leading-relaxed text-ink/60">
              Reading만 더 많이 풀고 싶거나, 특정 Speaking 유형을 집중하고 싶거나, 목표 점수에 맞춘
              난이도 구성이 필요하다면 맞춤 구성을 선택할 수 있습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={`/consultation?test=${encodeURIComponent(test.name)}`}
                className="rounded-[14px] bg-purple px-6 py-3 text-xs font-bold tracking-[0.06em] text-ivory transition-colors hover:bg-plum"
              >
                내 목표에 맞게 구성하기
              </Link>
              <Link
                href="/consultation"
                className="rounded-[14px] border border-purple/25 px-6 py-3 text-xs font-bold tracking-[0.06em] text-purple transition-colors hover:bg-lavender"
              >
                맞춤 교재 문의
              </Link>
            </div>
          </div>
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

      <section className="bg-plum py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.16em] text-gold">STRATEGY TIP</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-ivory">
            {test.name} 전략 팁
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip, i) => (
              <div
                key={tip}
                className="rounded-[18px] border border-ivory/10 bg-ivory/5 p-5"
              >
                <span className="font-serif text-2xl font-black text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 break-keep text-sm leading-relaxed text-lavender/90">
                  {tip}
                </p>
              </div>
            ))}
          </div>
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

            {testimonial && (
              <div className="rounded-[20px] border border-gold/25 bg-plum p-7">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-gold">구매 후기</p>
                  <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold text-gold">
                    {testimonial.tier}
                  </span>
                </div>
                <p className="mt-4 break-keep text-sm leading-relaxed text-lavender/90">
                  {testimonial.quote}
                </p>
                <p className="mt-4 text-xs font-bold text-lavender/60">{testimonial.author}</p>
              </div>
            )}

            {!testimonial && guides.length > 0 && (
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
