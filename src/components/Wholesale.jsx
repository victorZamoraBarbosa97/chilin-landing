import { useState } from 'react'

const benefits = [
  { icon: '📦', title: 'Pedido mínimo bajo',    desc: 'Desde 10 piezas para empezar'              },
  { icon: '🚚', title: 'Envíos a todo México',  desc: 'Distribución nacional disponible'          },
  { icon: '💰', title: 'Precios de mayoreo',    desc: 'Hasta 40% de descuento vs menudeo'         },
]

const fields = [
  { key: 'nombre',   label: 'Tu Nombre',             placeholder: 'Juan Pérez'          },
  { key: 'negocio',  label: 'Nombre del Negocio',     placeholder: 'Dulcería El Oso'     },
  { key: 'ciudad',   label: 'Ciudad',                 placeholder: 'Guadalajara, Jalisco'},
  { key: 'telefono', label: 'WhatsApp / Teléfono',    placeholder: '33 1234 5678'        },
]

export default function Wholesale() {
  const [form, setForm] = useState({ nombre: '', negocio: '', ciudad: '', telefono: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  const inputStyle = {
    width: '100%', background: 'rgba(254,254,229,0.12)', border: 'none',
    borderBottom: '2px solid rgba(255,255,255,0.3)',
    color: 'white', padding: '14px 0 10px',
    fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 500,
    outline: 'none', transition: 'border-color 0.2s', caretColor: '#fde800',
  }
  const labelStyle = {
    fontFamily: "'Inter', sans-serif", fontWeight: 600,
    fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'rgba(253,232,0,0.7)', marginBottom: 4, display: 'block',
  }

  return (
    <section id="mayoreo" style={{ background: '#8b1a10', position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 8vw, 100px) 0' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/fondo_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12, mixBlendMode: 'luminosity' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,122,26,0.9)', marginBottom: 10 }}>Ventas al Mayoreo</div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'white', margin: '0 0 16px' }}>
            VENDE CHILIN<br/>EN TU NEGOCIO
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, margin: 0, maxWidth: 520 }}>
            Somos la opción ideal para tiendas, dulcerías y distribuidoras. Precios especiales por volumen y envíos a toda la república.
          </p>
        </div>

        {/* Layout: columna en mobile, dos columnas en desktop (via CSS class) */}
        <div className="wholesale-layout">

          {/* Benefits */}
          <div className="wholesale-benefits">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'rgba(254,254,229,0.07)', borderRadius: 14, padding: '16px 18px' }}>
                  <div style={{ fontSize: '1.4rem', flexShrink: 0, lineHeight: 1 }}>{b.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: 2 }}>{b.title}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp directo */}
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.12)' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>o escríbenos directo</span>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.12)' }} />
            </div>
            <a href="https://wa.me/5213312345678" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 16, padding: '14px 24px', borderRadius: 999, background: '#25D366', color: 'white', textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.88rem', boxShadow: '0 4px 20px rgba(37,211,102,0.25)', transition: 'transform 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="wholesale-form">
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: 'white', marginBottom: 24 }}>Contáctanos</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {fields.map(field => (
                    <div key={field.key}>
                      <label style={labelStyle}>{field.label}</label>
                      <input type="text" placeholder={field.placeholder} value={form[field.key]} onChange={e => handleChange(field.key, e.target.value)} required style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = '#fde800'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.3)'}
                      />
                    </div>
                  ))}
                </div>
                <button type="submit" style={{ marginTop: 32, width: '100%', background: '#fde800', color: '#373928', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', padding: '16px', borderRadius: 999, boxShadow: '0 4px 24px rgba(253,232,0,0.3)', transition: 'transform 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                >Solicitar Información de Mayoreo</button>
              </form>
            ) : (
              <div style={{ background: 'rgba(253,232,0,0.12)', borderRadius: 20, padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>🔥</div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: '1.2rem', color: '#fde800', marginBottom: 8 }}>¡Recibimos tu mensaje!</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>Te contactaremos en menos de 24 horas para hablar de tu pedido de mayoreo.</div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
