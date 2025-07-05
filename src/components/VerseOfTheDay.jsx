import React from 'react';
import { motion } from 'framer-motion';

export default function VerseOfTheDay({ verse, lang = 'en' }) {
  // Section heading translations
  const heading = {
    en: 'Verse of the Day',
    ar: 'آية اليوم',
  };
  // Example verse (replace with real API in future)
  const verseArabic = 'إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُم مُّحْسِنُونَ';
  const verseEnglish = "Indeed, Allah is with those who fear Him and those who are doers of good. (Qur'an 16:128)";
  return (
    <section className="relative py-8 md:py-12 flex justify-center items-center bg-gradient-to-b from-gold-100/60 via-green-200/60 to-gold-50/40 dark:from-black dark:to-zinc-900 overflow-hidden">
      {/* Geometric SVG background pattern (identical to Dua Wall) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <img src="/assets/svg/pattern-section.svg" alt="pattern" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 w-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full max-w-2xl mx-auto rounded-2xl md:rounded-3xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 border border-gold-200 md:border-2 md:border-gold-400 px-4 md:px-8 py-8 md:py-10 flex flex-col items-center space-y-4 md:space-y-6"
          style={{ boxShadow: '0 4px 16px 0 rgba(212,175,55,0.07), 0 1px 8px 0 rgba(0,0,0,0.08)' }}
        >
          <h2 className="font-amiri text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 drop-shadow-sm tracking-wide"
            style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}>
            {heading[lang]}
          </h2>
          <div className="flex flex-col items-center gap-2 md:gap-3 w-full">
            <span className="font-amiri text-2xl md:text-3xl font-extrabold text-center leading-snug"
              style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff', lineHeight: '1.7' }}>
              {verseArabic}
            </span>
            <span className="italic text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-100 max-w-xl mx-auto leading-relaxed text-center" style={{lineHeight:'1.7'}}>
              {verseEnglish}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 