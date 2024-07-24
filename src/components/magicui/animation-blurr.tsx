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
  duration = 0.4
}) => {
  const variants = React.useMemo(() => ({
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  }), []);

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration }}
    >
      {word}
    </motion.span>
  );
});

BlurIn.displayName = 'BlurIn';

export default BlurIn;