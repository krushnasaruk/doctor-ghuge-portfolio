import { Calendar } from 'lucide-react';
import './Appointment.css';

const Appointment = () => {
  return (
    <div className="form-card glass-card animate-fade-in" style={{ height: '100%' }}>
      <div className="form-header">
        <Calendar size={32} className="text-primary" />
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>Book Consultation</h3>
      </div>
      
      <form onSubmit={(e) => e.preventDefault()} className="appt-form mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Patient's Name" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Mobile" required />
          </div>
          <div className="form-group">
            <label>Department</label>
            <select required defaultValue="">
              <option value="" disabled>Select Dept</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
            </select>
          </div>
          <div className="form-group">
            <label>Doctor</label>
            <select required defaultValue="">
              <option value="" disabled>Select Doctor</option>
              <option value="dr-rajesh">Dr. Rajesh Sharma</option>
              <option value="dr-neha">Dr. Neha Patel</option>
              <option value="dr-amit">Dr. Amit Verma</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Date</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Preferred Time</label>
            <input type="time" required />
          </div>
        </div>
        <div className="form-group mt-4">
          <label>Symptoms / Reason for visit</label>
          <textarea rows="3" placeholder="Briefly describe your symptoms" required></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary btn-full mt-4">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Appointment;
