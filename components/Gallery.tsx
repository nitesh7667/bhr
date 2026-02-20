"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
  size: "small" | "medium" | "large" | "tall" | "wide";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/campus/bhrrr.jpeg",
    category: "Campus",
    title: "Main Building Structure",
    size: "tall",
  },
  {
    id: 2,
    src: "/event/culture 7.jpg",
    category: "Culture",
    title: "Annual Day Celebrations",
    size: "medium",
  },
  {
    id: 3,
    src: "/acadmic/acadmic 1.jpg",
    category: "Academics",
    title: "Focused Learning",
    size: "small",
  },
  {
    id: 4,
    src: "/sports/sport 3.jpg",
    category: "Sports",
    title: "Championship Tournament",
    size: "small",
  },
  {
    id: 5,
    src: "/campus/science lab students bhardwaj.png",
    category: "Labs",
    title: "Advanced Science Lab",
    size: "wide",
  },
  {
    id: 6,
    src: "/event/culture 6.jpg",
    category: "Arts",
    title: "Student Performances",
    size: "medium",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
  }, []);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? galleryItems.length - 1 : prev - 1;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeModal, nextImage, prevImage]);
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-800 pb-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold font-codec-pro leading-tight mb-4">
              Life at <span className="text-yellow-500">Bhardwaj</span>
            </h2>
            <p className="text-slate-400 text-lg">
              A glimpse into the vibrant atmosphere where academic excellence meets
              holistic development.
            </p>
          </div>
          {/* <button className="group flex items-center gap-2 border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-medium hover:bg-yellow-500 hover:text-slate-900 hover:border-yellow-500 transition-all duration-300">
            VIEW ALL GALLERY
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button> */}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => openModal(index)}
              className={`relative overflow-hidden group bg-slate-900 cursor-pointer 
                ${item.size === "tall" ? "md:col-span-1 md:row-span-2" : ""}
                ${item.size === "wide" ? "md:col-span-2 md:row-span-1" : ""}
                ${item.size === "medium" ? "md:col-span-1 md:row-span-1" : ""}
                ${item.size === "small" ? "md:col-span-1 md:row-span-1" : ""}
                ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-0 group-hover:grayscale-0"
              />

              {/* Sharp Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-codec-pro font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Decorative Line - Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] md:aspect-[16/10] max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={galleryItems[selectedIndex].src}
                  alt={galleryItems[selectedIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-1 block">
                  {galleryItems[selectedIndex].category}
                </span>
                <h3 className="text-white text-md sm:text-2xl font-codec-pro font-semibold">
                  {galleryItems[selectedIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
