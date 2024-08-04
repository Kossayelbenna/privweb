import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText: React.FC = () => {
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
  }, [animatedTexts.length]);

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
      },
    }),
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="h-20 mb-6"> 
      <AnimatePresence mode="wait">
        <motion.h3
          key={currentTextIndex}
          className="text-2xl md:text-4xl font-bold text-purple-600"
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
  );
};

export default AnimatedText;