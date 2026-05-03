"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
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

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats: Stat[] = [
    { value: 9, suffix: "+", label: "Years" },
    { value: 2400, suffix: "+", label: "Clients" },
    { value: 3, suffix: "", label: "Awards" },
  ];

  return (
    <section ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Two-column layout: Image left, Text right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Large editorial image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800&q=80"
                  alt="Salon interior with styling stations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700"
                />
              </motion.div>
            </div>
            {/* Gold frame accent - shifted for editorial feel */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-8 -right-8 w-full h-full border border-gold/40 -z-10"
            />
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pl-0 lg:pl-10"
          >
            <SectionHeading 
              eyebrow="OUR PHILOSOPHY"
              title="Beauty is not an afterthought — it is an art form."
            />

            {/* Body text */}
            <div className="space-y-6 mb-12">
              <p className="text-muted text-base md:text-lg leading-relaxed font-light">
                Founded in 2015, Salon Latre has grown from a boutique studio to one of Ahmedabad&apos;s most sought-after luxury salons. Our philosophy is simple: every client deserves undivided attention.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed font-light">
                Step into our serene space and leave the world behind. From the warm welcome to the final reveal, your experience is crafted with intention and care.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="flex gap-8 md:gap-16 mb-12 border-t border-gold/20 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                >
                  <span className="font-heading text-4xl md:text-5xl font-normal text-dark">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="font-subheading text-[10px] uppercase tracking-[0.2em] text-muted/80 mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA - Text link with gold underline */}
            <Link
              href="/team"
              className="inline-flex items-center gap-3 font-subheading text-xs uppercase tracking-[0.25em] text-dark hover:text-gold transition-colors group"
            >
              <span className="relative pb-1">
                Discover Our Story
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100 scale-x-0" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
