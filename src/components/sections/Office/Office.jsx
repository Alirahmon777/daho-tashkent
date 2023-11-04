import React, { useState } from 'react';
import './office.css';
import { officeTabData } from '../../../static/data';
import AppartmentSwiper from '../../ui/AppartmentSwiper';

const Office = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <section className='apartment' id='apartments'>
      <div className='custom__container'>
        <div className='apartment__wrapper'>
          <div className='apartment__content flex justify-between items-center'>
            <h2 className='apartment__title'>PlANIROVKA TURLARI</h2>
            <ul className='flex'>
              {officeTabData.map((tab, index) => (
                <li
                  key={index}
                  className={`py-2 ml-[1.25rem] cursor-pointer text-[1.75rem] flex flex-col items-center ${
                    activeTab === index ? 'text-[#171B25]' : ''
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.name}
                  <span className='text-[1rem]'>ofis</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='apartment__main mt-6'>
            <AppartmentSwiper data={officeTabData[activeTab]?.content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Office;
