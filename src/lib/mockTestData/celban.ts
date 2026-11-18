import { DEFAULT_PRICING_TIERS } from "./pricing";
import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 CELBAN 기출문항이 아니며,
// CELBAN을 운영하는 기관과 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다. 응시할
// 때마다 아래 문제은행에서 5문항이 무작위로 출제됩니다.
export const celbanDemo: MockTest = {
  slug: "celban",
  title: "CELBAN 모의고사 (데모)",
  description: "10문항의 Reading·Writing 데모 문제은행에서 매회 5문항이 무작위로 출제됩니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 CELBAN 기출문항이 아닙니다. CELBAN을 운영하는 기관과 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
  pricingTiers: DEFAULT_PRICING_TIERS,
  totalTimeMinutes: 15,
  questionsPerAttempt: 5,
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
    {
      id: "q4-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Falls remain one of the most common adverse events in hospital settings, particularly among older patients with reduced mobility or certain medications that affect balance. Many hospitals use a standardized fall-risk assessment completed on admission and repeated periodically, which assigns patients a risk score based on factors such as age, mobility, and medication history. Patients identified as high risk are often given a visible marker, such as a colored wristband, and nursing staff are trained to implement additional precautions, such as keeping the bed in a low position and ensuring the call bell is within reach.",
      question: "According to the passage, what is one purpose of a colored wristband for fall-risk patients?",
      options: [
        { id: "a", text: "To indicate the patient's blood type." },
        { id: "b", text: "To visibly identify patients who need additional fall precautions." },
        { id: "c", text: "To track which medications a patient has been given." },
        { id: "d", text: "To record the patient's discharge date." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q5-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Pressure injuries, also known as bedsores, can develop when sustained pressure on the skin, often over bony areas such as the heels or lower back, reduces blood flow to the tissue. Patients with limited mobility are at particular risk, since they may be unable to reposition themselves independently. Regular repositioning schedules, typically every two hours for patients who cannot move on their own, along with the use of pressure-redistributing mattresses, are standard preventive measures in many care settings.",
      question: "According to the passage, why are patients with limited mobility at particular risk of pressure injuries?",
      options: [
        { id: "a", text: "They are unable to reposition themselves independently." },
        { id: "b", text: "They have naturally thicker skin than other patients." },
        { id: "c", text: "They require pressure-redistributing mattresses less often." },
        { id: "d", text: "They are repositioned too frequently by staff." },
      ],
      correctOptionId: "a",
    },
    {
      id: "q6-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "While a single abnormal vital sign reading can sometimes be explained by measurement error or temporary factors such as recent activity, nurses are trained to pay particular attention to trends over time, since a gradual change across several readings can indicate a developing clinical problem before any single reading would be classified as abnormal. Many hospitals now use early warning scoring systems that combine several vital signs into a single score, intended to flag a deteriorating patient earlier than relying on any one measurement alone.",
      question: "According to the passage, why do nurses pay attention to trends in vital signs rather than single readings alone?",
      options: [
        { id: "a", text: "A gradual change over time can reveal a developing problem earlier." },
        { id: "b", text: "Single readings are always more accurate than trends." },
        { id: "c", text: "Early warning scores ignore vital sign trends entirely." },
        { id: "d", text: "Trends are only useful after a patient has already recovered." },
      ],
      correctOptionId: "a",
    },
    {
      id: "q7-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Correctly identifying a patient before any procedure, medication administration, or specimen collection is considered a fundamental safety check in healthcare. Best practice generally requires confirming at least two identifiers, such as full name and date of birth, rather than relying on a room number or bed assignment alone, since patients can be moved between beds or rooms. Verbal confirmation from the patient is preferred when the patient is able to respond, though identification bands are used as a backup, particularly for patients who are unconscious or unable to communicate clearly.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Room numbers alone are considered a reliable patient identifier." },
        { id: "b", text: "At least two identifiers, such as name and date of birth, are recommended." },
        { id: "c", text: "Identification bands serve as a backup for patients who cannot communicate." },
        { id: "d", text: "Verbal confirmation is never used when a patient can respond." },
      ],
      correctOptionIds: ["b", "c"],
    },
    {
      id: "q8-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Thorough wound assessment and documentation help the care team track healing progress and detect early signs of infection. A complete wound note typically includes the wound's size, depth, the appearance of surrounding tissue, and the type and amount of any drainage present. Photographs are increasingly used alongside written notes in many facilities, since an image can capture detail that is difficult to fully convey in text, though photography still requires written description to record measurements accurately.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "A complete wound note includes details such as size and drainage." },
        { id: "b", text: "Photographs alone are sufficient without any written description." },
        { id: "c", text: "Photographs can capture detail that is difficult to convey in text." },
        { id: "d", text: "Wound documentation has no connection to detecting infection." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q9-reorder",
      type: "reorder-paragraphs",
      section: "reading",
      title: "Reading: Re-order Paragraphs",
      instructions: "아래 문단들을 올바른 순서로 배열하세요.",
      shuffledParagraphs: [
        {
          id: "p4",
          text: "The restraint is removed as soon as it is no longer necessary, and its use is reassessed regularly rather than continued indefinitely.",
        },
        {
          id: "p2",
          text: "Before applying a restraint, staff are generally required to document the specific behavior that prompted the decision and the alternatives that were already attempted.",
        },
        {
          id: "p1",
          text: "Physical restraints are used in healthcare settings only when less restrictive measures have failed to keep a patient safe.",
        },
        {
          id: "p3",
          text: "Once a restraint is in place, the patient must be monitored at regular, specified intervals to check circulation, skin condition, and overall wellbeing.",
        },
      ],
      correctOrder: ["p1", "p2", "p3", "p4"],
    },
    {
      id: "q10-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Reading: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "Effective discharge teaching ensures that a patient understands how to manage their condition safely once they leave the {{1}}. Nurses are often trained to use the 'teach-back' method, asking the patient to {{2}} instructions in their own words, which helps confirm genuine understanding rather than simple agreement. When a patient struggles to repeat the instructions accurately, staff should {{3}} the information using simpler language or written materials before discharge proceeds.",
      blankOptions: {
        "1": ["hospital", "pharmacy", "classroom"],
        "2": ["repeat", "ignore", "translate"],
        "3": ["re-explain", "withhold", "shorten"],
      },
      correctAnswers: {
        "1": "hospital",
        "2": "repeat",
        "3": "re-explain",
      },
    },
  ],
};
