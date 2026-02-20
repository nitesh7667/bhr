"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdvertisementPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to allow initial load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleClose} // Close on backdrop click
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition-all duration-300 backdrop-blur-md shadow-lg group"
              aria-label="Close advertisement"
            >
              <X
                size={20}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </button>

            {/* Image Container */}
            <div className="relative w-full aspect-[4/5]">
              {/* 
                 Please name your image 'admission-popup.jpg' in the public folder.
                 If you use a different name, update the src below.
               */}
              <Image
                src="/admission popup.jpeg"
                alt="Admission Open 2026-27"
                fill
                className="object-contain"
                priority
              />

              {/* Optional: Bottom gradient for text readability if needed */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Call to Action Button (Optional - can be removed if only image is needed) */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-white/90 hover:bg-white text-blue-900 font-semibold rounded-full shadow-lg transition-all active:scale-95 text-sm uppercase tracking-wide"
              >
                Visit Website
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
