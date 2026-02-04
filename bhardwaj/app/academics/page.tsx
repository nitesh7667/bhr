import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BookOpen,
  GraduationCap,
  Microscope,
  Palette,
  Music,
  Dumbbell,
} from "lucide-react";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-600">
          Academic Excellence
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Comprehensive curriculum designed to foster intellectual curiosity and
          critical thinking at every stage of development.
        </p>
      </div>

      {/* Curriculum Levels */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
          {[
            {
              level: "Primary Wing",
              grade: "Kindergarten - Class V",
              desc: "Focus on foundational literacy, numeracy, and social skills through play-based and experiential learning.",
              color: "from-pink-500 to-rose-500",
            },
            {
              level: "Middle Wing",
              grade: "Class VI - VIII",
              desc: "Transition to structured inquiry-based learning with subject-specific depth and project-based assessments.",
              color: "from-blue-500 to-cyan-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.level}
              </h3>
              <p
                className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}
              >
                {item.grade}
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Classroom */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Beyond The Classroom
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Palette, label: "Arts & Craft" },
              { icon: Music, label: "Music & Dance" },
              { icon: Dumbbell, label: "Sports Academy" },
              { icon: Microscope, label: "Robotics Lab" },
            ].map((act, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-zinc-800 rounded-full flex items-center justify-center text-white mb-4">
                  <act.icon size={24} />
                </div>
                <h4 className="text-lg font-medium text-white">{act.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
