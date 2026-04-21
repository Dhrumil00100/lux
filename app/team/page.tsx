"use client";

import { motion } from "framer-motion";
import { Award, Clock, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { staff } from "@/lib/mock-data";

export default function TeamPage() {
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
              The Artists
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1] tracking-tight"
          >
            Meet Our{" "}
            <span className="text-gold italic">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/60 text-lg mt-6 max-w-xl"
          >
            Passionate experts dedicated to bringing out your best. Each stylist brings unique skills and years of experience.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gold/10 rounded-sm overflow-hidden hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="grid md:grid-cols-[300px_1fr]">
                  {/* Photo */}
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <motion.img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-8 flex flex-col">
                    <div className="flex-grow">
                      <h2 className="font-heading text-3xl font-semibold text-dark group-hover:text-gold transition-colors duration-300">
                        {member.name}
                      </h2>
                      <p className="text-gold font-medium mt-1 text-sm uppercase tracking-wider">{member.role}</p>

                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center px-3 py-1.5 bg-gold/10 rounded-full text-sm text-muted">
                          <Clock className="w-4 h-4 mr-1.5 text-gold" />
                          {member.experience} years experience
                        </div>
                      </div>

                      <p className="text-muted mt-5 leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="mt-6">
                        <p className="font-subheading text-xs uppercase tracking-wider text-muted mb-3">
                          Specialisations:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialisations.map((spec) => (
                            <span
                              key={spec}
                              className="inline-flex items-center px-3 py-1.5 bg-gold/10 text-dark text-sm rounded-sm border border-gold/10"
                            >
                              <Sparkles className="w-3 h-3 mr-1.5 text-gold" />
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/book?staff=${member.id}`}
                      className="mt-6 inline-flex items-center text-gold hover:text-gold-light transition-colors group/link"
                    >
                      <span className="font-subheading text-xs uppercase tracking-wider mr-2">
                        Book with {member.name.split(" ")[0]}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-dark relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
              Join Our <span className="text-gold italic">Team</span>
            </h2>
            <p className="text-white/60 mt-4 mb-10 max-w-2xl mx-auto text-lg">
              We&apos;re always looking for talented stylists and beauty professionals who share our passion for excellence. Get in touch to learn about career opportunities.
            </p>
            <a
              href="mailto:careers@salonlatre.com"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-dark font-medium rounded-sm hover:bg-gold-light transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Send Your Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
