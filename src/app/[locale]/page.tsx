"use client";

import React from "react";
import dynamic from 'next/dynamic';

// Directly import Navbar, Hero, and BgSVG for immediate loading
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import BgSVG from '@/components/bg-svg';

// Lazy load other components
const HowToBuy = dynamic(() => import('@/components/howToBuy'), { ssr: false });
const LogoMarquee = dynamic(() => import('@/components/logomarquee'), { ssr: false });
const MarqueeGames = dynamic(() => import('@/components/MarqueeGames'), { ssr: false });
const TextImagesSection = dynamic(() => import('@/components/textImagesSection'), { ssr: false });
const Qna = dynamic(() => import('@/components/Qna'), { ssr: false });
const QnaSection = dynamic(() => import('@/components/QnaSection'), { ssr: false });
const RoadMap = dynamic(() => import('@/components/roadMap'), { ssr: false });
const Tokenomics = dynamic(() => import('@/components/tokenomics'), { ssr: false });

import { inter } from "@/fonts";
import { useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";

const Page: React.FC = () => {
  const tr = useTranslator();
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <TextImagesSection />
      <MarqueeGames />
      <Tokenomics />
      <RoadMap />
      <HowToBuy />
      <QnaSection />
    </>
  );
}

export default Page;
