"use client";

import { BookOpen, Users, Trophy, Globe, Bus, User } from "lucide-react";
import { Children } from "react";

export default function Stats() {
  const stats = [
    { icon: Users, label: "Expert Faculty", value: "20+" },
    { icon: BookOpen, label: "Courses Offered", value: "10+" },
    { icon: Bus, label: "Transport Facilities", value: "Available" },
    { icon: User, label: "Student Strength", value: "1000+" },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-[#f0f9ff]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white px-8 py-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border-b-4 border-yellow-500 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.1)] group"
            >
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0284c7] mb-6 group-hover:bg-[#0284c7] group-hover:text-white transition-colors duration-300">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-slate-500 font-semibold text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
