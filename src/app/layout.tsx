import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import RevealInit from "@/components/RevealInit";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.c-bridge.uk";
const ogTitle = "C-BRIDGE | 성인 어학시험 전문 문제집";
const ogDescription =
  "직군과 나라마다 다른 시험을 정확히 준비하는 성인 어학시험 전문 문제집과 실전 대비 자료";

// 네이버 웹 노출용 주요 키워드 — 검색 유입이 많은 시험명·목적 키워드를 우선순위로 배치
const mainKeywords = [
  "성인 어학시험 문제집",
  "TOEIC 문제집",
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "C-BRIDGE 성인 어학시험 전문 문제집",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: "직군과 나라마다 다른 시험, 정확하게 준비하는 성인 어학시험 전문 문제집",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
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
