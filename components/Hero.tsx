"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Award, Users, BookOpen, Globe } from "lucide-react"; // Import icons
import Link from "next/link";
import Image from "next/image";

// Background images for the slideshow
const backgroundImages = [
  "/campus/campus 1.jpg",
  "/campus/campus 2.jpg",
  "/event/culture 7.jpg",
  "/sports/sport 3.jpg",
  "/sports/sport 1.jpg",
  "/acadmic/acadmic 3.jpg",
  "/acadmic/acadmic 4.jpg",
];

const stats = [
  { icon: Award, label: "Years of Excellence", value: "15+" },
  { icon: Users, label: "Students Enrolled", value: "2000+" },
  { icon: BookOpen, label: "Expert Faculty", value: "100+" },
  { icon: Globe, label: "Global Curriculum", value: "CBSE" },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 6000); // Increased duration for smoother effect

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen md:mt-4 flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Slideshow with Ken Burns Effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smoother transition
          className="absolute inset-0 z-0"
        >
          {/* Main Image Layer */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="relative w-full h-full"
              animate={{ scale: [1, 1.05] }}
              transition={{ duration: 6, ease: "linear", repeat: 0 }}
            >
              <Image
                src={backgroundImages[currentImageIndex]}
                alt="Campus Background"
                fill
                className="object-cover"
                priority={true}
              />
            </motion.div>
          </div>

          {/* Gradient Overlay for better text readability */}
          {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/60" /> */}

          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[100px] w-full z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/60">
            BHARDWAJ 
          </div> */}
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}

    </section>
  );
}
