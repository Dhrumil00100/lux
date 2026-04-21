"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/mock-data";

export default function GalleryStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Take first 6 images for the strip
  const stripImages = galleryImages.slice(0, 6);

  return (
    <section ref={ref} className="bg-dark py-16 md:py-24 overflow-hidden">
      {/* Gallery Strip - horizontal scroll */}
      <div className="flex gap-0">
        {stripImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative flex-shrink-0 w-[320px] md:w-[380px] h-[400px] md:h-[480px] overflow-hidden cursor-pointer"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Gold overlay with category label on hover */}
            <div className="absolute inset-0 bg-gold/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-subheading text-xs uppercase tracking-[0.3em] text-dark/60">
                  {image.category}
                </span>
                <p className="font-heading text-xl text-dark mt-2">{image.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View Full Gallery CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-12"
      >
        <Link
          href="/gallery"
          className="inline-flex items-center gap-3 font-subheading text-sm uppercase tracking-[0.2em] text-gold hover:text-white transition-colors group"
        >
          <span>View Full Gallery</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
