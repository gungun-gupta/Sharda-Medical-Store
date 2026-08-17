'use client';

import React, { useState } from 'react';
import { faqs } from '@/data/storeContent';
import { useOrder } from '@/context/OrderContext';
import SocialShare from '@/components/SocialShare';
import { Plus, Minus, MessageSquare, HelpCircle } from 'lucide-react';

export default function FaqsClient() {
  const { openOrderModal } = useOrder();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-xl bg-brand-lightest text-brand-primary">
          <HelpCircle className="w-6 h-6" aria-hidden="true" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
          Frequently Asked Questions — <span className="text-gradient">Sharda Medical Store in Kawardha</span>
        </h1>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
          Find clear answers about <strong>medicine home delivery in Kawardha</strong>, special drug sourcing, <strong>wholesale medicine supply for 400+ doctors</strong>, store timings in Naveen Bazar, and prescription policies.
        </p>
      </div>

      {/* Accordion Q&A list */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs transition-all"
            >
              {/* Question Click Bar */}
              <button
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-brand-primary transition-colors focus:outline-none cursor-pointer"
              >
                <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                <span className="ml-4 shrink-0 p-1 rounded-lg bg-slate-50 text-slate-500">
                  {isOpen ? <Minus className="w-4.5 h-4.5 text-brand-primary" /> : <Plus className="w-4.5 h-4.5" />}
                </span>
              </button>

              {/* Answer Box */}
              {isOpen && (
                <div className="p-6 bg-slate-50/40 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                  {faq.answer}
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Sourcing/Help CTA Card */}
      <div className="p-8 bg-brand-lightest/40 border border-brand-lightest rounded-3xl text-center space-y-4">
        <h2 className="text-lg font-bold text-brand-dark">Still have questions for our pharmacists?</h2>
        <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed">
          Our registered pharmacists in Naveen Bazar are ready to guide you. Message us on WhatsApp or call our main counter line for immediate support in Kawardha.
        </p>
        <div className="pt-2">
          <button
            onClick={() => openOrderModal()}
            aria-label="Chat with registered pharmacist at Sharda Medical Store Kawardha"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-xs"
          >
            <MessageSquare className="w-4 h-4 fill-white" aria-hidden="true" />
            <span>Chat with Pharmacist</span>
          </button>
        </div>
      </div>

      {/* Social Share */}
      <div className="flex justify-center pt-4">
        <SocialShare 
          title="Frequently Asked Questions — Sharda Medical Store in Kawardha"
          label="Share this FAQ page:"
        />
      </div>

    </div>
  );
}
