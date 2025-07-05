import React from 'react';
import { motion } from 'framer-motion';
import { FaMosque } from 'react-icons/fa';

// Use the user's uploaded Quran and prayer beads image from local assets
const QURAN_BG = '/assets/img/quran-books.jpg'; // Place the uploaded image at public/assets/img/quran-books.jpg

export default function HeroSection({ lang = 'en' }) {
  // Text content
  const title = {
    en: 'Jammatu Ridwanullahi-l-Akbar',
    ar: 'جمعة رضوان الله الأكبر',
  };
  const subtitle = {
    en: 'A spiritual home for unity, worship, knowledge, and peace.',
    ar: 'بيت روحي للوحدة والعبادة والمعرفة والسلام.',
  };
  const cta = {
    en: 'Support the Mission',
    ar: 'ادعم الرسالة',
  };

  return (
    <section className="relative flex items-center justify-center min-h-[100vh] pt-8 pb-8 px-4 overflow-hidden bg-black">
      {/* Quran/prayer beads background image */}
      <picture>
        <source srcSet={QURAN_BG.replace('.jpg', '.webp')} type="image/webp" />
        <img
          src={QURAN_BG}
          alt="Qur'an and prayer beads background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.7) blur(0.5px)' }}
          aria-hidden="true"
        />
      </picture>
      {/* Gold/black gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-gold-100/30 z-10" />
      {/* SVG geometric pattern with floating animation */}
      <motion.img
        src="/assets/svg/pattern-hero.svg"
        alt="Islamic pattern"
        className="absolute left-1/2 top-1/2 w-[120vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-25 z-20 pointer-events-none"
        initial={{ y: -30 }}
        animate={{ y: [ -30, 30, -30 ] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      {/* Hero content */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-3xl mx-auto px-8 py-16 md:py-24 rounded-3xl shadow-2xl bg-black/80 backdrop-blur-lg space-y-10 border border-gold-200"
        style={{
          boxShadow: '0 8px 48px 0 rgba(0,0,0,0.45)',
        }}
      >
        {/* Animated gold mosque icon */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-2"
        >
          <FaMosque className="text-[4.5rem] md:text-[6rem] text-gold-500 drop-shadow-lg" />
        </motion.div>
        {/* Main site title for SEO */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
          className="font-amiri text-white text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight drop-shadow-2xl"
          style={{
            textShadow: '0 2px 24px #000, 0 0 12px #d4af37, 0 0 2px #fff',
            color: '#fff',
          }}
          as="h1"
        >
          {title[lang]}
        </motion.h1>
        {/* Subtitle with scroll-in */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="text-2xl md:text-3xl text-white/95 font-light max-w-2xl mx-auto mb-4 drop-shadow"
          style={{
            textShadow: '0 2px 16px #000, 0 0 8px #d4af37',
            color: '#fff',
          }}
        >
          {subtitle[lang]}
        </motion.p>
        {/* Premium CTA button */}
        <motion.a
          href="/donate"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="inline-block px-12 py-6 rounded-full bg-gold-500 text-white text-2xl font-amiri font-bold shadow-xl hover:bg-gold-600 transition-all duration-200 border-2 border-gold-700 focus:outline-none focus:ring-4 focus:ring-gold-300"
          style={{ letterSpacing: '0.03em' }}
        >
          {cta[lang]}
        </motion.a>
      </div>
    </section>
  );
} 