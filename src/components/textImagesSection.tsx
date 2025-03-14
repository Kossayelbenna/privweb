import React, { useMemo } from "react";
import { useTranslator } from "@/lib/use-translator";
import dynamic from 'next/dynamic';
import { cn } from "@/lib/utils";
import { inter } from "@/fonts";

const TextImageSection = dynamic(() => import("./pargraphText"), { ssr: false });
const OrbitingCircles = dynamic(() => import("./magicui/orbiting-circles"), { ssr: false });

const TextImagesSection: React.FC = React.memo(() => {
  const tr = useTranslator();

  const images = useMemo(() => [
    "/images/carosel/blue.webp",
    "/images/carosel/p-_8_.webp",
    "/images/carosel/P-_9_.webp",
    "/images/carosel/P (6).webp",
  ], []);

  const Section1Content = useMemo(() => (
    <div className="flex flex-col justify-center gap-4 p-5" id="about">
      <div className="bg-white/10 w-fit py-2 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
        <span
          className="text-lg md:text-xl font-semibold text-balance"
          style={{
            background: "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {tr("section1")("head")}
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-balance">
        {tr("section1")("title")}
      </h2>
      <div className={cn("text-base md:text-lg leading-7 text-balance -mb-16", inter.className)}>
        {tr("section1")("description").map((item, idx) => {
          if (typeof item === 'string') {
            return (
              <p key={idx} className="mt-2 block leading-relaxed">
                {item}
              </p>
            );
          } else {
            return (
              <p key={idx} className={item.style}>
                {item.text}
              </p>
            );
          }
        })}
      </div>
    </div>
  ), [tr]);

  const Section2Content = useMemo(() => (
    <div className="flex flex-col justify-center sm:mt-0 -mt-40 gap-4 p-5 md:mb-64 -mb-32">
      <div className="bg-white/10 w-fit py-2 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
        <span
          className="text-lg md:text-xl font-semibold text-balance"
          style={{
            background: "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {tr("section2")("head")}
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-balance leading-[1.2] md:leading-[1.2]">
        {tr("section2")("title")}
      </h2>
      <div className={cn("text-base md:text-lg leading-7 text-balance", inter.className)}>
        {tr("section2")("description").map((item, idx) => {
          if (typeof item === 'string') {
            return (
              <p key={idx} className="mt-2 block leading-relaxed">
                {item}
              </p>
            );
          } else {
            return (
              <p key={idx} className={item.style}>
                {item.text}
              </p>
            );
          }
        })}
      </div>
    </div>
  ), [tr]);

  const OrbitingContent = useMemo(() => (
    <div className="relative flex items-center justify-center overflow-hidden h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] scale-[1.17] sm:scale-150 md:scale-200">
      <div className="absolute flex items-center justify-center w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/images/shiba.png" alt="" className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />
      </div>
      {[
        { src: "/images/bitcoin-4976783-4159449.png", radius: 60, smRadius: 76, duration: 20, delay: 20 },
        { src: "/images/polygon-4976786-4159452.webp", radius: 60, smRadius: 76, duration: 20, delay: 10 },
        { src: "/images/solana-4976792-4159458.png", radius: 105, smRadius: 133, duration: 25, delay: 0, reverse: true },
        { src: "/images/cosmos-4976793-4159459.png", radius: 105, smRadius: 133, duration: 25, delay: 12.5, reverse: true },
        { src: "/images/ethereum-9855399-8000714.webp", radius: 150, smRadius: 190, duration: 30, delay: 0 },
        { src: "/images/cardano-4976784-4159450.png", radius: 150, smRadius: 190, duration: 30, delay: 15 },
      ].map((circle, index) => (
        <OrbitingCircles
          key={index}
          className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px] border-none bg-transparent"
          radius={circle.radius}
          smRadius={circle.smRadius}
          duration={circle.duration}
          delay={circle.delay}
          reverse={circle.reverse}
        >
          <img src={circle.src} alt="" className="w-full h-full" />
        </OrbitingCircles>
      ))}
    </div>
  ), []);

  return (
    <>
      <TextImageSection images={images} invert={false}>
        {Section1Content}
      </TextImageSection>
      <TextImageSection className="mb-[-300px] sm:mb-[-300px] mt-32 " override={() => OrbitingContent} invert={true}>
        {Section2Content}
      </TextImageSection>
    </>
  );
});

TextImagesSection.displayName = 'TextImagesSection';
export default TextImagesSection;