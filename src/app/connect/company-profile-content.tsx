"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  Briefcase,
  ChevronRight,
  Globe,
  Info,
  LayoutGrid,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ASSETS_BASE_URL } from "@/lib/variables";

const HERO_IMAGE = `${ASSETS_BASE_URL}/tempAssets/heroSections/contact-hero.webp`;

const exploreItems = [
  { label: "About Us", href: "/about", icon: Info, iconBg: "bg-blue-500" },
  { label: "Services", href: "/services", icon: LayoutGrid, iconBg: "bg-teal-500" },
  { label: "Portfolio", href: "/portfolio", icon: Briefcase, iconBg: "bg-violet-500" },
  { label: "Careers", href: "/career", icon: Users, iconBg: "bg-emerald-500" },
  { label: "Awards", href: "/awards", icon: Trophy, iconBg: "bg-orange-500" },
  { label: "Contact", href: "/contact", icon: Mail, iconBg: "bg-pink-500" },
] as const;

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-8.686-4h5.025c-.088-1.759-1.136-2.66-2.432-2.66-1.551 0-2.594 1.042-2.593 2.66zm-9.661 9.916h-6.916v-14.771h6.855c3.24 0 4.972 1.733 4.972 4.292 0 1.906-1.023 3.11-2.517 3.7 1.684.433 2.771 1.729 2.771 3.61 0 2.634-2.031 4.169-5.165 4.169zm-3.891-12.481v3.194h3.135c1.279 0 2.118-.865 2.118-1.813 0-1.089-.839-1.381-2.118-1.381h-3.135zm0 5.316v3.47h3.377c1.385 0 2.2-.865 2.2-2.02 0-1.089-.815-1.45-2.2-1.45h-3.377z" />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-border" aria-hidden />
      <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
        {children}
      </h2>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-border" aria-hidden />
    </div>
  );
}

function TouchCard({
  icon,
  iconWrapClass,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  iconWrapClass: string;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex w-full items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-sm shadow-black/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-lg hover:shadow-black/5"
    >
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105 ${iconWrapClass}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1 text-left">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="truncate text-sm text-muted-foreground">{value}</p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground" aria-hidden />
    </a>
  );
}

