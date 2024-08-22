import React, { useMemo, useCallback, useState, useEffect } from "react";
import { useLocale, useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { inter } from "@/fonts";
import { Wallet, CreditCard, Coins, Banknote, X } from "lucide-react";
import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

if (typeof window !== 'undefined') {
  window.Buffer = window.Buffer || require('buffer').Buffer;
}

const IframeWrapper = ({ children }) => (
  <div className="relative overflow-hidden rounded-[25px] w-full max-w-[440px] md:h-[680px] h-[700px]  backdrop-blur-md bg-purple-900/30 border border-purple-500/50 shadow-lg shadow-purple-500/30">
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

const HowToBuy = () => {
  const locale = useLocale();
  const tr = useTranslator();
  const address = useAddress();
  const [usdAmount, setUsdAmount] = useState(1000);
  const [ethPrice, setEthPrice] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
    const interval = setInterval(fetchEthPrice, 60000); // Update price every minute
    return () => clearInterval(interval);
  }, []);
  const handleBuyClick = () => {
    if (!address) {
      setIsConnecting(true);
      return;
    }
    setIsPopupOpen(true);
  };

  const handlePopupContinue = () => {
    setIsPopupOpen(false);
    if (!signedData) return;
    const wertWidget = new WertWidget({
      ...signedData,
      ...otherWidgetOptions,
    });
    wertWidget.open();
  };
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
      commodity_amount: Number(ethAmount.toFixed(8)), // Round to 8 decimal places
      sc_address: '0x76962e7A311eb311aea08afA88e4e96a02cb92e7', // Make sure this is the correct contract address for your testnet
      sc_input_data: '0xa08720bb',
    }, privateKey);
  }, [address, ethAmount]);

  const otherWidgetOptions = useMemo(() => ({
    partner_id: '01J5DT05Y48MGPWV2B1DJTNRAQ',
    click_id: uuidv4(),
    origin: 'https://sandbox.wert.io',
    theme: 'light',
    color_buttons: "#050505",
    color_background: "#ffffff",
    is_crypto_hidden: true,
    extra: {
      item_info: {
        name: "DOGE VISION Token",
        category: "Cryptocurrency",
      },
    },
    listeners: {
      'loaded': () => console.log('Wert widget loaded'),
    },
  }), []);

  const launchWertWidget = useCallback(() => {
    if (!address) {
      setIsConnecting(true);
      return;
    }
    if (!signedData) return;
    const wertWidget = new WertWidget({
      ...signedData,
      ...otherWidgetOptions,
    });
    wertWidget.open();
  }, [address, signedData, otherWidgetOptions]);

  const handleUsdAmountChange = (e) => {
    setUsdAmount(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (address) {
      setIsConnecting(false);
    }
  }, [address]);

  const steps = useMemo(() => [
    {
      title: {
        en: "Connect your wallet",
        fr: "Connectez votre portefeuille",
      },
      description: {
        en: "Install a Defi wallet such as Best Wallet, MetaMask, or Trust Wallet to take advantage of the full DOGE VISION P2E experience. Connect it to our secure presale widget to buy $DOGEVISION tokens",
        fr: "Installez un portefeuille Defi tel que Best Wallet, MetaMask ou Trust Wallet pour profiter pleinement de l'expérience P2E DOGE VISION. Connectez-le à notre widget de prévente sécurisé pour acheter des jetons $DOGEVISION",
      },
      image: <Wallet size={24} />,
    },
    {
      title: {
        en: "Buy your $DOGEVISION Tokens",
        fr: "Achetez vos jetons $DOGEVISION",
      },
      description: {
        en: "To proceed, you'll require BNB, ETH, USDT or other cryptocurrency. Deposit funds or purchase crypto directly within Best Wallet to initiate your transaction. Ensure you retain sufficient BNB or ETH or other crypto to cover gas fees.",
        fr: "Pour continuer, vous aurez besoin de BNB, ETH, USDT ou d'autres cryptomonnaies. Déposez des fonds ou achetez directement des cryptos dans Best Wallet pour initier votre transaction. Assurez-vous de conserver suffisamment de BNB, ETH ou autres cryptos pour couvrir les frais de gaz.",
      },
      image: <CreditCard size={24} />,
    },
    {
      title: {
        en: "Stake and gain",
        fr: "Staquez et gagnez",
      },
      description: {
        en: "You have the option to stake your DOGE VISION tokens on either BNB Chain or Ethereum to grow your holdings. If you choose to stake, follow the prompts on the widget.",
        fr: "Vous avez la possibilité de staker vos jetons DOGE VISION sur BNB Chain ou Ethereum pour augmenter vos avoirs. Si vous choisissez de staker, suivez les instructions sur le widget.",
      },
      image: <Coins size={24} />,
    },
    {
      title: {
        en: "Claim your $DOGEVISION",
        fr: "Réclamez vos $DOGEVISION",
      },
      description: {
        en: "After completing your purchase, your $DOGEVISION token balance will be displayed on the buy widget. And you're one of the first holders.",
        fr: "Après avoir terminé votre achat, votre solde de jetons $DOGEVISION s'affichera sur le widget d'achat. Et vous êtes l'un des premiers détenteurs.",
      },
      image: <Banknote size={24} />,
    },
  ], [locale]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 p-5" id="how-to-buy">
        <h3
          className="text-4xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          {tr("howToBuyTitle")}
        </h3>
      </div>
      <div className="pb-10 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-4 p-5 overflow-x-clip max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col gap-4 mt-8">
          {steps.map((step, i) => {
            const stepTitle = {
              en: `Step ${i + 1}`,
              fr: `Étape ${i + 1}`,
            };
            return (
              <div
                key={i}
                className="relative flex gap-3 bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-md ease-in-out"
              >
                <BorderBeam />
                <div className="absolute -top-3 action-btn w-fit py-1 px-4 border rounded-2xl backdrop-blur-md border-gray-100/20">
                  {stepTitle[locale]}
                </div>
                <div className="border-r-2 border-gray-100/30 h-[100px] pr-3 flex items-center justify-center">
                  {step.image}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-white">
                    {step.title[locale]}
                  </h3>
                  <p className={cn("text-sm text-white", inter.className)}>
                    {step.description[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center scale-70 rounded-[20px]">
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
          <div className="scale-[0.85] -mt-[85px] w-320px px-4">
          <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-md">
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
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center "
              disabled={!ethPrice}
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Buy with Card
            </button>
          )}
        </div>
        {ethPrice && (
          <p className="text-sm text-white mt-2 text-center">
            Approx. {ethAmount.toFixed(6)} ETH (1 ETH = ${ethPrice.toFixed(2)})
          </p>
        )}
      </div>
      <CustomPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onContinue={handlePopupContinue}
      />
      {/* ... (rest of the JSX) */}
    
            
          </div>
        </div>
      </div>
    
  );
}

export default React.memo(HowToBuy);