import React from 'react';
import './infrastructure.css';
import { infrastructureCarousel } from '../../../static/data';
import Swiper from '../../Swiper';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

const Infrastructure = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className='infrastructure'>
      <div className='infrastructure__wrapper flex md:flex-row flex-col-reverse items-center justify-between'>
        <div
          className='advantages__carousel'
          style={{ animationName: 'fadeInLeft', animationDelay: '0.3s' }}
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          data-aos-once='true'
          data-aos-offset='250'
          data-aos-duration='1100'
          data-aos-delay='300'
        >
          <Swiper>
            {infrastructureCarousel.map(({ image, name }, i) => (
              <SwiperSlide key={i}>
                <img src={image} alt={name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className='advantages__content text-right md:text-left'
          style={{ animationName: 'fadeInRight', animationDelay: '0.4s' }}
          data-aos='fade-left'
          data-aos-easing='ease-in-sine'
          data-aos-offset='250'
          data-aos-once='true'
          data-aos-duration='1100'
          data-aos-delay='300'
        >
          <h2 className='advantages__title'>{t('infrastructure_title', { ns: 'home' })}</h2>
          <p className='advantages__desc'>{t('infrastructure_desc', { ns: 'home' })}</p>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
