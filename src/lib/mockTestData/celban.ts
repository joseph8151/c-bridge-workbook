import { DEFAULT_PRICING_TIERS } from "./pricing";
import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 CELBAN 기출문항이 아니며,
// CELBAN을 운영하는 기관과 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다. 응시할
// 때마다 아래 문제은행에서 5문항이 무작위로 출제됩니다.
export const celbanDemo: MockTest = {
  slug: "celban",
  title: "CELBAN 모의고사 (데모)",
  description: "20문항의 Reading·Writing 데모 문제은행에서 매회 5문항이 무작위로 출제됩니다.",
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
    {
      id: "q11-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Hand hygiene is widely considered one of the most effective ways to prevent the spread of infection in healthcare settings. Guidelines commonly identify several key moments for hand hygiene, including before touching a patient, before a clean or aseptic procedure, after exposure to body fluids, after touching a patient, and after touching a patient's surroundings. Compliance audits in many facilities have found that staff are most likely to miss hand hygiene opportunities before touching a patient, compared with after contact, possibly because the risk to the patient feels less immediate at that moment.",
      question: "According to the passage, when are staff most likely to miss a hand hygiene opportunity?",
      options: [
        { id: "a", text: "After touching a patient's surroundings." },
        { id: "b", text: "Before touching a patient." },
        { id: "c", text: "After exposure to body fluids." },
        { id: "d", text: "After touching a patient." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q12-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Pain is increasingly treated as the 'fifth vital sign,' assessed and recorded alongside temperature, pulse, respiration, and blood pressure. Many units use a numeric rating scale from 0 to 10, where a patient rates their pain, though nurses are trained to also use observational cues, such as facial expression or guarding behavior, for patients who cannot reliably self-report, such as those with advanced dementia or very young children. Relying on observational cues alone is considered less precise than self-report, so self-report is used whenever the patient is able to provide it.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Self-report is preferred over observational cues when a patient can provide it." },
        { id: "b", text: "Pain is sometimes referred to as the 'fifth vital sign.'" },
        { id: "c", text: "Observational cues are considered more precise than self-report." },
        { id: "d", text: "The numeric rating scale is never used in clinical practice." },
      ],
      correctOptionIds: ["a", "b"],
    },
    {
      id: "q13-essay",
      type: "essay",
      section: "writing",
      title: "Writing: 환자 교육 메모 작성",
      instructions:
        "아래 상황을 바탕으로, 퇴원을 앞둔 환자에게 전달할 복약 교육 메모를 40~120단어로 작성하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Patient: 58-year-old male, newly prescribed a daily blood pressure medication at discharge. Reports some confusion about whether to take the medication with food. Lives alone and manages his own medications. No known drug allergies noted in chart.",
      minWords: 40,
      maxWords: 120,
    },
    {
      id: "q14-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "When a patient's condition changes unexpectedly, many hospitals use a structured communication format, often summarized by the acronym SBAR (Situation, Background, Assessment, Recommendation), to pass information between caregivers clearly and efficiently. Rather than describing events in a loose narrative, the nurse first states the immediate situation, then relevant background, followed by a clinical assessment, and finally a specific recommendation or request. Studies examining handoff communication have found that structured formats like SBAR reduce the likelihood that important details are omitted compared with unstructured verbal reports.",
      question: "According to the passage, what advantage does the SBAR format offer over unstructured verbal reports?",
      options: [
        { id: "a", text: "It takes longer to complete but covers more topics." },
        { id: "b", text: "It reduces the likelihood that important details are omitted." },
        { id: "c", text: "It removes the need for any clinical assessment." },
        { id: "d", text: "It is used only during nursing school training." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q15-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Informed consent requires that a patient receive enough information about a proposed procedure, including its purpose, risks, benefits, and alternatives, to make a voluntary decision. Simply having a patient sign a consent form does not, by itself, confirm that genuine informed consent has occurred if the patient did not actually understand the information presented. For this reason, healthcare providers are trained to check a patient's understanding through conversation, rather than relying on the signed document alone as proof of comprehension.",
      question: "According to the passage, why is a signed consent form alone not sufficient proof of informed consent?",
      options: [
        { id: "a", text: "Signed forms are not legally required in most hospitals." },
        { id: "b", text: "A signature does not confirm the patient actually understood the information." },
        { id: "c", text: "Consent forms never mention risks or alternatives." },
        { id: "d", text: "Patients are not allowed to ask questions before signing." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q16-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Intravenous (IV) sites require regular inspection to catch early signs of complications such as infiltration, where fluid leaks into surrounding tissue, or phlebitis, inflammation of the vein. Common signs nurses are trained to watch for include swelling, redness, warmth, and the patient reporting pain at the site. When such signs appear, the standard response is to stop the infusion and remove or relocate the IV, rather than simply reducing the flow rate and continuing to use the same site.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Swelling and redness are signs nurses are trained to watch for at an IV site." },
        { id: "b", text: "Phlebitis refers to inflammation of the vein." },
        { id: "c", text: "The standard response to infiltration signs is to reduce the flow rate and keep the same site." },
        { id: "d", text: "IV sites require no regular inspection once inserted." },
      ],
      correctOptionIds: ["a", "b"],
    },
    {
      id: "q17-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Delegation allows a nurse to assign certain tasks to other members of the care team, such as unregulated care providers, while the nurse retains overall accountability for the patient's care. Before delegating a task, a nurse is expected to consider the stability of the patient, the complexity of the task, and the competence of the person receiving the assignment. A task that would be appropriate to delegate for a stable patient may not be appropriate for a patient whose condition is rapidly changing.",
      question: "According to the passage, what must a nurse consider before delegating a task?",
      options: [
        { id: "a", text: "Only whether the task is enjoyable to perform." },
        { id: "b", text: "The patient's stability, task complexity, and the delegate's competence." },
        { id: "c", text: "Whether the task has ever been delegated before at that hospital." },
        { id: "d", text: "The delegate's personal preference for working shifts." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q18-reorder",
      type: "reorder-paragraphs",
      section: "reading",
      title: "Reading: Re-order Paragraphs",
      instructions: "아래 문단들을 올바른 순서로 배열하세요.",
      shuffledParagraphs: [
        {
          id: "p2",
          text: "Before administering the next scheduled dose, the nurse reviewed the patient's chart and noticed a new allergy entry that had not been there during the previous shift.",
        },
        {
          id: "p1",
          text: "A patient was admitted overnight and started on a standard antibiotic regimen by the on-call physician.",
        },
        {
          id: "p4",
          text: "The physician adjusted the order to a different antibiotic, and the updated order was documented before the medication was given.",
        },
        {
          id: "p3",
          text: "The nurse held the dose and contacted the physician immediately to clarify whether the medication should still be given.",
        },
      ],
      correctOrder: ["p1", "p2", "p3", "p4"],
    },
    {
      id: "q19-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Reading: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "A thorough patient history helps the care team understand not only the current {{1}} but also relevant past conditions, medications, and allergies. When a patient is unable to provide a reliable history, nurses are trained to {{2}} family members or prior records for additional information. Any new allergy discovered after admission should be {{3}} in the chart immediately so that all staff are aware before the next medication is given.",
      blankOptions: {
        "1": ["complaint", "weather", "schedule"],
        "2": ["consult", "ignore", "replace"],
        "3": ["documented", "forgotten", "guessed"],
      },
      correctAnswers: {
        "1": "complaint",
        "2": "consult",
        "3": "documented",
      },
    },
    {
      id: "q20-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Therapeutic communication involves techniques such as active listening, open-ended questions, and reflecting a patient's own words back to them to confirm understanding. In contrast, closed questions that invite only a yes or no answer can be useful for gathering specific facts quickly, but relying on them exclusively during an emotionally sensitive conversation may make a patient feel less able to express concerns in their own words.",
      question: "According to the passage, what is one limitation of relying exclusively on closed questions during a sensitive conversation?",
      options: [
        { id: "a", text: "Closed questions always take longer to answer than open-ended ones." },
        { id: "b", text: "Patients may feel less able to express concerns in their own words." },
        { id: "c", text: "Closed questions cannot be used to gather specific facts." },
        { id: "d", text: "Open-ended questions are considered unprofessional." },
      ],
      correctOptionId: "b",
    },
  ],
};
