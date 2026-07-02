import { 
  HeartPulse, Brain, Bone, Activity, Baby, Shell, 
  Dna, Beaker, Ear, Droplet, Stethoscope, AlertCircle, ArrowRight
} from 'lucide-react';
import './Departments.css';

const Departments = () => {
  const depts = [
    { name: 'Cardiology', icon: HeartPulse, desc: 'Advanced heart care, angioplasty, & bypass surgeries.', highlight: true },
    { name: 'Neurology', icon: Brain, desc: 'Expert brain, spine, and nerve disorder treatments.' },
    { name: 'Orthopedics', icon: Bone, desc: 'Joint replacement, trauma care, and sports medicine.' },
    { name: 'General Medicine', icon: Activity, desc: 'Comprehensive diagnosis and medical management.' },
    { name: 'Pediatrics', icon: Baby, desc: 'Specialized infant, child, and adolescent healthcare.' },
    { name: 'Gynecology', icon: Shell, desc: 'Women\'s health, maternity, and reproductive care.' },
    { name: 'Oncology', icon: Dna, desc: 'Targeted cancer treatments, chemo, and radiation.' },
    { name: 'Nephrology', icon: Beaker, desc: 'Kidney care, dialysis, and transplant support.' },
    { name: 'ENT', icon: Ear, desc: 'Ear, Nose & Throat surgeries and audiology.' },
    { name: 'Urology', icon: Droplet, desc: 'Urinary tract treatments and minimally invasive surgeries.' },
    { name: 'Gastroenterology', icon: Stethoscope, desc: 'Digestive system care, endoscopy, and liver health.' },
    { name: 'Emergency Medicine', icon: AlertCircle, desc: '24/7 critical care, trauma response, and life support.' },
  ];

  const scrollToCardiology = (e) => {
    e.preventDefault();
    const element = document.getElementById('cardiology');
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="departments-page section">
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">Medical Specialities</h4>
          <h2 className="section-title">Comprehensive Healthcare Under One Roof</h2>
          <p className="lead-text">Our hospital brings together expert specialists from over 15 distinct medical fields, collaborating to provide integrated and holistic patient care.</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {depts.map((dept, idx) => (
            <div 
              key={idx} 
              onClick={dept.highlight ? scrollToCardiology : undefined}
              className={`dept-card-full ${dept.highlight ? 'highlight-card' : 'glass-card'} ${dept.highlight ? 'cursor-pointer' : ''}`}
            >
              <dept.icon size={48} className={`dept-icon ${dept.highlight ? 'text-secondary' : 'text-primary'}`} />
              <h3>{dept.name}</h3>
              <p>{dept.desc}</p>
              {dept.highlight && (
                <div className="dept-explore">
                  Explore Center of Excellence <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
