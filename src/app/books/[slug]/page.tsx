import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import TierSelector from "@/components/TierSelector";
import TestCard from "@/components/TestCard";
import BookPreview from "@/components/BookPreview";
import WhyCBridge from "@/components/WhyCBridge";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import { tests, getTestBySlug, groupMeta } from "@/lib/tests";
import { getWhoFor, getSamplePreview } from "@/lib/productDetail";
import { getGuidesForTest } from "@/lib/guides";
import { priceSummaryLine } from "@/lib/products";
import { getTestIntro, getTestTips } from "@/lib/testContent";
import { getWhoTakesTestInfo } from "@/lib/whoTakesTest";
import { siteFaqItems } from "@/lib/faqData";

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
  const title = `${test.name} 교재 | C-BRIDGE`;
  return {
    title,
    description: test.description,
    alternates: { canonical: `/books/${slug}` },
    openGraph: { title, description: test.description, url: `/books/${slug}` },
    twitter: { card: "summary", title, description: test.description },
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
  const overview = getWhoTakesTestInfo(test);

  const overviewRows = [
    { label: "시험 목적", value: overview.purpose },
    { label: "응시 대상", value: overview.audience },
    overview.duration ? { label: "시험 시간", value: overview.duration } : null,
    overview.score ? { label: "점수 체계", value: overview.score } : null,
    { label: "활용 국가 · 기관", value: overview.usedIn },
  ].filter((r): r is { label: string; value: string } => r !== null);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
      { "@type": "ListItem", position: 2, name: test.name, item: `https://www.c-bridge.uk/books/${test.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* 01 · Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container className={heroPhoto ? "grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]" : ""}>
          <div>
            <p className="eyebrow">{group.navLabel}</p>
            <h1
              className="mt-3 break-keep font-serif text-[40px] font-bold leading-tight tracking-[-0.01em] md:text-[56px]"
              style={{ color: "var(--color-ink)" }}
            >
              {test.name}
            </h1>
            <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
              {test.tagline}
            </p>
            <p className="mt-2 max-w-2xl text-sm" style={{ color: "var(--color-muted)" }}>
              목표 Level에 따라 충분히 연습할 수 있도록 2가지 분량을 선택할 수 있습니다. {priceSummaryLine}
            </p>
          </div>
          {heroPhoto && (
            <div className="img-fade relative h-56 w-full overflow-hidden md:h-72">
              <Image src={heroPhoto.src} alt={heroPhoto.alt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" style={{ objectPosition: "center" }} />
            </div>
          )}
        </Container>
      </section>

      {test.slug === "pte-academic" && (
        <section className="border-t py-12 md:py-14" style={{ borderColor: "var(--color-border)" }}>
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <div className="img-fade relative h-40 w-full shrink-0 overflow-hidden md:h-36 md:w-48">
                <Image src="/images/pte-academic-ukvi.jpg" alt="PTE Academic UKVI C-BRIDGE 문제집 www.c-bridge.uk" fill sizes="(max-width: 768px) 100vw, 192px" className="object-cover" style={{ objectPosition: "center" }} />
              </div>
              <div>
                <p className="eyebrow">PTE Academic UKVI</p>
                <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed md:text-base" style={{ color: "var(--color-muted)" }}>
                  영국 비자·이민(UKVI) 목적의 PTE Academic UKVI도 동일한 시험 유형으로 준비할 수 있습니다.
                  목표 기관이 요구하는 버전에 맞춰 같은 교재로 대비하세요.
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 02 · Exam Overview */}
      <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <SectionHeader eyebrow="EXAM OVERVIEW" />
          <p className="mt-4 max-w-3xl break-keep text-sm leading-relaxed md:text-base" style={{ color: "var(--color-muted)" }}>
            {intro}
          </p>
          <div className="mt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
            {overviewRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 border-b py-5 sm:grid-cols-[200px_1fr] sm:gap-6"
                style={{ borderColor: "var(--color-border)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {row.label}
                </p>
                <p className="break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 · Who This Exam Is For */}
      <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <SectionHeader eyebrow="WHO THIS EXAM IS FOR" />
          <ul className="mt-8 grid gap-x-8 gap-y-3 border-t pt-6 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
            {whoFor.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 04 · Exam Structure */}
      {overview.sections && overview.sections.length > 0 && (
        <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)" }}>
          <Container>
            <SectionHeader eyebrow="EXAM STRUCTURE" />
            <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--color-border)" }}>
              {overview.sections.map((s, i) => (
                <div key={s}>
                  <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                    {s}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              {overview.differenceFromSimilar}
            </p>
          </Container>
        </section>
      )}

      {/* 05 · Workbook Options + 06 · What's Inside */}
      <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <SectionHeader eyebrow="WORKBOOK OPTIONS" />
          <div className="mt-10">
            <TierSelector test={test} />
          </div>
        </Container>
      </section>

      <section className="border-t py-14 md:py-16" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <SectionHeader eyebrow="HOW TO ORDER" />
          <div className="mt-8 grid gap-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-5" style={{ borderColor: "var(--color-border)" }}>
            {[
              { no: "01", title: "시험 선택", desc: `예: ${test.name}` },
              { no: "02", title: "목표 선택", desc: "예: 목표 점수/레벨" },
              { no: "03", title: "분량 선택", desc: "200P / 300P" },
              { no: "04", title: "집중 영역 선택", desc: "예: Reading + Writing" },
              { no: "05", title: "맞춤 구성 확인", desc: "선택에 맞는 문제 비중으로 안내" },
            ].map((s) => (
              <div key={s.no}>
                <span className="font-serif text-3xl font-bold" style={{ color: "var(--color-bronze)" }}>
                  {s.no}
                </span>
                <p className="mt-2 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {s.title}
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--color-muted)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 border-t pt-10 text-center" style={{ borderColor: "var(--color-border)" }}>
            <p className="font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
              원하는 구성이 없나요?
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Reading만 더 많이 풀고 싶거나, 특정 Speaking 유형을 집중하고 싶거나, 목표 점수에 맞춘
              난이도 구성이 필요하다면 맞춤 구성을 선택할 수 있습니다.
            </p>
            <Link href={`/consultation?test=${encodeURIComponent(test.name)}`} className="btn-primary mt-2 px-7 text-sm font-medium">
              상담
            </Link>
          </div>
        </Container>
      </section>

      {/* 07 · Look Inside */}
      <BookPreview testName={test.name} />

      {/* 08 · Study Method */}
      <section className="py-16 md:py-20" style={{ background: "var(--color-navy)" }}>
        <Container>
          <p className="eyebrow" style={{ color: "var(--color-bronze)" }}>
            STUDY METHOD
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold" style={{ color: "var(--color-navy-text)" }}>
            {test.name} 학습 방법
          </h2>
          <div className="mt-8 grid gap-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "rgba(245,243,238,0.14)" }}>
            {tips.map((tip, i) => (
              <div key={tip}>
                <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 break-keep text-sm leading-relaxed" style={{ color: "rgba(245,243,238,0.8)" }}>
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{sample.label}</p>
              <p className="mt-4 text-sm font-semibold leading-relaxed" style={{ color: "var(--color-ink)" }}>
                {sample.prompt}
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {sample.detail}
              </p>
            </div>

            {guides.length > 0 && (
              <div>
                <p className="eyebrow">처음 준비한다면 먼저 읽어보세요</p>
                <div className="mt-4 space-y-3">
                  {guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="block text-sm font-semibold underline decoration-[var(--color-border)] underline-offset-4 transition-colors hover:text-[var(--color-bronze)]"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {g.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)" }}>
          <Container>
            <SectionHeader eyebrow="RELATED EXAMS" />
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TestCard key={t.id} test={t} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <WhyCBridge />

      {/* 09 · FAQ */}
      <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <div className="mx-auto max-w-[680px]">
            <SectionHeader eyebrow="FAQ" align="center" />
            <div className="mt-8">
              <FAQ items={siteFaqItems} />
            </div>
          </div>
        </Container>
      </section>

      {/* 10 · CTA */}
      <section className="border-t py-14 md:py-16" style={{ borderColor: "var(--color-border)" }}>
        <Container className="flex flex-col items-center gap-5 text-center">
          <p className="font-serif text-2xl font-bold md:text-3xl" style={{ color: "var(--color-ink)" }}>
            {priceSummaryLine}
          </p>
          <Link href={`/consultation?test=${encodeURIComponent(test.name)}`} className="btn-primary px-7 text-sm font-medium">
            상담
          </Link>
        </Container>
      </section>
    </>
  );
}
