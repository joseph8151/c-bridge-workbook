import { celbanDemo } from "./celban";
import { celpipDemo } from "./celpip";
import { ieltsDemo } from "./ielts";
import { oetDemo } from "./oet";
import { pteAcademicDemo } from "./pteAcademic";
import { toeflDemo } from "./toefl";
import type { MockTest } from "./types";

// 모의고사 이용권 카테고리: 4~5만원대, 공개 가격. 현재 결제 연동은 없으며
// 로그인 후 바로 응시할 수 있습니다 (체험 단계).
export const mockTests: MockTest[] = [pteAcademicDemo, toeflDemo, ieltsDemo, oetDemo, celbanDemo, celpipDemo];

export const mockTestsBySlug: Record<string, MockTest> = Object.fromEntries(
  mockTests.map((test) => [test.slug, test])
);

export function getMockTest(slug: string): MockTest | null {
  return mockTestsBySlug[slug] ?? null;
}
