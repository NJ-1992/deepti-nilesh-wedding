import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />
      <div className="hero-border-top" />
      <div className="hero-border-bottom" />

      {/* Corner ornaments */}
      <div className="corner corner-tl">❋</div>
      <div className="corner corner-tr">❋</div>
      <div className="corner corner-bl">❋</div>
      <div className="corner corner-br">❋</div>

      <div className="hero-content">
        <p className="hero-invite animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Together with their families
        </p>

        <div className="hero-names animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="hero-name bride">
            <span className="devanagari">दीप्ती</span>
            <span className="english">Deepti</span>
          </div>

          <div className="hero-ampersand animate-float">
            <svg viewBox="0 0 80 80" className="mandala-ornament">
              <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M40 5 L43 37 L40 40 L37 37Z" fill="currentColor" opacity="0.7" />
              <path d="M75 40 L43 43 L40 40 L43 37Z" fill="currentColor" opacity="0.7" />
              <path d="M40 75 L37 43 L40 40 L43 43Z" fill="currentColor" opacity="0.7" />
              <path d="M5 40 L37 37 L40 40 L37 43Z" fill="currentColor" opacity="0.7" />
              <text
                x="40"
                y="47"
                textAnchor="middle"
                fontSize="18"
                fill="currentColor"
                fontFamily="Playfair Display, serif"
                fontStyle="italic"
              >
                &
              </text>
            </svg>
          </div>

          <div className="hero-name groom">
            <span className="devanagari">निलेश</span>
            <span className="english">Nilesh</span>
          </div>
        </div>

        <div className="gold-divider animate-fadeIn" style={{ animationDelay: '1s' }}>
          <span>✦</span>
        </div>

        <p className="hero-tagline animate-fadeInUp" style={{ animationDelay: '1.1s' }}>
           Cordially invite you to celebrate their wedding and bless their new beginning.
        </p>

        {/* Wedding date */}
        <div className="hero-date animate-scaleIn" style={{ animationDelay: '1.3s' }}>
          <span className="date-day">06</span>

          <div className="date-my">
            <span>July</span>
            <span>2026</span>
          </div>

          <span className="date-dow">Monday</span>
        </div>

        <div className="hero-cta animate-fadeInUp" style={{ animationDelay: '1.6s' }}>
          <a href="#rsvp" className="btn-primary">💌 RSVP Now</a>
          <a href="#events" className="btn-outline">View Events</a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}