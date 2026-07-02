import { Calendar, Clock, Award, ShieldCheck } from 'lucide-react';
import './Doctors.css';

const Doctors = ({ lang }) => {
  const t = {
    en: {
      subtitle: "Medical Experts",
      title: "Our Chief Specialist",
      desc: "Our clinical departments are headed by renowned specialists dedicated to clinical excellence and patient safety.",
      name: "Dr. N. B. Ghuge",
      role: "Chief Physician & Specialist",
      qualifications: "M.B.B.S., M.D. (Medicine)",
      exp: "15+ Years of Clinical Excellence",
      timing: "Mon - Sat, 10:00 AM - 05:00 PM",
      expertiseTitle: "Special Expertise",
      expertise: [
        "Cardiology",
        "Diabetes Management",
        "Echocardiography",
        "Critical Care Medicine"
      ],
      bio: "Dr. N. B. Ghuge is dedicated to providing comprehensive medical care with a patient-first approach and evidence-based treatment practices.",
      book: "Book Consultation"
    },
    mr: {
      subtitle: "वैद्यकीय तज्ज्ञ",
      title: "आमचे मुख्य तज्ज्ञ डॉक्टर",
      desc: "आमचे सर्व वैद्यकीय विभाग रुग्णांच्या सुरक्षिततेला आणि उपचाराच्या गुणवत्तेला प्राधान्य देणाऱ्या तज्ज्ञ डॉक्टरांच्या मार्गदर्शनाखाली चालतात.",
      name: "डॉ. एन. बी. घुगे",
      role: "मुख्य चिकित्सक व तज्ज्ञ",
      qualifications: "एम.बी.बी.एस., एम.डी. (मेडिसिन)",
      exp: "१५+ वर्षे वैद्यकीय अनुभव",
      timing: "सोमवार - शनिवार, सकाळी १०:०० ते संध्याकाळी ०५:००",
      expertiseTitle: "विशेष प्राविण्य",
      expertise: [
        "हृदयरोग (Cardiology)",
        "मधुमेह (Diabetes Management)",
        "इकोकार्डिओग्राफी (Echocardiography)",
        "क्रिटिकल केअर (Critical Care)"
      ],
      bio: "रुग्णकेंद्रित सेवा आणि आधुनिक उपचार पद्धतींच्या माध्यमातून उत्कृष्ट आरोग्यसेवा देण्यास कटिबद्ध.",
      book: "तपासणी नोंदणी"
    }
  }[lang];

  const scrollToForms = (e) => {
    e.preventDefault();
    const element = document.getElementById('forms');
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="doctors-page section">
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">{t.subtitle}</h4>
          <h2 className="section-title">{t.title}</h2>
          <p className="lead-text">{t.desc}</p>
        </div>

        <div className="doctor-profile-card glass-card" style={{ 
          display: 'grid', 
          gridTemplateColumns: '40% 60%', 
          gap: '2.5rem', 
          alignItems: 'center', 
          maxWidth: '900px', 
          margin: '0 auto', 
          padding: '2.5rem',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--color-border)'
        }}>
          <div className="doc-img" style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img 
              src="doctor.jpg" 
              alt={t.name} 
              style={{ 
                width: '100%', 
                height: '420px', 
                objectFit: 'cover', 
                objectPosition: 'center 15%', 
                display: 'block',
                transition: 'transform 0.5s ease'
              }} 
            />
          </div>
          <div className="doc-info" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-primary-dark)', margin: 0 }}>{t.name}</h3>
              <span className="doc-role" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-primary)', display: 'block', marginTop: '0.25rem' }}>{t.role}</span>
              <p className="doc-qual" style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{t.qualifications}</p>
            </div>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-main)', lineHeight: '1.6', margin: 0 }}>
              {t.bio}
            </p>

            <div className="doc-details" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div className="detail-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
                <Award size={18} className="text-primary" style={{ color: 'var(--color-primary)' }} /> 
                <span><strong>{t.exp}</strong></span>
              </div>
              <div className="detail-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
                <Clock size={18} className="text-primary" style={{ color: 'var(--color-primary)' }} /> 
                <span><strong>{t.timing}</strong></span>
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} /> {t.expertiseTitle}:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {t.expertise.map((expItem, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                    <span>{expItem}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#forms" onClick={scrollToForms} className="btn btn-primary mt-6" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', padding: '0.75rem 2rem' }}>
              <Calendar size={18} /> {t.book}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
