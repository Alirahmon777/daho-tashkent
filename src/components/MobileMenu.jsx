import React from 'react';
import { footer, header } from '../static/data';
import { Link, NavLink } from 'react-router-dom';
import { novaIcon } from 'assets';
import { scrollToComponent } from '../utils/scrollToComponents';

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div className={`mobile-menu md:hidden ${open ? 'open' : ''}`}>
      <div className='mobile-menu__wrap text-center'>
        <ul className='mobile-menu__list text-center'>
          {header.nav.map(({ component_id, name, child }, i) => (
            <React.Fragment key={i}>
              {!child && (
                <li key={i} className='mb-[1.3rem]' onClick={() => setOpen(false)}>
                  <NavLink
                    to={component_id}
                    className='header__nav__link uppercase'
                    onClick={() => scrollToComponent(component_id.substring(1))}
                  >
                    {name}
                  </NavLink>{' '}
                </li>
              )}

              {child &&
                child.map(({ component_id, name }, i) => (
                  <li className='mb-[1.3rem]' key={i} onClick={() => setOpen(false)}>
                    <NavLink
                      to={component_id}
                      className='header__nav__link uppercase'
                      onClick={() => scrollToComponent(component_id.substring(1))}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
            </React.Fragment>
          ))}
        </ul>
        <div className='mobile-menu__lang text-[1rem] text-white my-8'>
          <a
            href='/'
            className='mr-[1rem] hover:text-[--brown] transition-all duration-500'
            onClick={() => setOpen(false)}
          >
            Ру
          </a>
          <a href='/uz' className='hover:text-[--brown] transition-all duration-500' onClick={() => setOpen(false)}>
            Uz
          </a>
        </div>
        <div className='header-tel mt-5'>
          <button className='bg-[var(--brown)] border-[0.1rem] text-white border-white px-[20px] py-1 text-[1rem]'>
            Ariza qoldiring
          </button>
        </div>
        <div className='mobile-menu__nova flex justify-center items-center mt-4'>
          <a href='https://www.novastudio.uz/' target='_blank'>
            <img src={novaIcon} alt='Nova' />
          </a>
        </div>
        <ul className='footer-info__social'>
          {footer.socials.map(({ path, icon: Icon }, i) => (
            <li className='footer__item' key={i}>
              <Link to={path}>
                <Icon className='cursor-pointer' />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
