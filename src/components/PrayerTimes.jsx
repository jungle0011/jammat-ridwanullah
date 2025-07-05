import React from 'react';
import { motion } from 'framer-motion';

// PrayerTimes: Shows daily prayer times (placeholder, ready for API integration)
export default function PrayerTimes({ lang = 'en' }) {
  // Section heading translations
  const heading = {
    en: 'Prayer Times',
    ar: 'مواقيت الصلاة',
  };
  // In the future, fetch prayer times from Aladhan API
  const prayers = [
    { name: { en: 'Fajr', ar: 'الفجر' }, time: '05:00' },
    { name: { en: 'Dhuhr', ar: 'الظهر' }, time: '12:30' },
    { name: { en: 'Asr', ar: 'العصر' }, time: '15:45' },
    { name: { en: 'Maghrib', ar: 'المغرب' }, time: '18:20' },
    { name: { en: 'Isha', ar: 'العشاء' }, time: '19:45' },
  ];
  return (
    <section className="relative py-10 md:py-14 flex justify-center items-center w-full min-w-0 bg-gradient-to-b from-gold-100/60 via-green-200/60 to-gold-50/40 dark:from-zinc-900 dark:to-black overflow-hidden">
      {/* Geometric SVG background pattern (identical to Dua Wall) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <img src="/assets/svg/pattern-section.svg" alt="pattern" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 w-full min-w-0 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full max-w-3xl mx-auto rounded-2xl md:rounded-3xl shadow-2xl bg-white/90 dark:bg-zinc-900/90 border border-gold-200 md:border-2 md:border-gold-400 px-4 md:px-8 py-8 md:py-10 flex flex-col items-center space-y-6 md:space-y-8"
          style={{ boxShadow: '0 4px 16px 0 rgba(212,175,55,0.07), 0 1px 8px 0 rgba(0,0,0,0.08)' }}
        >
          <h2 className="font-amiri text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 drop-shadow-sm tracking-wide"
            style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}>
            {heading[lang]}
          </h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {prayers.map((prayer, idx) => (
              <motion.div
                key={prayer.name.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.12 * idx, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center bg-white/95 dark:bg-zinc-800/90 rounded-xl md:rounded-2xl shadow-lg border border-gold-100 md:border-gold-300 px-2 md:px-4 py-4 md:py-5 space-y-1 md:space-y-2"
                style={{ boxShadow: '0 2px 8px 0 rgba(212,175,55,0.07), 0 1px 4px 0 rgba(0,0,0,0.08)' }}
              >
                <span className="font-amiri text-base md:text-lg font-bold tracking-wide"
                  style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}>
                  {prayer.name[lang]}
                </span>
                <span className="text-lg md:text-xl text-gray-900 dark:text-gray-100 font-semibold">
                  {prayer.time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 