import { ClipboardPlus } from 'lucide-react';
import './Admission.css';

const Admission = () => {
  return (
    <div className="form-card glass-card animate-fade-in" style={{ height: '100%' }}>
      <div className="form-header">
        <ClipboardPlus size={32} className="text-primary" />
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>Pre-Admission</h3>
      </div>
      
      <form onSubmit={(e) => e.preventDefault()} className="adm-form mt-4">
        <h4 className="form-section-title" style={{ fontSize: '1.1rem' }}>Personal Info</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required />
          </div>
          <div className="form-group grid grid-cols-2 gap-2" style={{marginBottom: 0}}>
            <div>
              <label>Age</label>
              <input type="number" required />
            </div>
            <div>
              <label>Gender</label>
              <select required defaultValue="">
                <option value="" disabled>Select</option>
                <option value="male">M</option>
                <option value="female">F</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>Blood Group</label>
            <select required defaultValue="">
              <option value="" disabled>Select</option>
              <option value="O+">O+</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
            </select>
          </div>
        </div>

        <h4 className="form-section-title mt-6" style={{ fontSize: '1.1rem' }}>Medical Info</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label>Department</label>
            <select required defaultValue="">
              <option value="" disabled>Select Dept</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
            </select>
          </div>
          <div className="form-group">
            <label>Admission Date</label>
            <input type="date" required />
          </div>
        </div>
        
        <div className="form-group mt-4">
          <label>Symptoms / Reason for Admission</label>
          <textarea rows="2" required></textarea>
        </div>

        <div className="form-consent mt-4">
          <label className="checkbox-label">
            <input type="checkbox" required />
            <span style={{ fontSize: '0.85rem' }}>I consent to the hospital's terms for admission.</span>
          </label>
        </div>
        
        <button type="submit" className="btn btn-primary btn-full mt-4">Submit Pre-Admission</button>
      </form>
    </div>
  );
};

export default Admission;
