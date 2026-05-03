"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/loyalty", label: "Loyalty" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? "bg-dark/70 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-500">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-heading text-xl md:text-2xl font-medium tracking-[0.2em] uppercase text-white transition-opacity group-hover:opacity-80"
              >
                Salon Latre
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 group font-body ${
                        isActive ? "text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-4 right-4 h-[1px] bg-white/30 transform origin-left transition-transform duration-300 ease-out ${
                          isActive ? "scale-x-100 bg-gold" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden md:block"
            >
              <Link href="/book">
                <button className="relative px-7 py-3 text-[11px] font-medium tracking-[0.2em] uppercase overflow-hidden group border border-gold/50 text-gold hover:text-dark transition-all duration-500">
                  <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)" />
                  <span className="relative z-10 flex items-center gap-2">Book Now</span>
                </button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 -mr-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-dark/95 md:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-3xl font-normal tracking-[0.15em] transition-colors duration-300 uppercase ${
                      pathname === link.href ? "text-gold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.5 }}
                className="pt-8 w-full max-w-xs"
              >
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <button className="w-full relative px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase border border-gold/50 text-gold hover:text-dark transition-colors duration-500 overflow-hidden group">
                    <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10">Book Appointment</span>
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
