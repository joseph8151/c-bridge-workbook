import HomeHero from "@/components/home/HomeHero";
import ExamCards from "@/components/home/ExamCards";
import Approach from "@/components/home/Approach";
import FitCheck from "@/components/home/FitCheck";
import Process from "@/components/home/Process";
import PriceLine from "@/components/home/PriceLine";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ExamCards />
      <Approach />
      <FitCheck />
      <Process />
      <PriceLine />
    </>
  );
}
