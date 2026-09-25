import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function HomeHero() {
  return (
    <section className="w-full bg-paper">
      <div
        className="mx-auto max-w-[1400px] border"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="grid md:min-h-[82vh] md:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 md:px-14 md:py-16 lg:px-16">
            <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
              C-BRIDGE
            </p>
            <h1
              className="hero-fade-up mt-6 break-keep font-serif text-[48px] font-black leading-[1.1] md:text-[56px] lg:text-[64px]"
              style={{ color: "var(--color-inkstrong)" }}
            >
              직군과 나라가 다르면
              <br />
              같은 영어가 아닙니다.
            </h1>
            <p className="mt-6 max-w-md break-keep text-base leading-relaxed md:text-[17px]" style={{ color: "var(--color-inkstrong)", opacity: 0.75 }}>
              문제 · 해설 · 모의. 200페이지 또는 300페이지.
            </p>
            <div className="hero-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "80ms" }}>
              <Link href="/finder" className="btn-primary rounded-sm px-7 text-sm font-bold">
                내 시험 교재 찾기
              </Link>
              <Link
                href="/consultation"
                className="inline-flex min-h-[48px] items-center border px-7 text-sm font-bold"
                style={{ borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }}
              >
                교재 상담하기
              </Link>
            </div>
            <p className="mt-5 text-sm" style={{ color: "var(--color-inkstrong)", opacity: 0.55 }}>
              {siteConfig.weekendNotice}
            </p>
          </div>

          <div
            className="hero-fade-up relative hidden min-h-[420px] border-t md:block md:min-h-0 md:border-l md:border-t-0"
            style={{ borderColor: "var(--color-line)", animationDelay: "80ms" }}
          >
            <Image
              src="/images/hero-mark.jpg"
              alt="C-BRIDGE 브랜드 마크"
              fill
              sizes="(max-width: 768px) 0px, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
