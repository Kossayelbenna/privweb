"use client";

import React, { forwardRef, use, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useTranslator } from "@/lib/use-translator";
import { BorderBeam } from "./magicui/border-beam";

const Box = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; border?: boolean }
>(({ className, children, border = true }, ref) => {
  return (
    <div className="relative" ref={ref}>
      <div
        className={cn(
          "text-center  z-40 min-w-24 flex h-12 items-center justify-center rounded-3xl w-fit bg-white/30 backdrop-blur-md p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-xs md:text-sm ",
          className
        )}
      >
        {children}
        {border && <BorderBeam />}
      </div>
    </div>
  );
});

Box.displayName = "Box";

export function CPU() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const tr = useTranslator();

  return (
    <div
      className="relative flex h-[500px] w-full   justify-center overflow-hidden rounded-lg  p-10 "
      ref={containerRef}
    >
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-8}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 flex items-center justify-center">
            <Box ref={div5Ref} className="-translate-y-[25px]">
              {tr("cpu")[1]}
            </Box>
          </div>
          <Box ref={div1Ref} className="-translate-x-[25px]">
            {tr("cpu")[0]}
          </Box>
          <div></div>
          <Box ref={div5Ref} className="-translate-x-[-20px]">
            {tr("cpu")[2]}
          </Box>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Box
            className=" rounded-sm  bg-transparent border-none"
            ref={div4Ref}
            border={false}
          >
            <img src="/images/dog.png" alt="" className="w-52 h-52" />
          </Box>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Box ref={div6Ref} className="-translate-x-[35px]">
            {tr("cpu")[3]}
          </Box>
          <div></div>
          <Box ref={div7Ref} className="-translate-x-[-35px]">
            {tr("cpu")[4]}
          </Box>
          <div className="col-span-3 flex items-center justify-center">
            <Box ref={div2Ref} className="-translate-y-[-25px]"> {tr("cpu")[5]}</Box>
          </div>
        </div>
      </div>
    </div>
  );
}
