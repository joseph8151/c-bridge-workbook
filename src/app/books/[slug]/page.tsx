import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TierSelector from "@/components/TierSelector";
import AddOnSection from "@/components/AddOnSection";
import TestCard from "@/components/TestCard";
import BookPreview from "@/components/BookPreview";
import WhyCBridge from "@/components/WhyCBridge";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import { tests, getTestBySlug, groupMeta } from "@/lib/tests";
import { getWhoFor, getSamplePreview } from "@/lib/productDetail";
import { getGuidesForTest } from "@/lib/guides";
import { tierMeta, tierOrder } from "@/lib/products";
import { getTestIntro, getTestTips } from "@/lib/testContent";
import { getWhoTakesTestInfo } from "@/lib/whoTakesTest";
import { siteFaqItems } from "@/lib/faqData";
import TolesBookPage from "@/components/pages/TolesBookPage";
import MarlinsBookPage from "@/components/pages/MarlinsBookPage";
import EptaBookPage from "@/components/pages/EptaBookPage";
import SpaBookPage from "@/components/pages/SpaBookPage";
import VersantBookPage from "@/components/pages/VersantBookPage";
import EsptBookPage from "@/components/pages/EsptBookPage";
import TepsSpeakingBookPage from "@/components/pages/TepsSpeakingBookPage";
import OpicBookPage from "@/components/pages/OpicBookPage";
import CelpeBrasBookPage from "@/components/pages/CelpeBrasBookPage";
import TelcPflegeBookPage from "@/components/pages/TelcPflegeBookPage";
import TradeEnglishBookPage from "@/components/pages/TradeEnglishBookPage";
import SatBookPage from "@/components/pages/SatBookPage";
import LsatBookPage from "@/components/pages/LsatBookPage";
import GreBookPage from "@/components/pages/GreBookPage";
import GmatBookPage from "@/components/pages/GmatBookPage";
import McatBookPage from "@/components/pages/McatBookPage";
import DatBookPage from "@/components/pages/DatBookPage";
import OatBookPage from "@/components/pages/OatBookPage";
import UcatBookPage from "@/components/pages/UcatBookPage";
import PteExpressBookPage from "@/components/pages/PteExpressBookPage";

export function generateStaticParams() {
  return tests.map((t) => ({ slug: t.slug }));
}

