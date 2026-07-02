import { useState, useEffect } from 'react';
import { 
  HeartPulse, Activity, ShieldPlus, ArrowRight,
  PhoneCall
} from 'lucide-react';
import './Home.css';

const Home = ({ lang }) => {
  const [stats, setStats] = useState({ exp: 0, doctors: 0, patients: 0, specials: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ exp: 10, doctors: 12, patients: 15, specials: 10 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
      badge: "Multi-speciality, Cardiology & Diabetes Treatment",
      heroTitle: "Ghuge Heart & Critical Care Hospital",
      heroSubtitle: "Dedicated to providing advanced medical care with special expertise in Cardiology, Critical Care, and Diabetes Management in Ambajogai.",
      bookApp: "Book Appointment",
      emergencyCare: "Emergency Care",
      helpline: "24x7 Emergency Contact",
      stats: {
        exp: "Years of Excellence",
        doctors: "Medical Experts",
        patients: "Patients Treated (K)",
        specials: "Facilities & Services"
      },
      welcomeSubtitle: "Welcome to Ghuge Hospital",
      welcomeTitle: "Quality Healthcare, Accessible & Affordable",
      welcomeDesc: "Ghuge Heart & Critical Care Hospital, Ambajogai, is a modern multi-speciality healthcare center dedicated to providing quality medical care with special expertise in Cardiology, Critical Care, and Diabetes Management. Our hospital combines advanced diagnostic facilities, experienced medical professionals, and compassionate patient care.",
      cathLabNotice: "Cardiac Cath Lab Facility - Coming Soon!",
      featureCathLabTitle: "Cardiac Cath Lab (Coming Soon)",
      featureCathLabDesc: "Establishing the region's advanced catheterization laboratory for interventional cardiac procedures.",
      featureCriticalTitle: "Emergency & Critical Care",
      featureCriticalDesc: "Dedicated ICU and CCU facilities providing round-the-clock observation and care for critical patients.",
      featureGovTitle: "Government Schemes (MJPJAY)",
      featureGovDesc: "Free treatment and surgeries are available under Mahatma Jyotiba Phule Jan Arogya Yojana.",
      readMore: "Read Our Full Profile"
    },
    mr: {
      badge: "मल्टीस्पेशालिटी, हृदयरोग व मधुमेह उपचार रुग्णालय",
      heroTitle: "घुगे हार्ट & क्रिटिकल केअर हॉस्पिटल",
      heroSubtitle: "अंबाजोगाई येथील हृदयरोग, क्रिटिकल केअर आणि मधुमेह उपचारांमध्ये प्रगत आरोग्य सेवा प्रदान करण्यास समर्पित.",
      bookApp: "तпасणी नोंदणी",
      emergencyCare: "आपत्कालीन सेवा",
      helpline: "२४x७ आपत्कालीन संपर्क",
      stats: {
        exp: "वर्षे उत्कृष्ट सेवा",
        doctors: "अनुभवी डॉक्टर्स",
        patients: "हजारो बरे झालेले रुग्ण",
        specials: "निदान व सेवा"
      },
      welcomeSubtitle: "घुगे हॉस्पिटलमध्ये आपले स्वागत आहे",
      welcomeTitle: "दर्जेदार, सुरक्षित आणि परवडणारी आरोग्य सेवा",
      welcomeDesc: "घुगे हार्ट अँड क्रिटिकल केअर हॉस्पिटल, अंबाजोगाई हे आधुनिक मल्टिस्पेशालिटी रुग्णालय असून हृदयरोग, क्रिटिकल केअर आणि मधुमेह उपचारामध्ये विशेष सेवा प्रदान करते. अनुभवी डॉक्टर, अत्याधुनिक वैद्यकीय उपकरणे आणि रुग्णकेंद्रित सेवांद्वारे आम्ही सर्वोत्कृष्ट उपचार देण्यास कटिबद्ध आहोत.",
      cathLabNotice: "कार्डियाक कॅथ लॅब सुविधा - लवकरच आपल्या सेवेत!",
      featureCathLabTitle: "कार्डियाक कॅथ लॅब (लवकरच आपल्या सेवेत)",
      featureCathLabDesc: "अँजिओग्राफी, अँजिओप्लास्टी सारख्या प्रगत हृदय उपचारांसाठी अत्याधुनिक कॅथ लॅब सुविधा.",
      featureCriticalTitle: "अतिदक्षता विभाग (ICU & CCU)",
      featureCriticalDesc: "गंभीर रुग्णांवर तात्काळ उपचारांसाठी सुसज्ज आयसीयू व सीसीयू आणि २४ तास सतत निरीक्षण.",
      featureGovTitle: "शासकीय योजना (MJPJAY)",
      featureGovDesc: "महात्मा ज्योतिबा फुले जनआरोग्य योजना अंतर्गत पात्र रुग्णांना मोफत उपचार व शस्त्रक्रिया सुविधा.",
      readMore: "आमच्याविषयी अधिक वाचा"
    }
  }[lang];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.9) 0%, rgba(27, 38, 59, 0.8) 100%)' }}></div>
        <div className="container hero-content" style={{ zIndex: 2, position: 'relative' }}>
          <div className="hero-text animate-fade-in">
            <div className="badge" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '50px', display: 'inline-block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              {t.badge}
            </div>
            
            {/* Cath Lab Announcement Badge */}
            <div className="cathlab-badge" style={{ 
              background: 'linear-gradient(45deg, #ff9800, #ff5722)', 
              color: '#fff', 
              padding: '0.5rem 1.2rem', 
              borderRadius: '8px', 
              fontSize: '0.9rem', 
              fontWeight: 'bold', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: '1rem',
              boxShadow: '0 4px 15px rgba(255, 87, 34, 0.3)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <HeartPulse size={18} className="pulse-icon" />
              <span>{t.cathLabNotice}</span>
            </div>

            <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              {lang === 'en' ? 'Advanced Heart Care with ' : 'हृदयाची काळजी, प्रगत '}
              <span style={{ color: 'var(--color-primary-light)' }}>
                {lang === 'en' ? 'Compassion.' : 'उपचार व आपुलकी.'}
              </span>
            </h1>
            
            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '650px', lineHeight: '1.6' }}>
              {t.heroSubtitle}
            </p>
            
            <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#forms" onClick={(e) => scrollToSection(e, 'forms')} className="btn btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '6px' }}>
                {t.bookApp}
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-secondary" style={{ padding: '0.8rem 2rem', borderRadius: '6px' }}>
                {t.emergencyCare}
              </a>
            </div>

            <div className="emergency-helpline mt-6" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '1.1rem' }}>
              <PhoneCall size={22} className="pulse-icon" style={{ color: '#4caf50' }} /> 
              <span>{t.helpline}: <strong>+91 95297 53754</strong> / <strong>02446-243044</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card glass-card">
            <h3>{stats.exp}+</h3>
            <p>{t.stats.exp}</p>
          </div>
          <div className="stat-card glass-card">
            <h3>{stats.doctors}+</h3>
            <p>{t.stats.doctors}</p>
          </div>
          <div className="stat-card glass-card">
            <h3>{stats.patients}+</h3>
            <p>{t.stats.patients}</p>
          </div>
          <div className="stat-card glass-card">
            <h3>{stats.specials}+</h3>
            <p>{t.stats.specials}</p>
          </div>
        </div>
      </section>

      {/* Intro Summary */}
      <section className="about-section section" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
              alt="Ghuge Hospital" 
              className="rounded-image shadow-lg"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid var(--color-border)' }}
            />
          </div>
          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 className="section-subtitle">{t.welcomeSubtitle}</h4>
            <h2 className="section-title">{t.welcomeTitle}</h2>
            <p style={{ lineHeight: '1.7', color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
              {t.welcomeDesc}
            </p>
            <ul className="feature-list mt-6" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <HeartPulse size={22} className="icon-primary" style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} /> 
                <div>
                  <strong style={{ fontSize: '1.05rem' }}>{t.featureCathLabTitle}</strong>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>{t.featureCathLabDesc}</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <Activity size={22} className="icon-primary" style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} /> 
                <div>
                  <strong style={{ fontSize: '1.05rem' }}>{t.featureCriticalTitle}</strong>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>{t.featureCriticalDesc}</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                <ShieldPlus size={22} className="icon-primary" style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} /> 
                <div>
                  <strong style={{ fontSize: '1.05rem' }}>{t.featureGovTitle}</strong>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>{t.featureGovDesc}</p>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                {t.readMore} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
