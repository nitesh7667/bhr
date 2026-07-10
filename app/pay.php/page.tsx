"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QrCode, Copy, Check, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isQRImageLoaded, setIsQRImageLoaded] = useState(false);

  const upiId = "9534990113@sbi";

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-slate-900 sm:mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/campus/classroom students bhardwaj.png"
            alt="Bhardwaj School Payment Header"
            fill
            className="object-cover opacity-30 object-[center_35%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-xs md:text-sm text-yellow-500 font-bold tracking-[0.25em] uppercase mb-3 px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20">
              Direct & Secure
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
              Online Fee Payment
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-medium">
              Scan the QR code to pay school fees directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QR Code Display Area */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center"
          >
            {/* QR Scanner Container */}
            <div className="relative w-64 h-64 bg-slate-50 border border-slate-200/60 rounded-3xl p-4 flex items-center justify-center mb-8">
              {/* Scanning animation line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-lg shadow-yellow-400/50 animate-[scan_3s_ease-in-out_infinite] z-20" />

              <div className="relative w-full h-full">
                <Image
                  src="/QR payment.jpeg"
                  alt="Payment QR Code"
                  fill
                  className="object-contain rounded-2xl"
                  onLoad={() => setIsQRImageLoaded(true)}
                />
                {!isQRImageLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-2 text-center rounded-2xl">
                    <QrCode
                      size={48}
                      className="text-yellow-500 mb-2 animate-pulse"
                    />
                    <span className="text-xs font-bold text-slate-800">
                      Loading QR Code...
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-extrabold text-slate-800 mb-3">
              Scan to Pay
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Scan this QR code using any UPI app (Google Pay, PhonePe, Paytm,
              BHIM, or your Bank App) to complete the fee payment.
            </p>

            {/* UPI ID Copy Field */}
            <div className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between mb-6">
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  UPI ID / VPA
                </p>
                <p className="text-slate-800 font-bold font-mono text-sm mt-0.5">
                  {upiId}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(upiId, "upi")}
                className="p-2 bg-white rounded-xl hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
              >
                {copiedField === "upi" ? (
                  <Check size={16} className="text-emerald-500" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Secure Direct Bank Transfer</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes scan {
          0%,
          100% {
            top: 5%;
          }
          50% {
            top: 95%;
          }
        }
      `}</style>
    </main>
  );
}
