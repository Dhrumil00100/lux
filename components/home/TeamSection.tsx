"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { staff } from "@/lib/mock-data";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Take first 3 staff members
  const featuredStaff = staff.slice(0, 3);

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-dark leading-[1] tracking-tight"
          >
            The Hands Behind the
            <span className="text-gold italic"> Magic</span>
          </motion.h2>
        </motion.div>

        {/* Team Grid - 3 cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredStaff.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Portrait photo - tall 4:5 ratio */}
              <div className="relative aspect-[4/5] overflow-hidden mb-6"
            >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bio excerpt slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
              >
                  <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>

              {/* Name and Role */}
              <h3 className="font-heading text-2xl font-semibold text-dark mb-1 group-hover:text-gold transition-colors duration-300"
              >
                {member.name}
              </h3>
              <p className="font-body text-sm text-muted mb-4">{member.role}</p>

              {/* Specialisations as gold tag pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.specialisations.slice(0, 3).map((spec) => (
                  <span
                    key={spec}
                    className="inline-block px-3 py-1 text-xs font-subheading uppercase tracking-[0.1em] bg-gold/10 text-gold rounded-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Book CTA */}
              <Link
                href={`/book?staff=${member.id}`}
                className="inline-flex items-center gap-2 font-subheading text-xs uppercase tracking-[0.15em] text-dark hover:text-gold transition-colors group/link"
              >
                <span>Book with {member.name.split(" ")[0]}</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
