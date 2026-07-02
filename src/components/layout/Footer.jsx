import { HeartPulse, MapPin, Phone, Mail, Globe, MessageCircle, Camera, Briefcase, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="footer-brand">
              <HeartPulse size={36} className="brand-icon" />
              <div className="brand-text">
                <span className="brand-name">HeartCare</span>
                <span className="brand-tagline">Advanced Cardiac Care</span>
              </div>
            </a>
            <p className="footer-desc">
              Providing world-class healthcare with state-of-the-art facilities, expert doctors, and compassionate care.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Website"><Globe size={20} /></a>
              <a href="#" aria-label="Social"><MessageCircle size={20} /></a>
              <a href="#" aria-label="Media"><Camera size={20} /></a>
              <a href="#" aria-label="Professional"><Briefcase size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a></li>
              <li><a href="#doctors" onClick={(e) => scrollToSection(e, 'doctors')}>Our Doctors</a></li>
              <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>Gallery</a></li>
              <li><a href="#forms" onClick={(e) => scrollToSection(e, 'forms')}>Admission Process</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="footer-links-col">
            <h4 className="footer-title">Departments</h4>
            <ul>
              <li><a href="#cardiology" onClick={(e) => scrollToSection(e, 'cardiology')}>Cardiology</a></li>
              <li><a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>Neurology</a></li>
              <li><a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>Orthopedics</a></li>
              <li><a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>Pediatrics</a></li>
              <li><a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>Oncology</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Health Avenue, Medical City, HC 12345</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>
                  <strong>Emergency:</strong> 1066<br />
                  <strong>Reception:</strong> +91 800 123 4567
                </span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@heartcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="newsletter-box">
          <div className="newsletter-text">
            <h4>Subscribe to our Newsletter</h4>
            <p>Get the latest health updates and hospital news.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn btn-secondary">
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} HeartCare Multispeciality Hospital. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="#privacy">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
