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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Excellence | Bhardwaj International School",
  description:
    "Explore our comprehensive curriculum from primary to senior wing. We foster intellectual curiosity and critical thinking for holistic development.",
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black bg-slate-50">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-slate-900">
          Academic Excellence
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive curriculum designed to foster intellectual curiosity and
          critical thinking at every stage of development.
        </p>
      </div>

      {/* Curriculum Levels */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl">
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
            {
              level: "Senior Wing",
              grade: "Class IX - X",
              desc: "Rigorous academic preparation with a focus on board exams, career counseling, and advanced conceptual understanding.",
              color: "from-purple-500 to-violet-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] relative overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl border border-slate-100 border-b-8 border-yellow-500 group"
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color}`}
              />
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                {item.level}
              </h3>
              <p
                className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-6 uppercase tracking-wider`}
              >
                {item.grade}
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Classroom */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
            Beyond The Classroom
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Palette, label: "Arts & Craft" },
              { icon: Music, label: "Music & Dance" },
              { icon: Dumbbell, label: "Sports Academy" },
              { icon: Microscope, label: "Robotics Lab" },
            ].map((act, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 border-b-8 border-yellow-500 group"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-slate-700 mb-6 shadow-sm group-hover:scale-110 transition-transform group-hover:text-yellow-600">
                  <act.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800">
                  {act.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
