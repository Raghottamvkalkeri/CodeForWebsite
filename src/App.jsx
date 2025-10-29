import { useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom';

import ChooseUs from './pages/landing/ChooseUs'
import Navbar from './pages/landing/navbar'
import Hero from './pages/landing/hero'
import Footer from './pages/landing/footer'
import Clients from './pages/landing/clients'
import OurVision from './pages/landing/ourVision'
import ServicesSection from './pages/landing/services'
import Landing from './pages/landing/index';
import BackToTop from './components/BacktoTop';
import CaseStudyPage from './pages/casestudies/index';
import CaseStudyPage2 from './pages/casestudies/caseStudies';
import CaseStudyDetail from "./pages/casestudies/CaseStudyDetail";
import Partners from './pages/partners/partners';
import AboutUs from './pages/about/about';
import ServicePage from './pages/servicespage/servicePage';
import PartnerDetail from "./pages/partners/partnerDetails";
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/services" element={<ServicesSection />} /> */}
        <Route path="/services/:service" element={<ServicePage />} />
        <Route path="/case-studies" element={<CaseStudyPage2 />} />
        <Route path="/sap" element={<CaseStudyPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/:slug" element={<PartnerDetail />} />
        <Route path="/case-studies/:title" element={<CaseStudyDetail />} />
      </Routes>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App
