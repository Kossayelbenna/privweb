
"use client";

import React, { useMemo } from "react";
import dynamic from 'next/dynamic';
import { useLocale, useTranslator } from "@/lib/use-translator";

const Marquee = dynamic(() => import('./magicui/marquee'), {
  ssr: false,
});

const images = [
  {
    src: "/images/carosel/P-_1_.webp",
    description: {
      fr: "Univers Multijoueur : Une aventure sans limites",
      en: "Multiplayer Universe: Limitless Adventure"
    },
  },
  {
    src: "/images/carosel/P (2) (1).webp",
    description: {
      fr: "Lobby Légendaire : Préparez-vous au combat",
      en: "Legendary Lobby: Gear Up for Battle"
    },
  },
  {
    src: "/images/carosel/P-_3_.webp",
    description: {
      fr: "Folie Cartoon : La bataille commence !",
      en: "Cartoon Mayhem: Let the Battle Begin!"
    },
  },
  {
    src: "/images/carosel/p 4.webp",
    description: {
      fr: "Duel des Héros : Choisissez votre champion",
      en: "Fights of the galaxy"
    },
  },
  {
    src: "/images/carosel/P (5).webp",
    description: {
      fr: "Sports Extrêmes : Défiez les limites",
      en: "Full min Basketball , More than just a game"
    },
  },
  {
    src: "/images/carosel/P (6).webp",
    description: {
      fr: "Équipe de Choc : La victoire en vue",
      en: "Dream Team: Victory in Sight"
    },
  },
 
  {
    src: "/images/carosel/p-_8_.webp",
    description: {
      fr: "Anime Arena : L'ultime confrontation",
      en: "Anime Arena: The Ultimate Showdown"
    },
  },
  {
    src: "/images/carosel/P-_9_.webp",
    description: {
      fr: "Soccer Suprême : Marquez l'histoire",
      en: "Gear up for the BATTLE"
    },
  },
  {
    src: "/images/carosel/P-_11_.webp",
    description: {
      fr: "Ninja Nocturne : Dans l'ombre du dragon",
      en: "Night Ninja: In the Dragon's Shadow"
    },
  },
  {
    src: "/images/carosel/pp-_2_.webp",
    description: {
      fr: "Baseball Pro : Frappez un coup de circuit",
      en: "Pro Baseball: Hit It Out of the Park"
    },
  },
  
];

const MarqueeGames: React.FC = () => {
  const locale = useLocale();
  const tr = useTranslator();

  const memoizedImages = useMemo(() => images.map(({ src, description }) => ({
    src,
    description: description[locale as keyof typeof description]
  })), [locale]);

  const memoizedTitle = useMemo(() => tr("marqueeGamesTitle"), [tr]);
  const memoizedDescription = useMemo(() => tr("description1"), [tr]);

  return (
    <div className="py-10 pt-40">
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h1
          className="text-5xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          {memoizedTitle}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4 mt-4 mb-8">
        <h5 className="text-center text-lg md:text-xl font-bold leading-relaxed"> 
          {memoizedDescription} 
        </h5>
      </div>
      <Marquee
        pauseOnHover
        className="[--duration:50s] bg-primary backdrop-blur-xl border border-gray-100/20 p-2 gap-20 transform"
      >
        {memoizedImages.map(({ src, description }) => (
          <div
            key={src}
            className="relative flex items-center justify-center w-[400px] h-[400px] md:w-[600px] md:h-[500px] rounded-[2rem] border border-gray-100/20 overflow-clip"
          >
            <img
              src={src}
              alt={description}
              className="w-full h-full absolute inset-0 object-cover hover:scale-110 transition-transform duration-300 ease-in-out rounded-md"
            />
            <div className="absolute bottom-2 left-2 right-2 rounded-xl flex justify-center items-center p-5 bg-white/10 backdrop-blur-lg">
              <p className="text-white text-md font-semibold">
                {description}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default React.memo(MarqueeGames);
