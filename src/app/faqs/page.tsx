import type { Metadata } from 'next';
import { faqs } from '@/data/storeContent';
import FaqsClient from './FaqsClient';

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers regarding medicine home delivery in Kawardha, wholesale medicine supply for 400+ doctors, special medicine sourcing, and pharmacy timings in Naveen Bazar.",
  alternates: {
    canonical: "https://sharda-medical-store.vercel.app/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | Sharda Medical Store Kawardha",
    description: "Find answers regarding medicine home delivery in Kawardha, wholesale medicine supply for 400+ doctors, special medicine sourcing, and pharmacy timings in Naveen Bazar.",
    url: "https://sharda-medical-store.vercel.app/faqs",
    type: "website",
  },
};

export default function FaqsPage() {
  // Structured FAQ Schema markup for rich Google snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqsClient />
    </>
  );
}
