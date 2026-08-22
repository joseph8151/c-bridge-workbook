import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | C-BRIDGE",
  description: "C-BRIDGE 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em] text-purple">Company</p>
        <h1 className="mt-4 font-serif text-4xl font-black text-ink">Privacy Policy</h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/70">
          <section>
            <h2 className="font-serif text-lg font-bold text-ink">1. 수집하는 개인정보 항목</h2>
            <p className="mt-2">
              상담 신청 시 이름, 연락처, 이메일, 준비 시험 정보, 목표/현재 점수, 문의 내용을
              수집합니다.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg font-bold text-ink">2. 개인정보의 이용 목적</h2>
            <p className="mt-2">
              수집된 정보는 상담 및 문제집 구매 안내 목적으로만 사용되며, 목적 외 용도로 사용되지
              않습니다.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg font-bold text-ink">3. 보유 및 이용 기간</h2>
            <p className="mt-2">
              상담이 완료된 개인정보는 관련 법령에 따른 보존 의무가 없는 한 지체 없이 파기합니다.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg font-bold text-ink">4. 문의</h2>
            <p className="mt-2">
              개인정보 관련 문의는 {siteConfig.email} 또는 {siteConfig.phone}로 연락 바랍니다.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
