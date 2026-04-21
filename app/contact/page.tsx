"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { salonInfo } from "@/lib/mock-data";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <span className="font-subheading text-xs uppercase tracking-[0.3em] text-gold">
              Get In Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1] tracking-tight"
          >
            Contact <span className="text-gold italic">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/60 text-lg mt-6 max-w-xl"
          >
            We&apos;d love to hear from you. Reach out for appointments, inquiries, or just to say hello.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-heading text-3xl font-semibold text-dark mb-4">
                  Visit Our Salon
                </h2>
                <p className="text-muted leading-relaxed text-lg">
                  Located in the heart of Bandra West, our salon offers a serene escape where luxury meets expertise. We look forward to welcoming you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", content: salonInfo.address },
                  { icon: Phone, label: "Phone", content: salonInfo.phone, href: `tel:${salonInfo.phone.replace(/\s/g, "")}` },
                  { icon: Mail, label: "Email", content: salonInfo.email, href: `mailto:${salonInfo.email}` },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="ml-5">
                      <p className="font-subheading text-xs uppercase tracking-[0.2em] text-muted mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-dark hover:text-gold transition-colors text-lg">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-dark text-lg">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-gold/10"
              >
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div className="ml-5">
                    <p className="font-subheading text-xs uppercase tracking-[0.2em] text-muted mb-2">Opening Hours</p>
                    <div className="space-y-2 text-dark">
                      <p>Monday - Friday: {salonInfo.hours.monday}</p>
                      <p>Saturday: {salonInfo.hours.saturday}</p>
                      <p>Sunday: {salonInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="aspect-video bg-dark/5 overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                      <MapPin className="w-10 h-10 text-gold" />
                    </div>
                    <p className="font-heading text-2xl text-dark">Salon Latre</p>
                    <p className="text-muted mt-2">42, Linking Road, Bandra West</p>
                    <p className="text-muted">Mumbai 400050</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white border border-gold/10 p-8 md:p-10">
                {!isSubmitted ? (
                  <>
                    <h2 className="font-heading text-2xl font-semibold text-dark mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-muted text-sm mb-8">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-dark text-sm">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="mt-2 border-gold/20 focus:border-gold focus:ring-gold rounded-sm"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="text-dark text-sm">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            className="mt-2 border-gold/20 focus:border-gold focus:ring-gold rounded-sm"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-dark text-sm">
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="mt-2 border-gold/20 focus:border-gold focus:ring-gold rounded-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-dark text-sm">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                          rows={5}
                          className="mt-2 border-gold/20 focus:border-gold focus:ring-gold rounded-sm resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gold hover:bg-gold-light text-dark font-medium py-6 font-subheading text-sm tracking-[0.2em] uppercase rounded-sm"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-gold" />
                    </div>
                    <h2 className="font-heading text-2xl font-semibold text-dark mb-2">
                      Message Sent!
                    </h2>
                    <p className="text-muted">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-8 border-gold/30 text-dark hover:bg-gold hover:text-dark"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
