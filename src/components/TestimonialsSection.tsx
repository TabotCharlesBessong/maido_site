import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { testimonialData } from "../constants/data";


// A small component for the star rating
const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 mt-6 border border-gray-200 rounded-lg bg-white">
      <div className="flex items-center text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <span className="font-bold text-lg text-primary-blue">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  // Start with Jane Cooper (index 2) as active, like in the design
  const [activeIndex, setActiveIndex] = useState(2);
  const activeTestimonial = testimonialData[activeIndex];

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 bg-slate-50 sm:py-24">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-blue border border-primary-blue rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
              What Our User Said
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our users have shared their satisfaction with our service, noting
              how easy it is to use and how it has transformed their healthcare
              experience.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 mt-6 lg:mt-0 px-8 py-3 font-semibold text-white bg-primary-blue rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Check Others
          </a>
        </div>

        {/* Testimonial Cards */}
        <div className="flex items-center justify-center gap-4 px-4 pb-4 overflow-x-auto lg:gap-8">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.name}
              onClick={() => setActiveIndex(index)}
              className={`
                flex-shrink-0 w-56 p-6 text-center transition-all duration-300 ease-in-out cursor-pointer
                rounded-2xl
                ${
                  activeIndex === index
                    ? "bg-white scale-105 shadow-xl border-2 border-primary-blue"
                    : "bg-white shadow-md hover:shadow-lg hover:-translate-y-1"
                }
              `}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-bold text-text-dark">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
              <img
                src={testimonial.logo}
                alt={`${testimonial.name}'s company logo`}
                className="h-6 mx-auto mt-4"
              />
            </div>
          ))}
        </div>

        {/* Active Quote Display */}
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex} // This is crucial for AnimatePresence to detect changes
              variants={quoteVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-8 bg-white border border-primary-blue/30 rounded-2xl shadow-lg"
            >
              <p className="text-xl italic text-gray-700 leading-relaxed">
                “{activeTestimonial.quote}”
              </p>
              <Rating rating={activeTestimonial.rating} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
