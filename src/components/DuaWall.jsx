import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOLD = '#ffe082';
const categories = [
  {
    key: 'health',
    label: 'Good Health',
    dua: {
      arabic: 'اللّهُمَّ عَافِنِي فِي بَدَنِي، اللّهُمَّ عَافِنِي فِي سَمْعِي، اللّهُمَّ عَافِنِي فِي بَصَرِي',
      transliteration: 'Allahumma ‘aafinee fee badanee, Allahumma ‘aafinee fee sam‘ee, Allahumma ‘aafinee fee basaree',
      translation: 'O Allah, grant my body, hearing, and sight well-being.',
      reference: 'Abu Dawood 5090',
    },
  },
  {
    key: 'travel',
    label: 'Travel',
    dua: {
      arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',
      transliteration: 'Subhana alladhi sakhkhara lana hadha wama kunna lahu muqrineen',
      translation: 'Glory to Him who has subjected this to us, and we could never have accomplished it (by ourselves).',
      reference: 'Qur’an 43:13',
    },
  },
  {
    key: 'sleep',
    label: 'Sleep',
    dua: {
      arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
      transliteration: 'Bismika Allahumma amootu wa ahya',
      translation: 'In Your name, O Allah, I die and I live.',
      reference: 'Bukhari 6324',
    },
  },
  {
    key: 'anxiety',
    label: 'Anxiety',
    dua: {
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
      transliteration: 'Allahumma inni a’udhu bika minal-hammi wal-hazan',
      translation: 'O Allah, I seek refuge in You from anxiety and sorrow.',
      reference: 'Bukhari 2893',
    },
  },
  {
    key: 'home',
    label: 'Entering Home',
    dua: {
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ',
      transliteration: 'Allahumma inni as’aluka khayral-mawlaji wa khayral-makhraji',
      translation: 'O Allah, I ask You for the best entering and the best exiting.',
      reference: 'Abu Dawood 5096',
    },
  },
  {
    key: 'bathroom',
    label: 'Leaving Bathroom',
    dua: {
      arabic: 'غُفْرَانَكَ',
      transliteration: 'Ghufranak',
      translation: 'I seek Your forgiveness.',
      reference: 'Abu Dawood 30',
    },
  },
  {
    key: 'gratitude',
    label: 'Gratitude',
    dua: {
      arabic: 'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ',
      transliteration: 'Alhamdu lillahi allathee bini’matihi tatimmu assalihat',
      translation: 'All praise is for Allah by whose favor good works are accomplished.',
      reference: 'Ibn Majah 3803',
    },
  },
  {
    key: 'seeking-knowledge',
    label: 'Seeking Knowledge',
    dua: {
      arabic: 'رَبِّ زِدْنِي عِلْمًا',
      transliteration: 'Rabbi zidni ilma',
      translation: 'My Lord, increase me in knowledge.',
      reference: 'Qur’an 20:114',
    },
  },
  {
    key: 'parents',
    label: 'For Parents',
    dua: {
      arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      transliteration: 'Rabbi irhamhuma kama rabbayani sagheera',
      translation: 'My Lord, have mercy upon them as they brought me up [when I was] small.',
      reference: 'Qur’an 17:24',
    },
  },
  {
    key: 'forgiveness',
    label: 'Forgiveness',
    dua: {
      arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ',
      transliteration: 'Rabbi ighfir li waliwalidayya walilmu’mineena',
      translation: 'My Lord, forgive me, my parents, and the believers.',
      reference: 'Qur’an 14:41',
    },
  },
  {
    key: 'guidance',
    label: 'Guidance',
    dua: {
      arabic: 'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',
      transliteration: 'Allahumma ihdini wa saddidni',
      translation: 'O Allah, guide me and keep me steadfast.',
      reference: 'Muslim 2725',
    },
  },
  {
    key: 'protection',
    label: 'Protection',
    dua: {
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ',
      transliteration: 'Allahumma inni a’udhu bika min sharri ma amiltu wa min sharri ma lam a’mal',
      translation: 'O Allah, I seek refuge in You from the evil of what I have done and from the evil of what I have not done.',
      reference: 'Muslim 2716',
    },
  },
  {
    key: 'children',
    label: 'For Children',
    dua: {
      arabic: 'رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ',
      transliteration: 'Rabbi hab li mina assaliheen',
      translation: 'My Lord, grant me [offspring] from among the righteous.',
      reference: 'Qur’an 37:100',
    },
  },
  {
    key: 'relief',
    label: 'Relief from Hardship',
    dua: {
      arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
      transliteration: 'Hasbunallahu wa ni’mal wakeel',
      translation: 'Sufficient for us is Allah, and [He is] the best Disposer of affairs.',
      reference: 'Qur’an 3:173',
    },
  },
  {
    key: 'marriage',
    label: 'Marriage',
    dua: {
      arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
      transliteration: 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a’yunin',
      translation: 'Our Lord, grant us from among our wives and offspring comfort to our eyes.',
      reference: 'Qur’an 25:74',
    },
  },
  {
    key: 'success',
    label: 'Success',
    dua: {
      arabic: 'رَبِّ يَسِّرْ وَلَا تُعَسِّرْ',
      transliteration: 'Rabbi yassir wa la tu’assir',
      translation: 'My Lord, make it easy and do not make it difficult.',
      reference: 'Ahmad 6/91',
    },
  },
];

