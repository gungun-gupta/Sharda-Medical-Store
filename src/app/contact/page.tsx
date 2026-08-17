import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Store - Phone, WhatsApp & Address in Kawardha",
  description: "Contact Sharda Medical Store in Naveen Bazar, Kawardha. Call +91 99936 50999 or WhatsApp +91 88275 10999 for doorstep delivery, inquiries, or wholesale orders.",
  alternates: {
    canonical: "https://sharda-medical-store.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Sharda Medical Store - Phone, WhatsApp & Address in Kawardha",
    description: "Contact Sharda Medical Store in Naveen Bazar, Kawardha. Call +91 99936 50999 or WhatsApp +91 88275 10999 for doorstep delivery, inquiries, or wholesale orders.",
    url: "https://sharda-medical-store.vercel.app/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
