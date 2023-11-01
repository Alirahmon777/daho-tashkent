import React from 'react';
import './corporative.css';
import { corporativeOne } from 'assets';

const Corporative = () => {
  return (
    <section className='corporative'>
      <div className='corporative__wrapper flex items-center justify-between'>
        <div className='advantages__content text-left'>
          <h2 className='advantages__title'>KORPORATIV KO‘CHMAS MULK</h2>
          <p className='advantages__desc'>
            DAhO majmuasidagi ikkita blok to'liq korporativ ko'chmas mulkka bag'ishlangan. Taklif etilayotgan makonning
            turli xil variantlari turli faoliyat sohalaridagi kompaniyalar ofislari uchun maqbul joyni tanlash,
            kovorking zonalarini yoki qulay konferentsiya zallarini tashkil qilish imkonini beradi.
          </p>
        </div>
        <div className='advantages__carousel'>
          <img src={corporativeOne} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Corporative;
