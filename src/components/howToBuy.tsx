import { inter } from "@/fonts";
import { useLocale, useTranslator } from "@/lib/use-translator";
import { cn } from "@/lib/utils";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { BorderBeam } from "./magicui/border-beam";

function HowToBuy() {
  const locale = useLocale();
  const tr = useTranslator();
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h3
          className="text-4xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          {tr("howToBuyTitle")}
        </h3>
      </div>
      <div className="pb-10 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-4  p-5 overflow-x-clip max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col gap-4 mt-8">
          {[
            {
              title: {
                en: "Connect your wallet",
                fr: "Connectez votre portefeuille",
              },
              description: {
                en: "Install a Defi wallet such as Best Wallet, MetaMask, or Trust Wallet to take advantage of the full DOGE VISION P2E experience. Connect it to our secure presale widget to buy $DOGEVISION tokens",
                fr: "Installez un portefeuille Defi tel que Best Wallet, MetaMask ou Trust Wallet pour profiter pleinement de l'expérience P2E DOGE VISION. Connectez-le à notre widget de prévente sécurisé pour acheter des jetons $DOGEVISION",
              },
              image: <BiMoney />,
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
              image: <BiMoney />,
            },
            {
              title: {
                en: "Stake and gain ",
                fr: "Staquez et gagnez / attendez",
              },
              description: {
                en: "You have the option to stake your DOGE VISION tokens on either BNB Chain or Ethereum to grow your holdings. If you choose to stake, follow the prompts on the widget.",
                fr: "Vous avez la possibilité de staker vos jetons DOGE VISION sur BNB Chain ou Ethereum pour augmenter vos avoirs. Si vous choisissez de staker, suivez les instructions sur le widget.",
              },
              image: <BiMoney />,
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
              image: <BiMoney />,
            },
          ].map((step, i) => {
            const stepTitle = {
              en: `Step ${i + 1}`,
              fr: `Étape ${i + 1}`,
            };
            return (
              <div
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
        <div className="flex flex-col items-center scale-70 ">
          <iframe
            className="lg:w-[450px] w-full h-[700px]"
            allow="clipboard-write"
            style={{transform: 'scale(0.9)' }}
            src="https://pay.radom.com/presale/806ea959-b589-4964-aa76-b5549a53ebcb"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default HowToBuy;