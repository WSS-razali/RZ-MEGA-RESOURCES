"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const getInitial = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 80 };
    case "down":
      return { opacity: 0, y: -80 };
    case "left":
      return { opacity: 0, x: -80 };
    case "right":
      return { opacity: 0, x: 80 };
    case "scale":
      return { opacity: 0, scale: 0.85 };
  }
};

const getAnimate = (direction: Direction) => {
  switch (direction) {
    case "up":
    case "down":
      return { opacity: 1, y: 0 };
    case "left":
    case "right":
      return { opacity: 1, x: 0 };
    case "scale":
      return { opacity: 1, scale: 1 };
  }
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  threshold = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={isInView ? getAnimate(direction) : getInitial(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
