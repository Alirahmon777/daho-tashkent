import React, { useContext, useState, useEffect } from 'react';
import 'assets/styles/feedback.css';
import { FeedbackContext } from '../../context/FeedbackContext';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useTranslation } from 'react-i18next';
import { doneIcon } from 'assets';
const FeedbackModal = () => {
  const { openFeedback, setOpenFeedback, openFeedbackDone, setOpenFeedbackDone } = useContext(FeedbackContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const { t } = useTranslation();

  const handlePhoneNumberChange = value => {
    setPhoneNumber(value);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  useEffect(() => {
    let timer1;
    let timer2;

    if (openFeedbackDone) {
      timer2 = setTimeout(() => {
        setOpenFeedback(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [openFeedbackDone, openFeedback]);

  const handleSubmit = e => {
    e.preventDefault();

    setOpenFeedbackDone(true);
    setName('');
    setPhoneNumber('');
  };

  return (
    <>
      <div className={`feedback ${openFeedback ? 'open' : ''}`}>
        <div
          className='absolute top-0 left-0 z-[-1] cursor-pointer w-full h-full'
          onClick={() => setOpenFeedback(false)}
        ></div>
        <div className='feedback-content'>
          <div className='feedback-close' onClick={() => setOpenFeedback(false)}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 23L23.0001 0.999929' stroke='white' strokeWidth='2'></path>
              <path d='M23 23L0.999929 0.999929' stroke='white' strokeWidth='2'></path>
            </svg>
          </div>

          <div className={`feedback-wrap ${openFeedbackDone ? 'close' : ''}`}>
            <div className='feedback__title'>{t('feedback_title', { ns: 'layout' })}</div>
            <div className='feedback__text'>{t('feedback_desc', { ns: 'layout' })}</div>
            <form className='feedback-form' action='#' onSubmit={handleSubmit}>
              <div className='feedback-form__input'>
                <span>{t('feedback_name', { ns: 'layout' })}</span>
                <input
                  type='text'
                  required
                  placeholder={t('feedback_name', { ns: 'layout' })}
                  className='feedback-form__input-name'
                  id='name'
                  onChange={handleNameChange}
                  value={name}
                />
              </div>
              <div className='feedback-form__input'>
                <span>{t('feedback_tel', { ns: 'layout' })}</span>
                <PhoneInput defaultCountry='uz' value={phoneNumber} onChange={handlePhoneNumberChange} className='' />
              </div>
              <div className='feedback__text'>{t('feedback_text', { ns: 'layout' })}</div>
              <button type='submit' className='feedback__btn' id='send'>
                {t('feedback_btn', { ns: 'layout' })}
              </button>
            </form>
          </div>

          <div className={`feedback-done ${openFeedbackDone ? 'open' : ''}`}>
            <div className='feedback__title'>Rahmat!</div>
            <div className='feedback__text'>Sizning arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.</div>
            <div className='feedback__img'>
              <img src={doneIcon} alt='icon' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackModal;
