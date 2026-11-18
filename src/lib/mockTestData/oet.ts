import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 OET 기출문항이 아니며,
// Cambridge Boxhill Language Assessment(OET)와 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다.
export const oetDemo: MockTest = {
  slug: "oet",
  title: "OET 모의고사 (데모)",
  description: "Reading·Writing 데모 문항 3개로 구성된 샘플 모의고사입니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 OET 기출문항이 아닙니다. OET를 운영하는 기관과 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 특정 직군(간호·의학 등)에 한정하지 않은 공통 문항이며, 현재는 Reading·Writing 문항만 제공되고 Listening·Speaking 섹션은 준비 중입니다.",
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
        "Clinical handover summaries are used to pass essential patient information between healthcare staff at the end of a shift. Effective handover summaries focus on information that affects immediate patient safety, such as pending test results or recent changes in medication, rather than repeating the patient's full history. Research in hospital settings has found that structured handover formats, which prompt staff to cover specific categories of information in a consistent order, reduce the likelihood that critical details are omitted compared to unstructured verbal handovers.",
      question: "What is the main point of the passage?",
      options: [
        { id: "a", text: "Structured handover formats help ensure critical patient information is not missed." },
        { id: "b", text: "Handover summaries should include a patient's complete medical history." },
        { id: "c", text: "Verbal handovers are more reliable than structured ones." },
        { id: "d", text: "Medication changes are rarely relevant to handover summaries." },
      ],
      correctOptionId: "a",
    },
    {
      id: "q2-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Maintaining patient confidentiality can be especially difficult in shared wards, where conversations between staff and patients may be overheard by others nearby. Some hospitals address this by training staff to lower their voices during sensitive discussions or by using private side rooms for conversations involving diagnosis or prognosis. Even with these measures, complete privacy is rarely possible in a shared ward, and some patients report hesitating to disclose certain symptoms as a result.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Shared wards make complete patient privacy difficult to achieve." },
        { id: "b", text: "All hospitals have fully solved the privacy problem in shared wards." },
        { id: "c", text: "Some patients may hesitate to share symptoms due to privacy concerns." },
        { id: "d", text: "Private side rooms are never used for sensitive conversations." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q3-essay",
      type: "essay",
      section: "writing",
      title: "Writing: 동료 의료진에게 전달할 핵심 요약",
      instructions:
        "아래 간단한 임상 메모를 바탕으로, 동료 의료진에게 전달할 핵심 요약을 40~120단어로 작성하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Patient: 68-year-old male. Admitted with shortness of breath and mild chest discomfort. Vitals stable after initial treatment. Started on new blood pressure medication yesterday; no adverse reaction observed so far. Discharge planned tomorrow pending final review.",
      minWords: 40,
      maxWords: 120,
    },
  ],
};
