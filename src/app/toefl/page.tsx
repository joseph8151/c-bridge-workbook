import type { Metadata } from "next";
import TestLandingPage from "@/components/TestLandingPage";

export const metadata: Metadata = {
  title: "TOEFL 문제집 | C-BRIDGE TEST PREP",
  description:
    "TOEFL Reading, Listening, Speaking, Writing 유형별 집중 문제집과 Full Mock Test. 해외 대학 진학을 위한 학술 영어 시험 준비를 C-BRIDGE와 함께하세요.",
};

export default function ToeflPage() {
  return <TestLandingPage testId="TOEFL" />;
}
