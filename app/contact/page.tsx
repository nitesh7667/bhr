import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import Image from "next/image";

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

          {/* Campus Image */}
          <div className="bg-white p-2 rounded-[2.5rem] shadow-xl border border-slate-100 border-b-8 border-yellow-500 relative overflow-hidden group min-h-[400px]">
            <Image
              src="/campus/bhrrr.jpeg"
              alt="Bhardwaj International School Campus"
              fill
              className="object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
