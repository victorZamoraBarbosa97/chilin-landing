const instagramPosts = [
  { id: 1, img: '/assets/img1.jpg'  },
  { id: 2, img: '/assets/img4.jpg'  },
  { id: 3, img: '/assets/img7.jpg'  },
  { id: 4, img: '/assets/img8.jpg'  },
  { id: 5, img: '/assets/img10.jpg' },
  { id: 6, img: '/assets/img12.jpg' },
]

const navLinks = ['Productos', 'Eventos', 'Mayoreo', 'Instagram']

export default function Footer() {
  return (
    <footer style={{ background: '#373928', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/fondo_2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08, mixBlendMode: 'luminosity', pointerEvents: 'none' }} />

      {/* Instagram section */}
      <section id="instagram" style={{ padding: 'clamp(48px, 6vw, 80px) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(253,232,0,0.7)', marginBottom: 4 }}>Síguenos</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', letterSpacing: '-0.02em', color: 'white' }}>@chilin_oficial</div>
            </div>
            <a href="https://instagram.com/chilin_oficial" target="_blank" rel="noopener" style={{ background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', textDecoration: 'none', padding: '10px 18px', borderRadius: 999, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Seguir
            </a>
          </div>

          {/* Instagram grid — 3 cols en mobile, 6 cols en tablet+ */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, borderRadius: 14, overflow: 'hidden' }}>
            {instagramPosts.map(post => (
              <div key={post.id} style={{ aspectRatio: '1', overflow: 'hidden', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.07)'}
                onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
              >
                <img src={post.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '28px 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="footer-bottom-grid">
            {/* Brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src="/assets/logo.svg" width="40" height="40" alt="Chilin" />
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900, fontSize: '1rem', color: 'white', letterSpacing: '-0.01em' }}>CHILIN</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>Gomitas Enchiladas · Los Originales</div>
              </div>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {navLinks.map(l => (
                <a key={l} href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{l}</a>
              ))}
            </div>

            {/* Copy */}
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>
              © 2026 Chilin · Guadalajara, Jalisco
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
