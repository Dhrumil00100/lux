"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 9, suffix: "+", label: "Years" },
    { value: 2400, suffix: "+", label: "Clients" },
    { value: 3, suffix: "", label: "Awards" },
  ];

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Two-column layout: Image left, Text right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Large editorial image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800&q=80"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold frame accent - slightly overlapping */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 w-full h-full border border-gold -z-10"
            />
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-12 h-px bg-gold origin-left"
              />
              <span className="font-subheading text-xs uppercase tracking-[0.3em] text-gold">
                OUR PHILOSOPHY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-5xl font-semibold text-dark leading-[1.1] tracking-tight mb-8">
              Beauty is not an afterthought — it is an art form.
            </h2>

            {/* Body text */}
            <div className="space-y-4 mb-10">
              <p className="text-muted text-lg leading-relaxed">
                Founded in 2015, Salon Latre has grown from a boutique studio to one of Ahmedabad&apos;s most sought-after luxury salons. Our philosophy is simple: every client deserves undivided attention.
              </p>
              <p className="text-muted leading-relaxed">
                Step into our serene space and leave the world behind. From the warm welcome to the final reveal, your experience is crafted with intention and care.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="flex gap-12 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <span className="font-heading text-4xl md:text-5xl font-semibold text-dark">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="font-subheading text-xs uppercase tracking-[0.2em] text-muted mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA - Text link with gold underline */}
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-subheading text-sm uppercase tracking-[0.2em] text-dark hover:text-gold transition-colors group"
            >
              <span className="relative">
                Discover Our Story
                <span className="absolute bottom-0 left-0 w-full h-px bg-gold transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
