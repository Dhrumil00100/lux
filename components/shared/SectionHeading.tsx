"use client";

import { motion } from "framer-motion";
import RevealWrapper from "./RevealWrapper";
import GoldDivider from "./GoldDivider";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const titleColor = isDark ? "text-white" : "text-dark";
  const eyebrowColor = isDark ? "text-gold/80" : "text-gold";
  const subtitleColor = isDark ? "text-white/70" : "text-muted";

  return (
    <div className={`mb-16 md:mb-24 ${centered ? "text-center flex flex-col items-center" : ""} ${className}`}>
      <RevealWrapper delay={0.1}>
        <div className={`flex items-center gap-4 mb-6 ${centered ? "justify-center" : ""}`}>
          {!centered && <GoldDivider width="w-12" />}
          {centered && <GoldDivider width="w-12" centered={true} />}
          <span className={`font-subheading text-[10px] uppercase tracking-[0.3em] ${eyebrowColor}`}>
            {eyebrow}
          </span>
          {centered && <GoldDivider width="w-12" centered={true} />}
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.2}>
        <h2 className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight ${titleColor}`}>
          {title}
        </h2>
      </RevealWrapper>

      {subtitle && (
        <RevealWrapper delay={0.3} className="mt-6">
          <p className={`text-base md:text-lg font-light max-w-2xl ${centered ? "mx-auto" : ""} ${subtitleColor}`}>
            {subtitle}
          </p>
        </RevealWrapper>
      )}
    </div>
  );
}
