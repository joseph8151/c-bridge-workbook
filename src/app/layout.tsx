import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.c-bridge.uk";
const ogTitle = "C-BRIDGE | 성인 어학시험 전문 문제집";
const ogDescription =
  "TOEIC·OPIc·PTE·IELTS·SJPT·TSC·JLPT·HSK·FLEX 등 성인 어학시험 전문 문제집과 실전 대비 자료";

export const metadata: Metadata = {
  title: ogTitle,
  description:
    "TOEIC, OPIc, JLPT, HSK, FLEX, TOEFL, IELTS, PTE부터 전문직 시험까지. 취업·이직·승진·유학·이민을 위한 성인 어학시험 전문 문제집과 실전 대비 자료를 C-BRIDGE에서 만나보세요.",
  metadataBase: new URL(siteUrl),
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
    description: "취업·승진·유학을 위한 성인 어학시험 전문 문제집",
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
      </body>
    </html>
  );
}