export default function DuaWall() {
  const [openCategory, setOpenCategory] = useState(categories[0].key);

  return (
    <section id="duawall" className="relative py-16 px-0 w-full min-w-0 bg-gradient-to-br from-gold-50 via-white to-gold-100 dark:from-black dark:via-gray-900 dark:to-gold-950 min-h-[60vh]">
      {/* Geometric SVG background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <img src="/assets/svg/pattern-section.svg" alt="pattern" className="w-full h-full object-cover" />
      </div>
      <div className="relative w-full min-w-0 px-0 mx-0 md:mx-auto md:max-w-3xl z-10">
        <h2 className="text-3xl md:text-4xl font-amiri font-bold text-center mb-8 text-gold-600 drop-shadow-lg" style={{ color: GOLD }}>
          Du’a Wall
        </h2>
        <div className="flex flex-col gap-4">
          {categories.map((cat) => (
            <div key={cat.key} className="rounded-xl shadow-lg bg-white/90 dark:bg-black/80 border border-gold-200 dark:border-gold-900 overflow-hidden">
              <button
                className={`w-full flex justify-between items-center px-6 py-4 font-amiri text-xl md:text-2xl font-bold transition-colors duration-200 focus:outline-none ${openCategory === cat.key ? 'text-gold-700' : 'text-gray-800 dark:text-gray-100'}`}
                onClick={() => setOpenCategory(openCategory === cat.key ? null : cat.key)}
                aria-expanded={openCategory === cat.key}
                style={{ color: openCategory === cat.key ? GOLD : undefined }}
              >
                <span>{cat.label}</span>
                <span className="ml-2 text-gold-400 text-2xl">{openCategory === cat.key ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openCategory === cat.key && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 pb-6"
                  >
                    <div className="flex flex-col gap-2 mt-2">
                      <span
                        className="font-amiri text-2xl md:text-3xl text-center"
                        style={{ color: GOLD, textShadow: '0 2px 8px #d4af37, 0 0 2px #fff', lineHeight: 1.7 }}
                        dir="rtl"
                      >
                        {cat.dua.arabic}
                      </span>
                      <span className="text-lg md:text-xl text-gold-700 text-center font-semibold italic">
                        {cat.dua.transliteration}
                      </span>
                      <span className="text-base md:text-lg text-gray-800 dark:text-gray-100 text-center">
                        {cat.dua.translation}
                      </span>
                      <span className="text-sm text-gold-500 text-center mt-2">
                        {cat.dua.reference}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 