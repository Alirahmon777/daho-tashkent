import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon, phoneIcon } from 'assets';
import { header } from 'static/data';
import 'assets/styles/header.css';
import MobileMenu from '../MobileMenu';
import { scrollToComponent } from '../../utils/scrollToComponents';
import { FeedbackContext } from '../../context/FeedbackContext';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const { setOpenFeedback } = useContext(FeedbackContext);
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = e => {
    const scrollTop = window.scrollY;
    scrollTop >= 80 ? setScrollTop(true) : setScrollTop(false);
  };
  return (
    <>
      <MobileMenu open={open} />
      <header className={`${scrollTop && 'scrolled'} header text-white fixed top-0 left-0 w-full z-50 py-[1.25rem]`}>
        <div className='custom__container flex items-center justify-between w-full'>
          <img src={LogoIcon} alt='logo' className={`transition-all duration-[600] header__logo`} />
          <nav className='hidden md:block'>
            <ul className='header__menu flex items-center'>
              {header.nav.map(({ component_id, name, child }, i) => (
                <li
                  key={i}
                  className='mx-[0.75rem] py-[0.2rem] text-[0.5rem] md:mx-[1.1rem] lg:mx-[1.7rem] 2xl:mx-[1.8rem] md:py-[0.3rem] lg:py-[0.4rem] 2xl:py-[0.5rem] header__item md:text-[0.7rem] lg:text-[0.8rem] 2xl:text-[0.9rem]'
                >
                  {!child && (
                    <NavLink
                      to={component_id}
                      className='header__nav__link'
                      onClick={() => scrollToComponent(component_id.substring(1))}
                    >
                      {name}
                    </NavLink>
                  )}

                  {child && (
                    <>
                      {name}
                      <div className='submenu'>
                        {child.map(({ component_id, name }, i) => (
                          <NavLink
                            to={component_id}
                            key={i}
                            onClick={() => scrollToComponent(component_id.substring(1))}
                            className={({ isActive }) => (isActive ? 'text-' : 'header__nav__link')}
                          >
                            {name}
                          </NavLink>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className='header__lang__box hidden md:flex text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem] 2xl:text-[1rem]'>
            <button className='mr-[0.7rem]'>Ру</button>
            <button>Uz</button>
          </div>
          <div className='header__contact__box flex-col gap-1 hidden md:flex'>
            <Link
              to='tel:555060000'
              className='flex gap-2 lg:gap-4 items-center font-bold text-[0.7rem] lg:text-[1.1rem] 2xl:text-[1.25rem]'
            >
              <img src={phoneIcon} alt='' width={19} height={20} className='w-[0.9rem] h-[20px]' />
              55 506 00 00
            </Link>
            <button
              onClick={() => setOpenFeedback(true)}
              className='bg-[var(--brown)] border-[0.1rem] border-white px-[16px] lg:px-[24px] py-[2px] text-[0.5rem] lg:text-[0.7rem] 2xl:text-[0.8rem]'
            >
              Ariza qoldiring
            </button>
          </div>
          <div
            className={`header__mobile md:hidden ${open ? 'header__mobile__open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
