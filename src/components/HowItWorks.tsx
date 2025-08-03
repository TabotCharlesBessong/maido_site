// src/components/HowItWorksSection.tsx
import React from "react";
import type { HowItWorksStep } from "../constants/types";
import { howItWorksData } from "../constants/data";

// Sub-component for a single step card
const StepCard: React.FC<{ stepData: HowItWorksStep }> = ({ stepData }) => {
  const { step, title, description, imageUrl, isFeatured } = stepData;

  const frameStyle = isFeatured
    ? "border-primary-blue bg-primary-blue"
    : "border-blue-200 bg-blue-100";

  const stepTagStyle = isFeatured
    ? "border-primary-blue text-primary-blue"
    : "border-blue-200 text-gray-500";

  return (
    <div className={`relative p-2 rounded-2xl border-2 ${frameStyle}`}>
      {/* Inner white card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-text-dark">{title}</h3>
          <p className="mt-2 text-gray-600 flex-grow">{description}</p>
        </div>
      </div>
      {/* Step Tag - positioned relative to the outer frame */}
      <div
        className={`absolute bottom-0 right-0 translate-x-3 translate-y-3 px-3 py-1 bg-white rounded-md border text-sm font-semibold ${stepTagStyle}`}
      >
        Step: {step}
      </div>
    </div>
  );
};

// Main How It Works Section Component
const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-blue bg-blue-100 border border-primary-blue/30 rounded-full">
              How It Works
            </span>
            <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
              Easiest Way to Connect with Doctor
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With features like real-time video consultations, seamless
              appointment scheduling, secure messaging, e-prescriptions.
              Patients can connect with their healthcare professionals from
              anywhere.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 mt-6 lg:mt-0 px-8 py-3 font-semibold text-white bg-primary-blue rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {howItWorksData.map((step) => (
            <StepCard key={step.step} stepData={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
