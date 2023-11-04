import React, { useState } from 'react';
import './office.css';
import { officeTabData } from '../../../static/data';
import AppartmentSwiper from '../../ui/AppartmentSwiper';
import { useTranslation } from 'react-i18next';

const Office = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t, i18n } = useTranslation();
  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <section className='apartment' id='offices'>
      <div className='custom__container'>
        <div className='apartment__wrapper'>
          <div className='apartment__content flex justify-between items-center'>
            <h2 className='apartment__title'>{t('office_title', { ns: 'home' })}</h2>
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
                  <span className='text-[1rem]'>{t('office_tab', { ns: 'home' })}</span>
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
