import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Updates from "@/components/Updates";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Updates />
      <Gallery />
      <Footer />
    </main>
  );
}
