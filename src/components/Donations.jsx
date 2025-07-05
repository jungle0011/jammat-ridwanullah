import React from 'react';

const GOLD = '#ffe082';

export default function Donations() {
  return (
    <section className="relative py-14 px-4 md:px-0 bg-gradient-to-br from-gold-50 via-white to-gold-100 dark:from-black dark:via-gray-900 dark:to-gold-950 min-h-[40vh] overflow-hidden">
      {/* Geometric SVG background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <img src="/assets/svg/pattern-section.svg" alt="pattern" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="rounded-2xl shadow-2xl bg-white/95 dark:bg-zinc-900/95 border border-gold-200 md:border-2 md:border-gold-400 px-6 md:px-10 py-10 flex flex-col items-center space-y-8"
          style={{ boxShadow: '0 4px 24px 0 rgba(212,175,55,0.10), 0 1px 8px 0 rgba(0,0,0,0.10)' }}
        >
          <h2 className="font-amiri text-3xl md:text-4xl font-bold text-center mb-2 text-gold-600 drop-shadow-lg" style={{ color: GOLD }}>
            Support the Masjid
          </h2>
          {/* Mosque images placeholders replaced with real images */}
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/assets/img/masjid1.jpg" alt="Masjid 1" className="w-48 h-32 object-cover rounded-xl border-2 border-gold-200 shadow-inner" loading="lazy" />
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/assets/img/masjid2.jpg" alt="Masjid 2" className="w-48 h-32 object-cover rounded-xl border-2 border-gold-200 shadow-inner" loading="lazy" />
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/assets/img/masjid3.jpg" alt="Masjid 3" className="w-48 h-32 object-cover rounded-xl border-2 border-gold-200 shadow-inner" loading="lazy" />
            </div>
          </div>
          <p className="max-w-xl mx-auto text-gray-800 dark:text-gray-100 text-center text-lg md:text-xl font-amiri">
            Contribute to our ongoing projects and help us serve the community better.
          </p>
          <a href="/donate" className="bg-gold-600 text-white px-8 py-3 rounded-full shadow hover:bg-gold-700 transition font-amiri text-xl font-bold border-2 border-gold-700 focus:outline-none focus:ring-4 focus:ring-gold-300 block text-center">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
} 