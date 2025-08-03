import type { BlogPost, HowItWorksStep, PricingPlan, Testimonial } from "./types";

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

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "FAQs For Covid-19 Vaccination",
    excerpt:
      "With the drastic rise in Covid-19 cases within the country, there has been a lot of uncertainty revolving around the second strain of the virus as well as...",
    imageUrl:
      "https://images.unsplash.com/photo-1618961734760-466979ce35b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    author: {
      name: "Nandini Jain",
      avatarUrl: "https://i.pravatar.cc/150?img=6",
    },
    isFeatured: true,
  },
  {
    id: 2,
    title: "All You Need To Know About Healthy diet",
    excerpt: "A healthy diet plan is balanced eating approach that provides...",
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200",
    author: { name: "John Doe", avatarUrl: "https://i.pravatar.cc/150?img=7" },
    isFeatured: false,
  },
  {
    id: 3,
    title: "Benefits of teleconsultation for Poor",
    excerpt: "Teleconsultation offers significant benefits for low-income...",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200",
    author: {
      name: "Jane Smith",
      avatarUrl: "https://i.pravatar.cc/150?img=8",
    },
    isFeatured: false,
  },
  {
    id: 4,
    title: "Technology To Reduce Time On Care",
    excerpt: "Innovative technology is helping healthcare providers deliver...",
    imageUrl:
      "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200",
    author: {
      name: "Peter Jones",
      avatarUrl: "https://i.pravatar.cc/150?img=9",
    },
    isFeatured: false,
  },
];

// Replace image URLs with your actual assets
export const howItWorksData: HowItWorksStep[] = [
  {
    step: 1,
    title: "Sign Up or Log In",
    description: "Create a new account or log in to your existing account using a secure, easy-to-navigate portal. Enter your personal and medical information to set up your profile.",
    imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    isFeatured: false,
  },
  {
    step: 2,
    title: "Schedule an Appointment",
    description: "Browse available doctors and select a convenient time for your virtual consultation. You can easily choose the service you need and confirm your appointment in just a few clicks.",
    imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    isFeatured: true,
  },
  {
    step: 3,
    title: "Attend Virtual Consultation",
    description: "Join your video consultation through the app at the scheduled time. Discuss your health concerns with the doctor, get advice, and even receive e-prescriptions, all from the comfort.",
    imageUrl: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    isFeatured: false,
  },
];
