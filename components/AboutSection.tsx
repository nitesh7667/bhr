"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
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
              <span className="text-red-500 font-bold text-lg tracking-wide uppercase block mb-2">
                Warm Welcome To
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                BHARDWAJ INTERNATIONAL{" "}
                <span className="text-yellow-500">SCHOOL</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
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
            className="relative h-[400px] md:h-full  overflow-hidden  order-1 lg:order-2 bg-slate-50"
          >
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
