import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 PTE Academic 기출문항이 아니며,
// Pearson의 공식 문항·채점 알고리즘과 무관합니다. Reading·Writing 문항만 포함되어 있고
// Listening·Speaking 섹션은 준비 중입니다.
export const pteAcademicDemo: MockTest = {
  slug: "pte-academic",
  title: "PTE Academic 모의고사 (데모)",
  description: "Reading·Writing 데모 문항 5개로 구성된 샘플 모의고사입니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 PTE Academic 기출문항이 아닙니다. Pearson 또는 PTE와 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
  price: 45000,
  questions: [
    {
      id: "q1-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Single Answer",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Urban bee populations have grown rapidly in cities that provide rooftop gardens and small urban farms. While rural bee colonies often suffer from exposure to agricultural pesticides, city bees benefit from a wider variety of flowering plants blooming across different seasons. Researchers studying honey samples from metropolitan rooftops have found a broader range of pollen types than in samples from single-crop farmland. However, experts caution that urban beekeeping is not a simple solution to the global decline in pollinator populations, since cities can only support a limited number of hives before competition for food sources becomes a problem.",
      question: "What is the main point of the passage?",
      options: [
        { id: "a", text: "Urban beekeeping can fully solve pollinator decline." },
        { id: "b", text: "City environments offer bees more diverse food sources than farmland, though with limits." },
        { id: "c", text: "Rural bee colonies are safer than those in cities." },
        { id: "d", text: "Urban rooftops cannot support honeybee colonies." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q2-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Multiple Answers",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "During deep sleep, the brain replays patterns of activity recorded while learning new information, a process researchers call memory consolidation. Several studies have linked a full night of sleep with improved recall of both factual material and physical skills, such as typing patterns or sequences of movements learned earlier in the day. Napping has also been shown to provide some benefit, although the effect appears smaller than that of extended night time sleep.",
      question: "According to the passage, which of the following are supported by research?",
      options: [
        { id: "a", text: "Deep sleep helps consolidate memory." },
        { id: "b", text: "Napping provides no benefit at all." },
        { id: "c", text: "Sleep improves recall of physical skills." },
        { id: "d", text: "Night sleep and napping have identical effects." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q3-reorder",
      type: "reorder-paragraphs",
      section: "reading",
      title: "Reading: Re-order Paragraphs",
      instructions: "아래 문단들을 올바른 순서로 배열하세요.",
      shuffledParagraphs: [
        {
          id: "p3",
          text: "As a result, literacy rates gradually increased, and new ideas spread faster across the continent than ever before.",
        },
        {
          id: "p1",
          text: "Johannes Gutenberg introduced a mechanical movable-type printing system in Europe around 1440, dramatically lowering the cost of producing books.",
        },
        {
          id: "p2",
          text: "Before this invention, most books in Europe were copied by hand, a slow process that made books expensive and rare.",
        },
        {
          id: "p4",
          text: "Within decades, printing presses had been established in cities throughout Europe, multiplying the number of books in circulation.",
        },
      ],
      correctOrder: ["p2", "p1", "p4", "p3"],
    },
    {
      id: "q4-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Reading & Writing: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "Many coral reefs rely on a {{1}} relationship with tiny algae that live inside their tissues. The algae provide the coral with {{2}} through photosynthesis, while the coral offers the algae a protected, sunlit place to live. When ocean temperatures rise too quickly, corals often expel these algae in a process known as {{3}}, leaving the reef pale and vulnerable.",
      blankOptions: {
        "1": ["symbiotic", "competitive", "parasitic"],
        "2": ["nutrients", "shelter", "sound"],
        "3": ["bleaching", "blooming", "erosion"],
      },
      correctAnswers: {
        "1": "symbiotic",
        "2": "nutrients",
        "3": "bleaching",
      },
    },
    {
      id: "q5-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize Written Text",
      instructions:
        "아래 지문을 5~75단어의 한 문장으로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Several large-scale workplace studies conducted since 2020 have found mixed effects of remote work on employee productivity. Some roles that require deep, uninterrupted focus, such as software development and writing, often show measurable gains when employees work from home, partly due to fewer interruptions from coworkers. Other roles that depend heavily on spontaneous collaboration, such as early-stage product design, sometimes show reduced output when teams are fully remote, as fewer unplanned conversations occur. Many organizations have responded by adopting hybrid arrangements, intended to preserve the focus benefits of remote work while still allowing in-person collaboration several days a week.",
      minWords: 5,
      maxWords: 75,
    },
  ],
};
