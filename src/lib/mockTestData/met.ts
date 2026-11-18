import { DEFAULT_PRICING_TIERS } from "./pricing";
import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 MET(Michigan English Test) 기출문항이 아니며,
// University of Michigan (CaMLA/ELI)의 공식 문항·채점 알고리즘과 무관합니다. MET의 핵심 영역인
// 문법·어휘·독해 문항만 포함되어 있고, Listening·Speaking 섹션은 준비 중입니다. 응시할 때마다
// 아래 문제은행에서 5문항이 무작위로 출제됩니다.
export const metDemo: MockTest = {
  slug: "met",
  title: "MET (미시간영어) 모의고사 (데모)",
  description: "20문항의 문법·어휘·독해 데모 문제은행에서 매회 5문항이 무작위로 출제됩니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 MET(Michigan English Test) 기출문항이 아닙니다. University of Michigan과 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 문법·어휘·독해 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
  pricingTiers: DEFAULT_PRICING_TIERS,
  totalTimeMinutes: 15,
  questionsPerAttempt: 5,
  questions: [
    {
      id: "q1-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Grammar: Verb Forms",
      instructions: "빈칸에 들어갈 가장 적절한 표현을 고르세요.",
      passage: "By the time the meeting ___, most of the staff had already left for the day.",
      question: "빈칸에 들어갈 가장 적절한 표현은?",
      options: [
        { id: "a", text: "started" },
        { id: "b", text: "has started" },
        { id: "c", text: "was starting" },
        { id: "d", text: "starts" },
      ],
      correctOptionId: "a",
    },
    {
      id: "q2-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Vocabulary in Context",
      instructions: "밑줄 친 단어와 의미가 가장 가까운 것을 고르세요.",
      passage:
        "The new policy was met with considerable resistance from employees who felt it was implemented too abruptly.",
      question: "'abruptly'와 의미가 가장 가까운 단어는?",
      options: [
        { id: "a", text: "gradually" },
        { id: "b", text: "suddenly" },
        { id: "c", text: "carefully" },
        { id: "d", text: "politely" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q3-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Many universities now offer orientation programs designed specifically for international students. These programs typically cover practical matters, such as how to open a bank account or register for health insurance, as well as academic expectations that may differ from those in a student's home country, such as classroom participation and plagiarism policies. Advisors note that students who attend these sessions tend to adjust to campus life more quickly than those who do not.",
      question: "According to the passage, what is one benefit of attending orientation programs?",
      options: [
        { id: "a", text: "Students receive a reduction in tuition fees." },
        { id: "b", text: "Students tend to adjust to campus life more quickly." },
        { id: "c", text: "Students are no longer required to open a bank account." },
        { id: "d", text: "Students are exempted from academic expectations." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q4-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Before the widespread use of refrigeration, many communities relied on root cellars, underground storage spaces that kept food cool and prevented it from freezing in winter. Root cellars worked because the surrounding soil maintained a relatively stable temperature year-round, unlike the air above ground. While mechanical refrigeration has made root cellars unnecessary for most households, some small farms still use them because they require no electricity and have very low maintenance costs.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Root cellars rely on the stable temperature of surrounding soil." },
        { id: "b", text: "Root cellars require significant amounts of electricity." },
        { id: "c", text: "Some small farms still use root cellars today." },
        { id: "d", text: "Root cellars were invented after mechanical refrigeration." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q5-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Grammar & Usage: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "If the company had {{1}} its marketing budget last year, sales would probably {{2}} higher by now. The board is {{3}} to reconsider the decision at next month's meeting.",
      blankOptions: {
        "1": ["increased", "increasing", "increase"],
        "2": ["be", "have been", "being"],
        "3": ["expect", "expected", "expecting"],
      },
      correctAnswers: {
        "1": "increased",
        "2": "have been",
        "3": "expected",
      },
    },
    {
      id: "q6-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Grammar: Prepositions",
      instructions: "빈칸에 들어갈 가장 적절한 전치사를 고르세요.",
      passage: "The committee is responsible ___ reviewing all applications before the end of the month.",
      question: "빈칸에 들어갈 가장 적절한 전치사는?",
      options: [
        { id: "a", text: "of" },
        { id: "b", text: "for" },
        { id: "c", text: "with" },
        { id: "d", text: "on" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q7-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Vocabulary in Context",
      instructions: "밑줄 친 단어와 의미가 가장 가까운 것을 고르세요.",
      passage:
        "Despite the criticism, the director remained adamant that the original schedule would not change.",
      question: "'adamant'와 의미가 가장 가까운 단어는?",
      options: [
        { id: "a", text: "uncertain" },
        { id: "b", text: "flexible" },
        { id: "c", text: "firm" },
        { id: "d", text: "apologetic" },
      ],
      correctOptionId: "c",
    },
    {
      id: "q8-reorder",
      type: "reorder-paragraphs",
      section: "reading",
      title: "Reading: Re-order Paragraphs",
      instructions: "아래 문장들을 올바른 순서로 배열하세요.",
      shuffledParagraphs: [
        {
          id: "p3",
          text: "As a result, several departments adopted a shared online calendar to track deadlines across teams.",
        },
        {
          id: "p1",
          text: "Last spring, the company surveyed employees about scheduling conflicts between departments.",
        },
        {
          id: "p4",
          text: "Early feedback suggests that missed deadlines have dropped noticeably since the calendar was introduced.",
        },
        {
          id: "p2",
          text: "The survey results showed that unclear deadlines were the most frequently cited problem.",
        },
      ],
      correctOrder: ["p1", "p2", "p3", "p4"],
    },
    {
      id: "q9-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "A growing number of employers now allow staff to choose between working remotely, coming into the office, or splitting time between the two. Supporters argue that this flexibility improves employee satisfaction and can reduce office space costs. Critics counter that hybrid arrangements can make spontaneous collaboration more difficult and may create uneven expectations about availability among coworkers.",
      question: "Which of the following are mentioned as a concern about hybrid work arrangements?",
      options: [
        { id: "a", text: "Reduced employee satisfaction" },
        { id: "b", text: "Difficulty with spontaneous collaboration" },
        { id: "c", text: "Uneven expectations about availability" },
        { id: "d", text: "Higher office space costs" },
      ],
      correctOptionIds: ["b", "c"],
    },
    {
      id: "q10-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize in Your Own Words",
      instructions:
        "아래 지문을 20~90단어로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Public libraries have steadily expanded beyond lending books to offering services such as free internet access, job-search assistance, and community meeting spaces. This shift reflects changing community needs, particularly among residents who may not have reliable internet access or quiet space at home. Library administrators note that while circulation of physical books has declined in some areas, overall foot traffic has often stayed steady or increased as patrons come in for these additional services.",
      minWords: 20,
      maxWords: 90,
    },
    {
      id: "q11-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Grammar: Relative Clauses",
      instructions: "빈칸에 들어갈 가장 적절한 표현을 고르세요.",
      passage: "The report, ___ was submitted late, still received a positive review from the board.",
      question: "빈칸에 들어갈 가장 적절한 표현은?",
      options: [
        { id: "a", text: "which" },
        { id: "b", text: "who" },
        { id: "c", text: "whose" },
        { id: "d", text: "that" },
      ],
      correctOptionId: "a",
    },
    {
      id: "q12-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Vocabulary in Context",
      instructions: "밑줄 친 단어와 의미가 가장 가까운 것을 고르세요.",
      passage: "The manager's meticulous attention to detail ensured that no errors went unnoticed.",
      question: "'meticulous'와 의미가 가장 가까운 단어는?",
      options: [
        { id: "a", text: "careless" },
        { id: "b", text: "thorough" },
        { id: "c", text: "impatient" },
        { id: "d", text: "indifferent" },
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
        "In recent years, many cities have converted vacant lots into community gardens, where local residents can rent small plots to grow vegetables and flowers. Beyond providing fresh produce, these gardens often serve as informal gathering spaces where neighbors who might not otherwise interact get to know one another. Some city planners now view community gardens as a low-cost way to strengthen neighborhood ties, in addition to their environmental benefits such as reducing stormwater runoff.",
      question: "According to the passage, what is one social benefit of community gardens mentioned by the author?",
      options: [
        { id: "a", text: "They eliminate the need for stormwater management." },
        { id: "b", text: "They provide a venue for residents to interact with neighbors." },
        { id: "c", text: "They guarantee a steady source of income for city planners." },
        { id: "d", text: "They replace the need for public parks." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q14-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Companies that adopt a four-day workweek typically compress the same total hours into fewer days rather than simply reducing total hours worked. Early studies of such programs have found that employee stress levels often decrease and reported job satisfaction tends to rise. However, some managers note that scheduling client meetings becomes more complicated when staff are not available on the fifth day, and certain customer-facing roles have proven difficult to adapt to the new schedule.",
      question: "Which of the following are stated in the passage as effects of a four-day workweek?",
      options: [
        { id: "a", text: "Employee stress levels often decrease." },
        { id: "b", text: "Total working hours are typically reduced." },
        { id: "c", text: "Scheduling client meetings can become more complicated." },
        { id: "d", text: "Job satisfaction tends to rise." },
      ],
      correctOptionIds: ["a", "c", "d"],
    },
    {
      id: "q15-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Grammar & Usage: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "Had the manager {{1}} the error earlier, the client would not have {{2}} so upset. From now on, all reports must be {{3}} before they are sent out.",
      blankOptions: {
        "1": ["noticed", "notice", "noticing"],
        "2": ["become", "became", "becoming"],
        "3": ["reviewed", "review", "reviewing"],
      },
      correctAnswers: {
        "1": "noticed",
        "2": "become",
        "3": "reviewed",
      },
    },
    {
      id: "q16-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Grammar: Conditionals",
      instructions: "빈칸에 들어갈 가장 적절한 표현을 고르세요.",
      passage: "If the shipment ___ on time, the factory would not have had to halt production.",
      question: "빈칸에 들어갈 가장 적절한 표현은?",
      options: [
        { id: "a", text: "arrived" },
        { id: "b", text: "had arrived" },
        { id: "c", text: "would arrive" },
        { id: "d", text: "arrives" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q17-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Vocabulary in Context",
      instructions: "밑줄 친 단어와 의미가 가장 가까운 것을 고르세요.",
      passage:
        "Although the negotiations were lengthy, both sides eventually reached an amicable agreement that satisfied their main concerns.",
      question: "'amicable'와 의미가 가장 가까운 단어는?",
      options: [
        { id: "a", text: "hostile" },
        { id: "b", text: "friendly" },
        { id: "c", text: "confusing" },
        { id: "d", text: "temporary" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q18-reorder",
      type: "reorder-paragraphs",
      section: "reading",
      title: "Reading: Re-order Paragraphs",
      instructions: "아래 문장들을 올바른 순서로 배열하세요.",
      shuffledParagraphs: [
        {
          id: "p3",
          text: "In response to this demand, the city added fifteen new stations and doubled the number of available bicycles.",
        },
        {
          id: "p1",
          text: "Two years ago, the city launched a bike-share program with 200 bicycles stationed at twenty locations downtown.",
        },
        {
          id: "p4",
          text: "Today, officials point to the program as evidence that affordable transportation options can shift commuting habits when access is convenient.",
        },
        {
          id: "p2",
          text: "Usage grew quickly, and within six months, nearly all stations reported bikes in use during peak commuting hours.",
        },
      ],
      correctOrder: ["p1", "p2", "p3", "p4"],
    },
    {
      id: "q19-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Freelance work has become increasingly common, offering workers greater flexibility over their schedules and the types of projects they accept. However, freelancers often forgo benefits such as employer-sponsored health insurance and paid leave, benefits that are typically included in traditional full-time employment. Financial experts frequently advise freelancers to set aside a larger portion of their income for retirement savings and taxes, since neither is automatically withheld as it would be for a salaried employee.",
      question: "Which of the following are mentioned in the passage as considerations for freelancers?",
      options: [
        { id: "a", text: "Greater flexibility over schedules" },
        { id: "b", text: "Automatic employer withholding of taxes" },
        { id: "c", text: "The need to set aside money for retirement" },
        { id: "d", text: "Lack of employer-sponsored health insurance" },
      ],
      correctOptionIds: ["a", "c", "d"],
    },
    {
      id: "q20-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize in Your Own Words",
      instructions:
        "아래 지문을 20~90단어로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "As more consumers research products online before making purchases, many small retailers have begun investing in detailed product photography and customer reviews on their websites. Store owners report that pages with multiple photos and verified customer reviews tend to convert browsers into buyers more often than pages with only a single product image. Some retailers have started offering small discounts to customers willing to submit a photo along with their written review, further increasing the volume of visual content available to future shoppers.",
      minWords: 20,
      maxWords: 90,
    },
  ],
};
