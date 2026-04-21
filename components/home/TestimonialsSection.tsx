"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/mock-data";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section ref={ref} className="section-padding bg-dark relative overflow-hidden">
      {/* Giant quotation mark in gold - decorative background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[400px] md:text-[600px] text-gold leading-none pointer-events-none select-none"
      >
        &ldquo;
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Testimonial Carousel */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              {/* Quote text - large Cormorant Garamond Italic */}
              <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-10">
                &ldquo;{currentTestimonial.text}&rdquo;
              </blockquote>

              {/* Client info */}
              <div className="flex flex-col items-center gap-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Name */}
                <p className="font-subheading text-sm uppercase tracking-[0.2em] text-white">
                  {currentTestimonial.name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center text-gold hover:text-white transition-colors border border-gold/30 hover:border-gold"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gold w-6" : "bg-gold/30 hover:bg-gold/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center text-gold hover:text-white transition-colors border border-gold/30 hover:border-gold"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
