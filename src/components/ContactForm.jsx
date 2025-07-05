import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const GOLD = '#ffe082';
const WHATSAPP_NUMBER = '2349164275968'; // Real number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function ContactForm({ lang = 'en' }) {
  const heading = {
    en: 'Contact Us',
    ar: 'اتصل بنا',
  };
  const desc = {
    en: 'Reach out to us for any questions, support, or community involvement.',
    ar: 'تواصل معنا لأي استفسار أو دعم أو مشاركة مجتمعية.',
  };
  return (
    <section className="relative py-14 px-4 md:px-0 bg-gradient-to-br from-gold-50 via-white to-gold-100 dark:from-black dark:via-gray-900 dark:to-gold-950 min-h-[30vh] overflow-hidden">
      {/* Geometric SVG background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <img src="/assets/svg/pattern-section.svg" alt="pattern" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="rounded-2xl shadow-2xl bg-white/95 dark:bg-zinc-900/95 border border-gold-200 md:border-2 md:border-gold-400 px-6 md:px-10 py-10 flex flex-col items-center space-y-8"
          style={{ boxShadow: '0 4px 24px 0 rgba(212,175,55,0.10), 0 1px 8px 0 rgba(0,0,0,0.10)' }}
        >
          <h2 className="font-amiri text-3xl md:text-4xl font-bold text-center mb-2 text-gold-600 drop-shadow-lg" style={{ color: GOLD }}>
            {heading[lang]}
          </h2>
          <p className="max-w-lg mx-auto text-gray-800 dark:text-gray-100 text-center text-lg md:text-xl font-amiri">
            {desc[lang]}
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-amiri text-xl font-bold shadow-lg border-2 border-gold-700 focus:outline-none focus:ring-4 focus:ring-gold-300 transition-all duration-200"
            style={{ textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp className="text-3xl text-white drop-shadow" style={{ color: GOLD }} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
} 