"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 sm:mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/campus/campus 1.jpg"
            alt="Bhardwaj International School"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/80" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center font-extrabold text-white mb-4 drop-shadow-xl"
          >
            <span className="text-xl md:text-2xl text-slate-300 font-semibold tracking-[0.2em] uppercase mb-4">
              About
            </span>
            <span className="text-4xl md:text-6xl text-yellow-500 tracking-tight shadow-black/20 mb-2">
              BHARDWAJ
            </span>
            <span className="text-2xl md:text-4xl text-white tracking-wide font-bold">
              INTERNATIONAL SCHOOL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-200 max-w-3xl mx-auto font-medium"
          >
            Committed to academic excellence, character building, and holistic development.
          </motion.p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
            A Center of Excellence in Education
          </h2>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/80 shadow-xl shadow-indigo-900/5">
            <p>
              Founded in the academic year 2018–19, Bhardwaj International School
              has rapidly grown into one of the most respected institutions in
              the region. Situated at Smt. Kamini Complex near Dakbangla Chauk in
              Shambhunath Nagar, Dighwa Dubaulli North, Bihar, the school provides
              a safe, structured, and inspiring learning environment.
            </p>

            <p>
              With over 1000+ students enrolled from Nursery to Class 10, we focus
              on academic excellence, moral values, discipline, and overall
              personality development to prepare students for future success.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Decorative blurs for dark section */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl">
          <div className="bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/30">
                <Target size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Our Mission
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              To create a secure, inclusive, and intellectually stimulating
              environment where students develop curiosity, discipline,
              leadership qualities, and ethical values. We aim to nurture
              independent thinkers prepared to face real-world challenges with
              confidence and integrity.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/30">
                <Lightbulb size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Our Vision
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              To be a premier center of excellence in education that nurtures
              the simultaneous development of mind, body, and spirit while
              preserving the rich cultural heritage and values of India.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DIRECTOR MESSAGE ================= */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] flex flex-col lg:flex-row gap-12 items-center shadow-2xl shadow-slate-200/50 border border-white">
            <div className="w-full lg:w-2/5 aspect-[4/5] relative rounded-3xl overflow-hidden shadow-lg ring-1 ring-slate-100">
              <Image
                src="/dir.png"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full lg:w-3/5 space-y-6">
              <div>
                <h4 className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 font-bold uppercase tracking-wider text-xs mb-4 ring-1 ring-orange-100">
                  From the Desk of
                </h4>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  The Director
                </h2>
              </div>

              <blockquote className="text-slate-600 text-lg md:text-xl italic leading-relaxed border-l-4 border-yellow-500 pl-6 py-2 bg-gradient-to-r from-yellow-50/50 to-transparent">
                "Education is the foundation of a strong and progressive society.
                Our goal is not only academic achievement but also character
                formation. Every child carries immense potential, and it is our
                responsibility to guide them toward excellence, confidence, and
                compassion."
              </blockquote>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-slate-900 font-bold text-xl tracking-tight">
                  NITISH KUMAR BHARDWAJ
                </p>
                <p className="text-slate-500 font-medium">M.A., M.Ed, Ph.D</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Core Values
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We strive for the highest standards in academics and personal development.",
                icon: Award,
                color: "text-blue-600",
                bg: "bg-blue-50",
                ring: "ring-blue-100"
              },
              {
                title: "Integrity",
                desc: "Honesty, respect, and moral responsibility guide our actions always.",
                icon: Target,
                color: "text-orange-600",
                bg: "bg-orange-50",
                ring: "ring-orange-100"
              },
              {
                title: "Community",
                desc: "Building strong partnerships between school, parents, and society.",
                icon: Users,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                ring: "ring-indigo-100"
              },
            ].map((val, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${val.color} ${val.bg} ring-1 ${val.ring} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <val.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {val.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
