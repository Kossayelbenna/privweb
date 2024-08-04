"use client";

import React from "react";
import dynamic from 'next/dynamic';

// Directly import Navbar, Hero, and BgSVG for immediate loading
import NewsTicker from '@/components/NewsTicker';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';



import BgSVG from '@/components/bg-svg';
import BlurIn from "@/components/magicui/animation-blurr";

// Lazy load other components
const HowToBuy = dynamic(() => import('@/components/howToBuy'), { ssr: false });
const LogoMarquee = dynamic(() => import('@/components/logomarquee'), { ssr: false });
const MarqueeGames = dynamic(() => import('@/components/MarqueeGames'), { ssr: false });
const TextImagesSection = dynamic(() => import('@/components/textImagesSection'), { ssr: false });
const Qna = dynamic(() => import('@/components/Qna'), { ssr: false });
const QnaSection = dynamic(() => import('@/components/QnaSection'), { ssr: false });
const RoadMap = dynamic(() => import('@/components/roadMap'), { ssr: false });
const Tokenomics = dynamic(() => import('@/components/tokenomics'), { ssr: false });
const Hero2 = dynamic(() => import('@/components/hero2'), { ssr: false });

import { inter } from "@/fonts";
import { useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";

const Page: React.FC = () => {
  const tr = useTranslator();
  return (
    <>
      
  <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full opacity-70 animate-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>

      <Navbar />
      <NewsTicker />
      <Hero />
      <Hero2 />
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
