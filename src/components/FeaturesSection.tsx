import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegEye, FaRegHeart, FaStethoscope } from "react-icons/fa";
import { GiBrain, GiPiggyBank } from "react-icons/gi";

// You would replace these with your actual images
const doctorImageUrl = "https://picsum.photos/id/1027/100/100";
const patientImageUrl = "https://picsum.photos/id/1005/200/150";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-50 sm:py-24">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-blue border border-primary-blue rounded-full">
              Features
            </span>
            <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
              Reason for Choosing Liva
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              This all-in-one solution makes healthcare delivery more efficient,
              personalized, and accessible for both sides. E-prescriptions
              streamline medication management by allowing prescriptions to be
              sent directly to pharmacies, reducing paperwork and errors.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 mt-6 lg:mt-0 px-8 py-3 font-semibold text-white bg-primary-blue rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Feature Cards */}
          <div className="flex flex-col gap-6">
            <FeatureCard
              title="Virtual Appointments"
              description="Conduct secure, high-quality video consultations with your patients, providing a real-time, face-to-face interaction from the comfort.."
              isActive={true}
            />
            <FeatureCard
              title="Secure Messaging"
              description="Whether it's for follow-up questions after an appointment, sharing test results, or addressing general health inquiries, our platform ensures.."
            />
            <FeatureCard
              title="Patient Portal"
              description="Patients can take control of their healthcare through our intuitive, easy-to-use patient portal, where they can manage all aspects of their..."
            />
          </div>

          {/* Right Column: Visual Demonstration */}
          <div className="relative flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg min-h-[400px]">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-bl-full bg-dark-blue-bg">
              <div className="w-full h-full transform scale-150 bg-primary-blue"></div>
            </div>
            {/* Dr. Lane Card */}
            <DoctorCard doctorImage={doctorImageUrl} />
            {/* Patient Video */}
            <img
              src={patientImageUrl}
              alt="Patient on video call"
              className="absolute w-40 h-auto rounded-lg shadow-md bottom-8 right-8"
            />
            {/* Squiggly Arrows (SVG placeholders) */}
            <SquigglyArrow className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 w-24 h-24 text-primary-blue transform -rotate-12" />
            <SquigglyArrow className="absolute bottom-1/4 left-1/3 w-28 h-28 text-primary-blue" />
          </div>
        </div>

        {/* Bottom Widgets Grid */}
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          <DepartmentWidget />
          <HealthUpdatesWidget />
          <SpecializedDoctorWidget />
        </div>
      </div>
    </section>
  );
};

// --- Sub-Components ---

