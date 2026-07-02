import { Calendar } from 'lucide-react';
import './Appointment.css';

const Appointment = ({ lang }) => {
  const t = {
    en: {
      header: "Book Consultation",
      nameLabel: "Full Name",
      namePlaceholder: "Patient's Name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Mobile",
      deptLabel: "Department",
      deptSelect: "Select Department",
      depts: [
        { value: "cardiology", label: "Cardiology" },
        { value: "diabetes", label: "Diabetes Care" },
        { value: "critical", label: "Critical Care" },
        { value: "others", label: "Other Specialties" }
      ],
      docLabel: "Doctor",
      docSelect: "Select Doctor",
      docOption: "Dr. N. B. Ghuge (M.D. Medicine)",
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Time",
      symptomsLabel: "Symptoms / Reason for visit",
      symptomsPlaceholder: "Briefly describe your symptoms",
      submit: "Confirm Booking"
    },
    mr: {
      header: "तपासणी वेळ नोंदणी",
      nameLabel: "पूर्ण नाव",
      namePlaceholder: "रुग्णाचे नाव",
      phoneLabel: "फोन नंबर",
      phonePlaceholder: "मोबाईल",
      deptLabel: "वैद्यकीय विभाग",
      deptSelect: "विभाग निवडा",
      depts: [
        { value: "cardiology", label: "हृदयरोग विभाग" },
        { value: "diabetes", label: "मधुमेह विभाग" },
        { value: "critical", label: "क्रिटिकल केअर" },
        { value: "others", label: "इतर उपचार" }
      ],
      docLabel: "डॉक्टर",
      docSelect: "डॉक्टर निवडा",
      docOption: "डॉ. एन. बी. घुगे (एम.डी. मेडिसिन)",
      dateLabel: "तपासणी दिनांक",
      timeLabel: "तпасणी वेळ",
      symptomsLabel: "लक्षणे / भेटीचे कारण",
      symptomsPlaceholder: "कृपया तुमच्या लक्षणांचे संक्षिप्त वर्णन करा",
      submit: "वेळ आरक्षित करा"
    }
  }[lang];

  return (
    <div className="form-card glass-card animate-fade-in" style={{ height: '100%' }}>
      <div className="form-header">
        <Calendar size={32} className="text-primary" />
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>{t.header}</h3>
      </div>
      
      <form onSubmit={(e) => e.preventDefault()} className="appt-form mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label>{t.nameLabel}</label>
            <input type="text" placeholder={t.namePlaceholder} required />
          </div>
          <div className="form-group">
            <label>{t.phoneLabel}</label>
            <input type="tel" placeholder={t.phonePlaceholder} required />
          </div>
          <div className="form-group">
            <label>{t.deptLabel}</label>
            <select required defaultValue="">
              <option value="" disabled>{t.deptSelect}</option>
              {t.depts.map((d, idx) => (
                <option key={idx} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>{t.docLabel}</label>
            <select required defaultValue="">
              <option value="" disabled>{t.docSelect}</option>
              <option value="dr-ghuge">{t.docOption}</option>
            </select>
          </div>
          <div className="form-group">
            <label>{t.dateLabel}</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>{t.timeLabel}</label>
            <input type="time" required />
          </div>
        </div>
        <div className="form-group mt-4">
          <label>{t.symptomsLabel}</label>
          <textarea rows="3" placeholder={t.symptomsPlaceholder} required></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary btn-full mt-4">{t.submit}</button>
      </form>
    </div>
  );
};

export default Appointment;
