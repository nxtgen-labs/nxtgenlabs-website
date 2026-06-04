import { O } from '../constants'

export default function Process() {
  return (
    <section style={{ paddingTop: 80, paddingBottom: 0, background: '#000', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px) 32px' }}>
        <p className="section-label">Our Process</p>
        <div className="section-divider" />
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, color: '#fff', margin: '0 0 32px', lineHeight: 1.1 }}>
          From <span style={{ color: O }}>Concept</span> to <span style={{ color: O }}>Creation</span>
        </h2>
      </div>

      {/* Full-bleed image */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img
          src="/images/process.jpg"
          alt="Our Process — From Concept to Creation"
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
