"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-50/50 via-white to-yellow-100/50 overflow-hidden">
      {/* Decorative ambient blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:order-2 lg:order-1 flex flex-col justify-center"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100/80 text-red-600 font-bold text-sm tracking-wider uppercase mb-4 shadow-sm backdrop-blur-sm border border-red-200/50">
                Warm Welcome To
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                BHARDWAJ INTERNATIONAL{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">SCHOOL</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed relative z-10 p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xl shadow-orange-900/5">
              <p>
                At Bhardwaj International School, we are committed to nurturing
                young minds and shaping them into confident, responsible, and
                compassionate global citizens. As a premier educational
                institution, we amalgamate a rich tradition of academic
                brilliance with a progressive approach to education.
              </p>

              <p>
                Here, students are stimulated to set their sights high, think
                analytically, and develop an eternal love for learning. With a
                comprehensive holistic curriculum, ultra-modern facilities, and
                a team of steadfast educators, we establish an atmosphere where
                creativity, curiosity, and character thrive.
              </p>

              <p>
                Whether it is through academics, sports, arts, or community
                engagement, we aim to enable and equip our students to realize
                their potential and make meaningful contributions to society.
              </p>

              <p>
                We invite you to explore our website and learn more about the
                stirring and exciting life at Bhardwaj International School.
                Together, let us lay the foundation for a bright future.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-full overflow-hidden order-1 lg:order-2 rounded-3xl shadow-2xl shadow-orange-900/10 ring-1 ring-white/50"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent z-10 pointer-events-none" />
            <Image
              src="/campus/bhrrr.jpeg"
              alt="Bhardwaj International School Campus"
              fill
              className="object-cover object-top-right transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
