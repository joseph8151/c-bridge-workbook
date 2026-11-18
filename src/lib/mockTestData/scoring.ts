import type { MockQuestion, MockTest } from "./types";

export interface QuestionResult {
  questionId: string;
  type: MockQuestion["type"];
  title: string;
  autoScored: boolean;
  correct: boolean | null; // null for ungraded (essay)
  pointsEarned: number;
  pointsPossible: number;
}

export interface ScoreSummary {
  totalScore: number;
  maxScore: number;
  results: QuestionResult[];
}

export type AnswerValue =
  | { type: "mcq-single"; optionId: string }
  | { type: "mcq-multi"; optionIds: string[] }
  | { type: "reorder-paragraphs"; order: string[] }
  | { type: "fill-in-blanks"; answers: Record<string, string> }
  | { type: "essay"; text: string };

export type AnswersMap = Record<string, AnswerValue>;

export function scoreAttempt(test: MockTest, answers: AnswersMap): ScoreSummary {
  const results: QuestionResult[] = [];
  let totalScore = 0;
  let maxScore = 0;

  for (const q of test.questions) {
    const answer = answers[q.id];

    if (q.type === "essay") {
      results.push({
        questionId: q.id,
        type: q.type,
        title: q.title,
        autoScored: false,
        correct: null,
        pointsEarned: 0,
        pointsPossible: 0,
      });
      continue;
    }

    maxScore += 1;
    let correct = false;

    if (q.type === "mcq-single" && answer?.type === "mcq-single") {
      correct = answer.optionId === q.correctOptionId;
    } else if (q.type === "mcq-multi" && answer?.type === "mcq-multi") {
      const submitted = [...answer.optionIds].sort();
      const expected = [...q.correctOptionIds].sort();
      correct = submitted.length === expected.length && submitted.every((v, i) => v === expected[i]);
    } else if (q.type === "reorder-paragraphs" && answer?.type === "reorder-paragraphs") {
      correct =
        answer.order.length === q.correctOrder.length &&
        answer.order.every((v, i) => v === q.correctOrder[i]);
    } else if (q.type === "fill-in-blanks" && answer?.type === "fill-in-blanks") {
      const keys = Object.keys(q.correctAnswers);
      correct = keys.every((k) => answer.answers[k] === q.correctAnswers[k]);
    }

    totalScore += correct ? 1 : 0;
    results.push({
      questionId: q.id,
      type: q.type,
      title: q.title,
      autoScored: true,
      correct,
      pointsEarned: correct ? 1 : 0,
      pointsPossible: 1,
    });
  }

  return { totalScore, maxScore, results };
}
