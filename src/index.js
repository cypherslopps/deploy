import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
// import { Provider } from "react-redux";
import App from './App';
import { OffscreenProvider } from './providers';
// import store from './redux/store';
import "./assets/styles/index.css";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter basename={baseUrl}>
      <HelmetProvider>
        <OffscreenProvider>
          <App />
        </OffscreenProvider>
      </HelmetProvider>
    </BrowserRouter> 
);