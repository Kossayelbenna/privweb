

  import React, { useMemo } from "react";
  import { BorderBeam } from "./magicui/border-beam";
  import { useLocale, useTranslator } from "@/lib/use-translator";
  
  const steps = [
    {
      title: { en: "THE BIG BANG", fr: "LE BIG BANG" },
      timeline: { en: "Q3-Q4 2024", fr: "T3-T4 2024" },
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
      timeline: { en: "Q1-Q2 2025", fr: "T1-T2 2025" },
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
      title: { en: "ALPHA LAUNCH", fr: "LANCEMENT ALPHA" },
      timeline: { en: "Q3-Q4 2025", fr: "T3-T4 2025" },
      description: {
        en: `- Release Alpha Version of First Web3 Game
  - Launch Exclusive NFT Collection
  - Deploy Layer 3 Testnet
  - Expand Community Outreach`,
        fr: `- Sortie de la version alpha du premier jeu Web3
  - Lancement de la collection NFT exclusive
  - Déploiement du testnet Layer 3
  - Expansion de la sensibilisation communautaire`,
      },
    },
    {
      title: { en: "BETA ROLLOUT", fr: "DÉPLOIEMENT BÊTA" },
      timeline: { en: "Q1-Q2 2026", fr: "T1-T2 2026" },
      description: {
        en: `- Launch Beta Decentralized Streaming Platform
  - Release Layer 3 Beta Chain
  - Implement Cross-Chain Features
  - Kickstart Developer Program`,
        fr: `- Lancement de la plateforme de streaming décentralisée bêta
  - Sortie de la chaîne bêta Layer 3
  - Implémentation des fonctionnalités inter-chaînes
  - Lancement du programme pour développeurs`,
      },
    },
    {
      title: { en: "ECOSYSTEM EXPANSION", fr: "EXPANSION DE L'ÉCOSYSTÈME" },
      timeline: { en: "Q3-Q4 2026", fr: "T3-T4 2026" },
      description: {
        en: `- Full Launch of Layer 3 Mainnet
  - Release Additional Web3 Games
  - Expand NFT Marketplace Features
  - Implement Comprehensive Reward System`,
        fr: `- Lancement complet du réseau principal Layer 3
  - Sortie de jeux Web3 supplémentaires
  - Expansion des fonctionnalités du marché NFT
  - Mise en place d'un système de récompense complet`,
      },
    },
    {
      title: { en: "MASS ADOPTION", fr: "ADOPTION MASSIVE" },
      timeline: { en: "Q1-Q2 2027", fr: "T1-T2 2027" },
      description: {
        en: `- Major Marketing Push
  - Launch Decentralized Governance
  - Integrate AI and VR Technologies
  - Establish Global Strategic Partnerships`,
        fr: `- Campagne marketing majeure
  - Lancement de la gouvernance décentralisée
  - Intégration des technologies IA et VR
  - Établissement de partenariats stratégiques mondiaux`,
      },
    },
    {
      title: { en: "INNOVATION SURGE", fr: "VAGUE D'INNOVATION" },
      timeline: { en: "Q3-Q4 2027", fr: "T3-T4 2027" },
      description: {
        en: `- Implement Advanced Blockchain Features
  - Launch Ecosystem Grant Program
  - Explore Real-World dApp Integrations
  - Host Global Hackathons and Events`,
        fr: `- Implémentation de fonctionnalités blockchain avancées
  - Lancement du programme de subventions pour l'écosystème
  - Exploration d'intégrations dApp dans le monde réel
  - Organisation de hackathons et d'événements mondiaux`,
      },
    },
    {
      title: { en: "DOGE DOMINATION", fr: "DOMINATION DOGE" },
      timeline: { en: "2028 Onwards", fr: "2028 et au-delà" },
      description: {
        en: `- Achieve Mainstream Adoption Milestones
  - Launch Revolutionary Gaming and Streaming Features
  - Establish DOGEVISION as Leading Web3 Platform
  - Continuous Ecosystem Growth and Innovation`,
        fr: `- Atteinte des jalons d'adoption grand public
  - Lancement de fonctionnalités révolutionnaires de jeu et de streaming
  - Établissement de DOGEVISION comme plateforme Web3 leader
  - Croissance et innovation continues de l'écosystème`,
      },
    },
  ];
  function RoadMap() {
    const locale = useLocale();
    const tr = useTranslator();
  
    const memoizedSteps = useMemo(() => steps.map((step, index) => ({
      ...step,
      title: step.title[locale],
      timeline: step.timeline?.[locale],
      description: step.description[locale],
      phase: index + 1,
    })), [locale]);
  
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
        
        {/* Mobile Version */}
        <div className="md:hidden space-y-8">
          {memoizedSteps.map((step) => (
            <div key={step.phase} className="relative flex">
              <div className="mr-4 flex flex-col items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-2">
                  <span className="text-black font-bold">{step.phase}</span>
                </div>
                <div className="flex-grow w-0.5 bg-white/10"></div>
              </div>
              <div className="flex-grow">
                <div className="bg-black p-5 rounded-lg shadow-md backdrop-blur-md relative w-full">
                  <BorderBeam />
                  <div className="action-btn w-fit py-1 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20 mb-3">
                    Phase {step.phase}
                  </div>
                  <h4 className="text-white text-lg font-bold mb-2">{step.title}</h4>
                  {step.timeline && <p className="text-white text-sm mb-2">{step.timeline}</p>}
                  <pre className="text-white text-sm font-light whitespace-pre-line break-words">
                    {step.description}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Desktop Version */}
        <div
          className="hidden md:grid w-full relative scale-75 md:scale-100"
          style={{ gridTemplateColumns: "1fr 8px 1fr" }}
        >
          <div>
            {memoizedSteps.map((step, index) => {
              const even = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center min-h-[80px]"
                >
                  {even && (
                    <>
                      <div className="absolute right-[-4px] top-1/2 w-1/2 h-[2px] bg-white/100 transform translate-y-[-50%]"></div>
                      <div className="absolute right-[-12px] top-1/2 w-6 h-6 bg-white/100 rounded-full transform translate-y-[-50%]"></div>
                      <div className="relative flex flex-col items-start p-5 min-h-[80px] max-w-[350px] bg-black rounded-lg shadow-md backdrop-blur-md ease-in-out">
                        <BorderBeam />
                        <div className="absolute -top-3 action-btn w-fit py-1 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
                          Phase {step.phase}
                        </div>
                        <h4 className="text-white text-lg font-bold">
                          {step.title}
                        </h4>
                        {step.timeline && <p className="text-white text-sm mb-2">{step.timeline}</p>}
                        <pre className="text-white text-sm font-light whitespace-pre-line break-words">
                          {step.description}
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
            {memoizedSteps.map((step, index) => {
              const odd = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center min-h-[80px]"
                >
                  {odd && (
                    <>
                      <div className="absolute left-[-4px] top-1/2 w-1/2 h-[2px] bg-white/100 transform translate-y-[-50%]"></div>
                      <div className="absolute left-[-12px] top-1/2 w-6 h-6 bg-white/100 rounded-full transform translate-y-[-50%]"></div>
                      <div className="flex flex-col items-start p-5 min-h-[80px] max-w-[350px] bg-black relative rounded-lg shadow-md backdrop-blur-md ease-in-out">
                        <BorderBeam />
                        <div className="absolute -top-3 action-btn w-fit py-1 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
                          Phase {step.phase}
                        </div>
                        <h4 className="text-white text-lg font-bold">
                          {step.title}
                        </h4>
                        {step.timeline && <p className="text-white text-sm mb-2">{step.timeline}</p>}
                        <pre className="text-white text-sm font-light whitespace-pre-line break-words">
                          {step.description}
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
  
  export default React.memo(RoadMap);