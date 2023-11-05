import React, { useContext } from 'react';
import './location.css';
import { mapUz } from 'assets';
import { FeedbackContext } from '../../../context/FeedbackContext';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const { setOpenFeedback, setOpenFeedbackDone } = useContext(FeedbackContext);
  const { t, i18n } = useTranslation();
  return (
    <section className='location' id='location'>
      <div className='location__wrapper flex items-center md:flex-row flex-col-reverse justify-between'>
        <div
          className='location__content text-center md:text-left'
          style={{ animationName: 'fadeInLeft', animationDelay: '0.3s' }}
          data-aos='fade-right'
          data-aos-easing='ease-in-sine'
          data-aos-once='true'
          data-aos-offset='250'
          data-aos-duration='800'
          data-aos-delay='300'
        >
          <h2 className='location__title'>{t('location_title', { ns: 'home' })}</h2>
          <p className='location__desc'>{t('location_desc', { ns: 'home' })}</p>
          <button
            className='location__btn'
            onClick={() => {
              setOpenFeedback(true), setOpenFeedbackDone(false);
            }}
          >
            {t('header_btn', { ns: 'layout' })}
          </button>
        </div>
        <div
          className='location__image'
          style={{ animationName: 'fadeInRight', animationDelay: '400' }}
          data-aos='fade-left'
          data-aos-easing='ease-out'
          data-aos-offset='250'
          data-aos-once='true'
          data-aos-duration='800'
          data-aos-delay='300'
        >
          <h3 className='text-center location__maptitle'> {t('location', { ns: 'layout' })}</h3>
          <img src={mapUz} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Location;
