import React from 'react';
import useUrlLang from '../hooks/useUrlLang';

const CustomRoutes = () => {
  const { langUrlPrefix, path } = useUrlLang();

  return <div>CustomRoutes</div>;
};

export default CustomRoutes;
