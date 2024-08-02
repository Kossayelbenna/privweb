import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DogeVisionBanner: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const animatedTexts = [
    "Web3 Games and NFTs",
    "Decentralized Streaming Platform",
    "Multichain Ecosystem"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [animatedTexts.length]);

  const letterAnimation = {
    hidden: { opacity: 0, y: 130 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
    exit: { opacity: 1, y: -130 },
  };

  return (
    <div className="w-full p-8 text-white hidden sm:block mb-0">
      <div className="text-2xl md:text-6xl font-bold text-white mb-4" style={{ lineHeight: '1.3' }}>
        The world's first Layer 3 blockchain, Integrating 
      </div>

      <div className="h-24 md:h-32 lg:h-48 mb-6 md:mb-12"> 
        <AnimatePresence mode="wait">
          <motion.h3
            key={currentTextIndex}
            className="text-2xl md:text-6xl font-bold text-purple-600 mb-12" style={{ lineHeight: '1.3' }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {animatedTexts[currentTextIndex].split('').map((letter, index) => (
              <motion.span key={index} custom={index} variants={letterAnimation}>
                {letter}
              </motion.span>
            ))}
          </motion.h3>
        </AnimatePresence>
      </div>
      <div className="text-2xl md:text-xl font-bold text-white mt-2">
        We're not just going to the moon – we're building a new universe with DOGE community! 
      </div>

      <div className="mt-6 space-x-4">
        <a href="#" className="bg-white text-black font-bold text-xl md:text-2xl py-4 px-10 rounded-full inline-block hover:bg-purple-700 hover:text-white transition duration-300">
          Join the Doge Revolution!
        </a>
        <button onClick={() => setIsModalOpen(true)} className="bg-purple-600 text-white font-bold text-xl md:text-2xl py-4 px-10 rounded-full inline-block hover:bg-purple-700 transition duration-300">
          Learn More
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-purple-900 text-white border border-purple-500 rounded-lg shadow-lg max-w-2xl mx-auto p-6 relative">
            <div className="flex justify-between items-center border-b border-purple-700 pb-4 mb-4">
              <h2 className="text-2xl font-bold">About Doge Vision</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-purple-300 hover:text-white absolute top-2 right-2"
              >
                X
              </button>
            </div>
            <div className="mb-6 max-h-[60vh] overflow-y-auto">
              <p className="mb-4">
                Doge Vision is pioneering the world's first Layer 3 blockchain, revolutionizing the integration of Web3 games, NFTs, and streaming platforms. Built on the foundation of Ethereum's robust security, our ecosystem offers unparalleled speed and efficiency.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Layer 3 Blockchain: Cutting-edge technology offering enhanced scalability and performance.</li>
                <li>Web3 Games and NFTs: Robust ecosystem for game developers and NFT creators.</li>
                <li>#1 Streaming Platform: Leading blockchain-based platform for content creators.</li>
                <li>Multichain Ecosystem: Seamless interaction across multiple blockchains.</li>
                <li>ETH Blockchain Security: Leveraging Ethereum's proven security with optimized performance.</li>
                <li>Fast and 100x Lower Fees: Significantly faster and cheaper transactions.</li>
              </ul>
              
              <p className="font-bold">
                Join us in reshaping the digital landscape and be part of the Doge Vision community-driven initiative!
              </p>
            </div>
            <div className="border-t border-purple-700 pt-4 text-right">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogeVisionBanner;