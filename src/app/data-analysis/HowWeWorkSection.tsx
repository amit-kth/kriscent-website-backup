import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { Target, Database, BarChart2, FileBarChart } from "lucide-react";

const steps = [
  {
    icon: <Target className="w-7 h-7 text-primary" />,
    title: "Define Goals",
    desc: "We align with your business objectives and identify the key questions to answer.",
  },
  {
    icon: <Database className="w-7 h-7 text-primary" />,
    title: "Collect & Prepare Data",
    desc: "We gather, clean, and structure data from all relevant sources for analysis.",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-primary" />,
    title: "Analyze & Discover",
    desc: "We apply analytics and visualization to uncover patterns and actionable insights.",
  },
  {
    icon: <FileBarChart className="w-7 h-7 text-primary" />,
    title: "Deliver & Support",
    desc: "We present clear reports and support ongoing improvements based on your feedback.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative py-16 px-2 sm:px-6 bg-gray-50 overflow-hidden">
      {/* Subtle tech/data background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg width="100%" height="100%" className="opacity-10 absolute top-0 left-0" style={{ zIndex: 0 }}>
          <rect x="10%" y="60%" width="80" height="80" fill="none" stroke="#ef4444" strokeWidth="2" rx="20" />
          <circle cx="80%" cy="30%" r="120" fill="none" stroke="#d1d5db" strokeWidth="2" />
          <text x="70%" y="90%" fontSize="18" fill="#d1d5db">DATA</text>
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          primaryHeading="How We Work"
          secondaryHeading="Our Process"
          isCentered={true}
          className="mb-14"
        />
        <div className="w-full flex justify-center">
          <div className="relative w-full bg-white rounded-3xl shadow-lg px-2 sm:px-8 py-10 flex flex-col items-center">
            {/* Removed the red connector line behind steps */}
            <div className="flex w-full flex-row items-stretch justify-between gap-2 md:gap-0 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center flex-1 px-2 group">
                  {/* Step circle with icon and number badge */}
                  <div className="relative mb-4 z-10">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-white shadow-md flex items-center justify-center border-2 border-primary/40 group-hover:shadow-lg transition-all">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm">{idx + 1}</span>
                  </div>
                  <div className="font-bold text-base md:text-lg text-gray-900 mb-1 text-center">{step.title}</div>
                  <div className="text-gray-600 text-xs md:text-sm text-center leading-relaxed max-w-[180px]">{step.desc}</div>
                  {/* Connector arrow except for last step (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-20">
                      <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="10" x2="38" y2="10" stroke="#ef4444" strokeWidth="2" />
                        <polygon points="38,5 48,10 38,15" fill="#ef4444" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 