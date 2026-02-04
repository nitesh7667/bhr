"use client";

import { BookOpen, Users, Trophy, Globe } from "lucide-react";

export default function Stats() {
  const stats = [
    { icon: Users, label: "Expert Faculty", value: "50+" },
    { icon: BookOpen, label: "Courses Offered", value: "25+" },
    { icon: Trophy, label: "Awards Won", value: "100+" },
    { icon: Globe, label: "Global Alumni", value: "2000+" },
  ];

  return (
    <section className="py-12 md:py-20 relative bg-black/40 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel flex flex-col items-center text-center p-6 rounded-2xl transition-transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
