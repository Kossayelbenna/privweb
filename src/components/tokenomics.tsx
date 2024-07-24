import React, { useState, useMemo } from "react";
import { useTranslator } from "@/lib/use-translator";
import { BorderBeam } from "./magicui/border-beam";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Assurez-vous d'avoir installé lucide-react

function Tokenomics() {
  const tr = useTranslator();
  const [currentIndex, setCurrentIndex] = useState(0);

  const memoizedTokenomicsTitles = useMemo(() => tr("tokenomicsTitles"), [tr]);
  const memoizedTokenomicsSubtitle = useMemo(() => tr("tokenomicsSubtitle"), [tr]);
  const memoizedTokenomicsReadMore = useMemo(() => tr("tokenomicsReadMore"), [tr]);
  const memoizedTokenomicsFooter = useMemo(() => tr("tokenomicsFooter"), [tr]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % memoizedTokenomicsTitles.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + memoizedTokenomicsTitles.length) % memoizedTokenomicsTitles.length);

  return (
    <div
      id="tokenomics"
      className="max-w-[1200px] mx-auto px-2 lg:px-4 rounded-2xl bg-black bg-opacity-50 relative my-10"
    >
      <BorderBeam />
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <h3
          className="text-3xl lg:text-4xl font-bold text-white text-center"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          Tokenomics
        </h3>
      </div>

      <h3 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left p-5">
        {memoizedTokenomicsSubtitle}
      </h3>

      {/* Mobile Carousel */}
      <div className="md:hidden p-5">
        <div className="relative bg-white/10 p-6 rounded-lg flex flex-col gap-2 shadow-md backdrop-blur-md ease-in-out">
          <BorderBeam />
          <h5 className="text-xl font-bold text-white">{memoizedTokenomicsTitles[currentIndex].title}</h5>
          <p className="text-base text-white">{memoizedTokenomicsTitles[currentIndex].description}</p>
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="text-white"><ChevronLeft size={24} /></button>
            <button onClick={handleNext} className="text-white"><ChevronRight size={24} /></button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {memoizedTokenomicsTitles.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {memoizedTokenomicsTitles.map((e, index) => (
          <div
            key={index}
            className="relative bg-white/10 p-6 md:p-8 rounded-lg flex gap-2 flex-col shadow-md backdrop-blur-md ease-in-out"
          >
            <h5 className="text-xl font-bold text-white">{e.title}</h5>
            <p className="text-base text-white">{e.description}</p>
            <BorderBeam />
          </div>
        ))}
      </div>

      <div className="p-5">
        <h3 className="text-xl lg:text-2xl font-bold text-white text-right">
          {memoizedTokenomicsReadMore}
        </h3>
        <h5 className="text-xl lg:text-2xl font-bold text-white text-left mt-4">
          {memoizedTokenomicsFooter}
        </h5>
      </div>
    </div>
  );
}

export default React.memo(Tokenomics);