import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/avetologo.png';
import { useServices } from '../../context/ServiceContext';

// const services = [
//   { name: 'SAP', path: '/services/SAP' },
//   { name: 'Oracle', path: '/services/Oracle' },
//   { name: 'Oracle Netsuite', path: '/services/Oracle-Netsuite' },
//   { name: 'Infor Services', path: '/services/Infor' },
//   { name: 'Data', path: '/services/Data' },
//   { name: 'Integration', path: '/services/Integration' },
//   { name: 'AI Enablement', path: '/services/AI-Enablement' },
//   { name: 'Custom Solutions', path: '/services/Custom-Solution' },
// ];



const partners = [
  // { name: 'Ahmettuerk', path: '/partners/Ahmettuerk' },
  { name: 'Onibex', path: '/partners/Onibex' },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showPartnersDropdown, setShowPartnersDropdown] = useState(false);
  const [scrollDir, setScrollDir] = useState('up');
  const location = useLocation();
  const hoverTimer = useRef(null);
  const { services, loading, error } = useServices();



  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY && currentScrollY > 64 ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  useEffect(() => {
    setShowMobileMenu(false);
    setShowServicesDropdown(false);
    setShowPartnersDropdown(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const navLinkClass = (path) =>
    `${isActive(path) ? 'text-orange-800 underline underline-offset-4' : 'text-gray-700'} 
     transition py-2 px-1 hover:text-orange-700`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${scrollDir === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <div className="max-w-7xls mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="w-32">
            <Link to="/">
              <img src={Logo} alt="AVETO Logo" className="w-full h-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-base font-medium items-center relative page-paragraph">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  clearTimeout(hoverTimer.current);
                  setShowServicesDropdown(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) {
                  hoverTimer.current = setTimeout(() => {
                    setShowServicesDropdown(false);
                  }, 200);
                }
              }}
            >
              <button className={`flex items-center space-x-1 ${navLinkClass('/services')}`}>
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showServicesDropdown && (
                <div className="absolute left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" className={navLinkClass('/case-studies')}>Proof of Impact</Link>

            {/* Partners Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  clearTimeout(hoverTimer.current);
                  setShowPartnersDropdown(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) {
                  hoverTimer.current = setTimeout(() => {
                    setShowPartnersDropdown(false);
                  }, 200);
                }
              }}
            >
              <button className={`flex items-center space-x-1 ${navLinkClass('/partners')}`}>
                <span>Partners</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showPartnersDropdown && (
                <div className="absolute left-0 bg-white shadow-lg rounded-lg mt-2 w-56 z-50">
                  {partners.map((partner) => (
                    <Link
                      key={partner.name}
                      to={partner.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {partner.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden text-2xl"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden px-4 pb-4 caption-text-medium">
          <nav className="flex flex-col gap-4 mt-2">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>

            {/* Mobile Dropdown for Services */}
            <div>
              <button
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                className="flex justify-between items-center w-full text-left text-gray-700 py-2"
              >
                Services
                <span>{showServicesDropdown ? '▲' : '▼'}</span>
              </button>
              {showServicesDropdown && (
                <div className="pl-4 flex flex-col gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" className={navLinkClass('/case-studies')}>Case Studies</Link>

            {/* Mobile Dropdown for Partners */}
            <div>
              <button
                onClick={() => setShowPartnersDropdown(!showPartnersDropdown)}
                className="flex justify-between items-center w-full text-left text-gray-700 py-2"
              >
                Partners
                <span>{showPartnersDropdown ? '▲' : '▼'}</span>
              </button>
              {showPartnersDropdown && (
                <div className="pl-4 flex flex-col gap-2">
                  {partners.map((partner) => (
                    <Link
                      key={partner.name}
                      to={partner.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {partner.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link
              to="/contact"
              className="bg-orange-800 text-white text-center px-4 py-2 rounded-lg mt-2 hover:bg-orange-900"
            >
              Get Started
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;