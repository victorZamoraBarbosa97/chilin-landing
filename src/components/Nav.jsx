import { useState, useEffect } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const links = [
  { label: 'Productos', id: 'productos' },
  { label: 'Eventos',   id: 'eventos'   },
  { label: 'Mayoreo',   id: 'mayoreo'   },
  { label: 'Instagram', id: 'instagram' },
]

export default function Nav({ onSection }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { isTablet } = useBreakpoint()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Cierra el menú al pasar a tablet/desktop
  useEffect(() => { if (isTablet) setMenuOpen(false) }, [isTablet])

  // Bloquea scroll cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = (!isTablet && menuOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, isTablet])

  const go = (id) => {
    setMenuOpen(false)
    onSection?.(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const fg      = scrolled ? '#373928' : 'white'
  const navBg   = scrolled ? 'rgba(254,254,229,0.88)' : 'transparent'
  const blur    = scrolled ? 'blur(14px)' : 'none'
  const border  = scrolled ? '1px solid rgba(240,122,26,0.12)' : 'none'
  const padding = scrolled ? '10px 20px' : '18px 20px'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        padding,
        background: navBg,
        backdropFilter: blur, WebkitBackdropFilter: blur,
        borderBottom: border,
        transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div onClick={() => go('hero')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/assets/logo.svg" width="42" height="42" alt="Chilin" />
          <span style={{
            fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900,
            fontSize: '1.1rem', letterSpacing: '-0.02em', color: fg,
            textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.3)',
          }}>CHILIN</span>
        </div>

        {/* ── Tablet/Desktop: links inline ── */}
        {isTablet && (
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem',
                color: fg, padding: '8px 14px', borderRadius: 999,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.target.style.background = scrolled ? 'rgba(196,34,30,0.08)' : 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.target.style.background = 'transparent'}
              >{l.label}</button>
            ))}
            <button onClick={() => go('productos')} style={{
              background: '#c4221e', color: 'white', border: 'none', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.82rem',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '10px 20px', borderRadius: 999,
              boxShadow: '0 4px 16px rgba(196,34,30,0.35)',
              transition: 'transform 0.15s, filter 0.15s',
            }}
            onMouseEnter={e => { e.target.style.transform = 'scale(1.03)'; e.target.style.filter = 'brightness(1.08)' }}
            onMouseLeave={e => { e.target.style.transform = ''; e.target.style.filter = '' }}
            >Pedir Ahora</button>
          </div>
        )}

        {/* ── Mobile: hamburger ── */}
        {!isTablet && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5, zIndex: 201 }}
          >
            <span style={{ width: 22, height: 2, borderRadius: 2, display: 'block', background: menuOpen ? '#373928' : fg, transition: 'transform 0.25s, background 0.25s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ width: 22, height: 2, borderRadius: 2, display: 'block', background: menuOpen ? '#373928' : fg, transition: 'opacity 0.25s, background 0.25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, borderRadius: 2, display: 'block', background: menuOpen ? '#373928' : fg, transition: 'transform 0.25s, background 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        )}
      </nav>

      {/* ── Mobile menu overlay ── */}
      {!isTablet && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 199,
          background: 'rgba(254,254,229,0.97)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s cubic-bezier(0.22,1,0.36,1)',
        }}>
          {links.map((l, i) => (
            <button key={l.id} onClick={() => go(l.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
              fontSize: 'clamp(2rem, 10vw, 3rem)', letterSpacing: '-0.03em',
              color: '#373928', padding: '10px 24px',
              transition: 'color 0.15s',
              transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
              transform: menuOpen ? 'none' : 'translateY(10px)',
            }}
            onMouseEnter={e => e.target.style.color = '#c4221e'}
            onMouseLeave={e => e.target.style.color = '#373928'}
            >{l.label}</button>
          ))}
          <button onClick={() => go('productos')} style={{
            marginTop: 28,
            background: '#c4221e', color: 'white', border: 'none', cursor: 'pointer',
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '0.95rem', letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '16px 48px', borderRadius: 999,
            boxShadow: '0 4px 24px rgba(196,34,30,0.35)',
          }}>Pedir Ahora</button>
        </div>
      )}
    </>
  )
}
