import { HeartPulse, Activity, Stethoscope, CheckCircle2 } from 'lucide-react';
import './Cardiology.css';

const Cardiology = ({ lang }) => {
  const t = {
    en: {
      subtitle: "Center of Excellence",
      title: "Advanced Cardiac & Cath Lab Services",
      desc: "Our cardiology department is establishing the region's advanced interventional cardiac care facility. We provide immediate cardiac support, non-invasive cardiac checkups, and are setting up a state-of-the-art flat-panel Cath Lab to perform critical life-saving operations.",
      stats: {
        icu: "24/7 ICU Care",
        cath: "Cath Lab (Coming Soon)",
        success: "Patient Care Priority"
      },
      specTitle: "Our Specializations",
      specSubtitle: "Comprehensive Cardiac Services",
      interventionalTitle: "Cath Lab Procedures (Coming Soon)",
      interventionalDesc: "Our upcoming flat-panel Cardiac Catheterization Lab will perform advanced interventional procedures:",
      nonInvasiveTitle: "Non-Invasive Cardiology",
      nonInvasiveDesc: "Comprehensive cardiac diagnostics and testing available at our hospital:",
      specializedTitle: "Diabetes & Critical Care",
      specializedDesc: "Comprehensive critical care monitoring and diabetes complications management:",
      procedures: [
        "Coronary Angiography",
        "Coronary Angioplasty",
        "Permanent Pacemaker Implantation",
        "ASD Closure (Device)",
        "VSD Closure (Device)",
        "PDA Closure (Device)"
      ],
      nonInvasiveItems: [
        "2D Echocardiography & ECG",
        "Color Doppler & Sonography",
        "Stress Test (TMT) / Cardiac Evaluation",
        "Hypertension & Lipid Management"
      ],
      specializedItems: [
        "Diabetes Diagnosis & Treatment",
        "Diabetes Complications Care",
        "ICU & CCU Intensive Monitoring",
        "Emergency Critical Care Management"
      ]
    },
    mr: {
      subtitle: "आमचे विशेष केंद्र",
      title: "प्रगत हृदयरोग आणि कॅथ लॅब सेवा",
      desc: "आमचा हृदयरोग विभाग अंबाजोगाई परिसरात प्रगत हृदय सेवा उपलब्ध करत आहे. आम्ही त्वरित हृदय तपासणी आणि उपचार देतो. लवकरच सुरु होणाऱ्या कॅथ लॅबद्वारे गंभीर रुग्णांना जीवनरक्षक उपचार मिळतील.",
      stats: {
        icu: "२४/७ आयसीयू केअर",
        cath: "कॅथ लॅब (लवकरच)",
        success: "रुग्ण आरोग्य प्राधान्य"
      },
      specTitle: "वैद्यकीय वैशिष्ट्ये",
      specSubtitle: "सर्वसमावेशक हृदयरोग उपचार",
      interventionalTitle: "कार्डियाक कॅथ लॅब सेवा (लवकरच)",
      interventionalDesc: "लवकरच सुरू होणाऱ्या अत्याधुनिक कार्डियाक कॅथ लॅबमध्ये खालील प्रगत उपचार उपलब्ध असतील:",
      nonInvasiveTitle: "नॉन-इन्व्हेसिव्ह हृदयरोग सेवा",
      nonInvasiveDesc: "रुग्णालयात उपलब्ध असलेल्या हृदयाशी संबंधित निदान आणि चाचण्या:",
      specializedTitle: "मधुमेह आणि गंभीर आजार उपचार",
      specializedDesc: "अतिदक्षता नियंत्रण आणि मधुमेहाच्या गुंतागुंतीवरील उपचार:",
      procedures: [
        "अँजिओग्राफी (Coronary Angiography)",
        "अँजिओप्लास्टी (Coronary Angioplasty)",
        "पेसमेकर बसविणे (Permanent Pacemaker)",
        "ASD क्लोजर (डिव्हाईस द्वारे छिद्र बंद करणे)",
        "VSD क्लोजर (डिव्हाईस द्वारे छिद्र बंद करणे)",
        "PDA क्लोजर (डिव्हाईस द्वारे छिद्र बंद करणे)"
      ],
      nonInvasiveItems: [
        "2D इकोकार्डिओग्राफी आणि ईसीजी",
        "कलर डॉप्लर आणि सोनोग्राफी",
        "स्ट्रेस टेस्ट (TMT) / हृदय तपासणी",
        "उच्च रक्तदाब आणि कोलेस्टेरॉल व्यवस्थापन"
      ],
      specializedItems: [
        "मधुमेह निदान व उपचार",
        "मधुमेहाशी संबंधित गुंतागुंत व्यवस्थापन",
        "आयसीयू व सीसीयू अतिदक्षता सेवा",
        "गंभीर रुग्णांचे आपत्कालीन व्यवस्थापन"
      ]
    }
  }[lang];

  return (
    <div className="cardiology-page section">
      <div className="container">
        <div className="cardiology-intro">
          <div className="intro-text">
            <h4 className="section-subtitle">{t.subtitle}</h4>
            <h2 className="section-title">{t.title}</h2>
            <p className="lead-text" style={{ lineHeight: '1.7', color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              {t.desc}
            </p>
            <div className="stats-mini mt-6" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(211, 47, 47, 0.05)', padding: '0.8rem 1.2rem', borderRadius: '8px', border: '1px solid rgba(211, 47, 47, 0.1)' }}>
                <strong>{t.stats.icu}</strong>
              </div>
              <div style={{ background: 'rgba(255, 152, 0, 0.05)', padding: '0.8rem 1.2rem', borderRadius: '8px', border: '1px solid rgba(255, 152, 0, 0.1)' }}>
                <strong>{t.stats.cath}</strong>
              </div>
              <div style={{ background: 'rgba(76, 175, 80, 0.05)', padding: '0.8rem 1.2rem', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.1)' }}>
                <strong>{t.stats.success}</strong>
              </div>
            </div>
          </div>
          <div className="intro-image" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" alt="Cardiac Cath Lab" className="rounded-image shadow-lg" style={{ borderRadius: '12px', border: '1px solid var(--color-border)', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-light section mt-10" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="section-subtitle">{t.specSubtitle}</h4>
            <h2 className="section-title">{t.specTitle}</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="service-card glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <HeartPulse size={36} className="icon-primary" style={{ marginBottom: '1.25rem', color: 'var(--color-primary)' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>{t.interventionalTitle}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>{t.interventionalDesc}</p>
              <ul className="service-list" style={{ listStyle: 'none', padding: 0, marginTop: 'auto' }}>
                {t.procedures.map((p, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--color-text-main)', marginBottom: '0.6rem' }}>
                    <CheckCircle2 size={16} className="text-primary" style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="service-card glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Activity size={36} className="icon-primary" style={{ marginBottom: '1.25rem', color: 'var(--color-primary)' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>{t.nonInvasiveTitle}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>{t.nonInvasiveDesc}</p>
              <ul className="service-list" style={{ listStyle: 'none', padding: 0, marginTop: 'auto' }}>
                {t.nonInvasiveItems.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--color-text-main)', marginBottom: '0.6rem' }}>
                    <CheckCircle2 size={16} className="text-primary" style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-card glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Stethoscope size={36} className="icon-primary" style={{ marginBottom: '1.25rem', color: 'var(--color-primary)' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>{t.specializedTitle}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>{t.specializedDesc}</p>
              <ul className="service-list" style={{ listStyle: 'none', padding: 0, marginTop: 'auto' }}>
                {t.specializedItems.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--color-text-main)', marginBottom: '0.6rem' }}>
                    <CheckCircle2 size={16} className="text-primary" style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardiology;
