"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Home, Search, ChevronDown, GraduationCap, Trophy, Calendar, Users, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Users },
  { name: "Academics", href: "/academics", icon: GraduationCap },
  { name: "Admissions", href: "/admissions", icon: Trophy },
  { name: "Gallery", href: "/gallery", icon: Calendar },
  { name: "Contact Us", href: "/contact", icon: Users },

];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] bg-white  transition-all duration-300 py-3 md:py-4 border-b border-gray-300`}
      >
        <div className="container mx-auto px-4 md:px-6 w-full max-w-[1320px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

            {/* Logo Section - Left Aligned */}
            <Link href="/" className="flex items-center gap-1 group self-start md:self-auto">
              <div className="relative w-14 h-14 md:w-18 md:h-18 shrink-0 -mt-3">
                <Image
                  src="/logo-2.png"
                  alt="Bhardwaj International School"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="flex flex-col items-baseline  font-codec-pro leading-tight">
                  <span className=" font-codec-pro text-[#1f2937] font-bold text-xl md:text-4xl tracking-tight">
                    Bhardwaj 
                  </span>
                   <span className=" font-codec-pro text-yellow-500 font-bold text-xl md:text-2xl tracking-tight">
                    International School
                  </span>
                
                </h1>
              
              </div>
            </Link>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden md:flex items-center gap-1">
              {/* Home Icon */}
             

              {navLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-[#f97316] text-[18px] font-semibold px-2 py-1 transition-colors group"
                  >
                    <span>{link.name}</span>
                    {/* {link.name !== "Student Community" && (
                      <ChevronDown size={18} className="text-gray-400 group-hover:text-[#f97316] transition-colors mt-0.5" />
                    )} */}
                  </Link>
                  {/* Vertical Separator */}
                  {index < navLinks.length - 1 && (
                    <span className="text-gray-300 mx-1 text-xs">|</span>
                  )}
                </div>
              ))}

              {/* Virtual Tour & Search - Rightmost */}
              {/* <div className="flex items-center gap-2 ml-3">
                <Link href="/gallery" className="bg-[#f97316] text-white p-2 rounded-sm hover:bg-[#ea580c] transition-colors" title="Virtual Tour">
                  <Globe size={18} />
                </Link>
                <button className="bg-[#f97316] text-white p-2 rounded-sm hover:bg-[#ea580c] transition-colors" aria-label="Search">
                  <Search size={18} />
                </button>
              </div> */}

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden absolute top-4 right-4 text-slate-800 hover:text-[#f97316] transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 bg-white overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-4 gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#f97316] hover:bg-orange-50 p-3 rounded-lg transition-colors font-medium border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home size={18} /> Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 text-gray-700 hover:text-[#f97316] hover:bg-orange-50 p-3 rounded-lg transition-colors font-medium border-b border-gray-100 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon && <link.icon size={18} className="text-gray-400" />} {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to prevent content overlap since navbar is fixed */}
      <div className="h-[100px] md:h-[88px] w-full bg-white"></div>
    </>
  );
}
