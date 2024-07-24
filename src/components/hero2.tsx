import React, { useMemo } from "react";
import { useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CPU } from "@/components/cpu";

const Hero2: React.FC = () => {
  const tr = useTranslator();

  const featuresTop = useMemo(() => tr("features").slice(0, 3), [tr]);
  const featuresBottom = useMemo(() => tr("features").slice(3), [tr]);

  return (
    <>
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
                DOGE VISION is pioneering the first gaming ecosystem on a layer 3 blockchain. Our platform boasts lower transaction fees and operates within a multichain ecosystem, integrating games, NFTs, and a streaming platform. Dive into an immersive world of Web3 games and metaverse experiences, fully leveraging NFTs and blockchain technology.                </p>
              </div>
              <div className="mt-12">
                <h5 className="text-xl mt-4 mb-8 max-w-[500px] leading-relaxed font-bold">
                  Building The First Gaming & streaming Ecosystem In The World's First LAYER 3 BLOCKCHAIN!
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

      <div className="relative flex flex-col pt-5 pb-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 px-3 lg:px-0 mt-5 sm:my-5 gap-3">
          {featuresTop.map((feature, idx) => (
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
          {featuresBottom.map((feature, idx) => (
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
    </>
  );
}

export default React.memo(Hero2);