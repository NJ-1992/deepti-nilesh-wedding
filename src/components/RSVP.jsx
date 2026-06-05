import { useState } from 'react'
import './RSVP.css'

const INITIAL = { name: '', phone: '', email: '', guests: '1', events: [], message: '', attending: '' }

const EVENTS = ['Haldi', 'Mehendi', 'Sangeet', 'Wedding', 'Reception']

export default function RSVP() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.attending) e.attending = 'Please select attendance'
    if (!form.phone.trim()) e.phone = 'Please enter your phone number'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(err => ({ ...err, [e.target.name]: '' }))
  }

  const toggleEvent = (ev) => {
    setForm(f => ({
      ...f,
      events: f.events.includes(ev) ? f.events.filter(e => e !== ev) : [...f.events, ev]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
    // Data stays in frontend — optionally post to a Google Form here
  }

  if (submitted) {
    return (
      <section id="rsvp" className="rsvp-section">
        <div className="rsvp-inner">
          <div className="rsvp-success">
            <div className="success-icon">🎉</div>
            <h2>Thank You, {form.name}!</h2>
            <p>Your RSVP has been received. We are overjoyed to celebrate this special occasion with you!</p>
            <div className="gold-divider"><span>💐</span></div>
            <p className="success-note">
              {form.attending === 'yes'
                ? `We can't wait to see you at ${form.events.length > 0 ? form.events.join(', ') : 'the celebrations'}!`
                : 'We will miss you, but thank you for letting us know!'}
            </p>
            <button className="btn-primary" style={{border:'none',cursor:'pointer',marginTop:'24px'}} onClick={() => setSubmitted(false)}>
              ✏️ Edit Response
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-inner">
        <div className="section-heading">
          <p className="subtitle">Will You Join Us?</p>
          <h2>RSVP</h2>
        </div>
        <div className="gold-divider"><span>💌</span></div>
        <p className="rsvp-subtitle">
          Kindly respond by <strong>June 30, 2026</strong>
        </p>

        <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-msg">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Number of Guests</label>
              <select name="guests" value={form.guests} onChange={handleChange}>
                {[1,2,3,4,5,6,7,8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Attending */}
          <div className="form-group">
            <label>Will You Be Attending? *</label>
            <div className="attend-options">
              <label className={`attend-opt ${form.attending === 'yes' ? 'selected' : ''}`}>
                <input type="radio" name="attending" value="yes" onChange={handleChange} hidden />
                <span>🎉</span> Joyfully Accept
              </label>
              <label className={`attend-opt ${form.attending === 'no' ? 'selected' : ''}`}>
                <input type="radio" name="attending" value="no" onChange={handleChange} hidden />
                <span>😔</span> Regretfully Decline
              </label>
            </div>
            {errors.attending && <span className="error-msg">{errors.attending}</span>}
          </div>

          {/* Events */}
          {form.attending === 'yes' && (
            <div className="form-group">
              <label>Which Events Will You Attend?</label>
              <div className="events-checkboxes">
                {EVENTS.map(ev => (
                  <label key={ev} className={`event-check ${form.events.includes(ev) ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={form.events.includes(ev)}
                      onChange={() => toggleEvent(ev)}
                      hidden
                    />
                    {ev}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Message */}
          <div className="form-group">
            <label>Message / Blessing for the Couple</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Share your warm wishes for Deepti & Nilesh... 💐"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn-primary rsvp-submit">
              💌 Send My RSVP
            </button>
            <p className="form-note">Your response helps us plan the perfect celebration!</p>
          </div>
        </form>
      </div>
    </section>
  )
}
