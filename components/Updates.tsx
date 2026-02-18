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

// Mock Data
const data: Record<Category, UpdateItem[]> = {
  notices: [
    {
      id: 1,
      title: "admission open for session 2026-27",
      date: "Feb 16, 2026",
      urgent: true,
    },
    {
      id: 2,
      title: "new session started in april 2026",
      date: "Feb 16, 2026",
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
      title: "vasant panchmi celebration",
      date: "jan 23, 2026",
      location: "campus",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "Feb 20, 2026",
      location: "campus",
    },
    {
      id: 3,
      title: "holi celebration",
      date: "Mar 03, 2026",
      location: "campus",
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
    <section className="py-12 md:py-20 bg-white text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f172a]">
              Campus Updates
            </h2>
            <p className="text-slate-600 max-w-lg text-sm md:text-base">
              Stay informed about the latest happenings, academic schedules, and
              upcoming events at Bhardwaj International School.
            </p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 overflow-x-auto max-w-full">
            {(["notices", "events", "news"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#0f172a] text-white shadow-md"
                    : "text-slate-500 hover:text-slate-900"
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
                    className="group relative p-4 md:p-6 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-md transition-all"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/0 group-hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100" />

                    <div className="flex items-start justify-between gap-3 md:gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                          {activeTab === "notices" && (
                            <Bell
                              size={16}
                              className="text-orange-500 shrink-0"
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

                          <span className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-wider">
                            {item.date}
                          </span>
                          {item.urgent && (
                            <span className="bg-red-50 text-red-600 text-[10px] px-2 py-0.5 rounded border border-red-100 font-medium">
                              URGENT
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </h3>
                        {item.summary && (
                          <p className="text-slate-600 text-xs md:text-sm">
                            {item.summary}
                          </p>
                        )}
                        {item.location && (
                          <p className="text-slate-500 text-xs md:text-sm flex items-center gap-1 mt-1">
                            📍 {item.location}
                          </p>
                        )}
                      </div>
                      <button className="p-2 rounded-full bg-slate-200 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:-rotate-45 shrink-0">
                        <ArrowRight size={18} className="md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Static Card */}
          <div className="bg-[#0f172a] p-6 md:p-8 rounded-3xl relative overflow-hidden text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white relative z-10">
              Quick Actions
            </h3>
            <div className="flex flex-col gap-3 md:gap-4 relative z-10">
              <a
                href="/BIS_ULTRA_Premium_Prospectus_2026-27.pdf"
                download="BIS_Prospectus_2026-27.pdf"
                className="flex items-center justify-between p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/5 hover:border-white/20 group"
              >
                <span className="font-medium text-sm md:text-base text-slate-100">
                  Download Prospectus
                </span>
                <ChevronRight
                  className="text-slate-400 group-hover:text-white transition-colors"
                  size={20}
                />
              </a>
              <a
                href="/Bhardwaj_International_School_Fee_Structure_2026-27_SINGLE_PAGE_FINAL.pdf"
                download="Bhardwaj_International_School_Fee_Structure_2026-27.pdf"
                className="flex items-center justify-between p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/5 hover:border-white/20 group"
              >
                <span className="font-medium text-sm md:text-base text-slate-100">
                  Fee Structure
                </span>
                <ChevronRight
                  className="text-slate-400 group-hover:text-white transition-colors"
                  size={20}
                />
              </a>
              <a
                href="/BIS_Academic_Calendar_2026-27_Premium_Monthly.pdf"
                download="BIS_Academic_Calendar_2026-27.pdf"
                className="flex items-center justify-between p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/5 hover:border-white/20 group"
              >
                <span className="font-medium text-sm md:text-base text-slate-100">
                  Academic Calendar
                </span>
                <ChevronRight
                  className="text-slate-400 group-hover:text-white transition-colors"
                  size={20}
                />
              </a>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-2">Need Help?</p>
              <p className="text-lg md:text-xl font-bold text-white">
                +91 9534990113
              </p>
              <p className="text-lg md:text-xl font-bold text-white">
                +91 8651592509
              </p>
              <p className="text-xs md:text-sm text-slate-400 break-all mt-1">
                director@bhardwajinternationalschool.in
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <button className="text-slate-500 hover:text-[#0f172a] transition-colors text-sm flex items-center justify-center gap-2 mx-auto font-medium">
            View All Archives <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
