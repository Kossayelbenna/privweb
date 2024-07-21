"use client";
import React from "react";
import Marquee from "./magicui/marquee";
import { useLocale, useTranslator } from "@/lib/use-translator";


const images = [
  {
    src: "/images/carosel/P (1).JPEG",
    description: {
      fr: "Univers Multijoueur : Une aventure sans limites",
      en: "Multiplayer Universe: Limitless Adventure"
    },
  },
  {
    src: "/images/carosel/P (2).png",
    description: {
      fr: "Lobby Légendaire : Préparez-vous au combat",
      en: "Legendary Lobby: Gear Up for Battle"
    },
  },
  {
    src: "/images/carosel/P (3).png",
    description: {
      fr: "Folie Cartoon : La bataille commence !",
      en: "Cartoon Mayhem: Let the Battle Begin!"
    },
  },
  {
    src: "/images/carosel/P (4).png",
    description: {
      fr: "Duel des Héros : Choisissez votre champion",
      en: "Hero Showdown: Choose Your Champion"
    },
  },
  {
    src: "/images/carosel/P (5).png",
    description: {
      fr: "Sports Extrêmes : Défiez les limites",
      en: "Extreme Sports: Push Your Limits"
    },
  },
  {
    src: "/images/carosel/P (6).png",
    description: {
      fr: "Équipe de Choc : La victoire en vue",
      en: "Dream Team: Victory in Sight"
    },
  },
  {
    src: "/images/carosel/P (7).png",
    description: {
      fr: "Danse Royale : Bougez au rythme",
      en: "Royal Dance-Off: Move to the Beat"
    },
  },
  {
    src: "/images/carosel/P (8).png",
    description: {
      fr: "Anime Arena : L'ultime confrontation",
      en: "Anime Arena: The Ultimate Showdown"
    },
  },
  {
    src: "/images/carosel/P (9).png",
    description: {
      fr: "Soccer Suprême : Marquez l'histoire",
      en: "Supreme Soccer: Make Your Mark"
    },
  },
  {
    src: "/images/carosel/P (10).png",
    description: {
      fr: "Ninja Nocturne : Dans l'ombre du dragon",
      en: "Night Ninja: In the Dragon's Shadow"
    },
  },
  {
    src: "/images/carosel/P (11).png",
    description: {
      fr: "Baseball Pro : Frappez un coup de circuit",
      en: "Pro Baseball: Hit It Out of the Park"
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
