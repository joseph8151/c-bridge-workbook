import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service | C-BRIDGE",
  description: "C-BRIDGE 이용약관",
};

export default function TermsPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em] text-purple">Company</p>
        <h1 className="mt-4 font-serif text-4xl font-black text-ink">Terms of Service</h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/70">
          <section>
            <h2 className="font-serif text-lg font-bold text-ink">1. 목적</h2>
            <p className="mt-2">
              본 약관은 {siteConfig.brandName}(이하 &quot;회사&quot;)가 제공하는 문제집 정보 제공 및
              상담 서비스 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을
              목적으로 합니다.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg font-bold text-ink">2. 서비스의 제공</h2>
            <p className="mt-2">
              회사는 홈페이지를 통해 문제집 정보 제공, 상담 신청, 구매 문의 접수 서비스를
              제공합니다. 현재 자동결제 시스템은 제공하지 않으며, 모든 구매는 상담을 통해
              안내됩니다.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg font-bold text-ink">3. 저작권</h2>
            <p className="mt-2">
              회사가 제작한 모든 문제집 콘텐츠에 대한 저작권은 회사에 귀속되며, 무단 복제 및
              배포를 금지합니다.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-lg font-bold text-ink">4. 문의</h2>
            <p className="mt-2">
              본 약관에 대한 문의는 {siteConfig.email} 또는 {siteConfig.phone}로 연락 바랍니다.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
