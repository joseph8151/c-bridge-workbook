"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  EssayQuestion,
  FillInBlanksQuestion,
  McqMultiQuestion,
  McqSingleQuestion,
  MockQuestion,
  MockTest,
  ReorderParagraphsQuestion,
} from "@/lib/mockTestData/types";
import type { AnswersMap, AnswerValue } from "@/lib/mockTestData/scoring";

function isAnswered(question: MockQuestion, value: AnswerValue | undefined): boolean {
  if (!value) return false;
  if (value.type === "mcq-single") return value.optionId.length > 0;
  if (value.type === "mcq-multi") return value.optionIds.length > 0;
  if (value.type === "reorder-paragraphs") return value.order.length > 0;
  if (value.type === "fill-in-blanks") {
    const q = question as FillInBlanksQuestion;
    return Object.keys(q.blankOptions).every((k) => !!value.answers[k]);
  }
  if (value.type === "essay") return value.text.trim().length > 0;
  return false;
}

function formatTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function TestRunner({
  test,
  attemptId,
  initialAnswers,
  startedAt,
}: {
  test: MockTest;
  attemptId: string;
  initialAnswers: AnswersMap;
  startedAt: number;
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<"question" | "review">("question");
  const [answers, setAnswers] = useState<AnswersMap>(initialAnswers);
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deadline = useMemo(() => startedAt * 1000 + test.totalTimeMinutes * 60_000, [startedAt, test.totalTimeMinutes]);
  const [remainingMs, setRemainingMs] = useState(() => deadline - Date.now());
  const autoSubmittedRef = useRef(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRenderRef = useRef(true);

  // Always-current refs so the timer's interval callback (captured once at
  // mount) never submits stale answers/state from the first render.
  const answersRef = useRef(answers);
  const submittingRef = useRef(submitting);
  useEffect(() => {
    answersRef.current = answers;
    submittingRef.current = submitting;
  });

  const question = test.questions[index];
  const isLast = index === test.questions.length - 1;
  const answeredCount = test.questions.filter((q) => isAnswered(q, answers[q.id])).length;

  async function submitWithAnswers(answersToSubmit: AnswersMap) {
    if (submittingRef.current) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/mock-test/attempt/${attemptId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: answersToSubmit }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? "제출 중 문제가 발생했습니다.");
        setSubmitting(false);
        return;
      }
      router.push(`/mock-test-centre/results/${attemptId}`);
    } catch {
      setError("네트워크 오류가 발생했습니다.");
      setSubmitting(false);
    }
  }

  function handleSubmit() {
    return submitWithAnswers(answers);
  }

  // Countdown timer — ticks every second, auto-submits once at zero using
  // the latest answers (via ref, not this effect's one-time closure).
  useEffect(() => {
    const tick = () => {
      const left = deadline - Date.now();
      setRemainingMs(left);
      if (left <= 0 && !autoSubmittedRef.current) {
        autoSubmittedRef.current = true;
        submitWithAnswers(answersRef.current);
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);

  // Debounced autosave whenever answers change (skips the very first render).
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      fetch(`/api/mock-test/attempt/${attemptId}/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      }).catch(() => {});
    }, 800);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [answers, attemptId]);

  function setAnswer(questionId: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function toggleFlag(questionId: string) {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) next.delete(questionId);
      else next.add(questionId);
      return next;
    });
  }

  function goTo(i: number) {
    setIndex(i);
    setMode("question");
  }

  const timeLow = remainingMs < 60_000;

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-xs font-bold tracking-[0.1em] text-ink/50">
        <span>{mode === "review" ? "REVIEW" : question.section === "reading" ? "READING" : "WRITING"}</span>
        <span className={timeLow ? "text-ink" : undefined}>남은 시간 {formatTime(remainingMs)}</span>
      </div>

      <div className="mt-2 h-1 w-full bg-ink/10">
        <div
          className="h-1 bg-[var(--color-rust)] transition-all"
          style={{ width: `${(answeredCount / test.questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {test.questions.map((q, i) => {
          const answered = isAnswered(q, answers[q.id]);
          const isFlagged = flagged.has(q.id);
          const isCurrent = mode === "question" && i === index;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => goTo(i)}
              className={`relative flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-colors ${
                isCurrent
                  ? "border-[var(--color-rust)] bg-[var(--color-rust)] text-white"
                  : answered
                    ? "border-[var(--color-rust)] text-ink"
                    : "border-ink/20 text-ink/50"
              }`}
              aria-label={`${i + 1}번 문항으로 이동`}
            >
              {i + 1}
              {isFlagged && (
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[var(--color-rust)]" />
              )}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => setMode("review")}
          className={`ml-1 flex h-8 items-center rounded-full border px-3 text-xs font-bold transition-colors ${
            mode === "review" ? "border-[var(--color-rust)] text-ink" : "border-ink/20 text-ink/50 hover:text-ink"
          }`}
        >
          전체 검토
        </button>
      </div>

      {mode === "review" ? (
        <ReviewScreen
          test={test}
          answers={answers}
          flagged={flagged}
          onJump={goTo}
          onSubmit={handleSubmit}
          submitting={submitting}
        />
      ) : (
        <div>
          <div className="mt-6 flex items-start justify-between gap-3">
            <div>
              <h2 className="font-serif text-xl font-bold text-ink">{question.title}</h2>
              <p className="mt-1 text-sm text-ink/60">{question.instructions}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleFlag(question.id)}
              className={`shrink-0 rounded-sm border px-3 py-1.5 text-xs font-bold transition-colors ${
                flagged.has(question.id)
                  ? "border-[var(--color-rust)] text-[var(--color-rust)]"
                  : "border-ink/20 text-ink/50 hover:text-ink"
              }`}
            >
              {flagged.has(question.id) ? "🚩 표시됨" : "나중에 다시 보기"}
            </button>
          </div>

          <div className="mt-6">
            <QuestionBody question={question} value={answers[question.id]} onChange={(v) => setAnswer(question.id, v)} />
          </div>

          {error && <p className="mt-4 text-sm text-chinese">{error}</p>}

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="btn-text text-sm disabled:opacity-30"
            >
              이전
            </button>

            {isLast ? (
              <button
                type="button"
                onClick={() => setMode("review")}
                className="btn-primary rounded-sm px-6 py-3 text-sm font-bold tracking-[0.04em]"
              >
                검토하기
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIndex((i) => Math.min(test.questions.length - 1, i + 1))}
                className="btn-primary rounded-sm px-6 py-3 text-sm font-bold tracking-[0.04em]"
              >
                다음
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ReviewScreen({
  test,
  answers,
  flagged,
  onJump,
  onSubmit,
  submitting,
}: {
  test: MockTest;
  answers: AnswersMap;
  flagged: Set<string>;
  onJump: (i: number) => void;
  onSubmit: () => void;
  submitting: boolean;
}) {
  const unanswered = test.questions.filter((q) => !isAnswered(q, answers[q.id])).length;

  return (
    <div className="mt-6">
      <h2 className="font-serif text-xl font-bold text-ink">제출 전 검토</h2>
      <p className="mt-1 text-sm text-ink/60">
        {unanswered > 0 ? `아직 ${unanswered}개 문항에 답하지 않았습니다.` : "모든 문항에 답했습니다."} 문항을 클릭하면
        바로 이동합니다.
      </p>

      <div className="mt-5 divide-y divide-ink/10 border border-ink/15 bg-white">
        {test.questions.map((q, i) => {
          const answered = isAnswered(q, answers[q.id]);
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onJump(i)}
              className="flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-paper"
            >
              <span className="text-sm text-ink/80">
                <span className="mr-2 font-bold text-ink/40">{i + 1}.</span>
                {q.title}
                {flagged.has(q.id) && <span className="ml-2">🚩</span>}
              </span>
              <span className={`shrink-0 text-xs font-bold ${answered ? "text-bronze" : "text-ink/40"}`}>
                {answered ? "답변 완료" : "미응답"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="btn-primary rounded-sm px-6 py-3 text-sm font-bold tracking-[0.04em] disabled:opacity-60"
        >
          {submitting ? "제출 중" : "최종 제출하기"}
        </button>
      </div>
    </div>
  );
}

function QuestionBody({
  question,
  value,
  onChange,
}: {
  question: MockQuestion;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  switch (question.type) {
    case "mcq-single":
      return <McqSingleBody question={question} value={value} onChange={onChange} />;
    case "mcq-multi":
      return <McqMultiBody question={question} value={value} onChange={onChange} />;
    case "reorder-paragraphs":
      return <ReorderBody question={question} value={value} onChange={onChange} />;
    case "fill-in-blanks":
      return <FillBlanksBody question={question} value={value} onChange={onChange} />;
    case "essay":
      return <EssayBody question={question} value={value} onChange={onChange} />;
    default:
      return null;
  }
}

function McqSingleBody({
  question,
  value,
  onChange,
}: {
  question: McqSingleQuestion;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  const selected = value?.type === "mcq-single" ? value.optionId : undefined;
  return (
    <div>
      <p className="border border-ink/15 bg-paper p-4 text-sm leading-relaxed text-ink/80">{question.passage}</p>
      <p className="mt-4 text-sm font-semibold text-ink">{question.question}</p>
      <div className="mt-3 space-y-2">
        {question.options.map((opt) => (
          <label
            key={opt.id}
            className="flex cursor-pointer items-start gap-3 border border-ink/15 p-3 text-sm text-ink/80 has-[:checked]:border-[var(--color-rust)] has-[:checked]:text-ink"
          >
            <input
              type="radio"
              name={question.id}
              className="mt-0.5"
              checked={selected === opt.id}
              onChange={() => onChange({ type: "mcq-single", optionId: opt.id })}
            />
            {opt.text}
          </label>
        ))}
      </div>
    </div>
  );
}

function McqMultiBody({
  question,
  value,
  onChange,
}: {
  question: McqMultiQuestion;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  const selected = value?.type === "mcq-multi" ? value.optionIds : [];

  function toggle(optId: string) {
    const next = selected.includes(optId) ? selected.filter((id) => id !== optId) : [...selected, optId];
    onChange({ type: "mcq-multi", optionIds: next });
  }

  return (
    <div>
      <p className="border border-ink/15 bg-paper p-4 text-sm leading-relaxed text-ink/80">{question.passage}</p>
      <p className="mt-4 text-sm font-semibold text-ink">{question.question}</p>
      <div className="mt-3 space-y-2">
        {question.options.map((opt) => (
          <label
            key={opt.id}
            className="flex cursor-pointer items-start gap-3 border border-ink/15 p-3 text-sm text-ink/80 has-[:checked]:border-[var(--color-rust)] has-[:checked]:text-ink"
          >
            <input
              type="checkbox"
              className="mt-0.5"
              checked={selected.includes(opt.id)}
              onChange={() => toggle(opt.id)}
            />
            {opt.text}
          </label>
        ))}
      </div>
    </div>
  );
}

function ReorderBody({
  question,
  value,
  onChange,
}: {
  question: ReorderParagraphsQuestion;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  const order = value?.type === "reorder-paragraphs" ? value.order : question.shuffledParagraphs.map((p) => p.id);
  const byId = useMemo(
    () => new Map(question.shuffledParagraphs.map((p) => [p.id, p.text])),
    [question.shuffledParagraphs]
  );

  function move(from: number, to: number) {
    if (to < 0 || to >= order.length) return;
    const next = [...order];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onChange({ type: "reorder-paragraphs", order: next });
  }

  return (
    <div className="space-y-2">
      {order.map((id, i) => (
        <div key={id} className="flex items-start gap-3 border border-ink/15 bg-paper p-3 text-sm text-ink/80">
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={() => move(i, i - 1)}
              disabled={i === 0}
              className="text-xs text-ink/50 disabled:opacity-30"
            >
              ▲
            </button>
            <button
              type="button"
              onClick={() => move(i, i + 1)}
              disabled={i === order.length - 1}
              className="text-xs text-ink/50 disabled:opacity-30"
            >
              ▼
            </button>
          </div>
          <p>{byId.get(id)}</p>
        </div>
      ))}
    </div>
  );
}

function FillBlanksBody({
  question,
  value,
  onChange,
}: {
  question: FillInBlanksQuestion;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  const answers = value?.type === "fill-in-blanks" ? value.answers : {};

  function setBlank(key: string, v: string) {
    onChange({ type: "fill-in-blanks", answers: { ...answers, [key]: v } });
  }

  const parts = question.textWithBlanks.split(/(\{\{\d+\}\})/g);

  return (
    <p className="border border-ink/15 bg-paper p-4 text-sm leading-relaxed text-ink/80">
      {parts.map((part, i) => {
        const match = part.match(/^\{\{(\d+)\}\}$/);
        if (!match) return <span key={i}>{part}</span>;
        const key = match[1];
        return (
          <select
            key={i}
            value={answers[key] ?? ""}
            onChange={(e) => setBlank(key, e.target.value)}
            className="mx-1 border border-ink/30 bg-white px-2 py-1 text-sm text-ink"
          >
            <option value="" disabled>
              선택
            </option>
            {question.blankOptions[key]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      })}
    </p>
  );
}

function EssayBody({
  question,
  value,
  onChange,
}: {
  question: EssayQuestion;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  const text = value?.type === "essay" ? value.text : "";
  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      {question.passage && (
        <p className="border border-ink/15 bg-paper p-4 text-sm leading-relaxed text-ink/80">{question.passage}</p>
      )}
      <textarea
        rows={6}
        value={text}
        onChange={(e) => onChange({ type: "essay", text: e.target.value })}
        className="mt-4 w-full border border-ink/20 bg-white p-3 text-sm text-ink focus:border-[var(--color-rust)] focus:outline-none"
        placeholder={`${question.minWords}~${question.maxWords} 단어로 작성하세요.`}
      />
      <p className="mt-1 text-xs text-ink/45">
        단어 수: {wordCount} (권장 {question.minWords}~{question.maxWords})
      </p>
    </div>
  );
}
