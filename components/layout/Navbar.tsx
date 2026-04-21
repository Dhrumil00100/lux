"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/loyalty", label: "Loyalty" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-[#0D0D0D]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo - Cormorant Garamond, letter-spaced */}
            <Link href="/" className="relative z-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`font-heading text-xl md:text-2xl font-normal tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isScrolled || !isHomePage ? "text-white" : "text-white"
                }`}
              >
                Salon Latre
              </motion.span>
            </Link>

            {/* Desktop Navigation - Center, DM Sans caps */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 group font-body ${
                      isScrolled || !isHomePage
                        ? "text-white/70 hover:text-white"
                        : "text-white/70 hover:text-white"
                    } ${pathname === link.href ? "text-gold" : ""}`}
                  >
                    {link.label}
                    {/* Gold underline slides in from left */}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-px bg-gold transform origin-left transition-transform duration-200 ease-out ${
                        pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA - Gold outlined, fills on hover */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block"
            >
              <Link href="/book">
                <button className="relative px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase rounded-none overflow-hidden group border border-gold text-gold hover:text-dark transition-colors duration-300">
                  {/* Gold fill sweeps left to right */}
                  <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10">Book Now</span>
                </button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 transition-colors duration-300 text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Full-screen overlay in dark with gold accents */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-2xl font-normal tracking-[0.1em] transition-colors duration-300 ${
                      pathname === link.href ? "text-gold" : "text-white hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <button className="relative px-10 py-4 text-xs font-medium tracking-[0.15em] uppercase border border-gold text-gold hover:text-dark transition-colors duration-300 overflow-hidden group">
                    <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10">Book Now</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
