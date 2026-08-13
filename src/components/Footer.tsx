import React from 'react';
import Link from 'next/link';
import { storeInfo } from '../data/storeContent';
import { Plus, Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-accent text-white">
                <Plus className="w-5 h-5 stroke-[3]" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {storeInfo.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Operating for over {storeInfo.yearsOfService}+ years, we are one of Kabirdham district&apos;s leading pharmacies and wholesale medicine suppliers.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-brand-dark/50 border border-brand-primary/30 text-brand-lightest text-xs font-semibold rounded-full">
                🏅 26+ Years of Medical Trust
              </span>
            </div>
          </div>

          {/* Business Hours Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Operating Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4.5 h-4.5 text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <span className="block font-semibold text-slate-200">Daily Timing</span>
                  <span className="text-xs text-slate-400">8:00 AM – 11:00 PM</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Calendar className="w-4.5 h-4.5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-semibold text-slate-200">Friday Schedule</span>
                  <span className="text-xs text-amber-400">Closed on alternate Fridays</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Explore Pages
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/" className="hover:text-white hover:underline transition-all">Home</Link>
              <Link href="/about" className="hover:text-white hover:underline transition-all">About Us</Link>
              <Link href="/services" className="hover:text-white hover:underline transition-all">Services</Link>
              <Link href="/shop" className="hover:text-white hover:underline transition-all">Shop Catalog</Link>
              <Link href="/faqs" className="hover:text-white hover:underline transition-all">FAQs</Link>
              <Link href="/contact" className="hover:text-white hover:underline transition-all">Contact Us</Link>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Location
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-accent mt-0.5 shrink-0" />
                <span className="text-slate-400">
                  {storeInfo.location.address}, {storeInfo.location.city}, Chhattisgarh - 491995
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-accent shrink-0" />
                <a href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-all font-semibold">
                  {storeInfo.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        {/* Local SEO Keywords Tag Cloud */}
        <div className="mb-8">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Serving Kawardha & Kabirdham District
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400 font-medium">
            <span className="px-2.5 py-1 bg-slate-800/60 rounded">Medicine home delivery Kawardha</span>
            <span className="px-2.5 py-1 bg-slate-800/60 rounded">Pharmacy Naveen Bazar</span>
            <span className="px-2.5 py-1 bg-slate-800/60 rounded">Medical store Kawardha district</span>
            <span className="px-2.5 py-1 bg-slate-800/60 rounded">Wholesale medicine supplier Kawardha</span>
            <span className="px-2.5 py-1 bg-slate-800/60 rounded">Doctor surgical equipment Chhattisgarh</span>
          </div>
        </div>

        {/* Regulatory/Compliance info */}
        <div className="p-4 bg-slate-950/60 border border-slate-800/50 rounded-xl mb-8">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong>Disclaimer:</strong> {storeInfo.name} operates under valid Drug Licenses issued by the Food and Drugs Administration Department of Chhattisgarh. In compliance with the Drugs and Cosmetics Act, prescription medicines (Schedule H/H1) will strictly only be delivered after validation of a legitimate prescription uploaded via WhatsApp or shown to our pharmacist.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {currentYear} {storeInfo.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/legal/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/legal/returns" className="hover:text-slate-300">Return Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
