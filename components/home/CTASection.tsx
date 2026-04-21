"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-dark py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle editorial image in background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1] tracking-tight mb-6"
        >
          Your Best Look
          <span className="text-gold italic"> Awaits</span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Step into a world of luxury and let our master stylists craft a look that is uniquely yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link href="/book">
            <button className="relative px-12 py-5 text-sm font-medium tracking-[0.2em] uppercase bg-gold text-dark hover:text-dark overflow-hidden group">
              <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book an Appointment</span>
            </button>
          </Link>
        </motion.div>

        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-px bg-gold mx-auto mt-16 origin-center"
        />
      </div>
    </section>
  );
}
