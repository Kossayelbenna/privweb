"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  duration?: number;
}

const BlurIn: React.FC<BlurInProps> = React.memo(({ 
  word, 
  className, 
  duration = 0.4  // Réduit pour améliorer la performance
}) => {
  const variants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={variants}
      transition={{ duration, ease: "easeOut" }}
      className={cn(
        className,
        "font-display text-center text-4xl font-extrabold tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]"
      )}
    >
      {word}
    </motion.h1>
  );
});

BlurIn.displayName = 'BlurIn';

export default BlurIn;
