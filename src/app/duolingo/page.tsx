import type { Metadata } from "next";
import TestLandingPage from "@/components/TestLandingPage";

export const metadata: Metadata = {
  title: "Duolingo English Test 문제집 | C-BRIDGE TEST PREP",
  description:
    "Duolingo English Test Reading, Interactive Reading·Listening, Speaking, Writing, Adaptive Practice 문제집과 Full Mock Test를 C-BRIDGE에서 만나보세요.",
};

export default function DuolingoPage() {
  return <TestLandingPage testId="DET" />;
}
