import { useState } from 'react'
import { O, OB, DARK, FORMSPREE_ID } from '../constants'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: 'Service Needed', details: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name.trim())    { alert('Please enter your name.');           return }
    if (!form.phone.trim())   { alert('Please enter your WhatsApp number.'); return }
    if (!form.email.trim())   { alert('Please enter your email.');           return }
    if (form.service === 'Service Needed') { alert('Please select a service.'); return }
    if (!form.details.trim()) { alert('Please enter project details.');      return }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, service: form.service, message: form.details }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', service: 'Service Needed', details: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inp = { width: '100%', background: DARK, border: `1px solid ${OB}`, borderRadius: 16, padding: '14px 20px', color: '#fff', fontSize: 15, outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }
  const focusStyle = (e) => (e.target.style.borderColor = O)
  const blurStyle  = (e) => (e.target.style.borderColor = OB)

  return (
    <div style={{ border: `1px solid ${OB}`, borderRadius: 28, padding: 'clamp(20px,4vw,32px)', background: '#000', display: 'flex', flexDirection: 'column', gap: 16 }}>

      {status === 'success' && (
        <div style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 16, padding: '16px 20px', textAlign: 'center' }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>✅</div>
          <div style={{ color: '#22c55e', fontWeight: 800, fontSize: 16 }}>Message Sent!</div>
          <div style={{ color: '#666', fontSize: 13, marginTop: 4 }}>We'll get back to you within 2 hours.</div>
        </div>
      )}

      {status === 'error' && (
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 16, padding: '16px 20px', textAlign: 'center', color: '#ef4444', fontSize: 14 }}>
          ❌ Something went wrong. <a href="https://wa.me/919381703878" target="_blank" rel="noreferrer" style={{ color: O }}>WhatsApp us directly.</a>
        </div>
      )}

      <input type="text"  placeholder="Your Name"         value={form.name}    onChange={set('name')}    style={inp} onFocus={focusStyle} onBlur={blurStyle} />
      <input type="text"  placeholder="WhatsApp Number"   value={form.phone}   onChange={set('phone')}   style={inp} onFocus={focusStyle} onBlur={blurStyle} />
      <input type="email" placeholder="Email Address"     value={form.email}   onChange={set('email')}   style={inp} onFocus={focusStyle} onBlur={blurStyle} />

      <select value={form.service} onChange={set('service')} style={{ ...inp, color: form.service === 'Service Needed' ? '#aaa' : '#fff' }}>
        <option>Service Needed</option>
        <option>3D Printing</option>
        <option>CAD Design</option>
        <option>Product Design</option>
        <option>Rapid Prototyping</option>
        <option>Custom Parts</option>
      </select>

      <textarea rows={6} placeholder="Project Details" value={form.details} onChange={set('details')} style={{ ...inp, resize: 'none' }} onFocus={focusStyle} onBlur={blurStyle} />

      <button onClick={handleSubmit} disabled={status === 'sending'}
        style={{ background: status === 'success' ? '#22c55e' : O, color: '#fff', border: 'none', borderRadius: 16, padding: 16, fontWeight: 800, fontSize: 16, cursor: status === 'sending' ? 'not-allowed' : 'pointer', width: '100%', transition: 'background 0.3s', opacity: status === 'sending' ? 0.7 : 1 }}>
        {status === 'sending' ? '⏳ Sending...' : status === 'success' ? '✅ Sent!' : 'Submit'}
      </button>

      <p style={{ textAlign: 'center', color: '#555', fontSize: 12, margin: 0 }}>
        Or reach us on{' '}
        <a href="https://wa.me/919381703878" target="_blank" rel="noreferrer" style={{ color: O, fontWeight: 600 }}>WhatsApp</a>
      </p>
    </div>
  )
}
