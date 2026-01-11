import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <MouseGlow />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
