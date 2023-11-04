import React, { useContext } from 'react';
import 'assets/styles/feedback.css';
import { FeedbackContext } from '../../context/FeedbackContext';
const FeedbackModal = () => {
  const { openFeedback, setOpenFeedback } = useContext(FeedbackContext);
  return (
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

        <div className='feedback-wrap'>
          <div className='feedback__title'>Qayta qo'ng'iroq</div>
          <div className='feedback__text'>Formani to‘ldiring va menejerlarimiz siz bilan bog'lanishadi</div>
          <form className='feedback-form' action='#'>
            <div className='feedback-form__input'>
              <input id='token' value='oXO0GfRCh1glXcupUaGHAcHRUtxgXtEFXRywmUMW' type='hidden' />
              <span>Telefon raqamingiz</span>
            </div>
            <div className='feedback-form__input'>
              <span>Ismingiz</span>
              <input type='text' required='' placeholder='Ismingiz' id='name' />
            </div>
            <div className='feedback-form__input'>
              <span>Familiyangiz</span>
              <input type='text' required='' placeholder='Familiyangiz' id='surname' />
            </div>
          </form>
          <div className='feedback__text'>
            "So'rov yuborish" tugmasini bosish orqali siz shaxsiy ma'lumotlarni qayta ishlashga roziligingizni
            tasdiqlaysiz
          </div>
          <button type='submit' className='feedback__btn' id='send'>
            Yuborish
          </button>
        </div>

        <div className='feedback-done'>
          <div className='feedback__title'>Rahmat!</div>
          <div className='feedback__text'>Sizning arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.</div>
          <div className='feedback__img'>
            <img src='img/done.svg' alt='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
