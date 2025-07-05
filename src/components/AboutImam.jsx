import React from 'react';
import { motion } from 'framer-motion';

// AboutImam: Section for Imam's bio and intro (placeholder, ready for API integration)
export default function AboutImam({ lang = 'en' }) {
  // Section heading translations
  const heading = {
    en: 'About the Imam',
    ar: 'عن الإمام',
  };
  const bio = {
    en: 'A devoted Imam whose life is dedicated to spreading knowledge, nurturing faith, and leading the Jammatu Ridwanullahi-l-Akbar congregation with wisdom, sincerity, and unwavering love for Allah ﷻ. His guidance inspires hearts and strengthens our path toward righteousness.',
    ar: 'سيرة الإمام: قائد متواضع يوجه مجتمعنا بالحكمة والرحمة والتفاني في سبيل الله.',
  };
  return (
    <section className="relative py-10 md:py-14 flex justify-center items-center w-full min-w-0 bg-gradient-to-b from-gold-50/20 via-green-50/40 to-gold-50/10 dark:from-zinc-900 dark:to-black overflow-hidden">
      {/* Subtle geometric pattern overlay (supports dark mode) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 text-gold-400 dark:text-gold-900">
        <img src="/assets/svg/pattern-section.svg" alt="Islamic pattern" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-full min-w-0 mx-auto max-w-3xl rounded-2xl md:rounded-3xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 border border-gold-200 md:border-2 md:border-gold-400 px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
        style={{ boxShadow: '0 4px 16px 0 rgba(212,175,55,0.07), 0 1px 8px 0 rgba(0,0,0,0.08)' }}
      >
        {/* Imam Image */}
        <img
          src="/assets/img/imam.jpg"
          alt="Imam"
          loading="lazy"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-gold-200 shadow-lg mb-4 md:mb-0"
          style={{ background: '#fff' }}
        />
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="font-amiri text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 drop-shadow-sm tracking-wide"
            style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}>
            {heading[lang]}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto leading-relaxed text-center md:text-left" style={{lineHeight:'1.7'}}>
            {bio[lang]}
          </p>
        </div>
      </motion.div>
    </section>
  );
} 