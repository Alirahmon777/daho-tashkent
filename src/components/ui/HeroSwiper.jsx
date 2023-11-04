import { Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import { heroCarousel } from 'static/data';

export default ({ children, ...props }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      effect={'fade'}
      speed={800}
      loop
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      {...props}
    >
      {heroCarousel.map(({ image, name }, i) => (
        <SwiperSlide key={i}>
          <div className='hero-item'>
            <div className='hero-item__img'>
              <img src={image} alt={name} className='w-full' />
            </div>
            <h2 className='hero-item__text md:text-[2.30rem] lg:text-[2.6rem] xl:text-[2.75rem]'>
              DAhO – TOSHKENTNING YANGI DURDONASI
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
