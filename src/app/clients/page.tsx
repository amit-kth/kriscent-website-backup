"use client";

import React from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/app/ReusableComponents/section-heading";
import { SEO } from "@/lib/seo";
import { metadata } from "@/lib/variables";
import ClientsHeroSection from "./components/clients-hero-section";
import { allClients, premiumClients } from "./components/clientsData";
import { cn } from "@/lib/utils";

/* ── Reusable client card , link or plain, same look ── */
function ClientCard({
  client,
  className,
}: {
  client: { name: string; logo: string; url?: string; tagline?: string };
  className?: string;
}) {
  const Inner = (
    <>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-3/4 w-3/4 items-center justify-center">
          <img
            src={client.logo}
            alt={client.name || "Client logo"}
            loading="lazy"
            className="max-h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
        <p className="mt-2 text-center text-sm font-bold text-foreground md:text-base">
          {client.name}
        </p>
        {client.tagline && (
          <p className="mb-2 text-center text-xs font-normal text-muted-foreground">
            {client.tagline}
          </p>
        )}
      </div>
    </>
  );

  const cardClass = cn(
    "group flex h-44 flex-col items-center justify-center rounded-3xl bg-white p-3 sm:h-48",
    className
  );

  if (client.url) {
    return (
      <Link href={client.url} target="_blank" className={cardClass}>
        {Inner}
      </Link>
    );
  }
  return <div className={cardClass}>{Inner}</div>;
}

export default function ClientsPage() {
  const premiumLevel1 = premiumClients.filter((c) => c.type !== "level2");
  const premiumLevel2 = premiumClients.filter((c) => c.type !== "level1");

  return (
    <>
      {/* seo tag */}
      <SEO metadata={metadata.clientsPage}>
        <main className="overflow-x-hidden">
          <div className="flex w-full h-fit flex-col items-center gap-20 bg-muted/50">
            <ClientsHeroSection />

            {/* Section 1: Premium Clients */}
            <section className="container w-full" aria-labelledby="clients-premium">
              <SectionHeading
                primaryHeading="Enterprise Clients"
                secondaryHeading="Trusted by Leading Brands"
                icon={Briefcase}
                isCentered
                highlightedString="Clients"
              />

              {/* level1 clients */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                {premiumLevel1.map((client) => (
                  <ClientCard key={client.name} client={client} />
                ))}
              </div>

              {/* divider */}
              <div className="my-16 h-px w-full bg-border" aria-hidden="true" />

              {/* level2 clients */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                {premiumLevel2.map((client) => (
                  <ClientCard key={client.name} client={client} />
                ))}
              </div>
            </section>

            {/* Section 2: All Clients */}
            <section className="container w-full" aria-labelledby="clients-all">
              <div className="mb-12 h-px w-full bg-border" aria-hidden="true" />

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-6">
                {allClients.map((client) => (
                  <ClientCard key={client.name} client={client} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </SEO>
    </>
  );
}
