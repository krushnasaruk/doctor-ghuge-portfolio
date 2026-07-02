import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const Gallery = ({ lang }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const t = {
    en: {
      subtitle: "Visual Tour",
      title: "Hospital Gallery",
      desc: "Take a look at our world-class facilities designed for optimal care and comfort.",
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'Hospital Exterior' },
        { id: 2, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', title: 'Operation Theatre' },
        { id: 3, src: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80', title: 'Diagnostics Lab' },
        { id: 4, src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80', title: 'Patient Consultation' },
        { id: 5, src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80', title: 'Lobby & Reception' },
        { id: 6, src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', title: 'Pharmacy' },
      ]
    },
    mr: {
      subtitle: "एक दृष्टीक्षेप",
      title: "रुग्णालय गॅलरी",
      desc: "रुग्णांच्या उत्तम काळजीसाठी आणि सुविधेसाठी तयार केलेल्या आमच्या जागतिक दर्जाच्या वास्तूची काही छायाचित्रे.",
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'रुग्णालय इमारत' },
        { id: 2, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', title: 'शस्त्रक्रिया विभाग (OT)' },
        { id: 3, src: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80', title: 'निदान प्रयोगशाळा' },
        { id: 4, src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80', title: 'रुग्ण सल्ला विभाग' },
        { id: 5, src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80', title: 'स्वागत कक्ष आणि लॉबी' },
        { id: 6, src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', title: 'औषधालय' },
      ]
    }
  }[lang];

  return (
    <div className="gallery-page section bg-light" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">{t.subtitle}</h4>
          <h2 className="section-title">{t.title}</h2>
          <p className="lead-text">{t.desc}</p>
        </div>

        <div className="masonry-grid">
          {t.images.map(img => (
            <div 
              key={img.id} 
              className="gallery-item"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.src} alt={img.title} />
              <div className="gallery-overlay">
                <ZoomIn size={28} />
                <span>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="lightbox active" onClick={() => setSelectedImg(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImg(null)}>
            <X size={28} />
          </button>
          <img src={selectedImg.src} alt={selectedImg.title} onClick={e => e.stopPropagation()} style={{ border: '2px solid rgba(255,255,255,0.2)', borderRadius: '8px' }} />
          <div className="lightbox-title">{selectedImg.title}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
