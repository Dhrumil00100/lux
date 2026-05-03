"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

interface ServiceCategory {
  number: string;
  name: string;
  description: string;
}

const serviceCategories: ServiceCategory[] = [
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
    name: "Skin & Facial",
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
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="Curated for Perfection"
          centered={true}
        />

        {/* Services Grid - Editorial layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gold/10">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className="group bg-white p-8 lg:p-12 border-b border-r border-gold/10 transition-colors duration-500 hover:bg-cream"
            >
              {/* Large number in gold */}
              <span className="font-subheading text-xs font-light text-gold/60 tracking-[0.2em] block mb-12 group-hover:text-gold transition-colors duration-500">
                NO. {service.number}
              </span>

              {/* Category name */}
              <h3 className="font-heading text-3xl md:text-4xl font-normal text-dark mb-6 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-muted/80 text-base leading-relaxed font-light mb-10 min-h-[4rem]">
                {service.description}
              </p>

              {/* Explore link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-3 font-subheading text-[10px] uppercase tracking-[0.2em] text-dark hover:text-gold transition-colors group/link"
              >
                <span className="relative pb-1">
                  Explore
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left transition-transform duration-300 group-hover/link:scale-x-100 scale-x-0" />
                </span>
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-2" />
              </Link>
            </motion.div>
          ))}
          
          {/* Empty cell to complete the grid visually if needed, though 5 items in 3 cols leaves 1 empty slot. We can fill it with a CTA. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="group bg-dark p-8 lg:p-12 border-b border-r border-gold/10 flex flex-col justify-center items-center text-center transition-colors duration-500 hover:bg-navy"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-normal text-white mb-6">
              View All
            </h3>
            <Link
              href="/services"
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-dark transition-all duration-500"
            >
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
