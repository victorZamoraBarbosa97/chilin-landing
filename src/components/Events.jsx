import { useState } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const packages = [
  { id: 1, name: 'Paquete Básico', guests: 'Hasta 30 personas', price: 'Desde $1,500', color: '#f5f3d0', textColor: '#373928', items: ['Barra equipada con 4 sabores', 'Cubetas surtidas en chamoy y chile', 'Presentación personalizada', '2 horas de servicio'], highlight: false },
  { id: 2, name: 'Paquete Fiesta', guests: 'Hasta 80 personas', price: 'Desde $3,500', color: '#c4221e', textColor: '#ffffff', items: ['Barra premium con 8 sabores', 'Sazón Chilin para personalizar', 'Topping de chamoy en vivo', 'Letrero y decoración Chilin', '4 horas de servicio'], highlight: true },
  { id: 3, name: 'Paquete XL',     guests: 'Hasta 200 personas', price: 'Precio especial', color: '#373928', textColor: '#ffffff', items: ['Barra completa con todo el catálogo', 'Staff dedicado Chilin', 'Personalización total del evento', 'Duración flexible'], highlight: false },
]

function PackageCard({ pkg }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: pkg.color, borderRadius: 20, padding: '22px 20px',
        flex: 1, minWidth: 0,
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 16px 48px rgba(196,34,30,0.22)' : '0 4px 16px rgba(55,57,40,0.1)',
        transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {pkg.highlight && (
        <div style={{ position: 'absolute', top: 14, right: 14, background: '#fde800', color: '#373928', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999 }}>Más Popular</div>
      )}
      <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: pkg.highlight ? 'rgba(253,232,0,0.8)' : (pkg.textColor === '#ffffff' ? 'rgba(255,255,255,0.5)' : '#f07a1a'), marginBottom: 6 }}>{pkg.guests}</div>
      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.1, color: pkg.textColor, marginBottom: 8 }}>{pkg.name}</div>
      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: pkg.highlight ? '#fde800' : (pkg.textColor === '#ffffff' ? 'rgba(255,255,255,0.75)' : '#c4221e'), marginBottom: 16 }}>{pkg.price}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {pkg.items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: pkg.highlight ? '#fde800' : (pkg.textColor === '#ffffff' ? 'rgba(255,255,255,0.4)' : '#c4221e'), flexShrink: 0, marginTop: 6 }} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: pkg.textColor === '#ffffff' ? 'rgba(255,255,255,0.8)' : '#7a7862', lineHeight: 1.45 }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Events() {
  const { isTablet } = useBreakpoint()

  return (
    <section id="eventos" style={{ background: '#c4221e', padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(253,232,0,0.8)', marginBottom: 8 }}>Para tu Fiesta</div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 'clamp(1.9rem, 5vw, 3rem)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'white', margin: '0 0 14px' }}>
            PONEMOS LA<br/><span style={{ color: '#fde800' }}>BARRA DE SNACKS</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, margin: 0, maxWidth: 560 }}>
            Llevamos nuestra barra de gomitas enchiladas directo a tu evento. Bodas, XV años, cumpleaños, corporativos — donde haya fiesta, hay Chilin.
          </p>
        </div>

        {/* Photo strip — 2 columnas siempre, más alto en desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 28, borderRadius: 16, overflow: 'hidden', height: isTablet ? 260 : 180 }}>
          <img src="/assets/barra_1.jpg" alt="Barra Chilin"   style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <img src="/assets/barra_2.jpg" alt="Cubetas Chilin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Packages — columna en mobile, fila en tablet+ */}
        <div style={{ display: 'flex', flexDirection: isTablet ? 'row' : 'column', gap: 12, marginBottom: 28 }}>
          {packages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
        </div>

        {/* CTA */}
        <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 18, padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'white' }}>¿Tienes una fecha en mente?</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 }}>Escríbenos por WhatsApp y cotizamos tu evento sin compromiso.</p>
          <a href="https://wa.me/5213313886924?text=Hola%20Chilin%2C%20quiero%20cotizar%20una%20barra%20de%20snacks%20para%20mi%20evento" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fde800', color: '#373928', textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.03em', textTransform: 'uppercase', padding: '14px 22px', borderRadius: 999, boxShadow: '0 4px 20px rgba(253,232,0,0.3)', alignSelf: 'flex-start', transition: 'transform 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            Cotizar mi Evento
          </a>
        </div>
      </div>
    </section>
  )
}
