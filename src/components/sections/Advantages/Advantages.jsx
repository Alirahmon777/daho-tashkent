import React from 'react';
import './advantages.css';
import { advantagesOne } from 'assets';
const Advantages = () => {
  return (
    <section className='advantages' id='gallery'>
      <div className='advantages__wrapper flex items-center'>
        <div className='advantages__carousel'>
          <img src={advantagesOne} alt='image' />
        </div>
        <div className='advantages__content'>
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
