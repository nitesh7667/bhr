import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bhardwaj International School | Excellence in Education",
    template: "%s | Bhardwaj International School",
  },
  description:
    "Empowering Future Leaders - A place of excellence, discipline, and holistic development. Join Bhardwaj International School for a bright future.",
  keywords: [
    "Bhardwaj International School",
    "Best School in Bihar",
    "International School",
    "Education",
    "School in Dighwa Dubaulli",
    "CBSE School",
    "Holistic Education",
  ],
  authors: [{ name: "Bhardwaj International School" }],
  creator: "Bhardwaj International School",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhardwajinternationalschool.in",
    siteName: "Bhardwaj International School",
    title: "Bhardwaj International School | Excellence in Education",
    description:
      "Empowering Future Leaders - A place of excellence and discipline.",
    images: [
      {
        url: "/logo.jpg", // Ensure this image is high quality for social previews
        width: 1200,
        height: 630,
        alt: "Bhardwaj International School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhardwaj International School",
    description:
      "Empowering Future Leaders - A place of excellence and discipline.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

import AdvertisementPopup from "@/components/AdvertisementPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/bhrrr.jpeg"
            alt="Campus Background"
            fill
            priority
            className="object-cover object-center md:object-[40%_15%]"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50 z-[1]" />
        </div>
        <AdvertisementPopup />
        {children}
      </body>
    </html>
  );
}
