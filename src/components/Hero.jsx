import { useEffect, useRef } from 'react'

const embers = Array.from({ length: 22 }).map((_, i) => {
  const clrs = ['#FF4800', '#FF7A00', '#FFB800', '#FF3300', '#FF6600'];
  return {
    id: i,
    left: Math.random() * 100,
    dur: (3 + Math.random() * 5) + 's',
    del: (Math.random() * 7) + 's',
    sway: (Math.random() * 100 - 50) + 'px',
    bg: clrs[Math.floor(Math.random() * clrs.length)],
    sz: 2 + Math.random() * 4
  };
});

export default function Hero({ revealed }) {
  const cls = revealed ? ' in' : ''

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
      <video className="animacion-ken-burns" autoPlay muted loop playsInline style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center',
      }}>
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to top,
          rgba(10,1,0,0.88) 0%,
          rgba(20,3,0,0.60) 28%,
          rgba(80,10,0,0.25) 55%,
          rgba(0,0,0,0.05) 100%
        )`,
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 140,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 100%)',
      }} />

      {/* Heat glow */}
      <div className="hero-heat" />

      {/* Embers */}
      <div className="embers">
        {embers.map(e => (
          <div key={e.id} className="ember" style={{
            left: `${e.left}vw`,
            width: `${e.sz}px`,
            height: `${e.sz}px`,
            background: e.bg,
            '--dur': e.dur,
            '--del': e.del,
            '--sway': e.sway,
          }} />
        ))}
      </div>

      {/* Content */}
      <div className="container hero-wrap" style={{ position: 'relative', zIndex: 10, paddingBottom: 52, paddingTop: 80 }}>

        {/* Label — slides from left */}
        <div className={'hero-enter-label' + cls} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
          <div style={{ width: 28, height: 2, background: '#fde800', borderRadius: 2 }} />
          <span className="hero-label" style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(253,232,0,0.85)',
          }}>Gomitas Enchiladas · Desde 2020</span>
        </div>

        {/* Title — each word clip-reveals from below, staggered */}
        <h1 className="hero-title" style={{
          fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
          fontSize: 'clamp(3.4rem, 10vw, 7rem)',
          lineHeight: 0.92, letterSpacing: '-0.03em',
          color: '#ffffff', margin: '0 0 6px',
        }}>
          <span className="hero-clip-row">
            <span className={'hero-clip-word' + cls} style={{ transitionDelay: '0.2s' }}>DULCE</span>
          </span>
          <span className="hero-clip-row" style={{ overflow: 'visible' }}>
            <span className={'hero-clip-word' + cls} style={{ transitionDelay: '0.35s' }}>
              <span
                style={{
                  display: 'inline-block',
                  color: '#fde800',
                  // WebkitTextStroke: '2px #FF4800', // esto hace que no se vea bien por el tipo de fuente
                  textShadow: '1px 1px 6px #FF4800, 0 0 28px rgba(255,72,0,0.7)',
                  position: 'relative',
                }}
              >PICANTE</span>
            </span>
          </span>
          <span className="hero-clip-row">
            <span className={'hero-clip-word' + cls} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88em', transitionDelay: '0.5s' }}>ADICTIVO</span>
          </span>
        </h1>

        {/* Description */}
        <p className={'hero-desc hero-enter-fade' + cls} style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', lineHeight: 1.65,
          color: 'rgba(255,255,255,0.72)',
          margin: '22px 0 32px', maxWidth: 420,
          transitionDelay: '0.65s',
        }}>
          Nuestra mezcla única de chamoy y chile piquín de la casa,
          bañando tus gomitas favoritas. Pedidos y entregas en Guadalajara.
        </p>

        {/* Buttons */}
        <div className={'hero-enter-fade' + cls} style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', transitionDelay: '0.8s' }}>
          <button
            className="hero-btn-shimmer"
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
          >
            <span className="hero-shimmer-light" />
            ¡Quiero mis Chilin!
          </button>

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

        {/* Scroll indicator */}
        <div className={'hero-enter-fade' + cls} style={{ marginTop: 44, display: 'flex', alignItems: 'center', gap: 10, transitionDelay: '1.0s' }}>
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

        /* ── Hero desktop overrides (≥1280px) ── */
        @media (min-width: 1280px) {
          .hero-wrap.container {
            margin-left: 0 !important;
            max-width: none !important;
            padding-left: 5vw !important;
            padding-right: 5vw !important;
            padding-bottom: 72px !important;
          }
          .hero-title {
            font-size: clamp(4.9rem, 10.5vw, 9.75rem) !important;
            line-height: 0.88 !important;
          }
          .hero-desc {
            font-size: clamp(1.1rem, 1.4vw, 1.4rem) !important;
            max-width: 580px !important;
            margin-top: 28px !important;
            margin-bottom: 40px !important;
          }
          .hero-label {
            font-size: 0.8rem !important;
          }
        }

        /* ── Hero large desktop (≥1600px) ── */
        @media (min-width: 1600px) {
          .hero-wrap.container {
            padding-left: 6vw !important;
          }
          .hero-title {
            font-size: clamp(6rem, 11.25vw, 11.25rem) !important;
          }
          .hero-desc {
            font-size: clamp(1.2rem, 1.5vw, 1.5rem) !important;
            max-width: 660px !important;
          }
        }

        /* ── Ken Burns ── */
        @keyframes kenBurns {
          0%   { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.06) translate(-1%, -0.5%); }
        }
        .animacion-ken-burns {
          animation: kenBurns 18s ease-in-out infinite alternate;
        }

        /* ── Heat glow ── */
        .hero-heat {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 220px;
          background: radial-gradient(ellipse 60% 100% at 50% 100%, rgba(255,72,0,.18) 0%, transparent 70%);
          pointer-events: none;
          z-index: 4;
          animation: heatPulse 3s ease-in-out infinite;
        }
        @keyframes heatPulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1.2; }
        }

        /* ── Embers ── */
        .embers {
          position: absolute; inset: 0;
          pointer-events: none; overflow: hidden; z-index: 3;
        }
        .ember {
          position: absolute; bottom: -10px;
          border-radius: 50%;
          animation: emberRise var(--dur, 4s) var(--del, 0s) ease-in infinite;
          opacity: 0;
        }
        @keyframes emberRise {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.8; }
          60%  { opacity: 0.5; }
          100% { transform: translateY(-110vh) translateX(var(--sway, 30px)) scale(0); opacity: 0; }
        }

        /* ── Entrance: label slides from left ── */
        .hero-enter-label {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1);
          transition-delay: 0.1s;
        }
        .hero-enter-label.in {
          opacity: 1;
          transform: none;
        }

        /* ── Entrance: title clip reveal ── */
        .hero-clip-row {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }
        .hero-clip-word {
          display: block;
          transform: translateY(108%);
          transition: transform 0.85s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-clip-word.in {
          transform: translateY(0);
        }

        /* ── Entrance: fade + rise (desc, buttons, scroll) ── */
        .hero-enter-fade {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-enter-fade.in {
          opacity: 1;
          transform: none;
        }

        /* ── Shimmer on primary button ── */
        .hero-btn-shimmer {
          position: relative !important;
          overflow: hidden !important;
        }
        .hero-shimmer-light {
          position: absolute;
          top: -50%;
          left: -120%;
          width: 55%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.48), transparent);
          transform: skewX(-20deg);
          pointer-events: none;
          transition: left 0s;
        }
        .hero-btn-shimmer:hover .hero-shimmer-light {
          left: 150%;
          transition: left 0.55s ease;
        }

        /* ── Fire bubbles on PICANTE ── */
        .picante-bubble {
          aspect-ratio: 1/1;
          border-radius: 50%;
          background-image: radial-gradient(gold 20%, orangered);
          position: absolute;
          opacity: 0;
          mix-blend-mode: screen;
          animation: picanteBubble 1s ease-in infinite;
          pointer-events: none;
          will-change: transform, opacity;
        }
        @keyframes picanteBubble {
          0%   { opacity: 0;   transform: translateY(0)      scale(1);   filter: blur(0px);  }
          25%  { opacity: 1;   transform: translateY(-1.5rem) scale(1);   filter: blur(5px);  }
          100% { opacity: 0;   transform: translateY(-7rem)  scale(0);   filter: blur(10px); }
        }
      `}</style>
    </section>
  )
}
