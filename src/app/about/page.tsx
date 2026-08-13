'use client';

import React from 'react';
import { storeInfo } from '@/data/storeContent';
import { useOrder } from '@/context/OrderContext';
import { 
  Plus, CheckCircle2, ShieldCheck, Users, Building2, 
  MapPin, Clock, MessageSquare, Phone 
} from 'lucide-react';

export default function About() {
  const { openOrderModal } = useOrder();

  const milestones = [
    { year: "2000", title: "Inception", desc: "Opened retail counter in Naveen Bazar, Kawardha under the guidance of Dr. Yadvendra Gupta." },
    { year: "2012", title: "Wholesale Expansion", desc: "Began bulk pharmaceutical supply services to local rural clinics." },
    { year: "2018", title: "Digital Integration", desc: "Implemented full computerized billing and real-time inventory tracking." },
    { year: "2020", title: "Doorstep Delivery", desc: "First in Kawardha to launch daily doorstep delivery for chronic care patients." }
  ];

  const operationalHighlights = [
    {
      title: "Temperature-Controlled Storage",
      desc: "Life-saving drugs like insulin, vaccines, and eye drops are kept in strict cold-chain systems (2°C to 8°C) meeting standard compliance.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Qualified Pharmacists Only",
      desc: "All medicine dispensing is supervised by qualified, experienced registered pharmacists who verify dosages and check prescriptions.",
      icon: <Users className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Wholesale Network",
      desc: "Serving as a master stockist, supplying over 400+ registered medical practitioners and clinics in Kabirdham district.",
      icon: <Building2 className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <div className="py-16 space-y-20">
      
      {/* 1. HEADER HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest px-3 py-1 bg-brand-lightest rounded-full">
          Our Legacy
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
          Caring for Kawardha for <span className="text-gradient">26+ Years.</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
          From a humble retail shop to the district&apos;s leading distributor, Sharda Medical Store has been a cornerstone of health in Kabirdham, Chhattisgarh.
        </p>
      </section>

      {/* 2. THE STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Our Story & Journey</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Established in {storeInfo.establishedYear} in the bustling commercial hub of Naveen Bazar, Kawardha, Sharda Medical Store was founded with a singular vision: to make genuine, life-saving medicines accessible and affordable to every family in the region.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Over the last two and a half decades, under the guidance of qualified healthcare specialists, we have grown into one of the top medical stores in the district. Recognizing the need for convenient access, we pioneered medicine home-delivery services, ensuring seniors and critical patients never have to worry about running out of their prescriptions.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm font-semibold text-brand-primary">
              Today, we are honored to have the confidence of over 400+ local doctors who count on us for wholesale supplies, as well as thousands of families who trust us for their daily health essentials.
            </p>
          </div>

          {/* Styled Photo Mockups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Store Front Photo Box */}
            <div className="h-64 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-dark p-6 text-white flex flex-col justify-between shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-4 -translate-y-4" />
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
                <MapPin className="w-5 h-5 text-brand-lightest" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-lightest block">Store Front</span>
                <span className="text-lg font-bold">Naveen Bazar Counter</span>
                <p className="text-[10px] text-brand-lightest/80 mt-1">Our main pharmacy outlet, open daily for walk-ins and consultation.</p>
              </div>
            </div>

            {/* Storage Facility Photo Box */}
            <div className="h-64 rounded-2xl bg-gradient-to-br from-sky-600 to-slate-800 p-6 text-white flex flex-col justify-between shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-4 -translate-y-4" />
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
                <ShieldCheck className="w-5 h-5 text-brand-lightest" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-lightest block">Storage Facility</span>
                <span className="text-lg font-bold">Cold-Chain Depots</span>
                <p className="text-[10px] text-brand-lightest/80 mt-1">Temperature control systems ensure molecular stability of all medicines.</p>
              </div>
            </div>

            {/* Pharmacist Team Photo Box */}
            <div className="sm:col-span-2 h-48 rounded-2xl bg-gradient-to-br from-teal-600 to-brand-primary p-6 text-white flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-8 -translate-y-8" />
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
                <Users className="w-5 h-5 text-brand-lightest" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-lightest block">Pharmacist Team</span>
                <span className="text-lg font-bold">Registered & Experienced Advisors</span>
                <p className="text-xs text-brand-lightest/90 mt-1">Undergoing regular training to explain dosage regimens and coordinate prescription deliveries.</p>
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
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Leadership & Management Authority
          </h2>
          <p className="text-slate-600 text-sm">
            Meet the founders, owners, and key figures who have dedicated their lives and expertise to making Sharda Medical Store Kawardha&apos;s most trusted pharmacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Dr. Yadvendra Gupta */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-primary bg-brand-lightest/60 px-2 py-0.5 rounded-md">
                1. Guidance & Care
              </span>
              <h3 className="font-extrabold text-slate-800 text-lg">Dr. Yadvendra Gupta</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Serving since 2000. The medical store has flourished and maintained high standards of pharmaceutical care under his constant guidance and healthcare supervision.
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
                Dedicated 22 years of his precious life with absolute integrity and care to the pharmacy counter. His legacy of selfless service continues to guide our mission.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-semibold">
              22 Years of Precious Service
            </div>
          </div>

          {/* Mr. Ashutosh Gupta */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-all border-l-4 border-l-brand-primary">
            <div className="space-y-3">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md">
                3. Owner & Authority
              </span>
              <h3 className="font-extrabold text-slate-800 text-lg">Mr. Ashutosh Gupta</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Serving since 2000. With 26+ years of service in this field, he currently holds the authority, handles direct customer counter queries, and oversees all business operations.
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
                4. Helping Pillar
              </span>
              <h3 className="font-extrabold text-slate-800 text-lg">Mr. Awadesh Gupta</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Key supporting pillar of Sharda Medical Store. He dedicates his support, effort, and care to coordinate daily operations, customer logistics, and inventory management.
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
            <h2 className="text-3xl font-bold text-brand-dark">Our Standards of Safety</h2>
            <p className="text-slate-600 text-sm">
              We operate strictly under quality guidelines to ensure every tablet and syringe leaving our store is safe and effective.
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
          <h2 className="text-3xl font-bold text-slate-800">Our Milestones</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal line for timeline on desktop */}
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

      {/* 6. QUICK WHOLESALE/ORDER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-dark to-brand-primary p-8 md:p-12 rounded-3xl text-white shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Wholesale Medicine Inquiries?</h3>
            <p className="text-brand-lightest text-sm max-w-2xl">
              Are you a doctor or clinic administrator? Reach out directly to set up a commercial corporate account with specialized prices and priority shipping.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => openOrderModal("Wholesale Account Setup")}
              className="px-6 py-3.5 bg-white text-brand-dark hover:bg-slate-50 font-bold rounded-xl shadow transition-all cursor-pointer text-sm"
            >
              Contact Wholesale Rep
            </button>
            <a
              href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 bg-brand-primary border border-brand-lightest/30 hover:bg-brand-dark text-white font-bold rounded-xl transition-all text-sm text-center"
            >
              Call Store
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
