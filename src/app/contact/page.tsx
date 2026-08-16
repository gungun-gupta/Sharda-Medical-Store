'use client';

import React, { useState, useEffect } from 'react';
import { storeInfo } from '@/data/storeContent';
import SocialShare from '@/components/SocialShare';
import { 
  MapPin, Phone, MessageSquare, Clock, 
  Send, CheckCircle2 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format text message for WhatsApp
    const whatsappMsg = `Hello Sharda Medical Store,\n\n*Contact Form Submission*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Message/Order List:*\n${formData.message}`;
    const whatsappLink = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;
    
    // Open in new window/tab
    window.open(whatsappLink, '_blank');
    setSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest px-3 py-1 bg-brand-lightest rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
          Contact <span className="text-gradient">Sharda Medical Store in Kawardha</span>
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Have an order for <strong>medicine home delivery in Kawardha</strong>, an inquiry about specialty medicine sourcing, or require a <strong>wholesale pharmaceutical account for doctors</strong>? Reach out directly using our Naveen Bazar pharmacy channels below. Store operations and counter inquiries are managed under the authority of <strong>Mr. Ashutosh Gupta</strong>.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Details & Form */}
        <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
          
          {/* Details Row */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Store Contact &amp; Location Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address */}
              <div className="p-5 bg-white border border-slate-100 rounded-2xl space-y-2">
                <MapPin className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                <h3 className="font-extrabold text-slate-800 text-sm">Store Address</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {storeInfo.location.address}, <br />
                  Near Main Chowk, {storeInfo.location.city}, <br />
                  Chhattisgarh - 491995
                </p>
              </div>

              {/* Timings */}
              <div className="p-5 bg-white border border-slate-100 rounded-2xl space-y-2">
                <Clock className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                <h3 className="font-extrabold text-slate-800 text-sm">Pharmacy Hours</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  <strong>{storeInfo.hours}</strong> <br />
                  Open 7 Days a week <br />
                  <span className="text-amber-600 font-medium text-[11px]">({storeInfo.hoursFootnote})</span>
                </p>
              </div>

              {/* WhatsApp */}
              <div className="p-5 bg-white border border-slate-100 rounded-2xl space-y-2">
                <MessageSquare className="w-5 h-5 text-whatsapp" aria-hidden="true" />
                <h3 className="font-extrabold text-slate-800 text-sm">WhatsApp Ordering</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-2">
                  Order medicines, upload prescriptions, or check availability instantly.
                </p>
                <a 
                  href={`https://wa.me/${storeInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Sharda Medical Store on WhatsApp"
                  className="text-xs font-bold text-whatsapp hover:underline inline-flex items-center space-x-1"
                >
                  <span>Chat on WhatsApp (+91 {storeInfo.whatsapp.replace('91', '')}) &rarr;</span>
                </a>
              </div>

              {/* Direct Phone */}
              <div className="p-5 bg-white border border-slate-100 rounded-2xl space-y-2 border-l-4 border-l-brand-primary">
                <Phone className="w-5 h-5 text-brand-primary" aria-hidden="true" />
                <h3 className="font-extrabold text-slate-800 text-sm">Direct Phone Line</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-2">
                  Speak directly with <strong>Mr. Ashutosh Gupta</strong> (Managing Authority) to place or confirm orders.
                </p>
                <a 
                  href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
                  aria-label={`Call Mr. Ashutosh Gupta at Sharda Medical Store on ${storeInfo.phone}`}
                  className="text-xs font-bold text-brand-primary hover:underline"
                >
                  Call: {storeInfo.phone} &rarr;
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-800">Send an Online Inquiry</h2>
              <p className="text-slate-400 text-xs">
                Submit this form to open WhatsApp with your pre-formatted medicine order or question.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full p-3 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Your 10-digit number"
                    className="w-full p-3 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Your Message / Medicine List</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Specify medicine names, strengths, quantities or wholesale details..."
                  className="w-full p-3 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                aria-label="Submit inquiry to Sharda Medical Store on WhatsApp"
                className="w-full flex items-center justify-center space-x-2 p-3.5 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    <span>Opening WhatsApp Chat...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Open in WhatsApp</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

        {/* Right Column: Google Maps */}
        <div className="lg:col-span-6 bg-slate-100 rounded-3xl overflow-hidden min-h-[400px] border border-slate-100 shadow-xs relative">
          {isMounted ? (
            <iframe
              src={storeInfo.location.googleMapsEmbedUrl}
              className="w-full h-full border-none min-h-[450px]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharda Medical Store Naveen Bazar Kawardha Google Maps Location"
            />
          ) : (
            <div className="w-full h-full min-h-[450px] bg-slate-50 flex items-center justify-center">
              <span className="text-slate-400 text-xs">Loading store map...</span>
            </div>
          )}
        </div>

      </div>

      {/* Social Share */}
      <div className="flex justify-center pt-4">
        <SocialShare 
          title="Contact Sharda Medical Store in Kawardha — Phone, WhatsApp & Address"
          label="Share store contact details:"
        />
      </div>

    </div>
  );
}
