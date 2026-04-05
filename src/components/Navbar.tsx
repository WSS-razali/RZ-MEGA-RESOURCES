"use client";

import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/hooks/use-scroll";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  const scrolled = useScroll(20);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled
          ? "w-[75%] md:w-[480px] bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg shadow-black/5"
          : "w-[75%] md:w-[480px] bg-white/50 backdrop-blur-sm border border-gray-100"
      } rounded-full px-4 py-1`}
    >
      <div className="flex items-center justify-between">
        {/* Logo Area */}
        <Link 
          href="/" 
          className="flex items-center justify-center px-3 py-0.5 rounded-xl bg-white hover:bg-gray-200 transition-all border border-transparent"
        >
          <Image 
            src="/images/logo.png" 
            alt="RZ Mega Resources" 
            width={120} 
            height={40} 
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#brands-overview" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Brands
          </Link>
          <Link href="/#projects" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Projects
          </Link>
          <Link href="/#notes" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Notes
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/#contact"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 border border-red-500/20 transition-all text-xs font-medium text-white shadow-lg shadow-red-600/20"
        >
          <span>Get in touch</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </nav>
  );
}
