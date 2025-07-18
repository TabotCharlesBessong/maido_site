import type { PricingPlan, Testimonial } from "./types";

export const testimonialData: Testimonial[] = [
  {
    name: "Albert Flores",
    title: "Web Designer",
    image: "https://i.pravatar.cc/150?img=1",
    logo: "/logos/roadmunk.svg", // Replace with your logo path
    quote:
      "The platform's design is intuitive and clean. As a designer, I appreciate the thought that went into the user experience.",
    rating: 4.8,
  },
  {
    name: "Theresa Webb",
    title: "Nursing Assistant",
    image: "https://i.pravatar.cc/150?img=2",
    logo: "/logos/arangodb.svg",
    quote:
      "Liva has been a game-changer for communicating with patients post-op. The secure messaging is reliable and easy to use.",
    rating: 4.9,
  },
  {
    name: "Jane Cooper",
    title: "Medical Assistant",
    image: "https://i.pravatar.cc/150?img=3",
    logo: "/logos/lastfm.svg",
    quote:
      "Our clinic has completely transformed since switching to Liva. The ease of scheduling, secure video consultations, and e-prescriptions have streamlined our operations and improved patient satisfaction. The platform is user-friendly, and the support team is always responsive.",
    rating: 5.0,
  },
  {
    name: "Ralph Edwards",
    title: "President of Sales",
    image: "https://i.pravatar.cc/150?img=4",
    logo: "/logos/sharecare.svg",
    quote:
      "From a business perspective, the ROI with Liva is undeniable. We've reduced no-shows and increased our reach to new patient demographics.",
    rating: 5.0,
  },
  {
    name: "Rob Alexander",
    title: "Dog Trainer", // The design says 'Dog Trainer' :)
    image: "https://i.pravatar.cc/150?img=5",
    logo: "/logos/adroll.svg",
    quote:
      "Even for a non-technical person like me, getting started with Liva was a breeze. It just works, which is exactly what you want from a healthcare tool.",
    rating: 4.7,
  },
];

export const pricingData: PricingPlan[] = [
  {
    name: "Basic Plan",
    isPopular: false,
    prices: {
      monthly: { price: 25, oldPrice: 32 },
      yearly: { price: 250, oldPrice: 320 },
    },
    features: [
      "Secure, encrypted video consultations.",
      "Appointment scheduling and reminders.",
      "Patient portal for health records, prescriptions.",
      "Secure messaging for follow-ups and inquiries.",
      "HIPAA-compliant data protection.",
      "Basic support via email.",
    ],
    buttons: [{ text: "Get PRO", style: "secondary" }],
  },
  {
    name: "Premium Plan",
    isPopular: true,
    prices: {
      monthly: { price: 45, oldPrice: 56 },
      yearly: { price: 450, oldPrice: 560 },
    },
    features: [
      "Everything in Basic, plus:",
      "Prescription management & delivery to pharmacies.",
      "Integration with EHR systems.",
      "Appointment types and workflows.",
      "Multi-device access for patients.",
      "Priority support via email and phone.",
    ],
    buttons: [
      { text: "Get PRO", style: "primary" },
      { text: "Free Trial", style: "ghost" },
    ],
  },
  {
    name: "Enterprise Plan",
    isPopular: false,
    prices: {
      monthly: { price: 160, oldPrice: 180 },
      yearly: { price: 1600, oldPrice: 1800 },
    },
    features: [
      "Everything in Business, plus:",
      "Custom API integrations for other healthcare.",
      "Advanced security features and custom data.",
      "Custom patient onboarding and tailored workflows.",
      "Dedicated account manager and training support.",
      "Telemedicine scalability for large teams.",
    ],
    buttons: [{ text: "Get PRO", style: "secondary" }],
  },
];
