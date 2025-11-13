import 'flowbite';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { BannerProvider } from './context/BannerContext.jsx';
import { ServicesProvider } from './context/ServiceContext.jsx';
import './index.css';

// Dynamically set basename based on environment
const env = import.meta.env.VITE_ENV;
const basename = env === 'dev' ? '/dev' : '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* add /website in local  */}
    <HelmetProvider>
    <BrowserRouter basename={basename}>
    <BannerProvider>
      <ServicesProvider>
        <App />
        </ServicesProvider>
      </BannerProvider>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
