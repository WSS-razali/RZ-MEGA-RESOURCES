"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function RZMegaHero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.96]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden rounded-b-[3rem]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/herobg.jpg')" }}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Overline tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">
            Since 2020 • Malaysia
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] max-w-3xl tracking-tight"
        >
          Powering Malaysia&apos;s Most Dynamic Ventures
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 text-base md:text-lg text-white/70 max-w-xl leading-relaxed"
        >
          We transform vision into enterprise excellence, blending innovative strategy with functional execution across our portfolio of brands.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors duration-200 shadow-lg shadow-black/20"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
