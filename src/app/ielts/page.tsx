import type { Metadata } from "next";
import TestLandingPage from "@/components/TestLandingPage";

export const metadata: Metadata = {
  title: "IELTS 문제집 | C-BRIDGE TEST PREP",
  description:
    "IELTS Academic Reading, Listening, Writing Task 1·2, Speaking 유형별 문제집과 Full Mock Test. 유학, 취업, 이민을 위한 IELTS 준비를 C-BRIDGE와 함께하세요.",
};

export default function IeltsPage() {
  return <TestLandingPage testId="IELTS" />;
}
