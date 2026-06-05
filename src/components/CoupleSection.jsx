import './CoupleSection.css'

export default function CoupleSection() {
  return (
    <section id="couple" className="couple-section">
      <div className="couple-inner">
        <div className="section-heading">
          <p className="subtitle">The Beautiful Souls</p>
          <h2>Meet The Couple</h2>
        </div>
        <div className="gold-divider"><span>💑</span></div>

        <div className="couple-grid">
          {/* Bride */}
          <div className="person-card bride-card">
            <div className="person-photo-frame">
              <div className="photo-placeholder bride-photo">
                <div className="photo-icon">🌸</div>
                <div className="photo-initial">D</div>
              </div>
              <div className="frame-ornament frame-tl">✦</div>
              <div className="frame-ornament frame-tr">✦</div>
              <div className="frame-ornament frame-bl">✦</div>
              <div className="frame-ornament frame-br">✦</div>
            </div>
            <div className="person-info">
              <span className="person-role">The Bride</span>
              <h3 className="person-name">Deepti</h3>
              <p className="person-devanagari">दीप्ति</p>
              <div className="gold-divider" style={{margin:'12px auto'}}><span>❋</span></div>
              <p className="person-desc">
                A ray of sunshine with a heart full of grace and warmth. Deepti brings light to every room she enters and joy to every life she touches.
              </p>
              <div className="person-family">
                <span>🏡</span> Daughter of the esteemed family
              </div>
            </div>
          </div>

          {/* Center Ornament */}
          <div className="couple-center">
            <div className="center-ring">
              <svg viewBox="0 0 120 120" className="ring-svg">
                <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
                <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M60 5 L63 57 L60 60 L57 57Z" fill="currentColor"/>
                <path d="M115 60 L63 63 L60 60 L63 57Z" fill="currentColor"/>
                <path d="M60 115 L57 63 L60 60 L63 63Z" fill="currentColor"/>
                <path d="M5 60 L57 57 L60 60 L57 63Z" fill="currentColor"/>
                <path d="M60 5 L75 50 L60 60 L45 50Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M115 60 L70 75 L60 60 L70 45Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M60 115 L45 70 L60 60 L75 70Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M5 60 L50 45 L60 60 L50 75Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="60" y="67" textAnchor="middle" fontSize="20" fill="currentColor" fontFamily="Georgia, serif">♥</text>
              </svg>
              <div className="center-text">Together<br/>Forever</div>
            </div>
          </div>

          {/* Groom */}
          <div className="person-card groom-card">
            <div className="person-photo-frame">
              <div className="photo-placeholder groom-photo">
                <div className="photo-icon">👑</div>
                <div className="photo-initial">N</div>
              </div>
              <div className="frame-ornament frame-tl">✦</div>
              <div className="frame-ornament frame-tr">✦</div>
              <div className="frame-ornament frame-bl">✦</div>
              <div className="frame-ornament frame-br">✦</div>
            </div>
            <div className="person-info">
              <span className="person-role">The Groom</span>
              <h3 className="person-name">Nilesh</h3>
              <p className="person-devanagari">नीलेश</p>
              <div className="gold-divider" style={{margin:'12px auto'}}><span>❋</span></div>
              <p className="person-desc">
                A man of wisdom, kindness and unwavering strength. Nilesh is the anchor in any storm and a source of endless love and laughter.
              </p>
              <div className="person-family">
                <span>🏡</span> Son of the esteemed family
              </div>
            </div>
          </div>
        </div>

        <div className="love-quote">
          <p>"Two souls, one heart — embarking on the most beautiful journey of their lives."</p>
        </div>
      </div>
    </section>
  )
}
