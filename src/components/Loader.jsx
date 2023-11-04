import React from 'react';
import { LogoIcon } from 'assets';

const Loader = ({ showLoader }) => {
  return (
    <div class={`preloader ${showLoader ? 'open' : 'close'}`}>
      <img src={LogoIcon} alt='Daho image' class='preloader__logo' />
      <div class='preloader-lines'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
