type BillingCycle = "monthly" | "yearly";

const PricingToggle: React.FC<{
  billingCycle: BillingCycle;
  onToggle: (cycle: BillingCycle) => void;
}> = ({ billingCycle, onToggle }) => {
  const isYearly = billingCycle === "yearly";
  return (
    <div className="inline-flex items-center p-1 space-x-2 bg-slate-100 rounded-xl border border-gray-200">
      <button
        onClick={() => onToggle("monthly")}
        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
          !isYearly ? "bg-white text-primary-blue shadow" : "text-gray-600"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onToggle("yearly")}
        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
          isYearly ? "bg-white text-primary-blue shadow" : "text-gray-600"
        }`}
      >
        Yearly
      </button>
    </div>
  );
};

export default PricingToggle;
