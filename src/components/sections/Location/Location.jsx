import React from 'react';
import './location.css';
import { mapUz } from 'assets';

const Location = () => {
  return (
    <section className='location' id='location'>
      <div className='location__wrapper flex items-center justify-between'>
        <div className='location__content text-left'>
          <h2 className='location__title'>SHAHAR MARKAZIDA, FAOL HAYOT OG‘USHIDA</h2>
          <p className='location__desc'>
            Noyob joylashuv poytaxtning ijtimoiy ahamiyatga ega maskanlariga: markaziy ko‘chalar, maktablar, klinikalar,
            temiryo‘l vokzali, aeroport, banklar, bog‘lar, muzeylar, kafe va restoranlarga tezkor va qulay tarzda yetib
            olish imkonini beradi.
          </p>
          <button className='location__btn'>Ariza qoldiring</button>
        </div>
        <div className='location__image'>
          <h3 className='text-center location__maptitle'>Lokatsiya</h3>
          <img src={mapUz} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Location;
