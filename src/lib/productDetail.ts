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
  STARTER: ["Main Workbook", "Answer Guide", "Mock Test", "Final Review"],
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

export interface SampleExample {
  prompt: string;
  detail: string;
}

export interface SamplePreview {
  label: string;
  examples: SampleExample[];
}

// 시험별로 문항 성격이 명확히 다른 경우, 공통 bonusTypes 분기보다 우선 적용되는 예시.
// OET Writing은 일반 에세이가 아니라 case notes 기반 전문 서신(referral / discharge / transfer letter)입니다.
const SAMPLE_PREVIEW_OVERRIDES: Record<string, SamplePreview> = {
  oet: {
    label: "SAMPLE · CASE NOTES → LETTER",
    examples: [
      {
        prompt:
          "OET 예상과제: 아래 case notes를 참고해 담당 의사에게 보내는 Referral Letter를 작성하세요. (자체 제작 예시)",
        detail:
          "고득점 답안 구조: 환자 기본 정보와 내원 사유를 먼저 밝히고, 관련 병력·검사 소견을 시간 순으로 정리한 뒤, 현재 상태와 요청 사항(의뢰 목적)을 명확한 한 문장으로 마무리합니다. 일반 에세이가 아닌 전문 서신 형식이므로 격식체 표현과 의료 어휘 사용이 채점의 핵심입니다.",
      },
      {
        prompt:
          "OET 예상과제: 퇴원을 앞둔 환자의 case notes를 바탕으로 지역 병원 간호사에게 보내는 Discharge Letter를 작성하세요. (자체 제작 예시)",
        detail:
          "고득점 답안 구조: 입원 사유와 치료 경과를 간결히 요약한 뒤, 퇴원 시점의 상태와 추후 관리에 필요한 지시사항(투약·재방문 일정 등)을 명확히 전달합니다. 받는 사람이 후속 조치를 바로 취할 수 있도록 정보 누락 없이 정리하는 것이 핵심입니다.",
      },
      {
        prompt:
          "OET 예상과제: 전문 치료를 위해 타 기관으로 이송되는 환자의 case notes를 바탕으로 수신 기관 담당자에게 보내는 Transfer Letter를 작성하세요. (자체 제작 예시)",
        detail:
          "고득점 답안 구조: 이송 사유와 현재 상태를 먼저 밝힌 뒤, 지금까지의 치료 내역과 수신 기관에서 이어서 확인·조치해야 할 사항을 구분해 전달합니다. 중복 검사나 처치 공백이 없도록 정보를 빠짐없이 인계하는 것이 핵심입니다.",
      },
    ],
  },
};

