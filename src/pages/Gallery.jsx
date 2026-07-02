import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'Hospital Exterior' },
    { id: 2, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', title: 'Operation Theatre' },
    { id: 3, src: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80', title: 'Diagnostics Lab' },
    { id: 4, src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80', title: 'Patient Consultation' },
    { id: 5, src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80', title: 'Lobby & Reception' },
    { id: 6, src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', title: 'Pharmacy' },
  ];

  return (
    <div className="gallery-page section bg-light" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">Visual Tour</h4>
          <h2 className="section-title">Hospital Gallery</h2>
          <p className="lead-text">Take a look at our world-class facilities designed for optimal care and comfort.</p>
        </div>

        <div className="masonry-grid">
          {images.map(img => (
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
          <img src={selectedImg.src} alt={selectedImg.title} onClick={e => e.stopPropagation()} />
          <div className="lightbox-title">{selectedImg.title}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
