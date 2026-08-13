'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useOrder } from '@/context/OrderContext';
import { storeInfo, services, testimonials } from '@/data/storeContent';
import { 
  Truck, Search, Building2, Stethoscope, Phone, MessageSquare, 
  ArrowRight, ShieldCheck, Award, Users, CheckCircle2, Clock, MapPin, 
  FileText, Star, Plus
} from 'lucide-react';

export default function Home() {
  const { openOrderModal } = useOrder();
  const [quickList, setQuickList] = useState('');

  const handleQuickOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickList.trim() !== '') {
      openOrderModal(quickList);
    } else {
      openOrderModal();
    }
  };

  // Map icon names from services data to actual Lucide components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-8 h-8 text-brand-primary" />;
      case 'Search': return <Search className="w-8 h-8 text-brand-primary" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-brand-primary" />;
      case 'Stethoscope': return <Stethoscope className="w-8 h-8 text-brand-primary" />;
      default: return <Plus className="w-8 h-8 text-brand-primary" />;
    }
  };

  const usps = [
    { title: "Kawardha's 1st Delivery", desc: "Pioneered doorstep medicine delivery across Kawardha.", icon: <Truck className="w-6 h-6 text-brand-primary" /> },
    { title: "26+ Years Legacy", desc: "Serving Kabirdham district since 2000 with absolute integrity.", icon: <Award className="w-6 h-6 text-brand-primary" /> },
    { title: "Computerized Billing", desc: "Transparent invoices with clear itemized discounts.", icon: <FileText className="w-6 h-6 text-brand-primary" /> },
    { title: "Proper Cold Storage", desc: "Strict temperature-controlled storage for vaccines & insulin.", icon: <ShieldCheck className="w-6 h-6 text-brand-primary" /> },
    { title: "Trained Pharmacists", desc: "Qualified drug counseling and dosage explanation.", icon: <Users className="w-6 h-6 text-brand-primary" /> },
    { title: "Special Sourcing", desc: "Hard-to-find medicines sourced in 24-48 hours.", icon: <Search className="w-6 h-6 text-brand-primary" /> },
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-lightest/40 via-white to-brand-lightest/20 pt-16 pb-24 md:py-32">
        {/* Dynamic decorative shapes */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-lightest/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/10 right-0 w-96 h-96 bg-brand-accent-secondary/15 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-brand-lightest border border-brand-accent-secondary/30 rounded-full text-xs font-bold text-brand-dark">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span>Kawardha&apos;s First Medicine Home-Delivery Pharmacy</span>
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-none">
                Authentic Medicines <br className="hidden md:inline" />
                <span className="text-gradient">Delivered to Your Door.</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Operating for <strong>26+ years</strong> in Naveen Bazar. Stocking all major healthcare brands, offering <strong>10% discount</strong> for regulars, and trusted by over <strong>400+ doctors</strong> for wholesale supply.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => openOrderModal()}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Order on WhatsApp</span>
                </button>
                <a
                  href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white hover:bg-slate-50 text-brand-dark font-bold rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <span>Call Now: {storeInfo.phone}</span>
                </a>
              </div>

              {/* Core promises row */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
                <div>
                  <span className="block text-2xl font-black text-brand-primary">26+</span>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">Years Trust</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-brand-primary">400+</span>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">Doctors Trust</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-brand-primary">10%</span>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">Regular Discount</span>
                </div>
              </div>

            </div>

            {/* Right Hero Graphic: Prescription Quick-Order Form */}
            <div className="lg:col-span-5">
              <div className="glass p-6 md:p-8 rounded-3xl shadow-xl border border-brand-lightest/80 space-y-6 relative">
                
                {/* Visual badge */}
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-amber-500 text-white text-[10px] font-bold rounded-lg shadow uppercase tracking-wide">
                  ⚡ Super Quick
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-dark flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-brand-primary" />
                    <span>Upload List / Order Box</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Type your list of medicines, then click to send directly to our WhatsApp chat. It takes less than 30 seconds!
                  </p>
                </div>

                <form onSubmit={handleQuickOrderSubmit} className="space-y-4">
                  <textarea
                    value={quickList}
                    onChange={(e) => setQuickList(e.target.value)}
                    placeholder="Type your medicines here, e.g.&#10;1. Pantocid 40mg - 2 strips&#10;2. Volini gel - 1 pack&#10;Or request custom sourcing..."
                    rows={5}
                    className="w-full p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none text-sm placeholder-slate-400 bg-slate-50/50"
                  />
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 p-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Send Order to WhatsApp</span>
                  </button>
                </form>

                <div className="text-[11px] text-slate-400 text-center">
                  You can also attach a photo of your prescription directly in the chat.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-slate-800 text-center lg:text-left">
            <div className="pt-4 md:pt-0 lg:px-6 space-y-1">
              <span className="block text-3xl font-black text-brand-accent-secondary">26+ Years</span>
              <span className="text-xs text-slate-400 font-medium">Serving Kawardha & Kabirdham District</span>
            </div>
            <div className="pt-4 md:pt-0 lg:px-6 space-y-1">
              <span className="block text-3xl font-black text-brand-accent-secondary">400+</span>
              <span className="text-xs text-slate-400 font-medium">Doctors & Clinics Trust Our Wholesale Supply</span>
            </div>
            <div className="pt-4 md:pt-0 lg:px-6 space-y-1">
              <span className="block text-3xl font-black text-brand-accent-secondary">100% Genuine</span>
              <span className="text-xs text-slate-400 font-medium">Sourced Directly from Licensed Distributors</span>
            </div>
            <div className="pt-4 md:pt-0 lg:px-6 space-y-1">
              <span className="block text-3xl font-black text-brand-accent-secondary">Doorstep Delivery</span>
              <span className="text-xs text-slate-400 font-medium">Delivering Right to Your Door Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
            Our Healthcare Services
          </h2>
          <p className="text-slate-600">
            Sharda Medical Store is more than just a retail counter. We provide a full ecosystem of healthcare logistics to individuals and practitioners alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 bg-white border border-slate-100 rounded-3xl hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-lightest text-brand-primary">
                  {getServiceIcon(service.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.longDesc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                <button
                  onClick={() => openOrderModal(`${service.title} Inquiry`)}
                  className="flex items-center space-x-2 text-brand-primary font-bold text-sm hover:text-brand-dark transition-all cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US (USP GRID) */}
      <section className="bg-brand-lightest/30 py-20 border-y border-brand-lightest/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Why Choose Us Intro */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
                Why Kawardha Trusts <br />
                Sharda Medical Store
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Over two decades, we have set the standard of care in medical retailing. We blend traditional pharmacy counseling with modern delivery convenience to support our community.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span>Open 15 Hours Daily (8:00 AM – 11:00 PM)</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span>10% flat discount on regular medicine orders</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span>Qualified pharmacists at the counter</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl shadow-md transition-all"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Why Choose Us USP Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {usps.map((usp, idx) => (
                  <div key={idx} className="p-6 bg-white border border-slate-100/80 rounded-2xl shadow-xs space-y-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-lightest text-brand-primary">
                      {usp.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 text-base">{usp.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{usp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SHOP CATEGORIES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
            Browse Product Categories
          </h2>
          <p className="text-slate-600">
            View our catalog and choose what you need. All prices are competitive, and ordering requires just a simple tap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Medicines Category Card */}
          <div className="p-8 bg-white border border-slate-100 rounded-3xl text-center space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-50 text-brand-primary">
                <Plus className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Prescription Medicines</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Antacids, anti-diabetics, blood pressure, fever, vitamins, and general therapeutics. Fully stocked.
              </p>
            </div>
            <Link
              href="/shop?category=medicines"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-50 hover:bg-brand-lightest text-slate-800 hover:text-brand-dark font-bold rounded-xl transition-all"
            >
              <span>View Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Healthcare & Wellness Card */}
          <div className="p-8 bg-white border border-slate-100 rounded-3xl text-center space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 text-teal-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Healthcare & Wellness</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Sanitizers, thermometers, oximeters, herbal cough syrups, steam inhalers, and immunity boosters.
              </p>
            </div>
            <Link
              href="/shop?category=healthcare"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-50 hover:bg-brand-lightest text-slate-800 hover:text-brand-dark font-bold rounded-xl transition-all"
            >
              <span>View Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Equipment Card */}
          <div className="p-8 bg-white border border-slate-100 rounded-3xl text-center space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-50 text-violet-600">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Medical Equipment</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Surgical bandages, crepe rolls, BP checkers, glucometers, and orthopedic braces for patient care.
              </p>
            </div>
            <Link
              href="/shop?category=equipment"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-50 hover:bg-brand-lightest text-slate-800 hover:text-brand-dark font-bold rounded-xl transition-all"
            >
              <span>View Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. GOOGLE REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
            Loved & Trusted by Patients
          </h2>
          <p className="text-slate-600">
            Read stories of how we have served Kawardha community with medicine delivery and rare drug sourcing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div key={test.id} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex space-x-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-xs italic leading-relaxed">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50">
                <h4 className="font-bold text-slate-800 text-sm">{test.author}</h4>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold mt-0.5">
                  <span>{test.role || "Verified Local User"}</span>
                  <span>{test.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONTACT & MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12">
          
          {/* Location info */}
          <div className="p-8 md:p-12 lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
                Visit or Contact Us
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Located in Naveen Bazar, the core market area of Kawardha. Easily accessible with ample parking.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 text-sm">
                  <MapPin className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="block font-bold text-slate-800">Address</span>
                    <span className="text-slate-500">{storeInfo.location.address}, {storeInfo.location.city}, Chhattisgarh - 491995</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3.5 text-sm">
                  <Clock className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="block font-bold text-slate-800">Operating Hours</span>
                    <span className="text-slate-500">{storeInfo.hours} Daily</span>
                    <span className="block text-xs font-semibold text-amber-600 mt-0.5">{storeInfo.hoursFootnote}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-sm">
                  <Phone className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="block font-bold text-slate-800">Phone Numbers</span>
                    <a href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`} className="text-brand-primary hover:underline font-bold">
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openOrderModal()}
                className="flex items-center justify-center space-x-2 px-5 py-3.5 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl transition-all cursor-pointer shadow-sm text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp</span>
              </button>
              <a
                href={storeInfo.location.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-5 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold border border-slate-200 rounded-xl transition-all text-sm"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Map Embed */}
          <div className="h-96 lg:h-auto lg:col-span-7 bg-slate-100 relative">
            <iframe
              src={storeInfo.location.googleMapsEmbedUrl}
              className="w-full h-full border-none"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharda Medical Store Google Maps Location"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
