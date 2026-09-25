import HomeHero from "@/components/home/HomeHero";
import ExamCards from "@/components/home/ExamCards";
import Approach from "@/components/home/Approach";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import FitCheck from "@/components/home/FitCheck";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/home/Process";
import ExamNotes from "@/components/home/ExamNotes";
import WhyCBridge from "@/components/WhyCBridge";
import PriceLine from "@/components/home/PriceLine";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ExamCards />
      <Approach />
      <ProcessTimeline />
      <FitCheck />
      <CaseStudies />
      <Process />
      <ExamNotes />
      <WhyCBridge />
      <PriceLine />
    </>
  );
}
