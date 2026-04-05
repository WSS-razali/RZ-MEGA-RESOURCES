"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BRANDS } from "@/constants/brands";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function HeroSection() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black rounded-t-[3rem]">
      {/* Static Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/logos/sc%20logo.jpg')" }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Copy */}
        <div className="text-white space-y-8 max-w-2xl">
          {/* Word-by-word text reveal on scroll */}
          <TextReveal
            as="h1"
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Unifying Excellence Across Industries.
          </TextReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xl text-gray-200 max-w-lg">
              The parent organization for RZ Kitchen, WSS Digital Labs, RXZ
              Ventures, and Cahayateras.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex gap-4">
              <button className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5">
                <span className="flex items-center gap-2">
                  Explore The Ecosystem
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Brand Matrix with stagger */}
        <div ref={gridRef} className="grid grid-cols-2 gap-4">
          {BRANDS.map((brand, index) => {
            let logoTransform = "scale-[2.5] -translate-y-8";
            if (brand.id === 'wss-labs') logoTransform = "scale-[1.6] -translate-y-2";
            if (brand.id === 'cahayateras') logoTransform = "scale-[2.0] -translate-y-8";
            if (brand.id === 'rz-kitchen') logoTransform = "scale-[2.5] -translate-y-14";
            if (brand.id === 'rxz-ventures') logoTransform = "scale-[2.5] -translate-y-14";

            return (
            <Link href={`/brands/${brand.id}`} key={brand.id}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={
                  gridInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 60, scale: 0.9 }
                }
                transition={{
                  delay: 0.15 + index * 0.12,
                  duration: 0.6,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={`group relative p-8 h-64 rounded-2xl border backdrop-blur-md transition-colors cursor-pointer overflow-hidden flex flex-col justify-between ${
                  brand.id === 'rz-kitchen' || brand.id === 'cahayateras'
                    ? 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30'
                    : 'bg-black/50 border-white/5 hover:bg-black/70 hover:border-white/10'
                }`}
              >
                <div className="relative z-10 w-full">
                  {brand.logo ? (
                    <div className="h-24 w-full mb-6 -mt-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className={`w-full h-full object-contain object-left-top drop-shadow-sm origin-top-left ${logoTransform}`} 
                      />
                    </div>
                  ) : (
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {brand.name}
                    </h3>
                  )}
                  <p className="text-sm text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity pr-4">
                    {brand.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Internal Card Gradient Hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent`}
                />
              </motion.div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
