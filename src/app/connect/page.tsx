"use client";

import React from "react";
import { SEO } from "@/lib/seo";
import { metadata as siteMetadata } from "@/lib/variables";
import CompanyProfileContent from "./company-profile-content";

export default function CompanyProfilePage() {
  return (
    <SEO metadata={siteMetadata.companyProfilePage}>
      <CompanyProfileContent />
    </SEO>
  );
}
