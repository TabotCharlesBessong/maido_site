import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiClock, FiSmile, FiTrendingUp } from "react-icons/fi";
import dashboard from "../assets/dashboard.png"

// Placeholder for your dashboard image - replace with your actual asset
// const dashboardImageUrl =
//   "https://cdn.dribbble.com/userupload/4149839/file/original-23b9222a101f11a4593bb074d0929235.png?resize=1200x900";

const HeroSection: React.FC = () => {
  // Data for the social proof stats to make it easy to manage
  const stats = [
    { icon: <FiClock />, text: "24/7 Services" },
    { icon: <FiSmile />, text: "95% Patient Satisfy" },
    { icon: <FiTrendingUp />, text: "Low Operational Costs" },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content & CTAs */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-primary-blue bg-blue-100 border border-primary-blue/30 rounded-full">
              Modern Healthcare Solutions
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark tracking-tight">
              Connect with Doctor <br />
              Anywhere, Anytime
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600">
              Transform the way you deliver healthcare with our all-in-one
              telemedicine platform. Designed to make virtual care seamless,
              secure, and efficient.
            </p>

            {/* Social Proof Box */}
            <div className="mt-8 p-6 bg-slate-50 border border-gray-200 rounded-lg">
              <p className="font-semibold text-gray-700">
                More than 7500+ people using everyday.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="text-primary-blue mr-2">{stat.icon}</span>
                    {stat.text}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
              >
                Get Pro
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-3 font-semibold text-primary-blue bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Free Trial
              </a>
            </div>
          </div>

          {/* Right Column: Image with Play Button */}
          <div className="relative">
            <img
              src={dashboard}
              alt="Liva application dashboard"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <button
              aria-label="Play video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 bg-white/70 rounded-full backdrop-blur-sm shadow-xl hover:scale-110 transition-transform"
            >
              <div className="w-14 h-14 bg-primary-blue rounded-full flex items-center justify-center">
                <FaPlay className="w-5 h-5 text-white ml-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
