"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    number: "01",
    name: "Hair Styling",
    description: "Precision cuts, styling, and treatments tailored to enhance your natural beauty.",
  },
  {
    number: "02",
    name: "Colouring",
    description: "From balayage to global colour, our experts create stunning transformations.",
  },
  {
    number: "03",
    name: "Skin \u0026 Facial",
    description: "Rejuvenating facials and skincare treatments for radiant, healthy skin.",
  },
  {
    number: "04",
    name: "Nail Art",
    description: "Luxurious manicures and intricate nail art for perfectly polished hands.",
  },
  {
    number: "05",
    name: "Bridal",
    description: "Complete bridal packages for your special day, from hair to makeup.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-12 h-px bg-gold"
            />
            <span className="font-subheading text-xs uppercase tracking-[0.3em] text-gold">
              WHAT WE OFFER
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-12 h-px bg-gold"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-dark leading-[1] tracking-tight"
          >
            Curated for Perfection
          </motion.h2>
        </div>

        {/* Services Grid - 3 columns on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group bg-white p-8 lg:p-10 border border-transparent transition-all duration-200 ease-out hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              {/* Large number in gold */}
              <span className="font-heading text-5xl md:text-6xl font-semibold text-gold/30 group-hover:text-gold transition-colors duration-300">
                {service.number}
              </span>

              {/* Category name */}
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-dark mt-4 mb-4 group-hover:text-gold transition-colors duration-300">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Explore link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-subheading text-xs uppercase tracking-[0.2em] text-gold hover:text-dark transition-colors group/link"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
