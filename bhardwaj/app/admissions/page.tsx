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

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-600">
          Admission Process
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
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
                className="glass-panel p-6 rounded-2xl border-t-2 border-yellow-500/50 hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-yellow-500 mb-4 font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 md:py-20 bg-black/20">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Eligibility Table */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Age Criteria
            </h2>
            <div className="glass-panel overflow-hidden rounded-xl overflow-x-auto">
              <table className="w-full text-left text-zinc-300 min-w-[300px]">
                <thead className="bg-yellow-500/10 text-yellow-500">
                  <tr>
                    <th className="p-4 font-bold whitespace-nowrap">Class</th>
                    <th className="p-4 font-bold whitespace-nowrap">
                      Minimum Age (as of March 31)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-4">Nursery</td>
                    <td className="p-4">3+ Years</td>
                  </tr>
                  <tr>
                    <td className="p-4">KG</td>
                    <td className="p-4">4+ Years</td>
                  </tr>
                  <tr>
                    <td className="p-4">Class I</td>
                    <td className="p-4">5+ Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Documents List */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Documents Required
            </h2>
            <ul className="space-y-4">
              {[
                "Birth Certificate (Original for verification + Photocopy)",
                "Transfer Certificate (Original) from previous school",
                "Report Card of the last class attended",
                "Passport size photographs of student and parents",
                "Aadhar Card of student and parents",
              ].map((doc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-zinc-300 p-3 bg-white/5 rounded-lg border border-white/5"
                >
                  <CheckCircle2
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / Downloads */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-panel max-w-2xl mx-auto p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-500/5" />
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
              Ready to Apply?
            </h2>
            <p className="text-zinc-400 mb-8 relative z-10">
              Download our admission form or prospectus to get started offline.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                <Download size={20} /> Download Form
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors border border-white/10">
                <Download size={20} /> Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
