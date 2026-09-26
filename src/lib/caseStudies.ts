import { Tier } from "./products";

export interface CaseStudy {
  test: string;
  profile: string;
  focus: string;
  tier: Tier;
}

// 실제 후기가 아닌, 목적·목표에 따라 문제집이 어떻게 구성되는지 보여주는 "학습 구성 사례"입니다.
export const caseStudies: CaseStudy[] = [
  {
    test: "PTE Academic",
    profile: "직장인 · 목표 65+",
    focus: "Speaking 집중",
    tier: "COMPLETE",
  },
  {
    test: "IELTS Academic",
    profile: "유학 준비 · 목표 6.5",
    focus: "Writing + Reading 집중",
    tier: "PREMIUM",
  },
  {
    test: "OET Nursing",
    profile: "해외 간호사 준비",
    focus: "Writing + Speaking 집중",
    tier: "PREMIUM",
  },
  {
    test: "TOEFL",
    profile: "대학원 준비",
    focus: "Reading + Writing 집중",
    tier: "COMPLETE",
  },
];
