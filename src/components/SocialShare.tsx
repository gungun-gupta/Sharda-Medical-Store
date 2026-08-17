'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy, MessageSquare } from 'lucide-react';

interface SocialShareProps {
  title?: string;
  url?: string;
  label?: string;
  className?: string;
}

export default function SocialShare({
  title = "Sharda Medical Store — Trusted Medical Store in Kawardha",
  url = "https://sharda-medical-store.vercel.app",
  label = "Share this page:",
  className = "",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareText = `${title} - Doorstep Medicine Home Delivery & Wholesale Pharmacy in Kawardha`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(shareText);

  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2.5 text-xs ${className}`}>
      {label && <span className="text-slate-500 font-semibold">{label}</span>}
      
      {/* WhatsApp Share */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share Sharda Medical Store Kawardha on WhatsApp"
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share Sharda Medical Store Kawardha on Facebook"
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-semibold transition-colors"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        <span>Facebook</span>
      </a>

      {/* Copy / Native Share */}
      <button
        onClick={handleNativeShare}
        aria-label="Share or copy page link"
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            <span className="text-emerald-700 font-bold">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Share Link</span>
          </>
        )}
      </button>
    </div>
  );
}
