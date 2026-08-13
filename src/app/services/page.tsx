'use client';

import React from 'react';
import { useOrder } from '@/context/OrderContext';
import { storeInfo } from '@/data/storeContent';
import { 
  Truck, Search, Building2, Stethoscope, CheckCircle2, 
  ArrowRight, Phone, MessageSquare 
} from 'lucide-react';

export default function Services() {
  const { openOrderModal } = useOrder();

  const serviceDetails = [
    {
      id: "delivery",
      title: "Doorstep Home Delivery",
      subtitle: "First pharmacy in Kawardha district to offer medicine home delivery.",
      icon: <Truck className="w-10 h-10 text-brand-primary" />,
      desc: "We bring genuine medicines directly to your home, saving you a trip to Naveen Bazar. Our dispatch system ensures secure packaging and timely delivery, especially helpful for chronic care patients (diabetes, blood pressure, thyroid).",
      features: [
        "Minimum order value of ₹500/- and above for home delivery",
        "Secure temperature-insulated packaging for sensitive drugs",
        "Order verification by a registered pharmacist before dispatch",
        "Delivery within 2 to 4 hours in local Kawardha limits"
      ],
      howItWorks: [
        "Send your list or a clear photo of your prescription on WhatsApp.",
        "Our pharmacist calls you to confirm the items, substitutes, and billing.",
        "We pack the order following sanitization protocols.",
        "Our delivery agent drops the package at your door; pay via Cash or UPI."
      ],
      whatsappPrefill: "I'd like to place an order for Medicine Home Delivery. Here is my list/prescription:",
      ctaText: "Order Home Delivery Now"
    },
    {
      id: "sourcing",
      title: "Special Medicine Sourcing",
      subtitle: "If you cannot find a medicine anywhere in the district, we will source it.",
      icon: <Search className="w-10 h-10 text-brand-primary" />,
      desc: "Rare therapies, oncology injections, psychiatric drugs, and pediatric medicines are often difficult to find locally. We leverage our regional wholesale connections in Raipur, Bilaspur, and national networks to procure the drug you need.",
      features: [
        "Procurement of hard-to-find prescription medicines",
        "Sourced safely through certified direct channels in 24-48 hours",
        "No extra sourcing fee — pay only standard retail price",
        "Live status updates on WhatsApp"
      ],
      howItWorks: [
        "Share the correct chemical composition or brand name of the drug.",
        "Attach a photo of the medicine box or prescription.",
        "We query regional depots and notify you of estimated arrival and price.",
        "Collect from Naveen Bazar store or have it delivered to your home."
      ],
      whatsappPrefill: "I'd like to inquire about sourcing a special medicine that is not available elsewhere. Details:",
      ctaText: "Inquire Rare Medicine"
    },
    {
      id: "wholesale",
      title: "Wholesale for Doctors & Clinics",
      subtitle: "Discounted bulk prices for medical practitioners, clinics, and hospitals.",
      icon: <Building2 className="w-10 h-10 text-brand-primary" />,
      desc: "As one of Kawardha's largest wholesale drug distributors, we supply clinical consumables, surgical items, IV fluids, and general formulations to over 400+ doctors across Kabirdham district. Partner with us for reliable bulk logistics.",
      features: [
        "Specialized wholesale rates on bulk pharmaceutical purchases",
        "Wide inventory matching clinical and hospital standards",
        "Fully computerized GST billing and accounting records",
        "Priority distribution and delivery to clinics"
      ],
      howItWorks: [
        "Provide your Drug License (DL) or clinic registration copy.",
        "Submit your requirement sheet or monthly inventory list.",
        "Get an itemized commercial wholesale price quote within hours.",
        "Schedule regular bulk deliveries with customized invoices."
      ],
      whatsappPrefill: "Hello, I am a doctor/clinic owner and want to inquire about wholesale medicine rates for my clinic. Details:",
      ctaText: "Inquire Wholesale Rates"
    },
    {
      id: "equipment",
      title: "Medical Equipment & Surgical Supplies",
      subtitle: "Bandages of all types and medical check devices for patients and doctors.",
      icon: <Stethoscope className="w-10 h-10 text-brand-primary" />,
      desc: "We supply essential orthopedic supports and patient monitoring devices. From basic crepe bandages for sprains to electronic blood pressure checkers and nebulizers, we stock top-grade brands with warranties.",
      features: [
        "Surgical dressings, cotton rolls, and elastic adhesive bandages",
        "Electronic monitoring devices (BP cuff, pulse oximeters, glucometers)",
        "Orthopedic support braces, kneecaps, and belts",
        "Steam vaporizers and breathing nebulizers"
      ],
      howItWorks: [
        "Browse our equipment list or let us know the device you need.",
        "Select the brand (Omron, Dr. Trust, Hicks, etc.) and size.",
        "We verify compatibility or provide instructions on device usage.",
        "Available for immediate dispatch or store pickup."
      ],
      whatsappPrefill: "I want to inquire about medical equipment / bandages. Item details:",
      ctaText: "Inquire Medical Equipment"
    }
  ];

  return (
    <div className="py-16 space-y-20">
      
      {/* 1. HEADER HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest px-3 py-1 bg-brand-lightest rounded-full">
          Comprehensive Care
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
          What We Do For <span className="text-gradient">Your Health.</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
          From medicine home delivery to rare drug sourcing and clinical supplies, we serve both patients and healthcare providers.
        </p>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {serviceDetails.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={service.id} 
              id={service.id}
              className={`p-8 md:p-12 bg-white border border-slate-100 rounded-3xl shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24`}
            >
              {/* Left Column: Core Info */}
              <div className={`lg:col-span-6 space-y-6 ${!isEven && 'lg:order-last'}`}>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-lightest">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-800">{service.title}</h2>
                    <p className="text-xs text-brand-primary font-bold">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Bullet features */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => openOrderModal(service.whatsappPrefill)}
                    className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-sm"
                  >
                    <MessageSquare className="w-4.5 h-4.5 fill-white" />
                    <span>{service.ctaText}</span>
                  </button>
                  <a
                    href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-50 border border-slate-200 text-slate-800 font-bold rounded-xl text-sm"
                  >
                    <Phone className="w-4.5 h-4.5 text-brand-primary" />
                    <span>Call Store</span>
                  </a>
                </div>
              </div>

              {/* Right Column: How it Works Steps */}
              <div className="lg:col-span-6 bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 space-y-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-600">
                  How the Process Works
                </h3>
                <div className="space-y-6">
                  {service.howItWorks.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start space-x-3.5">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-lightest text-brand-primary text-xs font-bold mt-0.5 shrink-0">
                        {sIdx + 1}
                      </span>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* 3. EMERGENCY / SPECIAL CARE FOOTER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-lg text-center space-y-4">
          <h3 className="text-xl font-bold">Have an Emergency Prescription?</h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            We prioritize urgent prescriptions. Call our direct hotline immediately so we can verify stock and coordinate the fastest delivery path.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-md transition-all text-sm"
            >
              <Phone className="w-4.5 h-4.5 fill-white" />
              <span>Call Direct Hotline</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
