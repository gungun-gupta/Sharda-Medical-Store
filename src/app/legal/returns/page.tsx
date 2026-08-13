import React from 'react';
import { storeInfo } from '@/data/storeContent';

export default function ReturnPolicy() {
  return (
    <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
      
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-black text-brand-dark tracking-tight">Return Policy</h1>
        <p className="text-slate-400 text-xs">Last Updated: August 2026</p>
      </div>

      <p className="text-sm leading-relaxed">
        At <strong>{storeInfo.name}</strong>, we are committed to providing you with the highest quality healthcare products. We understand that there may be instances where you need to return purchased items. To ensure safety and compliance with drug regulatory authorities, our return policy is governed by the following guidelines:
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">1. Return Window & Confirmation</h2>
        <p className="text-sm leading-relaxed">
          Medicines and general healthcare products are accepted for returns strictly on a <strong>condition basis</strong>. You can ask and confirm eligibility at the time of buying, or visit the store later within <strong>7 days</strong> of purchase to receive confirmation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">2. Eligibility Conditions</h2>
        <p className="text-sm leading-relaxed">
          For a return to be accepted, the item must meet all of the following conditions:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>The medicine strip, bottle, or device must be completely unopened and untampered.</li>
          <li>The batch number, price, manufacturing details, and expiry date printed on the packaging must be fully visible and match our system records.</li>
          <li>You must present the original computerized invoice.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">3. Non-Returnable Items (Critical Safety Exceptions)</h2>
        <p className="text-sm leading-relaxed text-red-700 font-semibold">
          For patient safety and pharmaceutical standards, the following items are strictly non-returnable:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li><strong>Cold-Chain Items:</strong> Refrigerated medicines such as insulin, vaccines, injections, and eye drops cannot be returned as we cannot verify if temperature control was maintained after leaving the store.</li>
          <li><strong>Opened Packaging:</strong> Cut strips of tablets, opened syrup bottles, unsealed ointment tubes, or used surgical bandages.</li>
          <li><strong>Special Sourced Medicines:</strong> Rare or specialty drugs that were procured specifically for you from regional distributors.</li>
          <li><strong>Personal Hygiene Items:</strong> Braces, support stockings, masks, or diagnostic devices once unsealed.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">4. Return Procedure</h2>
        <p className="text-sm leading-relaxed">
          To process a return:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm">
          <li>Bring the eligible items and invoice to our counter at <strong>Naveen Bazar, Kawardha</strong>.</li>
          <li>If you are unable to visit, send a photo of the items and the invoice on WhatsApp to initiate a return request.</li>
          <li>If verified, our delivery agent can collect the items during their next scheduled trip to your area. (A nominal pickup charge may apply depending on the location).</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">5. Refunds</h2>
        <p className="text-sm leading-relaxed">
          Upon receiving and verifying the returned items, we will offer:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Immediate exchange for the correct/alternative medicine.</li>
          <li>Store credit notes to be adjusted against your future purchases.</li>
          <li>Cash refund or instant UPI transfer for the returned amount.</li>
        </ul>
      </section>

    </div>
  );
}
