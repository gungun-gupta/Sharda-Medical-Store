import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { OrderProvider } from "@/context/OrderContext";
import { storeInfo } from "@/data/storeContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://sharda-medical-store.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  authors: [{ name: "Sharda Medical Store", url: siteUrl }],
  creator: "Sharda Medical Store",
  publisher: "Sharda Medical Store",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  icons: {
    icon: "/icon",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sharda Medical Store | Trusted Medical Store in Kawardha",
    description: "Sharda Medical Store in Kawardha offers 26+ years of trusted pharmacy care, doorstep medicine home delivery, major brands, and wholesale supply for 400+ doctors.",
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName: "Sharda Medical Store",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Sharda Medical Store Kawardha Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sharda Medical Store | Trusted Medical Store in Kawardha",
    description: "Sharda Medical Store in Kawardha offers 26+ years of trusted pharmacy care, doorstep medicine home delivery, major brands, and wholesale supply for 400+ doctors.",
    images: ["/apple-touch-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "WiR_hEvE8u6Caf1i5zZNaug48huxb3sOk3YzzR3qVVA",
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID || "G-5P8XW66V8N";

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
    "url": siteUrl,
    "logo": `${siteUrl}/apple-touch-icon.png`,
    "image": `${siteUrl}/apple-touch-icon.png`,
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
        <meta name="google-site-verification" content="WiR_hEvE8u6Caf1i5zZNaug48huxb3sOk3YzzR3qVVA" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-brand-lightest selection:text-brand-dark">
        {/* Google Analytics - Non-blocking script loaded after interactive */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

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

