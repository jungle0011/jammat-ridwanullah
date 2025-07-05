import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaHeadphones } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Surah data with full recitation URLs (Mishary Alafasy, Al Quran Cloud CDN)
const SURAHS = [
  {
    id: '001',
    number: 1,
    name: { en: 'Al-Fatiha', ar: 'الفاتحة' },
    url: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/1.mp3',
  },
  {
    id: '108',
    number: 108,
    name: { en: 'Al-Kawthar', ar: 'الكوثر' },
    url: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/108.mp3',
  },
  {
    id: '112',
    number: 112,
    name: { en: 'Al-Ikhlas', ar: 'الإخلاص' },
    url: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/112.mp3',
  },
  {
    id: '113',
    number: 113,
    name: { en: 'Al-Falaq', ar: 'الفلق' },
    url: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/113.mp3',
  },
  {
    id: '114',
    number: 114,
    name: { en: 'Al-Nas', ar: 'الناس' },
    url: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/114.mp3',
  },
];

export default function AudioPlayer({ lang = 'en' }) {
  const [selectedSurah, setSelectedSurah] = useState(SURAHS[0]);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const handleSurahChange = (e) => {
    const surah = SURAHS.find(s => s.id === e.target.value);
    setSelectedSurah(surah);
    setIsPlaying(false);
    setError(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      setIsLoading(true);
      setError(null);
      audioRef.current.play().catch(() => {
        setError('Unable to play audio. Please try again.');
        setIsLoading(false);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Reset play state when audio ends
  const handleEnded = () => setIsPlaying(false);
  const handleCanPlay = () => setIsLoading(false);
  const handleWaiting = () => setIsLoading(true);
  const handleError = () => {
    setError('Unable to load audio. Please try another Surah.');
    setIsLoading(false);
    setIsPlaying(false);
  };

  // Do NOT pause audio when closing widget
  const handleWidgetClose = () => {
    setIsWidgetOpen(false);
  };

  return (
    <div className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col items-end">
      {/* Sticky Floating Button */}
      <button
        onClick={() => setIsWidgetOpen((o) => !o)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-gold-500 hover:bg-gold-600 border-2 border-gold-700 focus:outline-none focus:ring-4 focus:ring-gold-300 transition-all duration-200 ${isWidgetOpen ? 'opacity-60' : ''}`}
        aria-label={isWidgetOpen ? 'Close Qur\'an Recitation' : 'Open Qur\'an Recitation'}
        style={{ color: '#fff', fontSize: 28, boxShadow: '0 2px 16px #d4af37, 0 0 2px #fff', position: 'sticky' }}
      >
        <FaHeadphones />
      </button>
      {/* Widget Panel */}
      <AnimatePresence>
        {isWidgetOpen && (
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 100 : 40, scale: isMobile ? 1 : 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 100 : 40, scale: isMobile ? 1 : 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`mt-3 rounded-2xl shadow-2xl bg-white/95 dark:bg-zinc-900/95 border-2 border-gold-400 px-5 py-6 flex flex-col items-center space-y-5 ${isMobile ? 'fixed left-1/2 -translate-x-1/2 bottom-4 w-[95vw] max-w-sm z-[120] overflow-y-auto' : 'w-80 max-w-[95vw]'}`}
            style={{ boxShadow: '0 4px 24px 0 rgba(212,175,55,0.13), 0 1px 8px 0 rgba(0,0,0,0.10)' }}
          >
            <div className="w-full flex justify-between items-center mb-2">
              <h2 className="font-amiri text-xl font-bold text-gold-700 text-center" style={{ textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}>
                {lang === 'ar' ? 'استمع لتلاوة القرآن' : "Listen to Qur'an Recitation"}
              </h2>
              <button
                onClick={handleWidgetClose}
                className="ml-2 p-1 rounded-full bg-gold-100 hover:bg-gold-200 text-gold-700"
                aria-label="Close recitation widget"
              >
                ×
              </button>
            </div>
            {/* Surah Selector */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full justify-center">
              <label htmlFor="surah-select" className="font-amiri text-lg font-bold"
                style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}>
                {lang === 'ar' ? 'اختر السورة' : 'Choose Surah:'}
              </label>
              <select
                id="surah-select"
                value={selectedSurah.id}
                onChange={handleSurahChange}
                className="rounded-xl border-2 border-gold-300 bg-white dark:bg-zinc-900 text-lg font-amiri px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400 shadow"
                style={{ color: '#d4af37', minWidth: 120 }}
              >
                {SURAHS.map(surah => (
                  <option key={surah.id} value={surah.id} className="text-gold-700">
                    {surah.name.en} / {surah.name.ar}
                  </option>
                ))}
              </select>
            </div>
            {/* Audio Controls */}
            <div className="flex items-center gap-4 w-full justify-center">
              <button
                onClick={toggleAudio}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-gold-500 hover:bg-gold-600 border-2 border-gold-700 shadow-lg focus:outline-none focus:ring-4 focus:ring-gold-300 transition-all duration-200"
                style={{ color: '#fff', fontSize: 28, boxShadow: '0 2px 16px #d4af37, 0 0 2px #fff' }}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isLoading ? <span className="loader" /> : isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <audio
                ref={audioRef}
                src={selectedSurah.url}
                onEnded={handleEnded}
                onCanPlay={handleCanPlay}
                onWaiting={handleWaiting}
                onError={handleError}
                className="hidden"
                preload="none"
              />
            </div>
            {/* Error Message */}
            {error && (
              <div className="text-red-600 text-sm text-center font-semibold mt-2">
                {error}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Tailwind animation (add to global CSS if not present):
// @keyframes shimmer { 100% { transform: translateX(100%); } }
// .animate-shimmer { animation: shimmer 1.2s linear infinite; background-size: 200% 100%; background-position: -100% 0; } 