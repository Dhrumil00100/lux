"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, AtSign, Globe } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Hair Styling", href: "/services" },
    { label: "Hair Colouring", href: "/services" },
    { label: "Skin Care", href: "/services" },
    { label: "Nail Art", href: "/services" },
    { label: "Bridal", href: "/services" },
  ],
  company: [
    { label: "Our Team", href: "/team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Loyalty Programme", href: "/loyalty" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">          {/* Brand Column */}          <div className="lg:col-span-4">            <Link href="/" className="inline-block">              <span className="font-heading text-3xl font-semibold text-gold">                Salon Latre              </span>            </Link>            <p className="mt-6 text-white/60 leading-relaxed max-w-sm">              Where elegance meets expertise. Premium luxury salon services for those who seek the extraordinary.
            </p>            <div className="flex items-center space-x-4 mt-8">              <a
                href="#"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >                <AtSign className="w-4 h-4" />              </a>              <a
                href="#"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Facebook"
              >                <Globe className="w-4 h-4" />              </a>            </div>          </div>
          {/* Services Column */}          <div className="lg:col-span-2">            <h3 className="font-heading text-xl font-semibold text-gold mb-6">              Services            </h3>            <ul className="space-y-3">              {footerLinks.services.map((link) => (                <li key={link.label}>                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm flex items-center group"
                  >                    <span className="w-0 group-hover:w-2 h-px bg-gold mr-0 group-hover:mr-2 transition-all duration-300" />                    {link.label}                  </Link>                </li>              ))}            </ul>          </div>
          {/* Company Column */}          <div className="lg:col-span-2">            <h3 className="font-heading text-xl font-semibold text-gold mb-6">              Company            </h3>            <ul className="space-y-3">              {footerLinks.company.map((link) => (                <li key={link.label}>                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm flex items-center group"
                  >                    <span className="w-0 group-hover:w-2 h-px bg-gold mr-0 group-hover:mr-2 transition-all duration-300" />                    {link.label}                  </Link>                </li>              ))}            </ul>          </div>
          {/* Contact Column */}          <div className="lg:col-span-4">            <h3 className="font-heading text-xl font-semibold text-gold mb-6">              Contact            </h3>            <ul className="space-y-4">              <li className="flex items-start">                <MapPin className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />                <span className="text-white/60 text-sm">                  42, Linking Road, Bandra West, Mumbai 400050                </span>              </li>              <li className="flex items-center">                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />                <a
                  href="tel:+912245678900"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >                  +91 22 4567 8900                </a>              </li>              <li className="flex items-center">                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />                <a
                  href="mailto:hello@salonlatre.com"
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >                  hello@salonlatre.com                </a>              </li>              <li className="flex items-start">                <Clock className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />                <div className="text-white/60 text-sm space-y-1">                  <p>Mon - Fri: 10:00 AM - 8:00 PM</p>                  <p>Sat: 9:00 AM - 9:00 PM</p>                  <p>Sun: 9:00 AM - 6:00 PM</p>                </div>              </li>            </ul>          </div>        </div>
        {/* Bottom Bar */}        <div className="mt-20 pt-8 border-t border-gold/10">          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">            <p className="text-white/40 text-sm">              © {new Date().getFullYear()} Salon Latre. All rights reserved.            </p>            <div className="flex items-center space-x-8">              <Link
                href="#"
                className="text-white/40 hover:text-gold transition-colors text-sm"
              >                Privacy Policy              </Link>              <Link
                href="#"
                className="text-white/40 hover:text-gold transition-colors text-sm"
              >                Terms of Service              </Link>            </div>          </div>        </div>      </div>    </footer>
  );
}
