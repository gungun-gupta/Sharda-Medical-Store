'use client';

import React from 'react';
import { storeInfo } from '@/data/storeContent';
import { useOrder } from '@/context/OrderContext';
import SocialShare from '@/components/SocialShare';
import { 
  CheckCircle2, ShieldCheck, Users, Building2, 
  MapPin, Clock, MessageSquare, Phone 
} from 'lucide-react';

export default function AboutClient() {
  const { openOrderModal } = useOrder();

  const milestones = [
    { year: "2000", title: "Inception in Naveen Bazar", desc: "Opened retail medical store in Naveen Bazar, Kawardha under the guidance of Dr. Yadvendra Gupta." },
    { year: "2012", title: "Wholesale Expansion", desc: "Began bulk pharmaceutical supply services to local rural clinics and doctors across Kabirdham district." },
    { year: "2018", title: "Digital Billing Integration", desc: "Implemented full computerized billing with transparent itemized discounts and inventory tracking." },
    { year: "2020", title: "Doorstep Medicine Delivery", desc: "Pioneered medicine home delivery across Kawardha for chronic care patients and families." }
  ];

  const operationalHighlights = [
    {
      title: "Temperature-Controlled Cold Storage",
      desc: "Life-saving drugs like insulin, vaccines, and eye drops are kept in strict cold-chain systems (2°C to 8°C) meeting pharmaceutical compliance standards in Kawardha.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" aria-hidden="true" />
    },
    {
      title: "Qualified Registered Pharmacists",
      desc: "All medicine dispensing is supervised by experienced registered pharmacists who verify dosages, drug interactions, and doctor prescriptions.",
      icon: <Users className="w-6 h-6 text-brand-primary" aria-hidden="true" />
    },
    {
      title: "Wholesale Distribution Network",
      desc: "Serving as a master stockist, supplying over 400+ registered medical practitioners and clinics across Kabirdham district with genuine healthcare products.",
      icon: <Building2 className="w-6 h-6 text-brand-primary" aria-hidden="true" />
    }
  ];

  return (
    <div className="py-16 space-y-20">
      
      {/* 1. HEADER HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest px-3 py-1 bg-brand-lightest rounded-full">
          Our 26+ Year Legacy
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
          About Sharda Medical Store — <span className="text-gradient">Caring for Kawardha for 26+ Years</span>
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto text-base leading-relaxed">
          From our founding counter in Naveen Bazar to becoming Kawardha&apos;s leading pharmacy and wholesale medicine supplier, <strong>Sharda Medical Store in Kawardha</strong> has been a cornerstone of healthcare in Kabirdham, Chhattisgarh since 2000.
        </p>
      </section>

      {/* 2. THE STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Story &amp; Journey in Kawardha</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Established in {storeInfo.establishedYear} in the commercial heart of Naveen Bazar, Kawardha, <strong>Sharda Medical Store</strong> was founded with a singular purpose: to provide genuine, affordable medicines and compassionate pharmacy counseling to every family in the region.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Over the last two and a half decades, we have expanded our services to meet the modern healthcare needs of our town. As the first <strong>medical store in Kawardha</strong> to launch organized medicine home delivery, we ensure elderly residents and chronic care patients receive their vital prescriptions on time.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm font-semibold text-brand-primary">
              Today, Sharda Medical Store is privileged to have the trust of over 400+ doctors across Kabirdham district for wholesale supply and thousands of local families who count on our Naveen Bazar pharmacy daily.
            </p>
          </div>

          {/* Styled Photo / Visual Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Store Front Photo Box */}
            <div 
              role="img" 
              aria-label="Sharda Medical Store Kawardha — Naveen Bazar storefront and retail counter"
              className="h-64 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-dark p-6 text-white flex flex-col justify-between shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-4 -translate-y-4" />
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
                <MapPin className="w-5 h-5 text-brand-lightest" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-lightest block">Storefront</span>
                <span className="text-lg font-bold">Naveen Bazar Counter</span>
                <p className="text-[10px] text-brand-lightest/80 mt-1">Our main pharmacy outlet in Kawardha, open daily 8:00 AM – 11:00 PM.</p>
              </div>
            </div>

            {/* Storage Facility Photo Box */}
            <div 
              role="img" 
              aria-label="Sharda Medical Store Kawardha — Cold chain medicine storage facility"
              className="h-64 rounded-2xl bg-gradient-to-br from-sky-600 to-slate-800 p-6 text-white flex flex-col justify-between shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-4 -translate-y-4" />
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
                <ShieldCheck className="w-5 h-5 text-brand-lightest" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-lightest block">Cold-Chain Depot</span>
                <span className="text-lg font-bold">Temperature Control</span>
                <p className="text-[10px] text-brand-lightest/80 mt-1">Maintaining strict 2°C to 8°C cold chains for insulin, vaccines, and biologics.</p>
              </div>
            </div>

            {/* Pharmacist Team Photo Box */}
            <div 
              role="img" 
              aria-label="Sharda Medical Store Kawardha — Qualified registered pharmacist dispensing team"
              className="sm:col-span-2 h-48 rounded-2xl bg-gradient-to-br from-teal-600 to-brand-primary p-6 text-white flex flex-col justify-between shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-8 -translate-y-8" />
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
                <Users className="w-5 h-5 text-brand-lightest" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-lightest block">Pharmacist Team</span>
                <span className="text-lg font-bold">Registered Healthcare Advisors</span>
                <p className="text-xs text-brand-lightest/90 mt-1">Providing personalized drug counseling, dosage reviews, and prescription home-delivery dispatch in Kawardha.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OWNERSHIP & LEADERSHIP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest px-3 py-1 bg-brand-lightest rounded-full">
            Our Pillars
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
            Leadership &amp; Pharmacy Authority
          </h2>
          <p className="text-slate-600 text-sm">
            Meet the founders, managing authorities, and team who have guided <strong>Sharda Medical Store in Kawardha</strong> for over 26 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Dr. Yadvendra Gupta */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-primary bg-brand-lightest/60 px-2 py-0.5 rounded-md">
                1. Guidance &amp; Care
              </span>
              <h3 className="font-extrabold text-slate-800 text-lg">Dr. Yadvendra Gupta</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Serving since 2000. Under his medical guidance and clinical supervision, Sharda Medical Store has maintained high standards of pharmaceutical care in Kawardha.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-semibold">
              Serving since 2000
            </div>
          </div>

          {/* Late Mr. Anupam Gupta */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-all border-l-4 border-l-brand-accent-secondary">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                2. In Loving Memory
              </span>
              <h3 className="font-extrabold text-slate-800 text-lg">Late Mr. Anupam Gupta</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Dedicated 22 years of his life with absolute integrity and kindness to the pharmacy counter in Kawardha. His legacy of selfless patient care continues to inspire us.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-semibold">
              22 Years of Dedicated Service
            </div>
          </div>

          {/* Mr. Ashutosh Gupta */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-all border-l-4 border-l-brand-primary">
            <div className="space-y-3">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md">
                3. Owner &amp; Authority
              </span>
              <h3 className="font-extrabold text-slate-800 text-lg">Mr. Ashutosh Gupta</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Serving since 2000. With 26+ years of pharmaceutical experience, he manages overall store authority, customer consultations, and daily logistics in Kawardha.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-semibold">
              26+ Years of Field Experience
            </div>
          </div>

          {/* Mr. Awadesh Gupta */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                4. Operations Pillar
              </span>
              <h3 className="font-extrabold text-slate-800 text-lg">Mr. Awadesh Gupta</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Key supporting pillar of Sharda Medical Store. Dedicated to daily inventory management, supplier coordination, and fast customer fulfillment across Kawardha.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-semibold">
              Core Operations Support
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUE HIGHLIGHTS */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Our Standards of Pharmaceutical Safety</h2>
            <p className="text-slate-600 text-sm">
              Every medication dispensed at <strong>Sharda Medical Store</strong> in Naveen Bazar, Kawardha meets strict regulatory and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operationalHighlights.map((highlight, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xs space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-lightest text-brand-primary">
                  {highlight.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{highlight.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HISTORICAL MILESTONES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Milestones of Sharda Medical Store in Kawardha</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-slate-200 -z-10" />

          {milestones.map((milestone, idx) => (
            <div key={idx} className="bg-white p-6 border border-slate-100 rounded-2xl relative space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white text-base font-black flex items-center justify-center border-4 border-white shadow">
                {milestone.year}
              </div>
              <h3 className="font-bold text-slate-800 text-base">{milestone.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHOLESALE & ORDER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-dark to-brand-primary p-8 md:p-12 rounded-3xl text-white shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Wholesale Medicine Supply for Doctors in Kawardha</h2>
            <p className="text-brand-lightest text-sm max-w-2xl">
              Are you a doctor, clinic, or hospital administrator in Kabirdham district? Partner with <strong>Sharda Medical Store</strong> for wholesale pharmaceutical rates and reliable delivery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => openOrderModal("Wholesale Account Setup")}
              aria-label="Contact wholesale representative at Sharda Medical Store Kawardha"
              className="px-6 py-3.5 bg-white text-brand-dark hover:bg-slate-50 font-bold rounded-xl shadow transition-all cursor-pointer text-sm"
            >
              Contact Wholesale Representative
            </button>
            <a
              href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
              aria-label={`Call Sharda Medical Store Kawardha at ${storeInfo.phone}`}
              className="px-6 py-3.5 bg-brand-primary border border-brand-lightest/30 hover:bg-brand-dark text-white font-bold rounded-xl transition-all text-sm text-center"
            >
              Call Store: {storeInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Social Share widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <SocialShare 
          title="About Sharda Medical Store — Trusted Medical Store in Kawardha (26+ Years)"
          label="Share our story:"
        />
      </section>

    </div>
  );
}
