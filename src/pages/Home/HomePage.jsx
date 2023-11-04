import React, { useEffect } from 'react';
import { Main } from 'components';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  console.log(i18n.resolvedLanguage, lang);
  useEffect(() => {
    if (!lang) {
      i18n.changeLanguage('ru');
    }
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return <Main />;
};

export default HomePage;
