import { AddOn } from "../addOns";
import { celpipPteAddOns } from "./celpipPte";
import { healthcareAddOns } from "./healthcare";
import { corporateAddOns } from "./corporate";
import { graduate1AddOns } from "./graduate1";
import { graduate2AddOns } from "./graduate2";
import { dataCertAddOns } from "./dataCert";

// 각 시험군 fork가 작성한 데이터 파일을 여기서만 합칩니다. 개별 데이터 파일은
// 서로 다른 testSlug만 다루므로 병합 시 충돌이 없습니다.
export const allAddOns: AddOn[] = [
  ...celpipPteAddOns,
  ...healthcareAddOns,
  ...corporateAddOns,
  ...graduate1AddOns,
  ...graduate2AddOns,
  ...dataCertAddOns,
];

export function getAddOnsForTest(testSlug: string): AddOn[] {
  return allAddOns.filter((a) => a.testSlug === testSlug);
}

export function getAddOn(testSlug: string, addOnId: string): AddOn | undefined {
  return allAddOns.find((a) => a.testSlug === testSlug && a.id === addOnId);
}
