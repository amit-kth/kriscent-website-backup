import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Brain, Settings, CheckCircle2, BarChart2, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary mb-3" />,
    title: "Domain-Focused Expertise",
    desc: "We build industry-specific analytics for sectors like SaaS, healthcare, e-commerce, and finance.",
  },
  {
    icon: <Settings className="w-8 h-8 text-primary mb-3" />,
    title: "Tailored Analytics Solutions",
    desc: "Every project is customized to your business goals,no templates, just precision.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary mb-3" />,
    title: "Fast & Reliable Delivery",
    desc: "Get accurate results quickly, with clear communication and minimal iterations.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary mb-3" />,
    title: "Scalable for All Sizes",
    desc: "From startups to enterprises, our solutions grow with your data and team.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary mb-3" />,
    title: "Actionable Data Insights",
    desc: "We turn complex numbers into easy-to-understand visual stories that drive results.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary mb-3" />,
    title: "End-to-End Support",
    desc: "From cleaning to insight delivery, we’re your data partner at every step.",
  },
];

export default function WhyChooseKriscentSection() {
  return (
    <section className="relative py-16 px-2 sm:px-6 bg-gray-50 overflow-hidden">
      {/* Subtle abstract background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg width="100%" height="100%" className="opacity-10 absolute top-0 left-0" style={{ zIndex: 0 }}>
          <circle cx="20%" cy="30%" r="100" fill="none" stroke="#ef4444" strokeWidth="2" />
          <rect x="70%" y="60%" width="120" height="60" fill="none" stroke="#d1d5db" strokeWidth="2" rx="20" />
          <circle cx="80%" cy="20%" r="40" fill="none" stroke="#d1d5db" strokeWidth="1" />
          <text x="10%" y="90%" fontSize="18" fill="#d1d5db">101010</text>
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          primaryHeading="Why Choose Kriscent for Data Analytics"
          isCentered={true}
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-primary/20 flex flex-col items-center text-center p-8 hover:shadow-lg transition-all duration-200"
            >
              {feature.icon}
              <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 