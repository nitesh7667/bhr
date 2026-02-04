"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop", // School building/Education
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", // Students studying
  "https://images.unsplash.com/photo-1577896334626-90ad4025f385?q=80&w=800&auto=format&fit=crop", // Sports
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800&auto=format&fit=crop", // Library
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-20 bg-black/30 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            Life at Bhardwaj
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Experience the vibrant campus life where learning goes beyond
            textbooks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer group ${
                index === 0 || index === 3 ? "md:col-span-2" : "col-span-1"
              }`}
            >
              <Image
                src={src}
                alt="Gallery Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="glass-button px-6 py-2 rounded-full text-sm font-medium">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
