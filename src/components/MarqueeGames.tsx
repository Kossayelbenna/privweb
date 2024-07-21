"use client";
import React from "react";
import Marquee from "./magicui/marquee";
import { useLocale, useTranslator } from "@/lib/use-translator";


const images = [
  {
    src: "/images/carosel/P (1).png",
    description: {
      fr: "Description en français",
      en: "Description in English",
    },
  },
  {
    src: "/images/carosel/P (2).png",
    description: {
      fr: "Deuxième description en français",
      en: "Second description in English",
    },
  },
  {
    src: "/images/carosel/P (3).png",
    description: {
      fr: "Troisième description en français",
      en: "Third description in English",
    },
  },
  {
    src: "/images/carosel/P (4).png",
    description: {
      fr: "Quatrième description en français",
      en: "Fourth description in English",
    },
  },
  {
    src: "/images/carosel/P (5).png",
    description: {
      fr: "Cinquième description en français",
      en: "Fifth description in English",
    },
  },
  {
    src: "/images/carosel/P (6).png",
    description: {
      fr: "Sixième description en français",
      en: "Sixth description in English",
    },
  },
  {
    src: "/images/carosel/P (7).png",
    description: {
      fr: "Septième description en français",
      en: "Seventh description in English",
    },
  },
  {
    src: "/images/carosel/P (8).png",
    description: {
      fr: "Huitième description en français",
      en: "Eighth description in English",
    },
  },
  {
    src: "/images/carosel/P (9).png",
    description: {
      fr: "Neuvième description en français",
      en: "Ninth description in English",
    },
  },
  {
    src: "/images/carosel/P (10).png",
    description: {
      fr: "Dixième description en français",
      en: "Tenth description in English",
    },
  },
  {
    src: "/images/carosel/P (11).png",
    description: {
      fr: "Onzième description en français",
      en: "Eleventh description in English",
    },
  },
  {
    src: "/images/carosel/P (12).png",
    description: {
      fr: "Douzième description en français",
      en: "Twelfth description in English",
    },
  },
  {
    src: "/images/carosel/P (13).png",
    description: {
      fr: "Treizième description en français",
      en: "Thirteenth description in English",
    },
  },
  {
    src: "/images/carosel/P (14).png",
    description: {
      fr: "Quatorzième description en français",
      en: "Fourteenth description in English",
    },
  },
  {
    src: "/images/carosel/P (15).png",
    description: {
      fr: "Quinzième description en français",
      en: "Fifteenth description in English",
    },
  },
  {
    src: "/images/carosel/P (16).png",
    description: {
      fr: "Seizième description en français",
      en: "Sixteenth description in English",
    },
  },
  {
    src: "/images/carosel/P (17).png",
    description: {
      fr: "Dix-septième description en français",
      en: "Seventeenth description in English",
    },
  },
  {
    src: "/images/carosel/P (18).png",
    description: {
      fr: "Dix-huitième description en français",
      en: "Eighteenth description in English",
    },
  },
  {
    src: "/images/carosel/P (19).png",
    description: {
      fr: "Dix-neuvième description en français",
      en: "Nineteenth description in English",
    },
  },
];

function MarqueeGames() {
  const locale = useLocale();
  const tr = useTranslator();
  return (
    <div className="py-10 pt-40 ">
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h1
          className="text-5xl font-bold text-white text-center "
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          {tr("marqueeGamesTitle")}
          
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4 mt-4 mb-8">
          <h5 className="text-center text-lg md:text-xl font-bold leading-relaxed"> 
            {tr("description1")} 
          </h5>
      </div>
      <Marquee
        pauseOnHover
        className="[--duration:50s] bg-primary backdrop-blur-xl border border-gray-100/20 p-2 gap-20 transform "
      >
        {images.map(({ src, description }) => (
          <div
            key={src}


            //image taille !!!!!!!!!!!!!!!!!!!!

            
            className="relative flex items-center justify-center w-[400px] h-[400px] md:w-[600px] md:h-[500px] rounded-[2rem] border border-gray-100/20 overflow-clip"
          >
            <img
              src={src}
              alt={(description as any)[locale as any]}
              className="w-full h-full absolute inset-0 object-cover hover:scale-110 transition-transform duration-300 ease-in-out rounded-md"
            />
            <div className="absolute bottom-2 left-2 right-2 rounded-xl flex justify-center items-center p-5 bg-white/10 backdrop-blur-lg">
              <p className="text-white text-md font-semibold">
                {(description as any)[locale as any]}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeGames;
