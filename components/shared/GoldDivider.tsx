"use client";

import { motion } from "framer-motion";
import { goldDividerReveal } from "@/lib/animations";

interface GoldDividerProps {
  className?: string;
  width?: string;
  centered?: boolean;
}

export default function GoldDivider({ 
  className = "", 
  width = "w-16 md:w-24",
  centered = false 
}: GoldDividerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={goldDividerReveal}
      className={`h-[1px] bg-gold ${width} ${centered ? "mx-auto origin-center" : "origin-left"} ${className}`}
    />
  );
}
