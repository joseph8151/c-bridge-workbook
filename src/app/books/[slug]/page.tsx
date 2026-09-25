import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import TierSelector from "@/components/TierSelector";
import TestCard from "@/components/TestCard";
import { tests, getTestBySlug, groupMeta } from "@/lib/tests";
import { getWhoFor, getSamplePreview } from "@/lib/productDetail";
import { getGuidesForTest } from "@/lib/guides";
import { priceSummaryLine } from "@/lib/products";
import { getTestIntro, getTestTips } from "@/lib/testContent";

const DETAIL_HERO_PHOTOS: Record<string, { src: string; alt: string }> = {
  "pte-academic": { src: "/images/pte-academic.jpg", alt: "PTE Academic C-BRIDGE 문제집 www.c-bridge.uk" },
  celpip: { src: "/images/celpip.jpg", alt: "CELPIP C-BRIDGE 문제집 www.c-bridge.uk" },
};

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
  const heroPhoto = DETAIL_HERO_PHOTOS[test.slug];

  return (
    <>
      <section className="bg-paper py-14 md:py-20">
        <div
          className={`mx-auto max-w-[1200px] px-5 md:px-10 ${
            heroPhoto ? "grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]" : ""
          }`}
        >
          <div>
            <p className="text-xs font-bold tracking-[0.14em]" style={{ color: "var(--color-rust)" }}>
              {group.navLabel}
            </p>
            <h1
              className="mt-3 break-keep font-serif text-3xl font-black leading-tight md:text-4xl"
              style={{ color: "var(--color-inkstrong)" }}
            >
              {test.name} 완성 대비
            </h1>
            <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed text-ink/70 md:text-lg">
              {test.tagline}를 문제부터 실전 모의시험까지 한 번에 준비하세요.
            </p>
            <p className="mt-2 max-w-2xl text-sm text-ink/50">
              목표 Level에 따라 충분히 연습할 수 있도록 2가지 분량을 선택할 수 있습니다. {priceSummaryLine}
            </p>
          </div>
          {heroPhoto && (
            <div className="relative h-56 w-full overflow-hidden md:h-72">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          )}
        </div>
      </section>

      {test.slug === "pte-academic" && (
        <section className="bg-ivory py-12 md:py-14">
          <div className="mx-auto max-w-[1200px] px-5 md:px-10">
            <div
              className="flex flex-col gap-6 border-t pt-8 md:flex-row md:items-center md:gap-10"
              style={{ borderColor: "var(--color-line)" }}
            >
              <div className="relative h-40 w-full shrink-0 overflow-hidden md:h-36 md:w-48">
                <Image
                  src="/images/pte-academic-ukvi.jpg"
                  alt="PTE Academic UKVI C-BRIDGE 문제집 www.c-bridge.uk"
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.14em]" style={{ color: "var(--color-rust)" }}>
                  PTE Academic UKVI
                </p>
                <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed text-ink/75 md:text-base">
                  영국 비자·이민(UKVI) 목적의 PTE Academic UKVI도 동일한 시험 유형으로 준비할 수 있습니다.
                  목표 기관이 요구하는 버전에 맞춰 같은 교재로 대비하세요.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <div className="border-t pt-8" style={{ borderColor: "var(--color-line)" }}>
            <p className="text-xs font-bold tracking-[0.14em]" style={{ color: "var(--color-rust)" }}>
              시험 소개
            </p>
            <p className="mt-4 max-w-3xl break-keep text-sm leading-relaxed text-ink/75 md:text-base">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <TierSelector test={test} />
        </div>
      </section>

      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            이렇게 주문할 수 있습니다
          </p>
          <div className="mt-6 grid gap-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-5" style={{ borderColor: "var(--color-line)" }}>
            {[
              { no: "01", title: "시험 선택", desc: `예: ${test.name}` },
              { no: "02", title: "목표 선택", desc: "예: 목표 점수/레벨" },
              { no: "03", title: "분량 선택", desc: "200P / 300P" },
              { no: "04", title: "집중 영역 선택", desc: "예: Reading + Writing" },
              { no: "05", title: "맞춤 구성 확인", desc: "선택에 맞는 문제 비중으로 안내" },
            ].map((s) => (
              <div key={s.no}>
                <span className="font-serif text-3xl font-black" style={{ color: "var(--color-rust)" }}>
                  {s.no}
                </span>
                <p className="mt-2 text-sm font-bold" style={{ color: "var(--color-inkstrong)" }}>
                  {s.title}
                </p>
                <p className="mt-1 text-xs text-ink/50">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 border-t pt-10 text-center" style={{ borderColor: "var(--color-line)" }}>
            <p className="font-serif text-lg font-black" style={{ color: "var(--color-inkstrong)" }}>
              원하는 구성이 없나요?
            </p>
            <p className="text-sm leading-relaxed text-ink/60">
              Reading만 더 많이 풀고 싶거나, 특정 Speaking 유형을 집중하고 싶거나, 목표 점수에 맞춘
              난이도 구성이 필요하다면 맞춤 구성을 선택할 수 있습니다.
            </p>
            <Link
              href={`/consultation?test=${encodeURIComponent(test.name)}`}
              className="mt-2 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] transition-all duration-300 hover:brightness-90"
              style={{ background: "var(--color-rust)", color: "var(--color-paper)" }}
            >
              상담
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <h2 className="font-serif text-2xl font-black" style={{ color: "var(--color-inkstrong)" }}>
            이런 분께 추천합니다
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 border-t pt-6 sm:grid-cols-2" style={{ borderColor: "var(--color-line)" }}>
            {whoFor.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-ink/75">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-rust)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-inkstrong)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.16em]" style={{ color: "var(--color-pistachio)" }}>
            STRATEGY TIP
          </p>
          <h2 className="mt-2 font-serif text-2xl font-black" style={{ color: "var(--color-paper)" }}>
            {test.name} 전략 팁
          </h2>
          <div className="mt-8 grid gap-8 border-t border-paper/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip, i) => (
              <div key={tip}>
                <span className="font-serif text-2xl font-black" style={{ color: "var(--color-pistachio)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 break-keep text-sm leading-relaxed text-paper/80">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <h2 className="font-serif text-2xl font-black" style={{ color: "var(--color-inkstrong)" }}>
            구매 전에 확인하세요
          </h2>
          <div className="mt-8 grid gap-10 border-t pt-8 lg:grid-cols-2" style={{ borderColor: "var(--color-line)" }}>
            <div>
              <p className="text-[10px] font-bold tracking-[0.16em]" style={{ color: "var(--color-rust)" }}>
                {sample.label}
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed" style={{ color: "var(--color-inkstrong)" }}>
                {sample.prompt}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">{sample.detail}</p>
            </div>

            {guides.length > 0 && (
              <div>
                <p className="text-[10px] font-bold tracking-[0.16em]" style={{ color: "var(--color-rust)" }}>
                  처음 준비한다면 먼저 읽어보세요
                </p>
                <div className="mt-4 space-y-3">
                  {guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="block text-sm font-semibold text-ink/75 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
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
        <section className="bg-ivory py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 md:px-10">
            <h2 className="font-serif text-2xl font-black" style={{ color: "var(--color-inkstrong)" }}>
              관련 시험
            </h2>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TestCard key={t.id} test={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-5 text-center md:px-10">
          <p className="font-serif text-2xl font-black md:text-3xl" style={{ color: "var(--color-inkstrong)" }}>
            {priceSummaryLine}
          </p>
          <Link
            href={`/consultation?test=${encodeURIComponent(test.name)}`}
            className="inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] transition-all duration-300 hover:brightness-90"
            style={{ background: "var(--color-rust)", color: "var(--color-paper)" }}
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
