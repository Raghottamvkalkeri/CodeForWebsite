import { Route, Routes } from 'react-router-dom';

import BackToTop from './components/BacktoTop';
import AboutUs from './pages/about/about';
import CaseStudyPage2 from './pages/casestudies/caseStudies';
import CaseStudyDetail from './pages/casestudies/CaseStudyDetail';
import CaseStudyPage from './pages/casestudies/index';
import Footer from './pages/landing/footer';
import Landing from './pages/landing/index';
import Navbar from './pages/landing/navbar';
import PartnerDetail from "./pages/partners/partnerDetails";
import Partners from './pages/partners/partners';
import ServicePage from './pages/servicespage/servicePage';
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
