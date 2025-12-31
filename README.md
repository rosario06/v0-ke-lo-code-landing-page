# KeLoCode - Agencia de IA 🚀

![KeLoCode Banner](public/team-member-1.jpg)

> **Inteligencia Artificial que habla tu idioma.**  
> Automatizamos lo aburrido para que tú factures lo importante.

---

## 📋 Descripción del Proyecto

**KeLoCode** es una landing page moderna para una agencia de Inteligencia Artificial en República Dominicana. Diseñada con una estética terminal cyberpunk corporativa, utiliza verde neón (#39ff14) sobre fondo negro mate para transmitir innovación tecnológica con profesionalismo.

La página presenta tres servicios principales:
- **LexCode**: Asistente legal para redacción de contratos
- **El Pana Virtual**: Chatbots de servicio al cliente 24/7
- **El Cuadre.AI**: Automatización contable y de facturación

---

## 🛠️ Stack Tecnológico

### Frontend Framework
- **Next.js 16.0.10** - Framework React con App Router
- **React 19.2.0** - Biblioteca UI
- **TypeScript ^5** - Tipado estático

### Estilos & UI
- **Tailwind CSS ^4.1.9** - Framework CSS utility-first
- **shadcn/ui** - Librería de componentes (estilo New York)
- **@radix-ui** - Componentes base accesibles (20+ paquetes)
- **Lucide React** - Iconos SVG

### Formularios & Validación
- **React Hook Form ^7.60.0** - Manejo de formularios
- **Zod 3.25.76** - Validación de esquemas TypeScript-first
- **@hookform/resolvers ^3.10.0** - Resolvers de validación

### Utilidades
- **class-variance-authority** - Variantes CSS
- **clsx** & **tailwind-merge** - Manejo de clases condicionales
- **date-fns** - Utilidades de fecha
- **next-themes** - Gestión de temas

### Analytics
- **@vercel/analytics** - Análisis de tráfico web

---

## 🎨 Características de Diseño

### Paleta de Colores
```css
--background: #0a0a0a        /* Negro Mate */
--neon-green: #39ff14        /* Verde Neón */
--terminal-green: #00ff41    /* Verde Terminal */
--card: #1a1a1a              /* Gris Oscuro */
--border: #262626            /* Gris Borde */
```

### Tipografía
- **Geist Sans** - Texto general
- **Geist Mono** - Títulos con estilo terminal

### Efectos Especiales
- Efecto de escritura tipo máquina (typing animation)
- Cursor parpadeante en el hero
- Glow effects con sombras neón
- Slider automático de imágenes del equipo
- Hover effects con iluminación neón

---

## 📁 Estructura del Proyecto

```
kelocode-landing/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts         # Endpoint para captura de leads
│   ├── globals.css              # Estilos globales + variables CSS
│   ├── layout.tsx               # Layout raíz con metadatos
│   └── page.tsx                 # Página principal
│
├── components/
│   ├── navbar.tsx               # Navegación fija con logo y CTA
│   ├── hero.tsx                 # Hero con typing effect + slider
│   ├── services.tsx             # Tarjetas de servicios
│   ├── testimonials.tsx         # Testimonios de clientes
│   ├── contact-form.tsx         # Formulario de contacto
│   ├── footer.tsx               # Footer con redes sociales
│   ├── theme-provider.tsx       # Provider de temas
│   └── ui/                      # Componentes shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       └── [50+ componentes más]
│
├── hooks/
│   ├── use-mobile.ts            # Hook detección móvil
│   └── use-toast.ts             # Hook notificaciones toast
│
├── lib/
│   └── utils.ts                 # Función cn() para merge de clases
│
├── public/
│   ├── team-member-1.jpg        # Foto del equipo 1
│   ├── team-member-2.jpg        # Foto del equipo 2
│   ├── team-member-3.jpg        # Foto del equipo 3
│   └── [imágenes testimoniales]
│
├── components.json              # Configuración shadcn/ui
├── tsconfig.json                # Configuración TypeScript
├── next.config.mjs              # Configuración Next.js
├── postcss.config.mjs           # Configuración PostCSS
├── package.json                 # Dependencias
└── README.md                    # Este archivo
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** 18+ o superior
- **npm**, **yarn**, **pnpm** o **bun**

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/kelocode-landing.git
cd kelocode-landing
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# n8n Webhook URL para captura de leads
N8N_WEBHOOK_URL=https://tu-n8n-instance.com/webhook/kelocode-leads
```

> ⚠️ **Importante**: Reemplaza la URL con tu webhook real de n8n

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

---

## 🔧 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta ESLint
```

---

## 🌐 Integración con n8n

El formulario de contacto envía los datos capturados a un webhook de n8n para automatización de leads.

### Datos Enviados al Webhook

```json
{
  "nombre": "Juan Pérez",
  "empresa": "Empresa XYZ",
  "whatsapp": "+1 (809) 123-4567",
  "servicio": "lexcode",
  "timestamp": "2025-12-31T10:30:00.000Z",
  "source": "KeLoCode Website"
}
```

### Configurar n8n

1. Crea un webhook en tu instancia de n8n
2. Copia la URL del webhook
3. Agrégala a `.env.local` como `N8N_WEBHOOK_URL`
4. El formulario enviará automáticamente los leads

---

## 📱 Secciones de la Landing Page

### 1. **Navbar**
- Logo con efecto neón
- Navegación suave (smooth scroll)
- Botón CTA "Cotizar Proyecto"

### 2. **Hero Section**
- Título con efecto typing animado
- Slider automático de 3 fotos del equipo
- Cursor parpadeante tipo terminal
- CTA principal

### 3. **Servicios**
- 3 tarjetas con hover effects
- Iconos Lucide React
- Descripciones de LexCode, El Pana Virtual, El Cuadre.AI

### 4. **Testimonios**
- 3 testimonios de clientes dominicanos
- Fotos de perfil con borde neón
- Nombres y roles

### 5. **Formulario de Contacto**
- Campos: Nombre, Empresa, WhatsApp, Servicio
- Validación con React Hook Form + Zod
- Integración con webhook n8n
- Mensajes de éxito/error

### 6. **Footer**
- Información de la agencia
- Datos de contacto
- Links a redes sociales con hover effects neón
- Copyright

---

## 🎯 Características Principales

✅ Diseño terminal cyberpunk con verde neón  
✅ Efecto de escritura tipo máquina en el hero  
✅ Slider automático de imágenes del equipo (3 fotos)  
✅ Formulario funcional con validación  
✅ Integración con n8n para captura de leads  
✅ Navegación suave entre secciones  
✅ Responsive design (mobile-first)  
✅ Efectos hover con glow neón  
✅ Iconos de redes sociales animados  
✅ SEO optimizado con metadatos  
✅ Accesibilidad con componentes Radix UI  
✅ Analytics integrado (Vercel Analytics)  

---

## 🚢 Deployment

### Vercel (Recomendado)

1. **Push a GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Conectar con Vercel**
- Ve a [vercel.com](https://vercel.com)
- Importa el repositorio
- Agrega la variable `N8N_WEBHOOK_URL` en configuración
- Deploy automático

### Otros Hosting
```bash
npm run build
npm run start
```

---

## 🔒 Variables de Entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `N8N_WEBHOOK_URL` | URL del webhook de n8n para leads | ✅ Sí |

---

## 📞 Contacto & Soporte

**KeLoCode - Agencia de IA**  
📧 Email: info@kelocode.com  
📱 WhatsApp: +1 (809) 000-0000  
🌐 Website: [kelocode.com](https://kelocode.com)  

---

## 📄 Licencia

Este proyecto es privado y propietario de KeLoCode.

---

## 🙏 Créditos

- **Framework**: Next.js 16 + React 19
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist (Vercel)

---

**Hecho con ♥ en República Dominicana**  
**© 2025 KeLoCode. Todos los derechos reservados.**
