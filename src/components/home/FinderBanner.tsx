import Link from "next/link";

export default function FinderBanner() {
  return (
    <section className="bg-ivory pb-16 md:pb-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col items-center gap-6 rounded-[24px] border border-purple/10 bg-lavender/30 px-8 py-10 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-serif text-xl font-bold text-ink md:text-2xl">
              어떤 교재를 선택해야 할지 모르겠나요?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60 md:text-base">
              시험 종류, 현재 수준, 목표, 남은 기간을 선택하면 30초 안에 적합한 C-BRIDGE 교재를
              추천해드립니다. 로그인도, 결제도 필요 없습니다.
            </p>
          </div>
          <Link
            href="/finder"
            className="shrink-0 rounded-[14px] bg-purple px-8 py-4 text-sm font-bold tracking-[0.04em] text-ivory transition-colors hover:bg-plum"
          >
            무료 교재 추천 받기
          </Link>
        </div>
      </div>
    </section>
  );
}
