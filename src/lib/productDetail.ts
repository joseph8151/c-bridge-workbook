import { Product } from "./products";
import { levelInfo, testMeta } from "./testMeta";

export interface SampleQuestion {
  passage: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
}

export interface ProductDetail {
  whoFor: string[];
  whatYouPractice: string[];
  toc: string[];
  sample: SampleQuestion;
  studyPlan: { week: string; focus: string }[];
}

export function getProductDetail(product: Product): ProductDetail {
  const meta = testMeta[product.test];
  const level = levelInfo[product.level];

  return {
    whoFor: [
      `${meta.name} ${product.skill} 영역에서 목표 점수까지 실전 문제량이 부족한 수험생`,
      `${level.label} 단계(${level.ko})의 훈련이 필요한 학습자`,
      "이론 강의는 충분히 들었지만 실전 감각이 부족하다고 느끼는 수험생",
      "제한된 시간 안에 정확히 답하는 훈련이 필요한 수험생",
    ],
    whatYouPractice: [
      `${product.skill} 영역 핵심 문항 유형 전체`,
      `총 ${product.questions.toLocaleString()}문항의 반복 실전 훈련`,
      "실제 시험과 동일한 난이도 배치와 시간 배분",
      "오답 노트를 위한 상세 해설 및 근거 문장 표시",
    ],
    toc: [
      "PART 1. Diagnostic Check — 진단 테스트",
      `PART 2. ${product.skill} Core Types — 유형별 집중 훈련`,
      "PART 3. Timed Practice Sets — 시간 제한 실전 세트",
      `PART 4. ${level.label} Level Challenge — ${level.ko}`,
      "PART 5. Answer Key & Explanations — 정답 및 해설",
    ],
    sample: buildSampleQuestion(product),
    studyPlan: [
      { week: "Week 1", focus: `${product.skill} 유형 진단 및 기초 다지기` },
      { week: "Week 2", focus: "유형별 집중 반복 훈련" },
      { week: "Week 3", focus: `${level.label} 난이도 문제 풀이` },
      { week: "Week 4", focus: "시간 제한 실전 세트 및 총점검" },
    ],
  };
}

function buildSampleQuestion(product: Product): SampleQuestion {
  if (product.skill.toLowerCase().includes("reading") || product.skill === "Academic Reading") {
    return {
      passage:
        "Urban heat islands occur when cities replace natural land cover with dense concentrations of pavement, buildings, and other surfaces that absorb and retain heat. This effect can raise a city's average temperature by several degrees compared to its surrounding rural areas, particularly during the evening hours when built surfaces slowly release the heat absorbed during the day.",
      question:
        "According to the passage, why do cities tend to be warmer than surrounding rural areas in the evening?",
      choices: [
        "Cities receive more direct sunlight than rural areas.",
        "Built surfaces release stored heat slowly after sunset.",
        "Rural areas have higher humidity levels overnight.",
        "Urban vehicles produce more heat than rural traffic.",
      ],
      answerIndex: 1,
      explanation:
        "The passage states that built surfaces \"slowly release the heat absorbed during the day,\" which directly explains the evening temperature difference described in the question.",
    };
  }

  if (product.skill.toLowerCase().includes("listening")) {
    return {
      passage:
        "[Audio Transcript Excerpt] Professor: Today I want to talk about a phenomenon called cognitive load, which refers to the amount of mental effort being used in working memory. When cognitive load is too high, learning actually becomes less effective, even if the material itself is important.",
      question: "What is the professor mainly explaining?",
      choices: [
        "A method for measuring intelligence",
        "Why some students prefer group study",
        "How excessive mental effort can reduce learning",
        "The history of memory research",
      ],
      answerIndex: 2,
      explanation:
        "The professor defines cognitive load and explains that when it is too high, \"learning actually becomes less effective\" — the main idea is the relationship between mental effort and learning outcomes.",
    };
  }

  if (product.skill.toLowerCase().includes("speaking")) {
    return {
      passage:
        "Prompt: Some people prefer to work for a large company, while others prefer to work for a small company. Which do you prefer and why? Use specific reasons and details in your response.",
      question: "Sample high-scoring response structure:",
      choices: [
        "State a clear preference, give two reasons, support each with a specific example",
        "List every possible advantage and disadvantage without choosing a side",
        "Describe both companies equally without stating a preference",
        "Focus only on salary without addressing the actual prompt",
      ],
      answerIndex: 0,
      explanation:
        "High-scoring responses commit to one position early, then develop exactly two well-supported reasons within the time limit — breadth without depth typically lowers delivery and development scores.",
    };
  }

  return {
    passage:
      "Prompt: Some people believe that technology has made it easier for young people to be independent, while others think it has made them more dependent on their parents. Discuss both views and give your own opinion.",
    question: "Which approach best fits a high-scoring Task 2 response?",
    choices: [
      "Take a clear position and support it with one extended, well-developed argument",
      "Discuss both views with balanced evidence, then state a clear personal opinion",
      "Summarize the question without adding new ideas",
      "List unrelated opinions about technology in general",
    ],
    answerIndex: 1,
    explanation:
      "Discuss-both-views prompts require addressing both sides with relevant evidence before committing to a clearly stated personal position in the conclusion.",
  };
}
