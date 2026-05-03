"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: keyof typeof motionVariants;
}

const motionVariants = {
  up: fadeInUp,
};

export default function RevealWrapper({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const selectedVariant = motionVariants[variant] || fadeInUp;
  
  // Custom variant to inject delay if provided
  const customVariant = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any).transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={customVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}
