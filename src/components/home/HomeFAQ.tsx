import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import { siteFaqItems } from "@/lib/faqData";

export default function HomeFAQ() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <div className="mx-auto max-w-[680px]">
          <SectionHeader eyebrow="FAQ" align="center" />
          <div className="mt-8">
            <FAQ items={siteFaqItems} />
          </div>
        </div>
      </Container>
    </section>
  );
}
