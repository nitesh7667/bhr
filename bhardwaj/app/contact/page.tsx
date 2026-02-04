import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 container mx-auto px-4 md:px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-600">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Have questions or need assistance? We are here to help you. Reach out
          to us through any of the channels below.
        </p>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 md:gap-8 lg:sticky lg:top-24 h-fit">
            <div className="glass-panel p-6 md:p-8 rounded-2xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Visit Us
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base">
                      Smt. Kamini Complex, Dakbangla Chauk,
                      <br />
                      Shambhunath Nagar, Dighwa Dubaulli North, Bihar 841409
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Call Us
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base">
                      +91 98765 43210
                    </p>
                    <p className="text-zinc-400 text-sm md:text-base">
                      +91 11 2345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Email Us
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base">
                      info@bhardwajschool.com
                    </p>
                    <p className="text-zinc-400 text-sm md:text-base">
                      admissions@bhardwajschool.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Office Hours
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base">
                      Mon - Sat: 8:00 AM - 4:00 PM
                    </p>
                    <p className="text-zinc-400 text-sm md:text-base">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="glass-panel p-2 rounded-2xl h-64 relative overflow-hidden group">
              <iframe
                src="https://maps.google.com/maps?q=26.2676803,84.7480548&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="rounded-xl opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-2">
              Send us a Message
            </h2>
            <p className="text-zinc-400 mb-8">
              Fill the form below and we will get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">
                  Subject
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors">
                  <option className="bg-zinc-900">General Inquiry</option>
                  <option className="bg-zinc-900">Admissions</option>
                  <option className="bg-zinc-900">Careers</option>
                  <option className="bg-zinc-900">Student Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
