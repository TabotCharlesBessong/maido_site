import { useState } from "react";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";
import { pricingData } from "../../constants/data";

type BillingCycle = "monthly" | "yearly";

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="price" className="py-20 bg-slate-50 sm:py-24">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-blue border border-primary-blue rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
            Small Investment, Huge Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our pricing is crafted to be accessible and scalable, so healthcare
            providers—no matter their size—can afford top-tier virtual care
            solutions.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <PricingToggle
            billingCycle={billingCycle}
            onToggle={setBillingCycle}
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid max-w-sm gap-12 mx-auto lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>

        {/* 'Have Any Questions?' Button for popular plan on mobile */}
        <div className="block lg:hidden mt-8 text-center">
          <a
            href="#"
            className="inline-block w-full max-w-sm py-3 font-semibold text-primary-blue bg-white border-2 border-gray-200 rounded-lg shadow-md hover:bg-slate-50"
          >
            Have Any Questions?
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
