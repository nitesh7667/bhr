"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calendar,
  Newspaper,
  ChevronRight,
  ArrowRight,
  MapPin,
} from "lucide-react";

type Category = "notices" | "events" | "news";

interface UpdateItem {
  id: number;
  title: string;
  date: string;
  urgent?: boolean;
  location?: string;
  summary?: string;
}

// Mock Data - In a real app, this would come from a database/API
const data: Record<Category, UpdateItem[]> = {
  notices: [
    {
      id: 1,
      title: "Half-Yearly Examination Schedule Released",
      date: "Jan 28, 2026",
      urgent: true,
    },
    {
      id: 2,
      title: "Winter Uniform Policy Update",
      date: "Jan 25, 2026",
      urgent: false,
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting for Class X",
      date: "Jan 22, 2026",
      urgent: false,
    },
  ],
  events: [
    {
      id: 1,
      title: "Annual Sports Day 2026",
      date: "Feb 15, 2026",
      location: "Main Ground",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "Feb 20, 2026",
      location: "School Auditorium",
    },
    {
      id: 3,
      title: "Inter-School Debate Competition",
      date: "Mar 05, 2026",
      location: "Hall A",
    },
  ],
  news: [
    {
      id: 1,
      title: "Our Students Win Regional Maths Olympiad",
      date: "Jan 27, 2026",
      summary: "Three students from Class XII have secured top positions...",
    },
    {
      id: 2,
      title: "New Robotics Lab Inaugurated",
      date: "Jan 15, 2026",
      summary: "State-of-the-art facility open for students from next week.",
    },
  ],
};

export default function Updates() {
  const [activeTab, setActiveTab] = useState<Category>("notices");

  return (
    <section className="py-12 md:py-20 bg-black/40 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-600">
              Campus Updates
            </h2>
            <p className="text-zinc-400 max-w-lg text-sm md:text-base">
              Stay informed about the latest happenings, academic schedules, and
              upcoming events at Bhardwaj International School.
            </p>
          </div>

          <div className="flex bg-zinc-900/50 p-1 rounded-full border border-white/10 backdrop-blur-md overflow-x-auto max-w-full">
            {(["notices", "events", "news"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-yellow-500 text-black shadow-lg"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Highlight Card / Main Content Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-3 md:gap-4"
              >
                {data[activeTab].map((item: any) => (
                  <div
                    key={item.id}
                    className="glass-panel group relative p-4 md:p-6 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-start justify-between gap-3 md:gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                          {activeTab === "notices" && (
                            <Bell
                              size={16}
                              className="text-yellow-500 shrink-0"
                            />
                          )}
                          {activeTab === "events" && (
                            <Calendar
                              size={16}
                              className="text-blue-500 shrink-0"
                            />
                          )}
                          {activeTab === "news" && (
                            <Newspaper
                              size={16}
                              className="text-green-500 shrink-0"
                            />
                          )}

                          <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-wider">
                            {item.date}
                          </span>
                          {item.urgent && (
                            <span className="bg-red-500/10 text-red-500 text-[10px] px-2 py-0.5 rounded border border-red-500/20">
                              URGENT
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-yellow-200 transition-colors">
                          {item.title}
                        </h3>
                        {item.summary && (
                          <p className="text-zinc-400 text-xs md:text-sm">
                            {item.summary}
                          </p>
                        )}
                        {item.location && (
                          <p className="text-zinc-500 text-xs md:text-sm flex items-center gap-1 mt-1">
                            {/* lucide-react MapPin would be better here but staying consistent with imports */}
                            📍 {item.location}
                          </p>
                        )}
                      </div>
                      <button className="p-2 rounded-full bg-white/5 group-hover:bg-yellow-500 group-hover:text-black transition-all transform group-hover:-rotate-45 shrink-0">
                        <ArrowRight size={18} className="md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Static Card - Maybe Principal's Message or Quick Links */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white relative z-10">
              Quick Actions
            </h3>
            <div className="flex flex-col gap-3 md:gap-4 relative z-10">
              <button className="flex items-center justify-between p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 hover:border-yellow-500/30 group">
                <span className="font-medium text-sm md:text-base">
                  Download Prospectus
                </span>
                <ChevronRight
                  className="text-zinc-500 group-hover:text-yellow-500 transition-colors"
                  size={20}
                />
              </button>
              <button className="flex items-center justify-between p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 hover:border-yellow-500/30 group">
                <span className="font-medium text-sm md:text-base">
                  Fee Structure
                </span>
                <ChevronRight
                  className="text-zinc-500 group-hover:text-yellow-500 transition-colors"
                  size={20}
                />
              </button>
              <button className="flex items-center justify-between p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 hover:border-yellow-500/30 group">
                <span className="font-medium text-sm md:text-base">
                  Academic Calendar
                </span>
                <ChevronRight
                  className="text-zinc-500 group-hover:text-yellow-500 transition-colors"
                  size={20}
                />
              </button>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
              <p className="text-sm text-zinc-500 mb-2">Need Help?</p>
              <p className="text-lg md:text-xl font-bold text-yellow-500">
                +91 98765 43210
              </p>
              <p className="text-xs md:text-sm text-zinc-400">
                admin@bhardwajschool.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <button className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center justify-center gap-2 mx-auto">
            View All Archives <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
