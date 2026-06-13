import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-border" />

      <div className="footer-inner">
        <div className="footer-mandala">
          <svg viewBox="0 0 160 160" className="footer-mandala-svg">
            <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3"/>
            <circle cx="80" cy="80" r="55" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="80" cy="80" r="22" fill="none" stroke="currentColor" strokeWidth="1"/>
            {[0,45,90,135,180,225,270,315].map((deg, i) => {
              const rad = (deg * Math.PI) / 180
              const x1 = 80 + 22 * Math.cos(rad)
              const y1 = 80 + 22 * Math.sin(rad)
              const x2 = 80 + 55 * Math.cos(rad)
              const y2 = 80 + 55 * Math.sin(rad)
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
            })}
            <text x="80" y="88" textAnchor="middle" fontSize="24" fill="currentColor" fontFamily="Georgia, serif">♥</text>
          </svg>
        </div>

        <div className="footer-names">
          <span>Deepti</span>
          <span className="footer-amp">♥</span>
          <span>Nilesh</span>
        </div>

        <p className="footer-date">July 06, 2026 · Katni, Madhya Pradesh</p>

        <div className="gold-divider" style={{maxWidth:'300px', margin:'20px auto'}}><span>✦</span></div>

        <p className="footer-quote">
          "A successful marriage requires falling in love many times, always with the same person."<br/>
          <em>— MIGNON MCLAUGHLIN</em>
        </p>

        <div className="footer-actions">
          <a href="#hero" className="footer-top">↑ Back to Top</a>
        </div>

        <nav className="footer-nav">
          <a href="#couple">Couple</a>
          <span>·</span>
          <a href="#events">Events</a>
          <span>·</span>
          <a href="#gallery">Gallery</a>
          <span>·</span>
          <a href="#venue">Venue</a>
          <span>·</span>
          <a href="#rsvp">RSVP</a>
        </nav>

        <p className="footer-copy">
          Made with 💕 for Deepti & Nilesh's Wedding · 2026
        </p>
      </div>
    </footer>
  )
}