export function getSamplePreview(test: Test): SamplePreview {
  // OET's sub-profession slugs (oet-nursing, oet-medicine, ...) share the
  // same case-notes → professional-letter Writing format as the general
  // "oet" entry — only the override lookup key differs per profession.
  if (test.slug === "oet" || test.slug.startsWith("oet-")) {
    return SAMPLE_PREVIEW_OVERRIDES.oet;
  }
  if (SAMPLE_PREVIEW_OVERRIDES[test.slug]) {
    return SAMPLE_PREVIEW_OVERRIDES[test.slug];
  }
  if (test.bonusTypes.includes("SPEAKING")) {
    return {
      label: "SAMPLE · SPEAKING",
      examples: [
        {
          prompt: `${test.name} 예상질문: 최근 인상 깊었던 경험을 이유와 함께 설명해 보세요. (자체 제작 예시)`,
          detail:
            "고득점 답변 예시: 결론(주장)을 먼저 말한 뒤, 구체적인 이유와 사례를 순서대로 덧붙이고 마지막에 한 문장으로 요약합니다. 답변이 짧게 끝나지 않도록 이유를 최소 2가지 이상 준비해두는 것이 핵심입니다.",
        },
        {
          prompt: `${test.name} 예상질문: 최근 변화하고 있는 기술이나 서비스에 대한 본인의 의견을 말해 보세요. (자체 제작 예시)`,
          detail:
            "고득점 답변 예시: 찬성·반대 중 하나의 입장을 먼저 분명히 밝힌 뒤, 그 입장을 뒷받침하는 구체적 근거를 2가지 이상 제시하고, 마지막에 입장을 다시 한 문장으로 정리합니다. 애매한 태도로 답변을 흐리지 않는 것이 핵심입니다.",
        },
        {
          prompt: `${test.name} 예상질문: 주어진 상황을 듣고, 상대방에게 문제를 설명하고 해결을 요청해 보세요. (자체 제작 예시)`,
          detail:
            "고득점 답변 예시: 상황(무엇이 문제인지)을 먼저 한 문장으로 전달하고, 발생 경위를 간단히 설명한 뒤, 상대방에게 원하는 조치를 분명한 요청문으로 마무리합니다. 감정적 표현보다 사실과 요청을 구분해 전달하는 것이 핵심입니다.",
        },
      ],
    };
  }
  if (test.bonusTypes.includes("WRITING")) {
    return {
      label: "SAMPLE · WRITING",
      examples: [
        {
          prompt: `${test.name} 예상문제: 최근 5년간 나타난 원격 근무 확산의 장단점에 대해 서술하시오. (자체 제작 예시)`,
          detail:
            "고득점 답안 구조: 서론에서 주제를 재진술하고, 본론에서 장점과 단점을 각각 구체적 근거와 함께 전개한 뒤, 결론에서 자신의 의견을 한 문장으로 명확히 정리합니다.",
        },
        {
          prompt: `${test.name} 예상문제: 온라인 교육과 오프라인 교육 중 한쪽을 선택해 그 이유를 서술하시오. (자체 제작 예시)`,
          detail:
            "고득점 답안 구조: 도입부에서 입장을 먼저 밝히고, 본론에서 선택한 입장을 뒷받침하는 근거를 구체적 예시와 함께 전개한 뒤, 결론에서 핵심 주장을 다시 한 번 압축해 마무리합니다. 양쪽 의견을 애매하게 나열하지 않는 것이 핵심입니다.",
        },
        {
          prompt: `${test.name} 예상문제: 아래 그래프(또는 자료)가 보여주는 변화의 핵심 내용을 요약하시오. (자체 제작 예시)`,
          detail:
            "고득점 답안 구조: 전체 흐름을 한 문장으로 요약한 뒤, 가장 두드러진 변화나 수치를 구체적으로 제시하고, 특이사항이 있다면 마지막에 덧붙입니다. 모든 수치를 나열하기보다 핵심 경향을 선별해 전달하는 것이 핵심입니다.",
        },
      ],
    };
  }
  if (test.bonusTypes.includes("PROFESSIONAL")) {
    return {
      label: "SAMPLE · CASE STUDY",
      examples: [
        {
          prompt: `${test.name} 예상 시나리오: 근무 중 발생한 상황을 동료에게 정확히 전달하고 필요한 조치를 요청하세요. (자체 제작 예시)`,
          detail:
            "전문 어휘와 상황별 표현을 활용해 핵심 정보(무엇을, 언제, 왜)를 빠짐없이 전달하는 것이 채점의 핵심 포인트입니다.",
        },
        {
          prompt: `${test.name} 예상 시나리오: 처리 중인 업무에서 예상치 못한 문제가 발생해 상급자에게 보고하고 지시를 요청하세요. (자체 제작 예시)`,
          detail:
            "현재 상황과 이미 취한 조치, 필요한 결정 사항을 순서대로 구분해 전달하는 것이 핵심입니다. 상급자가 추가 질문 없이 바로 판단할 수 있도록 정보를 빠짐없이 구성합니다.",
        },
        {
          prompt: `${test.name} 예상 시나리오: 상대방이 사용한 전문 용어나 지시를 정확히 이해했는지 확인하고, 필요하면 재확인을 요청하세요. (자체 제작 예시)`,
          detail:
            "애매하게 넘기지 않고 핵심 수치·용어를 되짚어 확인하는 재진술(read-back) 방식이 채점의 핵심 포인트입니다. 잘못 이해한 채로 진행하지 않는 태도가 중요합니다.",
        },
      ],
    };
  }
  if (test.bonusTypes.includes("LISTENING")) {
    return {
      label: "SAMPLE · LISTENING & VOCAB",
      examples: [
        {
          prompt: `${test.name} 예상문제: 짧은 대화를 듣고, 화자가 궁극적으로 전달하려는 내용과 일치하는 것을 고르세요. (자체 제작 예시)`,
          detail:
            "대화 전체를 암기하듯 따라가기보다, 질문이 묻는 정보(시간·장소·이유 등)가 나오는 구간에 집중해서 듣는 훈련이 정확도를 높여줍니다.",
        },
        {
          prompt: `${test.name} 예상문제: 들려주는 문장에서 빈칸에 들어갈 표현을 문맥에 맞게 고르세요. (자체 제작 예시)`,
          detail:
            "단어의 발음만으로 고르기보다 문장 전체의 흐름과 화자의 의도를 함께 파악해 선택지를 좁혀가는 것이 핵심입니다.",
        },
        {
          prompt: `${test.name} 예상문제: 안내 방송이나 공지를 듣고, 핵심 지시사항과 일치하는 것을 고르세요. (자체 제작 예시)`,
          detail:
            "세부 정보 전부를 받아 적으려 하기보다, 첫 문장에서 주제를 먼저 파악한 뒤 숫자·시간·장소 같은 핵심 정보 위주로 듣는 훈련이 속도와 정확도를 함께 높여줍니다.",
        },
      ],
    };
  }
  return {
    label: "SAMPLE · READING & VOCAB",
    examples: [
      {
        prompt: `${test.name} 예상문제: 지문의 핵심 내용과 일치하지 않는 것을 고르세요. (자체 제작 예시)`,
        detail:
          "지문 전체를 다시 읽기보다 문제가 가리키는 문장 주변을 정확히 확인하는 훈련이 속도와 정확도를 동시에 높여줍니다.",
      },
      {
        prompt: `${test.name} 예상문제: 빈칸에 들어갈 가장 적절한 단어를 문맥에 맞춰 고르세요. (자체 제작 예시)`,
        detail:
          "단어 하나만 보고 고르기보다 앞뒤 문장의 논리 관계(대조·인과·예시 등)를 먼저 파악한 뒤 선택지를 좁혀가는 훈련이 핵심입니다.",
      },
      {
        prompt: `${test.name} 예상문제: 지문을 읽고, 글쓴이의 주장이나 목적을 가장 잘 요약한 것을 고르세요. (자체 제작 예시)`,
        detail:
          "세부 사실을 모두 기억하려 하기보다 글 전체가 어떤 입장을 전달하는지를 먼저 파악하는 훈련이 고득점의 핵심입니다. 지엽적인 정보에 흔들려 전체 주장을 놓치지 않도록 합니다.",
      },
    ],
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

  const isHighLevel =
    level.includes("고급") || level.includes("AL") || level.includes("N1") || level.includes("Level 6") || level.includes("Level 7") || level.includes("5~6");
  const isRetakeOrHighScore = goal.includes("고득점") || goal.includes("재응시") || goal.includes("상위");
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
