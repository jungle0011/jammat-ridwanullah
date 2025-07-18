import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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

export default function Navbar({ lang, setLang, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false); // Close menu on mobile after click
    }
  };

  // Handle RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Persist dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/Brand */}
        <span
          className="font-amiri text-2xl md:text-3xl font-bold text-gold-400 tracking-wide select-none whitespace-nowrap"
          style={{
            textShadow:
              '0 2px 8px rgba(0,0,0,0.25), 0 0 8px #d4af37, 0 0 2px #fff',
            color: GOLD_BRIGHT,
            fontSize: lang === 'ar' ? '1.5rem' : undefined,
            letterSpacing: lang === 'ar' ? '0.01em' : undefined,
          }}
        >
          جماعة رضوان الله الاكبر (w t l)
        </span>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-4 md:gap-8 items-center text-lg font-amiri">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative px-2 py-1 transition-colors duration-200 focus:outline-none ${
                  activeSection === link.id
                    ? 'text-gold-600'
                    : 'text-gray-800 dark:text-gray-100 hover:text-gold-500'
                }`}
                style={{ fontWeight: activeSection === link.id ? 700 : 400, fontSize: lang === 'ar' ? '1.1rem' : undefined }}
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
        {/* Language Toggle (desktop only) */}
        <div className="hidden md:flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setLang((l) => (l === 'en' ? 'ar' : 'en'))}
            className="px-3 py-2 rounded-full border-2 border-gold-300 bg-white dark:bg-black font-bold shadow hover:bg-gold-50 dark:hover:bg-gold-900 transition text-lg whitespace-nowrap"
            aria-label="Switch language"
            style={{ color: GOLD_BRIGHT, textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
        </div>
        {/* Hamburger menu for mobile (always visible) */}
        <button
          className="md:hidden p-2 rounded border border-gold-200 bg-white dark:bg-black text-gold-700 ml-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
          style={{ zIndex: 101 }}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
      {/* Mobile Side-Drawer Menu */}
      {menuOpen && (
        <>
          {/* Subtle overlay */}
          <div className="fixed inset-0 z-[99] bg-black/30" onClick={() => setMenuOpen(false)} />
          {/* Side drawer */}
          <div className="fixed top-0 right-0 z-[100] h-full w-4/5 max-w-xs bg-white dark:bg-zinc-900 shadow-2xl flex flex-col px-6 py-8 animate-slide-in-right overflow-y-auto" style={{minHeight:'100vh'}}>
            <div className="flex justify-between items-center mb-8">
              <span
                className="font-amiri text-2xl font-bold text-gold-400 tracking-wide select-none whitespace-nowrap"
                style={{ color: GOLD_BRIGHT }}
              >
                {lang === 'ar' ? 'القائمة' : 'Menu'}
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-gold-700 text-3xl">
                <FaTimes size={32} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 text-2xl font-amiri w-full items-center">
              {navLinks.map((link) => (
                <li key={link.id} className="w-full text-center">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-center px-2 py-3 rounded transition-colors duration-200 focus:outline-none ${
                      activeSection === link.id
                        ? 'text-gold-600 bg-gold-50 dark:bg-gold-900'
                        : 'text-gray-800 dark:text-gray-100 hover:text-gold-500'
                    }`}
                    style={{ fontWeight: activeSection === link.id ? 700 : 400, fontSize: lang === 'ar' ? '1.2rem' : undefined }}
                  >
                    {lang === 'ar' ? link.label.ar : link.label.en}
                  </button>
                </li>
              ))}
            </ul>
            {/* Language Toggle (mobile only) */}
            <div className="mt-10 flex justify-center w-full md:hidden">
              <button
                onClick={() => setLang((l) => (l === 'en' ? 'ar' : 'en'))}
                className="px-6 py-3 rounded-full border-2 border-gold-300 bg-white dark:bg-black font-bold shadow hover:bg-gold-50 dark:hover:bg-gold-900 transition text-xl"
                aria-label="Switch language"
                style={{ color: GOLD_BRIGHT, textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}
              >
                {lang === 'en' ? 'العربية' : 'EN'}
              </button>
            </div>
          </div>
          <style jsx global>{`
            @keyframes slide-in-right {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </>
      )}
    </nav>
  );
} 