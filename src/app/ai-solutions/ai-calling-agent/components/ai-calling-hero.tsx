// components/sections/voice-agents/voice-hero-section.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Volume2 } from "lucide-react";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { cn } from "@/lib/utils";

/* ── Background image path ── */
const HERO_BG_IMAGE = `${ASSETS_BASE_URL}/tempAssets/revamp/ai-calling-agents/hero.webp?updatedAt=1787136458499`;

/* ── Sample call audio , replace with your recorded demo ── */
const DEMO_AUDIO = `${ASSETS_BASE_URL}/tempAssets/revamp/ai-calling-agents/audio-demo.mp3`;

export function VoiceHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="voice-hero-title"
      className="relative w-full overflow-hidden bg-[#050914] h-[70vh] min-h-[440px] sm:h-[80vh] sm:min-h-[540px] lg:h-screen lg:min-h-[640px] 2xl:min-h-[820px]"
    >
      {/* ─── Full-bleed background image , no overlays ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${HERO_BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 flex h-full flex-col items-center px-4 pt-10 text-center sm:px-6 sm:pt-14 md:pt-20 lg:pt-25 2xl:pt-32">
        <h1
          id="voice-hero-title"
          className={cn(
            "flex max-w-3xl flex-col items-center gap-0 font-bold",
            "text-[clamp(2rem,5vw,3rem)] 2xl:text-[3.5rem]",
            "transition-all duration-1000 delay-100",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="text-white">Your next call.</span>
          <span className="text-destructive -translate-y-5">Handled by AI.</span>
        </h1>

        {/* ── Sub description , larger, leads into the demo ── */}
        <p
          className={cn(
            "text-[15px] leading-relaxed text-white/75 sm:text-base md:text-[17px] 2xl:text-lg",
            "transition-all duration-700 delay-200",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Listen to a real AI calling agent natural, multilingual, and live
          in days. <span className="font-semibold text-white">Press play.</span>
        </p>

        {/* ── Demo audio player ── */}
        <div
          className={cn(
            "mt-6 sm:mt-7 md:mt-8 2xl:mt-10 transition-all duration-700 delay-300",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <DemoPlayer audioSrc={DEMO_AUDIO} />
        </div>

        {/* ── Scroll cue ── */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-5 flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1.5 transition-opacity duration-1000 delay-700 sm:bottom-6 2xl:bottom-8",
            mounted ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="h-2 w-1 animate-[scroll-cue_1.6s_ease-in-out_infinite] rounded-full bg-white/70" />
        </span>
      </div>
    </section>
  );
}

/* ── Demo player , interactive + animated ── */

function DemoPlayer({ audioSrc }: { audioSrc: string }) {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.preload = "metadata";
    const onEnd = () => {
      setPlaying(false);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setElapsed(0);
    };
    audio.addEventListener("ended", onEnd);
    audioRef.current = audio;
    return () => {
      audio.removeEventListener("ended", onEnd);
      audio.pause();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      audioRef.current = null;
    };
  }, [audioSrc]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    } else {
      void audio.play();
      setPlaying(true);
      const tick = () => {
        setElapsed(audio.currentTime);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  const replay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play();
    setPlaying(true);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const tick = () => {
      setElapsed(audio.currentTime);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const progress = Math.min(elapsed / 30, 1); // assume ~30s sample

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-2.5 backdrop-blur-md sm:gap-4 sm:px-4">
      {/* main play/pause button with progress fill */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause demo" : "Play demo"}
        className="group relative flex h-12 items-center gap-2.5 overflow-hidden rounded-full bg-background px-6 text-sm font-bold text-foreground transition hover:bg-background/90 active:scale-95"
      >
        {/* progress fill behind content */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-y-0 left-0 rounded-full bg-background/60",
            playing && "origin-left transition-none"
          )}
          style={{ width: playing ? `${progress * 100}%` : "0%" }}
        />

        <span className="relative flex items-center gap-2.5">
          {playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current transition-transform group-hover:scale-110" />}
          {playing ? "Playing" : "Play demo"}
        </span>
      </button>

      {/* live equalizer */}
      <div className="flex h-6 items-end gap-1" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={cn("w-1 rounded-full bg-background/50", playing && "animate-equalizer bg-yellow-400")}
            style={{ height: "6px", animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>

      {/* replay */}
      <button
        type="button"
        onClick={replay}
        aria-label="Replay demo"
        className="flex size-10 items-center justify-center rounded-full text-white/70 transition hover:rotate-[-180deg] hover:bg-white/10 hover:text-white"
      >
        <RotateCcw className="size-4" />
      </button>

      {/* volume cue */}
      <span
        aria-hidden="true"
        className={cn(
          "hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition sm:flex",
          playing ? "animate-pulse text-yellow-400" : ""
        )}
      >
        <Volume2 className="size-4" />
      </span>
    </div>
  );
}

const styles = `
@keyframes scroll-cue {
  0% { transform: translateY(0); opacity: 0; }
  40% { opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}
@keyframes equalizer {
  0%, 100% { height: 6px; }
  50% { height: 24px; }
}
.animate-equalizer { animation: equalizer 0.9s ease-in-out infinite; }
`;

if (typeof document !== "undefined") {
  const id = "voice-hero-styles";
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = styles;
    document.head.appendChild(el);
  }
}
