import { useTranslator } from "@/lib/use-translator";
import React from "react";
import TextImageSection from "./pargraphText";
import { cn } from "@/lib/utils";
import { inter } from "@/fonts";
import OrbitingCircles from "./magicui/orbiting-circles";

function TextImagesSection() {
  const tr = useTranslator();
  return (
    <>
      <TextImageSection
        images={[
          "/images/carosel/P (5).png",
          "/images/carosel/P (11).png",
          "/images/carosel/P (6).png",
          "/images/carosel/P (3).png",
        ]}
        invert={false}
      >
        <div className="flex flex-col justify-center  gap-4 p-5" id="about">
          <div className="bg-white/10 w-fit py-2 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
            <span
              // text gradient text clip
              className="text-lg md:text-xl font-semibold text-balance"
              style={{
                background:
                  "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
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
          <p
            className={cn(
              "text-base md:text-lg leading-7 text-balance",
              inter.className
            )}
          >
            {tr("section1")("description").map((value, idx) => (
              <>
                <span key={idx} className="mt-2 block">
                  {value}
                </span>
                {idx != tr("section1")("description").length - 1 && <br />}
              </>
            ))}
          </p>
        </div>
      </TextImageSection>






      <TextImageSection
      className="mb-[-500px] sm:mb-[-300px]"
        override={() => (
          <div className="relative flex h-[500px] w-[500px] items-center justify-center overflow-hidden sm:-mt-24 -mt-40">
            <div className="absolute flex items-center justify-center w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="/images/shiba.png"
                alt=""
                className="absolute w-[100px] h-[100px]"
              />
            </div>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={80}
            >
              <img src="/images/coin_1.png" alt="" className="w-10 h-10" />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={80}
            >
              <img src="/images/coin_5.png" alt="" className="w-10 h-10" />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={140}
        duration={25}
        delay={0}
        reverse
      >
        <img src="/images/coin_3.png" alt="" className="w-16 h-16" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={140}
        duration={25}
        delay={12.5}
        reverse
      >
        <img src="/images/coin_4.png" alt="" className="w-16 h-16" />
      </OrbitingCircles>

      {/* Troisième cercle */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={200}
        duration={30}
        delay={0}
      >
        <img src="/images/coin_2.png" alt="" className="w-16 h-16" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={200}
        duration={30}
        delay={15}
      >
        <img src="/images/coin_4.png" alt="" className="w-16 h-16" />
      </OrbitingCircles>
    </div>
  )}
  
  invert={true}
>
      
        <div className="flex flex-col justify-center sm:mt-0 -mt-40  gap-4 p-5">
          <div className="bg-white/10 w-fit py-2 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
            <span
              // text gradient text clip
              className="text-lg md:text-xl font-semibold text-balance"
              style={{
                background:
                  "linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {tr("section2")("head")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            {tr("section2")("title")}
          </h2>
          <p
            className={cn(
              "text-base md:text-lg leading-7 text-balance",
              inter.className
            )}
          >
            {tr("section2")("description").map((value, idx) => (
              <>
                <span key={idx} className="mt-2 block">
                  {value}
                </span>
                {idx != tr("section1")("description").length - 1 && <br />}
              </>
            ))}
          </p>
        </div>
      </TextImageSection>
    </>
  );
}

export default TextImagesSection;
