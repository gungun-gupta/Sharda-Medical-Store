import React from 'react';
import { storeInfo } from '@/data/storeContent';

export default function PrivacyPolicy() {
  return (
    <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
      
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-black text-brand-dark tracking-tight">Privacy Policy</h1>
        <p className="text-slate-400 text-xs">Last Updated: August 2026</p>
      </div>

      <p className="text-sm leading-relaxed">
        At <strong>{storeInfo.name}</strong>, we take the confidentiality of your health and personal information very seriously. This Privacy Policy details how we handle the data (specifically prescription lists, names, contact numbers, and addresses) you share with us through our website, via direct phone calls, or on WhatsApp during the ordering process.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">1. Information We Collect</h2>
        <p className="text-sm leading-relaxed">
          Because we do not have an automated online account registration or payment checkout system, we only gather details necessary to process delivery requests manually:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li><strong>Identity Details:</strong> Your name, phone number, and physical home delivery address.</li>
          <li><strong>Medical Data:</strong> Images of doctor prescriptions, handwritten lists of medications, and health inquiry details sent to our staff on WhatsApp or spoken over the phone.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">2. How We Use Your Information</h2>
        <p className="text-sm leading-relaxed">
          We use your information exclusively to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Verify prescription validity under Indian drug regulatory acts (Drugs & Cosmetics Act).</li>
          <li>Confirm medicine availability and calculate billing amounts.</li>
          <li>Package and physically deliver items to your home coordinates.</li>
          <li>Contact you to clarify dosages, alternative brand options, or delivery times.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">3. Confidentiality and Security</h2>
        <p className="text-sm leading-relaxed">
          Your prescription information is handled with the highest level of confidentiality. Access to prescription pictures and lists is restricted solely to the certified pharmacists and delivery personnel on duty. We do not sell, rent, share, or disclose your medical history or contact details to third-party marketing companies.
        </p>
        <p className="text-sm leading-relaxed">
          Please note that chat exchanges are conducted on WhatsApp, which uses end-to-end encryption. However, users are advised to maintain security of their personal devices to prevent unauthorized access to their chats.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">4. Retention of Records</h2>
        <p className="text-sm leading-relaxed">
          In accordance with pharmaceutical regulations in Chhattisgarh and federal drug laws in India, we keep records of computerized sales invoices and original prescriptions (as required) for licensing audits. These records are archived securely.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-800">5. Contact Information</h2>
        <p className="text-sm leading-relaxed">
          If you have questions regarding your data privacy, you can visit our physical counter in Naveen Bazar, Kawardha, or call us directly at <strong>{storeInfo.phone}</strong>.
        </p>
      </section>

    </div>
  );
}
