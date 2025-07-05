import Image from 'next/image';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gold-50 via-white to-gold-100 dark:from-black dark:via-gray-900 dark:to-gold-950 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl bg-white/95 dark:bg-zinc-900/95 border-2 border-gold-400 px-6 md:px-12 py-10 flex flex-col items-center space-y-8" style={{ boxShadow: '0 8px 32px 0 rgba(212,175,55,0.13), 0 2px 16px 0 rgba(0,0,0,0.10)' }}>
        <div className="flex gap-4 justify-center my-6">
          <img
            src="/assets/img/masjid1.jpg"
            alt="Mosque 1"
            width={220}
            height={140}
            style={{ objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
          />
          <img
            src="/assets/img/masjid2.jpg"
            alt="Mosque 2"
            width={220}
            height={140}
            style={{ objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
          />
          <img
            src="/assets/img/masjid3.jpg"
            alt="Mosque 3"
            width={220}
            height={140}
            style={{ objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
          />
        </div>
        <h1 className="font-amiri text-4xl md:text-5xl font-bold text-center text-gold-700 drop-shadow-lg" style={{ color: '#ffe082', textShadow: '0 2px 8px #d4af37, 0 0 2px #fff' }}>
          Support Our Mosque
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-800 dark:text-gray-100 max-w-2xl mx-auto font-amiri">
          Your generous donation helps us maintain and expand the mosque, support community programs, and provide a spiritual home for all. Every contribution goes directly to the betterment of our masjid and the services we offer.
        </p>
        <div className="w-full bg-gold-50 dark:bg-zinc-800 rounded-2xl border-2 border-gold-300 p-6 flex flex-col items-center space-y-4 shadow-md">
          <h2 className="font-amiri text-2xl font-bold text-gold-700 mb-2">Donation Account Details</h2>
          <div className="text-lg md:text-xl font-amiri text-gray-900 dark:text-gray-100 text-center">
            <div><span className="font-bold">Account Name:</span> Jammat Ridwanulahi li Akbar (w,I,t,)</div>
            <div><span className="font-bold">Bank Name:</span> Stanbic I B T C</div>
            <div><span className="font-bold">Account Number:</span> 0018137508</div>
          </div>
          <div className="text-md md:text-lg font-amiri text-gray-700 dark:text-gray-200 text-center mt-2">
            <span className="font-bold">For more Inquiries:</span> <a href="tel:+2348033928846" className="underline">+2348033928846</a>, <a href="tel:+2348077841720" className="underline">+2348077841720</a>
          </div>
        </div>
        <a href="tel:+2348033928846" className="mt-6 inline-block bg-gold-600 text-white px-10 py-4 rounded-full shadow hover:bg-gold-700 transition font-amiri text-xl font-bold border-2 border-gold-700 focus:outline-none focus:ring-4 focus:ring-gold-300">
          Call to Support
        </a>
      </div>
    </div>
  );
} 