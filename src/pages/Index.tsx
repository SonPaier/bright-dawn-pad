import { useRef } from "react";
import Hero from "@/components/landing/Hero";
import AppPreview from "@/components/landing/AppPreview";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <div ref={heroRef}>
        <Hero />
      </div>
      <AppPreview />
      <Benefits />
      <Testimonials />
      <Pricing onScrollToContact={scrollToContact} />
      <Footer />
    </main>
  );
};

export default Index;
