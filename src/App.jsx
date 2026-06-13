import { useState, useRef } from 'react'
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
import WhatsAppInvite from './components/WhatsAppInvite'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
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
      />
      <main>
        <Hero />
        <Countdown />
        <CoupleSection />
        <Events />
        <Gallery />
        <Venue />
        <RSVP />
        <WhatsAppInvite />
      </main>
      <Footer />
    </>
  )
}

export default App