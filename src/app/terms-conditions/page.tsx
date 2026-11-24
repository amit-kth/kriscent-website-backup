"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from '@/lib/seo';
import { metadata } from '@/lib/variables';
import { SectionHeading } from '@/app/ReusableComponents/section-heading';
import { cn } from '../lib/utils';

export default function TermsConditions() {
  return (
    <>
      <SEO metadata={metadata.termsAndConditionsPage}>
        <main className="relative w-full overflow-hidden bg-background">
          {/* Ambient decorative glow , pure Tailwind, no arbitrary colors */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent opacity-60 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/5 to-transparent opacity-60 blur-3xl" />

          <section className="relative mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32 2xl:max-w-[1720px] 2xl:px-10">
            {/* Section heading , design-system component */}
            <SectionHeading
              primaryHeading="Terms & Conditions"
              secondaryHeading="Legal"
              description="Our commitment to transparency, data protection, and fair service delivery."
              isCentered={false}
              isDarkBg={false}
              glowEffect={false}
              markPrimaryHeadingAsH1Tag={true}
            />

            {/* Tab navigation , refined glass pill, almost no borders */}
            <Tabs defaultValue="Privacy" className="w-full">
              <TabsList className="mb-12 w-fit flex-wrap gap-2 rounded-full bg-card border border-border/40 backdrop-blur-md p-1.5 shadow-sm">
                <TabsTrigger
                  value="Privacy"
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-border/50 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                >
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger
                  value="Return"
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-border/50 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                >
                  Return &amp; Refund
                </TabsTrigger>
                <TabsTrigger
                  value="Other"
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-border/50 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                >
                  Other Policies
                </TabsTrigger>
              </TabsList>

              <TabsContent value="Privacy" className="mt-0">
                <PrivacyPolicy />
              </TabsContent>
              <TabsContent value="Return" className="mt-0">
                <RefundReturnPolicy />
              </TabsContent>
              <TabsContent value="Other" className="mt-0">
                <OtherPolicy />
              </TabsContent>
            </Tabs>
          </section>
        </main>
      </SEO>
    </>
  );
}

/* ═══════════════════════════════════════════════
   PRIVACY POLICY , EDITORIAL CARD LAYOUT
═══════════════════════════════════════════════ */
const PrivacyPolicy: React.FC = () => {
  return (
    <article className="flex flex-col gap-6">
      {/* Featured premium dark card , matching design system premium dark pattern */}
      <section className="relative overflow-hidden rounded-3xl bg-foreground p-8 sm:p-12 shadow-md">
        {/* Subtle glass overlay for premium feel */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

        <div className="relative z-10">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2 text-pretty">
            General Conditions
          </h2>
          <div className="h-px w-10 bg-gradient-to-r from-primary/60 to-transparent mb-6" aria-hidden="true" />
          <div className="space-y-4 text-[15px] leading-[1.7] text-white/70">
            <p>
              We, <strong className="text-white font-semibold">KRISCENT TECHNO HUB PRIVATE LIMITED</strong>, are an IT company delivering websites, digital marketing, desktop software, Android applications, and more. We do not share any client details with third parties. We protect user and visitor information. When any user visits our site, we neither collect any personal information nor share it. We do not ask for any such information until it becomes mandatory for the user to provide the required information.
            </p>
            <p>
              We do not require personal information for browsing. To provide requested services, we may need certain personal details that we determine are reasonably necessary. If you indicate interest in a service, we will identify the required information before collecting it.
            </p>
          </div>
        </div>
      </section>

      {/* Light content cards , almost no borders, minimal shadows */}
      <section className="rounded-3xl bg-card border border-border/30 p-7 sm:p-9 shadow-sm">
        <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 text-pretty">Eligibility</h3>
        <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent mb-4" aria-hidden="true" />
        <p className="text-[15px] leading-[1.7] text-muted-foreground">Clients may only use the Services if over 18 years old.</p>
      </section>

      <section className="rounded-3xl bg-card border border-border/30 p-7 sm:p-9 shadow-sm">
        <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 text-pretty">Links to Other Sites</h3>
        <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent mb-4" aria-hidden="true" />
        <p className="text-[15px] leading-[1.7] text-muted-foreground">
          The Kriscent Techno Hub website may contain links to other sites. These links are provided for convenience; access is at your own risk. We are not responsible for the content, security, or privacy practices of these sites. Please review their privacy statements before sharing information.
        </p>
      </section>

      <section className="rounded-3xl bg-card border border-border/30 p-7 sm:p-9 shadow-sm">
        <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 text-pretty">Rights for Modifications</h3>
        <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent mb-4" aria-hidden="true" />
        <p className="text-[15px] leading-[1.7] text-muted-foreground">
          Kriscent reserves the right to edit the privacy statement without prior notice. We remain committed to protecting personal information.
        </p>
      </section>

      <section className="rounded-3xl bg-card border border-border/30 p-7 sm:p-9 shadow-sm">
        <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 text-pretty">Law Enforcement Request</h3>
        <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent mb-4" aria-hidden="true" />
        <p className="text-[15px] leading-[1.7] text-muted-foreground">If we receive a legally valid request, we support jurisdiction and share required data.</p>
      </section>

      <section className="rounded-3xl bg-card border border-border/30 p-7 sm:p-9 shadow-sm">
        <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 text-pretty">Copyright / Trademark</h3>
        <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent mb-4" aria-hidden="true" />
        <p className="text-[15px] leading-[1.7] text-muted-foreground">
          The KRISCENT logo and tagline may not be used. All content, graphics, format, design, and logos are trademarks of their respective owners. Users are not granted any rights to use contained trademarks.
        </p>
      </section>
    </article>
  );
};

/* ═══════════════════════════════════════════════
   REFUND & RETURN POLICY , EDITORIAL CARD
═══════════════════════════════════════════════ */
const RefundReturnPolicy: React.FC = () => {
  return (
    <article className="flex flex-col gap-6">
      <header>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl text-pretty">Refund &amp; Return Policy</h2>
        <div className="mt-3 h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" aria-hidden="true" />
      </header>

      <div className="rounded-3xl bg-card border border-border/30 p-7 sm:p-10 shadow-sm">
        <p className="text-[15px] leading-[1.7] text-muted-foreground mb-6">
          We, <strong className="text-foreground font-semibold">KRISCENT TECHNO HUB PVT. LTD.</strong>, refund the client amount within 30 days from the day of full payment. Requests must be sent to{" "}
          <a href="mailto:refund@kriscent.in" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none">refund@kriscent.in</a>{" "}
          or{" "}
          <a href="mailto:kriscentechnohub@gmail.com" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none">kriscentechnohub@gmail.com</a>.
          After 30 days, no refunds are processed.
        </p>
        <ul className="list-disc list-inside space-y-3 text-[15px] leading-[1.7] text-muted-foreground">
          <li>
            <strong className="text-foreground font-semibold">FOR SMS SERVICE:</strong>{" "}
            Refund after deduction of used SMS.
          </li>
          <li>
            <strong className="text-foreground font-semibold">NO REFUND:</strong>{" "}
            For delivered logos, videos, presentations, social accounts, creatives, or GIFs.
          </li>
          <li>
            <strong className="text-foreground font-semibold">ELIGIBILITY FOR REFUND:</strong>{" "}
            Only clients with full advance payment.
          </li>
        </ul>
      </div>
    </article>
  );
};

/* ═══════════════════════════════════════════════
   OTHER POLICIES , EDITORIAL CARD LAYOUT
═══════════════════════════════════════════════ */
const OtherPolicy: React.FC = () => {
  const sections = [
    { title: "Content Policy", body: "We deliver each project or service on time according to our workflow and delivery timelines mentioned in quotations. After delivery, a fixed number of revisions is provided for certain services. The client must provide all content required for any project." },
    { title: "Delivery Policy", body: "All content must be delivered by the client. If content is controversial or has authorization issues, the client bears sole responsibility. We act solely as a service provider using client-supplied content." },
    { title: "Uses Policy", body: "This acceptable use policy sets out the terms under which you may access our website www.Kriscent.in. This policy applies to all users and visitors." },
    { title: "Link From the Website", body: "Third-party links are provided for convenience. No responsibility for content, security, or privacy practices. Access at your own risk." },
    { title: "Payment", body: "Applicable taxes and third-party fees must be paid with final amounts. Methods: online payment, cheque, NEFT, IMPS." },
    { title: "Termination", body: "Termination by Us: Account may be terminated for misuse. Termination by You: You may stop using any service at any time." },
    { title: "Piracy", body: "Piracy of products or software may result in legal action under the IT Act." },
    { title: "Changes", body: "Terms may change at any time. Changes are effective immediately upon posting. Continued use constitutes agreement." },
    { title: "Disclaimer", body: "No guarantee for specific rank, clientele growth, web traffic, views, subscriptions, likes, or shares. Not responsible for data loss, hacking, or attacks." },
    { title: "Order Policy", body: "Orders become active after 100% payment. Without full payment, orders remain inactive. Source code will not be provided." },
    { title: "License", body: "License granted to users who comply with all policies and pay the appropriate amount for the service or software." },
  ];

  return (
    <article className="flex flex-col gap-0">
      <header className="mb-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl text-pretty">Other Policies</h2>
        <div className="mt-3 h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" aria-hidden="true" />
      </header>
      <div className="rounded-3xl bg-card border border-border/20 shadow-sm overflow-hidden">
        {sections.map((section, idx) => (
          <div key={section.title} className={cn("px-7 py-6 sm:px-9 sm:py-6 group", idx !== 0 ? "border-t border-border/20" : "")}
            aria-label={section.title}
          >
            <h3 className="text-base font-bold tracking-tight text-foreground mb-1.5 text-pretty">{section.title}</h3>
            <p className="text-[15px] leading-[1.7] text-muted-foreground">{section.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
};
