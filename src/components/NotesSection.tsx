"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { TextReveal } from "@/components/animations/TextReveal";

interface Note {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tag: string;
}

const NOTES: Note[] = [
  {
    id: 1,
    title: "We built nod.so to save us $3k in bills",
    date: "Feb 12, 2026",
    description:
      "I was paying around $250/month for email services I barely used. Kit for one product. Mailchimp for another. Separate accounts for Gratu, tini.bio, mx.works, ClawDeck...",
    image: "/images/notes/nod-so.jpg",
    tag: "Product",
  },
  {
    id: 2,
    title: "Building ClawDeck",
    date: "Feb 3, 2026",
    description:
      "Over the weekend I built ClawDeck, with the assistance of my bot, Maxie. It's a kanban mission control for your OpenClaw bot. The idea is simple. Take the simplicity of a...",
    image: "/images/notes/clawdeck.jpg",
    tag: "AI",
  },
  {
    id: 3,
    title: "Gratu goes to TikTok",
    date: "Jan 23, 2026",
    description:
      "This week I started posting TikTok slideshows for Gratu. The format is simple: 5-slide photo carousels. Emotional hook on slide 1, story in the middle, app screenshots and CTA at...",
    image: "/images/notes/tiktok.jpg",
    tag: "Product",
  },
  {
    id: 4,
    title: "The Future of RZ Mega",
    date: "Jan 15, 2026",
    description:
      "Exploring new horizons in digital transformation and physical infrastructure. How we plan to integrate AI into our core construction logistics...",
    image: "/images/notes/future.jpg",
    tag: "Vision",
  },
  {
    id: 5,
    title: "Optimizing Supply Chains",
    date: "Jan 10, 2026",
    description:
      "A deep dive into how we reduced delivery times by 40% using our proprietary fleet management software and predictive analytics...",
    image: "/images/notes/supply-chain.jpg",
    tag: "Operations",
  },
  {
    id: 6,
    title: "Community Outreach 2025",
    date: "Dec 20, 2025",
    description:
      "Reflecting on a year of giving back. From food drives to scholarship programs, here's how RZ Mega impacted the local community...",
    image: "/images/notes/community.jpg",
    tag: "Impact",
  },
];

export function NotesSection() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header with text reveal */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold text-rose-500 mb-4"
          >
            Notes
          </motion.h2>
          <TextReveal
            as="p"
            className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl leading-tight"
          >
            What we're building, exploring, and learning. Occasional updates from the studio.
          </TextReveal>
        </div>

        {/* Grid with stagger reveals */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {NOTES.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={
                gridInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 60, scale: 0.95 }
              }
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden hover:bg-[#222] transition-all duration-500 border border-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                    {note.tag}
                  </span>
                </div>
                {/* Fallback color if image missing */}
                <div className="absolute inset-0 bg-gray-800" />
                <OptimizedImage
                  src={note.image}
                  alt={note.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3 font-medium">
                  {note.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-500 transition-colors">
                  {note.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {note.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
