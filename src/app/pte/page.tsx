import type { Metadata } from "next";
import TestLandingPage from "@/components/TestLandingPage";

export const metadata: Metadata = {
  title: "PTE 문제집 | C-BRIDGE TEST PREP",
  description:
    "PTE Speaking, Writing, Reading, Listening, Integrated Skills 문제집과 Full Mock Test. AI 채점 방식에 최적화된 PTE 준비를 C-BRIDGE와 함께하세요.",
};

export default function PtePage() {
  return <TestLandingPage testId="PTE" />;
}
