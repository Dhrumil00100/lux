"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Word-by-word text reveal animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  const words = ["WHERE", "LUXURY", "MEETS", "ARTISTRY"];

  return (
    <section className="relative min-h-screen bg-dark overflow-hidden">
      {/* Background Layer with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138daaa0a5b2?w=1920&q=80')`,
          }}
        />
        {/* Gradient overlay - bottom to top as per PRD */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 min-h-screen pt-24 flex flex-col justify-center">
        <div className="max-w-5xl">
          {/* Main Heading - Word by word reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            {words.map((word) => (
              <motion.h1
                key={word}
                variants={wordVariants}
                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-semibold leading-[0.9] tracking-tight text-white"
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="text-white/60 text-lg md:text-xl font-body max-w-xl mb-12 leading-relaxed"
          >
            Premium hair & beauty experiences curated for the discerning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/book">
              <button className="relative px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase bg-gold text-dark hover:text-dark overflow-hidden group">
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </Link>
            <Link href="/services">
              <button className="px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200">
                View Services
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* EST. 2018 · AHMEDABAD - Centered over gold line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-24 left-0 right-0 flex items-center justify-center gap-4"
      >
        <div className="w-24 h-px bg-gold" />
        <span className="font-subheading text-xs uppercase tracking-[0.3em] text-gold">
          EST. 2018 · AHMEDABAD
        </span>
        <div className="w-24 h-px bg-gold" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
