import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 CELPIP 기출문항이 아니며,
// Paragon Testing Enterprises(CELPIP)와 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다.
export const celpipDemo: MockTest = {
  slug: "celpip",
  title: "CELPIP 모의고사 (데모)",
  description: "Reading·Writing 데모 문항 3개로 구성된 샘플 모의고사입니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 CELPIP 기출문항이 아닙니다. Paragon Testing Enterprises와 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
  price: 45000,
  questions: [
    {
      id: "q1-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Many municipalities operate curbside recycling programs that collect paper, glass, and certain plastics directly from residents' homes. Participation rates tend to be highest when programs require minimal sorting, such as placing all recyclables into a single bin rather than separating them into multiple categories. However, single-bin programs can lead to higher rates of contamination, since residents sometimes include non-recyclable items that are harder to catch when materials are not pre-sorted.",
      question: "What is one tradeoff of single-bin recycling programs, according to the passage?",
      options: [
        { id: "a", text: "They lower participation rates compared to multi-bin programs." },
        { id: "b", text: "They tend to increase the rate of contamination from non-recyclable items." },
        { id: "c", text: "They require more sorting effort from residents." },
        { id: "d", text: "They are more expensive for municipalities to operate." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q2-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Community colleges often report that a large share of their students work part-time jobs while attending classes. Flexible evening and weekend course schedules have become more common partly in response to this trend. Some researchers note that working students, while gaining practical experience and income, sometimes take longer to complete their programs than students who attend full-time without outside employment.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Many community college students work part-time while studying." },
        { id: "b", text: "Flexible scheduling has become more common partly due to working students." },
        { id: "c", text: "Working students always complete their programs faster." },
        { id: "d", text: "Community colleges do not offer evening classes." },
      ],
      correctOptionIds: ["a", "b"],
    },
    {
      id: "q3-essay",
      type: "essay",
      section: "writing",
      title: "Writing Task 1: 이메일 쓰기",
      instructions:
        "다음 상황에 맞는 이메일을 40~120단어로 작성하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.\n\n상황: 최근 구매한 가전제품에 결함이 있어 매장에 교환 또는 환불을 요청하는 이메일을 작성하세요.",
      minWords: 40,
      maxWords: 120,
    },
  ],
};
