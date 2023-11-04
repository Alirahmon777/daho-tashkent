import React from 'react';
import './advantages.css';
import { SwiperSlide } from 'swiper/react';
import { advantagesCarousel } from 'static/data';
import Swiper from '../../Swiper';
const Advantages = () => {
  return (
    <section className='advantages' id='gallery'>
      <div className='advantages__wrapper flex md:flex-row flex-col-reverse items-center'>
        <div
          className='advantages__carousel'
          style={{ animationName: 'fadeInLeft', animationDelay: '0.3s' }}
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          data-aos-once='true'
          data-aos-offset='400'
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
          data-aos-offset='400'
          data-aos-duration='1300'
          data-aos-delay='300'
        >
          <h2 className='advantages__title'>AQL BILAN AMALGA OSHIRILGAN LOYIHA</h2>
          <p className='advantages__desc'>
            DAhO apartamentlarini loyihalashda konseptual yondashilgan bo‘lib, sizning bo‘lajak uyingizning har bir
            burchagi turli xildagi loyihalashtirishda ham foydali va qulay bo‘lib qoladi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
