import { DEFAULT_PRICING_TIERS } from "./pricing";
import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 CELPIP 기출문항이 아니며,
// Paragon Testing Enterprises(CELPIP)와 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다. 응시할
// 때마다 아래 문제은행에서 5문항이 무작위로 출제됩니다.
export const celpipDemo: MockTest = {
  slug: "celpip",
  title: "CELPIP 모의고사 (데모)",
  description: "10문항의 Reading·Writing 데모 문제은행에서 매회 5문항이 무작위로 출제됩니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 CELPIP 기출문항이 아닙니다. Paragon Testing Enterprises와 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
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
    {
      id: "q4-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Many Canadian municipalities have introduced curbside organic waste collection, encouraging residents to separate food scraps and yard waste from regular garbage for composting. Diverting organic material from landfills reduces the production of methane, a greenhouse gas released as organic waste decomposes without oxygen in a landfill. Some cities have reported significant drops in landfill waste volume after introducing mandatory organics collection, although participation and compliance vary depending on how convenient the collection schedule is for residents.",
      question: "According to the passage, why does diverting organic waste from landfills help reduce greenhouse gas emissions?",
      options: [
        { id: "a", text: "Organic waste produces methane when it decomposes without oxygen in a landfill." },
        { id: "b", text: "Organic waste cannot decompose at all once placed in a landfill." },
        { id: "c", text: "Landfills require more energy to operate than composting facilities." },
        { id: "d", text: "Composting programs are mandatory in every Canadian municipality." },
      ],
      correctOptionId: "a",
    },
    {
      id: "q5-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Many cities in colder climates spread salt on roads and sidewalks during winter to lower the freezing point of water and prevent ice from forming. While effective at improving safety, road salt use has raised environmental concerns, since runoff can increase salt concentrations in nearby lakes, rivers, and groundwater over time. Some municipalities have begun testing alternative de-icing materials or using sensors to apply salt more precisely only where needed, aiming to reduce the total amount used each winter.",
      question: "According to the passage, what environmental concern is associated with road salt use?",
      options: [
        { id: "a", text: "It makes roads more dangerous in winter." },
        { id: "b", text: "Runoff can increase salt concentrations in nearby water sources." },
        { id: "c", text: "It has completely replaced the use of sensors in all cities." },
        { id: "d", text: "It prevents ice from forming on any surface." },
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
        "Several transit agencies have moved away from paper tickets toward contactless fare cards or smartphone payment systems, intended to speed up boarding and reduce the handling of cash on vehicles. Some systems also introduce fare capping, in which a rider's total fares within a day or week are automatically capped at a maximum amount, so that frequent riders are not charged more than the cost of a day or weekly pass even if they did not purchase one in advance.",
      question: "According to the passage, what is the purpose of fare capping?",
      options: [
        { id: "a", text: "To increase the total amount frequent riders are charged." },
        { id: "b", text: "To ensure frequent riders are not charged more than a day or weekly pass would cost." },
        { id: "c", text: "To require all riders to pay only in cash." },
        { id: "d", text: "To slow down the boarding process for safety reasons." },
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
        "Community centers that offer drop-in programs alongside registered classes often face a scheduling challenge, since popular time slots can be claimed entirely by registered programs, leaving little room for drop-in use by residents who prefer flexible, unscheduled visits. Some centers have responded by reserving a fixed portion of each day, such as certain morning or evening hours, exclusively for drop-in activities, ensuring that residents without an advance registration still have reliable access to facilities such as gyms or pools.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Registered programs can sometimes fill popular time slots entirely." },
        { id: "b", text: "All community centers have eliminated drop-in programs completely." },
        { id: "c", text: "Some centers reserve specific hours exclusively for drop-in activities." },
        { id: "d", text: "Drop-in visitors are always given priority over registered programs." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q8-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Neighborhood watch programs rely on residents voluntarily monitoring their own streets and reporting suspicious activity to local police, rather than replacing official policing. Studies evaluating these programs have found mixed results: some neighborhoods report a modest reduction in minor property crime after starting a watch program, while other evaluations find no measurable change, often depending on how actively residents participate and how well the program coordinates with local police. Researchers generally agree that a neighborhood watch program works best as a supplement to, rather than a substitute for, regular policing.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Neighborhood watch programs are intended to replace official policing entirely." },
        { id: "b", text: "Some studies have found a modest reduction in minor property crime." },
        { id: "c", text: "Results across different neighborhoods have been mixed." },
        { id: "d", text: "All neighborhoods that start a watch program see identical results." },
      ],
      correctOptionIds: ["b", "c"],
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
          text: "Retailers also use the purchase data collected through these programs to better understand shopping patterns and tailor promotions to individual customers.",
        },
        {
          id: "p1",
          text: "Many grocery chains now offer loyalty programs that award points to customers based on how much they spend.",
        },
        {
          id: "p4",
          text: "As a result, some customers have raised privacy concerns about how their purchase data is stored and used beyond simply calculating rewards.",
        },
        {
          id: "p2",
          text: "These points can typically be redeemed later for discounts on future purchases or, in some programs, converted into other rewards such as travel points.",
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
        "Public libraries in many Canadian cities offer free programs for children, such as story time sessions designed to build early {{1}} skills before children begin school. These programs are usually run by trained staff and require no advance {{2}}, allowing families to attend whenever convenient. Librarians note that regular attendance at story time has been associated with greater {{3}} in young children once they start kindergarten.",
      blankOptions: {
        "1": ["literacy", "athletic", "culinary"],
        "2": ["registration", "payment", "transportation"],
        "3": ["confidence", "income", "mobility"],
      },
      correctAnswers: {
        "1": "literacy",
        "2": "registration",
        "3": "confidence",
      },
    },
  ],
};
