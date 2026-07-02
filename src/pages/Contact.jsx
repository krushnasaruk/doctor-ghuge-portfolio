import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page section">
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">Reach Out</h4>
          <h2 className="section-title">Contact Us</h2>
          <p className="lead-text">We're here to help. Reach out to us for any medical assistance, inquiries, or emergencies.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info-panel">
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>Get in Touch</h3>
            
            <div className="info-cards">
              <div className="info-card glass-card">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Our Location</h4>
                  <p>123 Health Avenue, Medical City<br/>HC 12345</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h4>Phone Numbers</h4>
                  <p><strong>Emergency:</strong> 1066<br/><strong>Reception:</strong> +91 800 123 4567</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@heartcare.com<br/>appointments@heartcare.com</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon"><Clock size={24} /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p><strong>Emergency:</strong> 24/7<br/><strong>OPD:</strong> Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="contact-form-panel glass-card">
            <h3>Send us a message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full mt-4">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="map-section mt-10" style={{ margin: '4rem 0 0 0' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281574.673850788!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
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
