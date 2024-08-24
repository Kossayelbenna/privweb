import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from 'next/image';
import { useTranslator } from "@/lib/use-translator";
import { useWertWidget } from '@wert-io/module-react-component';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';
import { CreditCard, X } from "lucide-react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { ethers } from 'ethers';


if (typeof window !== 'undefined') {
  window.Buffer = window.Buffer || require('buffer').Buffer;
}const IframeWrapper = ({ children }) => (
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

const HowToBuy = () => {
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
    const abiCoder = new ethers.utils.AbiCoder();
    const encodedAddress = abiCoder.encode(['address'], [address]).slice(2);
    const sc_input_data = `0x6be4cf1f${encodedAddress}`;
    
    return signSmartContractData({
      address: address,
      commodity: 'ETH',
      network: 'sepolia',
      commodity_amount: Number(ethAmount.toFixed(8)),
      sc_address: '0x0c5ae0f398e753B9e6B4949f86F6Ac3ACCf20309',
      sc_input_data: sc_input_data,
    }, privateKey);
  }, [address, ethAmount]);

  const { open: openWertWidget } = useWertWidget({
    partner_id: "01J5DT05Y48MGPWV2B1DJTNRAQ",
    origin: "https://sandbox.wert.io",
    theme: "light",
    extra: {
      item_info: {
        name: "DOGE VISION Token",
        category: "Cryptocurrency",
      },
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

  return (
    <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-start">
      <div className="w-full md:w-[50%] flex flex-col items-end mt-8 md:mt-[-65px]">
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
      <CustomPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onContinue={handlePopupContinue}
      />
    </div>
  );
};

export default HowToBuy;