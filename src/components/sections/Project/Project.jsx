import React from 'react';
import { projectImage } from 'assets';
import './project.css';

const Project = () => {
  return (
    <section className='project' id='project'>
      <div className='project__content'>
        <h2
          className='project__title'
          data-aos-delay='200'
          style={{ animationName: 'fadeInUp', animationDelay: '0.2s' }}
          data-aos='fade-up'
          data-aos-easing='ease'
          data-aos-offset='400'
          data-aos-duration='700'
          data-aos-once='true'
        >
          MIXED-USE FORMATIDAGI LOYIHA
        </h2>
        <h3
          className='project__sub__title'
          data-aos-delay='300'
          data-aos='fade-up'
          style={{ animationName: 'fadeInUp', animationDelay: '0.3s' }}
          data-aos-easing='ease'
          data-aos-offset='400'
          data-aos-duration='900'
          data-aos-once='true'
        >
          Hayot, biznes va investitsiya uchun
        </h3>
        <p
          className='project__desc'
          data-aos-delay='400'
          style={{ animationName: 'fadeInUp', animationDelay: '0.4s' }}
          data-aos='fade-up'
          data-aos-easing='ease'
          data-aos-offset='400'
          data-aos-duration='1100'
          data-aos-once='true'
        >
          DAhO majmuasi 5 ta blokdan iborat bo‘lib, apartamentlar, ofislar, ijtimoiy maydonlar, tijoriy maskanlar, sport
          va dam olish joylarini o‘z ichiga oladi. DAhO apartamentlari yashash uchun ham, ko‘chmas mulkka qilingan
          istiqbolli investitsiya uchun ham mukammal joy bo‘la oladi
        </p>
      </div>
      <div
        className='project__image'
        data-aos-delay='500'
        style={{ animationName: 'fadeInUp', animationDelay: '0.5s' }}
        data-aos='fade-up'
        data-aos-easing='ease'
        data-aos-offset='400'
        data-aos-duration='1300'
        data-aos-once='true'
      >
        <img src={projectImage} alt='project' />
      </div>
    </section>
  );
};

export default Project;
