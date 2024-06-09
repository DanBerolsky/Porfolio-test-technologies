'use client';

import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import './index.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

import { swiperCardEvent } from '@/app/lib/reactGA';

export default function App() {
  /* const aux = Array.from(
    { length: 13 },
    (_, index) => index + 1
  ); */
  const aux = Array(13).fill(1);

  return (
    <div onClick={swiperCardEvent} className='swiper-card card'>
      <Swiper
        slidesPerView='auto'
        slidesPerGroup={4}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4600,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        style={{
          '--swiper-navigation-color': '#da0808',
          '--swiper-pagination-color': '#bd6bff',
          '--swiper-navigation-size': '20px',
          '--swiper-pagination-bullet-inactive-color': '#8162df',
        }}
        className='mySwiper'
        breakpoints={{
          1800: {
            slidesPerView: 5,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          700: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          800: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
          1300: {
            slidesPerView: 4,
            slidesPerGroup: 3,
          },
          2300: {
            slidesPerView: 6,
            slidesPerGroup: 5,
          },
          2600: {
            slidesPerView: 9,
            slidesPerGroup: 6,
          },
        }}
      >
        {aux.map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                priority={true}
                width={300}
                height={300}
                quality={50}
                src={'/img-swiper/1.svg'} 
                alt='err'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
