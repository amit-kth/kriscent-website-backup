// components/sections/voice-agents/voice-integrations-section.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Zap,
  Wrench,
  Webhook,
  Lock,
  Network,
  Globe,
} from "lucide-react";

/* ── Integration surfaces , what AI connects TO ── */
const integrations = [
  {
    name: "HubSpot",
    category: "CRM",
    icon: "https://cdn.simpleicons.org/hubspot",
    color: "#FF7A59",
  },
  {
    name: "SAP",
    category: "ERP",
    icon: "https://cdn.simpleicons.org/sap",
    color: "#0FAAFF",
  },
  {
    name: "WhatsApp Business",
    category: "Messaging",
    icon: "https://cdn.simpleicons.org/whatsapp",
    color: "#25D366",
  },
  {
    name: "Gmail",
    category: "Email",
    icon: "https://cdn.simpleicons.org/gmail",
    color: "#EA4335",
  },
  {
    name: "Google Calendar",
    category: "Calendar",
    icon: "https://cdn.simpleicons.org/googlecalendar",
    color: "#4285F4",
  },
  {
    name: "Zoom",
    category: "Video Calls",
    icon: "https://cdn.simpleicons.org/zoom",
    color: "#0B5CFF",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "https://cdn.simpleicons.org/postgresql",
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "https://cdn.simpleicons.org/mongodb",
    color: "#47A248",
  },
  {
    name: "Razorpay",
    category: "Payments",
    icon: "https://cdn.simpleicons.org/razorpay",
    color: "#0C2451",
  },
  {
    name: "Stripe",
    category: "Payments",
    icon: "https://cdn.simpleicons.org/stripe",
    color: "#635BFF",
  },
  {
    name: "Zapier",
    category: "Workflow",
    icon: "https://cdn.simpleicons.org/zapier",
    color: "#FF4A00",
  },
  {
    name: "REST APIs",
    category: "Custom",
    icon: "https://cdn.simpleicons.org/postman",
    color: "#FF6C37",
  },
];

/* ── Connection protocols with icons ── */
const protocols = [
  {
    name: "MCP",
    subtitle: "Model Context Protocol",
    description: "Standard for AI ↔ tool communication",
    icon: Sparkles,
    color: "#6366F1",
    featured: true,
  },
  {
    name: "API Integration",
    subtitle: "Native connectors",
    description: "Direct integration with any REST or GraphQL API",
    icon: Network,
    color: "#4F46E5",
  },
  {
    name: "Function Calling",
    subtitle: "Structured actions",
    description: "AI invokes typed functions with validated inputs",
    icon: Zap,
    color: "#10B981",
  },
  {
    name: "Tool Calling",
    subtitle: "Dynamic tools",
    description: "Agents select the right tool at the right moment",
    icon: Wrench,
    color: "#F59E0B",
  },
  {
    name: "Webhooks",
    subtitle: "Event-driven",
    description: "Real-time triggers pushed to your systems instantly",
    icon: Webhook,
    color: "#EF4444",
  },
  {
    name: "OAuth 2.0",
    subtitle: "Secure auth",
    description: "Enterprise-grade authorization and token management",
    icon: Lock,
    color: "#0EA5E9",
  },
];

/* ── Split integrations into two marquee rows ── */
const row1 = integrations.slice(0, 8);
const row2 = integrations.slice(8);

/* ── Reusable integration card (unchanged) ── */
function TechCard({ tech }: { tech: (typeof integrations)[0] }) {
  return (
    <div
      className="group shrink-0 flex items-center gap-3 px-5 py-4 rounded-3xl transition-all duration-300 cursor-pointer hover:shadow-lg border border-white/10"
      style={{ backgroundColor: tech.color }}
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/80 shrink-0 group-hover:bg-white transition-colors">
        <Image
          src={tech.icon}
          alt={tech.name}
          width={18}
          height={18}
          className="transition-transform group-hover:scale-110"
        />
      </div>

      <div>
        <div className="text-sm font-semibold text-white whitespace-nowrap">
          {tech.name}
        </div>
        <div className="text-[11px] text-white/70 whitespace-nowrap">
          {tech.category}
        </div>
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className="relative py-14 lg:py-20 overflow-hidden bg-muted/20 border-y border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header , compact */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 lg:mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-3 justify-center">
            <span className="w-6 h-px bg-primary" />
            AI Integration & Tool Connectivity
            <span className="w-6 h-px bg-primary" />
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] 2xl:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-3">
            Connect your AI to{" "}
            <span className="text-primary">everything it needs.</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Securely access your CRM, ERP, databases, and business tools , so
            agents can take real actions on your behalf.
          </p>
        </div>
      </div>

      {/* ── Marquee row 1 ── */}
      <div className="w-full mb-4 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-muted/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-muted/60 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 marquee">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-4 shrink-0">
              {row1.map((tech) => (
                <TechCard key={`${tech.name}-${setIndex}`} tech={tech} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee row 2 (reversed) ── */}
      <div className="w-full mb-12 lg:mb-16 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-muted/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-muted/60 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 marquee-reverse">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-4 shrink-0">
              {row2.map((tech) => (
                <TechCard
                  key={`${tech.name}-reverse-${setIndex}`}
                  tech={tech}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Protocols section ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Sub-header for protocols */}
        <div
          className={`text-center mb-6 lg:mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="flex items-center gap-3 justify-center mb-3">
            <div className="h-px flex-1 max-w-[80px] bg-border" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Connected via
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-border" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
            Enterprise-grade protocols
          </h3>
        </div>

        {/* ── Protocols strip , compact horizontal cards ── */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            {/* Sub-header */}
            <div className="flex items-center gap-3 justify-center mb-5 max-w-md mx-auto">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Connected via
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Compact protocol pills , one row, wraps naturally */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {protocols.map((protocol) => {
                const Icon = protocol.icon;
                const isFeatured = protocol.featured;

                return (
                  <div
                    key={protocol.name}
                    className="group inline-flex items-center gap-2 rounded-full bg-background pl-1.5 pr-4 py-1.5 cursor-default transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      boxShadow: isFeatured
                        ? `0 2px 4px rgba(0,0,0,0.04), 0 8px 20px -6px ${protocol.color}45, 0 0 0 1px ${protocol.color}30`
                        : `0 1px 2px rgba(0,0,0,0.04), 0 4px 12px -4px ${protocol.color}25, 0 0 0 1px ${protocol.color}15`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 2px 4px rgba(0,0,0,0.05), 0 10px 24px -6px ${protocol.color}55, 0 0 0 1px ${protocol.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = isFeatured
                        ? `0 2px 4px rgba(0,0,0,0.04), 0 8px 20px -6px ${protocol.color}45, 0 0 0 1px ${protocol.color}30`
                        : `0 1px 2px rgba(0,0,0,0.04), 0 4px 12px -4px ${protocol.color}25, 0 0 0 1px ${protocol.color}15`;
                    }}
                  >
                    {/* Colored icon container */}
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-full shrink-0 relative"
                      style={{
                        background: `${protocol.color}15`,
                      }}
                    >
                      <Icon
                        className="w-3.5 h-3.5"
                        strokeWidth={2.2}
                        style={{ color: protocol.color }}
                      />

                      {/* Featured pulse dot */}
                      {isFeatured && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-background"
                          style={{ background: protocol.color }}
                        >
                          <span
                            className="absolute inset-0 rounded-full animate-ping opacity-60"
                            style={{ background: protocol.color }}
                          />
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <span
                      className="text-xs font-semibold tracking-tight whitespace-nowrap"
                      style={{ color: protocol.color }}
                    >
                      {protocol.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}