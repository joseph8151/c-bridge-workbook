import HomeHero from "@/components/home/HomeHero";
import ExamCards from "@/components/home/ExamCards";
import PaperIntro from "@/components/home/PaperIntro";
import WhatIncluded from "@/components/home/WhatIncluded";
import PriceLine from "@/components/home/PriceLine";
import ConsultBlock from "@/components/home/ConsultBlock";
import HomeFaq from "@/components/home/HomeFaq";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ExamCards />
      <PaperIntro />
      <WhatIncluded />
      <PriceLine />
      <ConsultBlock />
      <HomeFaq />
    </>
  );
}
