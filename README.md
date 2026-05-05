# Chilin — Landing Page

Landing page para **Chilin**, marca de gomitas enchiladas con chamoy y chile piquín de la casa. Desarrollada con React + Vite + Bun, diseño mobile-first.

---

## Stack

| Herramienta | Versión |
|---|---|
| [React](https://react.dev/) | 18.3 |
| [Vite](https://vitejs.dev/) | 6.3 |
| [Bun](https://bun.sh/) | latest |

Sin librerías de UI ni CSS frameworks — todo el estilo es CSS-in-JS (inline styles + template literals).

---

## Estructura del proyecto

```
chilin-landing/
├── public/
│   ├── assets/          # Imágenes, video hero, logos
│   └── fonts/           # Bricolage Grotesque, Inter (variable fonts)
├── src/
│   ├── components/
│   │   ├── Loader.jsx   # Pantalla de carga animada con anillos y barra de progreso
│   │   ├── Nav.jsx      # Barra de navegación
│   │   ├── Hero.jsx     # Sección principal con video, partículas y efecto fuego
│   │   ├── Products.jsx # Catálogo de productos
│   │   ├── Events.jsx   # Sección de barra para eventos
│   │   ├── Wholesale.jsx# Formulario de contacto para mayoreo
│   │   └── Footer.jsx   # Pie de página
│   ├── App.jsx
│   ├── index.css        # Reset, tipografía, grid, animaciones globales
│   └── main.jsx
└── index.html
```

---

## Instalación y uso

**Requisitos:** [Bun](https://bun.sh/) instalado.

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd chilin-landing

# Instalar dependencias
bun install

# Servidor de desarrollo
bun run dev

# Build de producción
bun run build

# Preview del build
bun run preview
```

---

## Funcionalidades destacadas

- **Loader animado** — pantalla de entrada con anillos giratorios, partículas de fuego, barra de progreso y secuencia de burst al terminar.
- **Circle reveal** — al finalizar el loader, el contenido aparece con un reveal circular desde el centro de la pantalla.
- **Hero section** — video de fondo con efecto Ken Burns, partículas de brasa flotantes, calor radial animado y texto con animaciones de entrada escalonadas.
- **Efecto fuego en "PICANTE"** — burbujas animadas con `mix-blend-mode: screen` y trazo `WebkitTextStroke` sobre el texto.
- **Fade-up on scroll** — secciones inferiores aparecen con IntersectionObserver al hacer scroll.
- **Diseño responsive** — mobile-first con breakpoints en 768 px y 1280 px.
- **Tweaks panel** — panel de ajustes oculto activable vía `postMessage` para alternar secciones y estilos en tiempo real.

---

## Tipografías

Alojadas localmente en `public/fonts/` para evitar dependencia de red:

- **Bricolage Grotesque** (variable, 200–800) — títulos y UI bold
- **Inter** (variable, 100–900) — cuerpo y etiquetas
- **Bebas Neue** — cargada desde Google Fonts, usada en el loader

---

## Paleta de colores

| Uso | Color |
|---|---|
| Fondo principal | `#fefee5` |
| Texto principal | `#373928` |
| Acento amarillo | `#fde800` |
| Fondo hero / loader | `#120400` |
| Fuego / acento rojo | `#FF4800` |
