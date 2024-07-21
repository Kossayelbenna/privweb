"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const defaultVariants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

const BlurIn: React.FC<BlurInProps> = React.memo(({ 
  word, 
  className, 
  variant = defaultVariants, 
  duration = 0.5
}) => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={variant}
      className={cn(
        className,
        "font-display text-center text-4xl font-extrabold tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]",
        "will-change-auto"
      )}
    >
      {word}
    </motion.h1>
  );
});

BlurIn.displayName = 'BlurIn';

export default BlurIn;

