'use client';

import React, { useState } from 'react';
import { faqs } from '@/data/storeContent';
import { useOrder } from '@/context/OrderContext';
import { Plus, Minus, MessageSquare, HelpCircle } from 'lucide-react';

export default function FAQs() {
  const { openOrderModal } = useOrder();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured FAQ Schema markup for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="py-16 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* FAQ Schema Script Injection */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-xl bg-brand-lightest text-brand-primary">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-black text-brand-dark tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Find quick answers about our medicine delivery process, sourcing capability, wholesale accounts, and shop policies.
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
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-brand-primary transition-colors focus:outline-none"
              >
                <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                <span className="ml-4 shrink-0 p-1 rounded-lg bg-slate-50 text-slate-500">
                  {isOpen ? <Minus className="w-4.5 h-4.5 text-brand-primary" /> : <Plus className="w-4.5 h-4.5" />}
                </span>
              </button>

              {/* Answer Box */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[300px] border-t border-slate-50' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-slate-50/40 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Sourcing/Help CTA Card */}
      <div className="p-8 bg-brand-lightest/40 border border-brand-lightest rounded-3xl text-center space-y-4">
        <h3 className="text-lg font-bold text-brand-dark">Still have questions?</h3>
        <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed">
          Our pharmacists are ready to guide you. Message us on WhatsApp or call our main counter line for instant assistance.
        </p>
        <div className="pt-2">
          <button
            onClick={() => openOrderModal()}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-xs"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat with Pharmacist</span>
          </button>
        </div>
      </div>

    </div>
  );
}
