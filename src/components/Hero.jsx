export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100svh',
      background: '#1a0500',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>
      <video autoPlay muted loop playsInline style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center',
      }}>
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to top,
          rgba(10,1,0,0.97) 0%,
          rgba(20,3,0,0.85) 28%,
          rgba(80,10,0,0.50) 55%,
          rgba(0,0,0,0.18) 100%
        )`,
      }} />

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 140,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)',
      }} />

      {/* Content — usa .container para width responsivo */}
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingBottom: 52, paddingTop: 0 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
          <div style={{ width: 28, height: 2, background: '#fde800', borderRadius: 2 }} />
          <span style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(253,232,0,0.85)',
          }}>Gomitas Enchiladas · Desde 2020</span>
        </div>

        <h1 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
          fontSize: 'clamp(3.4rem, 10vw, 7rem)',
          lineHeight: 0.92, letterSpacing: '-0.03em',
          color: '#ffffff', margin: '0 0 6px',
          textShadow: '0 4px 32px rgba(0,0,0,0.5)',
        }}>
          PURO<br/>
          <span style={{ color: '#fde800', textShadow: '0 0 60px rgba(253,232,0,0.35)' }}>FUEGO</span><br/>
          <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)', color: 'transparent', fontSize: '0.88em' }}>DULCE</span>
        </h1>

        <p style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', lineHeight: 1.65,
          color: 'rgba(255,255,255,0.72)',
          margin: '22px 0 32px', maxWidth: 420,
        }}>
          Gomitas bañadas en chamoy artesanal y chile piquín.
          Pedidos en Guadalajara y envíos a toda la república.
        </p>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#fde800', color: '#1a0500', border: 'none', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif", fontWeight: 800,
              fontSize: '0.88rem', letterSpacing: '0.05em', textTransform: 'uppercase',
              padding: '16px 32px', borderRadius: 999,
              boxShadow: '0 0 40px rgba(253,232,0,0.4), 0 6px 20px rgba(0,0,0,0.3)',
              transition: 'transform 0.15s cubic-bezier(0.22,1,0.36,1), box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(253,232,0,0.55), 0 6px 20px rgba(0,0,0,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 40px rgba(253,232,0,0.4), 0 6px 20px rgba(0,0,0,0.3)' }}
          >¡Pídelas Ya!</button>

          <button
            onClick={() => document.getElementById('eventos')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'rgba(255,255,255,0.08)', color: 'white', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem',
              padding: '15px 24px', borderRadius: 999,
              border: '1.5px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
          >Barra para Fiestas</button>
        </div>

        <div style={{ marginTop: 44, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 26, height: 42, borderRadius: 13, border: '1.5px solid rgba(255,255,255,0.2)', position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 4, height: 8, background: '#fde800', borderRadius: 2, position: 'absolute', left: '50%', top: 6, transform: 'translateX(-50%)', animation: 'scrollDot 1.8s ease-in-out infinite' }} />
          </div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 500, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>SCROLL</span>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateX(-50%) translateY(0); opacity: 1; }
          70%  { transform: translateX(-50%) translateY(14px); opacity: 0; }
          100% { transform: translateX(-50%) translateY(0); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
