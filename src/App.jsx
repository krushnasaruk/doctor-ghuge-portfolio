import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Cardiology from './pages/Cardiology';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Admission from './pages/Admission';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'mr'

  return (
    <div className="app-container">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <div id="home"><Home lang={lang} /></div>
        <div id="about"><About lang={lang} /></div>
        <div id="departments"><Departments lang={lang} /></div>
        <div id="cardiology"><Cardiology lang={lang} /></div>
        <div id="doctors"><Doctors lang={lang} /></div>
        <div id="gallery"><Gallery lang={lang} /></div>
        
        {/* We can group Forms together */}
        <div id="forms" className="bg-light section" style={{ padding: '5rem 0' }}>
          <div className="container text-center mb-12">
            <h4 className="section-subtitle">
              {lang === 'en' ? 'Patient Services' : 'रुग्ण सेवा'}
            </h4>
            <h2 className="section-title">
              {lang === 'en' ? 'Appointments & Admissions' : 'तपासणी आणि प्रवेश अर्ज'}
            </h2>
            <p>
              {lang === 'en' 
                ? 'Pre-register to save time or book a consultation with our experts.' 
                : 'वेळ वाचवण्यासाठी पूर्व-नोंदणी करा किंवा आमच्या तज्ज्ञांशी संपर्क साधा.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 container">
             <div id="appointment"><Appointment lang={lang} /></div>
             <div id="admission"><Admission lang={lang} /></div>
          </div>
        </div>

        <div id="contact"><Contact lang={lang} /></div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
