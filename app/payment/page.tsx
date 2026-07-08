"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  QrCode,
  Copy,
  Check,
  Building,
  CreditCard,
  User,
  Hash,
  GraduationCap,
  DollarSign,
  Phone,
  ArrowRight,
  ArrowLeft,
  Printer,
  CheckCircle2,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// =========================================================================
// EMAILJS CONFIGURATION
// Replace these with your actual EmailJS credentials for production use
// =========================================================================
const EMAILJS_SERVICE_ID = "service_r4rv3ud";       // e.g. "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = "template_7locnvq";   // e.g. "template_xxxxxxx"
const EMAILJS_PUBLIC_KEY = "A7k35Fw6Fnci0Twxt";        // e.g. "user_xxxxxxxxxxxxxxxx"
const SCHOOL_RECEIVER_EMAIL = "director@bhardwajinternationalschool.in";

export default function PaymentPage() {
  const [currentStep, setCurrentStep] = useState(1); // Steps: 1, 2, 3
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isQRImageLoaded, setIsQRImageLoaded] = useState(false);

  // Form inputs (Step 1)
  const [studentName, setStudentName] = useState("");
  const [admissionNo, setAdmissionNo] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [classSection, setClassSection] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentMobile, setParentMobile] = useState("");
  const [feeType, setFeeType] = useState("");
  const [amount, setAmount] = useState("");

  // Payment confirmation inputs (Step 2)
  const [transactionId, setTransactionId] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  // Simulated status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receiptNo, setReceiptNo] = useState("");

  const bankDetails = {
    accountName: "Bhardwaj International School",
    bankName: "State Bank of India",
    accountNumber: "39820482938",
    ifscCode: "SBIN0001234",
    upiId: "bhardwajschool@sbi",
    branch: "Dighwa Dubaulli Branch",
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Dispatch email notification via EmailJS REST API
  const sendEmailNotification = async (status: "Initiated" | "Completed", generatedReceiptNo = "", txnId = "") => {
    const templateParams = {
      status: status,
      student_name: studentName,
      admission_no: admissionNo,
      student_class: studentClass,
      class_section: classSection,
      parent_email: parentEmail || "N/A",
      parent_mobile: parentMobile,
      fee_type: feeType,
      amount: `₹${parseFloat(amount).toLocaleString("en-IN")}.00`,
      transaction_id: txnId || "Pending Verification",
      receipt_no: generatedReceiptNo || "N/A",
      school_receiver: SCHOOL_RECEIVER_EMAIL,
      submission_time: new Date().toLocaleString(),
    };

    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: templateParams,
      }),
    });
  };

  // Step 1: Submit Student Details & Trigger EmailJS notification
  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !admissionNo || !studentClass || !classSection || !feeType || !amount || !parentMobile) {
      alert("Please fill in all required fields marked with *.");
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(parentMobile)) {
      alert("Please enter a valid 10-digit parent mobile number.");
      return;
    }

    setIsSubmitting(true);
    
    // Dispatch "Initiated" Email
    await sendEmailNotification("Initiated");
    
    setIsSubmitting(false);
    setCurrentStep(2);
  };

  // Step 2: Confirm Payment Transaction ID & Complete
  const handleConfirmPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId) {
      alert("Please enter your transaction reference ID to proceed.");
      return;
    }
    if (!paymentConfirmed) {
      alert("Please check the box confirming you have processed the payment.");
      return;
    }

    setIsSubmitting(true);

    const generatedReceipt = "BIS-" + Math.floor(100000 + Math.random() * 900000);
    setReceiptNo(generatedReceipt);

    // Dispatch "Completed" Email with Transaction ID
    await sendEmailNotification("Completed", generatedReceipt, transactionId);

    setIsSubmitting(false);
    setCurrentStep(3);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Hero Header (Hidden when printing receipt) */}
      <section className="relative w-full h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-slate-900 sm:mt-20 print:hidden">
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
              Pay school fees securely using our digital payment portal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form/Payment Wizard Area */}
      <section className="py-12 md:py-16 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Step Progress Bar (Hidden when printing receipt) */}
          <div className="max-w-xl mx-auto mb-12 print:hidden">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 z-0 transition-all duration-500" 
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              />
              
              {/* Step 1 indicator */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${currentStep >= 1 ? "bg-gradient-to-br from-yellow-400 to-orange-500 border-orange-400 text-slate-900 shadow-md shadow-orange-500/10" : "bg-white border-slate-200 text-slate-400"}`}>
                  1
                </div>
                <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${currentStep >= 1 ? "text-slate-800" : "text-slate-400"}`}>Student Info</span>
              </div>

              {/* Step 2 indicator */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${currentStep >= 2 ? "bg-gradient-to-br from-yellow-400 to-orange-500 border-orange-400 text-slate-900 shadow-md shadow-orange-500/10" : "bg-white border-slate-200 text-slate-400"}`}>
                  2
                </div>
                <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${currentStep >= 2 ? "text-slate-800" : "text-slate-400"}`}>Scan & Pay</span>
              </div>

              {/* Step 3 indicator */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${currentStep >= 3 ? "bg-gradient-to-br from-yellow-400 to-orange-500 border-orange-400 text-slate-900 shadow-md shadow-orange-500/10" : "bg-white border-slate-200 text-slate-400"}`}>
                  3
                </div>
                <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${currentStep >= 3 ? "text-slate-800" : "text-slate-400"}`}>Receipt</span>
              </div>
            </div>
          </div>

          {/* Render Active Wizard Steps */}
          <div className="relative">
            
            {/* STEP 1: STUDENT DETAILS FORM */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-2xl mx-auto"
              >
                <div className="mb-8 text-center sm:text-left">
                  <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
                    Student Information
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Enter the student details to register your payment request. A confirmation email will be sent to the school office.
                  </p>
                </div>

                <form onSubmit={handleProceedToPayment} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Student Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <User size={13} className="text-slate-400" />
                        Student Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanshu Kumar"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                      />
                    </div>

                    {/* Admission Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Hash size={13} className="text-slate-400" />
                        Admission / Roll No <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. BIS-2026-074"
                        value={admissionNo}
                        onChange={(e) => setAdmissionNo(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Class Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <GraduationCap size={13} className="text-slate-400" />
                        Class <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                      >
                        <option value="">Select class...</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="I">Class I</option>
                        <option value="II">Class II</option>
                        <option value="III">Class III</option>
                        <option value="IV">Class IV</option>
                        <option value="V">Class V</option>
                        <option value="VI">Class VI</option>
                        <option value="VII">Class VII</option>
                        <option value="VIII">Class VIII</option>
                        <option value="IX">Class IX</option>
                        <option value="X">Class X</option>
                      </select>
                    </div>

                    {/* Class Section */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <GraduationCap size={13} className="text-slate-400" />
                        Section <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={classSection}
                        onChange={(e) => setClassSection(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                      >
                        <option value="">Select section...</option>
                        <option value="A">Section A</option>
                        <option value="B">Section B</option>
                        <option value="C">Section C</option>
                        <option value="D">Section D</option>
                        <option value="N/A">Not Applicable</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Parent Mobile */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Phone size={13} className="text-slate-400" />
                        Parent Mobile No <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="10-digit number"
                        value={parentMobile}
                        onChange={(e) => setParentMobile(e.target.value.replace(/[^0-9]/g, ''))}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                      />
                    </div>

                    {/* Parent Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Mail size={13} className="text-slate-400" />
                        Parent Email ID
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. parent@email.com"
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Fee Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <CreditCard size={13} className="text-slate-400" />
                        Fee Type / Purpose <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={feeType}
                        onChange={(e) => setFeeType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                      >
                        <option value="">Select fee type...</option>
                        <option value="Admission Fee">Admission Fee</option>
                        <option value="Tuition Fee (Monthly)">Tuition Fee (Monthly)</option>
                        <option value="Term Exam Fee">Term Exam Fee</option>
                        <option value="Transportation Fee">Transportation Fee</option>
                        <option value="Annual / Miscellaneous Fees">Annual / Miscellaneous Fees</option>
                      </select>
                    </div>

                    {/* Fee Amount */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <DollarSign size={13} className="text-slate-400" />
                        Fee Amount (₹) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        placeholder="e.g. 2500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-950 font-bold px-6 py-4 rounded-2xl transition-all duration-300 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Submitting details...
                      </>
                    ) : (
                      <>
                        Submit & Proceed to QR scanner
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 2: DISPLAY QR CODE SCANNER & CONFIRMATION */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                
                {/* Visual Step Warning Notification */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 flex gap-3 text-slate-800 max-w-3xl mx-auto items-center">
                  <ShieldCheck size={24} className="text-yellow-600 shrink-0" />
                  <p className="text-xs font-semibold leading-relaxed">
                    Student info logged successfully! Please scan the QR code or transfer to the school bank account, and enter the Transaction ID below to verify your receipt.
                  </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: QR Scan & Bank Card (Col 7) */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* QR Display Card */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden flex flex-col sm:flex-row gap-6 items-center">
                      <div className="relative w-48 h-48 bg-slate-50 border border-slate-200/60 rounded-3xl p-3 shrink-0 flex items-center justify-center">
                        {!isQRImageLoaded && (
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-lg shadow-yellow-400/50 animate-[scan_3s_ease-in-out_infinite] z-20" />
                        )}
                        <div className="relative w-full h-full">
                          <Image
                            src="/QR payment.jpeg"
                            alt="Payment QR"
                            fill
                            className="object-contain"
                            onLoad={() => setIsQRImageLoaded(true)}
                            onError={() => setIsQRImageLoaded(false)}
                          />
                          {!isQRImageLoaded && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-2 text-center rounded-2xl">
                              <QrCode size={42} className="text-yellow-500 mb-2 animate-pulse" />
                              <span className="text-[10px] font-bold text-slate-800">Scan & Pay</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3 flex-grow text-center sm:text-left">
                        <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 border border-yellow-100 rounded-full font-bold text-[10px] uppercase tracking-wider">
                          QR code scan
                        </span>
                        <h3 className="text-xl font-bold text-slate-800 leading-tight">Scan via UPI App</h3>
                        <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                          Scan the QR code using Google Pay, PhonePe, Paytm, BHIM, or any banking app to make your payment of <strong>₹{parseFloat(amount).toLocaleString("en-IN")}.00</strong>.
                        </p>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 max-w-sm flex items-center justify-between">
                          <div>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">UPI ID</p>
                            <p className="text-slate-800 font-bold font-mono text-xs mt-0.5">{bankDetails.upiId}</p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(bankDetails.upiId, "upi")}
                            className="p-1.5 bg-white rounded-lg hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
                          >
                            {copiedField === "upi" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Bank Transfer Card */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                          <Building size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-800">Direct Bank Details</h3>
                          <p className="text-slate-500 text-xs">Send using NEFT, IMPS or RTGS</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100/50">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Account Name</p>
                          <p className="text-slate-800 font-bold text-xs mt-0.5 leading-tight">{bankDetails.accountName}</p>
                        </div>
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100/50">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Bank Name</p>
                          <p className="text-slate-800 font-bold text-xs mt-0.5 leading-tight">{bankDetails.bankName}</p>
                        </div>
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100/50 flex justify-between items-center">
                          <div>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Account Number</p>
                            <p className="text-slate-800 font-bold font-mono text-xs mt-0.5">{bankDetails.accountNumber}</p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(bankDetails.accountNumber, "acc")}
                            className="p-1.5 bg-white rounded-lg hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                          >
                            {copiedField === "acc" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                          </button>
                        </div>
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100/50 flex justify-between items-center">
                          <div>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">IFSC Code</p>
                            <p className="text-slate-800 font-bold font-mono text-xs mt-0.5">{bankDetails.ifscCode}</p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(bankDetails.ifscCode, "ifsc")}
                            className="p-1.5 bg-white rounded-lg hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                          >
                            {copiedField === "ifsc" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Verification & Submit Form (Col 5) */}
                  <div className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-800">Verify Payment</h3>
                      <p className="text-slate-500 text-xs mt-1">
                        Input details of your transfer below to generate your downloadable school fee slip.
                      </p>
                    </div>

                    <form onSubmit={handleConfirmPayment} className="space-y-4">
                      
                      {/* Summary display */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Student:</span>
                          <span className="font-bold text-slate-800">{studentName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Class & Section:</span>
                          <span className="font-bold text-slate-800">{studentClass} - {classSection}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Amount Due:</span>
                          <span className="font-extrabold text-slate-900">₹{parseFloat(amount).toLocaleString("en-IN")}.00</span>
                        </div>
                      </div>

                      {/* Transaction ID */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                          <Hash size={13} className="text-slate-400" />
                          UPI Transaction ID / Ref No <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 618204928372"
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                        />
                      </div>

                      {/* Checkbox confirmation */}
                      <label className="flex items-start gap-3 cursor-pointer select-none py-1">
                        <input
                          type="checkbox"
                          required
                          checked={paymentConfirmed}
                          onChange={(e) => setPaymentConfirmed(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-400 cursor-pointer"
                        />
                        <span className="text-xs text-slate-500 font-medium leading-relaxed">
                          I confirm that I have transferred ₹{parseFloat(amount).toLocaleString("en-IN")} via QR scan / bank transfer to the school's account.
                        </span>
                      </label>

                      {/* CTAs */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-950 font-bold px-6 py-4 rounded-2xl transition-all duration-300 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                            Verifying Payment...
                          </>
                        ) : (
                          <>
                            Confirm & Generate Receipt
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-200/50"
                      >
                        <ArrowLeft size={16} />
                        Back to Edit Details
                      </button>

                    </form>
                  </div>

                </div>

              </motion.div>
            )}

            {/* STEP 3: OFFICIAL PRINTABLE RECEIPT */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-900/5 border border-emerald-500/20 p-8 md:p-12 text-center print:border-0 print:shadow-none print:p-0"
              >
                <div className="print:hidden flex justify-center mb-6">
                  <div className="p-4 bg-emerald-50 text-emerald-500 rounded-full ring-8 ring-emerald-500/10 animate-bounce">
                    <CheckCircle2 size={48} strokeWidth={2} />
                  </div>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-800 mb-2 print:hidden">
                  Payment Submitted Successfully!
                </h2>
                <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 print:hidden">
                  A receipt notification with details has been dispatched to the school email. Please print or download this receipt for your records.
                </p>

                {/* Print Layout Card */}
                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 text-left mb-8 print:bg-white print:border-slate-300 print:text-black print:p-4">
                  <div className="flex justify-between items-start border-b border-slate-200 pb-6 mb-6">
                    <div>
                      <h3 className="font-extrabold text-slate-800 text-lg print:text-black">
                        BHARDWAJ INTERNATIONAL SCHOOL
                      </h3>
                      <p className="text-slate-500 text-[10px] mt-1 leading-relaxed">
                        Smt. Kamini Complex near Dakbangla Chauk,<br />
                        Shambhunath Nagar, Dighwa Dubaulli, Bihar, India
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-xs print:border print:border-emerald-300">
                        SUCCESS
                      </span>
                      <p className="text-slate-500 text-[10px] mt-2 font-mono">
                        No: {receiptNo}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs mb-6 pb-6 border-b border-slate-200">
                    <div>
                      <p className="text-slate-400 font-bold uppercase tracking-wider">Student Name</p>
                      <p className="text-slate-800 font-extrabold text-sm mt-0.5">{studentName}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase tracking-wider">Admission / Roll No</p>
                      <p className="text-slate-800 font-extrabold text-sm mt-0.5">{admissionNo}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase tracking-wider">Class / Section</p>
                      <p className="text-slate-800 font-extrabold text-sm mt-0.5">Class {studentClass} - {classSection}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase tracking-wider">Mobile Number</p>
                      <p className="text-slate-800 font-extrabold text-sm mt-0.5">{parentMobile || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase tracking-wider">Payment Purpose</p>
                      <p className="text-slate-800 font-extrabold text-sm mt-0.5">{feeType}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase tracking-wider">Date & Time</p>
                      <p className="text-slate-800 font-extrabold text-sm mt-0.5">{new Date().toLocaleString()}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-slate-400 font-bold uppercase tracking-wider">UPI / Net Banking Transaction ID</p>
                      <p className="text-slate-800 font-mono font-bold text-sm mt-0.5 text-indigo-600">{transactionId}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-slate-200/50 p-4 rounded-xl print:bg-slate-100">
                    <span className="font-extrabold text-slate-700 text-xs">TOTAL AMOUNT</span>
                    <span className="font-black text-slate-900 text-xl">₹{parseFloat(amount).toLocaleString("en-IN")}.00</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
                  <button
                    onClick={handlePrint}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10 cursor-pointer"
                  >
                    <Printer size={18} />
                    Print / Download Receipt
                  </button>
                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setStudentName("");
                      setAdmissionNo("");
                      setStudentClass("");
                      setParentEmail("");
                      setParentMobile("");
                      setFeeType("");
                      setAmount("");
                      setTransactionId("");
                      setPaymentConfirmed(false);
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-colors cursor-pointer border border-slate-200"
                  >
                    Pay Another Fee
                  </button>
                </div>
              </motion.div>
            )}

          </div>

        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes scan {
          0%, 100% {
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
