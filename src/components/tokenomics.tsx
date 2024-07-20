import { useTranslator } from "@/lib/use-translator";
import React from "react";
import { BorderBeam } from "./magicui/border-beam";

function Tokenomics() {
  const tr = useTranslator();
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <h3 className="text-4xl lg:text-4xl font-bold text-white text-left col-span-1 md:col-span-2 lg:col-span-3">
          {tr("tokenomicsSubtitle")}
        </h3>
        {tr("tokenomicsTitles").map((e, index) => (
          <div
            key={index}
            className="relative bg-white/10 p-6 md:p-8 rounded-lg flex gap-2 flex-col shadow-md backdrop-blur-md ease-in-out"
          >
            <h5 className="text-xl font-bold text-white">{e.title}</h5>
            <p className="text-base text-white">{e.description}</p>
            <BorderBeam />
          </div>
        ))}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
          <h3 className="text-xl lg:text-2xl font-bold text-white text-right col-span-1 md:col-span-2 lg:col-span-3">
          {tr("tokenomicsReadMore")}
        </h3>
        </div>
        <h5 className="text-xl lg:text-2xl font-bold text-white text-left">
            {tr("tokenomicsFooter")}
          </h5>
      </div>
    </div>
  );
}

export default Tokenomics;

