"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image as ImageIcon, Video } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const images = [
    {
      title: "Annual Sports Day",
      category: "Events",
      size: "large",
      src: "https://images.unsplash.com/photo-1577896334626-90ad4025f385?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Science Exhibition",
      category: "Academics",
      size: "small",
      src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Cultural Fest",
      category: "Events",
      size: "medium",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Library",
      category: "Campus",
      size: "small",
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Robotics Workshop",
      category: "Academics",
      size: "medium",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Football Match",
      category: "Sports",
      size: "medium",
      src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Computer Lab",
      category: "Campus",
      size: "large",
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Debate Competition",
      category: "Co-curricular",
      size: "small",
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-600">
          Photo Gallery
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Capturing moments of learning, joy, and achievement from Campus Life.
        </p>
      </div>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Events", "Academics", "Sports", "Campus"].map(
              (cat, i) => (
                <button
                  key={i}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full border border-white/10 transition-all ${
                    filter === cat
                      ? "bg-yellow-500 text-black font-bold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                className={`
                            relative group overflow-hidden rounded-xl bg-zinc-800 
                            ${img.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                            ${img.size === "medium" ? "md:col-span-2" : ""}
                        `}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider mb-2">
                    {img.category}
                  </span>
                  <h3 className="text-white font-bold text-xl">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
              Load More Memories
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
