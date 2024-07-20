"use client";

import BgSVG from "@/components/bg-svg";
import Hero from "@/components/hero";
import HowToBuy from "@/components/howToBuy";
import LogoMarquee from "@/components/logomarquee";
import MarqueeGames from "@/components/MarqueeGames";
import Navbar from "@/components/navbar";
import TextImageSection from "@/components/pargraphText";
import Qna from "@/components/Qna";
import QnaSection from "@/components/QnaSection";
import RoadMap from "@/components/roadMap";
import TextImagesSection from "@/components/textImagesSection";
import Tokenomics from "@/components/tokenomics";
import { inter } from "@/fonts";
import { useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import React from "react";

function page() {
  const tr = useTranslator();
  return (
    <>
      {/* <BgSVG />
       */}
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      {/* 
      2 screen h div
      */}
      <Hero />
      <LogoMarquee />
      <TextImagesSection />
      <MarqueeGames />
      <Tokenomics />
      <RoadMap />
      <HowToBuy />
      <QnaSection />
      <div className="h-[50px]"></div>
    </>
  );
}

export default page;
