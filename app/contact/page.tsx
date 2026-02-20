import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bhardwaj International School",
  description:
    "Get in touch with Bhardwaj International School. Visit our campus, call us, or email us. We are here to assist you with your queries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-center bg-gradient-to-b from-blue-100/60 to-transparent">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-slate-900">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Have questions or need assistance? We are here to help you. Reach out
          to us through any of the channels below.
        </p>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 md:gap-8 lg:sticky lg:top-24 h-fit">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 border-b-8 border-yellow-500">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0 shadow-sm group-hover:bg-yellow-100 transition-colors">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">
                      Visit Us
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      Smt. Kamini Complex, Dakbangla Chauk,
                      <br />
                      Shambhunath Nagar, Dighwa Dubaulli North, Bihar 841409
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm group-hover:bg-blue-100 transition-colors">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">
                      Call Us
                    </h3>
                    <p className="text-slate-600 text-base hover:text-blue-600 transition-colors">
                      +91 9534990113
                    </p>
                    <p className="text-slate-600 text-base hover:text-blue-600 transition-colors">
                      +91 8651592509
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 shadow-sm group-hover:bg-green-100 transition-colors">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">
                      Email Us
                    </h3>
                    <p className="text-slate-600 text-base break-all hover:text-green-600 transition-colors">
                      director@bhardwajinternationalschool.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 shadow-sm group-hover:bg-purple-100 transition-colors">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">
                      Office Hours
                    </h3>
                    <p className="text-slate-600 text-base">
                      Mon - Sat: 8:00 AM - 4:00 PM
                    </p>
                    <p className="text-slate-500 text-sm mt-1">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="bg-white p-2 rounded-3xl shadow-lg border border-slate-100 h-80 relative overflow-hidden group">
              <iframe
                src="https://maps.google.com/maps?q=Bhardwaj+International+School&ll=26.2676803,84.7480548&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="rounded-2xl opacity-100 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 border-b-8 border-yellow-500">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-slate-600 mb-10 text-lg">
              Fill the form below and we will get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-700 font-bold ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder:text-slate-400"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-700 font-bold ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder:text-slate-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-700 font-bold ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-700 font-bold ml-1">
                  Subject
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>
                      Select a subject
                    </option>
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Careers</option>
                    <option>Student Support</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-700 font-bold ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder:text-slate-400 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="w-full py-4 bg-yellow-500 text-black font-extrabold text-lg rounded-xl hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
