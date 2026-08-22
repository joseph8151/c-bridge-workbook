import SectionHeading from "../SectionHeading";
import FaqAccordion from "../FaqAccordion";

export default function FaqSection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <SectionHeading eyebrow="자주 묻는 질문" title="구매 전 궁금한 점." align="center" className="mx-auto" />
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
