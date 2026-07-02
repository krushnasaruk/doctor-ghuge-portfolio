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
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="departments"><Departments /></div>
        <div id="cardiology"><Cardiology /></div>
        <div id="doctors"><Doctors /></div>
        <div id="gallery"><Gallery /></div>
        
        {/* We can group Forms together */}
        <div id="forms" className="bg-light section" style={{ padding: '5rem 0' }}>
          <div className="container text-center mb-12">
            <h4 className="section-subtitle">Patient Services</h4>
            <h2 className="section-title">Appointments & Admissions</h2>
            <p>Pre-register to save time or book a consultation with our experts.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 container">
             <div id="appointment"><Appointment /></div>
             <div id="admission"><Admission /></div>
          </div>
        </div>

        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
