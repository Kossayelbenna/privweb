"use client";
import { useTranslator } from "@/lib/use-translator";
import React from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import { CPU } from "./cpu";
import BannerLeft from "./bannerRight";
import './magicui/marquee'; 
import { ConnectWallet } from "@thirdweb-dev/react";
import BlurIn from "./magicui/animation-blurr"; // Assurez-vous que le chemin est correct



function Hero() {
  const tr = useTranslator();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-40">
      <div className={cn("flex flex-col gap-4 items-center justify-center")}>
        <BlurIn
          className={cn(
            "text-3xl md:text-6xl font-extrabold -mt-[25px]", // Ajustez la classe ici
            "bg-clip-text text-transparent bg-gradient-to-br from-[#9b5de5] via-[#f15bb5] to-[#fee440]",
            "drop-shadow-md"
          )}
          word={tr("title")[1]} // Utiliser 'word' ici pour correspondre à l'interface BlurIntProps  
          
          
          
          // TEXT SUR APP !!!!!!!!!!!!!!!! just sur la balise iframe 
          
          //<div className=" flex justify-center items-center "><div className="text-white text-3xl -mb-6 font-bold">Presale will ends soon !</div></div>


        />
        <h1 className="text-2xl md:text-4xl font-extrabold text-center max-w-2xl font-display mb-16">
          <span>{tr("title")[0]}</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1500px] mx-auto place-items-center px-2 lg:px-0">
        <div className="sticky h-fit ml-28 ">
          <BannerLeft />
        </div>



        <div className="flex flex-col w-full scale-70">
          <iframe
            className="w-full h-[700px] -mt-12"
            
            style={{ outline: 0, border: 0, transform: 'scale(1)' }}
            allow="clipboard-write"
            src="https://pay.radom.com/presale/806ea959-b589-4964-aa76-b5549a53ebcb"
          ></iframe>
        </div>
      </div>




      <div className="grid grid-cols-1 -mt-8 sm:mt-4 md:mt-4 md:grid-cols-2 gap-4 max-w-[1500px] mx-auto place-items-center px-2 lg:px-0 my-14">
        <div className="mt-28">
          <CPU />
        </div>
        <div className="flex flex-col w-full scale-20">
          <div className="w-full p-8">
            <div className="text-white">
              <div className="mb-8 mt-[100px]">
                <h2 className="text-4xl -mt-32 sm:mt-4 md:mt-4 md:text-6xl font-extrabold text-balance">
                  # The blockchain revolution ! <br />
                </h2>
                <p className="text-xl mt-4 mb-8 max-w-[500px] leading-relaxed">
                  the world's first layer 3 blockchain build for doge coin and the first ecosystem that integrates GAMES,NFT,STREAMING PLATFORM Taking the Industry to the Next Level
                </p>
              </div>
              <div className="mt-12">
                <h5 className="text-xl mt-4 mb-8 max-w-[500px] leading-relaxed font-bold" >
                  Building the first gaming ecosystem in the blockchain IN the world's first LAYER 3 BLOCKCHAIN !
                </h5>
                <div className="flex items-center space-x-4">
                  <ul className="flex space-x-4">
                    <li><a href="#"><span className="icon-logo-01 text-3xl"></span></a></li>
                    <li><a href="#"><span className="icon-logo-02 text-3xl"></span></a></li>
                    <li><a href="#"><span className="icon-logo-03 text-3xl"></span></a></li>
                    <li><a href="#"><span className="icon-logo-04 text-3xl"></span></a></li>
                    <li>
                      <a href="#">
                        <span className="icon-logo-05 text-3xl">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                          <span className="path4"></span>
                        </span>
                      </a>
                    </li>
                    <li><a href="#"><span className="icon-logo-06 text-3xl"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cn("relative flex flex-col pt-5 pb-20 max-w-[1200px] mx-auto")}>
        <div className="grid grid-cols-1 md:grid-cols-3 px-3 lg:px-0 mt-5 sm:my-5 gap-3">
          {tr("features")
            .slice(0, 3)
            .map((feature, idx) => (
              <div
                key={idx}
                className="relative bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-md fade-in ease-in-out"
                style={{ animationDelay: `${idx * 0.4}s` }}
              >
                <BorderBeam delay={idx * 1} />
                {feature}
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_350px_350px_1fr_1fr] px-3 lg:px-0 -mt-3 sm:mt-5 gap-3 mb-16">
          <div></div>
          <div></div>
          {tr("features")
            .slice(3)
            .map((feature, idx) => (
              <div
                key={idx}
                className="relative bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-md fade-in ease-in-out"
                style={{ animationDelay: `${idx * 0.4}s` }}
              >
                <BorderBeam delay={idx * 1} />
                {feature}
              </div>
            ))}
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
