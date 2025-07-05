import React, { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const GOLD = '#d4af37';
const GOLD_BRIGHT = '#ffe082';
const navLinks = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'prayer-times', label: { en: 'Prayer Times', ar: 'مواقيت الصلاة' } },
  { id: 'verse', label: { en: 'Verse of the Day', ar: 'آية اليوم' } },
  { id: 'imam', label: { en: 'About Imam', ar: 'عن الإمام' } },
  { id: 'gallery', label: { en: 'Gallery', ar: 'المعرض' } },
  { id: 'duawall', label: { en: 'Du’a Wall', ar: 'جدار الدعاء' } },
  { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
];

export default function Navbar({ lang, setLang, darkMode, setDarkMode, activeSection }) {
  // Smooth scroll handler
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Persist dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/Brand */}
        <span
          className="font-amiri text-2xl md:text-3xl font-bold text-gold-400 tracking-wide select-none"
          style={{
            textShadow:
              '0 2px 8px rgba(0,0,0,0.25), 0 0 8px #d4af37, 0 0 2px #fff',
            color: GOLD_BRIGHT,
          }}
        >
          جماعة رضوان الله الاكبر (w t l)
        </span>
        {/* Nav Links */}
        <ul className="flex gap-4 md:gap-8 items-center text-lg font-amiri">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative px-2 py-1 transition-colors duration-200 focus:outline-none ${
                  activeSection === link.id
                    ? 'text-gold-600' // Gold accent for active
                    : 'text-gray-800 dark:text-gray-100 hover:text-gold-500'
                }`}
                style={{ fontWeight: activeSection === link.id ? 700 : 400 }}
              >
                {lang === 'ar' ? link.label.ar : link.label.en}
                <span
                  className={`absolute left-0 right-0 -bottom-1 h-1 rounded ${
                    activeSection === link.id ? 'bg-gold-400' : 'bg-transparent'
                  } transition-all duration-300`}
                  style={{ background: activeSection === link.id ? GOLD : 'transparent' }}
                />
              </button>
            </li>
          ))}
        </ul>
        {/* Language Toggle */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLang((l) => (l === 'en' ? 'ar' : 'en'))}
            className="px-4 py-2 rounded-full border-2 border-gold-300 bg-white dark:bg-black font-bold shadow hover:bg-gold-50 dark:hover:bg-gold-900 transition text-lg"
            aria-label="Switch language"
            style={{ color: GOLD_BRIGHT, textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
} 