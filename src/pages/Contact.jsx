import { MapPin, Phone, Mail, Clock, Award } from 'lucide-react';
import './Contact.css';

const Contact = ({ lang }) => {
  const t = {
    en: {
      subtitle: "Reach Out",
      title: "Contact Us",
      desc: "We are here for you. Reach out to us for any inquiries, emergencies, or consultations.",
      getInTouch: "Get in Touch",
      locTitle: "Our Location",
      locDesc: "Near SBI Bank, Housing Society, Ambajogai, Maharashtra",
      phoneTitle: "Phone Numbers",
      emailTitle: "Email Us",
      emailDesc: "info@ghugehospital.com",
      hoursTitle: "Working Hours",
      hoursDesc: "Emergency: 24/7\nOPD: Mon-Sat, 10:00 AM - 05:00 PM",
      schemeTitle: "Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY)",
      schemeDesc: "Free treatment and surgical procedures are available under this government scheme for eligible patients as per guidelines.",
      sendMessage: "Send us a message",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      msgLabel: "Message",
      msgPlaceholder: "How can we help you?",
      submit: "Send Message",
      emergency: "Emergency",
      reception: "Reception"
    },
    mr: {
      subtitle: "संपर्क साधा",
      title: "आमच्याशी संपर्क साधा",
      desc: "आम्ही आपल्या सेवेसाठी तत्पर आहोत. कोणत्याही चौकशी, आपत्कालीन परिस्थिती किंवा सल्ल्यासाठी संपर्क साधा.",
      getInTouch: "संपर्क तपशील",
      locTitle: "रुग्णालय पत्ता",
      locDesc: "एस.बी.आय. बँकेसमोर, हौसिंग सोसायटी, अंबाजोगाई, महाराष्ट्र",
      phoneTitle: "फोन नंबर",
      emailTitle: "ईमेल",
      emailDesc: "info@ghugehospital.com",
      hoursTitle: "कामाची वेळ",
      hoursDesc: "आपत्कालीन सेवा: २४x७\nओपीडी वेळ: सोम-शनि, स. १०:०० ते सं. ०५:००",
      schemeTitle: "महात्मा ज्योतिबा फुले जनआरोग्य योजना (MJPJAY)",
      schemeDesc: "या शासकीय योजनेअंतर्गत पात्र रुग्णांना मोफत उपचार व शस्त्रक्रिया सुविधा शासनाच्या मार्गदर्शक तत्त्वांनुसार उपलब्ध आहेत.",
      sendMessage: "आम्हाला संदेश पाठवा",
      nameLabel: "पूर्ण नाव",
      namePlaceholder: "तुमचे पूर्ण नाव प्रविष्ट करा",
      emailLabel: "ईमेल पत्ता",
      emailPlaceholder: "तुमचा ईमेल प्रविष्ट करा",
      phoneLabel: "फोन नंबर",
      phonePlaceholder: "तुमचा फोन नंबर प्रविष्ट करा",
      msgLabel: "संदेश",
      msgPlaceholder: "आम्ही तुम्हाला कशी मदत करू शकतो?",
      submit: "संदेश पाठवा",
      emergency: "आपत्कालीन संपर्क",
      reception: "रुग्णालय दूरध्वनी"
    }
  }[lang];

  return (
    <div className="contact-page section">
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">{t.subtitle}</h4>
          <h2 className="section-title">{t.title}</h2>
          <p className="lead-text">{t.desc}</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info-panel">
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>{t.getInTouch}</h3>
            
            <div className="info-cards">
              <div className="info-card glass-card">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h4>{t.locTitle}</h4>
                  <p>{t.locDesc}</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h4>{t.phoneTitle}</h4>
                  <p>
                    <strong>{t.emergency}:</strong> +91 95297 53754<br/>
                    <strong>{t.reception}:</strong> 02446-243044
                  </p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h4>{t.emailTitle}</h4>
                  <p>{t.emailDesc}</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon"><Clock size={24} /></div>
                <div>
                  <h4>{t.hoursTitle}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{t.hoursDesc}</p>
                </div>
              </div>
            </div>

            {/* Government Scheme Promo Box */}
            <div className="info-card glass-card mt-6" style={{ 
              background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1))',
              border: '1px solid rgba(76, 175, 80, 0.25)',
              padding: '1.5rem',
              borderRadius: '8px',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <div className="info-icon" style={{ background: '#4caf50', color: '#fff', padding: '10px', borderRadius: '50%' }}>
                <Award size={28} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#2e7d32', fontWeight: '700' }}>{t.schemeTitle}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>{t.schemeDesc}</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="contact-form-panel glass-card">
            <h3>{t.sendMessage}</h3>
            <form onSubmit={(e) => e.preventDefault()} className="contact-form">
              <div className="form-group">
                <label>{t.nameLabel}</label>
                <input type="text" placeholder={t.namePlaceholder} required />
              </div>
              <div className="form-group">
                <label>{t.emailLabel}</label>
                <input type="email" placeholder={t.emailPlaceholder} required />
              </div>
              <div className="form-group">
                <label>{t.phoneLabel}</label>
                <input type="tel" placeholder={t.phonePlaceholder} required />
              </div>
              <div className="form-group">
                <label>{t.msgLabel}</label>
                <textarea rows="4" placeholder={t.msgPlaceholder} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full mt-4">{t.submit}</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Embed centered on Ambajogai */}
      <div className="map-section mt-10" style={{ margin: '4rem 0 0 0' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15068.747209772834!2d76.28472288673752!3d18.724127027581534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00249c5eb618f%3A0x6e9f1a0ddcf31fde!2sAmbajogai%2C%20Maharashtra%20431517!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Hospital Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
