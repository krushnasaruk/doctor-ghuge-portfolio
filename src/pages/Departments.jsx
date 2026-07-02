import { 
  HeartPulse, Brain, Activity, ShieldPlus, Heart, 
  Wind, Stethoscope, Droplet, ArrowRight
} from 'lucide-react';
import './Departments.css';

const Departments = ({ lang }) => {
  const t = {
    en: {
      subtitle: "Medical Specialities",
      title: "Comprehensive Healthcare Under One Roof",
      desc: "Our hospital specializes in advanced cardiac and critical care alongside dedicated departments to handle all your healthcare requirements.",
      explore: "Explore Cardiac Cath Lab"
    },
    mr: {
      subtitle: "वैद्यकीय विभाग",
      title: "सर्व उपचार एकाच छताखाली",
      desc: "आमचे रुग्णालय हृदयरोग आणि अतिदक्षता उपचारांमध्ये विशेष सेवा पुरवते, सोबतच इतर महत्त्वाच्या आजारांवरही अनुभवी डॉक्टर उपलब्ध आहेत.",
      explore: "कार्डियाक कॅथ लॅब पहा"
    }
  }[lang];

  const depts = {
    en: [
      { name: 'Cardiology', icon: HeartPulse, desc: 'Diagnosis, heart attack management, cardiac emergency care, and advanced interventions.', highlight: true },
      { name: 'Diabetes Care', icon: ShieldPlus, desc: 'Comprehensive diabetes diagnosis, lifestyle counseling, and complication management.' },
      { name: 'Critical Care', icon: Activity, desc: '24/7 ICU & CCU monitoring and expert management of critical medical emergencies.' },
      { name: 'Hypertension', icon: Heart, desc: 'Expert evaluation and treatment of high blood pressure and preventive cardiac health.' },
      { name: 'Pulmonary Diseases', icon: Wind, desc: 'Specialized diagnosis and treatment of lung diseases and respiratory illnesses.' },
      { name: 'Neurology & Stroke', icon: Brain, desc: 'Care for neurological disorders, stroke, and paralysis management.' },
      { name: 'Gastrointestinal', icon: Stethoscope, desc: 'Treatment for stomach, liver, and gastrointestinal tract disorders.' },
      { name: 'Kidney Diseases', icon: Droplet, desc: 'Medical management of kidney disorders and nephrology consultations.' }
    ],
    mr: [
      { name: 'हृदयरोग विभाग', icon: HeartPulse, desc: 'हृदयरोग उपचार, हार्ट अटॅक व्यवस्थापन, आणि हृदयाशी संबंधित सर्व आपत्कालीन उपचार.', highlight: true },
      { name: 'मधुमेह विभाग', icon: ShieldPlus, desc: 'मधुमेह निदान, योग्य औषधोपचार, आहार व जीवनशैली व्यवस्थापन आणि गुंतागुंत उपचार.' },
      { name: 'क्रिटिकल केअर', icon: Activity, desc: 'गंभीर रुग्णांच्या उपचारांसाठी २४ तास सुसज्ज आयसीयू (ICU) आणि सीसीयू (CCU) सुविधा.' },
      { name: 'उच्च रक्तदाब (Hypertension)', icon: Heart, desc: 'उच्च रक्तदाब नियंत्रण, तपासणी आणि प्रतिबंधात्मक हृदय आरोग्य सल्ला.' },
      { name: 'फुफ्फुस विकार', icon: Wind, desc: 'दमा, फुफ्फुसाचे आजार आणि इतर श्वसनविकारांचे अचूक निदान व उपचार.' },
      { name: 'मेंदू व पक्षाघात (Stroke)', icon: Brain, desc: 'मेंदूचे आजार, पक्षाघात (पॅरालिसिस) आणि इतर मज्जासंस्थेशी संबंधित आजारांवर उपचार.' },
      { name: 'पोटाचे विकार', icon: Stethoscope, desc: 'अन्ननलिका, जठर, यकृत आणि पोटाशी संबंधित विविध आजारांचे निदान व उपचार.' },
      { name: 'किडनी विकार', icon: Droplet, desc: 'मूत्रपिंडाचे (किडनीचे) आजार आणि संबंधित समस्यांवर प्रभावी वैद्यकीय उपचार.' }
    ]
  }[lang];

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
          <h4 className="section-subtitle">{t.subtitle}</h4>
          <h2 className="section-title">{t.title}</h2>
          <p className="lead-text">{t.desc}</p>
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
                <div className="dept-explore" style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '1rem', fontWeight: '650', fontSize: '0.85rem' }}>
                  {t.explore} <ArrowRight size={16} />
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
