import { faqs } from "@/lib/faq";

const homeFaqQuestions = ["200P·300P는 어떻게 다른가요?", "구매 전에 내용을 확인할 수 있나요?", "주말에도 상담되나요?"];

export default function HomeFaq() {
  const items = homeFaqQuestions
    .map((q) => faqs.find((f) => f.q === q))
    .filter((f): f is (typeof faqs)[number] => f !== undefined);

  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[720px] px-5 md:px-10">
        <h2
          className="font-serif text-2xl font-black md:text-3xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          자주 묻는 질문
        </h2>
        <div className="mt-8">
          {items.map((f) => (
            <div key={f.q} className="border-t py-6" style={{ borderColor: "rgba(28,23,18,0.15)" }}>
              <p className="font-serif text-base font-bold" style={{ color: "var(--color-inkstrong)" }}>
                {f.q}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
