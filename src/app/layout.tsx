import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import RevealInit from "@/components/RevealInit";

// 한글 전체(제목 포함) 기본 폰트. 명조 사용 금지 — Pretendard만 사용.
// 자체 호스팅(로컬 정적 파일)이라 외부 CDN 의존이 없음.
const pretendard = localFont({
  src: [
    { path: "../../node_modules/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/pretendard/dist/web/static/woff2/Pretendard-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../node_modules/pretendard/dist/web/static/woff2/Pretendard-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../node_modules/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

// 영문 라벨 · 가격 숫자용. 이탤릭 사용 금지.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// [BRITISH GREEN REDESIGN — Step 1] 영문 디스플레이/히어로/가격 전용 세리프.
// 아직 어떤 컴포넌트에서도 사용하지 않음 — Step 2(공통 컴포넌트 리팩터)에서 연결 예정.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const siteUrl = "https://www.c-bridge.uk";
const pageTitle = "C-BRIDGE | 공인영어·전문자격증·IT 자격시험 문제집";
const pageDescription =
  "C-BRIDGE는 PTE, CELPIP, OET, IELTS, TOEFL, NCLEX, LSAT, GRE, AWS, Azure, CompTIA, SQLD, ADsP 등 공인어학 및 전문자격시험 대비 PDF 문제집을 제공합니다.";
const ogTitle = "C-BRIDGE | 전문시험 PDF 문제집";
const ogDescription = "공인영어, 의료, 대학원, 클라우드, IT, 데이터 자격시험별 문제집과 실전 모의고사.";

// 네이버 웹 노출용 주요 키워드 — 검색 유입이 많은 시험명·목적 키워드를 우선순위로 배치
const mainKeywords = [
  "성인 어학시험 문제집",
  "TOEFL 문제집",
  "IELTS 문제집",
  "PTE 문제집",
  "PTE Academic",
  "CELPIP 문제집",
  "SJPT 문제집",
  "OET 문제집",
  "EPTA 문제집",
  "취업 어학시험",
  "이민 영어시험",
  "유학 영어시험",
  "C-BRIDGE",
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Lets env(safe-area-inset-bottom) resolve to the real home-indicator
  // height on notched iPhones instead of 0, for the floating consult CTA.
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: mainKeywords,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    other: {
      "naver-site-verification": "28c18a1f32c433517fcd616d688e335640c5cd09",
    },
  },
  openGraph: {
    type: "website",
    siteName: "C-BRIDGE",
    url: `${siteUrl}/`,
    title: ogTitle,
    description: ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
  },
};

// 사이트 전체 1회만 — 브랜드 지식패널 · 사이트링크 검색창 노출을 위한 기본 구조화 데이터.
// 페이지별 구조화 데이터(Course · BreadcrumbList · FAQPage 등)는 각 페이지에서 별도로 추가합니다.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "C-BRIDGE",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      description: ogDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "C-BRIDGE",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${instrumentSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <RevealInit />
      </body>
    </html>
  );
}