function OfficeCard({
  title,
  badge,
  badgeClass,
  badgeStyle,
  address,
}: {
  title: string;
  badge: string;
  badgeClass: string;
  badgeStyle?: React.CSSProperties;
  address: string;
}) {
  return (
    <div className="group flex w-full items-start gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-sm shadow-black/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:shadow-lg hover:shadow-black/5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        <MapPin className="h-6 w-6" aria-hidden />
      </div>
      <div className="min-w-0 flex-1 text-left">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <p className="font-semibold text-foreground">{title}</p>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeClass}`}
            style={badgeStyle}
          >
            {badge}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{address}</p>
      </div>
      <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground" aria-hidden />
    </div>
  );
}

export default function CompanyProfileContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted via-background to-background text-foreground">
      <main>
        {/* Hero */}
        <section className="relative">
          <div className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[320px]">
            <div
              className="absolute inset-0 scale-110 bg-cover bg-center blur-sm"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-neutral-900/40 to-background" aria-hidden />
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center px-4 sm:max-w-xl">
            <div className="relative -mt-14 sm:-mt-16">
              {/* Glow ring */}
              <div className="absolute inset-0 -z-10 animate-pulse rounded-2xl bg-primary/30 blur-2xl" aria-hidden />
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-background bg-primary shadow-2xl shadow-primary/25 sm:h-28 sm:w-68">
                <img
                  src={`${ASSETS_BASE_URL}/tempAssets/logokriscent.png?updatedAt=1724488738769`}
                  alt=""
                  className="h-10 w-auto object-contain sm:h-14"
                  width={120}
                  height={48}
                />
              </div>
            </div>

            <h1 className="mt-6 text-center text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Kriscent Techno Hub Pvt. Ltd.
            </h1>
            <p className="mt-2 text-center text-base text-muted-foreground sm:text-lg">
              Your One-Stop IT Solutions Partner
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm sm:text-sm">
              <Award className="h-4 w-4 shrink-0 text-primary" aria-hidden />
              CMMI Level 3 Certified
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-lg space-y-12 px-4 py-12 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          {/* Get in touch */}
          <section className="space-y-5">
            <SectionTitle>Get in Touch</SectionTitle>
            <div className="flex flex-col gap-3">
              <TouchCard
                icon={<Phone className="h-5 w-5" />}
                iconWrapClass="bg-gradient-to-br from-blue-500 to-blue-600"
                title="Call Us"
                value="+91-7240560001/2/3/4/5"
                href="tel:+917240560001"
              />
              <TouchCard
                icon={<MessageCircle className="h-5 w-5" />}
                iconWrapClass="bg-gradient-to-br from-[#25D366] to-[#128C7E]"
                title="WhatsApp Chat"
                value="+91 89470-27625"
                href="https://wa.me/918947027625"
              />
              <TouchCard
                icon={<Mail className="h-5 w-5" />}
                iconWrapClass="bg-gradient-to-br from-violet-500 to-violet-700"
                title="Email Us"
                value="info@kriscent.in"
                href="mailto:info@kriscent.in"
              />
            </div>
          </section>

          {/* Offices */}
          <section className="space-y-5">
            <SectionTitle>Our Offices</SectionTitle>
            <div className="flex flex-col gap-3">
              <OfficeCard
                title="Kota Office"
                badge="Head Office"
                badgeClass="bg-primary text-primary-foreground"
                address="186, Agrawal Bhawan 1st Floor Shopping Center, nearby Chaupati, Kota, Rajasthan 324007, India"
              />
              <OfficeCard
                title="Jaipur Office"
                badge="Branch Office"
                badgeClass="bg-secondary text-secondary-foreground"
                address="70/38 Patel Marg, Mansarovar Jaipur, Rajasthan-302020, India"
              />
            </div>
          </section>

          {/* Explore more */}
          <section className="space-y-5">
            <SectionTitle>Explore More</SectionTitle>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {exploreItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-sm shadow-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg hover:shadow-black/5"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ring-1 ring-black/5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBg}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="text-center text-xs font-semibold text-foreground sm:text-sm">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Follow us */}
          <section className="space-y-5">
            <SectionTitle>Follow Us</SectionTitle>
            <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {[
                  { href: "https://in.linkedin.com/company/kriscenttechnohub", label: "LinkedIn", bg: "bg-[#0A66C2]", Icon: Linkedin },
                  { href: "https://www.instagram.com/kriscenttechnohub/", label: "Instagram", bg: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]", Icon: IconBrandInstagram },
                  { href: "https://www.facebook.com/KriscentTechnoHub", label: "Facebook", bg: "bg-[#1877F2]", Icon: IconBrandFacebook },
                  { href: "https://x.com/Kriscent_KTH", label: "X", bg: "bg-black", Icon: IconBrandX },
                  { href: "https://www.youtube.com/@kriscenttech", label: "YouTube", bg: "bg-[#FF0000]", Icon: IconBrandYoutube },
                  { href: "https://in.pinterest.com/Kriscent_KTH/", label: "Pinterest", bg: "bg-[#E60023]", Icon: IconBrandPinterest },
                  { href: "https://www.behance.net/search/projects?search=kriscent", label: "Behance", bg: "bg-[#1769FF]", Icon: BehanceIcon },
                  { href: "https://github.com/Kriscent-Techno-Hub", label: "GitHub", bg: "bg-[#333]", Icon: IconBrandGithub },
                ].map(({ href, label, bg, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-12 sm:w-12 ${bg}`}
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Website CTA */}
          <a
            href="https://kriscent.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 px-5 py-4 text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/30"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" aria-hidden />
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Globe className="h-6 w-6 text-white" aria-hidden />
            </div>
            <div className="relative min-w-0 flex-1 text-left">
              <p className="text-sm font-bold sm:text-base">Visit Our Website</p>
              <p className="text-xs text-white/90 sm:text-sm">kriscent.in</p>
            </div>
            <ChevronRight className="relative h-6 w-6 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
      </main>
    </div>
  );
}