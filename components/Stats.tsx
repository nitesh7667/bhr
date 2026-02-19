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
      value: "1500+",
    },
    {
      icon: GraduationCap,
      label: "Qualified Faculty",
      value: "50+",
    },
    {
      icon: Bus,
      label: "Transportation Facility",
      value: "Available",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-orange-100 text-orange-600">
                  <stat.icon size={36} strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                {stat.value}
              </h3>

              <p className="text-sm uppercase tracking-wider font-semibold text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
