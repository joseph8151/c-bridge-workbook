export interface GuidePost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: string[];
}

export const guidePosts: GuidePost[] = [
  {
    slug: "opic-ih-al-difference",
    title: "OPIc IH와 AL의 차이",
    category: "OPIc",
    excerpt: "IH와 AL을 가르는 것은 어휘량이 아니라 답변의 구조와 확장력입니다.",
    readTime: "5 min read",
    content: [
      "OPIc에서 IH와 AL의 차이는 단순히 문법이 얼마나 정확한가에 있지 않습니다. IH는 주어진 주제에 대해 답할 수 있지만 답변이 짧게 끝나는 경우가 많고, AL은 하나의 주제를 다양한 시제와 상황으로 확장해 설명할 수 있습니다.",
      "AL 목표라면 콤보셋(돌발주제, Role Play)에서도 당황하지 않고 답변을 이어갈 수 있는 순발력이 필요합니다. 이를 위해서는 예상질문을 암기하기보다 답변 구조 자체를 체화하는 연습이 중요합니다.",
      "100P로 기본 구조를 익히고, 목표가 AL이라면 200P 이상으로 다양한 주제의 답변 확장 연습을 충분히 하는 것을 추천합니다.",
    ],
  },
  {
    slug: "sjpt-level-answer-method",
    title: "SJPT Level별 답변 방법",
    category: "SJPT",
    excerpt: "SJPT는 레벨마다 요구하는 답변의 길이와 논리 구조가 다릅니다.",
    readTime: "6 min read",
    content: [
      "SJPT 초급 구간에서는 정확한 문형으로 짧고 명확하게 답하는 것이 우선입니다. Level 3~4 구간부터는 이유와 예시를 덧붙이는 연습이 필요합니다.",
      "Level 5 이상에서는 상황 설명형 문제에서 시간 순서나 인과관계를 논리적으로 전달하는 능력이 중요해집니다. 표현을 다양화하는 것보다 문장 간 연결이 자연스러운지가 채점에 더 크게 반영됩니다.",
      "취업·승진 목적이라면 실제 업무 상황을 가정한 질문에 대한 답변 구성을 미리 연습해두는 것이 실전에서 큰 도움이 됩니다.",
    ],
  },
  {
    slug: "tsc-high-score-answer-structure",
    title: "TSC 고득점 답변 구성법",
    category: "TSC",
    excerpt: "TSC 고득점의 핵심은 질문 유형별로 정해진 답변 틀을 갖추는 것입니다.",
    readTime: "5 min read",
    content: [
      "TSC는 질문 응답, 사진 묘사, 상황 설명, 의견 제시 등 유형이 명확하게 구분되어 있습니다. 유형마다 답변 구조를 미리 정해두면 실전에서 답변을 구성하는 시간을 크게 줄일 수 있습니다.",
      "사진 묘사에서는 전체 구도를 먼저 설명한 뒤 세부 요소로 이동하는 순서가 자연스럽습니다. 의견 제시 문제에서는 결론을 먼저 말하고 근거를 덧붙이는 방식이 짧은 답변 시간 안에서 효율적입니다.",
      "충분한 문제량으로 다양한 주제를 접해보는 것이 고득점의 지름길이며, 이 때문에 TSC는 실전 문제 풀이량이 특히 중요한 시험입니다.",
    ],
  },
  {
    slug: "flex-japanese-preparation",
    title: "FLEX 일본어 준비 방법",
    category: "FLEX",
    excerpt: "FLEX는 시험 자료가 적기 때문에 실전 문제를 충분히 확보하는 것이 관건입니다.",
    readTime: "5 min read",
    content: [
      "FLEX 일본어는 다른 주요 시험에 비해 공개된 자료가 많지 않습니다. 때문에 기출 유형을 정확히 이해하고, 유사한 형식의 실전 문제를 충분히 풀어보는 것이 준비의 핵심입니다.",
      "듣기와 읽기 비중이 높은 만큼 어휘와 문법을 먼저 다진 뒤, 유형별 문제로 실전 감각을 끌어올리는 순서를 추천합니다.",
      "목표 점수가 명확하다면 처음부터 실전 모의고사 비중이 높은 200P 이상 구성으로 준비하는 것이 효율적입니다.",
    ],
  },
  {
    slug: "versant-test-types",
    title: "Versant 시험 유형 정리",
    category: "Versant",
    excerpt: "Versant는 정확성보다 순발력과 자연스러움을 우선적으로 평가합니다.",
    readTime: "4 min read",
    content: [
      "Versant는 문장 반복, 문장 완성, 짧은 응답 등 짧은 시간 안에 빠르게 답해야 하는 문항으로 구성됩니다. 정확한 문법보다 자연스러운 발화 속도와 유창성이 더 중요하게 반영됩니다.",
      "생각할 시간이 거의 주어지지 않기 때문에, 실전과 동일한 시간 제한 안에서 반복 훈련하는 것이 유일한 대비 방법입니다.",
      "직장인이 처음 준비한다면 100P로 문제 유형에 먼저 익숙해진 뒤, 실전 감각이 필요하다면 모의고사 비중이 높은 구성으로 넘어가는 것을 추천합니다.",
    ],
  },
  {
    slug: "spa-common-questions",
    title: "SPA에서 자주 나오는 질문",
    category: "SPA",
    excerpt: "SPA는 비즈니스 상황을 가정한 질문이 반복적으로 출제되는 경향이 있습니다.",
    readTime: "4 min read",
    content: [
      "SPA는 실제 인터뷰 방식으로 진행되며, 업무 상황·의견 제시·설명형 질문이 자주 출제됩니다. 특히 자기소개, 업무 경험, 문제 해결 상황을 묻는 질문의 비중이 높습니다.",
      "질문의 의도를 정확히 파악하고 핵심만 간결하게 답하는 연습이 필요하며, 지나치게 길게 답하려다 논점을 잃는 경우가 감점으로 이어질 수 있습니다.",
      "예상 질문과 답변 구성법을 먼저 익히고, 실전 인터뷰 형식의 모의 연습으로 마무리하는 순서를 추천합니다.",
    ],
  },
  {
    slug: "jlpt-n1-vs-jpt",
    title: "JLPT N1과 JPT의 차이",
    category: "JLPT · JPT",
    excerpt: "JLPT는 급수 인증 시험, JPT는 실용 점수 시험이라는 근본적인 차이가 있습니다.",
    readTime: "5 min read",
    content: [
      "JLPT는 N1~N5 급수로 능력을 인증하는 시험으로 대학 진학이나 자격 요건에 주로 활용됩니다. JPT는 990점 만점의 점수제 시험으로, 취업과 사내 평가에서 목표 점수 형태로 요구되는 경우가 많습니다.",
      "JLPT는 문법과 독해의 정확성이 중요한 반면, JPT는 실용적인 청해·독해 속도와 정확도가 더 크게 반영됩니다.",
      "일본계 기업 취업이 목적이라면 채용 공고에서 요구하는 시험이 무엇인지 먼저 확인한 뒤 그에 맞는 교재를 선택하는 것이 효율적입니다.",
    ],
  },
  {
    slug: "hsk-vs-tsc",
    title: "HSK와 TSC 중 무엇을 준비해야 할까?",
    category: "HSK · TSC",
    excerpt: "HSK는 어학 능력 인증, TSC는 말하기 실전 능력을 평가한다는 차이가 있습니다.",
    readTime: "5 min read",
    content: [
      "HSK는 어휘, 독해, 듣기, 쓰기를 포함한 종합적인 중국어 능력 인증 시험입니다. 반면 TSC는 말하기에 특화된 시험으로, 질문 응답과 상황 설명 등 실전 커뮤니케이션 능력을 평가합니다.",
      "중국 관련 업무나 취업에서 어학 능력 자체를 증명해야 한다면 HSK를, 실무에서 바로 활용 가능한 회화 능력을 증명해야 한다면 TSC를 우선 준비하는 것을 추천합니다.",
      "두 시험을 함께 준비해야 하는 경우, 어휘·문법 기반을 다지는 HSK 학습이 TSC 답변의 정확도에도 도움이 됩니다.",
    ],
  },
  {
    slug: "pte-academic-study-order",
    title: "PTE Academic 공부 순서",
    category: "PTE",
    excerpt: "PTE는 영역이 통합되어 있어 학습 순서를 잘못 잡으면 비효율이 커집니다.",
    readTime: "5 min read",
    content: [
      "PTE Academic은 Speaking·Writing·Reading·Listening 점수가 서로 연결되는 통합형 시험입니다. 때문에 한 영역만 집중적으로 공부하기보다, Read Aloud처럼 여러 영역에 공통으로 영향을 주는 문항 유형부터 익히는 것이 효율적입니다.",
      "이후 Writing의 Summarize Written Text, Essay 구조를 잡고, Listening의 Summarize Spoken Text로 이어가는 순서를 추천합니다.",
      "AI 채점 방식에 익숙해지는 것도 중요하므로, 실전과 동일한 시간 제한 안에서 모의고사를 반복하는 연습이 필수적입니다.",
    ],
  },
  {
    slug: "toefl-vs-ielts",
    title: "TOEFL과 IELTS 어떤 시험이 유리할까?",
    category: "TOEFL · IELTS",
    excerpt: "두 시험 모두 유학에 활용되지만 문제 방식과 평가 방식에 분명한 차이가 있습니다.",
    readTime: "6 min read",
    content: [
      "TOEFL은 컴퓨터 기반의 객관식 중심 시험으로, 강의·대화를 듣고 종합적으로 답하는 통합형 문항이 많습니다. IELTS는 대면 Speaking 인터뷰가 포함되어 있고, Writing에서도 좀 더 명확한 채점 기준(Task Achievement, Coherence 등)을 제공합니다.",
      "지원하려는 학교나 기관이 특정 시험을 선호하는 경우가 많으므로, 목표 기관의 요구 시험을 먼저 확인하는 것이 중요합니다.",
      "대면 인터뷰에 자신이 있다면 IELTS가, 정형화된 문제 풀이에 강하다면 TOEFL이 상대적으로 유리할 수 있습니다.",
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guidePosts.find((p) => p.slug === slug);
}

export function getGuidesForTest(testName: string): GuidePost[] {
  return guidePosts.filter((p) => p.category.includes(testName) || testName.includes(p.category));
}
