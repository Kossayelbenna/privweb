"use client";

import React, { useMemo } from "react";
import Image from 'next/image';
import { useTranslator } from "@/lib/use-translator";
import { useMediaQuery } from 'usehooks-ts';
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CPU } from "@/components/cpu";
import BannerLeft from "@/components/bannerRight";
import BlurIn from "@/components/magicui/animation-blurr";
import './magicui/marquee';

interface IframeWrapperProps {
  children: React.ReactNode;
}

const IframeWrapper: React.FC<IframeWrapperProps> = ({ children }) => (
  <div className="relative overflow-hidden rounded-[25px] w-[440px] h-[679px] mt-16">
    <div className="relative z-10 w-full h-full">
      {children}
    </div>
  </div>
);


const Hero: React.FC = () => {
  const tr = useTranslator();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const featuresTop = useMemo(() => tr("features").slice(0, 3), [tr]);
  const featuresBottom = useMemo(() => tr("features").slice(3), [tr]);

  const floatingImages = [
    { src: "/images/avt-01.png", alt: "Floating Image 2", width: 220, height: 240, className: "absolute top-2/2 left-2/4 w-30 h-60 rounded-xl object-cover" },
    { src: "/images/de.png", alt: "Floating Image 3", width: 160, height: 160, className: "absolute bottom-16 right-10 w-40 h-40 rounded-xl object-cover" },
    { src: "/images/dfr.png", alt: "Floating Image 2", width: 220, height: 240, className: "absolute bottom-2 left-2/4 w-30 h-60 rounded-xl object-cover" },
    { src: "/images/drs.png", alt: "Floating Image 3", width: 160, height: 160, className: "absolute top-22 right-0 w-40 h-40 rounded-xl object-cover" },
    { src: "/images/des.png", alt: "Floating Image 3", width: 160, height: 160, className: "absolute top-22 left-0 w-40 h-40 rounded-xl object-cover" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-40">
      <div className="flex flex-col gap-4 items-center justify-center -mt-0">
        <div
          className={cn(
            "text-3xl md:text-6xl font-extrabold -mt-[10px]",
            "bg-clip-text text-transparent bg-gradient-to-br from-[#9b5de5] via-[#f15bb5] to-[#fee440]",
            "drop-shadow-md text-center"
          )}>
          {tr("title")[1]}
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-center max-w-2xl font-display mb-16">
          <span>{tr("title")[0]}</span>
        </h1>
        
      </div>

      <div className="relative w-full max-w-[1500px] mx-auto px-2 lg:px-0 ">
        <div className="hidden md:block absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-[700px]">
            {floatingImages.map((img, index) => (
              <Image key={index} {...img} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <div className="sticky top-0 h-fit ml-28 z-10" style={{ transform: 'scale(0.9)' }}>
            <BannerLeft />
          </div>
          <div className="flex flex-col items-center w-full z-0">
            <div className="flex justify-center items-center">  
              
            </div>
            <div className="flex justify-center space-x-6 -mb-8 z-10 relative">
              <a 
                href="/Layer%203/WhitePaper.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-purple-300 font-semibold text-lg transition duration-300 underline"
              >
                Whitepaper
              </a>
              <a 
                href="https://etherscan.io/token/0x0c5ae0f398e753b9e6b4949f86f6ac3accf20309" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-purple-300 font-semibold text-lg transition duration-300 underline"
              >
                Audit
              </a>
            </div>
            <IframeWrapper>
              <iframe
                className="w-full h-full rounded-[20px]"
                style={{ 
                  outline: 0, 
                  border: 0,
                  overflow: 'hidden'
                }}
                
                allow="clipboard-write"
                style={{ transform: 'scale(1)' }}
                src="https://pay.radom.com/presale/4f6ac522-e050-42c4-9393-eca9236bbd94"
                title="Presale iframe"
                scrolling="no"
              />
              </IframeWrapper>
              <div className="text-center mt-4 mx-auto max-w-[90%] space-y-3">
              <div className="text-sm md:text-base font-medium text-white bg-purple-800/20 border border-purple-500/50 rounded-lg p-3">
                <span className="text-purple-400 font-bold"> Over $20,000 raised |</span> Presale just started today! Join early investors before price increases!
              </div>
              <div className="text-xs md:text-sm text-gray-300 bg-gray-800/30 border border-gray-700/50 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center">
              <span className="mb-2 md:mb-0">
                $DOGE VISION is multichain: Buy using Solana, Ethereum, Base, BNB, BUSD, USDC, USDT, Polygon, Tron, and Bitcoin on different chains.
              </span>
              <a 
                href="#how-to-buy" 
                className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 flex items-center"
              >
                HOW TO BUY? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default React.memo(Hero);