import { useEffect, useRef, useState } from 'react'

const FLAME_COLORS = ['#FF4800', '#FF7A00', '#FFB800', '#FF3300', '#FF6600', '#FFAA00']

const CSS = `
  .ldr-overlay {
    position: fixed; inset: 0; z-index: 9999;
    background: #120400;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 36px;
  }
  .ldr-overlay.ldr-out {
    animation: ldrOut 1.8s ease forwards;
    pointer-events: none;
  }
  @keyframes ldrOut {
    0%   { opacity: 1; }
    100% { opacity: 0; }
  }

  /* ── Rings ── */
  .ldr-ring {
    position: relative; width: 200px; height: 200px;
    display: flex; align-items: center; justify-content: center;
  }
  .ldr-track {
    position: absolute; inset: 0;
    border-radius: 50%; border: 3px solid transparent;
    pointer-events: none;
  }
  .ldr-r1 {
    inset: -16px;
    border-top-color: #FF4800; border-right-color: #FF7A00;
    animation: ldrSpin 1.2s linear infinite;
  }
  .ldr-r2 {
    inset: -28px;
    border-bottom-color: #FFB800; border-left-color: #FF4800;
    animation: ldrSpin 1.8s linear infinite reverse;
    opacity: .55;
  }
  .ldr-r3 { inset: -10px; border-color: transparent; opacity: 0; }
  @keyframes ldrSpin { to { transform: rotate(360deg); } }

  .ldr-r1-burst { animation: ldrBurst1 1.1s ease forwards !important; }
  .ldr-r2-burst { animation: ldrBurst2 1.1s .06s ease forwards !important; }
  .ldr-r3-burst { animation: ldrBurst3 1.1s .04s ease forwards !important; }

  @keyframes ldrBurst1 {
    0%   { inset: -16px;  opacity: 1;   border-width: 3px;
           border-top-color: #FF4800; border-right-color: #FF7A00;
           border-bottom-color: transparent; border-left-color: transparent; }
    100% { inset: -320px; opacity: 0;   border-width: 1px; }
  }
  @keyframes ldrBurst2 {
    0%   { inset: -28px;  opacity: .55; border-width: 3px;
           border-top-color: transparent; border-right-color: transparent;
           border-bottom-color: #FFB800; border-left-color: #FF4800; }
    100% { inset: -420px; opacity: 0;   border-width: 1px; }
  }
  @keyframes ldrBurst3 {
    0%   { inset: -10px;  opacity: 0;  border-width: 2px; border-color: #FFB800; }
    10%  { opacity: 1; }
    100% { inset: -270px; opacity: 0;  border-width: 1px; border-color: #FFB800; }
  }

  /* ── Logo ── */
  .ldr-logo {
    width: 180px; height: 180px; border-radius: 50%;
    overflow: hidden; position: relative; z-index: 4;
    background: #120400;
    animation: ldrPulse 1.4s ease-in-out infinite;
  }
  .ldr-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
  @keyframes ldrPulse {
    0%,100% { transform: scale(1);    filter: brightness(1); }
    50%      { transform: scale(1.06); filter: brightness(1.18) drop-shadow(0 0 28px #FF4800); }
  }
  .ldr-logo-fade { animation: ldrLogoFade 1.1s ease forwards !important; }
  @keyframes ldrLogoFade {
    0%   { opacity: 1; transform: scale(1);   filter: brightness(1); }
    35%  { opacity: 1; transform: scale(1.1); filter: brightness(1.5) drop-shadow(0 0 48px #FF4800); }
    100% { opacity: 0; transform: scale(.75); filter: brightness(0); }
  }

  /* ── Flames ── */
  .ldr-flames {
    position: absolute; inset: -60px;
    pointer-events: none; overflow: visible;
  }
  .ldr-fp {
    position: absolute;
    border-radius: 50% 50% 20% 50%;
    transform-origin: bottom center;
    opacity: 0;
    animation: ldrFloat var(--dur, 1.6s) var(--del, 0s) ease-in infinite;
  }
  @keyframes ldrFloat {
    0%   { transform: translate(-50%, 0) scale(1);                              opacity: .95; }
    50%  { transform: translate(calc(-50% + var(--dx, 0px)), -65px)  scale(.7); opacity: .7;  }
    80%  { transform: translate(calc(-50% + var(--dx, 0px)), -115px) scale(.35);opacity: .3;  }
    100% { transform: translate(calc(-50% + var(--dx, 0px)), -170px) scale(0);  opacity: 0;   }
  }
  .ldr-flames-stop { opacity: 0; transition: opacity .15s; }
  .ldr-flames-stop .ldr-fp { animation-play-state: paused; }

  /* ── Progress bar ── */
  .ldr-bar-track {
    width: 240px; height: 4px;
    background: rgba(255,255,255,.1); border-radius: 2px; overflow: hidden;
    transition: opacity .3s;
  }
  .ldr-bar-track.ldr-hide { opacity: 0; }
  .ldr-bar-fill {
    height: 100%; width: 0%;
    background: linear-gradient(90deg, #FF4800, #FFB800);
    border-radius: 2px; box-shadow: 0 0 10px #FF4800;
  }

  /* ── Label ── */
  .ldr-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px; letter-spacing: 6px;
    color: rgba(255,255,255,.45);
    animation: ldrBlink 1.2s ease-in-out infinite;
    transition: opacity .3s;
  }
  .ldr-text.ldr-hide { opacity: 0; }
  @keyframes ldrBlink {
    0%,100% { opacity: .4; }
    50%      { opacity: 1;  }
  }
`

