"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Sample = {
  title: string;
  teaser: string[];
  preview: string[];
  testName: string;
};

const oetTracks = [
  { en: "Nursing", ko: "간호사" },
  { en: "Medicine", ko: "의사" },
  { en: "Pharmacy", ko: "약사" },
  { en: "Physiotherapy", ko: "물리치료" },
  { en: "Dentistry", ko: "치과" },
  { en: "Radiography", ko: "방사선" },
  { en: "Occupational Therapy", ko: "작업치료" },
];

const oetLetterSample: Sample = {
  title: "레터 첫 문장 1 (Nursing)",
  teaser: ["담당 간호사로서 후속 치료를 위해", "환자를 다른 병동에 의뢰하는 첫 문장입니다."],
  preview: [
    "지시문: 담당 간호사로서 후속 치료를 위해 환자를 다른 병동으로 의뢰하는 편지의 첫 문장을 쓰세요.",
    "모범 문장: \"I am writing to refer Mr. Smith, a 68-year-old patient, for continued wound care management.\"",
    "채점 포인트: 의뢰 목적(continued wound care management)이 첫 문장에 바로 드러나야 합니다.",
    "자주 틀리는 지점: 환자 정보만 나열하고 의뢰 목적을 문장 뒤로 미루는 경우가 많습니다.",
    "해설: \"I am writing to + 목적\" 구조로 시작하면 리더가 편지의 용건을 바로 파악할 수 있습니다.",
    "환자의 나이·이름 등 식별 정보는 목적 뒤에 붙는 것이 자연스러운 순서입니다.",
  ],
  testName: "OET Nursing",
};

