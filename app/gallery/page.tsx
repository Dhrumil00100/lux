"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/mock-data";
import { GalleryImage } from "@/types";

const categories = [
  { id: "all", label: "All Work" },
  { id: "Hair Colour", label: "Hair Colour" },
  { id: "Hair Cut", label: "Hair Cut" },
  { id: "Bridal", label: "Bridal" },
  { id: "Nails", label: "Nails" },
  { id: "Skin", label: "Skin" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex =
      selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex =
      selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
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
              Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1] tracking-tight"
          >
            Our
            <span className="text-gold italic"> Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/60 text-lg mt-6 max-w-xl"
          >            Browse our portfolio of transformations. Each image represents a client&apos;s unique journey with us.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gold/10 bg-cream sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"
        >
          <div className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-5 py-2.5 font-subheading text-xs uppercase tracking-[0.2em] rounded-sm overflow-hidden transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-gold text-dark"
                    : "bg-transparent text-muted hover:text-dark border border-gold/20 hover:border-gold"
                }`}
              >
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"
        >
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gold/20"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden cursor-pointer bg-cream ${
                    index === 0 || index === 5 ? "sm:row-span-2" : ""
                  } ${index === 2 ? "lg:col-span-2" : ""}`}
                  onClick={() => openLightbox(image, index)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  {/* Gold overlay with "View" text on hover */}
                  <div className="absolute inset-0 bg-gold/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <span className="font-heading text-2xl text-dark font-semibold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:text-gold transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:text-gold transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:text-gold transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-5xl max-h-[85vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-center mt-6">
                <span className="font-subheading text-xs uppercase tracking-[0.2em] text-gold">{selectedImage.category}</span>
                <p className="font-heading text-xl text-white mt-1">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
