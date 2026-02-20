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
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black bg-gradient-to-b from-slate-50 via-white to-indigo-50/30">
      <Navbar />

      {/* Header */}
      <div className=" pt-10 sm:pt-28 md:pt-36 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-center relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-slate-900 tracking-tight">
            Academic Excellence
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Comprehensive curriculum designed to foster intellectual curiosity and
            critical thinking at every stage of development.
          </p>
        </div>
      </div>

      {/* Curriculum Levels */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl">
          {[
            {
              level: "Primary Wing",
              grade: "Kindergarten - Class V",
              desc: "Focus on foundational literacy, numeracy, and social skills through play-based and experiential learning.",
              color: "from-blue-500 to-indigo-500",
              lightBg: "bg-blue-50/50",
              ring: "ring-blue-100"
            },
            {
              level: "Middle Wing",
              grade: "Class VI - VIII",
              desc: "Transition to structured inquiry-based learning with subject-specific depth and project-based assessments.",
              color: "from-orange-400 to-red-500",
              lightBg: "bg-orange-50/50",
              ring: "ring-orange-100"
            },
            {
              level: "Senior Wing",
              grade: "Class IX - X",
              desc: "Rigorous academic preparation with a focus on board exams, career counseling, and advanced conceptual understanding.",
              color: "from-emerald-400 to-teal-500",
              lightBg: "bg-emerald-50/50",
              ring: "ring-emerald-100"
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-slate-100 ring-1 ${item.ring}`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${item.color} pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} />

              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-slate-800 mb-2">
                  {item.level}
                </h3>
                <p
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white mb-6 uppercase tracking-wider shadow-sm`}
                >
                  {item.grade}
                </p>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Classroom */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Decorative blurs for dark section */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Beyond The Classroom
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: Palette, label: "Arts & Craft", color: "text-pink-400" },
              { icon: Music, label: "Music & Dance", color: "text-blue-400" },
              { icon: Dumbbell, label: "Sports Academy", color: "text-orange-400" },
              { icon: Microscope, label: "Robotics Lab", color: "text-emerald-400" },
            ].map((act, i) => (
              <div
                key={i}
                className="group p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto bg-slate-800/80 rounded-2xl flex items-center justify-center ${act.color} mb-6 shadow-inner ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  <act.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
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
