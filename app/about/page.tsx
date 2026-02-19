"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans bg-slate-50 selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/campus/campus 1.jpg"
            alt="Bhardwaj International School"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center font-extrabold text-white mb-6 drop-shadow-xl"
          >
            <span className="text-2xl md:text-3xl text-slate-300 font-medium tracking-widest uppercase mb-2">
              About
            </span>
            <span className="text-5xl md:text-7xl text-yellow-400 tracking-tighter shadow-black/20">
              BHARDWAJ
            </span>
            <span className="text-2xl md:text-4xl text-white mt-1 tracking-wide font-bold">
              <span className="text-white">INTERNATIONAL</span> SCHOOL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Established in 2018–19, we are committed to academic excellence,
            character building, and holistic development for students from
            Nursery to Class 10.
          </motion.p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            A Center of Excellence in Education
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Founded in the academic year 2018–19, Bhardwaj International School
            has rapidly grown into one of the most respected institutions in
            the region. Situated at Smt. Kamini Complex near Dakbangla Chauk in
            Shambhunath Nagar, Dighwa Dubaulli North, Bihar, the school provides
            a safe, structured, and inspiring learning environment.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed">
            With over 1000+ students enrolled from Nursery to Class 10, we focus
            on academic excellence, moral values, discipline, and overall
            personality development to prepare students for future success.
          </p>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 bg-yellow-100 ">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1000+", label: "Students" },
            { number: "2018", label: "Established" },
            { number: "Nursery–10", label: "Classes" },
            { number: "Excellence", label: "Reputation" },
          ].map((stat, i) => (
            <div key={i} className="p-6">
              <h3 className="text-xl sm:text-4xl font-extrabold text-orange-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-orange-100 text-orange-600">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Our Mission
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              To create a secure, inclusive, and intellectually stimulating
              environment where students develop curiosity, discipline,
              leadership qualities, and ethical values. We aim to nurture
              independent thinkers prepared to face real-world challenges with
              confidence and integrity.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-yellow-100 text-yellow-600">
                <Lightbulb size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Our Vision
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              To be a premier center of excellence in education that nurtures
              the simultaneous development of mind, body, and spirit while
              preserving the rich cultural heritage and values of India.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DIRECTOR MESSAGE ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-10 rounded-3xl flex flex-col lg:flex-row gap-12 items-center shadow-md">
            <div className="w-full lg:w-1/3 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/dir.png"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full lg:w-2/3">
              <h4 className="text-orange-600 font-bold uppercase tracking-widest mb-2 text-sm">
                From the Desk of
              </h4>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                The Director
              </h2>

              <blockquote className="text-slate-600 text-lg italic mb-8 border-l-4 border-yellow-500 pl-6">
                Education is the foundation of a strong and progressive society.
                Our goal is not only academic achievement but also character
                formation. Every child carries immense potential, and it is our
                responsibility to guide them toward excellence, confidence, and
                compassion.
              </blockquote>

              <p className="text-slate-900 font-bold text-xl">
                NITISH KUMAR BHARDWAJ
              </p>
              <p className="text-slate-500">M.A., M.Ed, Ph.D</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Core Values
            </h2>
            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We strive for the highest standards in academics and personal development.",
                icon: Award,
              },
              {
                title: "Integrity",
                desc: "Honesty, respect, and moral responsibility guide our actions.",
                icon: Target,
              },
              {
                title: "Community",
                desc: "Building strong partnerships between school, parents, and society.",
                icon: Users,
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-orange-500 shadow-md mb-6">
                  <val.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {val.title}
                </h3>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
