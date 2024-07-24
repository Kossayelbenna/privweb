"use client";

import React, { useMemo } from "react";
import { useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CPU } from "@/components/cpu";
import BannerLeft from "@/components/bannerRight";
import './magicui/marquee';
import { ConnectWallet } from "@thirdweb-dev/react";
import BlurIn from "@/components/magicui/animation-blurr";
import { useMediaQuery } from 'usehooks-ts';
import Image from 'next/image';

const Hero: React.FC = () => {
  const tr = useTranslator();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const featuresTop = useMemo(() => tr("features").slice(0, 3), [tr]);
  const featuresBottom = useMemo(() => tr("features").slice(3), [tr]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-40">
      <div className="flex flex-col gap-4 items-center justify-center">
        <BlurIn
          className={cn(
            "text-3xl md:text-6xl font-extrabold -mt-[25px]",
            "bg-clip-text text-transparent bg-gradient-to-br from-[#9b5de5] via-[#f15bb5] to-[#fee440]",
            "drop-shadow-md"
          )}
          word={tr("title")[1]}
        />
        <h1 className="text-2xl md:text-4xl font-extrabold text-center max-w-2xl font-display mb-16">
          <span>{tr("title")[0]}</span>
        </h1>
      </div>

      <div className="relative w-full max-w-[1500px] mx-auto px-2 lg:px-0">
        <div className="hidden md:block absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-[700px]">
            <Image
              src="/images/avt-01.png"
              alt="Floating Image 2"
              width={220}
              height={240}
              className="absolute top-2/2 left-2/4 w-30 h-60 rounded-xl object-cover"
            />
            <Image
              src="/images/de.png"
              alt="Floating Image 3"
              width={160}
              height={160}
              className="absolute bottom-16 right-10 w-40 h-40 rounded-xl object-cover"
            />
            <Image
              src="/images/dfr.png"
              alt="Floating Image 2"
              width={220}
              height={240}
              className="absolute bottom-2 left-2/4 w-30 h-60 rounded-xl object-cover"
            />
            <Image
              src="/images/drs.png"
              alt="Floating Image 3"
              width={160}
              height={160}
              className="absolute top-22 right-0 w-40 h-40 rounded-xl object-cover"
            />
            <Image
              src="/images/des.png"
              alt="Floating Image 3"
              width={160}
              height={160}
              className="absolute top-22 left-0 w-40 h-40 rounded-xl object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <div className="sticky top-0 h-fit ml-28 z-10">
            <BannerLeft />
          </div>
          <div className="flex flex-col w-full scale-70 z-0">
            <div className="flex justify-center items-center">
              <div className="text-white text-3xl mb-4">Presale will start soon</div>
            </div>
            <iframe
              className="w-full h-[700px] mt-0"
              style={{ outline: 0, border: 0, transform: 'scale(1)' }}
              allow="clipboard-write"
              src="https://pay.radom.com/presale/806ea959-b589-4964-aa76-b5549a53ebcb"
              title="Presale iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default React.memo(Hero);