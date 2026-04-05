"use client";

import { Mail, MapPin, Phone, Clock, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ContactInfo() {
  return (
    <div className="text-gray-900 space-y-8">
      {/* Header */}
      <ScrollReveal direction="left" delay={0}>
        <div>
          <span className="text-rose-500 font-bold tracking-widest text-sm uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Seamless Communication, <br /> Global Impact.
          </h2>
          <p className="text-gray-600 text-lg max-w-md">
            Ready to scale your vision? Our team is prepared to provide the strategic resources you need.
          </p>
        </div>
      </ScrollReveal>

      {/* Contact Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-gray-200 border-b">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-start gap-4">
            <div className="bg-rose-500/20 p-3 rounded-full text-rose-500">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Head Office</h4>
              <p className="text-gray-600 text-sm">
                Jl. Cempaka Wangi No 22<br />Jakarta - Indonesia
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex items-start gap-4">
            <div className="bg-rose-500/20 p-3 rounded-full text-rose-500">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Email Support</h4>
              <p className="text-gray-600 text-sm">
                <a href="mailto:support@rzmega.com" className="hover:text-black transition-colors">support@rzmega.com</a><br />
                <a href="mailto:hello@rzmega.com" className="hover:text-black transition-colors">hello@rzmega.com</a>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex items-start gap-4">
            <div className="bg-rose-500/20 p-3 rounded-full text-rose-500">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Let&apos;s Talk</h4>
              <p className="text-gray-600 text-sm">
                Phone: +6221.2002.2012<br />Fax: +6221.2002.2013
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex items-start gap-4">
            <div className="bg-rose-500/20 p-3 rounded-full text-rose-500">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Working Hours</h4>
              <p className="text-gray-600 text-sm">
                Monday - Friday<br />09am - 06pm
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Social Media */}
      <ScrollReveal direction="up" delay={0.5}>
        <div>
          <h4 className="font-bold text-lg mb-4">Follow our social media</h4>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-rose-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
