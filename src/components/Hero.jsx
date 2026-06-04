import { O } from '../constants'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url(/images/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 60%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', padding: 'clamp(100px, 15vw, 160px) clamp(24px, 5vw, 64px) 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'left', maxWidth: 520 }}>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 72px)', fontWeight: 900, lineHeight: 1.05, margin: '0 0 20px' }}>
            <span style={{ color: '#fff' }}>We Turn Your Ideas</span><br />
            <span style={{ color: O }}>Into Reality</span>
          </h1>
          <p style={{ color: '#ccc', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, maxWidth: 420, margin: '0 0 20px' }}>
            From concept to physical prototype — fast, affordable, and engineer-led.
          </p>
          <div style={{ width: 40, height: 3, background: O }} />
        </div>
      </div>
    </section>
  )
}
