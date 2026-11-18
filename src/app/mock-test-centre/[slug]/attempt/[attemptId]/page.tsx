import { redirect } from "next/navigation";
import Container from "@/components/Container";
import TestRunner from "@/components/mockTestCentre/TestRunner";
import { getCurrentUser } from "@/lib/auth/sessions";
import { getOwnedAttempt } from "@/lib/mockTestData/attempts";
import { getMockTest } from "@/lib/mockTestData/pteAcademic";

export default async function AttemptPage({
  params,
}: {
  params: Promise<{ slug: string; attemptId: string }>;
}) {
  const { slug, attemptId } = await params;

  const user = await getCurrentUser();
  if (!user) redirect("/mock-test-centre/login");

  const attempt = await getOwnedAttempt(attemptId, user.id);
  if (!attempt || attempt.testSlug !== slug) redirect("/mock-test-centre");
  if (attempt.status === "submitted") redirect(`/mock-test-centre/results/${attemptId}`);

  const test = getMockTest(slug);
  if (!test) redirect("/mock-test-centre");

  return (
    <section className="py-12 md:py-16" style={{ background: "var(--color-paper)" }}>
      <Container className="max-w-[720px]">
        <TestRunner test={test} attemptId={attempt.id} />
      </Container>
    </section>
  );
}
