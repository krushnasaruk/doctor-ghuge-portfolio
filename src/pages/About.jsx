import { ShieldPlus, Activity, HeartPulse, Award, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = ({ lang }) => {
  const t = {
    en: {
      subtitle: "Our Legacy",
      title: "About Ghuge Hospital",
      p1: "Ghuge Heart & Critical Care Hospital, Ambajogai, is a modern multi-speciality healthcare center dedicated to providing quality medical care with special expertise in Cardiology, Critical Care, and Diabetes Management. Our hospital combines advanced diagnostic facilities, experienced medical professionals, and compassionate patient care to deliver comprehensive treatment for a wide range of medical conditions.",
      p2: "We specialize in the diagnosis and treatment of heart diseases and provide advanced cardiac interventions through our state-of-the-art Cardiac Cath Lab facility. Our hospital is equipped with modern diagnostic technologies, intensive care units, and emergency care services to ensure the highest standards of patient care.",
      p3: "Our mission is to make quality healthcare accessible, affordable, and patient-centered while maintaining excellence in clinical services and medical ethics.",
      missionTitle: "Our Mission",
      missionText: "To provide accessible, affordable, ethical, and high-quality healthcare services through advanced medical technology, experienced healthcare professionals, and compassionate patient care.",
      visionTitle: "Our Vision",
      visionText: "To become a trusted center of excellence in cardiology, critical care, and multi-speciality healthcare services in the region.",
      infraTitle: "Infrastructure",
      infraSubtitle: "Diagnostic & Medical Facilities",
      icuTitle: "Intensive Care Unit (ICU & CCU)",
      icuText: "Fully equipped ICU and CCU monitoring systems with 24/7 care for cardiac and other emergency medical conditions.",
      diagnosticsTitle: "Advanced Diagnostics",
      diagnosticsText: "Equipped with Sonography, MRI, 2D Echocardiography, Color Doppler, Stress Test (TMT), X-Ray, and ECG.",
      cathLabTitle: "Cardiac Cath Lab",
      cathLabText: "State-of-the-art flat-panel Catheterization Lab for advanced interventions (Angiography & Angioplasty) - Coming Soon!",
      whySubtitle: "Our Strengths",
      whyTitle: "Why Choose Ghuge Hospital?",
      whyItems: [
        "Specialized Cardiac Care",
        "Advanced Cardiac Cath Lab (Coming Soon)",
        "Experienced Medical Professionals",
        "Modern Diagnostic Facilities",
        "ICU & CCU Services",
        "Emergency Medical Care",
        "Diabetes Management Services",
        "Affordable Healthcare",
        "Government Scheme Facilities Available (MJPJAY)",
        "Patient-Centered Treatment Approach"
      ]
    },
    mr: {
      subtitle: "आमचे मूळ",
      title: "आमच्याविषयी",
      p1: "घुगे हार्ट अँड क्रिटिकल केअर हॉस्पिटल, अंबाजोगाई हे आधुनिक मल्टिस्पेशालिटी रुग्णालय असून हृदयरोग, क्रिटिकल केअर आणि मधुमेह उपचारामध्ये विशेष सेवा प्रदान करते. अनुभवी डॉक्टर, अत्याधुनिक वैद्यकीय उपकरणे आणि रुग्णकेंद्रित सेवांद्वारे आम्ही सर्वोत्कृष्ट उपचार देण्यास कटिबद्ध आहोत.",
      p2: "आमच्या रुग्णालयात अत्याधुनिक कार्डियाक कॅथ लॅब, आयसीयू, सीसीयू आणि विविध निदान सुविधा उपलब्ध आहेत. आम्ही प्रत्येक रुग्णाला सुरक्षित, प्रभावी आणि परवडणारी आरोग्य सेवा देण्याचा प्रयत्न करतो.",
      p3: "अत्याधुनिक वैद्यकीय तंत्रज्ञान, अनुभवी डॉक्टर आणि रुग्णकेंद्रित सेवांद्वारे परवडणारी व दर्जेदार आरोग्यसेवा उपलब्ध करून देणे हे आमचे उद्दिष्ट आहे.",
      missionTitle: "आमचे ध्येय",
      missionText: "अत्याधुनिक वैद्यकीय तंत्रज्ञान, अनुभवी डॉक्टर आणि रुग्णकेंद्रित सेवांद्वारे परवडणारी व दर्जेदार आरोग्यसेवा उपलब्ध करून देणे.",
      visionTitle: "आमची दृष्टी",
      visionText: "हृदयरोग, क्रिटिकल केअर आणि मल्टिस्पेशालिटी आरोग्यसेवेमध्ये विश्वासार्ह आणि उत्कृष्ट केंद्र बनणे.",
      infraTitle: "सुविधा",
      infraSubtitle: "उपलब्ध निदान आणि वैद्यकीय सुविधा",
      icuTitle: "अतिदक्षता विभाग (ICU & CCU)",
      icuText: "हृदयविकार आणि इतर गंभीर वैद्यकीय आजारांवर २४ तास लक्ष ठेवण्यासाठी सुसज्ज आयसीयू व सीसीयू विभाग.",
      diagnosticsTitle: "अत्याधुनिक निदान चाचण्या",
      diagnosticsText: "सोनोग्राफी, एमआरआय (MRI), 2D इकोकार्डिओग्राफी, कलर डॉप्लर, स्ट्रेस टेस्ट (TMT), एक्स-रे आणि ईसीजी सुविधा उपलब्ध.",
      cathLabTitle: "कार्डियाक कॅथ लॅब",
      cathLabText: "अँजिओग्राफी व अँजिओप्लास्टी सारख्या हृदयरोगावरील प्रगत उपचारांसाठी अत्याधुनिक कॅथ लॅब (लवकरच सुरू होत आहे).",
      whySubtitle: "आमची वैशिष्ट्ये",
      whyTitle: "आम्हालाच का निवडावे?",
      whyItems: [
        "हृदयरोग उपचारातील विशेष प्राविण्य",
        "अत्याधुनिक कार्डियाक कॅथ लॅब (लवकरच)",
        "अनुभवी डॉक्टर व कर्मचारी",
        "आधुनिक निदान सुविधा",
        "आयसीयू व सीसीयू सेवा",
        "आपत्कालीन वैद्यकीय सेवा",
        "मधुमेह उपचार सुविधा",
        "परवडणारी आरोग्यसेवा",
        "शासकीय योजनांचा लाभ (MJPJAY)",
        "रुग्णकेंद्रित उपचार पद्धती"
      ]
    }
  }[lang];

  return (
    <div className="about-page section" style={{ paddingTop: '5rem' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">{t.subtitle}</h4>
          <h2 className="section-title">{t.title}</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-content animate-fade-in">
            <p className="lead-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.7' }}>
              {t.p1}
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.7' }}>
              {t.p2}
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              {t.p3}
            </p>
            
            <div className="mission-vision mt-10">
              <div className="mv-card glass-card">
                <div className="mv-icon"><HeartPulse size={28} style={{ color: 'var(--color-primary)' }} /></div>
                <div>
                  <h3>{t.missionTitle}</h3>
                  <p>{t.missionText}</p>
                </div>
              </div>
              <div className="mv-card glass-card mt-4">
                <div className="mv-icon"><ShieldPlus size={28} style={{ color: 'var(--color-primary)' }} /></div>
                <div>
                  <h3>{t.visionTitle}</h3>
                  <p>{t.visionText}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-images">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" alt="Hospital Building" className="rounded-image main-img shadow-xl" />
            <div className="badge-overlay">
              <Award size={36} color="var(--color-primary)" />
              <span>{lang === 'en' ? 'MJPJAY\nApproved' : 'शासकीय\nयोजना पात्र'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure */}
      <div className="bg-light section mt-10" style={{ margin: '4rem 0 0 0', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="section-subtitle">{t.infraTitle}</h4>
            <h2 className="section-title">{t.infraSubtitle}</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="facility-card glass-card">
              <Activity size={40} className="icon-primary" />
              <h3>{t.icuTitle}</h3>
              <p>{t.icuText}</p>
            </div>
            <div className="facility-card glass-card">
              <HeartPulse size={40} className="icon-primary" />
              <h3>{t.cathLabTitle}</h3>
              <p>{t.cathLabText}</p>
            </div>
            <div className="facility-card glass-card">
              <ShieldPlus size={40} className="icon-primary" />
              <h3>{t.diagnosticsTitle}</h3>
              <p>{t.diagnosticsText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="section mt-10" style={{ padding: '4rem 0 0 0' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="section-subtitle">{t.whySubtitle}</h4>
            <h2 className="section-title">{t.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-2 gap-8" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {t.whyItems.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={20} style={{ color: '#4caf50', flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
