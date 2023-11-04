import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'assets/styles/normalize.css';
import 'assets/styles/animate.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import FeedbackContextProvider from './context/FeedbackContext.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <FeedbackContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FeedbackContextProvider>
    </I18nextProvider>
  </React.StrictMode>
);
