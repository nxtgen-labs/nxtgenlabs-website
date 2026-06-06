import { O, OB } from '../constants'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'LinkedIn',  href: 'https://linkedin.com',  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'YouTube',   href: 'https://youtube.com',   path: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
  { label: 'WhatsApp',  href: 'https://wa.me/919381703878', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
]

const WA_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const TICKER_ITEMS = ['3D Printing','CAD Design','Product Design','Rapid Prototyping','Custom Parts','Engineering']

export default function Footer() {
  const cols = [
    { title: 'Studio India:',      text: 'Hyderabad,\nTelangana — India' },
    { title: 'Production House:',  text: 'Nxt Gen Labs,\nHyderabad — 500001' },
    { title: 'Working Hours:',     text: 'Mon – Sat\n9:00 AM – 7:00 PM' },
  ]

  return (
    <footer style={{ background: '#0d0d0d', paddingTop: 60 }}>

      {/* Top — logo + CONTACT US TODAY + contact */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,4vw,48px) 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 40, alignItems: 'start', borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
        <div>
          <img src="/images/logo.png" alt="Nxt Gen Labs" style={{ height: 90, width: 'auto', maxWidth: 300, marginBottom: 24, objectFit: 'contain' }} />
          <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, lineHeight: 1.0, margin: 0, background: 'linear-gradient(135deg,#FF6D00,#ff9a00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            CONTACT US<br />TODAY
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
          <a href="tel:+919381703878" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: O, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d={WA_ICON}/></svg>
            </div>
            <span style={{ color: '#fff', fontSize: 'clamp(16px,2vw,22px)', fontWeight: 600 }}>+91 93817 03878</span>
          </a>
          <a href="mailto:info@nxtgenlabs.in" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: O, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 20 }}>✉️</div>
            <span style={{ color: '#fff', fontSize: 'clamp(16px,2vw,22px)', fontWeight: 600, wordBreak: 'break-all' }}>info@nxtgenlabs.in</span>
          </a>
        </div>
      </div>

      {/* Middle — cols + nav */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(24px,4vw,40px) clamp(16px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 24, borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
        {cols.map((c, i) => (
          <div key={i} style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingRight: i < 2 ? 24 : 0, paddingLeft: i > 0 ? 8 : 0 }}>
            <p style={{ color: '#aaa', fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{c.title}</p>
            <div style={{ width: 32, height: 2, background: O, marginBottom: 12 }} />
            <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, margin: 0, whiteSpace: 'pre-line' }}>{c.text}</p>
          </div>
        ))}
        <div style={{ paddingLeft: 8 }}>
          {['About','Services','Portfolio','Contact'].map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}
              style={{ display: 'block', background: 'none', border: 'none', color: '#777', fontSize: 15, cursor: 'pointer', marginBottom: 14, padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = O}
              onMouseLeave={e => e.target.style.color = '#777'}
            >{l === 'About' ? 'About Us' : l === 'Contact' ? 'Contact Us' : l}</button>
          ))}
        </div>
      </div>

      {/* Social icons */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px clamp(16px,4vw,48px)', display: 'flex', justifyContent: 'center', gap: 14, borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
        {SOCIAL.map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,109,0,0.1)', border: '1px solid rgba(255,109,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,109,0,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,109,0,0.1)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d={s.path}/></svg>
          </a>
        ))}
      </div>

      {/* Ticker */}
      <div style={{ overflow: 'hidden', padding: '18px 0', borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
        <div style={{ display: 'flex', gap: 48, animation: 'ticker 18s linear infinite', whiteSpace: 'nowrap', fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.07)' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => <span key={i}>{t} ·</span>)}
        </div>
      </div>

      {/* Copyright */}
      <div style={{ textAlign: 'center', padding: '20px', color: '#444', fontSize: 13 }}>
        (c) 2026 Nxt Gen Labs. All rights reserved.
      </div>
    </footer>
  )
}
