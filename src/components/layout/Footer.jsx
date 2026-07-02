import { MapPin, Phone, Mail, Globe, MessageCircle, Camera, Briefcase, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = ({ lang }) => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const t = {
    en: {
      brandDesc: "Providing advanced multi-speciality medical care, Cardiology, and Diabetes treatment with special ICU & CCU monitoring in Ambajogai.",
      quickLinks: "Quick Links",
      about: "About Us",
      doctors: "Our Doctor",
      gallery: "Gallery",
      admissions: "Admission & Appointment",
      contact: "Contact Us",
      deptsHeader: "Our Specialties",
      cardiology: "Cardiology",
      diabetes: "Diabetes Care",
      critical: "Critical Care",
      others: "Other Specialties",
      contactHeader: "Contact Details",
      loc: "Near SBI Bank, Housing Society, Ambajogai, Maharashtra",
      emergency: "Emergency",
      reception: "Reception",
      newsletterHeader: "Subscribe to our Newsletter",
      newsletterDesc: "Get the latest health updates and hospital news.",
      newsletterBtn: "Subscribe",
      copyright: "Ghuge Heart & Critical Care Hospital. All Rights Reserved."
    },
    mr: {
      brandDesc: "अत्याधुनिक मल्टिस्पेशालिटी वैद्यकीय सेवा, हृदयरोग आणि मधुमेह उपचार सोबत सुसज्ज आयसीयू (ICU) व सीसीयू (CCU) सुविधा पुरवणारे रुग्णालय.",
      quickLinks: "महत्त्वाच्या लिंक्स",
      about: "आमच्याविषयी",
      doctors: "तज्ज्ञ डॉक्टर",
      gallery: "गॅलरी",
      admissions: "नोंदणी व प्रवेश",
      contact: "संपर्क साधा",
      deptsHeader: "आमचे विभाग",
      cardiology: "हृदयरोग विभाग",
      diabetes: "मधुमेह विभाग",
      critical: "क्रिटिकल केअर",
      others: "इतर उपचार",
      contactHeader: "संपर्क तपशील",
      loc: "एस.बी.आय. बँकेसमोर, हौसिंग सोसायटी, अंबाजोगाई, महाराष्ट्र",
      emergency: "आपत्कालीन",
      reception: "रुग्णालय दूरध्वनी",
      newsletterHeader: "माहिती पत्रकासाठी नोंदणी करा",
      newsletterDesc: "आरोग्याविषयी ताज्या अपडेट्स आणि रुग्णालयाच्या बातम्या मिळवा.",
      newsletterBtn: "नोंदणी करा",
      copyright: "घुगे हार्ट & क्रिटिकल केअर हॉस्पिटल. सर्व हक्क सुरक्षित."
    }
  }[lang];

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img src="logo.jpg" alt="Ghuge Hospital Logo" style={{ height: '42px', width: 'auto', borderRadius: '4px' }} />
              <div className="brand-text">
                <span className="brand-name">{lang === 'en' ? 'Ghuge Hospital' : 'घुगे हॉस्पिटल'}</span>
                <span className="brand-tagline" style={{ fontSize: '0.65rem' }}>{lang === 'en' ? 'Heart & Critical Care' : 'हार्ट & क्रिटिकल केअर'}</span>
              </div>
            </a>
            <p className="footer-desc">
              {t.brandDesc}
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
            <h4 className="footer-title">{t.quickLinks}</h4>
            <ul>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t.about}</a></li>
              <li><a href="#doctors" onClick={(e) => scrollToSection(e, 'doctors')}>{t.doctors}</a></li>
              <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>{t.gallery}</a></li>
              <li><a href="#forms" onClick={(e) => scrollToSection(e, 'forms')}>{t.admissions}</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t.contact}</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="footer-links-col">
            <h4 className="footer-title">{t.deptsHeader}</h4>
            <ul>
              <li><a href="#cardiology" onClick={(e) => scrollToSection(e, 'cardiology')}>{t.cardiology}</a></li>
              <li><a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{t.diabetes}</a></li>
              <li><a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{t.critical}</a></li>
              <li><a href="#departments" onClick={(e) => scrollToSection(e, 'departments')}>{t.others}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-col">
            <h4 className="footer-title">{t.contactHeader}</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>{t.loc}</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>
                  <strong>{t.emergency}:</strong> +91 95297 53754<br />
                  <strong>{t.reception}:</strong> 02446-243044
                </span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@ghugehospital.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="newsletter-box">
          <div className="newsletter-text">
            <h4>{t.newsletterHeader}</h4>
            <p>{t.newsletterDesc}</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn btn-secondary">
              {t.newsletterBtn} <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
          <div className="bottom-links">
            <a href="#privacy">{lang === 'en' ? 'Terms & Conditions' : 'अटी आणि शर्ती'}</a>
            <a href="#privacy">{lang === 'en' ? 'Privacy Policy' : 'गोपनीयता धोरण'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
