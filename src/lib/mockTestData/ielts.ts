import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 IELTS 기출문항이 아니며,
// British Council·IDP·Cambridge와 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다.
export const ieltsDemo: MockTest = {
  slug: "ielts",
  title: "IELTS 모의고사 (데모)",
  description: "Reading·Writing 데모 문항 3개로 구성된 샘플 모의고사입니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 IELTS 기출문항이 아닙니다. British Council, IDP, Cambridge와 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
  price: 45000,
  questions: [
    {
      id: "q1-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Installing vegetation on rooftops, commonly known as green roofs, has become increasingly common in dense urban areas. Beyond their aesthetic appeal, green roofs can reduce a building's cooling costs in summer by providing an extra layer of insulation. Researchers have also found that clusters of green roofs can measurably lower surrounding air temperatures, a phenomenon linked to a reduction in the so-called urban heat island effect. However, retrofitting an older building with a green roof is not always possible, since many older roof structures were not designed to bear the additional weight of soil and plants.",
      question: "진술: All older buildings can be retrofitted with a green roof.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
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
        "Many public libraries now offer e-book lending in addition to physical books. Digital lending allows a library to serve multiple branches from a single purchased copy in some licensing models, though publishers often restrict the number of simultaneous digital loans per copy. Some libraries have reported that e-book lending increases overall reading among patrons who find physical visits inconvenient, while others note that popular new titles still generate long waiting lists in digital form, much as they do for physical copies.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Digital lending can increase reading among patrons who rarely visit in person." },
        { id: "b", text: "Publishers place no limits on simultaneous digital loans." },
        { id: "c", text: "Popular digital titles can still have long waiting lists." },
        { id: "d", text: "E-book lending has completely replaced physical book lending." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q3-essay",
      type: "essay",
      section: "writing",
      title: "Writing Task 2: 의견 쓰기",
      instructions:
        "다음 주제에 대한 본인의 의견을 40~120단어로 작성하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "주제: 대학 교육은 모든 학생에게 무료로 제공되어야 한다는 의견에 동의하는 사람도 있고, 그렇지 않은 사람도 있습니다. 당신의 의견은 어떻습니까?",
      minWords: 40,
      maxWords: 120,
    },
  ],
};