const samplesByExam: Record<string, Sample[]> = {
  PTE: [
    {
      title: "Repeat Sentence 1",
      teaser: ["문장을 들은 후 그대로 따라 말하는 문항입니다.", "채점은 단어 정확도와 리듬을 함께 봅니다."],
      preview: [
        "지시문: 문장을 들은 후 그대로 따라 말하세요.",
        "음성 스크립트: \"The committee will review the proposal before the end of the quarter.\"",
        "이 문항은 11개 단어, 표준 속도로 약 4초간 재생됩니다.",
        "채점 포인트: 단어 정확도뿐 아니라 문장 전체 리듬을 얼마나 유지하는지를 함께 봅니다.",
        "자주 틀리는 지점: \"before the end of the quarter\"처럼 뒤에 붙는 시간 표현을 놓치는 경우가 많습니다.",
        "해설: 먼저 주어-동사(committee will review)를 잡고, 목적어와 시간 표현을 순서대로 붙이는 연습이 효과적입니다.",
        "연습 순서: 통으로 듣기 → 뼈대만 말하기 → 세부 표현 채워 다시 말하기.",
      ],
      testName: "PTE",
    },
    {
      title: "Write from Dictation 1",
      teaser: ["들려주는 문장을 정확히 받아쓰는 문항입니다.", "철자와 어순까지 단어 단위로 채점됩니다."],
      preview: [
        "지시문: 들려주는 문장을 정확히 받아쓰세요.",
        "음성 스크립트: \"Please submit your application before the end of business on Friday.\"",
        "채점은 철자와 어순을 포함한 단어 단위로 이루어집니다.",
        "자주 틀리는 지점: \"before the end of business\"라는 관용 표현을 임의로 줄여 쓰는 경우가 많습니다.",
        "해설: 처음 들을 때는 전체 의미만 파악하고, 두 번째부터 구간을 나눠 받아 적는 순서로 연습하세요.",
        "관사(the)와 전치사(on)는 특히 놓치기 쉬운 요소이므로 마지막에 한 번 더 확인합니다.",
      ],
      testName: "PTE",
    },
  ],
  CELPIP: [
    {
      title: "듣기 숫자 정정 1 (시각이 바뀌는 문장)",
      teaser: ["처음 들린 숫자가 아니라", "'바뀐' 시각을 최종 정답으로 요구하는 유형입니다."],
      preview: [
        "지시문: 대화를 듣고 바뀐 일정을 정확히 파악하세요.",
        "음성 스크립트(발췌): \"The meeting was originally at 2 p.m., but it's been moved to 3:30 due to a scheduling conflict.\"",
        "이 유형은 처음 언급된 시각이 아니라 바뀐 시각을 최종 정답으로 요구합니다.",
        "자주 틀리는 지점: 처음 들린 숫자(2 p.m.)를 그대로 답으로 고르는 경우가 많습니다.",
        "해설: \"but\", \"moved to\", \"instead\" 같은 전환 표현이 나오면 그 뒤의 숫자가 최종 정답일 가능성이 높습니다.",
        "연습 순서: 숫자만 먼저 받아 적기 → 전환 표현 표시하기 → 최종 숫자 확정하기.",
      ],
      testName: "CELPIP",
    },
    {
      title: "이메일 쓰기 첫 문단 1",
      teaser: ["동네 소음 문제로 관리사무소에", "항의 이메일을 쓰는 첫 문단입니다."],
      preview: [
        "지시문: 동네 소음 문제로 관리사무소에 항의 이메일을 작성하세요.",
        "모범 첫 문단: \"I am writing to raise a concern about the ongoing noise from the unit above mine, which has continued for the past two weeks.\"",
        "채점 포인트: 문제 상황과 기간을 한 문장 안에 명확히 제시했는지를 봅니다.",
        "자주 틀리는 지점: 인사말만 쓰고 정작 문제 상황을 구체적으로 밝히지 않는 경우가 많습니다.",
        "해설: 첫 문단은 \"무엇이, 언제부터, 얼마나\" 문제인지 세 가지를 한 번에 담는 것이 CLB 점수에 유리합니다.",
      ],
      testName: "CELPIP",
    },
  ],
  OET: [
    oetLetterSample,
    {
      title: "말하기 역할극 한 줄",
      teaser: ["환자에게 검사 절차를 설명하는", "역할극 카드 예시입니다."],
      preview: [
        "지시문: 환자에게 검사 절차를 설명하는 상황의 역할극 카드 예시입니다.",
        "역할극 지시(발췌): \"Explain the purpose of the procedure and reassure the patient about any discomfort.\"",
        "채점 포인트: 의학 용어를 환자가 이해할 수 있는 표현으로 바꾸는 능력을 봅니다.",
        "해설: 전문 용어를 그대로 쓰기보다 \"이 검사는 ~을 확인하기 위한 것입니다\" 식으로 목적을 먼저 설명하는 순서가 자연스럽습니다.",
        "직군마다 역할극 상황이 달라지므로 실제 카드는 상담에서 직군에 맞춰 안내해드립니다.",
      ],
      testName: "OET",
    },
  ],
  EPTA: [
    {
      title: "복창 1줄",
      teaser: ["관제탑 교신을 들은 후", "그대로 복창하는 문항입니다."],
      preview: [
        "지시문: 관제탑 교신을 들은 후 그대로 복창하세요.",
        "음성 스크립트: \"Cleared to land runway two seven, wind two five zero at one two knots.\"",
        "채점 포인트: 활주로 번호와 풍향·풍속 숫자를 정확한 순서로 복창해야 합니다.",
        "자주 틀리는 지점: \"two seven\"과 \"two five zero\"처럼 숫자가 연이어 나올 때 순서가 바뀌는 경우가 많습니다.",
        "해설: 활주로 번호 → clearance 종류 → 풍향/풍속 순으로 구조를 미리 익혀두면 실수가 줄어듭니다.",
      ],
      testName: "EPTA",
    },
    {
      title: "지시 복창 1줄",
      teaser: ["고도와 주파수 지시를 들은 후", "동일한 표현으로 복창하는 문항입니다."],
      preview: [
        "지시문: 관제 지시를 들은 후 동일한 표현으로 복창하세요.",
        "음성 스크립트: \"Descend and maintain flight level two four zero, contact departure on one two three point four five.\"",
        "채점 포인트: 고도(two four zero)와 주파수(one two three point four five)를 숫자 단위까지 정확히 재현해야 합니다.",
        "해설: 고도 지시와 주파수 지시를 별도 블록으로 나눠 듣고, 블록 단위로 복창하는 연습이 효과적입니다.",
      ],
      testName: "EPTA",
    },
  ],
};

