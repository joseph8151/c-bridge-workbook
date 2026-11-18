import { DEFAULT_PRICING_TIERS } from "./pricing";
import type { MockTest } from "./types";

// 데모용 샘플 문항 (C-BRIDGE 자체 제작). 실제 TOEFL iBT 기출문항이 아니며,
// ETS의 공식 문항·채점 알고리즘과 무관합니다. Reading·Writing 문항만 포함되어 있고
// Listening·Speaking 섹션은 준비 중입니다. 응시할 때마다 아래 문제은행에서 5문항이
// 무작위로 출제됩니다.
export const toeflDemo: MockTest = {
  slug: "toefl",
  title: "TOEFL iBT 모의고사 (데모)",
  description: "20문항의 Reading·Writing 데모 문제은행에서 매회 5문항이 무작위로 출제됩니다.",
  disclaimer:
    "본 모의고사는 C-BRIDGE가 자체 제작한 데모 샘플 문항이며, 실제 TOEFL iBT 기출문항이 아닙니다. ETS와 제휴 관계가 없으며, 공식 채점 알고리즘을 사용하지 않습니다. 현재는 Reading·Writing 문항만 제공되며, Listening·Speaking 섹션은 준비 중입니다.",
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
        "Historians studying ancient trade routes have noted that cities located at the intersection of multiple trade paths often developed specialized economies rather than general ones. Instead of producing a wide range of goods, these cities tended to concentrate on a small number of high-value products, such as dyed textiles or metal tools, that could be easily transported over long distances. This specialization allowed artisans to develop advanced techniques within a single craft, often surpassing the quality achieved in cities that produced goods mainly for local consumption. At the same time, heavy reliance on trade made these specialized cities vulnerable to disruptions, since a blocked route could sharply reduce both their income and access to basic supplies.",
      question: "According to the passage, what was one disadvantage of economic specialization in trade cities?",
      options: [
        { id: "a", text: "Artisans could not improve their techniques over time." },
        { id: "b", text: "The cities became dependent on trade routes remaining open." },
        { id: "c", text: "Local consumption of goods increased sharply." },
        { id: "d", text: "Specialized cities produced lower-quality goods than others." },
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
        "Coastal towns have adopted a range of strategies to slow beach erosion. Some build seawalls, rigid structures intended to block waves from reaching the shoreline directly. Others add sand through a process called beach nourishment, in which sand dredged from elsewhere is deposited on an eroding beach. Seawalls can protect the immediate area behind them but often cause the beach in front of the wall to disappear more quickly, since wave energy is reflected rather than absorbed. Beach nourishment avoids this problem but must be repeated periodically, as the new sand gradually washes away as well.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Seawalls can cause the beach in front of them to erode faster." },
        { id: "b", text: "Beach nourishment is a permanent, one-time solution." },
        { id: "c", text: "Beach nourishment requires repeating the sand deposit over time." },
        { id: "d", text: "Seawalls absorb wave energy rather than reflecting it." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q3-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize in Your Own Words",
      instructions:
        "아래 지문을 20~90단어로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "The adoption of standardized shipping containers beginning in the 1950s dramatically reduced the time and labor required to load and unload cargo ships. Before containerization, goods were loaded individually, a slow process that left ships idle in port for days. Once containers of a standard size became common, cranes could move large volumes of cargo quickly, and ships spent far less time docked. Lower shipping costs that resulted from this efficiency made it more practical for manufacturers to locate factories far from their main markets, contributing to the growth of export-oriented industries in many developing economies.",
      minWords: 20,
      maxWords: 90,
    },
    {
      id: "q4-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Many desert plants have evolved specialized tissues capable of storing large amounts of water collected during infrequent rainfall. Cacti, for example, expand their stems to hold water after a rainstorm and then slowly draw on this reserve during long dry periods that may last for months. This storage strategy allows such plants to survive in environments where rainfall is too unpredictable to rely on for daily water needs. However, the same water-storing tissue makes these plants attractive targets for animals seeking moisture, so many desert plants have also developed sharp spines or toxic compounds as a defense.",
      question: "According to the passage, why have many desert plants developed spines or toxic compounds?",
      options: [
        { id: "a", text: "To store more water during rainfall." },
        { id: "b", text: "To protect their water reserves from animals seeking moisture." },
        { id: "c", text: "To absorb rainfall more quickly." },
        { id: "d", text: "To reduce the unpredictability of rainfall." },
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
        "As the number of satellites in low Earth orbit has increased, so has concern over space debris: fragments of defunct satellites, spent rocket stages, and collision debris that continue to orbit the planet at high speed. Even a small fragment can severely damage an operational satellite because of the extreme velocities involved. Some researchers have proposed capturing large pieces of debris with nets or robotic arms and guiding them toward controlled reentry, though no such removal method has yet been deployed on a large scale.",
      question: "What is the main concern described in the passage?",
      options: [
        { id: "a", text: "Satellites are too expensive to replace." },
        { id: "b", text: "Debris in orbit poses a collision risk to operational satellites." },
        { id: "c", text: "Rocket stages cannot be launched into low Earth orbit." },
        { id: "d", text: "Robotic arms have already removed most space debris." },
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
        "Linguists estimate that a significant proportion of the world's languages could disappear within the next century, often because younger generations in a community shift toward a dominant regional or national language. Once a language is no longer passed from parents to children at home, it can lose fluent speakers within a generation or two, even if some documentation of the language survives in recordings or written records. Documentation alone, researchers note, does not keep a language in active use, since a recorded language with no daily speakers is considered dormant rather than living.",
      question: "According to the passage, why might documentation fail to preserve a language as a living language?",
      options: [
        { id: "a", text: "Documentation always restores a language to daily use." },
        { id: "b", text: "A language recorded but not spoken daily is considered dormant, not living." },
        { id: "c", text: "Younger generations prefer documented languages over spoken ones." },
        { id: "d", text: "Documentation requires more speakers than are usually available." },
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
        "Ocean currents play a major role in distributing heat around the planet, moving warm water from the tropics toward the poles and cooler water back toward the equator. The Gulf Stream, for instance, carries warm water across the Atlantic and contributes to the relatively mild winters experienced in parts of northwestern Europe compared to other regions at similar latitudes. Some climate models suggest that a significant slowdown in such currents, potentially linked to changes in polar ice melt, could alter regional climate patterns, though researchers continue to debate how likely such a slowdown is in the coming century.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Ocean currents help distribute heat from the tropics toward the poles." },
        { id: "b", text: "The Gulf Stream contributes to mild winters in parts of northwestern Europe." },
        { id: "c", text: "All climate models agree a current slowdown will definitely occur." },
        { id: "d", text: "Ocean currents have no connection to regional climate patterns." },
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
        "As autumn temperatures drop and daylight hours shorten, deciduous trees begin breaking down the chlorophyll in their leaves, a pigment that masks other pigments present throughout the growing season. As chlorophyll fades, yellow and orange pigments called carotenoids, which were present all along, become visible. Some tree species also produce new red pigments, called anthocyanins, specifically in autumn, and the vividness of red coloration in a given year is often linked to bright, sunny autumn days combined with cool, but not freezing, nights.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Carotenoid pigments are produced only in autumn, not before." },
        { id: "b", text: "Yellow and orange colors become visible as chlorophyll breaks down." },
        { id: "c", text: "Some red pigments are newly produced specifically in autumn." },
        { id: "d", text: "Freezing night temperatures produce the most vivid red coloration." },
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
          id: "p4",
          text: "Goods such as silk, spices, and precious stones moved west, while glass, wool textiles, and silver often moved east in return.",
        },
        {
          id: "p2",
          text: "The Silk Road was not a single road but a network of trade routes connecting East Asia with the Mediterranean world, used for roughly two thousand years.",
        },
        {
          id: "p3",
          text: "As a result, ideas, religious beliefs, and technologies spread gradually along the route even when the original merchants who introduced them never traveled its full length themselves.",
        },
        {
          id: "p1",
          text: "Trade along the Silk Road was never controlled by a single merchant traveling its entire length; instead, goods typically passed through a chain of regional traders.",
        },
      ],
      correctOrder: ["p2", "p1", "p4", "p3"],
    },
    {
      id: "q10-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Reading: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "Aquifers are underground layers of {{1}} rock or sediment that can hold and transmit groundwater. Many cities and farms rely on aquifers as a {{2}} source of fresh water, especially in regions where surface rivers and lakes are scarce. When water is pumped out faster than rainfall can {{3}} the aquifer, water levels can drop significantly, sometimes causing the ground above to sink.",
      blankOptions: {
        "1": ["permeable", "solid", "molten"],
        "2": ["reliable", "temporary", "contaminated"],
        "3": ["recharge", "evaporate", "drain"],
      },
      correctAnswers: {
        "1": "permeable",
        "2": "reliable",
        "3": "recharge",
      },
    },
    {
      id: "q11-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Urban planners have increasingly promoted the use of permeable pavement, a surface material that allows rainwater to seep through into the ground rather than running off into storm drains. Traditional pavement forces rainwater to flow across its surface, often carrying pollutants such as oil and road salt directly into nearby rivers and lakes. Permeable pavement, by contrast, filters much of this runoff through layers of gravel and sand before it reaches groundwater, reducing the volume of contaminated water that reaches waterways. The material does require more frequent maintenance, however, since its pores can become clogged with fine sediment over time.",
      question: "According to the passage, what is one advantage of permeable pavement over traditional pavement?",
      options: [
        { id: "a", text: "It never requires any maintenance." },
        { id: "b", text: "It reduces the amount of contaminated runoff reaching waterways." },
        { id: "c", text: "It carries more pollutants directly into rivers and lakes." },
        { id: "d", text: "It eliminates the need for storm drains entirely." },
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
        "During the nineteenth century, many cities began installing centralized water systems that delivered treated water directly to individual households. Before these systems existed, residents typically collected water from shared wells or rivers, a practice that made it difficult to control the spread of waterborne illnesses. Once treated water could be piped directly into homes, rates of diseases such as cholera dropped sharply in cities that adopted the new systems. Historians generally consider the spread of centralized water infrastructure to be one of the most significant public health advances of the era, even though the systems were initially expensive to build.",
      question: "According to the passage, what effect did centralized water systems have on cities that adopted them?",
      options: [
        { id: "a", text: "Rates of waterborne illness increased." },
        { id: "b", text: "Rates of waterborne illness dropped sharply." },
        { id: "c", text: "Residents continued relying on shared wells." },
        { id: "d", text: "The systems were cheaper to build than wells." },
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
        "Beekeepers have long relied on smoke to calm bees before inspecting a hive, a practice whose exact mechanism puzzled researchers for years. Current evidence suggests that smoke interferes with the pheromones bees use to signal alarm to the rest of the colony, so that a disturbed bee's warning does not trigger the full hive to react defensively. Smoke may also prompt bees to begin consuming stored honey, a behavior associated with preparing to flee a fire, which tends to make them calmer and less likely to sting. Beekeepers note that only a small amount of smoke is needed, since excessive smoke can agitate bees rather than calm them.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Smoke may interfere with alarm pheromones among bees." },
        { id: "b", text: "Smoke always makes bees more aggressive, regardless of amount." },
        { id: "c", text: "Smoke may prompt bees to consume stored honey." },
        { id: "d", text: "The exact mechanism of smoke's calming effect was understood immediately." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q14-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Freeze-drying, a preservation method originally developed for pharmaceuticals, removes water from food by freezing it and then reducing the surrounding pressure so that the ice sublimates directly into vapor. Because the process avoids exposing food to high heat, freeze-dried items tend to retain more of their original flavor, color, and nutrient content than foods preserved by traditional dehydration, which relies on heated air. Freeze-dried foods are also significantly lighter than their fresh counterparts, which has made the method popular for camping meals and space missions. The equipment required, however, is considerably more expensive than that used for conventional dehydration.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Freeze-drying tends to preserve more flavor and nutrients than heat-based dehydration." },
        { id: "b", text: "Freeze-dried foods are generally heavier than fresh foods." },
        { id: "c", text: "Freeze-drying equipment is more expensive than dehydration equipment." },
        { id: "d", text: "Freeze-drying was first developed for camping meals." },
      ],
      correctOptionIds: ["a", "c"],
    },
    {
      id: "q15-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Economists studying consumer behavior have identified a pattern known as anchoring, in which an initial piece of information, even if arbitrary, influences later judgments. In one widely cited demonstration, shoppers shown a high original price next to a discounted price tended to perceive the discounted item as a better deal than shoppers shown the discounted price alone, even when the final price was identical in both cases. Researchers argue that the original price serves as a mental reference point, shaping how reasonable the final price appears, regardless of whether that reference point reflects the item's true value.",
      question: "According to the passage, what role does the original price play in the anchoring effect?",
      options: [
        { id: "a", text: "It has no influence on how shoppers judge the final price." },
        { id: "b", text: "It serves as a reference point that shapes perceptions of the final price." },
        { id: "c", text: "It always reflects the item's true underlying value." },
        { id: "d", text: "It is only effective when shown without a discounted price." },
      ],
      correctOptionId: "b",
    },
    {
      id: "q16-fill-blanks",
      type: "fill-in-blanks",
      section: "reading",
      title: "Reading: Fill in the Blanks",
      instructions: "각 빈칸에 가장 적절한 단어를 선택하세요.",
      textWithBlanks:
        "Wetlands act as natural {{1}} by slowing the flow of floodwater and allowing sediment to settle before water reaches larger rivers. Many cities have therefore begun restoring wetlands near urban areas as a {{2}} alternative to building additional concrete flood barriers. Without this natural buffering, floodwaters can {{3}} much more quickly during heavy storms.",
      blankOptions: {
        "1": ["buffers", "barriers", "accelerators"],
        "2": ["costly", "cost-effective", "impossible"],
        "3": ["recede", "rise", "evaporate"],
      },
      correctAnswers: {
        "1": "buffers",
        "2": "cost-effective",
        "3": "rise",
      },
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
          text: "In the early twentieth century, assembly line production allowed manufacturers to build identical products far faster than individual craftsmen could.",
        },
        {
          id: "p4",
          text: "Over time, however, critics noted that highly repetitive assembly line tasks could lead to worker fatigue and reduced attention to quality.",
        },
        {
          id: "p1",
          text: "Before this shift, most manufactured goods were produced individually by skilled workers who completed each item from start to finish.",
        },
        {
          id: "p3",
          text: "As a result, the price of many manufactured goods fell sharply, making them affordable to a much wider segment of the population.",
        },
      ],
      correctOrder: ["p1", "p2", "p3", "p4"],
    },
    {
      id: "q18-mcq-single",
      type: "mcq-single",
      section: "reading",
      title: "Reading: Multiple Choice",
      instructions: "지문을 읽고 질문에 가장 적절한 답을 하나 고르세요.",
      passage:
        "Migratory birds rely on a combination of cues to navigate long distances, including the position of the sun, the pattern of stars at night, and the Earth's magnetic field. Researchers have found that young birds making their first migration can still orient correctly even when one of these cues is experimentally blocked, suggesting that the birds do not depend on any single cue alone. This redundancy likely helps birds maintain accurate navigation on cloudy nights or during magnetic disturbances, when any one cue might otherwise become unreliable.",
      question: "According to the passage, why might relying on multiple navigational cues be advantageous for migratory birds?",
      options: [
        { id: "a", text: "It allows birds to navigate accurately even if one cue becomes unreliable." },
        { id: "b", text: "It prevents birds from migrating during cloudy weather." },
        { id: "c", text: "It means birds no longer need to sense the Earth's magnetic field." },
        { id: "d", text: "It is only useful for birds on their first migration." },
      ],
      correctOptionId: "a",
    },
    {
      id: "q19-mcq-multi",
      type: "mcq-multi",
      section: "reading",
      title: "Reading: Multiple Answer",
      instructions: "지문을 읽고 질문에 해당하는 답을 모두 고르세요.",
      passage:
        "Crop rotation, the practice of growing different types of crops in the same field across successive seasons, has been used for centuries to maintain soil fertility. Planting a nitrogen-fixing crop, such as a legume, after a nitrogen-depleting crop like corn can restore nutrients to the soil without relying solely on synthetic fertilizer. Rotation also helps disrupt the life cycles of pests and diseases that tend to target a specific crop species, since those pests often cannot survive when their preferred host plant is absent for a season. Farmers who rotate crops still generally use some fertilizer, but often in smaller quantities than farms growing a single crop year after year.",
      question: "Which of the following are supported by the passage?",
      options: [
        { id: "a", text: "Legumes can help restore nitrogen to depleted soil." },
        { id: "b", text: "Crop rotation can disrupt the life cycles of certain pests." },
        { id: "c", text: "Farmers who rotate crops never use any fertilizer." },
        { id: "d", text: "Corn is described as a nitrogen-fixing crop." },
      ],
      correctOptionIds: ["a", "b"],
    },
    {
      id: "q20-essay",
      type: "essay",
      section: "writing",
      title: "Writing: Summarize in Your Own Words",
      instructions:
        "아래 지문을 20~90단어로 요약하세요. 이 문항은 자동 채점되지 않으며, 작성한 답안은 자가 검토를 위해 저장됩니다.",
      passage:
        "City planners have begun experimenting with reversible street designs, in which a lane's direction of travel changes depending on the time of day to accommodate heavier traffic flowing into a city center in the morning and away from it in the evening. Early adopters report that these designs can reduce congestion without the cost of building additional lanes. Critics counter that reversible lanes can confuse unfamiliar drivers and require clear signage and strict enforcement to operate safely, since a driver entering the wrong lane at the wrong time faces a significant collision risk.",
      minWords: 20,
      maxWords: 90,
    },
  ],
};
