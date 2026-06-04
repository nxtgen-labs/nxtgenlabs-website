import { useState } from 'react'
import { O, OB } from '../constants'
import { PROJECTS } from '../constants'

export default function Portfolio() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="portfolio" style={{ padding: 'clamp(60px,8vw,96px) clamp(16px,4vw,24px)', background: '#000' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p className="section-label">Our Work</p>
        <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, margin: '0 0 16px' }}>Recent Projects</h2>
        <p style={{ color: '#666', fontSize: 'clamp(15px,2vw,18px)', maxWidth: 600, lineHeight: 1.7, marginBottom: 'clamp(40px,6vw,64px)' }}>
          A look at some of the products and prototypes we have designed and printed for our clients.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {PROJECTS.map((prj, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 24, overflow: 'hidden', position: 'relative', minHeight: 280,
                border: `1px solid ${hovered === i ? O : OB}`,
                transition: 'transform 0.3s, border-color 0.3s',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                cursor: 'default',
              }}>
              <img src={prj.img} alt={prj.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, padding: '24px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ width: 28, height: 2, background: O, marginBottom: 10 }} />
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#fff', margin: 0 }}>{prj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
