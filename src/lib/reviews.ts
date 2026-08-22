export interface Testimonial {
  id: string;
  test: string;
  tier: string;
  tag: string;
  quote: string;
  author: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "pte",
    test: "PTE",
    tier: "200P",
    tag: "Speaking 집중 구성",
    quote:
      "PTE 처음 준비할 때 유형이 너무 많아서 어디부터 해야 할지 막막했는데, 문제량이 많아서 유형 익히는 데 도움이 됐어요. 저는 Speaking이 약해서 Speaking 비중을 더 높여서 구성했는데 이게 제일 좋았습니다. 해설도 답만 있는 게 아니라 왜 그런지 설명이 있어서 혼자 공부하기 괜찮았어요.",
    author: "PTE 200P 구매자",
  },
  {
    id: "duolingo",
    test: "Duolingo",
    tier: "100P",
    tag: "단기 · Speaking 보완",
    quote:
      "시험까지 3주밖에 안 남아서 100P로 주문했어요. Reading은 괜찮고 Speaking이 약하다고 말씀드렸더니 그쪽 위주로 추천해주셔서 훨씬 효율적으로 공부했습니다. 일반 문제집보다 제가 필요한 부분만 집중할 수 있는 점이 좋았어요.",
    author: "듀오링고 100P 구매자",
  },
  {
    id: "sjpt",
    test: "SJPT",
    tier: "200P",
    tag: "Level 6+ 목표",
    quote:
      "회사 승진 때문에 SJPT 준비하게 됐는데 시중에 자료가 생각보다 별로 없더라고요. Level 6 이상 목표라고 말씀드리고 주문했는데 예상질문이 다양해서 반복 연습하기 좋았습니다. 외운 답변만 하다가 질문이 바뀌어도 말하는 연습을 많이 하게 됐어요.",
    author: "SJPT 200P 구매자",
  },
  {
    id: "tsc",
    test: "TSC",
    tier: "300P",
    tag: "사진 묘사 · 의견제시 집중",
    quote:
      "TSC 재시험 준비하면서 문제량이 부족해서 300P로 구매했습니다. 사진 묘사랑 의견제시가 약해서 그 유형을 더 많이 요청했어요. 처음에는 가격이 조금 고민됐는데 자료 받아보니까 양이 꽤 많고 해설이랑 추가자료까지 있어서 만족했습니다.",
    author: "TSC 300P 구매자",
  },
  {
    id: "ielts",
    test: "IELTS",
    tier: "200P",
    tag: "Writing 집중, 목표 7.0",
    quote:
      "IELTS 7.0 목표로 준비 중인데 Writing이 계속 점수를 잡아먹어서 Writing 위주로 주문했습니다. Task 2 주제도 다양하고 답안 구조 정리까지 있어서 혼자 공부하기 편했어요. 모든 영역이 똑같이 들어 있는 책보다 저한테는 이런 방식이 더 맞았습니다.",
    author: "IELTS 200P 구매자",
  },
  {
    id: "flex-jp",
    test: "FLEX 일본어",
    tier: "200P",
    tag: "독해 비중 강화",
    quote:
      "JLPT는 준비해봤는데 FLEX는 처음이라 교재 찾기가 어려웠어요. 독해 비중을 높여서 200P로 주문했고, 문제 유형이 다양해서 시험 감 익히는 데 좋았습니다. FLEX처럼 자료가 적은 시험은 이런 맞춤형 구성이 확실히 편한 것 같아요.",
    author: "FLEX 일본어 200P 구매자",
  },
  {
    id: "opic",
    test: "OPIc",
    tier: "100P",
    tag: "돌발주제 · Role Play 보완, IH 목표",
    quote:
      "IH 목표로 단기간 준비하려고 100P 선택했어요. 돌발주제랑 Role Play가 약하다고 했더니 그쪽 비중을 높여주셔서 좋았습니다. 그냥 스크립트 외우는 방식이 아니라 답변 구조를 잡는 식이라 실제로 말할 때 덜 막혔어요.",
    author: "OPIc 100P 구매자",
  },
  {
    id: "toefl",
    test: "TOEFL",
    tier: "300P",
    tag: "Reading 집중, 110+ 목표",
    quote:
      "110점 이상 목표라서 일반 입문서보다 고난도 문제가 많이 필요했습니다. Reading을 특히 많이 넣고 싶다고 요청했는데 원하는 방향으로 구성할 수 있어서 좋았어요. 300P라 양이 많긴 한데 고득점 목표면 오히려 충분히 풀 게 있어서 마음이 편합니다.",
    author: "TOEFL 300P 구매자",
  },
  {
    id: "flex-en",
    test: "FLEX 영어",
    tier: "100P",
    tag: "독해 · 어휘 집중, 단기 대비",
    quote:
      "직장 때문에 FLEX 영어가 급하게 필요해서 시험 한 달 전에 주문했습니다. 시간이 없어서 전 영역을 깊게 하기보다 독해랑 어휘 중심으로 받고 싶다고 했는데 그 방향으로 맞출 수 있었어요. 시험 직전 정리자료도 있어서 마지막 주에 잘 활용했습니다.",
    author: "FLEX 영어 100P 구매자",
  },
  {
    id: "general",
    test: "C-BRIDGE",
    tier: "종합 후기",
    tag: "맞춤 구성 전반",
    quote:
      "처음에는 PDF 문제집인데 가격대가 있어서 고민했는데, 받아보니 문제집만 있는 게 아니라 해설이랑 모의문제, 요약자료까지 같이 있어서 생각보다 구성이 많았어요. 무엇보다 같은 시험이라도 목표점수랑 약한 영역에 따라 다르게 선택할 수 있다는 점이 괜찮았습니다. 다음 시험 준비할 때도 필요한 영역 위주로 다시 구매할 것 같아요.",
    author: "C-BRIDGE 구매자",
  },
];

export function getTestimonialForTest(testName: string): Testimonial | undefined {
  return testimonials.find(
    (t) => t.id !== "general" && (testName.includes(t.test) || t.test.includes(testName))
  );
}
