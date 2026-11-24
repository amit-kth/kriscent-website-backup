"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, TrendingUp } from "lucide-react";
import { ASSETS_BASE_URL } from "@/lib/variables";

/* ── Background image for the case study card ── */
const CASE_STUDY_BG_IMAGE =
  `${ASSETS_BASE_URL}/tempAssets/projectImages/banners/chabi.webp?updatedAt=1778330119786`;

/* ── Chat conversation shown inside the mobile mockup ── */
const chatScript = [
  {
    role: "user",
    text: "Hi, I'm new here. Where should I start?",
  },
  {
    role: "bot",
    text: "Welcome! 👋 I'm your investment assistant. I can help you understand the app, your portfolio, and gold or silver investments.",
  },
  {
    role: "user",
    text: "How is my portfolio performing?",
  },
  {
    role: "bot",
    text: "Your portfolio is up 4.8% this month, mostly driven by gold. Silver is currently at 1.2%.",
  },
  {
    role: "user",
    text: "Should I invest more in gold?",
  },
  {
    role: "bot",
    text: "Gold has shown lower volatility over the past 30 days. A small recurring investment could help balance your allocation.",
  },
  {
    role: "user",
    text: "Can you show me a breakdown?",
  },
  {
    role: "bot",
    text: "Open Portfolio and tap Insights to view your returns, asset split, and monthly performance.",
  },
];

/* ── Chat animation timing ── */
const FIRST_MESSAGE_DELAY = 0;
const BETWEEN_MESSAGE_DELAY = 1200;

