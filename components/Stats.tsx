"use client";

import { Users, GraduationCap, School, Bus } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: School,
      label: "Classes Offered",
      value: "Nursery – X",
    },
    {
      icon: Users,
      label: "Student Strength",
      value: "1000+",
    },
    {
      icon: GraduationCap,
      label: "Qualified Faculty",
      value: "20+",
    },
    {
      icon: Bus,
      label: "Transportation Facility",
      value: "Available",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-l from-teal-300 via-blue-200 to-yellow-100">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-900/5 hover:bg-white/90 transition-all duration-500 border border-white/80 shadow-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-white text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-500 ring-1 ring-indigo-100/50">
                    <stat.icon size={42} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-slate-800 mb-2 tracking-tight group-hover:text-yellow-500 transition-colors duration-300">
                  {stat.value}
                </h3>

                <p className="text-sm uppercase tracking-wider font-semibold text-slate-500 group-hover:text-yellow-500/80 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
