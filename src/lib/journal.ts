export interface JournalPost {
  slug: string;
  title: string;
  test: string;
  excerpt: string;
  readTime: string;
  content: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "toefl-reading-speed",
    title: "How to Improve TOEFL Reading Speed",
    test: "TOEFL",
    excerpt:
      "TOEFL Reading에서 시간이 부족한 이유는 대부분 속도가 아니라 문제 유형별 접근법의 문제입니다.",
    readTime: "6 min read",
    content: [
      "TOEFL Reading에서 수험생들이 가장 많이 호소하는 문제는 '시간 부족'입니다. 하지만 실제 원인은 읽는 속도가 아니라 문제 유형별 접근 전략이 없다는 점인 경우가 많습니다.",
      "Vocabulary, Reference, Factual Information 문제는 지문 전체를 다시 읽을 필요가 없습니다. 문제가 가리키는 문장 근처만 정확히 읽는 훈련이 되어 있다면 시간을 크게 절약할 수 있습니다.",
      "반면 Inference, Rhetorical Purpose 문제는 문단 전체의 논리 구조를 이해해야 하므로 다른 접근이 필요합니다. 유형을 구분하는 훈련 자체가 속도를 결정합니다.",
    ],
  },
  {
    slug: "ielts-writing-task2-mistakes",
    title: "IELTS Writing Task 2: Common Mistakes",
    test: "IELTS",
    excerpt: "Band 6에서 정체되는 수험생들이 반복하는 5가지 구조적 실수를 정리했습니다.",
    readTime: "7 min read",
    content: [
      "IELTS Writing Task 2에서 Band 6대에 머무는 수험생들의 답안에는 공통된 패턴이 있습니다. 바로 '아이디어는 있지만 근거가 얕다'는 점입니다.",
      "가장 흔한 실수는 주장만 나열하고 구체적 예시를 들지 않는 것입니다. 하나의 논거를 깊게 전개하는 것이 여러 개를 얕게 나열하는 것보다 높은 점수를 받습니다.",
      "두 번째는 서론에서 문제를 그대로 옮겨 적는 것입니다. Paraphrasing 능력 자체가 Lexical Resource 평가 항목에 포함됩니다.",
    ],
  },
  {
    slug: "pte-speaking-practice",
    title: "PTE Speaking: How to Practice Efficiently",
    test: "PTE",
    excerpt: "AI 채점 방식을 이해하면 PTE Speaking 연습의 효율이 완전히 달라집니다.",
    readTime: "5 min read",
    content: [
      "PTE Speaking은 AI가 채점하기 때문에 발음의 정확성뿐 아니라 유창성(Fluency)과 답변의 완결성이 핵심 채점 요소입니다.",
      "Read Aloud 연습 시 억양보다 '끊기지 않고 끝까지 말하는 것'이 우선입니다. 중간에 멈추면 유창성 점수가 크게 하락합니다.",
      "Retell Lecture는 구조가 정해진 요약 훈련입니다. 도입-핵심 논점-예시-결론의 틀을 미리 연습해두면 실전에서 답변 구성 시간을 절약할 수 있습니다.",
    ],
  },
  {
    slug: "det-preparation-strategy",
    title: "DET Preparation Strategy",
    test: "DUOLINGO",
    excerpt: "적응형 시험의 특성을 이해하면 Duolingo English Test 준비 전략이 명확해집니다.",
    readTime: "6 min read",
    content: [
      "Duolingo English Test는 응시자의 답변 정확도에 따라 다음 문제의 난이도가 조정되는 적응형(Adaptive) 시험입니다.",
      "초반 문항에서 정확도를 확보하는 것이 전체 점수에 큰 영향을 미칩니다. 쉬운 문제라고 서두르기보다는 정확성을 우선하는 훈련이 필요합니다.",
      "Interactive Reading·Listening 유형은 다른 시험에는 없는 DET만의 고유 유형이므로, 반드시 전용 문제로 형식에 익숙해지는 과정이 필요합니다.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
