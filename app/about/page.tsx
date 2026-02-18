import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bhardwaj International School",
  description:
    "Learn about our mission, vision, and the legacy of excellence at Bhardwaj International School. Meet our director and understand our core values.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black bg-slate-50">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-slate-900">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Legacy of excellence in education. Nurturing young minds to become
          global citizens with strong moral values and academic prowess.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-slate-50 result-card p-8 rounded-[2rem] relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 border-b-8 border-yellow-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full blur-[50px] transition-all group-hover:bg-yellow-200" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-yellow-100 rounded-full text-yellow-600">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              To provide a safe, secure, and stimulating learning atmosphere
              with an equal emphasis on curriculum, creativity, and physical
              activity. We aim to make our students independent thinkers and
              responsible citizens.
            </p>
          </div>

          <div className="bg-slate-50 result-card p-8 rounded-[2rem] relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 border-b-8 border-yellow-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-[50px] transition-all group-hover:bg-blue-200" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                <Lightbulb size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              To be a center of excellence in education which, in keeping with
              the rich heritage of India, will stress on the simultaneous
              development of the spirit, the mind, and the body.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-12 items-center shadow-xl border border-slate-100 border-b-8 border-yellow-500">
            <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden shadow-2xl border-b-8 border-yellow-500">
              <Image
                src="/dir.png"
                alt="Principal"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-yellow-600 font-bold uppercase tracking-widest mb-2">
                From the Desk of
              </h4>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                The Director
              </h2>
              <blockquote className="text-slate-600 text-lg italic mb-6 border-l-4 border-yellow-500 pl-6 bg-yellow-50/50 p-4 rounded-r-xl">
                "Education is not merely the accumulation of facts; it is
                knowledge of values. At Bhardwaj International School, we
                believe in unlocking the potential of every child and guiding
                them towards a future where they can lead with confidence and
                compassion."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-slate-900 font-bold text-xl">
                    NITISH KUMAR BHARDWAJ
                  </p>
                  <p className="text-slate-500">M.A., M.Ed, Ph.D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Core Values
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We strive for the highest standards in everything we do.",
                icon: Award,
              },
              {
                title: "Integrity",
                desc: "Honesty and moral principles guide our actions.",
                icon: Target,
              },
              {
                title: "Community",
                desc: "Building strong bonds between school, home, and society.",
                icon: Users,
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 text-center group border border-slate-100 border-b-8 border-yellow-500"
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-yellow-500 mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <val.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {val.title}
                </h3>
                <p className="text-slate-600 text-base">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
