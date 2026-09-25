import Container from "@/components/Container";
import EditorialHeading from "@/components/EditorialHeading";

export default function Philosophy() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <EditorialHeading size="lg">
            같은 영어라도
            <br />
            시험은 전혀 다릅니다.
          </EditorialHeading>
          <div className="max-w-[650px] space-y-5 text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            <p className="break-keep">
              PTE에는 PTE의 문제 구조가 있고, OET에는 의료인의 언어가 있으며, CELPIP에는 캐나다
              영어 평가 방식이 있습니다.
            </p>
            <p className="break-keep" style={{ color: "var(--color-ink)" }}>
              C-BRIDGE는 시험 이름만 바꾼 문제집을 만들지 않습니다. 시험별 평가 구조와 응시 목적을
              기준으로 문제를 설계합니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
