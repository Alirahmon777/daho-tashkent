import React from 'react';
import './progress.css';
import { progressOne } from 'assets';

const Progress = () => {
  return (
    <section className='progress' id='concept'>
      <div className='custom__container flex items-center justify-between w-full !pr-0'>
        <div
          className='progress__content visible'
          style={{ animationName: 'fadeInLeft', animationDelay: '0.3s' }}
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          data-aos-once='true'
          data-aos-offset='300'
          data-aos-duration='800'
          data-aos-delay='.3s'
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
          data-aos-offset='300'
          data-aos-duration='800'
          data-aos-delay='0.5s'
        >
          <img src={progressOne} alt='' className='progress__carousel__img object-cover w-full' />
        </div>
      </div>
    </section>
  );
};

export default Progress;
