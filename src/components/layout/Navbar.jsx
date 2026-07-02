import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, HeartPulse, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section highlighting
      const sections = ['home', 'about', 'departments', 'cardiology', 'doctors', 'gallery', 'forms', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="container nav-inner">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="brand">
            <HeartPulse size={36} className="brand-icon" />
            <div className="brand-text">
              <span className="brand-name">HeartCare</span>
              <span className="brand-tagline">Advanced Cardiac Care</span>
            </div>
          </a>

          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About Us</a>
            
            {/* Mega Menu Dropdown */}
            <div className="dropdown">
              <span className={`dropdown-trigger ${['departments', 'cardiology'].includes(activeSection) ? 'active' : ''}`}>
                Departments <ChevronDown size={16} />
              </span>
              <div className="dropdown-menu">
                <a href="#cardiology" onClick={(e) => scrollToSection(e, 'cardiology')} className="dropdown-highlight">
                  <HeartPulse size={18} /> Center of Excellence: Cardiology
                </a>
                <div className="dropdown-grid">
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>Neurology</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>Orthopedics</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>Pediatrics</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>Oncology</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>General Medicine</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>View All Departments &rarr;</a>
                </div>
              </div>
            </div>

            <a href="#doctors" onClick={(e) => scrollToSection(e, 'doctors')} className={activeSection === 'doctors' ? 'active' : ''}>Doctors</a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className={activeSection === 'gallery' ? 'active' : ''}>Gallery</a>
            <a href="#forms" onClick={(e) => scrollToSection(e, 'forms')} className={activeSection === 'forms' ? 'active' : ''}>Admission</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>

            <div className="nav-actions-mobile">
              <a href="#forms" onClick={(e) => scrollToSection(e, 'forms')} className="btn btn-primary">Book Appointment</a>
            </div>
          </nav>

          <div className="nav-actions">
            <a href="#forms" onClick={(e) => scrollToSection(e, 'forms')} className="btn btn-primary">Book Appointment</a>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
