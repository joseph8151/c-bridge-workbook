import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import StudyPlanViewer from "@/components/StudyPlanViewer";

export const metadata: Metadata = {
  title: "무료자료 | C-BRIDGE",
  description: "무료 학습 계획표, 오답노트, 단어 체크리스트, 시험 직전 체크리스트를 확인하세요.",
};

const checklistItems = [
  "신분증 및 수험표 확인",
  "시험 시간과 장소 재확인",
  "주요 주제·유형 최종 복습",
  "답변/답안 구조 다시 확인",
  "너무 완벽하게 외우려 하지 않기",
  "준비물(필기구, 마스크 등) 챙기기",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-purple/10 bg-lavender/20 py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-purple">C-BRIDGE 무료 학습자료</p>
          <h1 className="mt-3 font-serif text-4xl font-black text-ink md:text-5xl">
            시험 준비에 필요한 자료, 무료로 확인하세요.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/65">
            로그인도, 결제도 필요 없습니다. 학습 계획을 세우고, 체크리스트로 마무리하세요.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="무료 학습 계획표" title="시험까지 얼마나 남았나요?" align="center" className="mx-auto" />
          <div className="mt-10">
            <StudyPlanViewer />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="무료 오답노트 · 단어장" title="반복 학습을 위한 기록 도구." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[20px] border border-purple/10 bg-ivory p-7">
              <h3 className="font-serif text-lg font-bold text-ink">오답노트</h3>
              <p className="mt-2 text-sm text-ink/60">틀린 문제를 체계적으로 정리하는 양식입니다.</p>
              <div className="mt-5 space-y-2 text-xs text-ink/60">
                <div className="grid grid-cols-3 gap-2 rounded-[10px] bg-lavender/30 px-3 py-2 font-bold">
                  <span>문제 유형</span>
                  <span>틀린 이유</span>
                  <span>복습 포인트</span>
                </div>
                <div className="grid grid-cols-3 gap-2 px-3 py-2 text-ink/40">
                  <span>예: 추론 문제</span>
                  <span>예: 근거 문장 오독</span>
                  <span>예: 키워드 재확인</span>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-purple/10 bg-ivory p-7">
              <h3 className="font-serif text-lg font-bold text-ink">단어 체크리스트</h3>
              <p className="mt-2 text-sm text-ink/60">암기 여부를 체크하며 반복할 수 있는 어휘 목록입니다.</p>
              <div className="mt-5 space-y-2">
                {["빈출 어휘 1", "빈출 어휘 2", "빈출 어휘 3"].map((w) => (
                  <label key={w} className="flex items-center gap-2.5 text-sm text-ink/60">
                    <input type="checkbox" className="h-4 w-4 accent-purple" />
                    {w} — 뜻 / 예문
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="시험 직전 체크리스트" title="시험 전날, 이것만은 확인하세요." />
          <div className="mt-8 rounded-[20px] border border-purple/10 bg-lavender/10 p-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {checklistItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-plum py-14 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 text-center md:px-10">
          <p className="font-serif text-2xl font-bold text-ivory md:text-3xl">
            어떤 교재가 필요한지도 무료로 추천받아 보세요.
          </p>
          <Link
            href="/finder"
            className="rounded-[14px] bg-gold px-8 py-3.5 text-sm font-bold tracking-[0.04em] text-plum transition-transform hover:-translate-y-0.5"
          >
            무료 교재 추천 받기
          </Link>
        </div>
      </section>
    </>
  );
}
