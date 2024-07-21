import React from "react";
import Qna from "./Qna";
import { useTranslator } from "@/lib/use-translator";
import Footer from "./magicui/Footer";

const qna = [
  {
    q: "What is DOGE VISION?",
    a: "DOGE VISION is the world's first layer 3 blockchain built specifically for Dogecoin. It is a comprehensive ecosystem that integrates gaming, NFTs, and a decentralized streaming platform. DOGE VISION aims to revolutionize the blockchain industry by providing lower transaction fees, high-speed transactions, and advanced security, all within a multichain ecosystem.",
  },
  {
    q: "What is the presale for DOGE VISION?",
    a: "The presale is an opportunity for early investors to purchase $DOGEVISION tokens before they become available on the open market. It allows participants to become part of the DOGE VISION ecosystem from the start and potentially benefit from the project's growth and success.",
  },
  {
    q: "What is a Layer 3 blockchain and why is it important?",
    a: "A Layer 3 blockchain is an advanced layer of blockchain technology that builds on existing layers to offer improved performance and functionality. In DOGE VISION’s case, it provides lower transaction fees, higher volume capacity (100x faster than Ethereum), and enhanced security, making it ideal for integrating games, NFTs, and streaming services.",
  },
  {
    q: "What makes DOGE VISION's streaming platform unique?",
    a: "The DOGE VISION streaming platform is the first decentralized streaming platform in the world. It offers an exceptional rewarding system for streamers and a user-friendly experience, combining the best of digital entertainment with the benefits of blockchain technology.",
  },
  {
    q: "How do I buy $DOGEVISION tokens in the presale?",
    a: "1. Connect your wallet: Install a Defi wallet such as MetaMask, Trust Wallet, or Best Wallet. Connect it to our secure presale widget.\n2. Buy $DOGEVISION Tokens: Use BNB, ETH, USDT, or other cryptocurrencies. Ensure you have enough crypto for gas fees.\n3. Stake and Gain: Stake your DOGE VISION tokens on BNB Chain or Ethereum to grow your holdings.\n4. Claim your $DOGEVISION: Your token balance will be displayed on the buy widget.",
  },
  {
    q: "When can I claim my $DOGEVISION tokens?",
    a: "After the presale ends, you will receive your $DOGEVISION tokens in the wallet you used to make the purchase.",
  },
  {
    q: "What tokens and blockchains can I use to buy $DOGEVISION?",
    a: "You can use the following tokens on their respective blockchains to buy $DOGEVISION:\n- Ethereum ($ETH)\n- Binance Smart Chain ($BNB)\n- Polygon ($MATIC)\n- Avalanche ($AVAX)\n- Solana ($SOL)\n- Base ($ETH)\n- USDT (ALL CHAINS)\n- USDC (ALL CHAINS)",
  },
  {
    q: "How do I claim my tokens after the presale?",
    a: "After the presale ends, you will receive your $DOGEVISION tokens in the wallet you used to make the purchase. You will need the native token of the network you bought DOGE VISION on to process the gas fees for claiming your $DOGEVISION tokens.",
  },
  {
    q: "What is included in the DOGE VISION ecosystem?",
    a: "The DOGE VISION ecosystem includes:\n- Innovative Web3 games\n- Unique and interactive NFTs\n- A decentralized streaming platform\n- A multichain token for seamless transactions",
  },
  {
    q: "How does DOGE VISION benefit gamers and developers?",
    a: "DOGE VISION offers an immersive and interactive entertainment environment with innovative Web3 games and metaverse experiences. For developers, it provides a robust platform to create and deploy games, leveraging the power of blockchain technology and NFTs.",
  },
  {
    q: "How does DOGE VISION ensure the security of its ecosystem?",
    a: "DOGE VISION integrates advanced technology to provide Ethereum-level security for all transactions and interactions within its ecosystem, ensuring a safe and robust environment for users and developers.",
  },
  {
    q: "How can I stay updated with DOGE VISION’s progress?",
    a: "You can stay updated by following DOGE VISION’s official website and social media channels. Join our community to receive the latest news, updates, and participate in discussions and events.",
  },
];


function QnaSection() {
  const tr = useTranslator();
  return (
    <div>
      <div
        className="flex flex-col items-stretch justify-center gap-4 max-w-[1200px] mx-auto px-5 md:px-2 lg:px-0 mb-32" // Added margin-bottom class
        id="faqs"
      >
        <div className="flex flex-col items-center justify-center gap-4 p-5">
          <h3
            className="text-5xl font-bold text-white text-center"
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
          >
            {tr("qnaTitle")}
          </h3>
        </div>
        {qna.map(({ q, a }, i) => (
          <Qna key={i} q={q} a={a} className="mb-4" delay={i * 200} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default QnaSection;
