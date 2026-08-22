import { qualityPoints } from "@/lib/qualityContent";

export default function QualityFirst() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-gold">QUALITY FIRST</p>
          <h2 className="mt-5 break-keep font-serif text-3xl font-black leading-[1.3] text-ink sm:text-4xl md:text-[2.75rem] text-balance">
            문제 수보다 중요한 것은,
            <br />
            어떤 문제를 푸느냐입니다.
          </h2>
          <p className="mx-auto mt-6 max-w-xl break-keep text-base leading-relaxed text-ink/65 md:text-lg">
            C-BRIDGE는 단순한 문제 생성이 아니라 시험별 출제 구조, 빈출 유형, 난이도 흐름, 함정
            포인트, 문제 해결 방식까지 분석하여 교재를 제작합니다.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-[24px] border border-purple/10 bg-purple/10 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPoints.map((point) => (
            <div key={point} className="bg-ivory p-7">
              <span className="block h-1 w-8 rounded-full bg-gold" />
              <p className="mt-4 break-keep text-sm font-semibold leading-relaxed text-ink/80">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