export function CaseStudySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let messageIndex = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const revealNextMessage = () => {
      if (messageIndex >= chatScript.length) return;

      const delay =
        messageIndex === 0 ? FIRST_MESSAGE_DELAY : BETWEEN_MESSAGE_DELAY;

      const timer = setTimeout(() => {
        setVisibleMessages(messageIndex + 1);
        messageIndex += 1;
        revealNextMessage();
      }, delay);

      timers.push(timer);
    };

    revealNextMessage();
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [isVisible]);

  useEffect(() => {
    const container = chatMessagesRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [visibleMessages]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent py-10 lg:py-14"
    >

      <div className="container relative z-10">
        {/* ── Main case study card ── */}
        <div
          className={`relative overflow-hidden rounded-[28px] transition-all delay-100 duration-700 lg:rounded-[36px] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          style={{
            background:
              "linear-gradient(135deg, #001A3D 0%, #002B5B 48%, #0F4C81 100%)",
            boxShadow:
              "0 40px 80px -20px rgba(15, 76, 129, 0.4), 0 20px 40px -20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Background image , heavily softened for text contrast */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30 blur-2xl"
            style={{
              backgroundImage: `url(${CASE_STUDY_BG_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Dark vignette to boost text contrast on the left */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 22, 51, 0.55) 0%, rgba(0, 22, 51, 0.15) 55%, transparent 100%)",
            }}
          />

          {/* Subtle warm ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 20% 45%, rgba(255,199,44,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="relative grid items-stretch gap-8 px-5 pt-10 sm:px-8 sm:pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:px-14 lg:pt-14 2xl:px-20 2xl:pt-16">
            {/* ═══ LEFT: Editorial content , tight hierarchy ═══ */}
            <div className="flex flex-col justify-center pb-8 lg:pb-16 2xl:pb-20 max-w-[520px]">
              {/* Tag */}
              <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.08] px-3 py-1.5 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]">
                <Sparkles className="h-3 w-3 text-[#FFC72C]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  Fintech · Client Project
                </span>
              </div>

              {/* ── Big title , hero moment ── */}
              <h3 className="text-[2rem] font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-[2.4rem] lg:text-[2.8rem] xl:text-[3.2rem] 2xl:text-[3.6rem]">
                An AI assistant
                <br />
                that{" "}
                <span className="text-[#FFC72C]">
                  understands
                  <br />
                  your investments.
                </span>
              </h3>

              {/* ── One clean lead paragraph ── */}
              <p className="mt-6 text-[15px] leading-relaxed text-white/85 sm:text-base max-w-[440px]">
                We built a RAG-powered AI assistant grounded in real product
                data , reducing repetitive support queries by{" "}
                <span className="text-[#FFC72C] font-semibold">60%</span>{" "}
                in the first quarter.
              </p>

              {/* ── Meta strip , one row ── */}
              <div className="mt-8 flex items-center gap-4 lg:gap-6 pt-6 border-t border-white/10">
                {[
                  { label: "Industry", value: "Fintech" },
                  { label: "Stack", value: "RAG + LLM" },
                  { label: "Timeline", value: "6 weeks" },
                ].map((item) => (
                  <div key={item.label} className="flex-1">
                    <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-white/45 mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Outcome , hero stat row ── */}
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFC72C 0%, #DFA900 100%)",
                    boxShadow:
                      "0 8px 20px -4px rgba(255,199,44,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
                  }}
                >
                  <TrendingUp
                    className="h-5 w-5 text-[#002B5B]"
                    strokeWidth={2.6}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[36px] font-bold text-white tracking-tight leading-none">
                      60%
                    </span>
                    <span className="text-xs font-medium text-white/75">
                      fewer support queries
                    </span>
                  </div>
                  <div className="mt-1 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#FFC72C] to-[#FFC72C]/20" />
                </div>
              </div>
            </div>

            {/* ═══ RIGHT: Phone mockup , untouched ═══ */}
            <div className="relative flex min-h-[540px] items-end justify-center lg:min-h-[620px] lg:justify-end 2xl:min-h-[720px]">
              <div className="relative -mb-20 sm:-mb-24 lg:-mb-32 2xl:-mb-40">
                <span className="absolute -left-[4px] top-32 h-12 w-[4px] rounded-l-full bg-[#25253A]" />
                <span className="absolute -left-[4px] top-48 h-16 w-[4px] rounded-l-full bg-[#25253A]" />
                <span className="absolute -right-[4px] top-40 h-20 w-[4px] rounded-r-full bg-[#25253A]" />

                <div className="relative aspect-[9/19] w-[260px] max-w-[82vw] rounded-[46px] bg-[#111324] p-[9px] shadow-[0_50px_100px_-25px_rgba(0,0,0,0.7),0_20px_40px_-15px_rgba(0,0,0,0.4)] ring-1 ring-white/10 sm:w-[300px] lg:w-[340px] 2xl:w-[390px]">
                  <div
                    className="relative h-full w-full overflow-hidden rounded-[38px] ring-1 ring-white/5"
                    style={{
                      background:
                        "linear-gradient(180deg, #0A1F45 0%, #002B5B 100%)",
                    }}
                  >
                    <div className="absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-[#0f0f1e]">
                      <span className="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 rounded-full bg-white/[0.08]" />
                      <span className="absolute right-5 top-2 h-1.5 w-1.5 rounded-full bg-[#20243A]" />
                    </div>

                    <div className="flex items-center justify-between px-6 pb-2 pt-3 text-[10px] font-semibold text-white">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-3 rounded-sm bg-white/80" />
                        <span className="h-1.5 w-1 rounded-sm bg-white/80" />
                        <span className="h-2 w-4 rounded-sm border border-white/60" />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#FFC72C] to-[#DFA900] shadow-[0_2px_8px_-2px_rgba(255,199,44,0.5)]">
                        <Sparkles
                          className="h-4 w-4 text-[#002B5B]"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white">
                          Investment Assistant
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22C55E]" />
                          <span className="text-[10px] text-[#B8C7D9]">
                            Online
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      ref={chatMessagesRef}
                      className="chat-scroll h-[calc(100%-155px)] overflow-y-auto px-4 py-4"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <div className="flex min-h-full flex-col justify-end gap-2.5">
                        {chatScript
                          .slice(0, visibleMessages)
                          .map((message, index) => (
                            <div
                              key={`${message.role}-${index}`}
                              className={`flex animate-message-in ${message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                                }`}
                            >
                              <div
                                className={`max-w-[82%] px-3.5 py-2.5 text-[12px] leading-relaxed ${message.role === "user"
                                  ? "rounded-2xl rounded-tr-md bg-[#0F4C81] text-white shadow-[0_2px_6px_-1px_rgba(15,76,129,0.5)]"
                                  : "rounded-2xl rounded-tl-md bg-white/[0.08] text-[#B8C7D9] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                                  }`}
                              >
                                {message.text}
                              </div>
                            </div>
                          ))}

                        {visibleMessages < chatScript.length && (
                          <div className="flex justify-start">
                            <div className="flex items-center gap-1 rounded-2xl rounded-tl-md bg-white/[0.08] px-3.5 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8298B2]" />
                              <span
                                className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8298B2]"
                                style={{ animationDelay: "0.15s" }}
                              />
                              <span
                                className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8298B2]"
                                style={{ animationDelay: "0.3s" }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1F45] via-[#0A1F45]/95 to-transparent p-3 pb-7">
                      <div className="flex items-center gap-2 rounded-full bg-white/[0.08] px-3.5 py-2.5 backdrop-blur-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                        <span className="flex-1 text-[11px] text-[#8298B2]">
                          Ask anything...
                        </span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC72C] shadow-[0_2px_6px_-1px_rgba(255,199,44,0.5)]">
                          <Send
                            className="h-3 w-3 text-[#002B5B]"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    </div>

                    <span className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes message-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-message-in {
          animation: message-in 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .chat-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}