"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PROJECTS } from "@/data/projects";
import { OptimizedImage } from "@/components/OptimizedImage";

export function ProjectGallery() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(2); // center card

  // Ensure we always have exactly 5 cards
  const projects = PROJECTS.slice(0, 5);

  // Card configuration for the fan layout
  // Position offsets, rotation, scale, and z-index based on distance from center
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);

    // Positions spread out from center
    const xPositions: Record<number, number> = {
      [-2]: -420,
      [-1]: -220,
      0: 0,
      1: 220,
      2: 420,
    };

    // Rotations create the fan effect
    const rotations: Record<number, number> = {
      [-2]: -18,
      [-1]: -8,
      0: 0,
      1: 8,
      2: 18,
    };

    // Scale decreases as cards move away from center
    const scales: Record<number, number> = {
      0: 1,
      1: 0.82,
      2: 0.68,
    };

    // Opacity decreases slightly for outer cards
    const opacities: Record<number, number> = {
      0: 1,
      1: 0.85,
      2: 0.6,
    };

    return {
      x: xPositions[offset] ?? (offset > 0 ? 520 : -520),
      rotateY: rotations[offset] ?? (offset > 0 ? 25 : -25),
      scale: scales[absOffset] ?? 0.5,
      opacity: opacities[absOffset] ?? 0.4,
      zIndex: 10 - absOffset,
    };
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Card Carousel Container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          perspective: "1200px",
          height: "480px",
        }}
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className="absolute cursor-pointer"
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                animate={
                  isInView
                    ? {
                        opacity: style.opacity,
                        x: style.x,
                        rotateY: style.rotateY,
                        scale: style.scale,
                        zIndex: style.zIndex,
                        y: 0,
                      }
                    : { opacity: 0, y: 100, scale: 0.5 }
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 28,
                  mass: 1,
                  delay: isInView ? index * 0.08 : 0,
                }}
                whileHover={
                  isActive
                    ? { scale: 1.04, y: -8 }
                    : { scale: style.scale * 1.05 }
                }
                style={{
                  transformStyle: "preserve-3d",
                  width: isActive ? "320px" : "280px",
                }}
              >
                <div
                  className={`
                    relative overflow-hidden rounded-2xl 
                    bg-gradient-to-br from-white/15 to-white/5
                    backdrop-blur-sm
                    border transition-all duration-500
                    ${
                      isActive
                        ? "border-white/30 shadow-2xl shadow-black/60"
                        : "border-white/10 shadow-lg shadow-black/40"
                    }
                  `}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isActive ? "h-[300px]" : "h-[240px]"
                    } transition-all duration-500`}
                  >
                    <OptimizedImage
                      src={project.image_url}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover w-full h-full"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full text-black">
                        {project.tag}
                      </span>
                    </div>

                    {/* Active indicator glow */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 border-2 border-red-500/40 rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 relative">
                    <h3
                      className={`font-bold text-white mb-1 leading-tight transition-all duration-300 ${
                        isActive ? "text-lg" : "text-sm"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-gray-400 line-clamp-2 transition-all duration-300 ${
                        isActive ? "text-xs" : "text-[11px]"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* CTA — visible only on active card */}
                    <motion.div
                      className="mt-3 flex items-center gap-1 text-xs font-semibold text-red-400"
                      initial={{ opacity: 0, y: 8 }}
                      animate={
                        isActive
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 8 }
                      }
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      View Case Study
                      <span className="inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-red-500"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`View project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
