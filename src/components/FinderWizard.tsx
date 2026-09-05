"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { tests, Test, groupMeta, getLevelOptions } from "@/lib/tests";
import { tierMeta, getTierPrice } from "@/lib/products";
import { recommendTier } from "@/lib/productDetail";

const goalOptions = [
  "시험 처음 합격하기",
  "한 단계 점수 올리기",
  "중상위 점수",
  "고득점",
  "취업 제출용",
  "승진·사내평가",
  "유학·이민",
  "실전 문제를 많이 풀고 싶음",
];

const timeframeOptions = ["2주 이내", "2~4주", "1~2개월", "2~3개월", "3개월 이상"];

const dailyTimeOptions = ["20분 이하", "30분", "1시간", "1~2시간", "집중적으로 준비 가능"];

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export default function FinderWizard() {
  const [step, setStep] = useState<Step>(1);
  const [query, setQuery] = useState("");
  const [test, setTest] = useState<Test | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [timeframe, setTimeframe] = useState<string | null>(null);
  const [dailyTime, setDailyTime] = useState<string | null>(null);

  const filteredTests = useMemo(() => {
    if (!query.trim()) return tests;
    const q = query.trim().toLowerCase();
    return tests.filter((t) => t.name.toLowerCase().includes(q));
  }, [query]);

  const recommendation = useMemo(() => {
    if (!level || !goal || !timeframe) return null;
    return recommendTier({ level, goal, timeframe, dailyTime: dailyTime ?? "" });
  }, [level, goal, timeframe, dailyTime]);

  function reset() {
    setStep(1);
    setQuery("");
    setTest(null);
    setLevel(null);
    setGoal(null);
    setTimeframe(null);
    setDailyTime(null);
  }

  return (
    <div className="mx-auto max-w-2xl rounded-[24px] border border-purple/10 bg-white/70 p-6 md:p-10">
      {step < 6 && (
        <p className="text-xs font-bold tracking-[0.14em] text-purple/60">STEP {step} OF 5</p>
      )}

      {step === 1 && (
        <div className="animate-fade-up">
          <p className="mt-3 font-serif text-2xl font-bold text-ink">어떤 시험을 준비하시나요?</p>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="시험명을 검색하세요. 예: TSC, SJPT, FLEX"
            className="mt-5 w-full rounded-[14px] border border-purple/20 bg-ivory px-4 py-3 text-sm focus:border-purple focus:outline-none"
          />
          <div className="mt-4 max-h-72 space-y-4 overflow-y-auto pr-1">
            {Object.values(groupMeta).map((g) => {
              const inGroup = filteredTests.filter((t) => t.group === g.id);
              if (inGroup.length === 0) return null;
              return (
                <div key={g.id}>
                  <p className="text-[10px] font-bold tracking-[0.1em] text-ink/40">{g.navLabel}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {inGroup.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTest(t);
                          setLevel(null);
                          setStep(2);
                        }}
                        className="rounded-full border border-purple/20 bg-lavender/20 px-3.5 py-1.5 text-xs font-bold text-purple transition-colors hover:bg-purple hover:text-ivory"
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
            {filteredTests.length === 0 && (
              <p className="text-sm text-ink/50">검색 결과가 없습니다. 상담을 통해 문의해주세요.</p>
            )}
          </div>
        </div>
      )}

      {step === 2 && test && (
        <div className="animate-fade-up">
          <p className="mt-3 font-serif text-2xl font-bold text-ink">
            {test.name}, 현재 수준은 어느 정도인가요?
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {getLevelOptions(test).map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setLevel(opt);
                  setStep(3);
                }}
                className="rounded-[14px] border border-purple/20 bg-lavender/20 py-4 text-sm font-bold text-purple transition-colors hover:bg-purple hover:text-ivory"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-up">
          <p className="mt-3 font-serif text-2xl font-bold text-ink">
            이번 시험에서 무엇을 목표로 하시나요?
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {goalOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setGoal(opt);
                  setStep(4);
                }}
                className="rounded-[14px] border border-purple/20 bg-lavender/20 py-4 text-sm font-bold text-purple transition-colors hover:bg-purple hover:text-ivory"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-fade-up">
          <p className="mt-3 font-serif text-2xl font-bold text-ink">시험까지 얼마나 남았나요?</p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {timeframeOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setTimeframe(opt);
                  setStep(5);
                }}
                className="rounded-[14px] border border-purple/20 bg-lavender/20 py-4 text-sm font-bold text-purple transition-colors hover:bg-purple hover:text-ivory"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="animate-fade-up">
          <p className="mt-3 font-serif text-2xl font-bold text-ink">하루 공부 가능한 시간은?</p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {dailyTimeOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setDailyTime(opt);
                  setStep(6);
                }}
                className="rounded-[14px] border border-purple/20 bg-lavender/20 py-4 text-sm font-bold text-purple transition-colors hover:bg-purple hover:text-ivory"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 6 && test && recommendation && (
        <div className="animate-fade-up">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold tracking-[0.14em] text-purple/60">
              당신에게 추천하는 교재
            </p>
            <button onClick={reset} className="text-xs font-bold text-purple hover:underline">
              처음부터 다시
            </button>
          </div>

          <p className="mt-3 font-serif text-3xl font-black text-ink">
            {test.name} {tierMeta[recommendation.tier].label} 패키지
          </p>
          <p className="mt-1 text-sm font-semibold text-gold">가장 적합한 선택입니다.</p>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-[14px] bg-lavender/20 py-3">
              <p className="text-[10px] font-bold text-ink/40">현재 수준</p>
              <p className="mt-1 text-sm font-bold text-ink">{level}</p>
            </div>
            <div className="rounded-[14px] bg-lavender/20 py-3">
              <p className="text-[10px] font-bold text-ink/40">목표</p>
              <p className="mt-1 text-sm font-bold text-ink">{goal}</p>
            </div>
            <div className="rounded-[14px] bg-lavender/20 py-3">
              <p className="text-[10px] font-bold text-ink/40">시험까지</p>
              <p className="mt-1 text-sm font-bold text-ink">{timeframe}</p>
            </div>
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.1em] text-ink/40">추천 이유</p>
          <ul className="mt-3 space-y-2">
            {recommendation.reasons.map((r) => (
              <li key={r} className="flex gap-2.5 text-sm text-ink/70">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-[20px] border border-purple/15 bg-white/70 p-6">
            <div className="flex items-baseline justify-between">
              <p className="font-serif text-2xl font-black text-ink">
                {tierMeta[recommendation.tier].pages}페이지
              </p>
              <p className="font-serif text-2xl font-black text-purple">
                {getTierPrice(test.id, recommendation.tier).toLocaleString()}원
              </p>
            </div>
            <div className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {tierMeta[recommendation.tier].includes.map((inc) => (
                <p key={inc} className="text-xs text-ink/60">
                  · {inc}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/books/${test.slug}`}
              className="rounded-[14px] bg-purple px-7 py-3.5 text-sm font-bold tracking-[0.04em] text-ivory transition-colors hover:bg-plum"
            >
              이 교재 자세히 보기
            </Link>
            <Link
              href={`/books/${test.slug}`}
              className="rounded-[14px] border border-purple/25 px-7 py-3.5 text-sm font-bold tracking-[0.04em] text-purple transition-colors hover:bg-lavender"
            >
              다른 분량 비교하기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
