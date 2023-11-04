import { Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default ({ data, children, ...props }) => {
  const { t } = useTranslation();
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      speed={800}
      slidesPerView={1}
      loop
      breakpoints={{
        300: {
          spaceBetween: 0,
        },
      }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      {...props}
    >
      {data.map((tab, i) => (
        <SwiperSlide key={i}>
          <div className='room__carousel flex items-center w-full pb-8'>
            <div
              className='mt-4 room__info'
              data-aos='fade-zoom-in'
              data-aos-easing='ease-in-back'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-offset='200'
            >
              <h3 className='room__title'>{t(tab.title, { ns: 'home' })}</h3>
              <ul className='room__info__list text-[0.8rem]'>
                {tab?.info?.map(({ name, metr }, i) => (
                  <li key={i} className='room__info__item mb-[1.3rem] w-[80%]'>
                    <div className='room__desc flex w-full items-center justify-between'>
                      <p>{t(name, { ns: 'home' })}</p>
                      <span className='dots flex-shrink border-b-2 border-white border-dotted w-full mx-[1rem] flex-1'></span>
                      <p>{metr}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className='ml-[7%] flex-grow room__img-box'
              data-aos='fade-zoom-in'
              data-aos-once='true'
              data-aos-easing='ease-in-back'
              data-aos-delay='300'
              data-aos-offset='200'
            >
              <img src={tab.image} alt='' className='room__img' />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
