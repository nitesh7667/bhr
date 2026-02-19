import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Updates from "@/components/Updates";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <Stats />
      <Gallery />
      <Updates />
      
      <Footer />
    </main>
  );
}
