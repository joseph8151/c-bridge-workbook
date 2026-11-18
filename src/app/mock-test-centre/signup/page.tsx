import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import AuthForm from "@/components/mockTestCentre/AuthForm";

export const metadata: Metadata = {
  title: "회원가입 | Mock Test Centre | C-BRIDGE",
  description: "C-BRIDGE Mock Test Centre 회원가입. 모의고사 응시 결과를 저장하고 이어서 확인할 수 있습니다.",
  alternates: { canonical: "/mock-test-centre/signup" },
};

export default function MockTestSignupPage() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container className="max-w-[480px]">
        <p className="eyebrow">MOCK TEST CENTRE</p>
        <h1 className="mt-4 break-keep font-serif text-3xl font-bold leading-tight text-ink md:text-4xl">
          회원가입
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          계정을 만들면 모의고사 응시 결과가 저장되어 나중에 다시 확인할 수 있습니다.
        </p>

        <div className="mt-8 border border-ink/15 bg-white p-6 min-[361px]:p-8">
          <AuthForm mode="signup" />
        </div>

        <p className="mt-5 text-center text-sm text-ink/60">
          이미 계정이 있으신가요?{" "}
          <Link href="/mock-test-centre/login" className="font-semibold text-ink underline">
            로그인
          </Link>
        </p>
      </Container>
    </section>
  );
}
