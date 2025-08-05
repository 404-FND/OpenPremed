import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
