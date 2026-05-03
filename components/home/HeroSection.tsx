"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Word-by-word text reveal animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const words = ["WHERE", "LUXURY", "MEETS", "ARTISTRY"];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] bg-dark overflow-hidden">
      {/* Background Layer with Parallax and Ken Burns */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: backgroundY }}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1560066984-138daaa0a5b2?w=1920&q=80"
            alt="Luxury salon interior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        {/* Gradient overlay - bottom to top for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-dark/20" /> {/* Slight dark tint everywhere */}
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 min-h-[100svh] pt-24 flex flex-col justify-center"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-5xl">
          {/* Main Heading - Word by word reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 flex flex-wrap gap-x-4 md:gap-x-6"
          >
            {words.map((word, i) => (
              <motion.h1
                key={i}
                variants={wordVariants}
                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-normal leading-[1.1] tracking-tight text-white m-0"
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
            transition={{ delay: 1.2 }}
            className="text-white/70 text-base md:text-lg lg:text-xl font-body max-w-xl mb-12 leading-relaxed font-light tracking-wide"
          >
            Premium hair & beauty experiences curated for the discerning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link href="/book">
              <button className="relative px-10 py-5 text-xs font-medium tracking-[0.25em] uppercase bg-gold text-dark overflow-hidden group">
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center gap-3">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </button>
            </Link>
            <Link href="/services">
              <button className="relative px-10 py-5 text-xs font-medium tracking-[0.25em] uppercase border border-white/20 text-white overflow-hidden group">
                <span className="absolute inset-0 bg-white/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">View Services</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* EST. 2018 · AHMEDABAD - Centered over gold line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-24 left-0 right-0 flex items-center justify-center gap-6 z-10"
      >
        <div className="w-16 md:w-32 h-[1px] bg-gold/50" />
        <span className="font-subheading text-[10px] uppercase tracking-[0.4em] text-gold/80">
          EST. 2018 · AHMEDABAD
        </span>
        <div className="w-16 md:w-32 h-[1px] bg-gold/50" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
