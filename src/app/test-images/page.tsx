import Image from 'next/image';

export default function TestImagesPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Favicon Test</h2>
          <img src="/favicon.svg" alt="Favicon SVG" className="w-16 h-16 border" />
          <img src="/favicon.ico" alt="Favicon ICO" className="w-16 h-16 border ml-4" />
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Mosque Images Test (Regular img tags)</h2>
          <div className="flex gap-4 flex-wrap">
            <img src="/assets/img/masjid1.jpg" alt="Mosque 1" className="w-48 h-32 object-cover border" />
            <img src="/assets/img/masjid2.jpg" alt="Mosque 2" className="w-48 h-32 object-cover border" />
            <img src="/assets/img/masjid3.jpg" alt="Mosque 3" className="w-48 h-32 object-cover border" />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Mosque Images Test (Next.js Image component)</h2>
          <div className="flex gap-4 flex-wrap">
            <Image src="/assets/img/masjid1.jpg" alt="Mosque 1" width={192} height={128} className="object-cover border" />
            <Image src="/assets/img/masjid2.jpg" alt="Mosque 2" width={192} height={128} className="object-cover border" />
            <Image src="/assets/img/masjid3.jpg" alt="Mosque 3" width={192} height={128} className="object-cover border" />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Gallery Images Test</h2>
          <div className="flex gap-4 flex-wrap">
            <img src="/assets/img/gallery1.jpg" alt="Gallery 1" className="w-32 h-32 object-cover border" />
            <img src="/assets/img/gallery2.jpg" alt="Gallery 2" className="w-32 h-32 object-cover border" />
            <img src="/assets/img/gallery3.jpg" alt="Gallery 3" className="w-32 h-32 object-cover border" />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">SVG Assets Test</h2>
          <img src="/assets/svg/pattern-hero.svg" alt="Pattern Hero" className="w-64 h-32 border" />
          <img src="/assets/svg/pattern-section.svg" alt="Pattern Section" className="w-64 h-32 border ml-4" />
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Direct URL Test</h2>
          <p>Try these direct URLs in your browser:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="/favicon.svg" target="_blank" className="text-blue-600 underline">/favicon.svg</a></li>
            <li><a href="/assets/img/masjid1.jpg" target="_blank" className="text-blue-600 underline">/assets/img/masjid1.jpg</a></li>
            <li><a href="/assets/img/gallery1.jpg" target="_blank" className="text-blue-600 underline">/assets/img/gallery1.jpg</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 