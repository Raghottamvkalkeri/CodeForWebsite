import { Helmet } from "react-helmet-async";
import { Route, Routes, useLocation } from 'react-router-dom';

import BackToTop from './components/BacktoTop';
import ExploreMoreServices from './components/ExploreMoreServices';
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

  const location = useLocation();
  const path = location.pathname;

  const ShowExploreSerives = location.pathname.startsWith("/services/");


  // Static SEO mapping for static routes
  const seoData = {
    "/": { title: "Aveto | Home", description: "Welcome to Aveto Consulting" },
    "/about": { title: "About Us | Aveto", description: "Learn about Aveto Consulting" },
    "/case-studies": { title: "Case Studies | Aveto", description: "See our case studies" },
    "/sap": { title: "SAP Services | Aveto", description: "Our SAP services" },
    "/partners": { title: "Partners | Aveto", description: "Meet our partners" },
  };

  // Default SEO
  let seo = seoData[path] || { title: "Aveto Consulting", description: "Aveto Consulting Services" };

  // Dynamic SEO for /services/:service
  if (path.startsWith("/services/")) {
    const serviceName = path.split("/")[2];
    seo = {
      title: `${serviceName.toUpperCase()} | Aveto Services`,
      description: `Learn more about our ${serviceName} service at Aveto.`,
    };
  }

  // Example dynamic arrays from API or hardcoded for now
  const dynamicServices = [
    { name: path.startsWith("/services/") ? path.split("/")[2] : path.split("/")[2], path: path },
  ];

  const dynamicPartners = [
    { name: path.startsWith("/partners") ? path.split("/")[2] : path.split("/")[2], path: path },

  ];
  // Dynamic SEO for /partners/:slug
  if (path.startsWith("/partners/")) {
    const partnerName = path.split("/")[2];
    seo = {
      title: `${partnerName.toUpperCase()} | Aveto Partners`,
      description: `Learn about our partner ${partnerName} at Aveto.`,
    };
  }

  if (path.startsWith("/case-studies/") && path.split("/").length === 3) {
    const caseTitle = (path.split("/")[2]);
    seo = {
      title: `${caseTitle} | Aveto Case Study`,
      description: `Read our case study about ${caseTitle} at Aveto.`,
    };
  }

 

  // Dynamic siteNavigation
  const siteRoutes = [
    { name: "Home", path: "/" },
    { name: "Team Aveto", path: "/Team AVETO.html#gallery01-7h" },
    ...dynamicServices,
    ...dynamicPartners,
  ];

  const siteNavigation = siteRoutes.map(route => ({
    "@type": "SiteNavigationElement",
    name: route.name,
    url: `https://avetoconsulting.com${route.path}`
  }));
  return (
    <div>
      {/* CENTRALIZED SEO */}
      <Helmet key={path}>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://www.avetoconsulting.com${path}`} />
        <meta name="google-site-verification" content="ULOJJ6HpmZHc3IWND9CQSoDyovv0ef3IBIgjUOHJnWQ" />

        {/* JSON-LD Schema with dynamic navigation */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Aveto",
            "image": "https://example.com/logo.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560092"
            },
            "telephone": "",
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-19:00",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.avetoconsulting.com/{search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "siteNavigation": siteNavigation
          })}
        </script>
      </Helmet>
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
      {ShowExploreSerives &&
        <ExploreMoreServices />
      }
      <Footer />
    </div>
  );
}

export default App
