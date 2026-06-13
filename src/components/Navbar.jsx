import { useState } from 'react'

export default function Navbar({ isPlaying, toggleMusic }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleShare = () => {
    const msg = encodeURIComponent(`🌸✨ *Wedding Invitation* ✨🌸\n\nYou're invited to celebrate the wedding of 💍 *Deepti & Nilesh* 💍\n\n📅 Monday, 6th July 2026\n📍 Arjun Palace, Near Collectorate, Katni, M.P.\n\n👉 https://deepti-nilesh-wedding-wnhl.vercel.app/`)
    window.open(`https://wa.me/?text=${msg}`, '_blank')
  }

  return (
    <nav>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">Deepti ♥ Nilesh</a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
          <li><a href="#couple">Couple</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#venue">Venue</a></li>
          <li><a href="#rsvp">RSVP</a></li>
        </ul>

        <div className="nav-actions">
          <button
            className={`music-btn ${isPlaying ? 'playing' : ''}`}
            onClick={toggleMusic}
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? '⏸' : '🎵'}
          </button>
          <button className="whatsapp-btn" onClick={handleShare}>
            <span>📲</span> Share
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
          </button>
        </div>
      </div>
    </nav>
  )
}