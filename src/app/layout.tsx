import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { OrderProvider } from "@/context/OrderContext";
import { storeInfo } from "@/data/storeContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Sharda Medical Store | Medicine Home Delivery Kawardha",
    template: "%s | Sharda Medical Store Kawardha",
  },
  description: "Sharda Medical Store in Naveen Bazar, Kawardha is a trusted pharmacy offering doorstep medicine home delivery. Operating for 26+ years, stocking major brands, and trusted by 400+ doctors for wholesale supply.",
  keywords: [
    "medicine home delivery Kawardha",
    "pharmacy Naveen Bazar",
    "medical store Kawardha district",
    "wholesale medicine supplier Kawardha",
    "Sharda Medical Store Kawardha",
    "chemist Naveen Bazar Kawardha",
    "buy medicine online Kawardha",
    "surgical equipment Kawardha",
  ],
  openGraph: {
    title: "Sharda Medical Store | Medicine Home Delivery Kawardha",
    description: "Kawardha's trusted doorstep pharmacy & wholesale medicine distributor. Operating for 26+ years, serving 400+ doctors.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Pharmacy/LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": storeInfo.name,
    "description": "Kawardha's leading pharmacy in Naveen Bazar. Medicine home delivery and wholesale distributor trusted by 400+ doctors.",
    "telephone": storeInfo.phone,
    "url": "https://shardamedicalstore.com", // Fallback URL
    "logo": "https://shardamedicalstore.com/logo.png",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": storeInfo.location.address,
      "addressLocality": storeInfo.location.city,
      "addressRegion": storeInfo.location.state,
      "postalCode": "491995",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.014282",
      "longitude": "81.242784"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "23:00",
        "description": storeInfo.hoursFootnote
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-brand-lightest selection:text-brand-dark">
        <OrderProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
        </OrderProvider>
      </body>
    </html>
  );
}
