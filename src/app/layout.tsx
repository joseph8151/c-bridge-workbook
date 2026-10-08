import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
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
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.c-bridge.uk";
const ogTitle = "C-BRIDGE | 성인 어학시험 전문 문제집";
const ogDescription =
  "직군과 나라마다 다른 시험을 정확히 준비하는 성인 어학시험 전문 문제집과 실전 대비 자료";

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
  title: ogTitle,
  description:
    "직군과 나라가 다르면 같은 영어가 아닙니다. 취업·이직·승진·유학·이민을 위한 성인 어학시험 전문 문제집과 실전 대비 자료를 C-BRIDGE에서 만나보세요.",
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
    url: `${siteUrl}/`,
    title: ogTitle,
    description: ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: "직군과 나라마다 다른 시험, 정확하게 준비하는 성인 어학시험 전문 문제집",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory text-ink font-sans">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <RevealInit />
      </body>
    </html>
  );
}
