import { FiCheckCircle, FiZap } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import type { PricingPlan } from "../../constants/types";

type BillingCycle = "monthly" | "yearly";

const PricingCard: React.FC<{
  plan: PricingPlan;
  billingCycle: BillingCycle;
}> = ({ plan, billingCycle }) => {
  const isPopular = plan.isPopular;
  const currentPrice = plan.prices[billingCycle];

  const cardBaseStyle =
    "flex flex-col p-8 bg-white rounded-2xl border transition-transform duration-300";
  const popularStyle = "border-primary-blue shadow-2xl scale-105";
  const normalStyle =
    "border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1";

  return (
    <div
      className={`${cardBaseStyle} ${isPopular ? popularStyle : normalStyle}`}
    >
      {isPopular && (
        <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 text-sm font-semibold text-white bg-primary-blue rounded-full flex items-center gap-1">
          <FiZap /> Most Popular
        </div>
      )}

      <div
        className={`p-8 rounded-2xl ${
          isPopular ? "bg-blue-600 text-white" : "bg-white"
        }`}
      >
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <div className="flex items-baseline mt-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={billingCycle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-5xl font-extrabold ${
                isPopular ? "text-white" : "text-primary-blue"
              }`}
            >
              ${currentPrice.price}
            </motion.span>
          </AnimatePresence>
          {currentPrice.oldPrice && (
            <span
              className={`ml-2 text-lg line-through ${
                isPopular ? "text-blue-200" : "text-gray-400"
              }`}
            >
              ${currentPrice.oldPrice}
            </span>
          )}
        </div>

        <div className="mt-8 text-left">
          <p
            className={`font-semibold ${
              isPopular ? "text-blue-100" : "text-text-dark"
            }`}
          >
            Features
          </p>
          <ul className="mt-4 space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle
                  className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${
                    isPopular ? "text-white" : "text-primary-blue"
                  }`}
                />
                <span className={isPopular ? "text-blue-100" : "text-gray-600"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-8 space-y-3">
          {plan.buttons.map((button) => {
            const primaryStyle =
              "w-full py-3 font-semibold bg-white text-primary-blue rounded-lg shadow hover:bg-slate-100";
            const secondaryStyle =
              "w-full py-3 font-semibold text-primary-blue bg-white border-2 border-primary-blue rounded-lg hover:bg-primary-blue hover:text-white";
            const ghostStyle =
              "w-full py-3 font-semibold text-white bg-primary-blue/50 border-2 border-primary-blue/70 rounded-lg hover:bg-primary-blue/80";

            let style =
              button.style === "primary" ? primaryStyle : secondaryStyle;
            if (isPopular && button.style === "ghost") style = ghostStyle;

            return (
              <a
                href="#"
                key={button.text}
                className={`block text-center transition-colors duration-300 ${style}`}
              >
                {button.text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingCard