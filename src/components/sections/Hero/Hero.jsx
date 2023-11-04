import React from 'react';
import { heroOne } from 'assets';
import './hero.css';
import HeroSwiper from '../../ui/HeroSwiper';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      {/* <div className='hero-item'>
        <div className='hero-item__img'> */}
      <HeroSwiper />
      {/* <img src={heroOne} alt='image' className='w-full' /> */}
      {/* </div>
        <h2 className='hero-item__text md:text-[2.30rem] lg:text-[2.6rem] xl:text-[2.75rem]'>
          DAhO – TOSHKENTNING YANGI DURDONASI
        </h2>
      </div> */}
    </section>
  );
};

export default Hero;
