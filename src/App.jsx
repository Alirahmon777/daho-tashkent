import { Suspense, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './components/Loader';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Layout from './layouts/default';
import HomePage from './pages/Home/HomePage';
import { routes } from './routes/routes';
import { v4 } from 'uuid';
import NotFound from './pages/NotFound/NotFound';
import { useTranslation } from 'react-i18next';
function App() {
  const [showLoader, setShowLoader] = useState(true);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [i18n.resolvedLanguage]);

  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == '/' || !location.pathname.includes('uz')) {
      i18n.changeLanguage('ru');
    }
    if (location.pathname.includes('uz')) {
      i18n.changeLanguage('uz');
    }
  }, [i18n]);

  return (
    <>
      <Loader showLoader={showLoader} />

      <Suspense fallback={<Loader showLoader={showLoader} />}>
        <Routes>
          <Route
            path={`/`}
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path={`/uz`}
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          {routes?.map(({ path, element: Component }) => (
            <Route
              key={v4()}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          ))}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
