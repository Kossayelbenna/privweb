import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DogeVisionBanner: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
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
  }, []);

  const letterAnimation = {
    hidden: { opacity: 0, y: 130 },
    visible: (i: 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
      },
    }),
    exit: { opacity: 1, y: -130 },
  };

  return (
    
      //<h2 className="text-5xl md:text-7xl font-bold mb-8 text-white-400">
       // DOGE VISION
      //</h2>
   <div className="w-full p-8 text-white">
      <div className="text-2xl md:text-6xl font-bold text-white mb-4 "style={{ lineHeight: '1.3' }}>
        The world's first Layer 3 blockchain, Integrating 
        </div>

      <div className="h-32 mb-12"> 
        <AnimatePresence mode="wait">
          <motion.h3
            key={currentTextIndex}
            className="text-2xl md:text-6xl font-bold text-purple-600 "style={{ lineHeight: '1.3' }}
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
      We're not just going to the moon – we're building a new universe with DOGE comunity! 
      </div>

      <a href="#" className="mt-6 bg-white text-black font-bold text-xl md:text-2xl py-4 px-10 rounded-full inline-block hover:bg-purple-700 transition duration-300">
        Join the Doge Revolution!
      </a>
   </div>
  );
};

export default DogeVisionBanner;