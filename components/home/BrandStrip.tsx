"use client";

import { motion } from "framer-motion";

const brandWords = [
  "PREMIUM",
  "EXCLUSIVE",
  "LUXURY",
  "BESPOKE",
  "CURATED",
  "PREMIUM",
  "EXCLUSIVE",
  "LUXURY",
  "BESPOKE",
  "CURATED",
];

export default function BrandStrip() {
  return (
    <section className="bg-dark py-6 overflow-hidden border-y border-gold/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {brandWords.map((word, index) => (
            <span
              key={index}
              className="font-subheading text-sm uppercase tracking-[0.3em] text-gold/80 mx-8"
            >
              {word}
              <span className="mx-8 text-gold/40">·</span>
            </span>
          ))}
        </div>
        <div className="flex animate-marquee2 whitespace-nowrap" aria-hidden="true">
          {brandWords.map((word, index) => (
            <span
              key={`dup-${index}`}
              className="font-subheading text-sm uppercase tracking-[0.3em] text-gold/80 mx-8"
            >
              {word}
              <span className="mx-8 text-gold/40">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
