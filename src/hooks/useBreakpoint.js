import { useState, useEffect } from 'react'

function getState() {
  const w = window.innerWidth
  return { isTablet: w >= 768, isDesktop: w >= 1280 }
}

export function useBreakpoint() {
  const [bp, setBp] = useState(getState)
  useEffect(() => {
    const fn = () => setBp(getState())
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return bp
}
