import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Download,
  FileText,
  UserCheck,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Bhardwaj International School",
  description:
    "Join the Bhardwaj family. Find information on admission process, age criteria, required documents, and download the prospectus and fee structure.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-center bg-gradient-to-b from-indigo-100/40 to-transparent">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-slate-900">
          Admission Process
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We welcome students who are eager to learn, grow, and contribute to
          our community. Here is how you can become a part of the Bhardwaj
          family.
        </p>
      </div>

      {/* Steps Timeline / Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "1. Registration",
                desc: "Fill out the online enquiry form or visit the school office to collect the registration form.",
              },
              {
                icon: UserCheck,
                title: "2. Assessment",
                desc: "For Classes I onwards, a basic interaction/assessment is conducted to understand the child's level.",
              },
              {
                icon: CheckCircle2,
                title: "3. Documentation",
                desc: "Submit the necessary documents including birth certificate, transfer certificate, & photographs.",
              },
              {
                icon: CalendarDays,
                title: "4. Fee Payment",
                desc: "Complete the admission formalities by paying the applicable fees to secure the seat.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2rem] border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl border-b-8 border-yellow-500 group"
              >
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 font-bold text-xl shadow-sm group-hover:bg-yellow-100 transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Eligibility Table */}
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 md:mb-8 text-center lg:text-left">
                Age Criteria
              </h2>
              <div className="bg-white/10 rounded-2xl overflow-hidden shadow-md border-b-4 border-yellow-500 border-x border-t border-white/20 w-full overflow-x-auto">
                <div className="min-w-[300px]">
                  <table className="w-full text-left text-slate-600">
                    <thead className="bg-yellow-500/30 text-yellow-300">
                      <tr>
                        <th className="p-4 md:p-6 font-bold whitespace-nowrap text-sm md:text-base">Class</th>
                        <th className="p-4 md:p-6 font-bold whitespace-nowrap text-sm md:text-base">
                          Minimum Age (as of March 31)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-slate-200">
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 md:p-6 font-medium text-sm md:text-base">Nursery</td>
                        <td className="p-4 md:p-6 text-sm md:text-base">3+ Years</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 md:p-6 font-medium text-sm md:text-base">KG</td>
                        <td className="p-4 md:p-6 text-sm md:text-base">4+ Years</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 md:p-6 font-medium text-sm md:text-base">Class I</td>
                        <td className="p-4 md:p-6 text-sm md:text-base">5+ Years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Documents List */}
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 md:mb-8 text-center lg:text-left">
                Documents Required
              </h2>
              <ul className="space-y-4 w-full">
                {[
                  "Birth Certificate (Original for verification + Photocopy)",
                  "Transfer Certificate (Original) from previous school",
                  "Report Card of the last class attended",
                  "Passport size photographs of student and parents",
                  "Aadhar Card of student and parents",
                ].map((doc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-slate-200 p-4 md:p-5 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 hover:shadow-md transition-all shadow-sm"
                  >
                    <CheckCircle2
                      className="text-green-500 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="font-medium text-sm md:text-base leading-snug">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Downloads */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-700 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white max-w-3xl mx-auto p-12 rounded-[3rem] relative overflow-hidden shadow-2xl border border-white/50">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Ready to Apply?
              </h2>
              <p className="text-slate-600 mb-10 text-lg">
                Download our admission form or prospectus to get started
                offline.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1">
                  <Download size={20} /> Download Form
                </button>
                <a
                  href="/BIS_ULTRA_Premium_Prospectus_2026-27.pdf"
                  download="BIS_Prospectus_2026-27.pdf"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all shadow-lg hover:shadow-slate-800/30 hover:-translate-y-1"
                >
                  <Download size={20} /> Download Prospectus
                </a>
                <a
                  href="/Bhardwaj_International_School_Fee_Structure_2026-27_SINGLE_PAGE_FINAL.pdf"
                  download="Bhardwaj_International_School_Fee_Structure_2026-27.pdf"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all shadow-lg hover:shadow-slate-800/30 hover:-translate-y-1"
                >
                  <Download size={20} /> Fee Structure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