// 해외취업·이민·비자 신규 시험 전용 SEO 타이틀 — 다른 시험의 기본 타이틀 생성 방식은 그대로 둡니다.
const TITLE_OVERRIDES: Record<string, string> = {
  "jft-basic": "JFT-Basic 문제집 | 일본 특정기능 시험 대비 | C-BRIDGE",
  "eps-topik": "EPS-TOPIK 문제집 | 한국 취업 한국어 시험 대비 | C-BRIDGE",
  "pte-home": "PTE Home 문제집 | UKVI 영국 비자 영어시험 대비 | C-BRIDGE",
  "ielts-life-skills": "IELTS Life Skills 문제집 | 영국 비자 영어시험 대비 | C-BRIDGE",
  "trinity-gese": "Trinity GESE 문제집 | UKVI 영어시험 대비 | C-BRIDGE",
  "trinity-ise": "Trinity ISE 문제집 | 영국 유학·비자 영어시험 대비 | C-BRIDGE",
  "skills-for-english-ukvi": "Skills for English UKVI 문제집 | 영국 비자 영어시험 대비 | C-BRIDGE",
  met: "MET 문제집 | Michigan English Test 대비 | C-BRIDGE",
  "cambridge-c1-advanced": "Cambridge C1 Advanced 문제집 | C1 Advanced 시험 대비 | C-BRIDGE",
  "us-citizenship-test": "U.S. Citizenship Test 문제집 | 미국 시민권 시험 대비 | C-BRIDGE",
  lsat: "LSAT 문제집 300P | Logical Reasoning · Reading Comprehension | C-BRIDGE",
  gre: "GRE 문제집 300P | Verbal · Quant · Writing | C-BRIDGE",
  gmat: "GMAT 문제집 300P | Quant · Verbal · Data Insights | C-BRIDGE",
  mcat: "MCAT 문제집 400P | CARS · Biology · Chemistry · Psychology | C-BRIDGE",
  dat: "DAT 문제집 350P | Natural Sciences · PAT · Reading · Quant | C-BRIDGE",
  oat: "OAT 문제집 350P | Physics · Science · Reading · Quant | C-BRIDGE",
  ucat: "UCAT 문제집 300P | Verbal · Decision Making · Quant · SJT | C-BRIDGE",
  "pte-express": "PTE Express 문제집 | 미국 대학 영어시험 대비 | C-BRIDGE",
  spa: "SPA 문제집 100P | Speaking 실전 대비 | C-BRIDGE",
  epta: "EPTA 문제집 100P | 항공영어 Listening · Speaking 대비 | C-BRIDGE",
  versant: "Versant 문제집 100P | Speaking · Listening 실전 대비 | C-BRIDGE",
  espt: "ESPT 문제집 60P | Speaking 실전 대비 | C-BRIDGE",
  "teps-speaking": "TEPS Speaking 문제집 60P | 말하기 실전 대비 | C-BRIDGE",
  "opic-english": "OPIc 영어 문제집 60P | Speaking 실전 대비 | C-BRIDGE",
  "opic-chinese": "OPIc 중국어 문제집 60P | Speaking 실전 대비 | C-BRIDGE",
  "opic-japanese": "OPIc 일본어 문제집 60P | Speaking 실전 대비 | C-BRIDGE",
  "opic-spanish": "OPIc 스페인어 문제집 60P | Speaking 실전 대비 | C-BRIDGE",
  "opic-vietnamese": "OPIc 베트남어 문제집 60P | Speaking 실전 대비 | C-BRIDGE",
  "celpe-bras": "CELPE-Bras 문제집 100P | 포르투갈어 실전 대비 | C-BRIDGE",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const test = getTestBySlug(slug);
  if (!test) return {};
  const title = TITLE_OVERRIDES[slug] ?? `${test.name} 교재 | C-BRIDGE`;
  // 네이버 SEO — 과목(시험)마다 "OO 문제집"·"OO 교재" 키워드를 항상 포함시키고,
  // 시험별로 따로 등록된 세부 키워드(test.keywords)가 있으면 이어붙입니다.
  const keywords = Array.from(
    new Set([test.name, `${test.name} 문제집`, `${test.name} 교재`, ...(test.keywords ?? [])])
  );
  return {
    title,
    description: test.description,
    keywords,
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

  // 모든 시험 상세 페이지(일반 템플릿 + 아래 자체 구성 페이지 전부)에 공통으로
  // 들어가는 구조화 데이터. 가격 필드가 필요한 Product 대신, 가격 없이도 쓸 수
  // 있는 Course로 표시합니다.
  const testJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
          { "@type": "ListItem", position: 2, name: test.name, item: `https://www.c-bridge.uk/books/${test.slug}` },
        ],
      },
      {
        "@type": "Course",
        name: `${test.name} 문제집`,
        description: test.description,
        provider: { "@type": "Organization", name: "C-BRIDGE", sameAs: "https://www.c-bridge.uk" },
      },
    ],
  };
  const testJsonLdScript = (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(testJsonLd) }} />
  );

  if (test.slug === "toles")
    return (
      <>
        {testJsonLdScript}
        <TolesBookPage />
      </>
    );
  if (test.slug === "marlins")
    return (
      <>
        {testJsonLdScript}
        <MarlinsBookPage />
      </>
    );
  if (test.slug === "epta")
    return (
      <>
        {testJsonLdScript}
        <EptaBookPage />
      </>
    );
  if (test.slug === "spa")
    return (
      <>
        {testJsonLdScript}
        <SpaBookPage />
      </>
    );
  if (test.slug === "versant")
    return (
      <>
        {testJsonLdScript}
        <VersantBookPage />
      </>
    );
  if (test.slug === "espt")
    return (
      <>
        {testJsonLdScript}
        <EsptBookPage />
      </>
    );
  if (test.slug === "teps-speaking")
    return (
      <>
        {testJsonLdScript}
        <TepsSpeakingBookPage />
      </>
    );
  if (test.slug === "opic-english")
    return (
      <>
        {testJsonLdScript}
        <OpicBookPage language="영어" languageLabel="ENGLISH" />
      </>
    );
  if (test.slug === "opic-chinese")
    return (
      <>
        {testJsonLdScript}
        <OpicBookPage language="중국어" languageLabel="CHINESE" />
      </>
    );
  if (test.slug === "opic-japanese")
    return (
      <>
        {testJsonLdScript}
        <OpicBookPage language="일본어" languageLabel="JAPANESE" />
      </>
    );
  if (test.slug === "opic-spanish")
    return (
      <>
        {testJsonLdScript}
        <OpicBookPage language="스페인어" languageLabel="SPANISH" />
      </>
    );
  if (test.slug === "opic-vietnamese")
    return (
      <>
        {testJsonLdScript}
        <OpicBookPage language="베트남어" languageLabel="VIETNAMESE" />
      </>
    );
  if (test.slug === "celpe-bras")
    return (
      <>
        {testJsonLdScript}
        <CelpeBrasBookPage />
      </>
    );
  if (test.slug === "telc-pflege")
    return (
      <>
        {testJsonLdScript}
        <TelcPflegeBookPage />
      </>
    );
  if (test.slug === "trade-english")
    return (
      <>
        {testJsonLdScript}
        <TradeEnglishBookPage />
      </>
    );
  if (test.slug === "sat")
    return (
      <>
        {testJsonLdScript}
        <SatBookPage />
      </>
    );
  if (test.slug === "lsat")
    return (
      <>
        {testJsonLdScript}
        <LsatBookPage />
      </>
    );
  if (test.slug === "gre")
    return (
      <>
        {testJsonLdScript}
        <GreBookPage />
      </>
    );
  if (test.slug === "gmat")
    return (
      <>
        {testJsonLdScript}
        <GmatBookPage />
      </>
    );
  if (test.slug === "mcat")
    return (
      <>
        {testJsonLdScript}
        <McatBookPage />
      </>
    );
  if (test.slug === "dat")
    return (
      <>
        {testJsonLdScript}
        <DatBookPage />
      </>
    );
  if (test.slug === "oat")
    return (
      <>
        {testJsonLdScript}
        <OatBookPage />
      </>
    );
  if (test.slug === "ucat")
    return (
      <>
        {testJsonLdScript}
        <UcatBookPage />
      </>
    );
  if (test.slug === "pte-express")
    return (
      <>
        {testJsonLdScript}
        <PteExpressBookPage />
      </>
    );

  const group = groupMeta[test.group];
  const availableTiers = test.availableTiers ?? tierOrder;
  const singleTierMeta = availableTiers.length === 1 ? tierMeta[availableTiers[0]] : null;
  // 이 시험이 실제로 파는 분량만 나열한 구성 문구 (가격은 상담을 통해 안내).
  const availablePriceLine = `페이지 수에 따라 구성이 달라집니다. ${availableTiers
    .map((t) => `${tierMeta[t].pages}페이지`)
    .join(", ")} 중 선택 가능합니다. 가격은 상담을 통해 안내해드립니다.`;
  const whoFor = getWhoFor(test);
  const sample = getSamplePreview(test);
  const guides = getGuidesForTest(test.name);
  const related = tests.filter((t) => t.group === test.group && t.id !== test.id).slice(0, 3);
  const intro = getTestIntro(test);
  const tips = getTestTips(test);
  const overview = getWhoTakesTestInfo(test);

  const overviewRows = [
    { label: "시험 목적", value: overview.purpose },
    { label: "응시 대상", value: overview.audience },
    overview.duration ? { label: "시험 시간", value: overview.duration } : null,
    overview.score ? { label: "점수 체계", value: overview.score } : null,
    { label: "활용 국가 · 기관", value: overview.usedIn },
  ].filter((r): r is { label: string; value: string } => r !== null);

  return (
    <>
      {testJsonLdScript}

      {/* 01 · Hero */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <div>
            <p className="eyebrow">{group.navLabel}</p>
            <h1
              className="mt-3 break-keep font-serif text-[40px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[56px]"
              style={{ color: "var(--color-ink)" }}
            >
              {test.name}
            </h1>
            <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
              {test.tagline}
            </p>
            <p className="mt-2 max-w-2xl text-sm" style={{ color: "var(--color-muted)" }}>
              {singleTierMeta
                ? `목표 Level에 따라 충분히 연습할 수 있는 ${singleTierMeta.label} 단일 구성입니다. 가격은 상담을 통해 안내해드립니다.`
                : `목표 Level에 따라 충분히 연습할 수 있도록 ${availableTiers.length}가지 분량을 선택할 수 있습니다. ${availablePriceLine}`}
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-[0.04em]" style={{ color: "var(--color-ink)" }}>
              {["Workbook", "Answer Guide", "Mock Test", "Final Review", "Study Plan"].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-x-2">
                  {step}
                  {i < arr.length - 1 && <span style={{ color: "var(--color-bronze)" }}>→</span>}
                </span>
              ))}
            </p>
          </div>
        </Container>
      </section>

      {test.slug === "pte-academic" && (
        <section className="border-t py-10 md:py-12" style={{ borderColor: "var(--color-border)" }}>
          <Container>
            <p className="eyebrow">PTE Academic UKVI</p>
            <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed md:text-base" style={{ color: "var(--color-muted)" }}>
              영국 비자·이민(UKVI) 목적의 PTE Academic UKVI도 동일한 시험 유형으로 준비할 수 있습니다.
              목표 기관이 요구하는 버전에 맞춰 같은 교재로 대비하세요.
            </p>
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

      <AddOnSection testSlug={test.slug} />

      <section className="border-t py-14 md:py-16" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <SectionHeader eyebrow="HOW TO ORDER" />
          <div className="mt-8 grid gap-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-5" style={{ borderColor: "var(--color-border)" }}>
            {[
              { no: "01", title: "시험 선택", desc: `예: ${test.name}` },
              { no: "02", title: "목표 선택", desc: "예: 목표 점수/레벨" },
              {
                no: "03",
                title: "분량 선택",
                desc: singleTierMeta ? singleTierMeta.label : availableTiers.map((t) => tierMeta[t].label).join(" / "),
              },
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
            <p className="font-serif text-lg font-semibold" style={{ color: "var(--color-ink)" }}>
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
      <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow" style={{ color: "var(--color-bronze)" }}>
            STUDY METHOD
          </p>
          <h2 className="mt-2 font-serif text-2xl font-medium tracking-[-0.02em]" style={{ color: "var(--color-ink)" }}>
            {test.name} 학습 방법
          </h2>
          <div className="mt-8 grid gap-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--color-border)" }}>
            {tips.map((tip, i) => (
              <div key={tip}>
                <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
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
              <div className="mt-4 space-y-6">
                {sample.examples.map((ex, i) => (
                  <div key={ex.prompt} className={i > 0 ? "border-t pt-6" : ""} style={i > 0 ? { borderColor: "var(--color-border)" } : undefined}>
                    <p className="text-sm font-semibold leading-relaxed" style={{ color: "var(--color-ink)" }}>
                      {ex.prompt}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {ex.detail}
                    </p>
                  </div>
                ))}
              </div>
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
            {singleTierMeta ? `${singleTierMeta.label} 단일 구성. 가격은 상담을 통해 안내해드립니다.` : availablePriceLine}
          </p>
          <Link href={`/consultation?test=${encodeURIComponent(test.name)}`} className="btn-primary px-7 text-sm font-medium">
            상담
          </Link>
        </Container>
      </section>
    </>
  );
}
