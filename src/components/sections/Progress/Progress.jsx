import React from 'react';
import './progress.css';
import { progressCarousel } from 'static/data';
import Swiper from '../../Swiper';
import { SwiperSlide } from 'swiper/react';

const Progress = () => {
  return (
    <section className='progress' id='concept'>
      <div className='custom__container flex items-center flex-col md:flex-row justify-between w-full !pr-0'>
        <div
          className='progress__content visible'
          style={{ animationName: 'fadeInLeft', animationDelay: '0.3s' }}
          data-aos='fade-right'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-once='true'
          data-aos-duration='800'
          data-aos-delay='300'
        >
          <h2 className='progress__title'>TARAQQIYOT QIYOFASI</h2>
          <p className='progress__desc'>
            DAhO majmuasi rivojlangan infratuzilmaga ega Toshkentning nufuzli ishbilarmonlik tumanida — Said Baraka va
            Taras Shevchenko ko‘chalari kesishmasida qad ko‘tarmoqda.
          </p>
          <p className='progress__desc'>
            DAhO majmuasi binolarining tashqi qiyofasi o‘zining vizual yechimi bilan bir-biridan farq qiladi, birgalikda
            esa ular o‘zaro uyg‘un va yakdil kompozitsiyani tashkil qiladi hamda munosib tarzda zamonaviy Toshkent uchun
            noyob meʼmoriy ansambl nomzodligiga daʼvo qiladi.
          </p>
        </div>
        <div
          className='progress__carousel'
          style={{ animationName: 'fadeInRight', animationDelay: '0.4s' }}
          data-aos='fade-left'
          data-aos-easing='ease-out'
          data-aos-once='true'
          data-aos-offset='200'
          data-aos-duration='800'
          data-aos-delay='300'
        >
          <Swiper>
            {progressCarousel.map(({ image, name }, i) => (
              <SwiperSlide key={i}>
                <img src={image} alt={name} className='progress__carousel__img object-cover w-full' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Progress;
