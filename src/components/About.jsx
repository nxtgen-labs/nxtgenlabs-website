import { O, OB } from '../constants'

export default function About() {
  const pills = [
    ['⚡', 'Fast Turnaround', 'Prototypes in days, not weeks'],
    ['🎯', 'Engineer-Led', 'Every project handled by mechanical engineers'],
  ]

  return (
    <section id="about" style={{ padding: 'clamp(60px,8vw,96px) clamp(16px,4vw,48px)', background: '#050505' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>

        {/* Left */}
        <div>
          <p className="section-label">Who We Are</p>
          <div className="section-divider" />
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 24px', color: '#fff' }}>
            From Concept to Creation –<br />
            <span style={{ color: O }}>We Bring Ideas to Life.</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>End-to-End Product Development Under One Roof.</p>
          <p style={{ color: '#777', fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
            We're Nxt Gen Labs, a passionate, multi-disciplinary team of product designers, engineers, and makers driven by one goal: to bring real, buildable products to life.
          </p>
          <p style={{ color: '#777', fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
            From mechanical design to precision manufacturing, we connect every part of the product development puzzle. We don't just deliver CAD files — we deliver clarity, functionality, and manufacturability.
          </p>
          <p style={{ color: '#777', fontSize: 15, lineHeight: 1.85, marginBottom: 36 }}>
            We're not just designers or developers. We're product partners, invested in your vision from day one. Whether it's a precision-engineered part or a fully integrated system, we build it right, fast, and ready for the real world.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {pills.map(([icon, title, desc]) => (
              <div key={title} style={{ border: `1px solid ${OB}`, borderRadius: 16, padding: '16px 20px', background: '#000', flex: '1', minWidth: 160 }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — promise card */}
        <div>
          <div style={{ borderRadius: 28, background: 'linear-gradient(135deg, #FF6D00, #cc5500)', padding: 'clamp(32px,5vw,48px) clamp(24px,4vw,40px)', color: '#000' }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12, opacity: 0.7 }}>Our Promise</p>
            <h3 style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 900, lineHeight: 1.2, margin: '0 0 20px' }}>
              Build it right,<br />fast, and ready<br />for the real world.
            </h3>
            <div style={{ width: 40, height: 3, background: 'rgba(0,0,0,0.3)' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
