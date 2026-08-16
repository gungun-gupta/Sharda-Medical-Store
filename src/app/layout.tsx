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
    default: "Sharda Medical Store | Trusted Medical Store in Kawardha",
    template: "%s | Sharda Medical Store Kawardha",
  },
  description: "Sharda Medical Store in Kawardha offers 26+ years of trusted pharmacy care, doorstep medicine home delivery, major brands, and wholesale supply for 400+ doctors.",
  keywords: [
    "Sharda Medical Store in Kawardha",
    "medical store Kawardha",
    "medical shop Kawardha",
    "pharmacy Kawardha",
    "medicine home delivery Kawardha",
    "wholesale medicine supplier Kawardha",
    "chemist Naveen Bazar Kawardha",
    "surgical equipment Kawardha",
    "buy medicine Kawardha",
  ],
  icons: {
    icon: "/icon",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sharda Medical Store | Trusted Medical Store in Kawardha",
    description: "Sharda Medical Store in Kawardha offers 26+ years of trusted pharmacy care, doorstep medicine home delivery, major brands, and wholesale supply for 400+ doctors.",
    type: "website",
    locale: "en_IN",
    siteName: "Sharda Medical Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharda Medical Store | Trusted Medical Store in Kawardha",
    description: "Sharda Medical Store in Kawardha offers 26+ years of trusted pharmacy care, doorstep medicine home delivery, major brands, and wholesale supply for 400+ doctors.",
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
    "name": "Sharda Medical Store",
    "alternateName": [
      "Sharda Medical Store in Kawardha",
      "Sharda Medical Store Kawardha",
      "Sharda Medicals"
    ],
    "description": "Sharda Medical Store in Kawardha offers 26+ years of trusted pharmacy care, doorstep medicine home delivery, major brands, and wholesale pharmaceutical supply in Naveen Bazar.",
    "telephone": storeInfo.phone,
    "url": "https://shardamedicalstore.com",
    "logo": "https://shardamedicalstore.com/apple-touch-icon.png",
    "image": "https://shardamedicalstore.com/apple-touch-icon.png",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "areaServed": [
      {
        "@type": "City",
        "name": "Kawardha"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kabirdham"
      }
    ],
    "hasMap": storeInfo.location.googleMapsLink,
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
