"use client";

import React, { forwardRef, useRef, useMemo } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useTranslator } from "@/lib/use-translator";
import { BorderBeam } from "./magicui/border-beam";

const Box = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; border?: boolean }>(
  ({ className, children, border = true }, ref) => {
    return (
      <div className="relative" ref={ref}>
        <div
          className={cn(
            "text-center z-40 min-w-24 flex h-12 items-center justify-center rounded-3xl w-fit bg-white/30 backdrop-blur-md p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-xs md:text-sm",
            className
          )}
        >
          {children}
          {border && <BorderBeam />}
        </div>
      </div>
    );
  }
);

Box.displayName = "Box";

export function CPU() {
  const containerRef = useRef<HTMLDivElement>(null);
  const divRefs = [
    useRef<HTMLDivElement>(null), // div1Ref
    useRef<HTMLDivElement>(null), // div2Ref
    useRef<HTMLDivElement>(null), // div3Ref
    useRef<HTMLDivElement>(null), // div4Ref
    useRef<HTMLDivElement>(null), // div5Ref
    useRef<HTMLDivElement>(null), // div6Ref
    useRef<HTMLDivElement>(null), // div7Ref
  ];

  const tr = useTranslator();

  // Memoizing translations to prevent re-calculation on re-renders
  const translations = useMemo(() => tr("cpu"), [tr]);

  return (
    <div
      className="relative flex h-[500px] w-full justify-center overflow-hidden rounded-lg p-10"
      ref={containerRef}
    >
      {/** Animated beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={divRefs[0]} toRef={divRefs[3]} curvature={-75} endYOffset={-8} />
      <AnimatedBeam containerRef={containerRef} fromRef={divRefs[1]} toRef={divRefs[3]} />
      <AnimatedBeam containerRef={containerRef} fromRef={divRefs[2]} toRef={divRefs[3]} curvature={75} endYOffset={10} />
      <AnimatedBeam containerRef={containerRef} fromRef={divRefs[4]} toRef={divRefs[3]} curvature={-75} endYOffset={-10} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={divRefs[5]} toRef={divRefs[3]} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={divRefs[6]} toRef={divRefs[3]} curvature={75} endYOffset={10} reverse />

      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 flex items-center justify-center">
            <Box ref={divRefs[4]} className="-translate-y-[25px]">
              {translations[1]}
            </Box>
          </div>
          <Box ref={divRefs[0]} className="-translate-x-[25px]">
            {translations[0]}
          </Box>
          <div></div>
          <Box ref={divRefs[4]} className="-translate-x-[-20px]">
            {translations[2]}
          </Box>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Box className="rounded-sm bg-transparent border-none" ref={divRefs[3]} border={false}>
            <img src="/images/dog.png" alt="" className="w-52 h-52" />
          </Box>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Box ref={divRefs[5]} className="-translate-x-[35px]">
            {translations[3]}
          </Box>
          <div></div>
          <Box ref={divRefs[6]} className="-translate-x-[-35px]">
            {translations[4]}
          </Box>
          <div className="col-span-3 flex items-center justify-center">
            <Box ref={divRefs[1]} className="-translate-y-[-25px]">
              {translations[5]}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
