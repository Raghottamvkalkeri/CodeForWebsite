import { useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom';

import ChooseUs from './pages/landing/ChooseUs'
import Navbar from './pages/landing/navbar'
import Hero from './pages/landing/hero'
import Footer from './pages/landing/footer'
import Clients from './pages/landing/clients'
import OurVision from './pages/landing/ourVision'
import ServicesSection from './pages/landing/services'
import Landing from './pages/landing/index'
import CaseStudyPage from './pages/casestudies/index';
import CaseStudyPage2 from './pages/casestudies/caseStudies';
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/website" element={<Landing />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/case-studies" element={<CaseStudyPage2 />} />
        <Route path="/sap" element={<CaseStudyPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App
