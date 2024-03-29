import React from 'react';
import './corporative.css';
import { corporativeOne } from 'assets';
import { corporativCarousel } from '../../../static/data';
import Swiper from '../../Swiper';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

const Corporative = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className='corporative'>
      <div className='corporative__wrapper flex items-center md:flex-row flex-col justify-between'>
        <div
          className='advantages__content text-left'
          style={{ animationName: 'fadeInLeft', animationDelay: '0.3s' }}
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          data-aos-once='true'
          data-aos-offset='250'
          data-aos-duration='1000'
          data-aos-delay='300'
        >
          <h2 className='advantages__title'>{t('corporative_title', { ns: 'home' })}</h2>
          <p className='advantages__desc'>{t('corporative_desc', { ns: 'home' })}</p>
        </div>
        <div
          className='advantages__carousel'
          style={{ animationName: 'fadeInRight', animationDelay: '0.4s' }}
          data-aos='fade-left'
          data-aos-easing='ease-out'
          data-aos-once='true'
          data-aos-offset='250'
          data-aos-duration='1100'
          data-aos-delay='300'
        >
          <Swiper>
            {corporativCarousel.map(({ image, name }, i) => (
              <SwiperSlide key={i}>
                <img src={image} alt={name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Corporative;
