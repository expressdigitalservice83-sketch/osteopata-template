import { Helmet } from "react-helmet-async";
import { STUDIO_CONFIG } from "@/lib/config";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function SEOHead({ 
  title = "Trattamenti Osteopatici Professionali", 
  description = "Studio osteopatico professionale specializzato in trattamenti personalizzati per il benessere e la salute.",
  path = "/",
  image = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630"
}: SEOHeadProps) {
  const fullTitle = `${title} - ${STUDIO_CONFIG.name}`;
  const fullUrl = `${STUDIO_CONFIG.website}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": STUDIO_CONFIG.name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": STUDIO_CONFIG.address,
      "addressLocality": STUDIO_CONFIG.city,
      "addressCountry": "IT"
    },
    "telephone": STUDIO_CONFIG.phone,
    "email": STUDIO_CONFIG.email,
    "url": STUDIO_CONFIG.website,
    "openingHours": [
      "Mo-Fr 09:00-19:00",
      "Sa 09:00-13:00"
    ],
    "priceRange": "€€",
    "serviceType": "Osteopatia"
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={STUDIO_CONFIG.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
