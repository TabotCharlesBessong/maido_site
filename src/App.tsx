import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/pricing/PricingSection";
import BlogSection from "./components/blog/BlogSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorks";
import ContactSection from "./components/contact/Contact";


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Homepage Skeleton */}
      <main className="flex-grow">
        {/* <div className="flex items-center justify-center h-full max-w-6xl px-4 py-20 mx-auto text-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-text-dark sm:text-5xl md:text-6xl">
              Your Digital Health Journey{" "}
              <span className="text-primary-blue">Starts Here.</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
              This is the main content area for your hero section, features,
              testimonials, etc. We'll build this out in Phase 2.
            </p>
          </div>
        </div> */}
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
