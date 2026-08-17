import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Us - 26+ Years of Trusted Healthcare in Kawardha",
  description: "Learn about Sharda Medical Store's 26+ year legacy in Naveen Bazar, Kawardha. Founded under the guidance of Dr. Yadvendra Gupta, serving 400+ doctors and families across Kabirdham.",
  alternates: {
    canonical: "https://sharda-medical-store.vercel.app/about",
  },
  openGraph: {
    title: "About Us - 26+ Years of Trusted Healthcare in Kawardha | Sharda Medical Store",
    description: "Learn about Sharda Medical Store's 26+ year legacy in Naveen Bazar, Kawardha. Founded under the guidance of Dr. Yadvendra Gupta, serving 400+ doctors and families across Kabirdham.",
    url: "https://sharda-medical-store.vercel.app/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
