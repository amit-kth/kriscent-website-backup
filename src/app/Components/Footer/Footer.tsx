"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { DefaultButton } from "@/app/ReusableComponents/UI";
import { ArrowRight, Linkedin, StarHalf, Star } from "lucide-react";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGooglePlay,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Expandable from "../AnimataUI/expandable";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { awards } from "@/app/awards/components/awards-data";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { cn } from "@/lib/utils";

interface FooterLink { title: string; href: string; }
interface RatingItem extends FooterLink { platformLogo: string; starColor: string; starCount: number; }
interface FooterColumn { title: string; items: FooterLink[] | RatingItem[]; }

const footerQuickLinks: FooterColumn[] = [
  {
    title: "Quick Links",
    items: [
      { title: "Blog", href: "https://kriscent.in/blog" },
      { title: "Hire Talent", href: "/hire-talent" },
      { title: "On Demand Solutions", href: "https://kriscent.com/#product" },
      { title: "Technologies", href: "/technologies" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "Career", href: "/career" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Services", href: "/services" },
      { title: "Kriscent Programs", href: "/kirp" },
    ],
  },
  {
    title: "Contact",
    items: [
      { title: "Whatsapp Chat", href: "https://wa.me/918947027625" },
      { title: "Skype Call", href: "skype:kriscent15?call" },
      { title: "Call us", href: "tel:+91-8947027625" },
      { title: "Mail us", href: "mailto:info@kriscent.in" },
    ],
  },
  {
    title: "Rating",
    items: [
      {
        title: "Google",
        href: "https://g.co/kgs/rFi9C6c",
        platformLogo: `${ASSETS_BASE_URL}/tempAssets/Google_Icons-09-512%202.png?updatedAt=1724757228086`,
        starColor: "#F6AD01",
        starCount: 4.2,
      },
      {
        title: "Ambition Box",
        href: "https://www.ambitionbox.com/overview/kriscent-techno-hub-overview",
        platformLogo: `${ASSETS_BASE_URL}/tempAssets/ab-brand%202.png?updatedAt=1724757228073`,
        starColor: "#5670FB",
        starCount: 4.6,
      },
      {
        title: "Clutch",
        href: "https://clutch.co/profile/kriscent-techno-hub#highlights",
        platformLogo: `${ASSETS_BASE_URL}/tempAssets/clutch.png?updatedAt=1724492726508`,
        starColor: "#fff",
        starCount: 5,
      },
    ] as RatingItem[],
  },
];

const socials = [
  { href: "https://in.linkedin.com/company/kriscenttechnohub", icon: Linkedin, hover: "hover:text-cyan-600" },
  { href: "https://www.instagram.com/kriscenttechnohub/", icon: IconBrandInstagram, hover: "hover:text-pink-600" },
  { href: "https://www.facebook.com/KriscentTechnoHub", icon: IconBrandFacebook, hover: "hover:text-blue-400" },
  { href: "https://x.com/Kriscent_KTH", icon: IconBrandX, hover: "hover:text-blue-600" },
  { href: "https://www.youtube.com/@kriscenttech", icon: IconBrandYoutube, hover: "hover:text-primary" },
  { href: "https://in.pinterest.com/Kriscent_KTH/", icon: IconBrandPinterest, hover: "hover:text-primary" },
  { href: "https://play.google.com/store/apps/dev?id=8463645970358251896", icon: IconBrandGooglePlay, hover: "hover:text-yellow-400" },
  { href: "https://github.com/Kriscent-Techno-Hub", icon: IconBrandGithub, hover: "hover:text-gray-100" },
];

const legalLinks = [
  { title: "Terms & Conditions", href: "/terms-conditions" },
  { title: "Agreement", href: "/agreement" },
  { title: "FAQ", href: "/faq" },
  // { title: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="relative z-50 flex w-full justify-center rounded-t-[34px] bg-foreground">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container">
        {/* ── Get in touch ── */}
        {pathname !== "/contact/" && (
          <div className="pt-8 md:pt-12">
            <div className="flex items-center justify-between gap-4 py-5 md:py-7">
              <h3 className="w-full text-2xl font-light leading-tight text-white md:w-1/2 md:text-3xl lg:text-[44px]">
                Get In <span className="font-normal text-primary">Touch</span>
              </h3>
              <DefaultButton title="Contact us" icon={ArrowRight} onClick={() => router.push("/contact")} />
            </div>
            <Expandable className="w-full min-w-72 storybook-fix" />
          </div>
        )}

        {/* ── Main row: brand + 4 columns ── */}
        <div className="mt-10 flex flex-wrap justify-between gap-x-8 gap-y-8 border-t border-white/10 py-8 text-white md:mt-12">
          {/* brand */}
          <div className="w-full md:w-[28%]">
            <img src={`${ASSETS_BASE_URL}/tempAssets/logokriscent.png?updatedAt=1724488738769`} alt="Kriscent Logo" className="mb-4 w-40" />
            <p className="mb-4 max-w-[300px] text-sm leading-relaxed text-gray-300">
              Kriscent Techno Hub Pvt Ltd, founded in 2014 by CEO Kapil Gautam, is
              a leading provider of cutting-edge IT, design, and marketing
              solutions.
            </p>
            <div className="flex gap-3">
              <Link href="https://www.dmca.com/Protection/Status.aspx?ID=7804acab-6c27-454a-b32c-9e5861990358&refurl=https://kriscent.in/index.php" target="_blank">
                <img src={`${ASSETS_BASE_URL}/tempAssets/dmca.png`} alt="DMCA kriscent" className="h-16 w-16 object-contain" loading="lazy" />
              </Link>
              <Link href="https://www.crunchbase.com/organization/kriscent-techno-hub-pvt-ltd" target="_blank">
                <img src={`${ASSETS_BASE_URL}/tempAssets/crunchbase.png`} alt="kriscent crunchbase" className="h-16 w-16 object-contain" loading="lazy" />
              </Link>
            </div>
          </div>

          {/* link columns , compact */}
          {footerQuickLinks.map((column, index) => (
            <div key={index} className="min-w-[120px]">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-white/80">{column.title}</h3>
              {column.title === "Rating" ? (
                <div className="space-y-2">
                  {(column.items as RatingItem[]).map((item, i) => (
                    <Link key={i} href={item.href} target="_blank" className="flex items-center gap-2 transition hover:opacity-80">
                      <img src={item.platformLogo} alt={item.title || "Platform"} className="size-4 object-contain" />
                      <RatingStars rating={item.starCount} size={11} />
                    </Link>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {column.items.map((item, i) => (
                    <li key={i}>
                      <Link href={item.href} className="text-sm text-gray-300 transition-colors hover:text-primary">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center gap-3 border-t border-white/10 py-5 text-sm text-gray-400 md:flex-row md:justify-between">
          {/* certs + legal */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {awards.slice(0, 3).map((award, index) => (
              <FooterCertification key={index} icon={award.imgUrlDark} title={award.title} />
            ))}
            <span className="hidden h-4 w-px bg-white/10 md:block" />
            {legalLinks.map((link, i) => (
              <React.Fragment key={link.title}>
                <Link href={link.href} className="transition-colors hover:text-white">{link.title}</Link>
                {i < legalLinks.length - 1 && <span className="text-gray-600">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* copyright + socials */}
          <div className="flex items-center gap-4">
            <p className="text-xs">
              © 2014 - {isMounted && new Date().getFullYear()} Kriscent | All Rights Reserved.
            </p>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <div className="flex items-center gap-2.5">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link key={i} href={s.href} target="_blank" className={cn("text-gray-400 transition-all hover:-translate-y-0.5", s.hover)}>
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Certification badge ── */
function FooterCertification({ icon, title }: { icon: string; title: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <img src={icon} alt={title} className="h-[40px] w-auto max-w-full opacity-80 transition hover:opacity-100" loading="lazy" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/* ── Rating stars ── */
interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: number;
  color?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 5,
  size = 20,
  color = "text-yellow-400",
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center" aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
      {[...Array(maxRating)].map((_, index) => {
        if (index < fullStars) {
          return <Star key={index} size={size} className={`fill-current ${color}`} />;
        } else if (index === fullStars && hasHalfStar) {
          return <StarHalf key={index} size={size} className={`fill-current ${color}`} />;
        } else {
          return <Star key={index} size={size} className={`stroke-current ${color}`} />;
        }
      })}
    </div>
  );
};
