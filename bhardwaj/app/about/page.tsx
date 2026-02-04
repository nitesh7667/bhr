import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-600">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Legacy of excellence in education. nurturing young minds to become
          global citizens with strong moral values and academic prowess.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-black/20">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[50px] transition-all group-hover:bg-yellow-500/20" />
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500">
                <Target size={28} className="md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              To provide a safe, secure, and stimulating learning atmosphere
              with an equal emphasis on curriculum, creativity, and physical
              activity. We aim to make our students independent thinkers and
              responsible citizens.
            </p>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] transition-all group-hover:bg-blue-500/20" />
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
                <Lightbulb size={28} className="md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              To be a center of excellence in education which, in keeping with
              the rich heritage of India, will stress on the simultaneous
              development of the spirit, the mind, and the body.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
              {/* Placeholder for Principal's Image */}
              <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600">
                <Users size={64} />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
                From the Desk of
              </h4>
              <h2 className="text-4xl font-bold text-white mb-6">
                The Principal
              </h2>
              <blockquote className="text-zinc-300 text-lg italic mb-6 border-l-4 border-yellow-500 pl-6">
                "Education is not merely the accumulation of facts; it is
                knowledge of values. At Bhardwaj International School, we
                believe in unlocking the potential of every child and guiding
                them towards a future where they can lead with confidence and
                compassion."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-white font-bold text-xl">
                    Dr. S. Bhardwaj
                  </p>
                  <p className="text-zinc-500">M.A., M.Ed, Ph.D</p>
                </div>
                {/* Signature placeholder could go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Values
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                  <val.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-zinc-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
