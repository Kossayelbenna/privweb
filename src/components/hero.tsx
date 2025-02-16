'use client';
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from 'next/image';
import { useTranslator } from "@/lib/use-translator";
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';
import { CreditCard, X } from "lucide-react";
import { useWertWidget } from '@wert-io/module-react-component'; //  Conserve seulement l'import
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";


// Scrolling vers les sections
const scrollToHowToBuy = () => {
  const howToBuySection = document.getElementById('how-to-buy');
  if (howToBuySection) {
      howToBuySection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToHero2 = () => {
  const hero2Section = document.getElementById('Hero2');
  if (hero2Section) {
      hero2Section.scrollIntoView({ behavior: 'smooth' });
  }
};


//  Définition de la clé privée (mauvaise pratique en prod)
const privateKey = "0x36d863790646355101811981fcc338d4d958217401993337d5c76184a5d81829";

//  Wrapper pour l'iframe
const IframeWrapper = ({ children }) => (
  <div className="relative overflow-hidden rounded-[25px] w-full max-w-[450px] md:h-[680px] h-[700px] backdrop-blur-md bg-blue-900/30 border border-purple-500/100 shadow-lg shadow-purple-500/50">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
    <div className="relative w-full h-full">{children}</div>
  </div>
);

//  Composant Popup
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

//  Composant principal Hero
const Hero = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [usdAmount, setUsdAmount] = useState(1000);
  const [ethPrice, setEthPrice] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const address = useAddress();

  useEffect(() => {
    setIsClient(true);
  }, []);

  //  Déclaration de wertWidgetConfig AVANT d'utiliser useWertWidget
  const wertWidgetConfig = {
    partner_id: "01J678NYMCF5SSS1R042MAJ3EA",
    origin: "https://widget.wert.io",
    theme: "light",
    address: address,  
    commodity: "USDC", // ⚡ Changement ETH → USDC
    commodity_amount: usdAmount, // ⚡ Montant directement en USD
    network: "ethereum", // ⚡ Assurer que ça reste sur Ethereum
    sc_address: "SC_CONTRACT_ADDRESS",  
    sc_input_data: "0xd96c0432",  
    click_id: uuidv4(),
    listeners: {
      'loaded': () => console.log('WERT Checkout Loaded with USDC'),
    },
  };
  const openWertWidget = useWertWidget(wertWidgetConfig);

  //  Gestion de l'achat avec Wert
  const handleBuyWithCard = () => {
    if (!usdAmount || usdAmount <= 0) {
      console.error("Veuillez entrer un montant valide.");
      return;
    }
  
    if (!openWertWidget || typeof openWertWidget.open !== "function") {
      console.error("WERT Widget n'est pas initialisé.");
      return;
    }
  
    try {
      console.log(`Achat USDC avec WERT pour ${usdAmount} USD`);
  
      openWertWidget.open({
        options: {
          commodity: "USDC", // ⚡ Achat en USDC
          commodity_amount: usdAmount, // ⚡ Directement en USD
          network: "ethereum", 
          address: address,  
          click_id: uuidv4(),
        },
      });
    } catch (error) {
      console.error("Erreur lors de l'ouverture de WERT :", error);
    }
  };


  
useEffect(() => {
  const fetchEthPrice = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.ethereum?.usd) {
        setEthPrice(data.ethereum.usd);
      } else {
        console.warn("ETH price data is missing");
      }
    } catch (error) {
      console.error("Failed to fetch ETH price:", error);
    }
  };

  fetchEthPrice();
  const interval = setInterval(fetchEthPrice, 60000);
  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const observer = new MutationObserver(() => {
    setTimeout(() => {
      const iframe = document.querySelector('iframe[src*="pay.radom.com"]');
      if (iframe?.contentWindow) {
        try {
          const button = iframe.contentWindow.document?.querySelector("button");
          if (button) {
            button.click();
            console.log("Transaction crypto exécutée !");
          } else {
            console.error("Bouton de confirmation Radom non trouvé.");
          }
        } catch (error) {
          console.warn("Accès restreint à l'iframe Radom (CORS possible).", error);
        }
      }
    }, 1000);
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => observer.disconnect();
}, []);

const ethAmount = useMemo(() => {
  if (!ethPrice || !usdAmount || usdAmount <= 0) return null;  // Empêcher 0 par défaut
  return usdAmount / ethPrice;
}, [usdAmount, ethPrice]);

const signedData = useMemo(() => {
  if (!address || typeof address !== "string") {
    console.warn("Wallet address is not available yet.");
    return null;
  }

  if (!ethAmount || Number.isNaN(ethAmount) || ethAmount <= 0) {
    console.error("ETH amount is invalid.", ethAmount);
    return null;
  }

  try {
    return signSmartContractData(
      {
        address: address,
        commodity: "USDC",
        network: "ethereum",
        commodity_amount: 1,
        sc_address: "0x0c5ae0f398e753B9e6B4949f86F6Ac3ACCf20309",
        sc_input_data: "0xd96c0432",
      },
      privateKey
    );
  } catch (error) {
    console.error("Error while signing smart contract data:", error);
    return null;
  }
}, [address, ethAmount]);


const handlePopupContinue = useCallback(() => {
  setIsPopupOpen(false);
  if (!signedData || Object.keys(signedData).length === 0) {
    console.error(" Signed data is missing or empty:", signedData);
    return;
  }
  if (!isClient || !openWertWidget || typeof openWertWidget.open !== "function") {
    console.error(" Wert Widget is not initialized or unavailable.");
    return;
  }
  try {
    openWertWidget.open({
      options: {
        ...signedData,
        click_id: uuidv4(),
        amount: usdAmount,
      },
    });
  } catch (error) {
    console.error(" Error while opening Wert Widget:", error);
  }
}, [signedData, openWertWidget, usdAmount]);

const handleBuyWithCrypto = () => {
  console.log(" Achat avec Crypto...");

  const iframe = document.querySelector('iframe[src*="pay.radom.com"]');
  if (!iframe) {
    console.error(" L'iframe de Radom n'est pas trouvée.");
    return;
  }

  if (iframe.contentWindow) {
    try {
      const button = iframe.contentWindow.document.querySelector("button");
      if (button) {
        button.click();
        console.log(" Transaction crypto exécutée !");
      } else {
        console.error(" Bouton de confirmation Radom non trouvé.");
      }
    } catch (error) {
      console.error(" Impossible d'accéder à l'iframe Radom :", error);
    }
  } else {
    console.error(" Iframe non encore chargé.");
  }
};


const handleUsdAmountChange = (e) => {
  const value = parseFloat(e.target.value);
  setUsdAmount(isNaN(value) ? 0 : value);
};

const handleBuyClick = () => {
  if (!address) {
    console.log("⚠️ Wallet not connected, opening ConnectWallet...");
    alert("Veuillez connecter votre portefeuille.");
    return;
  }

  if (!usdAmount || usdAmount <= 0) {
    console.error(" Veuillez entrer un montant valide avant d'acheter.");
    alert("Montant invalide. Veuillez entrer un montant valide.");
    return;
  }

  setIsPopupOpen(true);
};





const features = useMemo(() => [
  "Layer 3 blockchain with high-volume capacity",
  "Ultra-low fees across multiple chains",
  "Instant bridging between ETH and Doge Chain",
  "Dedicated block explorer for transparency",
  "Next-gen games, NFTs, and streaming Ecosystem",
], []);
useEffect(() => {
  const observer = new MutationObserver(() => {
    const inputField = document.querySelector('iframe[src*="pay.radom.com"]')?.contentWindow?.document?.querySelector('input[type="number"]');

    if (inputField) {
      inputField.addEventListener("input", (event) => {
        const amount = parseFloat(event.target.value);
        setUsdAmount(isNaN(amount) ? 100 : amount); // Défaut 100$ si vide
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (typeof window !== "undefined") {
    setIsClient(true);
  }
}, []); // ✅ Correction : Ajout de [] pour éviter un re-render infini





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
        <div className="w-full md:w-[30%] mb-8 md:mb-0 md:-mt-8">
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
              <div key={`feature-${index}`} className="flex items-center mb-4 bg-purple-900/30 p-2 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-200 text-lg">{feature}</span>
              </div>
            ))}
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
              <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-md mb-2 max-w-[450px]">
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
                  <>
                    <button
                      onClick={handleBuyClick}
                      className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center"
                      disabled={!ethPrice}
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Buy with Card
                    </button>
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center ml-2"
                    >
                      Buy with Crypto
                    </button>
                  </>
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
            <span className="text-purple-300"> 100X potential! |</span> Presale just started! Join early investors before price increases!
          </p>
        </div>
        <div className="text-center text-white">
          <p className="text-sm mb-2">
            $DOGE VISION is Multichain! You can Buy using Solana, Ethereum, Base, BNB, BUSD, USDC, USDT, Polygon, Tron, and Bitcoin on different chains.
          </p>
        </div>
      </div>
    </div>
  </main>
);
};

export default Hero;