import React from 'react';
import './advantages.css';
import { SwiperSlide } from 'swiper/react';
import { advantagesCarousel } from 'static/data';
import Swiper from '../../Swiper';
import { useTranslation } from 'react-i18next';
const Advantages = () => {
  const { t } = useTranslation();
  return (
    <section className='advantages' id='gallery'>
      <div className='advantages__wrapper flex md:flex-row flex-col-reverse items-center'>
        <div
          className='advantages__carousel'
          style={{ animationName: 'fadeInLeft', animationDelay: '0.3s' }}
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          data-aos-once='true'
          data-aos-offset='250'
          data-aos-duration='1200'
          data-aos-delay='300'
        >
          <Swiper>
            {advantagesCarousel.map(({ image, name }, i) => (
              <SwiperSlide key={i}>
                <img src={image} alt={name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className='advantages__content'
          style={{ animationName: 'fadeInRight', animationDelay: '0.4s' }}
          data-aos='fade-left'
          data-aos-easing='ease-out'
          data-aos-once='true'
          data-aos-offset='250'
          data-aos-duration='1300'
          data-aos-delay='300'
        >
          <h2 className='advantages__title'>{t('advantage_title', { ns: 'home' })}</h2>
          <p className='advantages__desc'>{t('advantage_desc', { ns: 'home' })}</p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
