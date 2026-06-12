import './Venue.css'

const VENUES = [
  {
    name: 'Grand Wedding Hall',
    event: 'Wedding Ceremony',
    emoji: '🛕',
    address: 'Grand Wedding Hall, Arjun Palace, Near Collectorate, Katni, M.P. - 483501',
    mapQuery: 'Grand+Wedding+Hall+Arjun+Palace+Near+Collectorate+Katni+Madhya+Pradesh+483501',
    details: [],
  },
  {
    name: 'Jain Dharamshala, Kanjarda',
    event: 'Reception Evening',
    emoji: '🏛️',
    address: 'Jain Dharamshala, Kanjarda, Neemuch, M.P. - 458110',
    mapQuery: 'Jain+Dharamshala+Kanjarda+Neemuch+Madhya+Pradesh+458110',
    details: [],
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

        {/* Two map placeholders side by side */}
        <div className="map-duo">
          <div
            className="map-placeholder"
            onClick={() => openMaps('Grand+Wedding+Hall+Arjun+Palace+Near Collectorate+Katni+Madhya+Pradesh+483501')}
          >
            <div className="map-content">
              <div className="map-pin">📍</div>
              <h4>Wedding Ceremony</h4>
              <p>Katni, Madhya Pradesh</p>
              <div className="map-road map-road-h" />
              <div className="map-road map-road-v" />
            </div>
            <div className="map-overlay">
              <span>🗺️ Open Google Maps</span>
            </div>
          </div>

          <div
            className="map-placeholder"
            onClick={() => openMaps('Jain+Dharamshala+Kanjarda+Neemuch+Madhya+Pradesh+458110')}
          >
            <div className="map-content">
              <div className="map-pin">📍</div>
              <h4>Reception Evening</h4>
              <p>Kanjarda, Neemuch, Madhya Pradesh</p>
              <div className="map-road map-road-h" />
              <div className="map-road map-road-v" />
            </div>
            <div className="map-overlay">
              <span>🗺️ Open Google Maps</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}