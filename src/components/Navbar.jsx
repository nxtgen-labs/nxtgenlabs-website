import { useState, useEffect } from 'react'
import { O, OB } from '../constants'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'Portfolio', 'About', 'Contact']

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(0,0,0,0.97)' : 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${OB}`,
      transition: 'background 0.3s',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Nxt Gen Labs"
          style={{ height: 48, width: 'auto', maxWidth: 200, objectFit: 'contain', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        {/* Desktop nav */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.filter(l => l !== 'Contact').map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}
              style={{ background: 'none', border: 'none', color: '#ccc', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = O}
              onMouseLeave={e => e.target.style.color = '#ccc'}
            >{l}</button>
          ))}
          <button onClick={() => scrollTo('contact')}
            style={{ background: O, color: '#fff', padding: '10px 22px', borderRadius: 999, fontWeight: 800, fontSize: 14, border: 'none', cursor: 'pointer' }}>
            Contact Us
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button className="hide-desktop" onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 6 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2, background: O, transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translateY(7px)'
                : i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="hide-desktop" style={{ background: '#0a0a0a', borderTop: `1px solid ${OB}`, padding: '16px 24px 24px' }}>
          {links.map(l => (
            <button key={l} onClick={() => { scrollTo(l.toLowerCase()); setMenuOpen(false) }}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', color: '#ccc', fontSize: 16, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
