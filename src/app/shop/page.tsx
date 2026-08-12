'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, Product } from '@/data/storeContent';
import { useOrder } from '@/context/OrderContext';
import { Search, Plus, ShieldCheck, Stethoscope, MessageSquare, ArrowRight } from 'lucide-react';

function ShopCatalog() {
  const { openOrderModal } = useOrder();
  const searchParams = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'medicines' | 'healthcare' | 'equipment'>('all');

  // Pre-filter by category if search param is present
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat === 'medicines' || cat === 'healthcare' || cat === 'equipment') {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get icon based on category
  const getProductIcon = (category: string) => {
    switch (category) {
      case 'medicines':
        return (
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sky-50 text-brand-primary">
            <Plus className="w-6 h-6 stroke-[3]" />
          </div>
        );
      case 'healthcare':
        return (
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 text-teal-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
        );
      case 'equipment':
        return (
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-50 text-violet-600">
            <Stethoscope className="w-6 h-6" />
          </div>
        );
      default:
        return null;
    }
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'medicines', name: 'Medicines' },
    { id: 'healthcare', name: 'Healthcare & Wellness' },
    { id: 'equipment', name: 'Medical Equipment' }
  ];

  return (
    <div className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-black text-brand-dark tracking-tight">
          Browse Our <span className="text-gradient">Medical Catalog</span>
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Order prescription drugs, daily wellness items, and clinic equipment. Click **Order Now** to instantly format a list and send it to our WhatsApp team for home delivery.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-xs">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicines or devices..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none bg-slate-50/30 placeholder-slate-400"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="p-6 bg-white border border-slate-100 rounded-2xl flex flex-col justify-between hover:shadow-md hover:border-brand-lightest transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Visual Category Header */}
                <div className="flex justify-between items-start">
                  {getProductIcon(product.category)}
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 bg-slate-100 rounded-full text-slate-500">
                    {product.category}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-slate-800 text-lg leading-snug group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

              </div>

              {/* Action and pricing */}
              <div className="pt-5 mt-5 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Est. Price</span>
                  <span className="text-sm font-extrabold text-slate-800">{product.price || 'Ask Pharmacist'}</span>
                </div>
                <button
                  onClick={() => openOrderModal(product.name)}
                  className="flex items-center space-x-1.5 px-4 py-2.5 bg-brand-lightest hover:bg-brand-primary text-brand-dark hover:text-white font-bold rounded-xl transition-all cursor-pointer text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Order Now</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* Empty State Sourcing Card */
        <div className="max-w-xl mx-auto p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-center space-y-6">
          <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-brand-lightest text-brand-primary">
            <Search className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-800">Can&apos;t find what you are looking for?</h3>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto">
              We can source almost any rare or specialty medicine within 24 to 48 hours. Send us a message on WhatsApp with the details and we will secure it for you.
            </p>
          </div>
          <div>
            <button
              onClick={() => openOrderModal(searchTerm ? `Sourcing medicine request: ${searchTerm}` : undefined)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire Special Sourcing</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-brand-primary rounded-full animate-spin" />
        <span className="text-sm text-slate-500 font-semibold">Loading Catalog...</span>
      </div>
    }>
      <ShopCatalog />
    </Suspense>
  );
}
