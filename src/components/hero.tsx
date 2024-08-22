import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from 'next/image';
import { useTranslator } from "@/lib/use-translator";
import { useWertWidget } from '@wert-io/module-react-component';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';
import { CreditCard, X } from "lucide-react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const IframeWrapper = ({ children }) => (
  <div className="relative overflow-hidden rounded-[25px] w-full max-w-[450px] md:h-[680px] h-[700px] backdrop-blur-md bg-blue-900/30 border border-purple-500/100 shadow-lg shadow-purple-500/50">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
    <div className="relative w-full h-full">{children}</div>
  </div>
);

const CustomPopup = ({ isOpen, onClose, onContinue }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-600 text-white p-6 rounded-lg max-w-md">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">Buy $DOGEVISION</h2>
          <button onClick={onClose} className="text-white">
            <X size={24} />
          </button>
        </div>
        <p className="mb-6">
          By continuing, you're purchasing $DOGEVISION tokens. Your tokens won't be immediately
          deposited to your wallet. You'll be able to claim them on the claim date that will be
          announced at a later date. After you claim them, they will be deposited to your wallet.
        </p>
        <button
          onClick={onContinue}
          className="w-full bg-white text-blue-600 py-2 px-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  const tr = useTranslator();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [usdAmount, setUsdAmount] = useState(1000);
  const [ethPrice, setEthPrice] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const address = useAddress();

  const privateKey = '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3';

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        setEthPrice(data.ethereum.usd);
      } catch (error) {
        console.error("Failed to fetch ETH price:", error);
      }
    };

    fetchEthPrice();
    const interval = setInterval(fetchEthPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const ethAmount = useMemo(() => {
    if (!ethPrice || usdAmount <= 0) return 0;
    return usdAmount / ethPrice;
  }, [usdAmount, ethPrice]);

  const signedData = useMemo(() => {
    if (!address || ethAmount <= 0) return null;
    return signSmartContractData({
      address: address,
      commodity: 'ETH',
      network: 'sepolia',
      commodity_amount: Number(ethAmount.toFixed(8)),
      sc_address: '0x76962e7A311eb311aea08afA88e4e96a02cb92e7',
      sc_input_data: '0xa08720bb',
    }, privateKey);
  }, [address, ethAmount]);

  const { open: openWertWidget } = useWertWidget({
    partner_id: "01J5DT05Y48MGPWV2B1DJTNRAQ",
    origin: "https://sandbox.wert.io",
    theme: "light",
    extra: {
      wallets: [
        {
          name: "ETH",
          network: "sepolia",
          address: address || "0x0118E8e2FCb391bCeb110F62b5B7B963477C1E0d"
        }
      ]
    },
    color_buttons: "#050505",
    color_background: "#ffffff",
    listeners: {
      'loaded': () => console.log('Wert widget loaded'),
    },
  });

  const handleBuyClick = () => {
    if (!address) {
      setIsConnecting(true);
      return;
    }
    setIsPopupOpen(true);
  };

  const handlePopupContinue = useCallback(() => {
    setIsPopupOpen(false);
    if (!signedData) {
      console.error("Signed data is not available");
      return;
    }
    openWertWidget({ options: { ...signedData, click_id: uuidv4() } });
  }, [signedData, openWertWidget]);

  const handleUsdAmountChange = (e) => {
    setUsdAmount(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (address) {
      setIsConnecting(false);
    }
  }, [address]);

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
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-start md:mt-14 -mt-24 md:scale-[1]">
        <div className="w-full flex flex-col md:flex-row justify-between items-start scale-100">
          <div className="w-full md:w-[30%] mb-8 md:mb-0 md:-mt-8 ">
            <div className="bg-black/80 rounded-2xl p-6 backdrop-blur-md border border-purple-500/50 ">
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

          <div className="w-full md:w-[50%] flex flex-col items-end mt-8 md:mt-[-65px]">
            <div className="flex justify-center items-center space-x-6 mb-2 text-center md:mr-10 mt-4">
              <a href="/Layer%203/WhitePaper.pdf" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-purple-400 font-semibold text-lg transition duration-300 underline">
                Whitepaper
              </a>
              <a href="/Layer%203/Smartcontract_Audit_Solidproof_DogeVision.pdf" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-purple-300 font-semibold text-lg transition duration-300 underline">
                Audit
              </a>
              <a href="https://github.com/solidproof/Projects/blob/main/2024/DogeVision/Smartcontract_Audit_Solidproof_DogeVision.pdf" target="_blank" rel="noopener noreferrer">
                <img src="/Layer%203/logo_shield_text_white.png" alt="Logo" className="h-10 w-auto" />
              </a>
            </div>
            
            <div className="relative w-full max-w-[440px]">
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
              <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center scale-[0.85]">
                <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-md mb-2 max-w-[450px] ">
                  <div className="relative flex-grow mr-2">
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={usdAmount}
                      onChange={handleUsdAmountChange}
                      className="w-full pl-6 pr-2 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                      placeholder="Enter amount in USD"
                      min="0"
                      step="1"
                    />
                  </div>
                  {isConnecting ? (
                    <ConnectWallet theme="light" className="!bg-purple-600 !text-white" />
                  ) : (
                    <button
                      onClick={handleBuyClick}
                      className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center"
                      disabled={!ethPrice}
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Buy with Card
                    </button>
                  )}
                </div>
                {ethPrice && (
                  <p className="text-sm text-white mt-2">
                    Approx. {ethAmount.toFixed(6)} ETH (1 ETH = ${ethPrice.toFixed(2)})
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full bg-gradient-to-b to-transparent">
        <div className="max-w-[1600px] mx-auto px-4 py-6">
          <div className="text-center text-white mb-4">
            <p className="text-xl font-bold">
              <span className="text-purple-300"> 100X potential ! |</span> Presale just started! Join early investors before price increases!
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
      <CustomPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onContinue={handlePopupContinue}
      />
    </main>
  );
};
export default Hero;