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
  <div className="relative overflow-hidden rounded-[25px] w-[455px] h-[675px] mt-16">
    <BorderBeam />
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default React.memo(Hero);