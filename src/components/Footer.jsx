import React from 'react';

// Footer: Copyright and closing section
export default function Footer() {
  return (
    <footer className="text-center py-4 text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Jammatu Ridwanullahi-l-Akbar. All rights reserved.<br />
      <a
        href="https://sageverse.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-1 text-gold-600 hover:text-gold-500 font-amiri font-semibold transition-colors duration-200"
        style={{ textShadow: '0 1px 4px #fff, 0 0 2px #d4af37' }}
      >
        Powered by SageVerseLab
      </a>
    </footer>
  );
} 