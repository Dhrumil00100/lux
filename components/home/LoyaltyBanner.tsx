"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Calendar, Gift, Sparkles } from "lucide-react";

const steps = [
  { icon: Calendar, label: "Book", description: "Schedule your appointment" },
  { icon: Sparkles, label: "Earn", description: "Collect points on every visit" },
  { icon: Gift, label: "Redeem", description: "Unlock exclusive rewards" },
];

export default function LoyaltyBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left - Gold gradient background with headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-gold to-gold-light p-12 lg:p-16 flex flex-col justify-center"
          >
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <Sparkles className="w-5 h-5 text-dark/60" />
                <span className="font-subheading text-xs uppercase tracking-[0.3em] text-dark/60">
                  Rewards Programme
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-dark leading-[1.1] mb-6"
              >
                Earn Rewards.
                <br />                Live Lavishly.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-dark/70 text-lg max-w-md"
              >
                Join our loyalty programme and earn points on every visit. The more you indulge, the more you earn.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Dark background with 3 step icons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-dark p-12 lg:p-16 flex flex-col justify-center"
          >
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-1">
                      {step.label}
                    </h3>
                    <p className="text-white/50 text-sm">{step.description}</p>
                  </div>

                  {/* Arrow connector (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute ml-7 mt-14 w-px h-8 bg-gold/20" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10"
            >
              <Link href="/loyalty">
                <button className="relative px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase bg-gold text-dark hover:text-dark overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10">Join the Programme</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
