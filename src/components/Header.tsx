'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { storeInfo } from '../data/storeContent';
import { useOrder } from '../context/OrderContext';
import { Menu, X, Plus, Phone, MessageSquare } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { openOrderModal } = useOrder();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Shop Catalog', path: '/shop' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            href="/" 
            aria-label="Sharda Medical Store Kawardha — Home"
            className="flex items-center space-x-2 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-primary text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Plus className="w-6 h-6 stroke-[3]" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-lg font-bold text-brand-dark tracking-tight leading-none group-hover:text-brand-primary transition-colors">
                {storeInfo.name}
              </span>
              <span className="block text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                Naveen Bazar • Kawardha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'text-brand-primary bg-brand-lightest/60'
                      : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call/Order CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
              aria-label={`Call Sharda Medical Store at ${storeInfo.phone}`}
              className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold text-brand-dark hover:text-brand-primary transition-colors border border-slate-200 rounded-lg bg-white"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true" />
              <span>Call Store</span>
            </a>
            <button
              onClick={() => openOrderModal()}
              aria-label="Order medicines on WhatsApp from Sharda Medical Store"
              className="flex items-center space-x-1.5 px-4.5 py-2 text-xs font-bold text-white bg-brand-primary hover:bg-brand-dark rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" aria-hidden="true" />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-brand-primary hover:bg-slate-100 outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-20 z-30 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <div
        className={`fixed right-0 top-20 z-40 w-4/5 max-w-sm h-[calc(100vh-5rem)] bg-white border-l border-slate-100 shadow-xl transition-transform duration-300 transform md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
              Navigation Menu
            </p>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'text-brand-primary bg-brand-lightest/80'
                        : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile CTAs at the bottom of drawer */}
          <div className="space-y-3 pt-6 border-t border-slate-100">
            <div className="p-3 bg-brand-lightest/40 rounded-xl mb-2 text-center text-xs text-brand-dark font-medium">
              🏪 Open Today: {storeInfo.hours}
            </div>
            
            <a
              href={`tel:${storeInfo.phone.replace(/\s+/g, '')}`}
              aria-label={`Call Sharda Medical Store at ${storeInfo.phone}`}
              className="flex items-center justify-center space-x-2 w-full p-3.5 bg-slate-50 border border-slate-200 text-slate-800 font-bold rounded-xl text-center"
            >
              <Phone className="w-4 h-4 text-brand-primary" aria-hidden="true" />
              <span>Call Us</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openOrderModal();
              }}
              aria-label="Order medicines on WhatsApp"
              className="flex items-center justify-center space-x-2 w-full p-3.5 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl text-center shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" aria-hidden="true" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
