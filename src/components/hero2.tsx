import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslator } from "@/lib/use-translator";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CPU } from "@/components/cpu";
import BannerRight from "@/components/bannerRight";
import { Content } from "next/font/google";

const Hero2: React.FC = () => {
  const tr = useTranslator();
  const [currentPage, setCurrentPage] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const featuresTop = useMemo(() => tr("features").slice(0, 3), [tr]);
  const featuresBottom = useMemo(() => tr("features").slice(3), [tr]);

  const FeatureBox: React.FC<{ feature: string; index: number }> = React.memo(({ feature, index }) => (
    <div
      className="relative bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-md"
      style={{ 
        opacity: hasAnimated ? 1 : 0, 
        transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
      }}
    >
      <BorderBeam delay={index * 1} />
      {feature}
    </div>
  ));

  const pageContent = [
    {
      title: "Integrated Ecosystem",
      content: "Experience a seamless integration of Games, NFTs, and the #1 Streaming Platform in the blockchain world. Our multichain ecosystem connects various blockchains, allowing for unprecedented interoperability and expanding the possibilities for developers and users alike."
    },
    {
      title: "Doge Layer 3 Blockchain",
      content: "Introducing the world's first Layer 3 blockchain built for Doge. Faster, more secure, and with lower fees than ever before. Our innovative technology takes the beloved Doge ecosystem to new heights, providing a robust foundation for the future of decentralized finance."
    },

    {
      title: "Doge Community & lovers",
      content:"Join the world's largest meme coin community, now with its own cutting-edge blockchain! Backed by Elon Musk, DOGE #1 supporter, we're transforming Doge into a technological powerhouse for decentralized finance and entertainment."
    }
  ];

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % pageContent.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + pageContent.length) % pageContent.length);

  return (
    <>
      <div id="Hero2" className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1500px] mx-auto place-items-center px-2 lg:px-0 my-14 ">
        <div className="order-2 md:order-1">
          <CPU />
        </div>
        <div className="order-1 md:order-2 w-full">
          <BannerRight />
        </div>
      </div>

      <div className="relative flex flex-col pt-5 pb-20 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <button onClick={prevPage} className="p-2 rounded-full bg-white text-indigo-600 hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
            <ChevronLeft size={24} />
          </button>
          <motion.div 
            className="text-center flex-grow"
            key={currentPage}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">{pageContent[currentPage].title}</h2>
            <div className="text-lg text-gray-300 max-w-3xl mx-auto">
              {typeof pageContent[currentPage].content === 'string' 
                ? <p>{pageContent[currentPage].content}</p>
                : pageContent[currentPage].content
              }
            </div>
          </motion.div>
          <button onClick={nextPage} className="p-2 rounded-full bg-white text-indigo-600 hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mb-10">
          {pageContent.map((_, index) => (
            <div 
              key={index} 
              className={`w-3 h-3 rounded-full ${index === currentPage ? 'bg-white' : 'bg-gray-500'}`}
            ></div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-3 lg:px-0 mt-5 sm:my-5 gap-3">
          {featuresTop.map((feature, idx) => (
            <FeatureBox key={idx} feature={feature} index={idx} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_350px_350px_1fr_1fr] px-3 lg:px-0 mt-3 sm:mt-5 gap-3 ">
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          {featuresBottom.map((feature, idx) => (
            <FeatureBox key={idx} feature={feature} index={idx + 3} />
          ))}
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </>
  );
}

// AnimatedText component
const AnimatedText: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-purple-400 text-2xl font-bold"
      >
        {texts[currentIndex]}
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(Hero2);