"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
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

export default function TestRunner({ test, attemptId }: { test: MockTest; attemptId: string }) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const question = test.questions[index];
  const isLast = index === test.questions.length - 1;

  function setAnswer(questionId: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/mock-test/attempt/${attemptId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
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

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-bold tracking-[0.1em] text-ink/50">
        <span>{question.section === "reading" ? "READING" : "WRITING"}</span>
        <span>
          {index + 1} / {test.questions.length}
        </span>
      </div>

      <div className="mt-2 h-1 w-full bg-ink/10">
        <div
          className="h-1 bg-[var(--color-rust)] transition-all"
          style={{ width: `${((index + 1) / test.questions.length) * 100}%` }}
        />
      </div>

      <h2 className="mt-6 font-serif text-xl font-bold text-ink">{question.title}</h2>
      <p className="mt-1 text-sm text-ink/60">{question.instructions}</p>

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
            onClick={handleSubmit}
            disabled={submitting}
            className="btn-primary rounded-sm px-6 py-3 text-sm font-bold tracking-[0.04em] disabled:opacity-60"
          >
            {submitting ? "제출 중" : "제출하기"}
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
