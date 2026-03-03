"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calendar,
  Newspaper,
  ChevronRight,
  ArrowRight,
  Download,
  DockIcon,
  Calendar1,
  MapPin,
  Clock,
  AlertCircle
} from "lucide-react";

type Category = "notices" | "events" | "news";

interface UpdateItem {
  id: number;
  title: string;
  date: string;
  urgent?: boolean;
  location?: string;
  summary?: string;
  category: Category;
}

const data: Record<Category, UpdateItem[]> = {
  notices: [
    {
      id: 1,
      title: "Admission Open for Session 2026–27",
      date: "Feb 16, 2026",
      urgent: true,
      category: "notices",
      summary: "Registration forms are now available at the school office and online portal."
    },
    {
      id: 2,
      title: "New Academic Session Begins April 2026",
      date: "Feb 10, 2026",
      category: "notices",
      summary: "The new session will commence from April 2nd. All students are requested to complete enrollment."
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting for Class X",
      date: "Jan 22, 2026",
      category: "notices",
      summary: "Mandatory meeting to discuss pre-board results and ongoing performance."
    },
  ],
  events: [
    {
      id: 1,
      title: "Vasant Panchami Celebration",
      date: "Jan 23, 2026",
      location: "School Campus",
      category: "events",
      summary: "Cultural program and puja ceremony to mark the auspicious occasion."
    },
    {
      id: 2,
      title: "Science Exhibition 2026",
      date: "Feb 20, 2026",
      location: "Main Auditorium",
      category: "events",
      summary: "Students from all grades will showcase their innovative science projects."
    },
    {
      id: 3,
      title: "Holi Celebration",
      date: "Mar 03, 2026",
      location: "School Campus",
      category: "events",
      summary: "Colorful celebration with eco-friendly colors and traditional music."
    },
  ],
  news: [
    {
      id: 1,
      title: "Students Win Regional Maths Olympiad",
      date: "Jan 27, 2026",
      summary:
        "Three students secured top positions in the regional mathematics competition.",
      category: "news"
    },
    {
      id: 2,
      title: "New Robotics Lab Inaugurated",
      date: "Jan 15, 2026",
      summary:
        "A state-of-the-art robotics lab has been introduced for senior students to explore automation.",
      category: "news"
    },
    {
      id: 3,
      title: "Annual Sports Day Highlights",
      date: "Dec 20, 2025",
      summary:
        "Watch the highlights of our energetic annual sports meet held last month.",
      category: "news"
    },
  ],
};

const iconMap = {
  notices: Bell,
  events: Calendar,
  news: Newspaper,
};

export default function Updates() {
  const [activeTab, setActiveTab] = useState<Category>("notices");

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden border-yellow-500">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-codec-pro tracking-tight">
            Campus <span className="text-yellow-500">Updates</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Stay informed about academic schedules, upcoming events, and important
            announcements at Bhardwaj International School.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content Area (Tabs + List) */}
          <div className="lg:w-2/3">
            {/* Custom Tabs */}
            <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-1 overflow-x-auto no-scrollbar">
              {(["notices", "events", "news"] as const).map((tab) => {
                const Icon = iconMap[tab];
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-t-lg transition-all relative ${isActive
                      ? "text-yellow-400 bg-white/10 shadow-sm border border-b-0 border-white/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                      }`}
                  >
                    <Icon size={18} className={isActive ? "text-yellow-400" : "text-slate-500"} />
                    <span className={`font-semibold capitalize ${isActive ? "text-white" : ""}`}>{tab}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-white z-10"
                      />
                    )}
                    {isActive && (
                      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 rounded-t-full" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Content List */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {data[activeTab].map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-white/5 rounded-2xl p-6 shadow-sm border border-white/10 hover:shadow-md hover:border-yellow-500/40 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-yellow-500 transition-colors duration-300" />

                      <div className="flex flex-col md:flex-row gap-6 md:items-start pl-3">
                        {/* Date Box */}
                        <div className="flex-shrink-0 flex md:flex-col items-center gap-2 md:gap-0 bg-white/10 rounded-xl p-3 md:w-20 text-center border border-white/10 group-hover:border-yellow-500/30 transition-colors">
                          <span className="text-2xl font-bold text-white font-codec-pro">
                            {item.date.split(' ')[1].replace(',', '')}
                          </span>
                          <span className="text-xs font-semibold uppercase text-slate-300">
                            {item.date.split(' ')[0]}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {item.date.split(' ')[2]}
                          </span>
                        </div>

                        <div className="flex-grow">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex items-center gap-3 flex-wrap">
                              {item.urgent && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-600 uppercase tracking-wide border border-red-100">
                                  <AlertCircle size={10} /> Urgent
                                </span>
                              )}
                              {item.location && (
                                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                                  <MapPin size={12} className="text-slate-400" /> {item.location}
                                </span>
                              )}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors leading-tight">
                            {item.title}
                          </h3>

                          {item.summary && (
                            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                              {item.summary}
                            </p>
                          )}

                          <button className="inline-flex items-center text-sm font-semibold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                            Read Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 text-center">
                {/* <button className="px-6 py-2.5 rounded-full border border-white/20 text-slate-300 text-sm font-semibold hover:bg-white/10 hover:text-white transition-colors">
                  View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </button> */}
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Actions */}
          <div className="lg:w-1/3 space-y-8">
            {/* Assistance Card */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-20" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 opacity-20" />

              <h3 className="text-2xl font-bold mb-2 font-codec-pro relative z-10">Need Assistance?</h3>
              <p className="text-slate-400 mb-8 text-sm relative z-10">Contact our administration office for queries regarding admissions or fees.</p>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Office Hours</p>
                    <p className="font-semibold">08:00 AM - 04:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="font-semibold">Bhardwaj International School</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <DockIcon className="text-yellow-500" size={20} /> Quick Resources
              </h3>
              <div className="grid gap-3">
                {[
                  { title: "Download Prospectus", href: "https://bhardwajintlschool.com/prospectus.pdf", icon: Download, desc: "Get detailed school info" },
                  { title: "Fee Structure", href: "https://bhardwajintlschool.com/fee-structure.pdf", icon: DockIcon, desc: "Session 2026-27" },
                  { title: "Academic Calendar", href: "https://bhardwajintlschool.com/academic-calendar.pdf", icon: Calendar1, desc: "Yearly schedule" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="group flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm group-hover:text-yellow-700 transition-colors">{item.title}</h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className="text-slate-300 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all"
                      size={18}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
