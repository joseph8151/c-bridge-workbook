import { DEFAULT_PRICING_TIERS } from "./pricing";
import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 IELTS 기출문항이 아니며,
// British Council·IDP·Cambridge와 제휴 관계가 없고 공식 채점 알고리즘과 무관합니다.
// Reading·Writing 문항만 포함되어 있고 Listening·Speaking 섹션은 준비 중입니다. 응시할
// 때마다 아래 문제은행에서 5문항이 무작위로 출제됩니다.
export const ieltsDemo: MockTest = {
  slug: "ielts",
  title: "IELTS 모의고사 (데모)",
  description: "20문항의 Reading·Writing 데모 문제은행에서 매회 5문항이 무작위로 출제됩니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 IELTS 기출문항이 아닙니다. British Council, IDP, Cambridge와 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
  pricingTiers: DEFAULT_PRICING_TIERS,
  totalTimeMinutes: 15,
  questionsPerAttempt: 5,
  questions: [
    {
      id: "q1-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Installing vegetation on rooftops, commonly known as green roofs, has become increasingly common in dense urban areas. Beyond their aesthetic appeal, green roofs can reduce a building's cooling costs in summer by providing an extra layer of insulation. Researchers have also found that clusters of green roofs can measurably lower surrounding air temperatures, a phenomenon linked to a reduction in the so-called urban heat island effect. However, retrofitting an older building with a green roof is not always possible, since many older roof structures were not designed to bear the additional weight of soil and plants.",
      question: "진술: All older buildings can be retrofitted with a green roof.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
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
        "Many public libraries now offer e-book lending in addition to physical books. Digital lending allows a library to serve multiple branches from a single purchased copy in some licensing models, though publishers often restrict the number of simultaneous digital loans per copy. Some libraries have reported that e-book lending increases overall reading among patrons who find physical visits inconvenient, while others note that popular new titles still generate long waiting lists in digital form, much as they do for physical copies.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Digital lending can increase reading among patrons who rarely visit in person." },
        { id: "b", text: "Publishers place no limits on simultaneous digital loans." },
        { id: "c", text: "Popular digital titles can still have long waiting lists." },
        { id: "d", text: "E-book lending has completely replaced physical book lending." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q3-essay",
      type: "essay",
      section: "writing",
      title: "Writing Task 2: 의견 쓰기",
      instructions:
        "다음 주제에 대한 본인의 의견을 40~120단어로 작성하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "주제: 대학 교육은 모든 학생에게 무료로 제공되어야 한다는 의견에 동의하는 사람도 있고, 그렇지 않은 사람도 있습니다. 당신의 의견은 어떻습니까?",
      minWords: 40,
      maxWords: 120,
    },
    {
      id: "q4-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Underwater noise from shipping traffic has been shown to interfere with the ability of some marine mammals to communicate and navigate using sound. Whales in particular rely on low-frequency calls that can travel long distances underwater, and background noise from large vessels can mask these calls over significant areas of ocean. Some ports have experimented with speed restrictions for ships in certain zones, since slower vessels generally produce less underwater noise, though compliance with these voluntary measures has varied.",
      question: "진술: All ports have made speed restrictions mandatory for ships.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q5-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Crop rotation, the practice of growing different types of crops in the same field across different seasons, has long been used to maintain soil fertility. Growing the same crop repeatedly can deplete specific soil nutrients and allow certain pests to build up in the soil over time. By alternating crops, especially including nitrogen-fixing plants such as legumes, farmers can restore some soil nutrients naturally rather than relying solely on synthetic fertilizers. However, crop rotation requires more complex planning than single-crop farming and may reduce short-term yields of the most profitable crop.",
      question: "진술: Crop rotation always increases short-term yields of the most profitable crop.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q6-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Researchers studying sleep patterns have introduced the concept of 'sleep debt' to describe the cumulative effect of repeatedly sleeping less than the body requires. Unlike a single night of poor sleep, which can often be offset by one longer night afterward, chronic sleep debt built up over weeks has been linked to slower reaction times and reduced concentration that are not immediately reversed by a single night of extended sleep. Some researchers caution that attempting to 'catch up' on sleep only on weekends may not fully reverse the effects of sleep debt accumulated on weekdays.",
      question: "진술: Sleeping longer on just one weekend always fully reverses weekday sleep debt.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
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
        "Cities that have invested in protected bicycle lanes, physically separated from motor vehicle traffic by barriers or curbs, have generally reported higher rates of cycling than cities relying only on painted lane markings. Protected lanes appear to particularly encourage cycling among groups who previously cited traffic safety as a reason for not cycling, such as parents commuting with children. At the same time, protected lanes are more expensive to build and can require removing on-street parking, which has sometimes drawn opposition from local business owners.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Protected bike lanes are generally associated with higher cycling rates than painted lanes." },
        { id: "b", text: "Painted lane markings are more expensive to build than protected lanes." },
        { id: "c", text: "Protected lanes have sometimes drawn opposition related to parking removal." },
        { id: "d", text: "Local business owners have always supported removing street parking." },
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
        "Regions near active or dormant volcanoes often have unusually fertile soil, a result of mineral-rich volcanic ash breaking down over time and releasing nutrients such as potassium and phosphorus. This fertility has historically attracted farming communities to settle near volcanoes despite the risk of future eruptions. Agricultural yields in such regions can be significantly higher than in nearby areas without volcanic soil, though researchers note that the specific nutrient benefits vary depending on the mineral composition of the original ash.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Volcanic ash can release nutrients such as potassium as it breaks down." },
        { id: "b", text: "Farming communities have historically avoided settling near volcanoes." },
        { id: "c", text: "Agricultural yields near volcanic soil can be higher than nearby non-volcanic areas." },
        { id: "d", text: "All volcanic ash provides identical nutrient benefits regardless of composition." },
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
          text: "This process requires substantial amounts of energy, which has historically made desalinated water more expensive than water from conventional freshwater sources.",
        },
        {
          id: "p1",
          text: "Desalination plants remove salt and minerals from seawater to produce fresh water suitable for drinking or irrigation.",
        },
        {
          id: "p4",
          text: "As renewable energy costs have fallen, however, some newer desalination plants have begun pairing the process with solar or wind power to reduce operating costs.",
        },
        {
          id: "p2",
          text: "Most large-scale desalination today relies on a process called reverse osmosis, which forces seawater through a fine membrane that blocks salt molecules.",
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
        "Biodegradable packaging is designed to break down into {{1}} components, such as water and carbon dioxide, through the action of microorganisms. However, many biodegradable materials only break down efficiently under specific conditions, such as the high temperatures found in an industrial composting facility, and may persist for a long time if sent to an ordinary {{2}}. For this reason, some environmental researchers argue that clearer labeling is needed to help consumers {{3}} biodegradable packaging correctly.",
      blankOptions: {
        "1": ["natural", "synthetic", "radioactive"],
        "2": ["landfill", "factory", "greenhouse"],
        "3": ["dispose of", "manufacture", "purchase"],
      },
      correctAnswers: {
        "1": "natural",
        "2": "landfill",
        "3": "dispose of",
      },
    },
    {
      id: "q11-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Community gardens, shared plots of land where local residents grow vegetables and flowers collectively, have grown increasingly common in cities facing limited green space. Beyond providing fresh produce, these gardens often serve as informal meeting points where neighbors who might otherwise rarely interact come to know one another. Municipal governments in several cities now offer small grants to help new community gardens get started, though demand for available plots often exceeds the number of plots on offer in dense neighborhoods.",
      question: "진술: Community gardens often help neighbors who rarely interact get to know each other.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
      ],
      correctOptionId: "a",
    },
    {
      id: "q12-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Many cities are replacing their diesel bus fleets with electric buses, which produce no tailpipe emissions and operate more quietly than diesel models. Early adopters have found that electric buses require different maintenance routines, since mechanics must be trained to handle battery systems rather than traditional engines. While electric buses typically cost more to purchase upfront, some transit agencies report that lower fuel and maintenance costs over the bus's lifetime partially offset the higher initial price. Charging infrastructure remains a significant barrier for agencies with large fleets, since installing enough chargers can take years.",
      question: "진술: Electric buses require the same maintenance routines as diesel buses.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q13-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Not all plastics can be recycled using the same process. Plastic items are often marked with a numbered code indicating the type of resin used, and recycling facilities typically sort plastics by this code because different resins melt at different temperatures and cannot be effectively combined. Some codes, such as PET (used in many beverage bottles) and HDPE (used in many detergent bottles), are widely accepted by municipal recycling programs, while other codes are accepted by far fewer facilities due to lower demand for the recycled material. As a result, an item being technically recyclable does not guarantee that a local program will accept it.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Different plastic resins can require different melting temperatures." },
        { id: "b", text: "Every plastic code is accepted by all municipal recycling programs." },
        { id: "c", text: "Being technically recyclable does not guarantee local acceptance." },
        { id: "d", text: "PET and HDPE are rarely accepted by municipal programs." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q14-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Noise-canceling headphones use microphones to detect incoming ambient sound and generate an inverse sound wave that cancels much of it out before it reaches the listener's ear. This technology works especially well against steady, low-frequency noise, such as the hum of an airplane engine, but is less effective against sudden, irregular sounds, such as a dog barking or a door slamming. Because of this limitation, most noise-canceling headphones are still paired with some passive sound-blocking material, such as padded ear cushions, to reduce higher-frequency and sudden noises as well.",
      question: "진술: Noise-canceling technology works equally well against sudden sounds and steady low-frequency noise.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q15-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Reading: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "A 'food desert' refers to an area where residents have limited access to {{1}} food, often because the nearest full-service grocery store is a considerable distance away. Researchers note that residents in such areas may rely more heavily on convenience stores, which typically offer a {{2}} selection of fresh produce. Local governments have tried several approaches to address food deserts, including offering {{3}} to grocery chains willing to open stores in underserved neighborhoods.",
      blankOptions: {
        "1": ["affordable and nutritious", "expensive and rare", "contaminated"],
        "2": ["narrower", "wider", "identical"],
        "3": ["tax incentives", "parking tickets", "noise complaints"],
      },
      correctAnswers: {
        "1": "affordable and nutritious",
        "2": "narrower",
        "3": "tax incentives",
      },
    },
    {
      id: "q16-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Several companies that shifted to fully remote work during the past decade later adopted hybrid schedules requiring employees to be in the office a set number of days per week. Surveys conducted by these companies found that employees generally valued the flexibility of choosing which days to work from home, though managers in some departments reported more difficulty scheduling meetings that required everyone present at once. A smaller number of companies reverted to fully in-office schedules, citing concerns about maintaining company culture among newly hired employees who had never worked in the office.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Some companies that went fully remote later adopted hybrid schedules." },
        { id: "b", text: "All companies that tried hybrid schedules later reverted to fully in-office work." },
        { id: "c", text: "Scheduling meetings with everyone present became more difficult in some departments." },
        { id: "d", text: "New employees always adapt easily to company culture without working in the office." },
      ],
      correctOptionIds: ["a", "c"],
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
          text: "One common method, called the washed process, removes the fruit using water and fermentation tanks before the beans are dried in the sun.",
        },
        {
          id: "p4",
          text: "These different processing methods are one reason that coffee beans grown in similar conditions can still taste noticeably different once brewed.",
        },
        {
          id: "p1",
          text: "After coffee cherries are harvested, farmers must quickly separate the outer fruit from the bean inside, since the fruit begins to ferment soon after picking.",
        },
        {
          id: "p3",
          text: "A different method, called the natural process, instead dries the whole cherry with the fruit still attached, allowing some of the fruit's sugars to be absorbed into the bean during drying.",
        },
      ],
      correctOrder: ["p1", "p2", "p3", "p4"],
    },
    {
      id: "q18-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: True / False / Not Given",
      instructions: "지문을 읽고 아래 진술이 True / False / Not Given 중 무엇인지 고르세요.",
      passage:
        "Many long-distance migratory bird species rely on stopover sites, specific locations along their migration route where they rest and feed before continuing their journey. These sites are critical because birds often arrive with severely depleted fat reserves after flying hundreds of kilometers without stopping. Habitat loss at even a single key stopover site can affect bird populations across an entire migratory route, since birds may have no suitable alternative location to refuel within flying range. Conservation groups have increasingly focused on protecting stopover sites rather than only the birds' breeding or wintering grounds.",
      question: "진술: Birds can always find a suitable alternative stopover site if one is lost.",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" },
        { id: "c", text: "Not Given" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q19-essay",
      type: "essay",
      section: "writing",
      title: "Writing Task 2: 의견 쓰기",
      instructions:
        "다음 주제에 대한 본인의 의견을 40~120단어로 작성하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "주제: 온라인 수업이 전통적인 대면 수업을 완전히 대체할 수 있다고 생각하는 사람도 있고, 그렇지 않은 사람도 있습니다. 당신의 의견은 어떻습니까?",
      minWords: 40,
      maxWords: 120,
    },
    {
      id: "q20-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Several cities have launched large-scale tree-planting programs aimed at increasing canopy cover along streets and in parks. Beyond providing shade, urban trees can reduce stormwater runoff by absorbing rainfall through their root systems, lowering the burden on municipal drainage systems during heavy rain. Program planners have noted that newly planted trees require consistent watering for the first two to three years before their root systems mature enough to survive on rainfall alone, meaning that programs which plant trees without a watering plan often see high failure rates.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Urban trees can help reduce stormwater runoff." },
        { id: "b", text: "Newly planted trees need no watering once placed in the ground." },
        { id: "c", text: "A lack of a watering plan can lead to high failure rates for new trees." },
        { id: "d", text: "Tree root systems mature within the first few weeks after planting." },
      ],
      correctOptionIds: ["a", "c"],
    },
  ],
};
