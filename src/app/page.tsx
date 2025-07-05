'use client';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VerseOfTheDay from '@/components/VerseOfTheDay';
import PrayerTimes from '@/components/PrayerTimes';
import Footer from '@/components/Footer';
import BackgroundLullaby from '@/components/BackgroundLullaby';
import { motion } from 'framer-motion';
import { FaStarAndCrescent } from 'react-icons/fa';
import './App.css'; // For custom patterns or extra CSS
import AboutImam from '@/components/AboutImam';
import Gallery from '@/components/Gallery';
import DuaWall from '@/components/DuaWall';
import ContactForm from '@/components/ContactForm';
import AudioPlayer from '@/components/AudioPlayer';
import Donations from '@/components/Donations';

const sectionOrder = [
  { id: 'home', ref: 'hero' },
  { id: 'prayer-times', ref: 'prayer' },
  { id: 'verse', ref: 'verse' },
  { id: 'imam', ref: 'imam' },
  { id: 'gallery', ref: 'gallery' },
  { id: 'duawall', ref: 'duawall' },
  { id: 'contact', ref: 'contact' },
];

function usePageLoaded(minTime = 1200, fadeTime = 700) {
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const timerRef = useRef<number>(Date.now());

  useEffect(() => {
    const onLoad = () => {
      const elapsed = Date.now() - timerRef.current;
      const remaining = Math.max(0, minTime - elapsed);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setShowLoader(false), fadeTime);
      }, remaining);
    };
    timerRef.current = Date.now();
    if (typeof window !== 'undefined' && document.readyState === 'complete') {
      onLoad();
    } else if (typeof window !== 'undefined') {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, [minTime, fadeTime]);
  return { showLoader, fadeOut };
}

export default function Page() {
  const [verse] = useState('Indeed, Allah is with those who fear Him and those who are doers of good. (Qur\'an 16:128)');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const [lang, setLang] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const { showLoader, fadeOut } = usePageLoaded(1200, 700);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      const offsets = sectionOrder.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!showLoader) return;
    if (fadeOut) {
      if (typeof window !== 'undefined') {
        requestAnimationFrame(() => {});
      }
    }
  }, [fadeOut, showLoader]);

  return (
    <>
      <div className={`font-amiri bg-gradient-to-b from-green-50 to-white text-gray-800 min-h-screen ${darkMode ? 'dark' : ''}`}> 
        <BackgroundLullaby />
        <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />
        <div id="home"><HeroSection lang={lang} /></div>
        <div id="prayer-times"><PrayerTimes lang={lang} /></div>
        <div id="verse"><VerseOfTheDay verse={verse} lang={lang} /></div>
        <div id="audio"><AudioPlayer lang={lang} /></div>
        <div id="imam"><AboutImam lang={lang} /></div>
        <div id="gallery"><Gallery /></div>
        <div id="duawall"><DuaWall /></div>
        <div id="donations"><Donations /></div>
        <div id="contact"><ContactForm lang={lang} /></div>
        <Footer />
      </div>
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className={`fixed inset-0 z-[9999] flex items-center justify-center ${fadeOut ? 'bg-transparent' : 'bg-black/90 dark:bg-black/95'}`}
          style={{ pointerEvents: 'auto', backgroundColor: fadeOut ? 'transparent' : '#111' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <FaStarAndCrescent className="text-[5rem] md:text-[7rem]" style={{ color: '#ffe082', filter: 'drop-shadow(0 0 24px #ffe082)' }} />
            <span className="mt-6 font-amiri text-2xl md:text-3xl text-gold-200 tracking-wide" style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}>
              جماعة رضوان الله الاكبر
            </span>
          </motion.div>
        </motion.div>
      )}
    </>
  );
} 