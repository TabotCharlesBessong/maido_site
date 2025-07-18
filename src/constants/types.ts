export interface Testimonial {
  name: string;
  title: string;
  image: string;
  logo: string; // This could be an image URL or component
  quote: string;
  rating: number;
}

export interface PlanPrice {
  price: number;
  oldPrice?: number;
}

export interface PricingPlan {
  name: string;
  isPopular: boolean;
  prices: {
    monthly: PlanPrice;
    yearly: PlanPrice;
  };
  features: string[];
  buttons: { text: string; style: "primary" | "secondary" | "ghost" }[];
}