import { O, OB, DARK } from '../constants'

export default function CTA() {
  const scrollTo = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{ padding: 'clamp(48px,8vw,80px) clamp(16px,4vw,24px)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', border: `1px solid ${OB}`, borderRadius: 48, background: DARK, padding: 'clamp(40px,6vw,72px) clamp(24px,6vw,80px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, margin: '0 0 16px' }}>
          Ready to bring your idea to life?
        </h2>
        <p style={{ color: '#666', fontSize: 'clamp(15px,2vw,20px)', marginBottom: 36 }}>
          Tell us what you need — we will get back to you within 2 hours.
        </p>
        <button onClick={scrollTo}
          style={{ background: O, color: '#fff', padding: 'clamp(14px,2vw,18px) clamp(32px,4vw,48px)', borderRadius: 999, fontWeight: 800, fontSize: 'clamp(15px,2vw,18px)', border: 'none', cursor: 'pointer' }}>
          Start a Project
        </button>
      </div>
    </section>
  )
}
