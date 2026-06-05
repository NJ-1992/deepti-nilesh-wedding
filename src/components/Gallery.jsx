import { useState } from 'react'
import './Gallery.css'

// Beautiful placeholder gallery items with gradient backgrounds and emojis
const GALLERY_ITEMS = [
  { id: 1, emoji: '🌺', label: 'Pre-Wedding', bg: 'linear-gradient(135deg, #FF6B9D, #FF8E53)', caption: 'Engagement' },
  { id: 2, emoji: '💐', label: 'Couple Portrait', bg: 'linear-gradient(135deg, #A18CD1, #FBC2EB)', caption: 'Together' },
  { id: 3, emoji: '🌸', label: 'Floral Setup', bg: 'linear-gradient(135deg, #FFECD2, #FCB69F)', caption: 'Décor' },
  { id: 4, emoji: '🏛️', label: 'Venue', bg: 'linear-gradient(135deg, #96E6A1, #D4FC79)', caption: 'The Venue' },
  { id: 5, emoji: '💍', label: 'Rings', bg: 'linear-gradient(135deg, #F6D365, #FDA085)', caption: 'The Rings' },
  { id: 6, emoji: '🥻', label: 'Lehenga', bg: 'linear-gradient(135deg, #FF9A9E, #FECFEF)', caption: 'Bridal Wear' },
  { id: 7, emoji: '🌙', label: 'Sangeet Night', bg: 'linear-gradient(135deg, #667EEA, #764BA2)', caption: 'Sangeet' },
  { id: 8, emoji: '🎊', label: 'Celebration', bg: 'linear-gradient(135deg, #FEADA6, #F5EFEF)', caption: 'Reception' },
  { id: 9, emoji: '🕯️', label: 'Candle Setup', bg: 'linear-gradient(135deg, #30CFD0, #330867)', caption: 'Ceremony' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-inner">
        <div className="section-heading">
          <p className="subtitle">Memories In The Making</p>
          <h2>Our Gallery</h2>
        </div>
        <div className="gold-divider"><span>📸</span></div>
        <p className="gallery-subtitle">
          A glimpse into our love story — photos will be added soon!
        </p>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item ${i === 0 ? 'gallery-wide' : ''}`}
              style={{ background: item.bg, animationDelay: `${i * 0.08}s` }}
              onClick={() => setSelected(item)}
            >
              <div className="gallery-emoji">{item.emoji}</div>
              <div className="gallery-overlay">
                <span className="gallery-caption">{item.caption}</span>
                <span className="gallery-zoom">🔍</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-upload-note">
          <span>🌟</span>
          <p>Gallery photos will be updated as events unfold. Stay tuned!</p>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <div className="lightbox-img" style={{ background: selected.bg }}>
              <div className="lightbox-emoji">{selected.emoji}</div>
            </div>
            <p className="lightbox-caption">{selected.caption}</p>
            <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  )
}
