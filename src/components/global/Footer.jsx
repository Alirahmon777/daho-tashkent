import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLogoIcon, novaIcon } from 'assets';
import 'assets/styles/footer.css';
import { footer } from 'static/data';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className='footer' id='footer'>
      <div className='footer__content'>
        <div className='footer__info'>
          <img src={FooterLogoIcon} alt='' className='footer__logo' />
          <ul className='footer__socials flex justify-center gap-1.5'>
            {footer.socials.map(({ path, icon: Icon }, i) => (
              <li className='footer__item' key={i}>
                <Link to={path}>
                  <Icon className='cursor-pointer' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__contact'>
          <p className='footer__contact__text'>
            <span>{t('footer_address_span', { ns: 'layout' })} </span>
            {t('footer_address', { ns: 'layout' })}
          </p>
          <p className='footer__contact__text'>
            <span>{t('footer_tel', { ns: 'layout' })} </span>

            <Link to={'tel:998555060000'}> +998 55 506 00 00</Link>
          </p>
          <p className='footer__contact__text'>
            <span>{t('footer_email', { ns: 'layout' })} </span>

            <Link to={'mailto:info@dahotashkent.uz'}> info@dahotashkent.uz</Link>
          </p>
        </div>
      </div>
      <div className='footer__bottom bg-[var(--brown)] text-white'>
        <div className='custom__container flex items-center justify-between'>
          <p className='footer__copyright'>© Copyright 2022</p>
          <Link to={'https://www.novastudio.uz/'} target='_blank' className='footer__nova-link'>
            <img src={novaIcon} alt='novas' className='footer__nova' />
          </Link>
          <p className='footer__privacy'>
            Terms & Condition |{' '}
            <Link to={'policy'} className='hover:text-[var(--blue)] transition-all duration-500'>
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
