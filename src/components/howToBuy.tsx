import React, { useMemo, useCallback } from "react";
import { useLocale, useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { inter } from "@/fonts";
import { Wallet, CreditCard, Coins, Banknote } from "lucide-react";
import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';

// Ensure Buffer is available globally
if (typeof window !== 'undefined') {
  window.Buffer = window.Buffer || require('buffer').Buffer;
}

const IframeWrapper = ({ children }) => (
  <div className="relative overflow-hidden rounded-[25px] w-full max-w-[440px] h-[680px] backdrop-blur-md bg-purple-900/30 border border-purple-500/50 shadow-lg shadow-purple-500/30">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
    <div className="relative w-full h-full">{children}</div>
  </div>
);

const HowToBuy = () => {
  const locale = useLocale();
  const tr = useTranslator();

  const privateKey = '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3';

  const signedData = useMemo(() => signSmartContractData({
    address: '0x0E976df9bb3ac63F7802ca843C9d121aE2Ef22ee', // User's address
    commodity: 'ETH',
    network: 'sepolia',
    commodity_amount: 0,
    sc_address: '0xAAC496808A678B834073FB3435857FdcF0dc186F', // Smart contract address
    sc_input_data: '0xa08720bb0000000000000000000000000e976df9bb3ac63f7802ca843c9d121ae2ef22ee0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  }, privateKey), []);

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
    const wertWidget = new WertWidget({
      ...signedData,
      ...otherWidgetOptions,
    });
    wertWidget.open();
  }, [signedData, otherWidgetOptions]);

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
                id="how-to-buy"
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
          <div className="scale-[1] -mt-16 rounded-[50px]">
            <button
              onClick={launchWertWidget}
              className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded transition-colors duration-300 -mt-12"
            >
              Buy with Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(HowToBuy);