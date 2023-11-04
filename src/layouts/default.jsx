import React from 'react';
import { Feedback, Footer, Header } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      <Feedback />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
