import { useState, useEffect } from 'react';
import { 
  HeartPulse, Activity, ShieldPlus, ArrowRight,
  PhoneCall
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const [stats, setStats] = useState({ exp: 0, doctors: 0, patients: 0, specials: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ exp: 25, doctors: 50, patients: 150, specials: 15 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <div className="badge">NABH Accredited Premium Hospital</div>
            <h1>Advanced Cardiac Care with <span>Compassion.</span></h1>
            <p>
              HeartCare Multispeciality Hospital brings you world-class medical expertise, 
              state-of-the-art technology, and a commitment to saving lives. Our integrated healthcare approach ensures the best possible outcomes for all our patients.
            </p>
            <div className="hero-actions">
              <a href="#forms" onClick={(e) => scrollToSection(e, 'forms')} className="btn btn-primary">Book Appointment</a>
              <a href="tel:1066" className="btn btn-secondary">Emergency Care</a>
            </div>
            <div className="emergency-helpline mt-4">
              <PhoneCall size={20} className="pulse-icon" /> 24x7 Emergency Helpline: <strong>1066</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card glass-card">
            <h3>{stats.exp}+</h3>
            <p>Years of Medical Excellence</p>
          </div>
          <div className="stat-card glass-card">
            <h3>{stats.doctors}+</h3>
            <p>Renowned Specialists</p>
          </div>
          <div className="stat-card glass-card">
            <h3>{stats.patients}k+</h3>
            <p>Lives Touched & Saved</p>
          </div>
          <div className="stat-card glass-card">
            <h3>{stats.specials}+</h3>
            <p>Advanced Specialities</p>
          </div>
        </div>
      </section>

      {/* Intro Summary */}
      <section className="about-section section" style={{ paddingTop: '8rem' }}>
        <div className="container about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
              alt="Modern Hospital Infrastructure" 
              className="rounded-image shadow-lg"
            />
          </div>
          <div className="about-content">
            <h4 className="section-subtitle">Welcome to HeartCare</h4>
            <h2 className="section-title">Committed to Excellence in Global Healthcare</h2>
            <p>
              For over two decades, HeartCare has been at the forefront of medical innovation. 
              Our facility is built on the foundation of uncompromising quality and patient-first care. We combine the best medical minds with the latest technological advancements to deliver exceptional healthcare.
            </p>
            <ul className="feature-list mt-6">
              <li><ShieldPlus size={20} className="icon-primary" /> <strong>State-of-the-art Infrastructure:</strong> Designed for optimal patient comfort and clinical efficiency.</li>
              <li><Activity size={20} className="icon-primary" /> <strong>24/7 Advanced Emergency Care:</strong> Rapid response trauma teams and fully equipped ICUs.</li>
              <li><HeartPulse size={20} className="icon-primary" /> <strong>Center of Excellence:</strong> Pioneering advanced cardiac surgeries and treatments.</li>
            </ul>
            <div className="mt-8">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="btn btn-outline">Read Our Full History <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
