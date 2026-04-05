"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text?: string;
  speed?: number;
  className?: string;
  textClassName?: string;
  separator?: string;
  reverse?: boolean;
}

export function Marquee({
  text = "EXCELLENCE • INNOVATION • IMPACT • GROWTH",
  speed = 20,
  className = "",
  textClassName = "",
  separator = " — ",
  reverse = false,
}: MarqueeProps) {
  // Create enough repetitions for seamless loop
  const repeatedText = Array(6).fill(`${text}${separator}`).join("");

  return (
    <div
      className={`relative overflow-hidden whitespace-nowrap ${className}`}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <motion.div
        className="inline-block"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span
          className={`inline-block text-6xl md:text-8xl font-black tracking-tighter text-black/[0.05] select-none ${textClassName}`}
        >
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
