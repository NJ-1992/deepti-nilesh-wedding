import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import CoupleSection from './components/CoupleSection'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import PetalRain from './components/PetalRain'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Use a royalty-free Indian instrumental (shehnai/classical) from public CDN
  const MUSIC_URL = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
  }

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      `🌸 You're invited to the wedding of Deepti & Nilesh! 💍\n\nJoin us to celebrate this beautiful union.\n\nWedding Date: February 14, 2026\n\n🔗 View Invitation: ${window.location.href}`
    )
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  return (
    <>
      <div className="mandala-bg" aria-hidden="true" />
      <PetalRain />
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        style={{ display: 'none' }}
      />
      <Navbar
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
        shareOnWhatsApp={shareOnWhatsApp}
      />
      <main>
        <Hero />
        <Countdown />
        <CoupleSection />
        <Events />
        <Gallery />
        <Venue />
        <RSVP />
      </main>
      <Footer shareOnWhatsApp={shareOnWhatsApp} />
    </>
  )
}

export default App
