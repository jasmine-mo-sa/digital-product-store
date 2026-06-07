export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://digital-product-store-pi.vercel.app/#org",
        name: "Studio Lumina",
        url: "https://digital-product-store-pi.vercel.app",
        logo: "https://digital-product-store-pi.vercel.app/logo.jpeg",
        email: "lumina.jasmine98@gmail.com",
        sameAs: ["https://www.instagram.com/lumina.studio.ca/"],
      },
      {
        "@type": "WebSite",
        "@id": "https://digital-product-store-pi.vercel.app/#website",
        url: "https://digital-product-store-pi.vercel.app",
        name: "Studio Lumina",
        publisher: { "@id": "https://digital-product-store-pi.vercel.app/#org" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://digital-product-store-pi.vercel.app/#products",
        },
      },
      {
        "@type": "Store",
        "@id": "https://digital-product-store-pi.vercel.app/#store",
        name: "Studio Lumina",
        description:
          "Premium digital templates — Canva kits, resume templates, and digital planners for creatives and freelancers.",
        url: "https://digital-product-store-pi.vercel.app",
        image: "https://digital-product-store-pi.vercel.app/api/og",
        priceRange: "$$",
        currenciesAccepted: "USD,CAD,EUR",
        paymentAccepted: "Credit Card",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Templates",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Executive Resume Suite",
                description:
                  "ATS-friendly resume set with cover letter and LinkedIn banner.",
                category: "Resume Templates",
              },
              price: "19",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Lumina Brand Kit",
                description:
                  "Complete Canva branding pack with logos, social posts, stories, and pitch deck.",
                category: "Canva Kits",
              },
              price: "27",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Aesthetic Daily Planner",
                description:
                  "Minimalist digital planner with daily, weekly, and monthly views for GoodNotes.",
                category: "Digital Planners",
              },
              price: "14",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
