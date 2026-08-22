import { Test, BonusType } from "./tests";
import { Tier, tierMeta } from "./products";

const bonusContent: Record<BonusType, { label: string; items: string[] }> = {
  SPEAKING: {
    label: "말하기 시험 추가자료",
    items: ["예상 질문", "답변 구성법", "고득점 표현", "상황별 표현", "답변 예시", "실전 Speaking 모의고사"],
  },
  LISTENING: {
    label: "듣기 시험 추가자료",
    items: ["듣기 음원", "QR 연습", "추가 Listening 문제", "받아쓰기 또는 핵심 표현"],
  },
  WRITING: {
    label: "Writing 시험 추가자료",
    items: ["답안 구조", "고득점 표현", "예시 답안", "자주 틀리는 표현", "채점 포인트"],
  },
  VOCAB: {
    label: "어휘 중심 시험 추가자료",
    items: ["빈출 어휘", "시험별 핵심 표현", "단어 체크리스트", "Final Vocabulary"],
  },
  PROFESSIONAL: {
    label: "전문직 시험 추가자료",
    items: ["전문 어휘", "직무별 상황", "Case Study", "Speaking Scenario"],
  },
};

export function getBonusContent(test: Test) {
  return test.bonusTypes.map((b) => bonusContent[b]);
}

const bookSets: Record<Tier, string[]> = {
  STANDARD: ["Main Book", "Answer Book", "Final Review"],
  COMPLETE: ["Main Workbook", "Answer Guide", "Mock Test Book", "Final Review", "Bonus Book"],
  PREMIUM: [
    "Main Workbook 01",
    "Main Workbook 02",
    "Detailed Answer Guide",
    "Mock Test",
    "Final Review",
    "Premium Bonus",
  ],
};

export function getBookSet(tier: Tier): string[] {
  return bookSets[tier];
}

export function getWhoFor(test: Test): string[] {
  const isSpeaking = test.bonusTypes.includes("SPEAKING");
  const isWriting = test.bonusTypes.includes("WRITING");

  const lines = [`${test.name} 시험이 처음인 분`, "예상문제가 부족한 분"];

  if (isSpeaking) {
    lines.push("답변이 짧게 끝나는 분", "고득점 표현이 필요한 분", "실전 말하기를 많이 해보고 싶은 분");
  } else if (isWriting) {
    lines.push("답안 구조를 어떻게 잡아야 할지 막막한 분", "고득점 표현이 필요한 분", "실전 문제를 충분히 풀어보고 싶은 분");
  } else {
    lines.push("점수가 잘 오르지 않는 분", "고득점 표현이 필요한 분", "실전 문제를 충분히 풀어보고 싶은 분");
  }

  return lines;
}

export function getIncludesForTier(test: Test, tier: Tier): string[] {
  return [...tierMeta[tier].includes];
}

export interface SamplePreview {
  label: string;
  prompt: string;
  detail: string;
}

export function getSamplePreview(test: Test): SamplePreview {
  if (test.bonusTypes.includes("SPEAKING")) {
    return {
      label: "SAMPLE · SPEAKING",
      prompt: `${test.name} 예상질문: 최근 인상 깊었던 경험을 이유와 함께 설명해 보세요.`,
      detail:
        "고득점 답변 예시: 결론(주장)을 먼저 말한 뒤, 구체적인 이유와 사례를 순서대로 덧붙이고 마지막에 한 문장으로 요약합니다. 답변이 짧게 끝나지 않도록 이유를 최소 2가지 이상 준비해두는 것이 핵심입니다.",
    };
  }
  if (test.bonusTypes.includes("WRITING")) {
    return {
      label: "SAMPLE · WRITING",
      prompt: `${test.name} 예상문제: 최근 5년간 나타난 원격 근무 확산의 장단점에 대해 서술하시오.`,
      detail:
        "고득점 답안 구조: 서론에서 주제를 재진술하고, 본론에서 장점과 단점을 각각 구체적 근거와 함께 전개한 뒤, 결론에서 자신의 의견을 한 문장으로 명확히 정리합니다.",
    };
  }
  if (test.bonusTypes.includes("PROFESSIONAL")) {
    return {
      label: "SAMPLE · CASE STUDY",
      prompt: `${test.name} 예상 시나리오: 근무 중 발생한 상황을 동료에게 정확히 전달하고 필요한 조치를 요청하세요.`,
      detail:
        "전문 어휘와 상황별 표현을 활용해 핵심 정보(무엇을, 언제, 왜)를 빠짐없이 전달하는 것이 채점의 핵심 포인트입니다.",
    };
  }
  return {
    label: "SAMPLE · READING & VOCAB",
    prompt: `${test.name} 예상문제: 지문의 핵심 내용과 일치하지 않는 것을 고르세요.`,
    detail:
      "지문 전체를 다시 읽기보다 문제가 가리키는 문장 주변을 정확히 확인하는 훈련이 속도와 정확도를 동시에 높여줍니다.",
  };
}

export interface RecommendationInput {
  level: string;
  goal: string;
  timeframe: string;
  dailyTime: string;
}

export function recommendTier(input: RecommendationInput): { tier: Tier; reasons: string[] } {
  const { level, goal, timeframe } = input;

  const isFirstTime = level.includes("처음");
  const isHighLevel =
    level.includes("고급") || level.includes("AL") || level.includes("N1") || level.includes("Level 6") || level.includes("Level 7") || level.includes("5~6");
  const isRetakeOrHighScore = goal.includes("고득점") || goal.includes("재응시") || goal.includes("상위");
  const isShortTimeframe = timeframe.includes("2주") || timeframe.includes("2~4주");
  const isLongTimeframe = timeframe.includes("2~3개월") || timeframe.includes("3개월 이상");

  if (isRetakeOrHighScore || isLongTimeframe || isHighLevel) {
    return {
      tier: "PREMIUM",
      reasons: [
        "고득점 또는 상위 레벨을 목표로 하고 있음",
        "충분한 문제량으로 반복 훈련이 필요한 단계",
        "2~3개월 이상의 준비 기간에 적합한 분량",
        "재응시 또는 실전 감각을 끌어올려야 하는 상황",
      ],
    };
  }

  if (isFirstTime && isShortTimeframe) {
    return {
      tier: "STANDARD",
      reasons: [
        "시험을 처음 준비하는 단계",
        "짧은 기간 안에 핵심 유형부터 익혀야 함",
        "특정 영역을 집중적으로 보완하기 좋은 분량",
        "가볍게 시작해 감을 잡기에 적합",
      ],
    };
  }

  return {
    tier: "COMPLETE",
    reasons: [
      "일반적인 시험 준비 기간에 가장 무난한 선택",
      "충분한 실전 문제와 모의고사가 필요한 단계",
      "목표 점수를 확실히 올리고 싶은 상황",
      "한 번에 제대로 준비하고 싶은 경우 가장 많이 선택하는 구성",
    ],
  };
}
