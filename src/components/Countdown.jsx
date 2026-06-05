import { useState, useEffect } from 'react'
import './Countdown.css'

const WEDDING_DATE = new Date('2026-07-07T21:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return {
      days: 32,
      hours: 8,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft())
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section className="countdown-section">
      <div className="countdown-inner">
        <div className="section-heading">
          <p className="subtitle">The Big Day Is</p>
          <h2>Almost Here!</h2>
        </div>

        <div className="gold-divider">
          <span>🌸</span>
        </div>

        <div className="countdown-grid">
          {units.map(({ label, value }) => (
            <div className="countdown-card" key={label}>
              <div className="countdown-value">
                {String(value).padStart(2, '0')}
              </div>
              <div className="countdown-label">{label}</div>
            </div>
          ))}
        </div>

        <p className="countdown-footnote">
          🌸 Jaimala — 6th July 2026, 9:00 PM &nbsp;|&nbsp; 💍 Vidhi (Fera) — 7th July 2026, 6:30 AM, venue; Hotel Shri Arjun Palace
          1791, Maharana Pratap ward 44 Jabalpur road, Katni, M.P.-483501
        </p>
      </div>
    </section>
  )
}