import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
              BHARDWAJ <span className="text-yellow-500">INTL.</span>
            </h2>
            <p className="text-zinc-500 mb-6 leading-relaxed text-sm md:text-base">
              Empowering students with knowledge, integrity, and the skills to
              lead tomorrow's world. Join us in our journey of excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                "About Us",
                "Admissions",
                "Academics",
                "Gallery",
                "Careers",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-yellow-500 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6">Information</h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                "School Policy",
                "Fee Structure",
                "Transport",
                "Parent Portal",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-yellow-500 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6">Contact Us</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center text-yellow-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">
                    Visit Us
                  </h4>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    Smt. Kamini Complex, Dakbangla Chauk, <br />
                    Shambhunath Nagar, Dighwa Dubaulli North, Bihar 841409
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center text-yellow-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">
                    Call Us
                  </h4>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center text-yellow-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 text-sm md:text-base">
                    Email Us
                  </h4>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    info@bhardwajschool.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-zinc-600 text-xs md:text-sm">
            © 2026 Bhardwaj International School. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs md:text-sm text-zinc-600">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
