import Container from "@/components/Container";

const items = [
  { no: "01", title: "EXAM STRUCTURE", desc: "시험 구조를 기준으로 문제를 구성합니다." },
  { no: "02", title: "TARGET", desc: "목표 수준에 맞춘 난이도로 훈련합니다." },
  { no: "03", title: "FOCUS", desc: "Reading · Writing · Speaking 등 취약 영역에 집중합니다." },
  { no: "04", title: "FINAL", desc: "실전 모의와 시험 직전 Review로 마무리합니다." },
];

const lineOnDark = "rgba(246,244,238,0.16)";
const mutedOnDark = "rgba(246,244,238,0.65)";

const BORDER_CLASSES = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-t-0",
];

// [BRITISH GREEN REDESIGN — Step 3] 홈페이지 전체가 밝은 섹션만 이어지지 않도록,
// 가장 강한 메시지(미션 선언) 구간 하나를 다크 섹션으로 전환 — SectionHeader는
// 항상 ink-on-light 고정이라 여기서는 쓰지 않고 헤더를 직접 구성.
export default function WhyCBridge() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--bg-ink)" }} data-reveal>
      <Container>
        <p className="eyebrow" style={{ color: "var(--bg-accent)" }}>
          WHY C-BRIDGE
        </p>
        <h2
          className="mt-4 max-w-2xl break-keep font-medium leading-[1.3] tracking-[-0.03em]"
          style={{ color: "var(--bg-paper)", fontSize: "clamp(24px, 3.2vw, 32px)" }}
        >
          문제를 많이 주는 것이 목적이 아닙니다.
        </h2>
        <p className="mt-4 max-w-[650px] break-keep text-base leading-[1.7]" style={{ color: mutedOnDark }}>
          같은 시험을 준비해도 현재 수준, 목표 점수, 시험일까지 남은 기간, 취약 영역에 따라 필요한
          문제는 달라집니다. C-BRIDGE는 시험별 구조를 기준으로 필요한 영역을 선택하고 반복해서
          훈련할 수 있도록 구성합니다.
        </p>

        <div className="mt-12 grid border-y sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: lineOnDark }}>
          {items.map((item, i) => (
            <div key={item.no} className={`p-6 min-[361px]:p-8 ${BORDER_CLASSES[i]}`} style={{ borderColor: lineOnDark }}>
              <span className="text-2xl font-bold" style={{ color: "var(--bg-accent)" }}>
                {item.no}
              </span>
              <p className="mt-3 text-lg font-bold" style={{ color: "var(--bg-paper)" }}>
                {item.title}
              </p>
              <p className="mt-2 break-keep text-sm leading-relaxed" style={{ color: mutedOnDark }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
