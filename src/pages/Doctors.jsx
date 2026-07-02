import { Calendar, Clock, Award } from 'lucide-react';
import './Doctors.css';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Sharma',
      role: 'Senior Cardiologist',
      qualifications: 'MBBS, MD, DM (Cardiology)',
      exp: '20+ Years Exp.',
      timing: 'Mon-Sat, 10:00 AM - 02:00 PM',
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Dr. Neha Patel',
      role: 'Cardiac Surgeon',
      qualifications: 'MBBS, MS, M.Ch (CTVS)',
      exp: '15+ Years Exp.',
      timing: 'Mon-Fri, 09:00 AM - 01:00 PM',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Dr. Amit Verma',
      role: 'Interventional Cardiologist',
      qualifications: 'MBBS, MD, DM (Cardiology)',
      exp: '12+ Years Exp.',
      timing: 'Tue-Sat, 11:00 AM - 04:00 PM',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
    }
  ];

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
          <h4 className="section-subtitle">Medical Experts</h4>
          <h2 className="section-title">Meet Our Leading Specialists</h2>
          <p className="lead-text">Our renowned doctors bring decades of experience and a track record of clinical excellence to provide you with the best medical care.</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {doctors.map(doc => (
            <div key={doc.id} className="doc-card glass-card">
              <div className="doc-img">
                <img src={doc.img} alt={doc.name} />
              </div>
              <div className="doc-info">
                <h3>{doc.name}</h3>
                <span className="doc-role">{doc.role}</span>
                <p className="doc-qual">{doc.qualifications}</p>
                <div className="doc-details">
                  <div className="detail-item">
                    <Award size={16} className="text-primary"/> {doc.exp}
                  </div>
                  <div className="detail-item">
                    <Clock size={16} className="text-primary"/> {doc.timing}
                  </div>
                </div>
                <a href="#forms" onClick={scrollToForms} className="btn btn-primary btn-full mt-4">
                  <Calendar size={18} /> Book Appointment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
