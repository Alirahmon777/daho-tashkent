import React, { useState } from 'react';
import './apartment.css';
import { tabData } from 'static/data';
import AppartmentSwiper from '../../ui/AppartmentSwiper';
const Apartment = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <section className='apartment' id='apartments'>
      <div className='custom__container'>
        <div className='apartment__wrapper'>
          <div className='apartment__content flex justify-between '>
            <h2 className='apartment__title'>KVARTIRANI TAQVIM QILISH VARIANTLARI</h2>
            <ul className='flex'>
              {tabData.map((tab, index) => (
                <li
                  key={index}
                  className={`py-2 ml-[1.25rem] cursor-pointer text-[1.75rem] flex flex-col items-center ${
                    activeTab === index ? 'text-[#171B25]' : ''
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.name}
                  <span className='text-[1rem]'>xonali</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='apartment__main mt-6'>
            <AppartmentSwiper data={tabData[activeTab]?.content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apartment;
