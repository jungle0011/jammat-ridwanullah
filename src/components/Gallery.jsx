import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IMAGES = [
  { src: '/assets/img/gallery1.jpg', alt: 'Gallery Image 1' },
  { src: '/assets/img/gallery2.jpg', alt: 'Gallery Image 2' },
  { src: '/assets/img/gallery3.jpg', alt: 'Gallery Image 3' },
  { src: '/assets/img/gallery4.jpg', alt: 'Gallery Image 4' },
  { src: '/assets/img/gallery5.jpg', alt: 'Gallery Image 5' },
  { src: '/assets/img/gallery6.jpg', alt: 'Gallery Image 6' },
  { src: '/assets/img/gallery7.jpg', alt: 'Gallery Image 7' },
  { src: '/assets/img/gallery8.jpg', alt: 'Gallery Image 8' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-14 px-0 w-full min-w-0 flex justify-center items-center bg-gradient-to-b from-gold-100/60 via-green-200/60 to-gold-50/40 dark:from-black dark:to-zinc-900 overflow-hidden">
      {/* Geometric SVG background pattern (identical to Dua Wall) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <img src="/assets/svg/pattern-section.svg" alt="pattern" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 w-full min-w-0 px-0 mx-0 md:mx-auto md:max-w-4xl">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {IMAGES.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center h-full">
                <picture>
                  <source srcSet={img.src.replace('.jpg', '.webp')} type="image/webp" />
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="rounded-2xl shadow-xl border-2 border-gold-300 w-full h-64 object-cover mb-4"
                    style={{ boxShadow: '0 4px 24px 0 rgba(212,175,55,0.10), 0 1px 8px 0 rgba(0,0,0,0.10)' }}
                  />
                </picture>
                <div className="font-amiri text-lg text-gold-700 text-center mt-2">
                  {img.alt}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 