import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Pharmacy & Medicine Home Delivery Services in Kawardha",
  description: "Explore pharmacy services in Kawardha: doorstep medicine delivery, rare medicine sourcing, wholesale supply for 400+ doctors, and medical equipment in Naveen Bazar.",
  alternates: {
    canonical: "https://sharda-medical-store.vercel.app/services",
  },
  openGraph: {
    title: "Pharmacy & Medicine Home Delivery Services in Kawardha | Sharda Medical Store",
    description: "Explore pharmacy services in Kawardha: doorstep medicine delivery, rare medicine sourcing, wholesale supply for 400+ doctors, and medical equipment in Naveen Bazar.",
    url: "https://sharda-medical-store.vercel.app/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
