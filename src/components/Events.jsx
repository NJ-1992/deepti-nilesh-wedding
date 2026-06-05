import './Events.css'

const EVENTS = [
  {
    id: 'haldi',
    emoji: '💛',
    name: 'Haldi',
    devanagari: 'हल्दी',
    date: 'February 12, 2026',
    time: '10:00 AM – 1:00 PM',
    venue: 'Family Residence',
    address: 'Baramati, Maharashtra',
    desc: 'A joyful ceremony where turmeric paste is applied to the couple for blessings, beauty and prosperity. The air fills with laughter, songs and vibrant yellow.',
    dress: 'Yellow / Bright Colours',
    color: '#F6D365',
    bg: 'linear-gradient(135deg, #FFF9C4 0%, #FFF3CD 100%)',
  },
  {
    id: 'mehendi',
    emoji: '🌿',
    name: 'Mehendi',
    devanagari: 'मेहंदी',
    date: 'February 12, 2026',
    time: '4:00 PM – 9:00 PM',
    venue: 'Family Residence',
    address: 'Baramati, Maharashtra',
    desc: 'Intricate henna designs adorn the bride\'s hands, each pattern telling a story of love. An evening of beauty, tradition and togetherness.',
    dress: 'Green / Pastel',
    color: '#4CAF50',
    bg: 'linear-gradient(135deg, #E8F5E9 0%, #DCEDC8 100%)',
  },
  {
    id: 'sangeet',
    emoji: '🎶',
    name: 'Sangeet',
    devanagari: 'संगीत',
    date: 'February 13, 2026',
    time: '7:00 PM – 11:00 PM',
    venue: 'Celebration Hall',
    address: 'Baramati, Maharashtra',
    desc: 'An evening of music, dance and merriment as both families come together. The night echoes with Bollywood beats and classical rhythms.',
    dress: 'Ethnic / Semi-Formal',
    color: '#9C27B0',
    bg: 'linear-gradient(135deg, #F3E5F5 0%, #EDE7F6 100%)',
  },
  {
    id: 'wedding',
    emoji: '💍',
    name: 'Wedding',
    devanagari: 'विवाह',
    date: 'February 14, 2026',
    time: '10:00 AM – 2:00 PM',
    venue: 'Grand Wedding Hall',
    address: 'Baramati, Maharashtra',
    desc: 'The sacred union of Deepti and Nilesh under the holy fire (Agni). Seven vows, one lifetime, and a beginning of a beautiful journey together.',
    dress: 'Traditional / Ethnic Wear',
    color: '#C9952A',
    bg: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
    highlight: true,
  },
  {
    id: 'reception',
    emoji: '🥂',
    name: 'Reception',
    devanagari: 'स्वागत',
    date: 'February 14, 2026',
    time: '7:00 PM – 11:00 PM',
    venue: 'Grand Banquet Hall',
    address: 'Baramati, Maharashtra',
    desc: 'Join us for an elegant evening reception to bless and celebrate the newly wedded couple. Fine dining, dancing and memories to treasure forever.',
    dress: 'Formal / Cocktail',
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
                    <span className="detail-icon">👗</span>
                    <div>
                      <strong>Dress Code</strong>
                      <span>{event.dress}</span>
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
