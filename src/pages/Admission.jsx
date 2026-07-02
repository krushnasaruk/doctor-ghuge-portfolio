import { ClipboardPlus } from 'lucide-react';
import './Admission.css';

const Admission = ({ lang }) => {
  const t = {
    en: {
      header: "Pre-Admission",
      personalHeader: "Personal Info",
      fullName: "Full Name",
      age: "Age",
      gender: "Gender",
      genderSelect: "Select",
      genderOptions: { m: "M", f: "F" },
      mobile: "Mobile Number",
      bloodGroup: "Blood Group",
      bloodSelect: "Select",
      medicalHeader: "Medical Info",
      dept: "Department",
      deptSelect: "Select Dept",
      depts: [
        { value: "cardiology", label: "Cardiology" },
        { value: "diabetes", label: "Diabetes Care" },
        { value: "critical", label: "Critical Care" },
        { value: "others", label: "Other Specialties" }
      ],
      date: "Admission Date",
      symptoms: "Symptoms / Reason for Admission",
      consent: "I consent to the hospital's terms for admission.",
      submit: "Submit Pre-Admission"
    },
    mr: {
      header: "पूर्व-प्रवेश अर्ज",
      personalHeader: "वैयक्तिक माहिती",
      fullName: "पूर्ण नाव",
      age: "वय",
      gender: "लिंग",
      genderSelect: "निवडा",
      genderOptions: { m: "पुरुष", f: "स्त्री" },
      mobile: "मोबाईल नंबर",
      bloodGroup: "रक्तगट",
      bloodSelect: "निवडा",
      medicalHeader: "वैद्यकीय माहिती",
      dept: "वैद्यकीय विभाग",
      deptSelect: "विभाग निवडा",
      depts: [
        { value: "cardiology", label: "हृदयरोग विभाग" },
        { value: "diabetes", label: "मधुमेह विभाग" },
        { value: "critical", label: "क्रिटिकल केअर" },
        { value: "others", label: "इतर उपचार" }
      ],
      date: "दाखल दिनांक",
      symptoms: "लक्षणे / दाखल करण्याचे कारण",
      consent: "मी रुग्णालयाच्या दाखल करण्याच्या नियमांशी सहमत आहे.",
      submit: "दाखल अर्ज सादर करा"
    }
  }[lang];

  return (
    <div className="form-card glass-card animate-fade-in" style={{ height: '100%' }}>
      <div className="form-header">
        <ClipboardPlus size={32} className="text-primary" />
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>{t.header}</h3>
      </div>
      
      <form onSubmit={(e) => e.preventDefault()} className="adm-form mt-4">
        <h4 className="form-section-title" style={{ fontSize: '1.1rem' }}>{t.personalHeader}</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label>{t.fullName}</label>
            <input type="text" required />
          </div>
          <div className="form-group grid grid-cols-2 gap-2" style={{marginBottom: 0}}>
            <div>
              <label>{t.age}</label>
              <input type="number" required />
            </div>
            <div>
              <label>{t.gender}</label>
              <select required defaultValue="">
                <option value="" disabled>{t.genderSelect}</option>
                <option value="male">{t.genderOptions.m}</option>
                <option value="female">{t.genderOptions.f}</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>{t.mobile}</label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>{t.bloodGroup}</label>
            <select required defaultValue="">
              <option value="" disabled>{t.bloodSelect}</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        <h4 className="form-section-title mt-6" style={{ fontSize: '1.1rem' }}>{t.medicalHeader}</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label>{t.dept}</label>
            <select required defaultValue="">
              <option value="" disabled>{t.deptSelect}</option>
              {t.depts.map((d, idx) => (
                <option key={idx} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>{t.date}</label>
            <input type="date" required />
          </div>
        </div>
        
        <div className="form-group mt-4">
          <label>{t.symptoms}</label>
          <textarea rows="2" required></textarea>
        </div>

        <div className="form-consent mt-4">
          <label className="checkbox-label">
            <input type="checkbox" required />
            <span style={{ fontSize: '0.85rem' }}>{t.consent}</span>
          </label>
        </div>
        
        <button type="submit" className="btn btn-primary btn-full mt-4">{t.submit}</button>
      </form>
    </div>
  );
};

export default Admission;
