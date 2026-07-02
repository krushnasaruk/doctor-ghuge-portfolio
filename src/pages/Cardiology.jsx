import { HeartPulse, Activity, Stethoscope, CheckCircle2 } from 'lucide-react';
import './Cardiology.css';

const Cardiology = () => {
  return (
    <div className="cardiology-page section">
      <div className="container">
        <div className="cardiology-intro">
          <div className="intro-text">
            <h4 className="section-subtitle">Center of Excellence</h4>
            <h2 className="section-title">Advanced Cardiac Care</h2>
            <p className="lead-text">
              Our Department of Cardiology provides an all-inclusive program for the management of complex heart diseases. From preventive cardiology to intricate interventional procedures, we offer world-class treatment protocols handled by internationally trained cardiologists.
            </p>
            <p className="mt-4" style={{ color: 'var(--color-text-muted)' }}>
              We are equipped with 24/7 dedicated Cardiac ICUs, advanced Cath Labs, and non-invasive diagnostic suites ensuring that life-saving interventions are available round the clock.
            </p>
            <div className="stats-mini mt-6">
              <div><strong>15k+</strong><br/>Surgeries</div>
              <div><strong>24/7</strong><br/>Cath Lab</div>
              <div><strong>99%</strong><br/>Success Rate</div>
            </div>
          </div>
          <div className="intro-image">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" alt="Heart Surgery" className="rounded-image shadow-lg" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-light section mt-10">
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="section-subtitle">Our Specializations</h4>
            <h2 className="section-title">Comprehensive Heart Treatments</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="service-card glass-card">
              <Activity size={32} className="icon-primary" />
              <h3>Interventional Cardiology</h3>
              <p>Minimally invasive procedures including Angiography and Angioplasty for blockages, utilizing advanced stenting technologies for rapid recovery.</p>
            </div>
            
            <div className="service-card glass-card">
              <HeartPulse size={32} className="icon-primary" />
              <h3>Non-Invasive Cardiology</h3>
              <ul className="service-list">
                <li><CheckCircle2 size={16} className="text-primary"/> Electrocardiogram (ECG) & 2D Echo</li>
                <li><CheckCircle2 size={16} className="text-primary"/> Treadmill Test (TMT)</li>
                <li><CheckCircle2 size={16} className="text-primary"/> 24-Hour Holter Monitoring</li>
                <li><CheckCircle2 size={16} className="text-primary"/> Stress Echocardiography</li>
              </ul>
            </div>

            <div className="service-card glass-card">
              <Stethoscope size={32} className="icon-primary" />
              <h3>Specialized Clinics</h3>
              <ul className="service-list">
                <li><CheckCircle2 size={16} className="text-primary"/> Comprehensive Heart Failure Clinic</li>
                <li><CheckCircle2 size={16} className="text-primary"/> Pacemaker Implantation & Checks</li>
                <li><CheckCircle2 size={16} className="text-primary"/> Preventive Cardiology Programs</li>
                <li><CheckCircle2 size={16} className="text-primary"/> Arrhythmia Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardiology;
