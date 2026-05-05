import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Products from './components/Products'
import Events from './components/Events'
import Wholesale from './components/Wholesale'
import Footer from './components/Footer'

const TWEAK_DEFAULTS = {
  showWholesale: true,
  roundedCards: true,
}

const TweaksPanel = ({ tweaks, setTweaks, onClose }) => {
  const panelStyle = {
    position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
    background: '#fefee5', borderRadius: 20, padding: '20px 22px',
    width: 240, boxShadow: '0 12px 40px rgba(55,57,40,0.18)',
    fontFamily: "'Inter', sans-serif",
  }
  const labelStyle = {
    fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.08em', color: '#7a7862', marginBottom: 6, display: 'block',
  }
  return (
    <div style={panelStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '0.9rem', color: '#373928' }}>Tweaks</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: '#7a7862' }}>✕</button>
      </div>
      <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginBottom: 12 }}>
        <input type="checkbox" checked={tweaks.showWholesale} onChange={e => setTweaks(t => ({ ...t, showWholesale: e.target.checked }))} />
        Mostrar Sección Mayoreo
      </label>
      <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <input type="checkbox" checked={tweaks.roundedCards} onChange={e => setTweaks(t => ({ ...t, roundedCards: e.target.checked }))} />
        Tarjetas Redondeadas
      </label>
    </div>
  )
}

export default function App() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS)
  const [showTweaks, setShowTweaks] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [revealDone, setRevealDone] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = '#120400'
    return () => { document.body.style.backgroundColor = '' }
  }, [])

  useEffect(() => {
    if (!revealed) return
    const els = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    const restore = setTimeout(() => { document.body.style.backgroundColor = '' }, 2000)
    return () => { obs.disconnect(); clearTimeout(restore) }
  }, [revealed])

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setShowTweaks(true)
      if (e.data?.type === '__deactivate_edit_mode') setShowTweaks(false)
    }
    window.addEventListener('message', handler)
    window.parent.postMessage({ type: '__edit_mode_available' }, '*')
    return () => window.removeEventListener('message', handler)
  }, [])

  const handleTweakClose = () => {
    setShowTweaks(false)
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*')
  }

  const handleTweakChange = (updater) => {
    setTweaks(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*')
      return next
    })
  }

  return (
    <>
      <Loader onComplete={() => setRevealed(true)} />
      <div
        className={revealed && !revealDone ? 'app-reveal' : ''}
        onAnimationEnd={() => setRevealDone(true)}
      >
        <Nav />
        <Hero revealed={revealed} />
        <div className="fade-up"><Products rounded={tweaks.roundedCards} /></div>
        <div className="fade-up"><Events /></div>
        {tweaks.showWholesale && <div className="fade-up"><Wholesale /></div>}
        <Footer />
        {showTweaks && <TweaksPanel tweaks={tweaks} setTweaks={handleTweakChange} onClose={handleTweakClose} />}
      </div>
    </>
  )
}
