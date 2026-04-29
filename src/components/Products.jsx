import { useState } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const products = [
  { id: 1, name: 'Cubeta Grande',       tag: 'Más Popular', price: '$180', desc: 'La cubeta perfecta para compartir. Mezcla de gomitas bañadas en chamoy y chile piquín.',                    img: '/assets/cubeta_grande.jpg',       highlight: true  },
  { id: 2, name: 'Cubeta Mediana',      tag: 'Clásico',     price: '$120', desc: 'La medida justa para el antojo. Las mismas gomitas enchiladas de siempre.',                                img: '/assets/cubeta_mediana.jpg',      highlight: false },
  { id: 3, name: 'Vaso Individual',     tag: 'Single',      price: '$80',  desc: 'Un vaso lleno de sabor picante. Ideal para llevar a donde vayas.',                                          img: '/assets/img12.jpg',               highlight: false },
  { id: 4, name: 'Vaso con Salsa',      tag: 'Especial',    price: '$90',  desc: 'Vaso individual con salsa chamoy extra para los que quieren más intensidad.',                               img: '/assets/vaso_con_salsa_chamoy.jpg', highlight: false },
  { id: 5, name: 'Mini Vaso',           tag: 'Snack',       price: '$45',  desc: 'El tamaño ideal para probar. Regálalo o cómetelo de una.',                                                  img: '/assets/mini_vaso.jpg',           highlight: false },
  { id: 6, name: 'Bolsa Pequeña',       tag: 'Promo',       price: '$12',  desc: 'Gomitas enchiladas en bolsita. A los mejores precios, perfecta para recargar.',                            img: '/assets/bolsa_pequena.jpg',       highlight: false },
]

function ProductCard({ product, featured }) {
  const [hovered, setHovered] = useState(false)
  const { isTablet } = useBreakpoint()

  // En tablet/desktop la featured card muestra imagen al lado; en mobile apilada
  const rowLayout = featured && isTablet

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fefee5', borderRadius: 20, overflow: 'hidden',
        boxShadow: hovered ? '0 16px 56px rgba(196,34,30,0.18), 0 4px 12px rgba(196,34,30,0.08)' : '0 4px 24px rgba(55,57,40,0.08)',
        transform: hovered ? 'translateY(-5px) scale(1.01)' : 'none',
        transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
        display: 'flex', flexDirection: rowLayout ? 'row' : 'column',
        height: '100%',
      }}
    >
      {/* Imagen */}
      <div style={{
        position: 'relative',
        height: rowLayout ? 'auto' : 160,
        minHeight: rowLayout ? 200 : 'auto',
        width: rowLayout ? '42%' : '100%',
        flexShrink: 0, overflow: 'hidden',
      }}>
        <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
        {product.highlight && (
          <div style={{ position: 'absolute', top: 10, left: 10, background: '#fde800', color: '#373928', fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999 }}>Más Popular</div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: rowLayout ? '24px 24px' : '14px 16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f07a1a', marginBottom: 4 }}>{product.tag}</div>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: rowLayout ? '1.4rem' : '1rem', lineHeight: 1.15, letterSpacing: '-0.01em', color: '#373928', marginBottom: 6 }}>{product.name}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#7a7862', lineHeight: 1.55, marginBottom: 14 }}>{product.desc}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900, fontSize: rowLayout ? '1.6rem' : '1.2rem', color: '#c4221e' }}>{product.price}</span>
          <button style={{ background: '#c4221e', color: 'white', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', padding: '9px 18px', borderRadius: 999, transition: 'transform 0.15s, filter 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.filter = 'brightness(1.1)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.filter = '' }}
          >Pedir</button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="productos" style={{ background: '#f5f3d0', padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#f07a1a', marginBottom: 8 }}>Nuestros Productos</div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#373928', margin: 0 }}>
            ELIGE TU<br/><span style={{ color: '#c4221e' }}>CUBETA</span>
          </h2>
        </div>

        {/* Grid responsivo via CSS */}
        <div className="products-grid">
          {products.map((p, i) => (
            <div key={p.id} className={i === 0 ? 'product-featured' : ''}>
              <ProductCard product={p} featured={i === 0} />
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div style={{ marginTop: 36, display: 'flex', gap: 0, background: '#c4221e', borderRadius: 16, overflow: 'hidden' }}>
          {[{ num: '2020', label: 'Fundados' }, { num: '6+', label: 'Presentaciones' }, { num: '100%', label: 'Artesanal' }].map((stat, i) => (
            <div key={i} style={{ flex: 1, padding: '16px 8px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', color: '#fde800', lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '0.7rem', color: 'rgba(255,255,255,0.65)', marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