interface FeatureCardProps {
  title: string;
  description: string;
  isActive?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  isActive = false,
}) => {
  const cardClasses = isActive
    ? "bg-primary-blue text-white"
    : "bg-white text-gray-700 shadow-md";

  return (
    <div className={`p-8 rounded-2xl ${cardClasses}`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className={`mt-2 ${isActive ? "text-blue-100" : "text-gray-600"}`}>
        {description}
      </p>
    </div>
  );
};

const DoctorCard: React.FC<{ doctorImage: string }> = ({ doctorImage }) => (
  <div className="relative z-10 p-6 bg-white rounded-2xl shadow-xl w-full max-w-sm">
    <div className="flex items-center space-x-4">
      <img
        src={doctorImage}
        alt="Dr. Devon Lane"
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h4 className="text-lg font-bold text-text-dark">Dr. Devon Lane</h4>
        <div className="flex items-center text-sm text-gray-500">
          <FaRegEye className="mr-2 text-primary-blue" />
          Optometry
        </div>
      </div>
    </div>
    <div className="my-4">
      <span className="px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full">
        Appointment: 2.00 PM
      </span>
    </div>
    <p className="text-gray-600">
      <span className="font-semibold text-text-dark">Primary Concern:</span>{" "}
      Persistent blurred vision and significant eye discomfort when walking in
      sunset.
    </p>
    <a
      href="#"
      className="flex items-center justify-center w-full px-4 py-3 mt-4 space-x-2 font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <img
        src="https://www.gstatic.com/images/branding/product/2x/meet_24dp.png"
        alt="Google Meet"
        className="w-5 h-5"
      />
      <span>Google Meet Link</span>
    </a>
  </div>
);

const DepartmentWidget: React.FC = () => (
  <div className="text-center">
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <div className="relative">
        <FiSearch className="absolute text-gray-400 top-1/2 left-4 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>
      <ul className="mt-4 space-y-3 text-left">
        <li className="flex items-center p-2 rounded-lg hover:bg-slate-100">
          <FaRegEye className="mr-3 text-lg text-red-500" /> Optometry
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-slate-100">
          <FaRegHeart className="mr-3 text-lg text-red-500" /> Cardiology
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-slate-100">
          <GiPiggyBank className="mr-3 text-lg text-pink-500" /> Psychologist
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-slate-100">
          <FaStethoscope className="mr-3 text-lg text-blue-400" /> Dentist
        </li>
      </ul>
    </div>
    <div className="inline-block px-5 py-2 mt-4 font-semibold text-primary-blue bg-white border border-gray-300 rounded-full">
      Various Departments
    </div>
  </div>
);

const HealthUpdatesWidget: React.FC = () => (
  <div className="text-center">
    <div className="p-6 bg-white rounded-2xl shadow-lg grid grid-cols-2 gap-4">
      <HealthStat
        icon={<FaRegHeart className="text-red-500" />}
        label="Heart Rate"
        value="90 BPM"
      />
      <HealthStat
        icon={<GiBrain className="text-blue-500" />}
        label="Total Weight"
        value="65 KG"
      />
      <HealthStat
        icon={<FaStethoscope className="text-pink-500" />}
        label="Blood Cells"
        value="1200 UL"
      />
      <HealthStat
        icon={<FaRegHeart className="text-orange-500" />}
        label="Calorie Burn"
        value="2200 kcal"
      />
    </div>
    <div className="inline-block px-5 py-2 mt-4 font-semibold text-primary-blue bg-white border border-gray-300 rounded-full">
      Daily Health Updates
    </div>
  </div>
);

const HealthStat: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="p-4 bg-slate-50 rounded-lg text-left">
    <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full mb-2">
      {icon}
    </div>
    <p className="text-sm font-semibold text-gray-500">{label}</p>
    <p className="font-bold text-text-dark">{value}</p>
  </div>
);

const SpecializedDoctorWidget: React.FC = () => {
  // Replace with actual doctor images
  const doctors = [
    "https://picsum.photos/id/237/40/40",
    "https://picsum.photos/id/238/40/40",
    "https://picsum.photos/id/239/40/40",
    "https://picsum.photos/id/240/40/40",
    "https://picsum.photos/id/241/40/40",
    "https://picsum.photos/id/242/40/40",
    "https://picsum.photos/id/243/40/40",
    "https://picsum.photos/id/244/40/40",
    "https://picsum.photos/id/247/40/40",
  ];
  return (
    <div className="text-center">
      <div className="relative flex items-center justify-center p-6 h-full bg-white rounded-2xl shadow-lg min-h-[220px]">
        <div className="grid grid-cols-4 grid-rows-3 gap-4">
          {doctors.map((doc, i) => (
            <img
              key={i}
              src={doc}
              className="w-10 h-10 rounded-full object-cover"
              style={{ gridArea: `auto / span 1` }}
            />
          ))}
        </div>
        {/* The central search button, positioned absolutely */}
        <div className="absolute flex items-center justify-center w-16 h-16 bg-primary-blue rounded-full shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FiSearch className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="inline-block px-5 py-2 mt-4 font-semibold text-primary-blue bg-white border border-gray-300 rounded-full">
        Specialized Doctor
      </div>
    </div>
  );
};

// SVG Placeholder for the squiggly arrows
const SquigglyArrow: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 50 C 20 20, 40 20, 50 50 S 70 80, 90 50"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M80 50 L90 40 M90 50 L80 60"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FeaturesSection;
