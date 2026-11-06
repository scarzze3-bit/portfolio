import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProcessStrip from "@/components/ProcessStrip";
import TechMatrix from "@/components/TechMatrix";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#fafafa] relative selection:bg-emerald-500/20 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <ServiceGrid />
      <ProjectShowcase />
      <ProcessStrip />
      <TechMatrix />
      <ContactSection />
      <Footer />
    </main>
  );
}