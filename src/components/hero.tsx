import React, { useState } from "react";
import Image from 'next/image';
import { useTranslator } from "@/lib/use-translator";

const IframeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative overflow-hidden rounded-[25px] w-full max-w-[440px] h-[680px] backdrop-blur-md bg-purple-900/30 border border-purple-500/50 shadow-lg shadow-purple-500/30">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
    <div className="relative w-full h-full">{children}</div>
  </div>
);

const Hero: React.FC = () => {
  const tr = useTranslator();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "Layer 3 blockchain with high-volume capacity",
    "Ultra-low fees across multiple chains",
    "Instant bridging between ETH and Doge Chain",
    "Dedicated block explorer for transparency",
    "Next-gen games, NFTs, and streaming Ecosystem"
  ];

  const scrollToHowToBuy = () => {
    const howToBuySection = document.getElementById('how-to-buy');
    if (howToBuySection) {
      howToBuySection.scrollIntoView({ behavior: 'smooth' });
    }
    
  };

  const scrollToHero2 = () => {
    const howToBuySection = document.getElementById('Hero2');
    if (howToBuySection) {
      howToBuySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden -mt-6">
      <div className="md:hidden mt-6">
        <Image
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))'
          }}
          src="/images/1f.png"
          alt="Dogeverse"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center hidden md:block mt-6"
        style={{ 
          backgroundImage: 'url(/images/bc.png)', 
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))'
        }}
      />
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-start md:mt-20 -mt-24">
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[30%] mb-8 md:mb-0">
            <div className="bg-black/80 rounded-2xl p-6 backdrop-blur-md border border-purple-500/50">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                DOGE NOW HAS HIS OWN
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                BLOCKCHAIN!
              </h1>
              <h2 className="text-lg md:text-xl mb-4 text-gray-300">
                DOGE UNLEASHED | THE VISION
              </h2>
              <p className="mb-4 text-gray-200 text-sm">
              Congrats! You're early to the party! Buy and Stake now during Presale to max out your rewards before the price skyrockets!
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-purple-400 mb-2">DOGE VISION</h3>
                <p className="text-white text-sm mb-2">Advanced technology, massive community, infinite potential</p>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-4 bg-purple-900/30 p-0 rounded-lg ">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 m-2"></div>
                    <span className="text-gray-200 text-gl m-2 mr-4">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button onClick={scrollToHowToBuy} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:from-purple-600 hover:to-pink-600 transition-colors">
                
                Join the Doge Revolution!
                </button>
                <button 
                  onClick={scrollToHero2}
                  className="bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-2 rounded-full font-bold text-sm hover:bg-purple-500 hover:text-white transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] flex flex-col items-end mt-8 md:-mt-16">
            <div className="flex justify-center items-center space-x-6 mb-2 text-center md:mr-10 mt-4">
              <a href="/Layer%203/WhitePaper.pdf" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-purple-300 font-semibold text-lg transition duration-300 underline">
                Whitepaper
              </a>
              <a href="/Layer%203/Smartcontract_Audit_Solidproof_DogeVision.pdf" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-purple-300 font-semibold text-lg transition duration-300 underline">
                Audit
              </a>
              <a href="/Layer%203/Smartcontract_Audit_Solidproof_DogeVision.pdf" target="_blank" rel="noopener noreferrer">
                <img src="/Layer%203/logo_shield_text_white.png" alt="Logo" className="h-10 w-auto" />
              </a>
            </div>
            <IframeWrapper>
              <iframe
                className="w-full h-full rounded-[20px]"
                style={{ outline: 0, border: 0, overflow: 'hidden' }}
                allow="clipboard-write"
                src="https://pay.radom.com/presale/4f6ac522-e050-42c4-9393-eca9236bbd94"
                title="Presale iframe"
                scrolling="no"
              />
            </IframeWrapper>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full bg-gradient-to-b to-transparent">
        <div className="max-w-[1600px] mx-auto px-4 py-6">
          <div className="text-center text-white mb-4">
            <p className="text-xl font-bold">
              <span className="text-purple-300">Over $20,000 raised |</span> Presale just started! Join early investors before price increases!
            </p>
          </div>
          <div className="text-center text-white">
            <p className="text-sm mb-2">
              $DOGE VISION is Multichain! You can Buy using Solana, Ethereum, Base, BNB, BUSD, USDC, USDT, Polygon, Tron, and Bitcoin on different chains.
            </p>
            <button 
              onClick={scrollToHowToBuy}
              className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-300 bg-transparent border-none cursor-pointer"
            >
              HOW TO BUY? 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;