"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/mock-data";

export default function GalleryStrip() {
  // Take first 6 images for the strip and duplicate for seamless loop
  const stripImages = [...galleryImages.slice(0, 6), ...galleryImages.slice(0, 6)];

  return (
    <section className="bg-dark py-20 md:py-32 overflow-hidden border-y border-white/5 relative">
      {/* Eyebrow */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="font-subheading text-[10px] uppercase tracking-[0.3em] text-gold/80">
              THE PORTFOLIO
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-white leading-[1.1] tracking-tight">
            Our Masterpieces
          </h2>
        </div>
        
        {/* View Full Gallery CTA - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 font-subheading text-xs uppercase tracking-[0.25em] text-white hover:text-gold transition-colors group"
          >
            <span className="relative pb-1">
              View Collection
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>

      {/* Gallery Strip - Infinite marquee */}
      <div className="flex w-fit">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-4 md:gap-8 px-2 md:px-4"
        >
          {stripImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              whileHover={{ scale: 0.98 }}
              className="group relative flex-shrink-0 w-[280px] md:w-[400px] h-[360px] md:h-[520px] overflow-hidden cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 280px, 400px"
                className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <span className="font-subheading text-[10px] uppercase tracking-[0.3em] text-gold block mb-2">
                    {image.category}
                  </span>
                  <p className="font-heading text-2xl font-normal text-white px-4">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View Full Gallery CTA - Mobile */}
      <div className="mt-12 text-center md:hidden">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-3 font-subheading text-xs uppercase tracking-[0.2em] text-white hover:text-gold transition-colors group"
        >
          <span className="relative pb-1">
            View Collection
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
}
