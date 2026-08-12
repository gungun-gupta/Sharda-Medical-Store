import React from 'react';
import { storeInfo } from '@/data/storeContent';

export default function TermsOfService() {
  return (
    <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
      
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-black text-brand-dark tracking-tight">Terms of Service</h1>
        <p className="text-slate-400 text-xs">Last Updated: August 2026</p>
      </div>

      <p className="text-sm leading-relaxed">
        Welcome to the website of <strong>{storeInfo.name}</strong>. By accessing our website, browsing our product catalog, or placing orders via our click-to-call or click-to-WhatsApp services, you agree to comply with the following Terms of Service.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">1. Nature of Website & Orders</h2>
        <p className="text-sm leading-relaxed">
          This website serves as an informational catalog and contact portal for Sharda Medical Store located in Naveen Bazar, Kawardha. <strong>It does not support online checkouts, e-commerce shopping carts, or online payment gateways.</strong>
        </p>
        <p className="text-sm leading-relaxed">
          All order requests triggered through this website are processed as inquiries on WhatsApp or phone. No contract of sale is finalized until our registered pharmacist verifies the order and calls you to confirm dispatch.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">2. Prescription Verification Requirement</h2>
        <p className="text-sm leading-relaxed">
          For scheduled medications (including Schedule H, H1, and X drugs under Indian law):
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>You must present or upload a clear, legible photograph of a valid prescription issued by a registered medical practitioner.</li>
          <li>Our qualified pharmacist reserves the right to refuse dispensing any medication if the prescription appears invalid, expired, or tampered with.</li>
          <li>For home deliveries, the delivery agent may ask to inspect the physical prescription slip upon arrival.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">3. Pricing and Stock Availability</h2>
        <p className="text-sm leading-relaxed">
          Pharmaceutical prices fluctuate frequently based on government regulations (NPPA) and manufacturer adjustments. Prices listed on this website are estimated ranges or representative values. <strong>The final price of the medicine will be as printed on the computer-generated GST invoice provided at the time of delivery.</strong>
        </p>
        <p className="text-sm leading-relaxed">
          All orders are subject to stock availability. If a requested medicine is out of stock, we will offer to source it or suggest equivalent substitute brands with your consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">4. Delivery and Payment Terms</h2>
        <p className="text-sm leading-relaxed">
          Our home delivery service is active within Kawardha town and adjacent regions of Kabirdham district. Payment must be completed upon physical receipt of the package. We accept Cash and direct mobile UPI transfers (such as Google Pay, PhonePe, Paytm, or BHIM) to our official business QR code shown by the delivery agent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">5. Limitation of Liability</h2>
        <p className="text-sm leading-relaxed">
          Sharda Medical Store and its pharmacists are not liable for any adverse reactions, allergies, or health complications resulting from the administration of medicines, unless directly caused by dispensing errors contradicting the verified doctor&apos;s prescription. Patients are advised to consult their doctor regarding dosages and potential side-effects.
        </p>
      </section>

    </div>
  );
}
