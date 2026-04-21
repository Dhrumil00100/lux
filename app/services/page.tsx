"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/mock-data";

const categories = [
  { id: "all", label: "All Services" },
  { id: "hair-styling", label: "Hair Styling" },
  { id: "colouring", label: "Colouring" },
  { id: "skin", label: "Skin Care" },
  { id: "nails", label: "Nails" },
  { id: "bridal", label: "Bridal" },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-12 h-px bg-gold"
            />
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-subheading text-xs uppercase tracking-[0.3em] text-gold">
              Our Menu
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1] tracking-tight"
          >
            Services &{" "}
            <span className="text-gold italic">Treatments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/60 text-lg mt-6 max-w-xl"
          >
            Discover our complete range of luxury services, crafted with expertise and delivered with care.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gold/10 bg-cream sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 font-subheading text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-dark"
                    : "bg-transparent text-muted hover:text-dark border border-gold/20 hover:border-gold"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-gold/10 rounded-sm overflow-hidden hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <Badge
                        variant="outline"
                        className="text-gold border-gold/30 bg-gold/5 capitalize text-xs tracking-wider"
                      >
                        {service.category.replace("-", " ")}
                      </Badge>
                      <div className="flex items-center text-muted text-sm">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {service.duration} min
                      </div>
                    </div>

                    <h2 className="font-heading text-2xl font-semibold text-dark group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h2>

                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gold/10">
                      <div>
                        <span className="text-muted text-xs uppercase tracking-wider">From</span>
                        <p className="font-heading text-3xl text-gold font-semibold">
                          ₹{service.price.toLocaleString()}
                        </p>
                      </div>
                      <Link
                        href={`/book?service=${service.id}`}
                        className="inline-flex items-center px-5 py-2.5 bg-dark text-white rounded-sm hover:bg-gold hover:text-dark transition-all duration-300 group/btn text-sm font-medium"
                      >
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted">No services found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201,169,110,0.5) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
            Not Sure What You{" "}
            <span className="text-gold italic">Need</span>?
          </h2>
          <p className="text-white/60 mt-4 mb-10 text-lg">
            Book a free consultation with our experts to find the perfect treatment for you.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-dark font-medium rounded-sm hover:bg-gold-light transition-all duration-300 text-sm tracking-wider uppercase"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
