export interface GuidePost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  quote: string;
  closing?: string;
}

export const guidePosts: GuidePost[] = [
  {
    slug: "sjpt-level-answer-method",
    title: "SJPT Level별 답변 방법",
    category: "SJPT",
    excerpt: "SJPT는 레벨마다 요구하는 답변의 구조가 다릅니다.",
    content: [
      "레벨이 올라갈수록 SJPT 답변은 길이보다 구조가 먼저 달라집니다. 낮은 레벨에서는 사실을 짧고 정확하게 전달하는 것으로 충분하지만, 상위 레벨로 갈수록 이유와 예시를 붙이고 마지막에 정리하는 흐름이 필요합니다.",
      "이 구조를 건너뛰고 어휘만 늘리는 방식으로는 레벨이 잘 움직이지 않습니다. 표현이 다양해져도 답변이 사실 나열에 머물면 여전히 낮은 레벨의 응답으로 읽힙니다.",
    ],
    quote: "Sample prompt (translated): Describe a change you made to your daily routine and explain why.",
  },
  {
    slug: "versant-test-types",
    title: "Versant 시험 유형 정리",
    category: "Versant",
    excerpt: "Versant는 정확성보다 끊기지 않는 응답을 우선적으로 평가합니다.",
    content: [
      "한 문항이 끝나자마자 다음 문항으로 넘어가는 것이 Versant의 특징입니다. 이 흐름에서는 완벽한 문장을 만드는 것보다 응답이 끊기지 않고 이어지는 것이 더 높은 점수로 연결됩니다.",
      "Repeat, Question, Story 세 유형은 요구되는 호흡이 서로 다릅니다. Repeat는 들은 그대로 즉시 반응해야 하고, Question은 핵심만 짧게, Story는 상대적으로 긴 호흡으로 이야기를 이어가야 합니다.",
    ],
    quote: "Prompt: Repeat the sentence exactly as you hear it — “The delivery was delayed by two days.”",
  },
  {
    slug: "spa-common-questions",
    title: "SPA에서 자주 나오는 질문",
    category: "SPA",
    excerpt: "SPA는 기업이 채용·승진 평가에 활용하는 말하기 시험입니다.",
    content: [
      "SPA에서는 자기소개보다 상황 대응형 질문이 훨씬 자주 반복됩니다. 특정 기업 하나에 국한된 시험이 아니라, 여러 기업이 채용과 승진 평가에 활용하는 말하기 시험입니다.",
      "질문은 대부분 “이런 상황이라면 어떻게 하겠는가”를 묻는 형태로 반복됩니다. 미리 외운 자기소개보다, 상황을 듣고 바로 대응하는 연습이 실제 점수에 더 크게 반영됩니다.",
    ],
    quote: "Prompt: A client calls to say the delivery will be late. How do you respond?",
    closing: "상황 대응 연습은 실전 인터뷰 형식으로 이어가는 것이 가장 비슷합니다.",
  },
  {
    slug: "pte-academic-study-order",
    title: "PTE Academic 공부 순서",
    category: "PTE",
    excerpt: "PTE는 영역이 통합되어 있어 학습 순서가 효율을 크게 좌우합니다.",
    content: [
      "PTE Academic 학습 순서를 정할 때는 Speaking 과제부터 봐야 합니다. Repeat Sentence, Read Aloud 같은 유형이 다른 영역과 점수로 묶여 있어, Essay부터 붙잡고 시작하면 여러 영역에 영향을 주는 유형을 뒤늦게 접하게 됩니다.",
      "Write from Dictation은 보통 마지막으로 미루는 유형인데, 실제로는 학습 중간에 넣는 편이 흐름상 자연스럽습니다. 듣기와 쓰기를 동시에 쓰는 유형이라 Speaking 이후, Essay 이전에 배치하는 것이 낫습니다.",
    ],
    quote: "Read Aloud: “Remote work has changed how teams communicate on a daily basis.”",
    closing: "네 영역이 어떻게 묶이는지는 실제 성적 리포트를 봐야 감이 잡힙니다.",
  },
  {
    slug: "toefl-vs-ielts",
    title: "TOEFL과 IELTS 어떤 시험이 유리할까?",
    category: "TOEFL · IELTS",
    excerpt: "유리한 쪽은 시험 자체보다 목표 기관이 받는 시험에 달려 있습니다.",
    content: [
      "유학 준비에서 TOEFL과 IELTS 중 무엇이 유리한지는 시험 자체보다 목표 학교에 달려 있습니다. TOEFL은 컴퓨터 기반으로 영역이 통합되어 진행되고, IELTS는 대면 인터뷰를 포함한 모듈형으로 진행됩니다.",
      "지원하려는 학교나 기관이 특정 시험을 선호하는 경우가 많으므로, 목표 기관이 요구하는 시험을 먼저 확인한 뒤 그에 맞춰 준비하는 것이 순서입니다.",
    ],
    quote: "TOEFL integrated task: summarize how the lecture challenges points made in the reading passage.",
  },
  {
    slug: "pte-academic-vs-ukvi",
    title: "PTE Academic과 UKVI는 과제가 같고 성적표가 다릅니다",
    category: "PTE",
    excerpt: "문항 구성은 동일하지만 성적표의 용도와 인정 기관이 다릅니다.",
    content: [
      "시험장에서 치르는 문항만 보면 PTE Academic과 UKVI는 동일합니다. Speaking, Writing, Reading, Listening 네 영역 모두 같은 유형으로 출제됩니다.",
      "차이는 성적표에 있습니다. UKVI 성적표는 영국 정부가 비자 심사용으로 인정하는 형식으로 발급됩니다. 캐나다 이민이 목적이라면 UKVI가 아니라 PTE Core로 접수해야 합니다.",
    ],
    quote: "Same task, different certificate: “Summarize the lecture in no more than 70 words.”",
  },
  {
    slug: "celpip-self-study-clb-plateau",
    title: "CELPIP 독학, CLB가 안 오를 때",
    category: "CELPIP",
    excerpt: "정체 구간은 대부분 특정 영역 하나가 발목을 잡고 있는 경우입니다.",
    content: [
      "CELPIP 점수가 정체되는 대부분의 경우, 원인은 한 영역에 있습니다. 네 영역을 고르게 다시 공부하는 것보다 CLB 점수를 가장 많이 깎아먹는 영역 하나를 먼저 찾는 것이 정체를 깨는 더 빠른 방법입니다.",
      "특히 듣기와 말하기를 동시에 끌어올리려다가 둘 다 애매하게 걸리는 경우가 많습니다. 한 영역을 확실히 올린 뒤 다음 영역으로 넘어가는 순서가 독학에서는 더 안전합니다.",
    ],
    quote: "Speaking Task 3: describe a person who has influenced your life.",
    closing: "어느 영역이 발목을 잡고 있는지는 최근 성적표로 먼저 확인합니다.",
  },
  {
    slug: "celpip-listening-numbers-maps",
    title: "CELPIP 듣기, 숫자와 지도",
    category: "CELPIP",
    excerpt: "숫자·길찾기 정보를 놓치면 그대로 오답으로 이어지는 유형입니다.",
    content: [
      "CELPIP Listening에는 처음 말한 시각이 뒤에서 정정되는 문제가 반복해서 나옵니다. 3시라고 했다가 4시로 바뀌면, 최종 정답은 언제나 정정된 뒤의 숫자입니다.",
      "지도 문제도 같은 원리입니다. 출발점을 먼저 찍고, 방향이 고쳐지면 그 지점으로 표시를 옮겨야 합니다. 정답은 처음 위치가 아니라 마지막으로 남은 위치와 대조해서 확인합니다.",
    ],
    quote: "Clerk: “Actually, let's move that to 4:00 instead of 3:00.”",
  },
  {
    slug: "oet-writing-speaking-by-profession",
    title: "OET는 직군마다 쓰기·말하기가 갈립니다",
    category: "OET",
    excerpt: "Reading·Listening은 공통이지만 Writing·Speaking은 직군별로 완전히 다릅니다.",
    content: [
      "직군에 따라 완전히 달라지는 OET 영역은 Writing과 Speaking뿐입니다. Reading과 Listening은 Nursing, Medicine, Pharmacy, Physiotherapy, Dentistry, Radiography, Occupational Therapy 7개 직군이 모두 동일한 문항을 풉니다.",
      "간호용 자료로 의사나 약사 직군을 준비하면 실전과 다른 형식을 연습하게 됩니다. 반드시 본인 직군에 맞춘 Writing·Speaking 자료로 준비해야 합니다.",
    ],
    quote: "Dear Dr Collins, thank you for seeing Ms Hale, a 67-year-old woman who presented with increasing shortness of breath.",
    closing: "직군마다 다른 Writing·Speaking 자료는 상담에서 직군에 맞춰 안내합니다.",
  },
  {
    slug: "epta-not-a-conversation-book",
    title: "EPTA는 회화 교재로 대체되지 않습니다",
    category: "EPTA",
    excerpt: "일반 영어 회화 실력과 관제 교신 영어는 평가 기준이 다릅니다.",
    content: [
      "일상 대화 능력과 EPTA가 요구하는 능력은 평가 기준부터 다릅니다. EPTA는 표준화된 관제 교신 상황에서의 복창과 숫자 처리 능력을 평가합니다.",
      "일반 회화 교재는 이런 표준 교신 형식과 숫자 표현을 다루지 않습니다. 회화 실력이 좋아도 EPTA 준비로 곧장 이어지지는 않습니다.",
    ],
    quote: "Instruction: “Turn left heading three one zero.”",
    closing: "표준 교신 표현은 실제 음성 자료로 반복해서 듣는 연습이 필요합니다.",
  },
  {
    slug: "toles-is-contract-language",
    title: "TOLES는 계약문입니다",
    category: "TOLES",
    excerpt: "일반 비즈니스 영어가 아니라 계약서 특유의 문장 구조를 다루는 시험입니다.",
    content: [
      "일반 비즈니스 영어와 TOLES가 다른 지점은 계약서 특유의 문장 구조입니다. 조건문, 정의 조항, 면책 조항처럼 계약서에 반복적으로 등장하는 표현이 출제의 중심입니다.",
      "비즈니스 이메일 작성 교재로는 이 문형을 다루지 않습니다. 실제 계약 문서를 기준으로 구성된 자료로 준비해야 시험 형식과 맞습니다.",
    ],
    quote: "Clause: “The Supplier shall not be liable for any indirect or consequential loss.”",
  },
  {
    slug: "topec-is-not-oet",
    title: "TOPEC는 일본 병동 영어입니다. OET가 아닙니다",
    category: "TOPEC",
    excerpt: "둘 다 간호 영어를 다루지만 대상 국가와 시험 형식이 다른 별개의 시험입니다.",
    content: [
      "간호 영어를 다루는 시험이라고 해서 TOPEC를 OET Nursing과 같게 볼 수는 없습니다. TOPEC는 일본 병동에서 실제로 쓰는 간호 실무 영어를 평가합니다.",
      "대상 국가와 출제 기관, 평가 형식이 각각 다릅니다. OET Nursing을 준비한 자료로는 TOPEC를 대체할 수 없고, 목표 시험에 맞춰 따로 준비해야 합니다.",
    ],
    quote: "Handover: “The patient's temperature has been stable since this morning.”",
    closing: "OET Nursing과 헷갈린다면 상담에서 어느 쪽이 맞는지부터 확인하세요.",
  },
  {
    slug: "nclex-question-types",
    title: "NCLEX는 영어시험이 아닙니다",
    category: "NCLEX",
    excerpt: "미국·캐나다 간호 면허 본시험으로, 준비 방향이 영어시험과 다릅니다.",
    content: [
      "영어 실력을 평가하는 시험이라고 생각하면 NCLEX 준비 방향이 어긋납니다. 미국과 캐나다에서 간호사로 일하기 위한 면허 본시험이며, 언어보다 임상 판단을 묻습니다.",
      "그래서 준비도 영어 학습이 아니라 문항 유형에 익숙해지는 쪽에 맞춰집니다. 상황형 문제에서 우선순위를 판단하는 방식에 반복적으로 노출되는 것이 핵심입니다.",
    ],
    quote: "Item: “Which finding requires the nurse's immediate attention?”",
  },
  {
    slug: "elpac-aviation-vs-k12",
    title: "ELPAC은 항공 관제 영어입니다",
    category: "ELPAC",
    excerpt: "같은 이름을 쓰는 미국 초·중·고 대상 ELPAC과는 다른 시험입니다.",
    content: [
      "ELPAC이라는 이름은 완전히 다른 두 시험을 동시에 가리킵니다. 하나는 유럽 항공 관제 교신 영어평가이고, 다른 하나는 미국 캘리포니아주 초·중·고 학생을 대상으로 한 영어 능력 평가입니다.",
      "C-BRIDGE에서 다루는 ELPAC은 항공 관제 쪽입니다. 관제탑과 조종사 사이의 표준 교신 표현을 정확히 듣고 반응하는 능력을 평가합니다.",
    ],
    quote: "Readback: “Cleared to land runway two seven.”",
  },
  {
    slug: "faa-radiotelephony",
    title: "FAA는 라디오 텔레포니입니다",
    category: "FAA",
    excerpt: "EPTA·ICAO English와 다루는 영역은 비슷해도 목적이 다릅니다.",
    content: [
      "라디오 텔레포니에 특화된 시험이 Aviation English(FAA)입니다. 미국 연방항공청 기준으로, 관제와 조종사 사이의 무선 교신 능력을 평가합니다.",
      "EPTA, ICAO English와 다루는 영역은 비슷해 보이지만 인정하는 기관과 활용 목적이 다릅니다. 어떤 자격을 위해 준비하는지에 따라 맞는 시험을 먼저 확인해야 합니다.",
    ],
    quote: "Radio check: “Tower, this is flight two four, radio check, over.”",
    closing: "어떤 자격에 쓰이는 시험인지 상담에서 먼저 확인하고 시작하세요.",
  },
  {
    slug: "icao-english-level-scale",
    title: "ICAO English는 등급 체계입니다",
    category: "ICAO",
    excerpt: "단일 국가 시험이 아니라 여러 항공 영어시험이 참조하는 국제 기준입니다.",
    content: [
      "특정 국가 하나가 주관하는 시험이 아니라는 점에서 ICAO English는 다른 항공 영어시험과 다릅니다. 국제민간항공기구가 정한 6단계 등급 체계이며, 조종사·관제사는 최소 Operational Level 4 이상을 요구받습니다.",
      "EPTA, ELPAC, Aviation English(FAA) 같은 개별 시험들이 이 등급 체계를 기준으로 설계되어 있습니다. 어떤 시험을 보든 결국 ICAO 등급 기준에 맞춘 표현과 반응 속도를 준비하게 됩니다.",
    ],
    quote: "Level 4 descriptor: communicates effectively even in unfamiliar situations.",
    closing: "지원하는 항공사·관제 기관이 요구하는 등급을 먼저 확인하는 것이 순서입니다.",
  },
];

export function getGuideBySlug(slug: string) {
  return guidePosts.find((p) => p.slug === slug);
}

export function getGuidesForTest(testName: string): GuidePost[] {
  return guidePosts.filter((p) => p.category.includes(testName) || testName.includes(p.category));
}
