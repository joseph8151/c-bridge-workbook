// MCAT / DAT / OAT / GRE Quant / GMAT Quant의 과학·수학 문항은 생성 이후 별도 검수가
// 필요합니다. 이 인터페이스로 구조를 고정해두면, validationStatus로 검수 대기 항목을
// 전부 찾아 확인·수정할 수 있습니다. 사이트에는 노출되지 않는 콘텐츠 운영용 메타데이터입니다.
export interface ScienceReviewedQuestion {
  subject: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  prompt: string;
  correctAnswer: string;
  explanation: string;
  formulaUsed?: string;
  sourceCheckRequired: boolean;
  validationStatus: "unverified" | "verified" | "flagged";
}
