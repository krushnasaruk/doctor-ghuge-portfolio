import { Calendar, Clock, Award } from 'lucide-react';
import './Doctors.css';

const Doctors = ({ lang }) => {
  const t = {
    en: {
      subtitle: "Medical Experts",
      title: "Our Chief Specialist",
      desc: "Led by a physician with over 15 years of clinical excellence in Cardiology, Critical Care, and Internal Medicine.",
      name: "Dr. N. B. Ghuge",
      role: "Chief Physician & Specialist",
      qualifications: "M.B.B.S., M.D. (Medicine)",
      expLabel: "Experience",
      expValue: "15+ Years",
      timingLabel: "OPD Timing",
      timingValue: "Mon–Sat, 10 AM – 5 PM",
      expertiseLabel: "Areas of Expertise",
      expertise: [
        "Cardiology",
        "Diabetes Management",
        "Echocardiography",
        "Critical Care Medicine"
      ],
      bio: "Dr. N. B. Ghuge is dedicated to providing comprehensive medical care with a patient-first approach and evidence-based treatment practices. He leads all clinical departments with a focus on quality, safety, and compassionate care.",
      book: "Book Consultation"
    },
    mr: {
      subtitle: "वैद्यकीय तज्ज्ञ",
      title: "आमचे मुख्य तज्ज्ञ डॉक्टर",
      desc: "हृदयरोग, क्रिटिकल केअर आणि आंतरिक वैद्यकशास्त्रात १५+ वर्षांचा अनुभव असलेल्या तज्ज्ञ डॉक्टरांच्या नेतृत्वाखाली.",
      name: "डॉ. एन. बी. घुगे",
      role: "मुख्य चिकित्सक व तज्ज्ञ",
      qualifications: "एम.बी.बी.एस., एम.डी. (मेडिसिन)",
      expLabel: "अनुभव",
      expValue: "१५+ वर्षे",
      timingLabel: "ओपीडी वेळ",
      timingValue: "सोमवार–शनिवार, सकाळी १० ते संध्या. ५",
      expertiseLabel: "विशेष प्राविण्य",
      expertise: [
        "हृदयरोग (Cardiology)",
        "मधुमेह (Diabetes)",
        "इकोकार्डिओग्राफी",
        "क्रिटिकल केअर"
      ],
      bio: "रुग्णकेंद्रित सेवा आणि आधुनिक उपचार पद्धतींच्या माध्यमातून उत्कृष्ट आरोग्यसेवा देण्यास कटिबद्ध. गुणवत्ता, सुरक्षितता आणि सहानुभूतीपूर्ण उपचारांवर विशेष भर.",
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

        <div className="doctor-profile">
          {/* Circular Photo */}
          <div className="doctor-photo-wrapper">
            <div className="doctor-photo">
              <img src="doctor.jpg" alt={t.name} />
            </div>
          </div>

          {/* Name & Credentials */}
          <div className="doctor-header">
            <h3 className="doctor-name">{t.name}</h3>
            <p className="doctor-credentials">{t.role}</p>
            <p className="doctor-degree">{t.qualifications}</p>
          </div>

          <div className="doctor-divider" />

          {/* Bio */}
          <p className="doctor-bio">{t.bio}</p>

          {/* Info Cards */}
          <div className="doctor-info-grid">
            <div className="info-card">
              <div className="info-card-icon">
                <Award size={20} />
              </div>
              <div className="info-card-content">
                <div className="info-card-label">{t.expLabel}</div>
                <div className="info-card-value">{t.expValue}</div>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <Clock size={20} />
              </div>
              <div className="info-card-content">
                <div className="info-card-label">{t.timingLabel}</div>
                <div className="info-card-value">{t.timingValue}</div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="doctor-expertise">
            <p className="expertise-label">{t.expertiseLabel}</p>
            <div className="expertise-list">
              {t.expertise.map((item, idx) => (
                <span key={idx} className="expertise-chip">{item}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href="#forms" onClick={scrollToForms} className="doctor-cta">
            <Calendar size={18} />
            {t.book}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