const exams = ["PTE", "CELPIP", "OET", "EPTA"] as const;

function SamplePreview({ sample }: { sample: Sample }) {
  return (
    <div className="card-hover">
      <p className="font-serif text-lg font-black" style={{ color: "var(--color-inkstrong)" }}>
        {sample.title}
      </p>
      <div className="mt-2 space-y-0.5">
        {sample.teaser.map((line) => (
          <p key={line} className="text-sm leading-relaxed text-ink/60">
            {line}
          </p>
        ))}
      </div>

      <div
        className="relative mt-4 max-h-64 overflow-y-auto border p-5"
        style={{ borderColor: "var(--color-line)", background: "var(--color-paper)" }}
      >
        <div className="space-y-3">
          {sample.preview.map((line, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink/75">
              {line}
            </p>
          ))}
        </div>
        <span
          className="pointer-events-none absolute bottom-2 right-3 text-[10px] font-bold tracking-[0.1em] text-ink/15"
        >
          C-BRIDGE
        </span>
      </div>

      <Link
        href={`/consultation?test=${encodeURIComponent(sample.testName)}`}
        className="btn-primary mt-4 inline-block rounded-sm px-5 py-2.5 text-xs font-bold tracking-[0.08em]"
      >
        이 호흡으로 구성 상담
      </Link>
    </div>
  );
}

export default function ResourcesTabs() {
  const [active, setActive] = useState<(typeof exams)[number]>("PTE");
  const [oetTrack, setOetTrack] = useState("Nursing");

  const samples =
    active === "OET"
      ? [
          oetTrack === "Nursing" ? oetLetterSample : null,
          samplesByExam.OET[1],
        ]
      : samplesByExam[active];

  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-3 border-b" style={{ borderColor: "var(--color-line)" }}>
        {exams.map((exam) => (
          <button
            key={exam}
            onClick={() => setActive(exam)}
            className="pb-4 font-serif text-2xl font-black transition-colors md:text-3xl"
            style={{
              color: active === exam ? "var(--color-inkstrong)" : "rgba(42,46,36,0.3)",
              borderBottom: active === exam ? "2px solid var(--color-pistachio)" : "2px solid transparent",
              marginBottom: "-1px",
            }}
          >
            {exam}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-ink/50">
        <Link href="/consultation" className="underline decoration-ink/25 underline-offset-4 hover:text-ink/70">
          나머지 샘플은 상담
        </Link>
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div className="img-fade relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/workbook-open.jpg"
            alt="C-BRIDGE 문제집 속지 www.c-bridge.uk"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>

        <div key={active} className="tab-fade space-y-10">
          {active === "OET" && (
            <div>
              <p className="text-xs font-bold tracking-[0.1em] text-ink/40">직군 선택</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {oetTracks.map((t) => (
                  <button
                    key={t.en}
                    onClick={() => setOetTrack(t.en)}
                    className="rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors"
                    style={
                      oetTrack === t.en
                        ? { borderColor: "var(--color-rust)", background: "var(--color-rust)", color: "var(--color-paper)" }
                        : { borderColor: "var(--color-line)", color: "rgba(42,46,36,0.7)" }
                    }
                  >
                    {t.ko}
                  </button>
                ))}
              </div>
            </div>
          )}

          {active === "OET" && oetTrack !== "Nursing" ? (
            <div>
              <p className="font-serif text-lg font-black" style={{ color: "var(--color-inkstrong)" }}>
                레터 첫 문장 (Nursing 기본)
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                다른 직군(Medicine · Pharmacy · Physiotherapy · Dentistry 등)의 레터 예시는
                상담에서 직군에 맞춰 안내해드립니다.
              </p>
              <Link
                href={`/consultation?test=${encodeURIComponent(`OET ${oetTrack}`)}`}
                className="btn-primary mt-4 inline-block rounded-sm px-5 py-2.5 text-xs font-bold tracking-[0.08em]"
              >
                이 호흡으로 구성 상담
              </Link>
            </div>
          ) : (
            samples[0] && <SamplePreview sample={samples[0]} />
          )}

          {samples[1] && <SamplePreview sample={samples[1]} />}
        </div>
      </div>
    </div>
  );
}
