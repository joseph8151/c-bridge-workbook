import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 TOEFL iBT 기출문항이 아니며,
// ETS의 공식 문항·채점 알고리즘과 무관합니다. Reading·Writing 문항만 포함되어 있고
// Listening·Speaking 섹션은 준비 중입니다.
export const toeflDemo: MockTest = {
  slug: "toefl",
  title: "TOEFL iBT 모의고사 (데모)",
  description: "Reading·Writing 데모 문항 3개로 구성된 샘플 모의고사입니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 TOEFL iBT 기출문항이 아닙니다. ETS와 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
  price: 45000,
  totalTimeMinutes: 15,
  questions: [
    {
      id: "q1-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Historians studying ancient trade routes have noted that cities located at the intersection of multiple trade paths often developed specialized economies rather than general ones. Instead of producing a wide range of goods, these cities tended to concentrate on a small number of high-value products, such as dyed textiles or metal tools, that could be easily transported over long distances. This specialization allowed artisans to develop advanced techniques within a single craft, often surpassing the quality achieved in cities that produced goods mainly for local consumption. At the same time, heavy reliance on trade made these specialized cities vulnerable to disruptions, since a blocked route could sharply reduce both their income and access to basic supplies.",
      question: "According to the passage, what was one disadvantage of economic specialization in trade cities?",
      options: [
        { id: "a", text: "Artisans could not improve their techniques over time." },
        { id: "b", text: "The cities became dependent on trade routes remaining open." },
        { id: "c", text: "Local consumption of goods increased sharply." },
        { id: "d", text: "Specialized cities produced lower-quality goods than others." },
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
        "Coastal towns have adopted a range of strategies to slow beach erosion. Some build seawalls, rigid structures intended to block waves from reaching the shoreline directly. Others add sand through a process called beach nourishment, in which sand dredged from elsewhere is deposited on an eroding beach. Seawalls can protect the immediate area behind them but often cause the beach in front of the wall to disappear more quickly, since wave energy is reflected rather than absorbed. Beach nourishment avoids this problem but must be repeated periodically, as the new sand gradually washes away as well.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Seawalls can cause the beach in front of them to erode faster." },
        { id: "b", text: "Beach nourishment is a permanent, one-time solution." },
        { id: "c", text: "Beach nourishment requires repeating the sand deposit over time." },
        { id: "d", text: "Seawalls absorb wave energy rather than reflecting it." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q3-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize in Your Own Words",
      instructions:
        "아래 지문을 20~90단어로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "The adoption of standardized shipping containers beginning in the 1950s dramatically reduced the time and labor required to load and unload cargo ships. Before containerization, goods were loaded individually, a slow process that left ships idle in port for days. Once containers of a standard size became common, cranes could move large volumes of cargo quickly, and ships spent far less time docked. Lower shipping costs that resulted from this efficiency made it more practical for manufacturers to locate factories far from their main markets, contributing to the growth of export-oriented industries in many developing economies.",
      minWords: 20,
      maxWords: 90,
    },
  ],
};
