import type { Metadata } from 'next';
import ShopClient from './ShopClient';

export const metadata: Metadata = {
  title: "Medical Catalog & Pharmacy Products in Kawardha",
  description: "Browse prescription medicines, daily health supplements, monitoring devices, and clinic supplies at Sharda Medical Store Kawardha. 10% discount on regular orders.",
  alternates: {
    canonical: "https://sharda-medical-store.vercel.app/shop",
  },
  openGraph: {
    title: "Medical Catalog & Pharmacy Products in Kawardha | Sharda Medical Store",
    description: "Browse prescription medicines, daily health supplements, monitoring devices, and clinic supplies at Sharda Medical Store Kawardha. 10% discount on regular orders.",
    url: "https://sharda-medical-store.vercel.app/shop",
    type: "website",
  },
};

export default function ShopPage() {
  return <ShopClient />;
}
