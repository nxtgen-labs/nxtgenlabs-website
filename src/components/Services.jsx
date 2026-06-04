import { useState } from 'react'
import { O, OB, DARK } from '../constants'
import { SERVICES } from '../constants'

export default function Services() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" style={{ padding: 'clamp(60px,8vw,96px) clamp(16px,4vw,24px)', background: DARK }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">What We Do</p>
        <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 16px' }}>Our Services</h2>
        <p style={{ color: '#666', fontSize: 'clamp(15px,2vw,18px)', maxWidth: 600, lineHeight: 1.7, marginBottom: 'clamp(40px,6vw,64px)' }}>
          Everything you need to bring your product idea to life — all under one roof.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {SERVICES.map((svc, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 24, overflow: 'hidden', position: 'relative', minHeight: 320,
                border: `1px solid ${hovered === i ? O : OB}`,
                transition: 'transform 0.3s, border-color 0.3s',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                cursor: 'default',
              }}>
              {/* Image */}
              <img src={svc.img} alt={svc.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              {/* Gradient */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)' }} />
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1, padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, border: `1px solid ${O}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: O, fontWeight: 900, fontSize: 13, marginBottom: 14, background: 'rgba(0,0,0,0.5)' }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8, color: '#fff' }}>{svc.title}</h3>
                <p style={{ color: '#bbb', lineHeight: 1.6, fontSize: 14, margin: 0 }}>{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
