import { ShieldPlus, Activity, HeartPulse, Award, Building2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page section" style={{ paddingTop: '5rem' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">Our Legacy</h4>
          <h2 className="section-title">A Tradition of Healing & Innovation</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-content animate-fade-in">
            <p className="lead-text" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              Founded in 1999, HeartCare Multispeciality Hospital began with a singular vision: to bring world-class healthcare to our community without compromising on compassion. Over the decades, we have evolved from a small cardiac clinic into a comprehensive, multi-specialty healthcare institution serving patients globally.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
              Our NABH accreditation stands as a testament to our unwavering commitment to quality, patient safety, and clinical excellence. We continually upgrade our technology, expand our services, and invest in continuous medical education to meet the ever-evolving healthcare needs of the modern world. We believe that true healthcare is a partnership between the patient and the provider.
            </p>
            
            <div className="mission-vision mt-10">
              <div className="mv-card glass-card">
                <div className="mv-icon"><HeartPulse size={28} /></div>
                <div>
                  <h3>Our Mission</h3>
                  <p>To provide patient-centered healthcare with excellence in quality, service, and access, ensuring that every individual receives the highest standard of care regardless of their background.</p>
                </div>
              </div>
              <div className="mv-card glass-card mt-4">
                <div className="mv-icon"><ShieldPlus size={28} /></div>
                <div>
                  <h3>Our Vision</h3>
                  <p>To be the leading healthcare institution globally known for clinical excellence, ethical practices, and compassionate care, setting the benchmark for medical institutions worldwide.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-images">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" alt="Hospital Building" className="rounded-image main-img shadow-xl" />
            <div className="badge-overlay">
              <Award size={36} color="var(--color-primary)" />
              <span>NABH<br/>Accredited</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure */}
      <div className="bg-light section mt-10" style={{ margin: '4rem 0 0 0', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="section-subtitle">Infrastructure</h4>
            <h2 className="section-title">World-Class Facilities</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="facility-card glass-card">
              <Activity size={40} className="icon-primary" />
              <h3>Advanced ICUs</h3>
              <p>Fully equipped intensive care units with 1:1 nursing ratios, 24/7 central monitoring, and specialized critical care teams ready for any emergency.</p>
            </div>
            <div className="facility-card glass-card">
              <HeartPulse size={40} className="icon-primary" />
              <h3>Modern Cath Labs</h3>
              <p>State-of-the-art flat-panel catheterization laboratories designed for complex cardiac and neuro-interventional procedures with minimal radiation.</p>
            </div>
            <div className="facility-card glass-card">
              <Building2 size={40} className="icon-primary" />
              <h3>Smart OTs</h3>
              <p>Modular, laminar-flow operation theatres integrated with advanced surgical navigation systems and high-definition endoscopic suites.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
