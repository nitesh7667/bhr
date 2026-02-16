"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/campus/bhrrr.jpeg",
    className: "col-span-1 row-span-2",
    alt: "Bhardwaj International School Campus Building",
  }, // Feature image (Tall Left)
  {
    src: "/campus/science lab students bhardwaj.png",
    className: "col-span-1 md:col-span-2",
    alt: "Students actively learning in the Science Lab",
  }, // Wide (Right Top)
  {
    src: "/sports/sport 3.jpg",
    className: "col-span-1 md:col-span-1",
    alt: "Students participating in sports activities",
  }, // Small (Right Bottom)
  {
    src: "/event/culture 6.jpg",
    className: "col-span-1 md:col-span-2",
    alt: "Cultural event celebration at Bhardwaj International School",
  }, // Event 1 (Left Wide)
  {
    src: "/event/culture 4.jpg",
    className: "col-span-1 md:col-span-1",
    alt: "Students performing in a cultural program",
  }, // Event 2 (Right Card)
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
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
