import React from "react";
import { BorderBeam } from "./magicui/border-beam";
import { useLocale, useTranslator } from "@/lib/use-translator";
import dynamic from 'next/dynamic';


const steps = [
  {
    title: { en: "THE BIG BANG", fr: "LE BIG BANG" },
    description: {
      en: `- Website Goes Live
- Social Channels Are Born
- Start Game Development
- Layer 3 blockchain development
- Presale Begins`,
      fr: `- Le site web est lancé
- Naissance des canaux sociaux
- Début du développement du jeu
- Développement de la blockchain Layer 3
- Début de la prévente`,
    },
  },
  {
    title: { en: "DEVELOPMENT", fr: "DÉVELOPPEMENT" },
    description: {
      en: `- Continue Game Development
- Establish Strategic Partnerships
- Initial Marketing Campaign
- Continue DOGEVISION blockchain development`,
      fr: `- Poursuite du développement du jeu
- Établissement de partenariats stratégiques
- Campagne marketing initiale
- Poursuite du développement de la blockchain DOGEVISION`,
    },
  },
  {
    title: { en: "LAUNCHPAD", fr: "PLATEFORME DE LANCEMENT" },
    description: {
      en: `- Launch rare NFT Collection
- Release First Web3 Game
- Expand Community Outreach
- Big giveaways for the community`,
      fr: `- Lancement de la collection NFT rare
- Sortie du premier jeu Web3
- Expansion de la sensibilisation communautaire
- Grands cadeaux pour la communauté`,
    },
  },
  {
    title: { en: "EXPANSION", fr: "EXPANSION" },
    description: {
      en: `- Develop Additional Games
- Launch Decentralized Streaming Platform
- Implement Multichain Token
- 1Million$ Marketing Campaign`,
      fr: `- Développement de jeux supplémentaires
- Lancement de la plateforme de streaming décentralisée
- Implémentation du token multichain
- Campagne marketing d'1 million de dollars`,
    },
  },
  {
    title: { en: "REWARDS", fr: "RÉCOMPENSES" },
    description: {
      en: `- Big Giveaways and Contests
- Give the presale people a rare NFT $$
- Expand NFT Marketplace`,
      fr: `- Grands cadeaux et concours
- Offrir aux participants de la prévente un NFT rare $$
- Expansion du marché NFT`,
    },
  },
  {
    title: { en: "GLOBAL IMPACT", fr: "IMPACT GLOBAL" },
    description: {
      en: `- Major Marketing Push
- Strategic Global Partnerships
- Continuous Ecosystem Development and Upgrades`,
      fr: `- Importante campagne marketing
- Partenariats stratégiques mondiaux
- Développement et mises à niveau continus de l'écosystème`,
    },
  },
];

function RoadMap() {
  const RoadMap = dynamic(() => import('./roadMap'), {
    ssr: false,
  });
  
  const locale = useLocale();
  const tr = useTranslator();
  return (
    <div
      className="pt-10 md:pt-20 max-w-[1200px] mx-auto px-2 lg:px-0"
      id="roadmap"
    >
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h3
          className="text-4xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          {tr("roadmapTitle")}
        </h3>
      </div>
      <div
        className="w-full grid relative scale-100 md:scale-100"
        style={{ gridTemplateColumns: "1fr 8px 1fr" }}
      >
        <div>
          {steps.map((step, index) => {
            const even = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative flex items-center justify-center min-h-[80px]"
              >
                {even && (
                  <>
                    <div className="absolute right-[-4px] top-1/2 w-1/2 h-[2px] bg-white/100 transform translate-y-[-50%]"></div>
                    {/* circle  */}
                    <div className="absolute right-[-12px] top-1/2 w-6 h-6 bg-white/100 rounded-full transform translate-y-[-50%]"></div>
                    {/* line */}
                    <div className="relative flex flex-col items-start p-5 min-h-[80px] max-w-[350px] bg-black   rounded-lg shadow-md backdrop-blur-md ease-in-out">
                      <BorderBeam />
                      <div className="absolute -top-3 action-btn w-fit py-1 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
                        Phase {index + 1}
                      </div>

                     
                      <h4 className="text-white text-lg font-bold">
                        {step.title[locale]}
                      </h4>
                      <pre className="text-white text-sm font-light whitespace-pre-line break-words">
                        {step.description[locale]}
                      </pre>


                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div
          style={{
            minHeight: steps.length * 100,
          }}
          className="w-2 bg-white/10 rounded-lg h-full"
        ></div>
        <div>
          {steps.map((step, index) => {
            const odd = index % 2 !== 0;
            return (
              <div
                key={index}
                className="relative flex items-center justify-center min-h-[80px]"
              >
                {odd && (
                  <>
                    <div className="absolute left-[-4px] top-1/2 w-1/2 h-[2px] bg-white/100 transform translate-y-[-50%]"></div>
                    {/* circle  */}
                    <div className="absolute left-[-12px] top-1/2 w-6 h-6 bg-white/100 rounded-full transform translate-y-[-50%]"></div>
                    {/* line */}
                    <div className="flex flex-col items-start p-5 min-h-[80px] max-w-[350px] bg-black  relative rounded-lg shadow-md backdrop-blur-md ease-in-out">
                      <BorderBeam />
                      <div className="absolute -top-3 action-btn w-fit py-1 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
                        Phase {index + 1}
                        </div>

                     
                          <h4 className="text-white text-lg font-bold">
                            {step.title[locale]}
                          </h4>
                          <pre className="text-white text-sm font-light whitespace-pre-line break-words">
                            {step.description[locale]}
                          </pre>


                          </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
