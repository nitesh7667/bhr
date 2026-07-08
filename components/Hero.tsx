"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Award,
  Users,
  BookOpen,
  Globe,
  QrCode,
} from "lucide-react"; // Import icons
import Link from "next/link";
import Image from "next/image";

const backgroundImages = [
  "/campus/science lab students bhardwaj.png",
  "/campus/classroom students bhardwaj.png",
  "/acadmic/acadmic 3.jpg",
  "/acadmic/acadmic 4.jpg",
];

const stats = [
  { icon: Award, label: "Years of Excellence", value: "15+" },
  { icon: Users, label: "Students Enrolled", value: "1000+" },
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
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-white rounded-b-[2rem] md:rounded-b-[3rem]">
      {/* Background Image Slideshow Component */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 z-0">
            <motion.div
              className="relative w-full h-full"
              animate={{ scale: [1, 1.05] }}
              transition={{ duration: 5, ease: "linear", repeat: 0 }}
            >
              <Image
                src={backgroundImages[currentImageIndex]}
                alt="Campus Background"
                fill
                className="object-cover object-[center_20%] md:object-[center_25%]"
                priority={true}
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Soft gradient fade at the top to blend with the white layout */}
      <div className="absolute inset-x-0 top-0 h-48 md:h-64 bg-gradient-to-b from-white via-white/10 to-transparent z-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-end text-center px-4 md:px-6 pb-12 md:pb-20">
        {/* Dark overlay specifically inside the content area for high contrast text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center z-30"
          >
            <Link
              href="/payment"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-105 active:scale-95 text-base border border-yellow-300/30"
            >
              <QrCode size={20} className="stroke-[2.5]" />
              Pay School Fees
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95 text-base border border-white/20"
            >
              Explore Admissions
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
