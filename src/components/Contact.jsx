import { O, DARK } from '../constants'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'clamp(60px,8vw,96px) clamp(16px,4vw,24px)', background: DARK }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 'clamp(40px,6vw,64px)' }}>

        <div>
          <p className="section-label">Get In Touch</p>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1 }}>
            Let's Build Something<br />Great Together
          </h2>
          <p style={{ color: '#666', fontSize: 'clamp(14px,2vw,17px)', lineHeight: 1.8 }}>
            Have an idea? Need a prototype? Looking for a reliable product design and 3D printing partner? Reach out — we respond within 2 hours.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
