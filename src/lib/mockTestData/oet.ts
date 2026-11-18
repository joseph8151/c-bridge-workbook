import { DEFAULT_PRICING_TIERS } from "./pricing";
import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 OET 기출문항이 아니며,
// Cambridge Boxhill Language Assessment(OET)와 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다. 응시할
// 때마다 아래 문제은행에서 5문항이 무작위로 출제됩니다.
export const oetDemo: MockTest = {
  slug: "oet",
  title: "OET 모의고사 (데모)",
  description: "20문항의 Reading·Writing 데모 문제은행에서 매회 5문항이 무작위로 출제됩니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 OET 기출문항이 아닙니다. OET를 운영하는 기관과 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 특정 직군(간호·의학 등)에 한정하지 않은 공통 문항이며, 현재는 Reading·Writing 문항만 제공되고 Listening·Speaking 섹션은 준비 중입니다.",
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
    {
      id: "q4-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Hand hygiene is widely regarded as one of the most effective ways to reduce the spread of infections within healthcare settings, yet studies consistently find that staff compliance with hand hygiene guidelines falls short of recommended rates, even when sinks or alcohol-based sanitizers are readily available. Reminder posters and training sessions alone have produced only modest improvements in many hospitals. Some institutions have found greater success by combining reminders with direct observation and feedback, in which trained staff periodically monitor hand hygiene practices and provide individual feedback to colleagues.",
      question: "According to the passage, what approach has shown greater success in improving hand hygiene compliance?",
      options: [
        { id: "a", text: "Removing sinks to simplify workflow." },
        { id: "b", text: "Combining reminders with direct observation and individual feedback." },
        { id: "c", text: "Relying solely on reminder posters." },
        { id: "d", text: "Reducing the number of training sessions." },
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
        "Obtaining informed consent before a medical procedure involves more than securing a patient's signature; it requires confirming that the patient genuinely understands the proposed treatment, its risks, and reasonable alternatives, in language appropriate to their level of health literacy. Research has shown that patients who are asked to explain a procedure back in their own words, a technique sometimes called 'teach-back,' are more likely to demonstrate accurate understanding than those who are only given verbal or written information without being asked to repeat it back.",
      question: "According to the passage, what does the 'teach-back' technique involve?",
      options: [
        { id: "a", text: "Asking the patient to sign a form without further discussion." },
        { id: "b", text: "Asking the patient to explain the procedure back in their own words." },
        { id: "c", text: "Providing only written information to the patient." },
        { id: "d", text: "Skipping discussion of risks for routine procedures." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q6-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Telehealth consultations, in which a clinician and patient communicate remotely by video or phone rather than meeting in person, expanded rapidly in many healthcare systems. While telehealth has improved access to care for patients in remote areas or with limited mobility, clinicians have noted certain limitations, such as the difficulty of performing a physical examination remotely. Some conditions that would normally be assessed through touch, such as checking for swelling or tenderness, are harder to evaluate accurately over video, which can occasionally lead to a follow-up in-person visit being recommended.",
      question: "According to the passage, what is one limitation of telehealth consultations?",
      options: [
        { id: "a", text: "They cannot be used by patients in remote areas." },
        { id: "b", text: "Physical examination findings such as swelling can be harder to assess remotely." },
        { id: "c", text: "They have made access to care worse overall." },
        { id: "d", text: "They always eliminate the need for in-person visits." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q7-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Pain scales, which ask patients to rate their pain on a numerical or visual scale, are widely used to track pain over time and guide treatment decisions. Self-reported scales work well for many adult patients, but can be less reliable for young children, patients with cognitive impairment, or patients who do not speak the language used by staff, since these groups may struggle to use a numerical scale as intended. For such patients, clinicians often rely instead on observational pain scales that assess facial expression, body movement, and vocalization.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Self-reported pain scales can be less reliable for young children." },
        { id: "b", text: "Observational pain scales rely on facial expression and body movement." },
        { id: "c", text: "All patients find numerical pain scales equally easy to use." },
        { id: "d", text: "Cognitive impairment has no effect on pain scale reliability." },
      ],
      correctOptionIds: ["a", "b"],
    },
    {
      id: "q8-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Personal protective equipment, or PPE, such as gloves, gowns, and masks, is intended to create a barrier between healthcare workers and infectious materials. Correct removal of PPE is considered just as important as correct application, since contaminated equipment removed carelessly can transfer pathogens onto a worker's skin or clothing. Many infection control guidelines therefore specify a precise order for removing each piece of equipment, and some hospitals have introduced visual step-by-step guides posted near removal areas to reduce errors during this process.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Removing PPE incorrectly can transfer pathogens onto a worker." },
        { id: "b", text: "PPE application matters but removal order does not matter." },
        { id: "c", text: "Some hospitals use visual guides to help staff remove PPE correctly." },
        { id: "d", text: "PPE guidelines never specify a particular order for removal." },
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
          id: "p3",
          text: "When planning starts late, patients are more likely to experience delays at the point of discharge or to be readmitted shortly afterward.",
        },
        {
          id: "p1",
          text: "Discharge planning begins soon after a patient is admitted, rather than only in the final days before leaving hospital.",
        },
        {
          id: "p4",
          text: "For this reason, many hospitals now track discharge planning milestones from the day of admission rather than waiting until a patient is medically ready to leave.",
        },
        {
          id: "p2",
          text: "Early planning allows the care team to identify needs such as home support, equipment, or follow-up appointments well in advance.",
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
        "Allied health professionals, such as physiotherapists and occupational therapists, often receive patient {{1}} from a treating doctor once a specific functional problem has been identified. A clear referral typically states the {{2}} for the referral and any relevant background information, which helps the allied health professional plan an appropriate course of treatment. Referrals that lack sufficient detail can lead to {{3}} in starting treatment while the allied health professional requests further information.",
      blankOptions: {
        "1": ["referrals", "prescriptions", "diagnoses"],
        "2": ["reason", "cost", "location"],
        "3": ["delays", "improvements", "refunds"],
      },
      correctAnswers: {
        "1": "referrals",
        "2": "reason",
        "3": "delays",
      },
    },
    {
      id: "q11-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Medication reconciliation is the process of comparing a patient's current medication list with newly ordered medications to identify discrepancies, such as duplications or omissions. This process is considered particularly important at transition points in care, such as admission, transfer between wards, and discharge, since these are the moments when medication errors are most likely to occur. Hospitals that have introduced a dedicated pharmacist-led reconciliation step at discharge have reported fewer medication-related readmissions than those relying solely on the discharging doctor to complete the task alone.",
      question: "According to the passage, when is medication reconciliation considered particularly important?",
      options: [
        { id: "a", text: "Only during routine daily ward rounds." },
        { id: "b", text: "At transition points in care, such as admission, transfer, and discharge." },
        { id: "c", text: "Only after a medication error has already occurred." },
        { id: "d", text: "Only when a patient requests it directly." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q12-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Interpreter services allow clinicians to communicate with patients who are not fluent in the language used at a healthcare facility. Professional interpreters are trained to render clinical terminology accurately and to remain neutral, which distinguishes their role from that of a family member asked to translate informally. Guidelines in many healthcare systems now recommend against relying on young children as interpreters for their relatives, both because of the emotional burden this can place on the child and because of the risk of inaccurate translation of complex medical information.",
      question: "According to the passage, why do guidelines recommend against using young children as interpreters?",
      options: [
        { id: "a", text: "Children are legally prohibited from entering healthcare facilities." },
        { id: "b", text: "It can place an emotional burden on the child and risks inaccurate translation." },
        { id: "c", text: "Children always translate more accurately than professional interpreters." },
        { id: "d", text: "Professional interpreters are no longer available in most facilities." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q13-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Fall-prevention programs in hospitals often combine several measures, including routine risk assessment at admission, clear signage identifying patients at higher risk, and environmental adjustments such as keeping frequently used items within easy reach of the bed. Staff are also trained to review a patient's medication list for drugs that can affect balance or alertness, since certain combinations of medication are associated with a higher risk of falls. No single measure eliminates fall risk on its own, which is why most programs rely on combining several approaches at once.",
      question: "According to the passage, why do most fall-prevention programs combine several approaches?",
      options: [
        { id: "a", text: "Because no single measure eliminates fall risk on its own." },
        { id: "b", text: "Because medication review alone is sufficient to prevent falls." },
        { id: "c", text: "Because signage is the only effective fall-prevention measure." },
        { id: "d", text: "Because environmental adjustments are no longer recommended." },
      ],
      correctOptionId: "a",
    },
    {
      id: "q14-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Wound care documentation typically includes the wound's size, depth, and appearance, along with the type of dressing applied and the date of the next planned review. Consistent documentation allows different staff members caring for the same patient across shifts to track whether a wound is healing as expected or showing signs of infection, such as increased redness or discharge. Without consistent documentation, changes in a wound's condition over time can be difficult to detect, particularly when several different staff members are involved in a patient's care.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Wound care documentation usually includes the wound's size and appearance." },
        { id: "b", text: "Consistent documentation helps staff detect signs of infection over time." },
        { id: "c", text: "Only one staff member is ever involved in a patient's wound care." },
        { id: "d", text: "Documentation makes it harder to track a wound's healing progress." },
      ],
      correctOptionIds: ["a", "b"],
    },
    {
      id: "q15-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Advance care directives allow a person to document their preferences for future medical treatment in case they later become unable to communicate those preferences themselves. These documents may specify particular treatments a person does or does not want, or may instead nominate another person to make decisions on their behalf. Clinicians note that having these conversations well before a health crisis, rather than during one, generally allows for a calmer and more thorough discussion of a patient's values and preferences.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Advance care directives can nominate someone to make decisions on a person's behalf." },
        { id: "b", text: "These conversations are generally calmer when held before a health crisis." },
        { id: "c", text: "Advance care directives can only be completed during a medical emergency." },
        { id: "d", text: "Advance care directives can specify treatments a person does not want." },
      ],
      correctOptionIds: ["a", "b", "d"],
    },
    {
      id: "q16-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Nutrition screening on admission helps identify patients who are already malnourished or at risk of becoming malnourished during a hospital stay, a group that research has linked to longer recovery times and higher rates of complications. Simple screening tools typically ask about recent unintentional weight loss and reduced appetite, and patients who screen positive are usually referred to a dietitian for a more detailed assessment. Because screening tools are brief, they can be completed by nursing staff as part of routine admission procedures without requiring a specialist to be present.",
      question: "According to the passage, why can nutrition screening tools be completed by nursing staff during admission?",
      options: [
        { id: "a", text: "Because the tools are brief and do not require a specialist to be present." },
        { id: "b", text: "Because dietitians are no longer involved in patient nutrition care." },
        { id: "c", text: "Because malnutrition has no effect on recovery time." },
        { id: "d", text: "Because screening tools replace the need for a detailed assessment." },
      ],
      correctOptionId: "a",
    },
    {
      id: "q17-reorder",
      type: "reorder-paragraphs",
      section: "reading",
      title: "Reading: Re-order Paragraphs",
      instructions: "아래 문단들을 올바른 순서로 배열하세요.",
      shuffledParagraphs: [
        {
          id: "p2",
          text: "Staff noticed that incident reports relating to missed observations had become more frequent over the previous six months.",
        },
        {
          id: "p4",
          text: "Within a few weeks of the new checklist being introduced, the number of missed-observation reports had fallen noticeably.",
        },
        {
          id: "p1",
          text: "A ward manager began reviewing incident reports from the previous year as part of a routine quality audit.",
        },
        {
          id: "p3",
          text: "In response, the ward introduced a short checklist that nursing staff were required to complete at the start of each shift.",
        },
      ],
      correctOrder: ["p1", "p2", "p3", "p4"],
    },
    {
      id: "q18-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Reading: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "When a patient is transferred between departments, staff are expected to provide a brief {{1}} of the patient's current condition and any outstanding tasks. This helps the receiving team avoid {{2}} important information that could affect patient care. Clear transfer communication is especially {{3}} when a patient's condition has changed shortly before the move.",
      blankOptions: {
        "1": ["summary", "invoice", "apology"],
        "2": ["missing", "repeating", "printing"],
        "3": ["important", "optional", "irrelevant"],
      },
      correctAnswers: {
        "1": "summary",
        "2": "missing",
        "3": "important",
      },
    },
    {
      id: "q19-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Health literacy refers to a person's ability to find, understand, and use health information to make decisions about their own care. Patients with lower health literacy may struggle to follow written discharge instructions or to understand how to take a new medication correctly, even when the information is technically accurate. Clinicians can support patients with varying levels of health literacy by using plain language, avoiding unnecessary jargon, and checking understanding through methods such as the teach-back technique described earlier.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Lower health literacy can make it harder to follow discharge instructions." },
        { id: "b", text: "Health literacy only affects a person's ability to read, not to make decisions." },
        { id: "c", text: "Using plain language can help support patients with varying health literacy." },
        { id: "d", text: "Technically accurate information is always understood correctly by every patient." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q20-essay",
      type: "essay",
      section: "writing",
      title: "Writing: 환자 보호자에게 전달할 안내문 요약",
      instructions:
        "아래 퇴원 안내 메모를 바탕으로, 환자 보호자에게 전달할 핵심 안내 요약을 40~120단어로 작성하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Patient: 74-year-old female. Discharged following treatment for a mild infection. Prescribed a 7-day course of oral antibiotics, to be taken with food twice daily. Follow-up appointment with general practitioner recommended within one week. Family advised to monitor for fever or worsening symptoms and to seek urgent care if these occur.",
      minWords: 40,
      maxWords: 120,
    },
  ],
};
