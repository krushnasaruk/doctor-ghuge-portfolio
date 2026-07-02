import { useState, useEffect } from 'react';
import { Menu, X, HeartPulse, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ lang, setLang }) => {
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

  const menuText = {
    en: {
      home: 'Home',
      about: 'About Us',
      doctors: 'Doctors',
      gallery: 'Gallery',
      admission: 'Appointment & Admission',
      contact: 'Contact',
      book: 'Book Appointment',
      specialties: 'Specialties',
      cathLab: 'Cardiac Cath Lab',
      cardiology: 'Cardiology',
      diabetes: 'Diabetes Care',
      critical: 'Critical Care',
      neuro: 'Neurology & Stroke',
      kidney: 'Kidney Diseases',
      gastro: 'Gastrointestinal'
    },
    mr: {
      home: 'मुखपृष्ठ',
      about: 'आमच्याविषयी',
      doctors: 'डॉक्टर',
      gallery: 'गॅलरी',
      admission: 'तपासणी व प्रवेश',
      contact: 'संपर्क',
      book: 'तपासणी नोंदणी',
      specialties: 'वैद्यकीय विभाग',
      cathLab: 'कार्डियाक कॅथ लॅब',
      cardiology: 'हृदयरोग विभाग',
      diabetes: 'मधुमेह विभाग',
      critical: 'क्रिटिकल केअर',
      neuro: 'मेंदू व पक्षाघात',
      kidney: 'किडनी विकार',
      gastro: 'पोटाचे विकार'
    }
  }[lang];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Main Navigation */}
      <div className="main-nav">
        <div className="container nav-inner">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img 
              src="logo.jpg" 
              alt="Ghuge Hospital Logo" 
              style={{ 
                height: '46px', 
                width: 'auto', 
                borderRadius: '6px', 
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }} 
            />
            <div className="brand-text">
              <span className="brand-name">
                {lang === 'en' ? 'Ghuge Hospital' : 'घुगे हॉस्पिटल'}
              </span>
              <span className="brand-tagline">
                {lang === 'en' ? 'Heart & Critical Care' : 'हार्ट & क्रिटिकल केअर'}
              </span>
            </div>
          </a>

          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>
              {menuText.home}
            </a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>
              {menuText.about}
            </a>
            
            {/* Mega Menu Dropdown */}
            <div className="dropdown">
              <span className={`dropdown-trigger ${['departments', 'cardiology'].includes(activeSection) ? 'active' : ''}`}>
                {menuText.specialties} <ChevronDown size={16} />
              </span>
              <div className="dropdown-menu">
                <a href="#cardiology" onClick={(e) => scrollToSection(e, 'cardiology')} className="dropdown-highlight">
                  <HeartPulse size={18} /> {menuText.cathLab}
                </a>
                <div className="dropdown-grid">
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{menuText.cardiology}</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{menuText.diabetes}</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{menuText.critical}</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{menuText.neuro}</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{menuText.kidney}</a>
                  <a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{menuText.gastro}</a>
                </div>
              </div>
            </div>

            <a href="#doctors" onClick={(e) => scrollToSection(e, 'doctors')} className={activeSection === 'doctors' ? 'active' : ''}>
              {menuText.doctors}
            </a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className={activeSection === 'gallery' ? 'active' : ''}>
              {menuText.gallery}
            </a>
            <a href="#forms" onClick={(e) => scrollToSection(e, 'forms')} className={activeSection === 'forms' ? 'active' : ''}>
              {menuText.admission}
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>
              {menuText.contact}
            </a>

            <div className="nav-actions-mobile">
              <button 
                onClick={() => { setLang(lang === 'en' ? 'mr' : 'en'); setMobileMenuOpen(false); }}
                className="btn btn-outline"
                style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', textTransform: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.8rem' }}
              >
                🌐 {lang === 'en' ? 'मराठी' : 'English'}
              </button>
              <a href="#forms" onClick={(e) => scrollToSection(e, 'forms')} className="btn btn-primary text-center" style={{ width: '100%', display: 'block' }}>
                {menuText.book}
              </a>
            </div>
          </nav>

          <div className="nav-actions">
            <button 
              onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
              className="btn btn-outline lang-toggle-btn"
              style={{ 
                padding: '0.5rem 0.8rem', 
                fontSize: '0.85rem', 
                textTransform: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              🌐 {lang === 'en' ? 'मराठी' : 'English'}
            </button>
            <a href="#forms" onClick={(e) => scrollToSection(e, 'forms')} className="btn btn-primary">
              {menuText.book}
            </a>
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
