"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

/* ── FAQ data ── */
export const aiFaqs = [
  {
    question: "What types of AI solutions do you build?",
    answer:
      "We build a wide range of enterprise AI solutions including RAG-powered chatbots, AI customer support agents, intelligent report generation systems, AI-driven CRM & ERP platforms, workflow automation tools, and fully custom AI applications tailored to your specific business needs.",
  },
  {
    question: "How long does it take to build a custom AI solution?",
    answer:
      "Timelines vary based on complexity. A focused AI chatbot or support agent can be delivered in 4–6 weeks. More complex solutions like AI-powered CRM/ERP systems or multi-agent workflows typically take 3–6 months. We follow an agile approach with regular milestones so you see progress from week one.",
  },
  {
    question: "Do you work with our existing tech stack?",
    answer:
      "Absolutely. Our solutions are designed to integrate seamlessly with your existing infrastructure , whether that's your current CRM, ERP, databases, cloud environment, or internal tools. We work with AWS, Azure, Google Cloud, and most modern enterprise platforms.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "Security is foundational to everything we build. We implement end-to-end encryption, role-based access controls, SOC 2 compliant practices, and can deploy solutions in your own cloud environment or on-premise. Your data never leaves your control unless you choose otherwise.",
  },
  {
    question: "What AI models and technologies do you use?",
    answer:
      "We work with leading AI models including OpenAI GPT, Anthropic Claude, Google Gemini, and open-source models like Llama. Our stack includes LangChain, CrewAI for multi-agent systems, Pinecone and Weaviate for vector databases, and enterprise-grade cloud infrastructure.",
  },
  {
    question: "Can you build AI solutions for regulated industries?",
    answer:
      "Yes. We have experience building AI solutions for healthcare, finance, legal, and other regulated sectors. We ensure compliance with industry-specific regulations like HIPAA, GDPR, and SOC 2, and can implement audit trails, explainability layers, and human-in-the-loop workflows.",
  },
  {
    question: "What does the engagement process look like?",
    answer:
      "We start with a free AI consultation to understand your challenges and goals. From there, we deliver a detailed proposal with architecture, timeline, and pricing. Once approved, we move into agile development sprints with weekly demos, followed by deployment, training, and ongoing support.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer:
      "Yes. We offer flexible support and maintenance plans that include model monitoring, performance optimization, bug fixes, feature enhancements, and scaling assistance. We treat every deployment as a long-term partnership, not a one-time project.",
  },
];

/* ── Single FAQ item ── */
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof aiFaqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-background/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full flex items-start justify-between gap-4 text-left px-5 lg:px-6 py-4 transition-colors ${isOpen ? "bg-background/[0.04]" : "hover:bg-background/[0.03]"
          }`}
      >
        <div className="flex items-start gap-3 pr-4">
          <span
            className={`text-[11px] font-mono mt-1 transition-colors ${isOpen ? "text-primary" : "text-background/35"
              }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3
            className={`text-sm lg:text-[15px] font-medium leading-6 transition-colors ${isOpen ? "text-background" : "text-background/85"
              }`}
          >
            {faq.question}
          </h3>
        </div>

        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-0.5 transition-all ${isOpen
              ? "bg-primary text-primary-foreground"
              : "bg-background/10 text-background/65"
            }`}
        >
          {isOpen ? (
            <Minus className="w-3 h-3" />
          ) : (
            <Plus className="w-3 h-3" />
          )}
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="px-5 lg:px-6 pb-4 pl-11 lg:pl-[52px]">
          <p className="text-sm text-background/55 leading-6 max-w-[58ch]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── FAQ Section ── */
export function AiFAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="rounded-[28px] lg:rounded-[36px] border border-background/10 bg-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
          {/* Fixed height container */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] h-auto lg:h-[520px]">
            {/* Left: Header , vertically centered */}
            <div
              className={`p-6 lg:p-8 xl:p-10 border-b border-background/10 lg:border-b-0 lg:border-r flex flex-col justify-center transition-all duration-700 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
                }`}
            >
              <span className="inline-flex items-center gap-3 text-xs font-mono text-background/60 mb-5">
                <span className="w-8 h-px bg-primary" />
                FAQ
              </span>

              <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-background mb-4 leading-[1.08]">
                Common questions,
                <br />
                <span className="text-primary">Clear answers.</span>
              </h2>

              <p className="text-sm text-background/60 leading-6 max-w-md">
                Everything you need to know about our AI solutions, delivery
                process, integrations, security, and long-term support.
              </p>

              <div className="mt-6 rounded-2xl border border-background/10 bg-background/[0.04] p-4">
                <p className="text-sm font-medium text-background">
                  Need a specific answer?
                </p>
                <p className="mt-1 text-xs text-background/55 leading-5">
                  Schedule a consultation and our team will walk you through the
                  right AI approach for your business.
                </p>
              </div>
            </div>

            {/* Right: Scrollable FAQ list */}
            <div
              className={`relative transition-all duration-700 delay-100 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }`}
            >
              {/* Top fade */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-foreground to-transparent z-10 pointer-events-none" />

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-foreground to-transparent z-10 pointer-events-none" />

              {/* Scrollable container */}
              <div className="h-full max-h-[400px] lg:max-h-[520px] overflow-y-auto faq-scroll">
                {aiFaqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .faq-scroll::-webkit-scrollbar {
          width: 3px;
        }
        .faq-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .faq-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .faq-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .faq-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
        }
      `}</style>
    </section>
  );
}