"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[30vh] min-h-[400px] md:h-[85vh] md:min-h-[600px] flex items-center overflow-hidden mb-12 shadow-xl bg-slate-900">
      {/* Background Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-slate-900 overflow-hidden"
        >
          {/* Main Image Layer stretched to fill */}
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Background"
              fill
              className="object-fill"
              priority
            />
          </div>

          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 z-20 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-8"
            >
              <span className="inline-block p-1 px-3 rounded-lg bg-yellow-500/20 text-yellow-300 font-semibold text-xs sm:text-sm mb-2 sm:mb-6 border border-yellow-500/30">
                Welcome to
              </span>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-2 sm:mb-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {/* Bhardwaj */}
                <div className="inline-block">
                  {"Bhardwaj".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <br className="md:hidden" /> {/* International School */}
                <span className="inline-block">
                  <span className="inline-block">
                    {"International ".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <span className="text-yellow-500 inline-block">
                    {"School".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.0, duration: 1.0 }}
                className="text-base sm:text-lg md:text-xl text-zinc-300 mb-4 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
              >
                Nurturing minds, building character, and empowering the future
                leaders of tomorrow with excellence and integrity.
              </motion.p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
              <Link href="/admissions" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Apply for Admission{" "}
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </button>
              </Link>
              <Link
                href="/gallery"
                className="w-full sm:w-auto flex justify-center"
              >
                <button className="w-50 sm:w-auto px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-transparent text-white border border-white/30 font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center">
                  Virtual Tour
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
