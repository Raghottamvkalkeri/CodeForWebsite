import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { BannerProvider } from './context/BannerContext.jsx';
import { ServicesProvider } from './context/ServiceContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* add /website in local  */}
    <BrowserRouter basename='/website'>
    <BannerProvider>
      <ServicesProvider>
        <App />
        </ServicesProvider>
      </BannerProvider>
    </BrowserRouter>
  </StrictMode>,
)
