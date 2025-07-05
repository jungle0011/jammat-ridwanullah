import Image from 'next/image';

export default function TestImagesPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Basic Image Test</h2>
          <p className="mb-4 text-gray-600">Testing if any images load at all...</p>
          
          {/* Test with a simple image that should definitely work */}
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Next.js default image:</p>
            <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} />
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Regular img tag with Next.js logo:</p>
            <img src="/next.svg" alt="Next.js Logo" className="w-24 h-24 border" />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Favicon Test</h2>
          <div className="flex gap-4 items-center">
            <div>
              <p className="text-sm text-gray-500 mb-2">SVG Favicon:</p>
              <img src="/favicon.svg" alt="Favicon SVG" className="w-16 h-16 border" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">ICO Favicon:</p>
              <img src="/favicon.ico" alt="Favicon ICO" className="w-16 h-16 border" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Mosque Images Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Masjid 1:</p>
              <img src="/assets/img/masjid1.jpg" alt="Mosque 1" className="w-full h-32 object-cover border" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Masjid 2:</p>
              <img src="/assets/img/masjid2.jpg" alt="Mosque 2" className="w-full h-32 object-cover border" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Masjid 3:</p>
              <img src="/assets/img/masjid3.jpg" alt="Mosque 3" className="w-full h-32 object-cover border" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Direct URL Test</h2>
          <p className="mb-4">Click these links to test if images are accessible directly:</p>
          <div className="space-y-2">
            <a href="/favicon.svg" target="_blank" className="block text-blue-600 underline">/favicon.svg</a>
            <a href="/assets/img/masjid1.jpg" target="_blank" className="block text-blue-600 underline">/assets/img/masjid1.jpg</a>
            <a href="/assets/img/gallery1.jpg" target="_blank" className="block text-blue-600 underline">/assets/img/gallery1.jpg</a>
            <a href="/next.svg" target="_blank" className="block text-blue-600 underline">/next.svg (should work)</a>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Debug Information</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-sm">
              <strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Server side'}
            </p>
            <p className="text-sm">
              <strong>User Agent:</strong> {typeof window !== 'undefined' ? window.navigator.userAgent : 'Server side'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 