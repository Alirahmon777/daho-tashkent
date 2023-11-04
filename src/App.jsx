import { useEffect, useState } from 'react';
import { Header, Footer, Main, Feedback } from 'components';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Feedback />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
