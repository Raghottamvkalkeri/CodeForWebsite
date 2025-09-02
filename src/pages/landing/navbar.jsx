import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/avetologo.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollDir, setScrollDir] = useState('up');
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 64) {
        setScrollDir('down');
      } else {
        setScrollDir('up');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `${isActive(path) ? 'text-orange-800 underline underline-offset-4' : 'text-gray-700'} 
     transition py-2 px-1 hover:text-orange-700`;

  return (
    <header
     className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
         scrollDir === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="w-32">
            <Link to="/">
              <img src={Logo} alt="AVETO Logo" className="w-full h-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-base font-medium items-center">
            <Link to="/website" className={navLinkClass('/website')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>
            <Link to="/services" className={navLinkClass('/services')}>Services</Link>
            <Link to="/case-studies" className={navLinkClass('/case-studies')}>Case Studies</Link>
            <Link to="/partners" className={navLinkClass('/partners')}>Partners</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-orange-800 text-white px-5 py-2 hover:bg-orange-900 transition rounded"
            >
              Get Started
            </Link>
          </div>

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
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-2">
            <Link to="/website" className={navLinkClass('/website')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>
            <Link to="/services" className={navLinkClass('/services')}>Services</Link>
            <Link to="/case-studies" className={navLinkClass('/case-studies')}>Case Studies</Link>
            <Link to="/partners" className={navLinkClass('/partners')}>Partners</Link>
            <Link
              to="/contact"
              className="bg-orange-800 text-white text-center px-4 py-2 rounded-lg mt-2 hover:bg-orange-900"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
