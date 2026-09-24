import HomeHero from "@/components/home/HomeHero";
import ExamCards from "@/components/home/ExamCards";
import DiffLine from "@/components/home/DiffLine";
import Approach from "@/components/home/Approach";
import Composition from "@/components/home/Composition";
import FitCheck from "@/components/home/FitCheck";
import Process from "@/components/home/Process";
import ExamNotes from "@/components/home/ExamNotes";
import PriceLine from "@/components/home/PriceLine";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ExamCards />
      <DiffLine />
      <Approach />
      <Composition />
      <FitCheck />
      <Process />
      <ExamNotes />
      <PriceLine />
    </>
  );
}
