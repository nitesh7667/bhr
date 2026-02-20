"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryContent() {
  const [filter, setFilter] = useState("All");

  const images = [
    // Academics
    {
      src: "/acadmic/acadmic 1.jpg",
      category: "Academics",
      title: "Academic Excellence",
      size: "large",
    },
    {
      src: "/acadmic/acadmic 2.jpg",
      category: "Academics",
      title: "Classroom Session",
      size: "small",
    },
    {
      src: "/acadmic/acadmic 3.jpg",
      category: "Academics",
      title: "Student Learning",
      size: "medium",
    },
    {
      src: "/acadmic/acadmic 4.jpg",
      category: "Academics",
      title: "Group Study",
      size: "small",
    },
    {
      src: "/acadmic/acadmic 5.jpg",
      category: "Academics",
      title: "Focused Learning",
      size: "small",
    },
    {
      src: "/acadmic/acadmic 6.jpg",
      category: "Academics",
      title: "Active Participation",
      size: "medium",
    },

    // Campus
    {
      src: "/campus/bhrrr.jpeg",
      category: "Campus",
      title: "School Building",
      size: "tall",
    },
    {
      src: "/campus/campus 1.jpg",
      category: "Campus",
      title: "School Grounds",
      size: "medium",
    },
    {
      src: "/campus/campus 2.jpg",
      category: "Campus",
      title: "Play Area",
      size: "medium",
    },
    {
      src: "/campus/classroom students bhardwaj.png",
      category: "Campus",
      title: "Modern Classroom",
      size: "large",
    },
    {
      src: "/campus/science lab students bhardwaj.png",
      category: "Campus",
      title: "Science Lab",
      size: "large",
    },

    // Events
    {
      src: "/event/culture 1.jpg",
      category: "Events",
      title: "Cultural Dance",
      size: "medium",
    },
    {
      src: "/event/culture 2.jpg",
      category: "Events",
      title: "Stage Performance",
      size: "small",
    },
    {
      src: "/event/culture 3.jpg",
      category: "Events",
      title: "Musical Event",
      size: "small",
    },
    {
      src: "/event/culture 4.jpg",
      category: "Events",
      title: "Drama Play",
      size: "small",
    },
    {
      src: "/event/culture 5.jpg",
      category: "Events",
      title: "Traditional Dance",
      size: "small",
    },
    {
      src: "/event/culture 6.jpg",
      category: "Events",
      title: "Group Performance",
      size: "medium",
    },
    {
      src: "/event/culture 7.jpg",
      category: "Events",
      title: "Annual Function",
      size: "large",
    },
    {
      src: "/event/culture 8.jpg",
      category: "Events",
      title: "Prize Distribution",
      size: "medium",
    },
    {
      src: "/event/culture 9.jpg",
      category: "Events",
      title: "Guest Speech",
      size: "medium",
    },

    // Sports
    {
      src: "/sports/sport 1.jpg",
      category: "Sports",
      title: "Sports Day",
      size: "medium",
    },
    {
      src: "/sports/sport 2.jpg",
      category: "Sports",
      title: "Athletics",
      size: "medium",
    },
    {
      src: "/sports/sport 3.jpg",
      category: "Sports",
      title: "Winner Trophy",
      size: "large",
    },
  ];

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredImages.length - 1 : prev - 1;
    });
  }, [filteredImages.length]);

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
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black bg-gradient-to-br from-slate-50 via-white to-indigo-50/50">
      <Navbar />

      {/* Header */}
      <div className="pt-28 md:pt-36 pb-12 container mx-auto px-4 md:px-6 text-center relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-slate-900 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Capturing moments of learning, joy, and achievement from Campus Life.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {["All", "Events", "Academics", "Sports", "Campus"].map(
              (cat, i) => (
                <button
                  key={i}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full border transition-all duration-300 font-semibold text-sm tracking-wide ${filter === cat
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-transparent shadow-lg shadow-orange-500/20 transform scale-105"
                    : "bg-white/80 backdrop-blur text-slate-600 border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                    }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                onClick={() => openModal(i)}
                className="relative group overflow-hidden rounded-3xl bg-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-500 cursor-pointer break-inside-avoid border border-slate-200/50 ring-1 ring-white/50"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ width: "100%", height: "auto" }}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-md">
                    {img.category}
                  </span>
                  <h3 className="text-white font-bold text-xl md:text-2xl drop-shadow-lg">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3.5 bg-white border border-slate-200/80 text-slate-700 font-semibold rounded-full hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm hover:shadow-md ring-1 ring-slate-100">
              Load More Memories
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-50 bg-white/10 p-2 rounded-full hover:bg-white/20 backdrop-blur-md"
            >
              <X className="size-5 md:size-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-3 bg-white/5 rounded-full hover:bg-white/20 backdrop-blur-md"
            >
              <ChevronLeft className="size-6 md:size-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-3 bg-white/5 rounded-full hover:bg-white/20 backdrop-blur-md"
            >
              <ChevronRight className="size-6 md:size-8" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-6xl h-[85vh]  max-h-[85vh] flex items-center justify-center bg-slate-900/50 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={filteredImages[selectedIndex].src}
                  alt={filteredImages[selectedIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none">
                <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-[10px] md:text-sm font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
                  {filteredImages[selectedIndex].category}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                  {filteredImages[selectedIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
