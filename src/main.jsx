import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'assets/styles/normalize.css';
import 'assets/styles/animate.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import FeedbackContextProvider from './context/FeedbackContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FeedbackContextProvider>
  </React.StrictMode>
);
