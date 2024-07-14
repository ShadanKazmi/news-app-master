import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { LogProvider } from './api/LogContext';
import { CountryContext, CountryProvider } from './api/CountryContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogProvider>
    <CountryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CountryProvider>
    </LogProvider>


  </React.StrictMode>
);


