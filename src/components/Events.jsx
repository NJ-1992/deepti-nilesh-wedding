import './Events.css'

const EVENTS = [
  {
    id: 'haldi',
    emoji: '💛',
    name: 'Haldi',
    devanagari: 'हल्दी',
    date: 'July 4, 2026',
    day: 'Saturday',
    time: '10:00 AM – 1:00 PM',
    venue: 'Family Residence',
    address: 'Neemuch, M.P.',
    color: '#F6D365',
    bg: 'linear-gradient(135deg, #FFF9C4 0%, #FFF3CD 100%)',
  },
  {
    id: 'mehendi',
    emoji: '🌿',
    name: 'Mehendi',
    devanagari: 'मेहंदी',
    date: 'July 4, 2026',
    day: 'Saturday',
    time: '5:00 PM – 7:00 PM',
    venue: 'Family Residence',
    address: 'Neemuch, M.P.',
    color: '#4CAF50',
    bg: 'linear-gradient(135deg, #E8F5E9 0%, #DCEDC8 100%)',
  },
  {
    id: 'sangeet',
    emoji: '🎶',
    name: 'Sangeet',
    devanagari: 'संगीत',
    date: 'July 4, 2026',
    day: 'Saturday',
    time: '8:00 PM – 11:00 PM',
    venue: 'Family Residence',
    address: 'Neemuch, M.P.',
    color: '#9C27B0',
    bg: 'linear-gradient(135deg, #F3E5F5 0%, #EDE7F6 100%)',
  },
  {
    id: 'wedding',
    emoji: '💍',
    name: 'Wedding',
    devanagari: 'विवाह',
    date: 'July 06, 2026',
    day: 'Monday',
    time: '7:00 PM Onwards',
    venue: 'Grand Wedding Hall',
    address: ' Arjun Palace, Near Collectorate, Katni, M.P.',
    color: '#C9952A',
    bg: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
    highlight: true,
  },
  {
    id: 'reception',
    emoji: '🥂',
    name: 'Reception',
    devanagari: 'स्वागत',
    date: 'July 09, 2026',
    day: 'Thursday',
    time: '7:00 PM – 12:00 PM',
    venue: 'Jain Dharamshala, Near Family Residence',
    address: 'Kanjarda, Neemuch, M.P.',
    color: '#E91E63',
    bg: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)',
  },
]

export default function Events() {
  return (
    <section id="events" className="events-section">
      <div className="events-inner">
        <div className="section-heading">
          <p className="subtitle">Join Us For</p>
          <h2>The Celebrations</h2>
        </div>
        <div className="gold-divider"><span>🎊</span></div>

        <div className="events-grid">
          {EVENTS.map((event, i) => (
            <div
              key={event.id}
              className={`event-card ${event.highlight ? 'event-highlight' : ''}`}
              style={{ '--event-color': event.color, animationDelay: `${i * 0.15}s` }}
            >
              <div className="event-header" style={{ background: event.bg }}>
                <div className="event-emoji">{event.emoji}</div>
                <div className="event-title-block">
                  <span className="event-devanagari">{event.devanagari}</span>
                  <h3 className="event-name">{event.name}</h3>
                </div>
                {event.highlight && <div className="event-badge">💍 Main Event</div>}
              </div>
              <div className="event-body">
                <p className="event-desc">{event.desc}</p>
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-icon">📅</span>
                    <div>
                      <strong>{event.date}</strong>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">📍</span>
                    <div>
                      <strong>{event.venue}</strong>
                      <span>{event.address}</span>
                    </div>
                  </div>
                  <div className="event-detail">
                    <div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-accent-line" style={{ background: `linear-gradient(90deg, transparent, ${event.color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
