import { DEFAULT_PRICING_TIERS } from "./pricing";
import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 PTE Academic 기출문항이 아니며,
// Pearson의 공식 문항·채점 알고리즘과 무관합니다. Reading·Writing 문항만 포함되어 있고
// Listening·Speaking 섹션은 준비 중입니다. 응시할 때마다 아래 문제은행에서 5문항이
// 무작위로 출제됩니다.
export const pteAcademicDemo: MockTest = {
  slug: "pte-academic",
  title: "PTE Academic 모의고사 (데모)",
  description: "20문항의 Reading·Writing 데모 문제은행에서 매회 5문항이 무작위로 출제됩니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 PTE Academic 기출문항이 아닙니다. Pearson 또는 PTE와 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
  pricingTiers: DEFAULT_PRICING_TIERS,
  totalTimeMinutes: 20,
  questionsPerAttempt: 5,
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
    {
      id: "q6-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Single Answer",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Vertical farms, which grow crops in stacked layers inside climate-controlled buildings, have been promoted as a way to bring food production closer to cities. Because conditions inside the building are tightly controlled, vertical farms can operate year-round regardless of outdoor weather and typically use far less water than traditional fields. However, the energy required to power artificial lighting and climate control remains high, and most vertical farms have so far focused on fast-growing leafy greens rather than staple crops such as wheat or rice.",
      question: "What is one limitation of vertical farms mentioned in the passage?",
      options: [
        { id: "a", text: "They cannot operate during winter months." },
        { id: "b", text: "They use significantly more water than traditional farms." },
        { id: "c", text: "Most have not yet been used to grow staple crops like wheat." },
        { id: "d", text: "They require outdoor weather conditions to function." },
      ],
      correctOptionId: "c",
    },
    {
      id: "q7-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Single Answer",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "As electric vehicles have become more common, attention has turned to what happens to their batteries once they can no longer hold enough charge for daily driving. Rather than being discarded, many retired EV batteries are now finding a second use in stationary energy storage, where the requirements for charge capacity are less demanding than in a moving vehicle. Only once a battery degrades further are its raw materials typically recovered through recycling.",
      question: "According to the passage, what often happens to EV batteries before they are recycled?",
      options: [
        { id: "a", text: "They are immediately discarded as waste." },
        { id: "b", text: "They are reused for less demanding stationary energy storage." },
        { id: "c", text: "They are returned to the original vehicle manufacturer unchanged." },
        { id: "d", text: "They are used to build new electric vehicles directly." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q8-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Multiple Answers",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Scientists have proposed several explanations for how migratory birds navigate across thousands of kilometers each year. One leading theory suggests that birds can sense the Earth's magnetic field, allowing them to maintain a consistent direction even over open ocean with no visual landmarks. Other research indicates that some species also rely on the position of the sun and stars, adjusting their course as these reference points shift throughout the day and across seasons. Experiments in which birds were exposed to artificial magnetic fields have supported the magnetic-sensing theory, though researchers note that no single mechanism fully explains navigation in every species studied.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Some migratory birds may sense the Earth's magnetic field." },
        { id: "b", text: "All migratory bird species navigate using exactly the same mechanism." },
        { id: "c", text: "Some species may use the position of the sun and stars." },
        { id: "d", text: "Artificial magnetic fields have no effect on bird behavior in experiments." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q9-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Multiple Answers",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "While much early research on microplastic pollution focused on oceans, more recent studies have found that agricultural soils can contain even higher concentrations of microplastic particles in some regions. One major source is plastic mulch film, used by farmers to retain soil moisture and suppress weeds, fragments of which can remain in the soil for years after a growing season ends. Researchers are still investigating whether these particles affect soil organisms or crop growth, and some studies have found measurable effects on earthworm behavior, while effects on plant yield remain less conclusive.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Some agricultural soils may contain higher microplastic levels than oceans." },
        { id: "b", text: "Plastic mulch film is one identified source of soil microplastics." },
        { id: "c", text: "Researchers have conclusively proven microplastics reduce crop yield." },
        { id: "d", text: "Microplastics have been shown to have no effect on earthworms." },
      ],
      correctOptionIds: ["a", "b"],
    },
    {
      id: "q10-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize Written Text",
      instructions:
        "아래 지문을 5~75단어의 한 문장으로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Roman engineers built an extensive network of aqueducts to carry fresh water from distant springs and lakes into cities, relying almost entirely on a gentle, continuous downhill gradient rather than pumps. Maintaining a precise slope over long distances, sometimes exceeding 50 kilometers, required careful surveying, and sections that crossed valleys were often carried on raised stone arches to preserve the gradient. Many of these structures remained in use for centuries, and some arched sections still stand today, long after the cities they once supplied have changed dramatically.",
      minWords: 5,
      maxWords: 75,
    },
    {
      id: "q11-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Single Answer",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Cities tend to be several degrees warmer than surrounding rural areas, a phenomenon known as the urban heat island effect. Dark asphalt and concrete surfaces absorb more solar radiation during the day and release it slowly after sunset, keeping nighttime temperatures elevated. Some cities have begun installing lighter-colored pavement and expanding tree canopy coverage, both of which have been shown to lower surface temperatures measurably in treated areas compared with untreated streets nearby.",
      question: "According to the passage, why do cities retain heat more than rural areas?",
      options: [
        { id: "a", text: "Because rural areas have more asphalt surfaces." },
        { id: "b", text: "Because dark surfaces absorb solar radiation and release it slowly at night." },
        { id: "c", text: "Because tree canopy coverage increases nighttime temperatures." },
        { id: "d", text: "Because light-colored pavement traps heat more effectively." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q12-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Multiple Answers",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Manufacturers have increasingly turned to biodegradable packaging made from materials such as cornstarch or mushroom mycelium as an alternative to conventional plastic. These materials break down under composting conditions far more quickly than petroleum-based plastics, which can persist in landfills for centuries. However, biodegradable packaging generally costs more to produce, and some types require industrial composting facilities to break down properly, meaning they do not degrade quickly if simply discarded in a typical landfill.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Biodegradable packaging can be made from materials like cornstarch or mycelium." },
        { id: "b", text: "Biodegradable packaging always degrades quickly in any landfill." },
        { id: "c", text: "Biodegradable packaging generally costs more to produce than conventional plastic." },
        { id: "d", text: "Conventional plastic breaks down faster than biodegradable packaging." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q13-reorder",
      type: "reorder-paragraphs",
      section: "reading",
      title: "Reading: Re-order Paragraphs",
      instructions: "아래 문단들을 올바른 순서로 배열하세요.",
      shuffledParagraphs: [
        {
          id: "p3",
          text: "Laennec's wooden device, which he called the stethoscope, allowed physicians to examine patients more comfortably and discreetly than before.",
        },
        {
          id: "p1",
          text: "In 1816, French physician René Laennec rolled a sheet of paper into a tube to listen to a patient's heartbeat without placing his ear directly on her chest.",
        },
        {
          id: "p4",
          text: "Over the following decades, other doctors modified the design, eventually adding flexible tubing and two earpieces to create the instrument used today.",
        },
        {
          id: "p2",
          text: "He found that the rolled paper transmitted sound more clearly than direct contact, and he soon built a simple wooden cylinder to replace it.",
        },
      ],
      correctOrder: ["p1", "p2", "p3", "p4"],
    },
    {
      id: "q14-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Reading & Writing: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "Fermentation is a {{1}} process in which microorganisms such as bacteria or yeast convert sugars into acids, gases, or alcohol. Beyond producing foods like yogurt and sauerkraut, fermentation has long been valued as a method of food {{2}}, since the acids produced can slow the growth of harmful bacteria. In recent years, researchers have also studied how fermented foods may influence the {{3}} that live in the human digestive system.",
      blankOptions: {
        "1": ["metabolic", "mechanical", "thermal"],
        "2": ["preservation", "decoration", "transportation"],
        "3": ["microorganisms", "minerals", "hormones"],
      },
      correctAnswers: {
        "1": "metabolic",
        "2": "preservation",
        "3": "microorganisms",
      },
    },
    {
      id: "q15-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize Written Text",
      instructions:
        "아래 지문을 5~75단어의 한 문장으로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Mountain glaciers around the world have retreated significantly over the past century, a trend that scientists largely attribute to rising global temperatures. As glaciers shrink, communities that depend on glacial meltwater for drinking water and irrigation during dry summer months face growing uncertainty, since meltwater contributions typically decline once a glacier has lost much of its ice mass. Some researchers have also noted that rapid glacier loss can increase the risk of sudden flooding, as meltwater sometimes collects behind unstable natural dams formed by rock and ice debris.",
      minWords: 5,
      maxWords: 75,
    },
    {
      id: "q16-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Single Answer",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "In clinical drug trials, researchers often give one group of participants an inactive substance, known as a placebo, instead of the medication being tested. Despite receiving no active treatment, many participants in the placebo group report genuine improvement in their symptoms, a phenomenon researchers attribute partly to expectation and the body's own psychological response to the act of receiving treatment. Because of this effect, new medications must outperform a placebo in controlled trials before they can be considered genuinely effective.",
      question: "Why must new medications outperform a placebo in trials, according to the passage?",
      options: [
        { id: "a", text: "Because placebos always cause patients to feel worse." },
        { id: "b", text: "Because some symptom improvement can occur from expectation alone, without active medication." },
        { id: "c", text: "Because placebos are more expensive to produce than real medication." },
        { id: "d", text: "Because regulators require all trials to use placebos for legal reasons only." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q17-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Single Answer",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Crowdfunding platforms allow entrepreneurs to raise money for a new product by collecting small contributions from a large number of individual backers, often in exchange for an early version of the product once it is produced. Unlike traditional bank loans, crowdfunding campaigns can also serve as an early test of public interest, since a campaign that fails to attract enough backers suggests the product may struggle to find a market. However, backers typically have little legal protection if a funded project is delayed or never completed.",
      question: "According to the passage, what risk do crowdfunding backers face?",
      options: [
        { id: "a", text: "They are guaranteed a full refund if a project is delayed." },
        { id: "b", text: "They have little legal protection if a project is delayed or incomplete." },
        { id: "c", text: "They must repay the funds they contributed with interest." },
        { id: "d", text: "They receive bank loan protections identical to traditional lenders." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q18-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Multiple Answers",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Children exposed to two languages from infancy typically reach early language milestones, such as first words, within the same general timeframe as children raised with one language, though bilingual children sometimes have a smaller vocabulary in each individual language during early childhood. Researchers note that when both languages are counted together, total vocabulary size is often comparable to that of monolingual peers. Some studies have also suggested that early bilingual exposure may support certain cognitive skills, such as switching attention between tasks, though findings in this area remain an active area of research.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Bilingual children reach early language milestones around the same time as monolingual children." },
        { id: "b", text: "Bilingual children always have a larger vocabulary in each individual language." },
        { id: "c", text: "Combined vocabulary across both languages is often comparable to monolingual peers." },
        { id: "d", text: "Research has definitively proven bilingualism has no cognitive effects." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q19-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Choice, Choose Multiple Answers",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Telemedicine, which allows patients to consult a doctor remotely through video or phone calls, expanded rapidly during the early 2020s and has remained common in many healthcare systems since. Supporters point out that telemedicine can reduce travel time for patients in rural areas and allow quicker follow-up appointments for minor concerns. Critics note that certain conditions still require in-person examination or equipment, such as blood tests or physical imaging, meaning telemedicine works best as a complement to, rather than a full replacement for, traditional in-person care.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Telemedicine can reduce travel time for rural patients." },
        { id: "b", text: "Telemedicine has fully replaced all in-person medical care." },
        { id: "c", text: "Some conditions still require in-person examination or equipment." },
        { id: "d", text: "Telemedicine requires patients to travel to a clinic for every consultation." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q20-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize Written Text",
      instructions:
        "아래 지문을 5~75단어의 한 문장으로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "Increasing ship traffic and industrial activity have raised underwater noise levels in many parts of the ocean, a change that can interfere with the ability of whales and dolphins to communicate, navigate, and locate food using sound. Some researchers have found that marine mammals in noisier regions alter their calls, calling more loudly or at different pitches, in an apparent effort to be heard over background noise. A small number of shipping lanes have been rerouted away from known whale migration paths, though researchers note that noise from sources such as oil exploration remains largely unaddressed.",
      minWords: 5,
      maxWords: 75,
    },
  ],
};
