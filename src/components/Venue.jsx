import './Venue.css'

const VENUES = [
  {
    name: 'Grand Wedding Hall',
    event: 'Wedding Ceremony',
    emoji: '🛕',
    address: 'Grand Wedding Hall, Station Road, Baramati, Maharashtra 413102',
    mapQuery: 'Baramati+Maharashtra',
    details: ['Valet Parking Available', 'Air Conditioned', 'Catering Included', 'Capacity: 500+'],
  },
  {
    name: 'Grand Banquet Hall',
    event: 'Reception Evening',
    emoji: '🏛️',
    address: 'Grand Banquet Hall, Indapur Road, Baramati, Maharashtra 413102',
    mapQuery: 'Baramati+Maharashtra+Indapur+Road',
    details: ['Free Parking', 'Open Air + Indoor', 'Live Entertainment', 'Dinner Buffet'],
  },
]

export default function Venue() {
  const openMaps = (query) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank')
  }

  return (
    <section id="venue" className="venue-section">
      <div className="venue-inner">
        <div className="section-heading">
          <p className="subtitle">Find Your Way</p>
          <h2>Venues</h2>
        </div>
        <div className="gold-divider"><span>📍</span></div>

        <div className="venue-grid">
          {VENUES.map((v) => (
            <div className="venue-card" key={v.name}>
              <div className="venue-icon">{v.emoji}</div>
              <div className="venue-tag">{v.event}</div>
              <h3 className="venue-name">{v.name}</h3>
              <p className="venue-address">📌 {v.address}</p>

              <div className="venue-features">
                {v.details.map(d => (
                  <span key={d} className="venue-feature">✓ {d}</span>
                ))}
              </div>

              <button className="venue-map-btn" onClick={() => openMaps(v.mapQuery)}>
                <span>🗺️</span> Open in Google Maps
              </button>
            </div>
          ))}
        </div>

        {/* Decorative map placeholder */}
        <div className="map-placeholder" onClick={() => openMaps('Baramati+Maharashtra')}>
          <div className="map-content">
            <div className="map-pin">📍</div>
            <h4>Baramati, Maharashtra</h4>
            <p>Click to open in Google Maps</p>
            <div className="map-road map-road-h" />
            <div className="map-road map-road-v" />
          </div>
          <div className="map-overlay">
            <span>🗺️ Open Google Maps</span>
          </div>
        </div>
      </div>
    </section>
  )
}
