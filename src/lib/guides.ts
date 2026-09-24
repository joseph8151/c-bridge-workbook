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
      "200P로 기본 구조를 먼저 다진 뒤, 목표가 AL이라면 300P로 다양한 주제의 답변 확장 연습을 충분히 하는 것을 추천합니다.",
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
      "직장인이 처음 준비한다면 200P로 문제 유형에 먼저 익숙해진 뒤, 실전 감각이 필요하다면 모의고사 비중이 높은 300P로 넘어가는 것을 추천합니다.",
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
  {
    slug: "pte-academic-vs-ukvi",
    title: "PTE Academic과 UKVI는 과제가 같고 성적표가 다릅니다",
    category: "PTE",
    excerpt: "문항 구성은 동일하지만 성적표의 용도와 인정 기관이 다릅니다.",
    readTime: "4 min read",
    content: [
      "PTE Academic과 PTE Academic UKVI는 시험장에서 치르는 문항과 시간 구성이 동일합니다. Speaking, Writing, Reading, Listening 네 영역 모두 같은 유형으로 출제됩니다.",
      "차이는 성적표에 있습니다. UKVI는 영국 정부(Home Office)가 비자 심사용으로 인정하는 성적표 형식으로 발급되며, 일반 PTE Academic 성적표와는 발급 절차와 인정 범위가 다릅니다.",
      "학교 지원이 목적이라면 PTE Academic, 영국 비자 신청이 목적이라면 UKVI로 접수해야 합니다. 준비 방법 자체는 동일하므로 목적에 맞는 접수 여부만 미리 확인하세요.",
    ],
  },
  {
    slug: "celpip-self-study-clb-plateau",
    title: "CELPIP 독학, CLB가 안 오를 때",
    category: "CELPIP",
    excerpt: "정체 구간은 대부분 특정 영역 하나가 발목을 잡고 있는 경우입니다.",
    readTime: "5 min read",
    content: [
      "CELPIP 점수가 정체되는 경우, 네 영역을 고르게 다시 푸는 것보다 CLB 점수를 가장 많이 깎아먹는 영역 하나를 먼저 찾는 것이 효율적입니다.",
      "Writing은 이메일의 논지 전개와 문단 구성이, Speaking은 답변의 완결성과 자연스러운 연결이 CLB 점수에 직접적으로 반영됩니다. 어휘량보다 구조가 먼저인 경우가 많습니다.",
      "독학으로 정체 구간에 있다면, 약한 영역만 집중적으로 풀어보고 실제 채점 기준에 맞춰 확인하는 과정이 필요합니다.",
    ],
  },
  {
    slug: "oet-writing-speaking-by-profession",
    title: "OET는 직군마다 쓰기·말하기가 갈립니다",
    category: "OET",
    excerpt: "Reading·Listening은 공통이지만 Writing·Speaking은 직군별로 완전히 다릅니다.",
    readTime: "5 min read",
    content: [
      "OET의 Reading과 Listening은 모든 직군이 동일한 문항을 풉니다. 하지만 Writing과 Speaking은 Nursing, Medicine, Pharmacy, Physiotherapy, Dentistry 등 직군별로 완전히 다른 과제가 출제됩니다.",
      "Writing은 직군별 임상 상황을 담은 케이스 노트를 바탕으로 레터를 작성하는 과제이고, Speaking은 해당 직군에서 실제로 마주치는 환자 상담 상황을 역할극으로 진행합니다.",
      "때문에 다른 직군의 자료로 준비하면 실전과 다른 형식을 연습하게 됩니다. 반드시 본인 직군에 맞춘 Writing·Speaking 자료로 준비해야 합니다.",
    ],
  },
  {
    slug: "epta-not-a-conversation-book",
    title: "EPTA는 회화 교재로 대체되지 않습니다",
    category: "EPTA",
    excerpt: "일반 영어 회화 실력과 관제 교신 영어는 평가 기준이 다릅니다.",
    readTime: "4 min read",
    content: [
      "EPTA는 일상 회화 능력이 아니라 표준화된 관제 교신 상황에서의 이해와 응답을 평가합니다. 정해진 표현과 절차를 정확히 듣고 반응하는 능력이 핵심입니다.",
      "일반 영어 회화 교재로는 이 표준 교신 형식과 상황별 어휘를 다루지 않기 때문에, 실전 평가 기준과 맞지 않는 방식으로 준비하게 될 위험이 있습니다.",
      "운항·관제 상황을 가정한 Speaking Scenario와 표준 교신 표현을 직접 다루는 자료로 준비하는 것이 실전과 가장 가깝습니다.",
    ],
  },
  {
    slug: "toles-is-contract-language",
    title: "TOLES는 계약문입니다",
    category: "TOLES",
    excerpt: "일반 비즈니스 영어가 아니라 계약서 특유의 문장 구조를 다루는 시험입니다.",
    readTime: "4 min read",
    content: [
      "TOLES는 일반 비즈니스 영어시험과 달리, 실제 계약서와 법률 문서에서 쓰이는 문장 구조와 어휘를 다룹니다. 조건문, 정의 조항, 면책 조항처럼 계약서에 반복적으로 등장하는 표현이 출제의 중심입니다.",
      "독해에서는 계약 조항의 의미를 정확히 해석하는 능력이, Writing에서는 모호함 없이 조항을 작성하는 능력이 평가됩니다.",
      "국제 로펌이나 크로스보더 계약 업무를 준비한다면, 일반 비즈니스 영어보다 계약문 특유의 구조에 맞춘 준비가 필요합니다.",
    ],
  },
  {
    slug: "topec-is-not-oet",
    title: "TOPEC는 일본 병동 영어입니다. OET가 아닙니다",
    category: "TOPEC",
    excerpt: "둘 다 간호 영어를 다루지만 대상 국가와 시험 형식이 다른 별개의 시험입니다.",
    readTime: "4 min read",
    content: [
      "TOPEC는 일본 병동에서 실제로 사용하는 간호 실무 영어를 평가하는 시험입니다. OET Nursing과 마찬가지로 간호 영역을 다루지만, 대상 의료 환경과 출제 기관, 평가 형식이 다른 별개의 시험입니다.",
      "환자 응대, 인수인계, 임상 상황 설명 등 일본 병동에서 실제로 마주치는 상황을 중심으로 문항이 구성됩니다.",
      "OET Nursing을 준비한 자료로 TOPEC를 대체할 수 없으므로, 목표 시험에 맞는 자료로 각각 준비해야 합니다.",
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guidePosts.find((p) => p.slug === slug);
}

export function getGuidesForTest(testName: string): GuidePost[] {
  return guidePosts.filter((p) => p.category.includes(testName) || testName.includes(p.category));
}
