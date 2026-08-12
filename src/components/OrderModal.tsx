'use client';

import React, { useState, useEffect } from 'react';
import { useOrder } from '../context/OrderContext';
import { storeInfo } from '../data/storeContent';
import { X, Phone, MessageSquare, Truck, FileText, CheckCircle2 } from 'lucide-react';

export default function OrderModal() {
  const { isOpen, selectedProduct, closeOrderModal } = useOrder();
  const [customList, setCustomList] = useState('');
  
  // Reset custom list when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCustomList(selectedProduct ? `I'd like to order: ${selectedProduct}` : '');
    }
  }, [isOpen, selectedProduct]);

  if (!isOpen) return null;

  // Format WhatsApp Link
  const baseWhatsAppUrl = `https://wa.me/${storeInfo.whatsapp}`;
  const defaultText = selectedProduct 
    ? `I'd like to order: ${selectedProduct}` 
    : "Hello Sharda Medical Store, I want to inquire about medicines.";
  
  const finalMessage = customList.trim() !== '' ? customList : defaultText;
  const whatsappLink = `${baseWhatsAppUrl}?text=${encodeURIComponent(finalMessage)}`;

  // Handle click on overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeOrderModal();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div 
        className="w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl border border-brand-lightest animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 text-white bg-gradient-to-r from-brand-dark to-brand-primary">
          <button 
            onClick={closeOrderModal}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-bold font-sans">Place Your Order</h3>
          <p className="mt-1 text-sm text-brand-lightest">
            Fast doorstep delivery in Kawardha district
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Quick Flow Indicator */}
          <div className="grid grid-cols-4 gap-2 text-center text-[10px] md:text-xs font-semibold text-slate-500">
            <div className="flex flex-col items-center space-y-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-lightest text-brand-primary font-bold">1</span>
              <span>List Medicines</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-lightest text-brand-primary font-bold">2</span>
              <span>Send Message</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-lightest text-brand-primary font-bold">3</span>
              <span>Confirm Call</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-lightest text-brand-primary font-bold">4</span>
              <span>Home Delivery</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* User Prescription/List Text Area */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              {selectedProduct ? "Confirm or Edit Your Order List:" : "Type Your Medicine List / Request:"}
            </label>
            <div className="relative">
              <textarea
                value={customList}
                onChange={(e) => setCustomList(e.target.value)}
                placeholder="Example:&#10;- Paracetamol 650mg (1 strip)&#10;- Pantocid 40mg (1 strip)&#10;Or type your query..."
                rows={4}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none text-sm placeholder-slate-400"
              />
              <div className="absolute right-2 bottom-3 text-[10px] text-slate-400">
                Auto-formats for WhatsApp
              </div>
            </div>
            <p className="text-[11px] text-slate-500 flex items-start space-x-1">
              <FileText className="w-3.5 h-3.5 mt-0.5 text-brand-accent-secondary shrink-0" />
              <span>You can also simply send a photo of your doctor&apos;s prescription after opening WhatsApp.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            
            {/* WhatsApp Order */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeOrderModal}
              className="flex items-center justify-center space-x-2 p-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center space-x-2 p-3.5 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call Us Directly</span>
            </a>
          </div>

          <div className="p-3 bg-brand-lightest/50 border border-brand-lightest rounded-xl text-center">
            <p className="text-[11px] text-brand-dark font-medium">
              ⚡ Open Daily: <strong>{storeInfo.hours}</strong> | <strong>{storeInfo.discountRate} Discount</strong> for regular patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
