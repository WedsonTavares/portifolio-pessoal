import React from "react";
import { links, siteConfig } from "@/config";

export default function Head() {
  const base = siteConfig.metadataBase?.toString() || "/";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: links.ownerName,
    url: base,
    sameAs: [links.sourceCode],
    jobTitle: "Desenvolvedor FullStack Júnior",
    description: siteConfig.description,
  };

  return (
    <>
      {/* Canonical and robots */}
      <link rel="canonical" href={base} />
      <meta name="robots" content="index, follow" />

      {/* JSON-LD structured data for better appearance in Google/LinkedIn etc. */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
