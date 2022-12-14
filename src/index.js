import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './context/contextApi';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='admin-panel'>
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);


