"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  kind?: "text" | "photo";
}>;

export function Reveal({ children, className, kind = "text" }: RevealProps) {
  const reduce = useReducedMotion();

  const base = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 14,
      scale: kind === "photo" && !reduce ? 0.992 : 1,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  } as const;

  return (
    <motion.div
      className={className}
      variants={base}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.55, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: reduce ? 0.01 : kind === "photo" ? 1.6 : 1.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

