"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image as ImageIcon, Video } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
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
                            ${img.size === "tall" ? "md:row-span-2" : ""}
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
