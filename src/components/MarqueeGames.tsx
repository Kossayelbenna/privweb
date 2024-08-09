"use client";

import React, { useMemo } from "react";
import dynamic from 'next/dynamic';
import { useLocale, useTranslator } from "@/lib/use-translator";

const Marquee = dynamic(() => import('./magicui/marquee'), {
  ssr: false,
});

const games = [
  {
    src: "/images/carosel/P-_1_.webp",
    title: {
      en: "Metaverse City Boundless Adventure",
      fr: "DogeMeta : Aventure Sans Limites"
    },
    description: {
      en: "Explore a vast multiplayer metaverse powered by blockchain. Own, trade, and build in this expansive virtual world.",
      fr: "Explorez un vaste métavers multijoueur propulsé par la blockchain. Possédez, échangez et construisez dans ce monde virtuel expansif."
    }
  },
 
  {
    src: "/images/carosel/bleu.jpg",
    title: {
      en: "SquadTactics",
      fr: "Tactiques CryptoSquad"
    },
    description: {
      en: "Assemble your team of unique NFT heroes and engage in strategic battles. Every victory enhances your characters' blockchain-stored stats.",
      fr: "Assemblez votre équipe de héros NFT uniques et engagez-vous dans des batailles stratégiques. Chaque victoire améliore les statistiques de vos personnages stockées sur la blockchain."
    }
  },
  {
    src: "/images/carosel/p-_8_.webp",
    title: {
      en: "Arena, Ultimate Showdown",
      fr: "Arène : Confrontation Ultime"
    },
    description: {
      en: "Enter the arena with your unique Doge fighter. Battle, earn, and upgrade your character with blockchain-verified achievements.",
      fr: "Entrez dans l'arène avec votre combattant Doge unique. Combattez, gagnez et améliorez votre personnage avec des réalisations vérifiées par blockchain."
    }
  },
  {
    src: "/images/carosel/P-_11_.webp",
    title: {
      en: "MetaTennis",
      fr: "CryptoServe : Tennis Blockchain"
    },
    description: {
      en: "Experience tennis like never before. Use NFT rackets and players, participate in decentralized tournaments with real crypto prizes.",
      fr: "Vivez le tennis comme jamais auparavant. Utilisez des raquettes et des joueurs NFT, participez à des tournois décentralisés avec de vrais prix en crypto."
    }
  }, {
    src: "/images/carosel/P (5).webp",
    title: {
      en: "StreetHoops Revolution",
      fr: "Révolution StreetHoops"
    },
    description: {
      en: "Assemble your dream team and dominate the courts! Customize players, compete in global tournaments, and trade star athletes in this next-gen sports experience where every decision impacts your team's legacy.",
      fr: "Assemblez votre équipe de rêve et dominez les terrains ! Personnalisez les joueurs, participez à des tournois mondiaux et échangez des athlètes stars dans cette expérience sportive de nouvelle génération où chaque décision impacte l'héritage de votre équipe."
    }
  }
  
  
];

const MarqueeGames: React.FC = () => {
  const locale = useLocale();
  const tr = useTranslator();

  const memoizedGames = useMemo(() => games.map(({ src, title, description }) => ({
    src,
    title: title[locale as keyof typeof title],
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
        {memoizedGames.map(({ src, title, description }) => (
          <div
            key={src}
            className="relative flex items-center justify-center w-[400px] h-[400px] md:w-[600px] md:h-[500px] rounded-[2rem] border border-gray-100/20 overflow-clip"
          >
            <img
              src={src}
              alt={title}
              className="w-full h-full absolute inset-0 object-cover hover:scale-110 transition-transform duration-300 ease-in-out rounded-md"
            />
            <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-md font-bold">
              Coming Soon
            </div>
            <div className="absolute bottom-2 left-2 right-2 rounded-xl flex flex-col justify-center items-center p-5 bg-black/80 backdrop-blur-lg">
              <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
              <p className="text-white text-sm text-center">
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