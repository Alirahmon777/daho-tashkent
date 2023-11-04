import React, { useContext } from 'react';
import './location.css';
import { mapUz } from 'assets';
import { FeedbackContext } from '../../../context/FeedbackContext';

const Location = () => {
  const { setOpenFeedback } = useContext(FeedbackContext);
  return (
    <section className='location' id='location'>
      <div className='location__wrapper flex items-center md:flex-row flex-col-reverse justify-between'>
        <div
          className='location__content text-center md:text-left'
          style={{ animationName: 'fadeInLeft', animationDelay: '0.3s' }}
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          data-aos-once='true'
          data-aos-offset='400'
          data-aos-duration='800'
          data-aos-delay='300'
        >
          <h2 className='location__title'>SHAHAR MARKAZIDA, FAOL HAYOT OG‘USHIDA</h2>
          <p className='location__desc'>
            Noyob joylashuv poytaxtning ijtimoiy ahamiyatga ega maskanlariga: markaziy ko‘chalar, maktablar, klinikalar,
            temiryo‘l vokzali, aeroport, banklar, bog‘lar, muzeylar, kafe va restoranlarga tezkor va qulay tarzda yetib
            olish imkonini beradi.
          </p>
          <button className='location__btn' onClick={() => setOpenFeedback(true)}>
            Ariza qoldiring
          </button>
        </div>
        <div
          className='location__image'
          style={{ animationName: 'fadeInRight', animationDelay: '400' }}
          data-aos='fade-left'
          data-aos-easing='ease-out'
          data-aos-offset='400'
          data-aos-once='true'
          data-aos-duration='800'
          data-aos-delay='300'
        >
          <h3 className='text-center location__maptitle'>Lokatsiya</h3>
          <img src={mapUz} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Location;
