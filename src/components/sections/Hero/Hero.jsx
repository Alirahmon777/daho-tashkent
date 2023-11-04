import React from 'react';
import { heroOne } from 'assets';
import './hero.css';
import HeroSwiper from '../../ui/HeroSwiper';

const Hero = () => {
  return (
    <section className='hero' id='home'>

      <HeroSwiper />
     
    </section>
  );
};

export default Hero;
