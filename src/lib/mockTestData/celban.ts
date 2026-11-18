import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 CELBAN 기출문항이 아니며,
// CELBAN을 운영하는 기관과 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다.
export const celbanDemo: MockTest = {
  slug: "celban",
  title: "CELBAN 모의고사 (데모)",
  description: "Reading·Writing 데모 문항 3개로 구성된 샘플 모의고사입니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 CELBAN 기출문항이 아닙니다. CELBAN을 운영하는 기관과 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
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
        "Accurate nursing documentation is considered a legal record of patient care and is often reviewed during audits or in the event of a formal complaint. Documentation that uses vague terms, such as noting that a patient 'seemed uncomfortable' without specifying observable signs, provides less useful evidence than documentation describing specific, observable findings, such as a measured pain score or visible grimacing. For this reason, many nursing education programs emphasize objective, measurable language over subjective impressions when training students to write patient notes.",
      question: "According to the passage, why is objective language preferred in nursing documentation?",
      options: [
        { id: "a", text: "It is faster to write than subjective language." },
        { id: "b", text: "It provides stronger evidence than vague, subjective descriptions." },
        { id: "c", text: "Hospitals require it for billing purposes only." },
        { id: "d", text: "Patients prefer reading objective notes." },
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
        "Before administering medication, nurses are trained to confirm several details, commonly summarized as the 'rights' of medication administration: the right patient, right drug, right dose, right route, and right time. Skipping any of these checks increases the risk of a medication error. Some hospitals have added barcode scanning systems that cross-check a patient's wristband against the prescribed medication, which has been shown in several studies to reduce administration errors, although the systems cannot fully replace a nurse's own clinical judgment.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Barcode scanning systems have been shown to reduce medication errors in some studies." },
        { id: "b", text: "Barcode scanning fully replaces the need for clinical judgment." },
        { id: "c", text: "Skipping a medication check increases the risk of error." },
        { id: "d", text: "The 'rights' of medication administration include only the right patient and right drug." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q3-essay",
      type: "essay",
      section: "writing",
      title: "Writing: 교대 인수인계 요약",
      instructions:
        "아래 간단한 임상 메모를 바탕으로, 다음 근무조 간호사에게 전달할 인수인계 요약을 40~120단어로 작성하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Patient: 74-year-old female, post-hip-surgery day 2. Reports pain level 4/10 at rest, 7/10 with movement. Ambulated short distance with walker and assistance this morning. Surgical site dressing dry and intact. Family visited and asked about expected discharge date.",
      minWords: 40,
      maxWords: 120,
    },
  ],
};
