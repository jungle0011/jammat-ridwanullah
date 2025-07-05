'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VerseOfTheDay from '@/components/VerseOfTheDay';
import PrayerTimes from '@/components/PrayerTimes';
import Footer from '@/components/Footer';
import BackgroundLullaby from '@/components/BackgroundLullaby';
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

  return (
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
  );
} 