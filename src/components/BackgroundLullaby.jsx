import React, { useRef, useState } from 'react';
import { FaMusic, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

// Use a local, license-free Arabic instrumental for maximum reliability
const LULLABY_URL = '/assets/audio/lullaby.mp3'; // Place your MP3 at public/assets/audio/lullaby.mp3

export default function BackgroundLullaby() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const toggleLullaby = () => {
    setUserInteracted(true);
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  // Pause on unmount
  React.useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) audio.pause();
    };
  }, []);

  return (
    <div
      className="fixed z-[100] flex flex-col items-center gap-2"
      style={{
        right: '1.5rem',
        bottom: '1.5rem',
        left: undefined,
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          .lullaby-mobile {
            left: 0 !important;
            right: 0 !important;
            bottom: 1.25rem !important;
            margin-left: auto !important;
            margin-right: auto !important;
            width: 90vw !important;
            max-width: 340px !important;
          }
        }
      `}</style>
      <button
        onClick={toggleLullaby}
        className={
          `lullaby-mobile flex items-center justify-center gap-2 px-6 py-4 rounded-full shadow-lg border-2 border-gold-300 bg-white/90 dark:bg-black/80 text-gold-600 font-amiri font-bold text-lg hover:bg-gold-50 dark:hover:bg-gold-900 transition focus:outline-none focus:ring-4 focus:ring-gold-200`
        }
        style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff', fontSize: '1.1rem' }}
        aria-label={playing ? 'Pause lullaby' : 'Play lullaby'}
      >
        <FaMusic className="text-2xl" />
        {playing ? <FaVolumeUp className="text-xl" /> : <FaVolumeMute className="text-xl" />}
        <span className="inline-block md:inline-block text-base md:text-lg">
          {playing ? (window.innerWidth < 768 ? 'Pause' : 'Pause Lullaby') : (window.innerWidth < 768 ? 'Lullaby' : 'Play Lullaby')}
        </span>
      </button>
      {/* Audio element: muted by default, only plays after user interaction */}
      <audio
        ref={audioRef}
        src={LULLABY_URL}
        loop
        preload="auto"
        muted={!userInteracted}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </div>
  );
} 