export default function Loader({ onComplete }) {
  const loaderRef  = useRef(null)
  const flamesRef  = useRef(null)
  const barRef     = useRef(null)
  const logoRef    = useRef(null)
  const r1         = useRef(null)
  const r2         = useRef(null)
  const r3         = useRef(null)
  const barTrack   = useRef(null)
  const textRef    = useRef(null)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const flames = flamesRef.current

    // Build flame particles
    const particles = Array.from({ length: 28 }, () => {
      const fp = document.createElement('div')
      fp.className = 'ldr-fp'
      fp.style.left   = (30 + Math.random() * 40) + '%'
      fp.style.bottom = '50%'
      const size = 5 + Math.random() * 9
      fp.style.width  = size + 'px'
      fp.style.height = (size * 1.4) + 'px'
      fp.style.background = FLAME_COLORS[Math.floor(Math.random() * FLAME_COLORS.length)]
      fp.style.setProperty('--dur', (0.9  + Math.random() * 1.2) + 's')
      fp.style.setProperty('--del', (Math.random() * 2.2) + 's')
      fp.style.setProperty('--dx',  (Math.random() * 60 - 30) + 'px')
      flames.appendChild(fp)
      return fp
    })

    // Animate progress bar
    const bar = barRef.current
    const t0  = performance.now()
    let raf
    function tick(now) {
      const t = Math.min((now - t0) / 2600, 1)
      const e = t < .5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2) / 2
      if (bar) bar.style.width = (e * 100) + '%'
      if (t < 1) raf = requestAnimationFrame(tick)
      else setTimeout(burst, 100)
    }
    raf = requestAnimationFrame(tick)

    function burst() {
      barTrack.current?.classList.add('ldr-hide')
      textRef.current?.classList.add('ldr-hide')
      flames.classList.add('ldr-flames-stop')
      logoRef.current?.classList.add('ldr-logo-fade')

      // Rings burst out
      setTimeout(() => {
        r1.current?.classList.add('ldr-r1-burst')
        r2.current?.classList.add('ldr-r2-burst')
        r3.current?.classList.add('ldr-r3-burst')
      }, 800)

      // Signal parent → start circle reveal on app content
      setTimeout(() => onComplete?.(), 900)

      // Fade overlay
      setTimeout(() => loaderRef.current?.classList.add('ldr-out'), 1000)

      // Unmount
      setTimeout(() => setGone(true), 2800)
    }

    return () => {
      cancelAnimationFrame(raf)
      particles.forEach(p => p.remove())
    }
  }, [onComplete])

  if (gone) return null

  return (
    <>
      <style>{CSS}</style>
      <div ref={loaderRef} className="ldr-overlay">
        <div className="ldr-ring">
          <div ref={flamesRef} className="ldr-flames" />
          <div ref={r1} className="ldr-track ldr-r1" />
          <div ref={r2} className="ldr-track ldr-r2" />
          <div ref={r3} className="ldr-track ldr-r3" />
          <div ref={logoRef} className="ldr-logo">
            <img
              src="/assets/logo_simple.png"
              alt="CHILIN"
              onError={e => { e.currentTarget.src = '/assets/logo.svg' }}
            />
          </div>
        </div>
        <div ref={barTrack} className="ldr-bar-track">
          <div ref={barRef} className="ldr-bar-fill" />
        </div>
<div 
      ref={textRef} 
      className="ldr-text" 
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
    >
      CARGANDO...
    </div>      </div>
    </>
  )
}

