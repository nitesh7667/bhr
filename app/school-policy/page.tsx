import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Clock,
  Book,
  UserCheck,
  Scale,
  AlertCircle,
} from "lucide-react";

export default function SchoolPolicyPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-center bg-gradient-to-b from-indigo-100/40 to-transparent">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-slate-900">
          School Policies
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Guidelines and regulations ensuring a safe, disciplined, and
          productive environment for all students.
        </p>
      </div>

      {/* content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid gap-8">
          {/* General Code of Conduct */}
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300 border-b-4 border-yellow-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-yellow-50 rounded-full text-yellow-600">
                <Shield size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                General Code of Conduct
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600 list-disc pl-6 marker:text-yellow-500">
              <li>
                Students must maintain high standards of discipline and behavior
                within the school premises.
              </li>
              <li>
                Respect for teachers, staff, and fellow students is mandatory at
                all times.
              </li>
              <li>
                Damage to school property is a serious offense and will result
                in disciplinary action and fines.
              </li>
              <li>
                Possession of mobile phones or any electronic gadgets is
                strictly prohibited.
              </li>
            </ul>
          </div>

          {/* Attendance Policy */}
          <div className="bg-blue-50 p-8 rounded-[2rem] shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 border-b-4 border-blue-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-full text-blue-600">
                <Clock size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Attendance & Punctuality
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600 list-disc pl-6 marker:text-blue-500">
              <li>
                Regular attendance is compulsory. Minimum 75% attendance is
                required to appear for final examinations.
              </li>
              <li>
                Students must arrive at school 10 minutes before the assembly
                bell. Latecomers may be sent back home.
              </li>
              <li>
                Leave applications must be submitted in advance and signed by
                the parent/guardian.
              </li>
              <li>
                Unauthorized absence for more than 6 consecutive days may strike
                the student's name from the rolls.
              </li>
            </ul>
          </div>

          {/* Uniform Policy */}
          <div className="bg-green-50 p-8 rounded-[2rem] shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 border-b-4 border-green-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-green-50 rounded-full text-green-600">
                <UserCheck size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Uniform & Grooming
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600 list-disc pl-6 marker:text-green-500">
              <li>
                Students must wear a neat and clean uniform as prescribed by the
                school.
              </li>
              <li>
                Identity cards must be worn daily. Entry without an ID card is
                not permitted.
              </li>
              <li>
                Hair must be neatly trimmed (boys) or tied back (girls). Fancy
                hairstyles or hair coloring is not allowed.
              </li>
              <li>
                Nails should be trimmed regularly. Applying nail polish or
                wearing jewelry is prohibited.
              </li>
            </ul>
          </div>

          {/* Examination Policy */}
          <div className="bg-purple-50 p-8 rounded-[2rem] shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 border-b-4 border-purple-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-50 rounded-full text-purple-600">
                <Book size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Academics & Examinations
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600 list-disc pl-6 marker:text-purple-500">
              <li>
                Use of unfair means during examinations will lead to immediate
                disqualification.
              </li>
              <li>Homework and assignments must be submitted on time.</li>
              <li>
                Parents are expected to attend Parent-Teacher Meetings (PTM)
                regularly to discuss their child's progress.
              </li>
            </ul>
          </div>

          {/* Anti-Bullying Policy */}
          <div className="bg-red-50 p-8 rounded-[2rem] shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 border-b-4 border-red-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-50 rounded-full text-red-600">
                <AlertCircle size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Anti-Bullying & Safety
              </h2>
            </div>
            <p className="text-slate-600 mb-4">
              Bhardwaj International School has a zero-tolerance policy towards
              bullying, ragging, or any form of harassment.
            </p>
            <ul className="space-y-4 text-slate-600 list-disc pl-6 marker:text-red-500">
              <li>
                Any student found engaging in bullying will face severe
                disciplinary action, including suspension or expulsion.
              </li>
              <li>
                Students are encouraged to report any incidents of bullying to
                the class teacher or counselor immediately.
              </li>
              <li>
                The school provides a safe and inclusive environment for all
                students regardless of background.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
