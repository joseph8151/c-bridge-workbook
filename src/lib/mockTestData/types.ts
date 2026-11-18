export type QuestionType = "mcq-single" | "mcq-multi" | "reorder-paragraphs" | "fill-in-blanks" | "essay";

export interface McqOption {
  id: string;
  text: string;
}

interface BaseQuestion {
  id: string;
  type: QuestionType;
  section: "reading" | "writing";
  title: string;
  instructions: string;
}

export interface McqSingleQuestion extends BaseQuestion {
  type: "mcq-single";
  passage: string;
  question: string;
  options: McqOption[];
  correctOptionId: string;
}

export interface McqMultiQuestion extends BaseQuestion {
  type: "mcq-multi";
  passage: string;
  question: string;
  options: McqOption[];
  correctOptionIds: string[];
}

export interface ReorderParagraphsQuestion extends BaseQuestion {
  type: "reorder-paragraphs";
  shuffledParagraphs: { id: string; text: string }[];
  correctOrder: string[];
}

export interface FillInBlanksQuestion extends BaseQuestion {
  type: "fill-in-blanks";
  textWithBlanks: string; // e.g. "...a {{1}} relationship..."
  blankOptions: Record<string, string[]>;
  correctAnswers: Record<string, string>;
}

export interface EssayQuestion extends BaseQuestion {
  type: "essay";
  passage?: string;
  minWords: number;
  maxWords: number;
}

export type MockQuestion =
  | McqSingleQuestion
  | McqMultiQuestion
  | ReorderParagraphsQuestion
  | FillInBlanksQuestion
  | EssayQuestion;

export interface MockTest {
  slug: string;
  title: string;
  description: string;
  disclaimer: string;
  price: number; // KRW, shown publicly for this category
  questions: MockQuestion[];
}
