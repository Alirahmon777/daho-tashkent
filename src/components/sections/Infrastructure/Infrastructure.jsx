import React from 'react';
import './infrastructure.css';
import { infrastructureOne } from 'assets';

const Infrastructure = () => {
  return (
    <section className='infrastructure'>
      <div className='infrastructure__wrapper flex items-center justify-between'>
        <div className='advantages__carousel'>
          <img src={infrastructureOne} alt='image' />
        </div>
        <div className='advantages__content text-left'>
          <h2 className='advantages__title'>RIVOJLANGAN INFRATUZILMA</h2>
          <p className='advantages__desc'>
            DAhO majmuasida keng yerosti avtoturargohi, shuningdek, sport va dam olish joylari koʻzda tutilgan.
            Majmuaning rezident va mehmonlari SPA-markaz xizmatlaridan foydalanishlari, fitnes zaliga tashrif
            buyurishlari yoki yopiq basseynda choʻmilishdan bahra olishlari mumkin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
