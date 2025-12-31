🧬 PROMPT MAESTRO (Para Copiar y Pegar en tu IA de Desarrollo)
Contexto: Actúa como un desarrollador experto en Frontend y UI/UX especializado en Next.js 14 (App Router) y Tailwind CSS. Vamos a crear la Landing Page para una agencia de Inteligencia Artificial en República Dominicana llamada "KeLoCode".

Estética y Diseño (Look & Feel):

Vibe: "Terminal Cyberpunk Corporativo". Serio pero tecnológico y moderno.

Paleta de Colores:

Fondo: Negro Mate (#0a0a0a o bg-neutral-950).

Acento Principal: Verde Neón (#39ff14 o similar) para botones, bordes y el cursor parpadeante _.

Texto: Blanco o Gris Claro (text-gray-200) para lectura.

Tipografía: Encabezados en fuente Monospaced (tipo código) y cuerpo en Sans Serif limpia (Inter o Roboto).

Estructura de la Página (Single Page):

Navbar:

Logo a la izquierda: > KeLoCode_ (Texto verde neón brillante).

Enlaces: Servicios, Nosotros, Testimonios.

Botón CTA (Call to Action): "Cotizar Proyecto" (Borde verde, fondo transparente, hover verde relleno).

Hero Section (Impacto Visual):

Imagen: A la derecha, una imagen realista de una ejecutiva dominicana (mujer, tez morena clara, traje formal negro, cabello liso oscuro, actitud profesional y confiada) trabajando en una oficina moderna con iluminación tenue y detalles de código flotando sutilmente.

Texto: A la izquierda.

H1: "Inteligencia Artificial que habla tu idioma." (Efecto de escritura tipo máquina de escribir).

Subtítulo: "Automatizamos lo aburrido para que tú factures lo importante. Asistentes legales, contables y de servicio al cliente que trabajan 24/7."

Botón Principal: "Empezar Automatización".

Sección de Servicios (Grid de 3 Tarjetas):

Estilo de tarjetas: Fondo gris muy oscuro (bg-neutral-900), borde fino verde al hacer hover. Iconos minimalistas neón.

Tarjeta 1 (Legal): Título "LexCode". Desc: "Asistente legal que redacta y revisa contratos en segundos."

Tarjeta 2 (Atención): Título "El Pana Virtual". Desc: "Chatbots que responden con naturalidad y cierran ventas."

Tarjeta 3 (Finanzas): Título "El Cuadre.AI". Desc: "Automatización de facturas y reportes contables sin errores."

Sección de Testimonios (Social Proof):

Diseño limpio. Fotos de perfil circulares con nombres latinos/dominicanos.

Ejemplo 1: "Desde que usamos KeLoCode, el WhatsApp de la tienda se responde solo. Una vaina bien." - Carlos M., Dueño de Retail.

Ejemplo 2: "La redacción de contratos legales bajó de 3 horas a 15 minutos." - Dra. Elena R., Abogada.

Sección de Contacto (Lead Gen Form) - CRÍTICO:

Título: "Inicia tu Transformación Digital".

Formulario con los campos: Nombre, Empresa, WhatsApp, Tipo de Servicio (Dropdown).

Funcionalidad Técnica:

Al hacer Submit, debe enviar los datos a un API Route de Next.js (POST /api/leads).

Ese endpoint debe conectarse internamente al Webhook de n8n configurado.

Mostrar mensaje de carga: "Procesando solicitud... >_"

Mensaje de éxito: "Solicitud Recibida. Te contactaremos pronto."

Requerimientos Técnicos (Basado en tu stack):

Usa componentes de servidor (RSC) donde sea posible.

Usa lucide-react para los iconos.

El formulario debe usar react-hook-form o server actions simples.

Asegura que sea totalmente Responsive (Mobile First).

📸 PROMPT PARA GENERAR LA IMAGEN HERO (Midjourney / DALL-E 3)
Como quieres usar la imagen de la persona real que subiste, pero necesitas "integrarla" o tener referencias para la sesión de fotos, aquí tienes el prompt para generar el fondo o la composición ideal:

Prompt: A hyper-realistic professional photography shot of a confident Dominican businesswoman executive in a modern, dark-themed office. She is wearing a sharp black blazer. The lighting is cinematic, featuring subtle neon green accent lights reflecting on glass surfaces in the background, giving a cybersecurity and high-tech atmosphere. She is looking at the camera with a welcoming yet serious expression. In the foreground, slightly out of focus, floating digital data interfaces or code snippets in green holographic color. 8k resolution, corporate cyberpunk aesthetic.

🔌 Integración con n8n (Nota para el Desarrollador)
Dado que usas Next.js App Router, el prompt anterior le indica a la IA que cree una ruta API intermedia. Esto es importante por seguridad (CORS).

Tu archivo /app/api/leads/route.ts se verá algo así (la IA lo generará con el prompt, pero verifica esto):

TypeScript

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Envía los datos a tu Webhook de n8n
  const n8nResponse = await fetch('TU_URL_DEL_WEBHOOK_N8N', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (n8nResponse.ok) {
    return NextResponse.json({ message: 'Lead enviado a n8n exitosamente' });
  } else {
    return NextResponse.json({ error: 'Error conectando con n8n' }, { status: 500 });
  }
}