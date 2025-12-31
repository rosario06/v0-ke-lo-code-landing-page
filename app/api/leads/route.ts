import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.nombre || !data.empresa || !data.whatsapp || !data.servicio) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // TODO: Replace with your actual n8n webhook URL
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || "YOUR_N8N_WEBHOOK_URL_HERE"

    // Send data to n8n webhook
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        empresa: data.empresa,
        whatsapp: data.whatsapp,
        servicio: data.servicio,
        timestamp: new Date().toISOString(),
        source: "KeLoCode Website",
      }),
    })

    if (!n8nResponse.ok) {
      console.error("Error from n8n:", await n8nResponse.text())
      return NextResponse.json({ error: "Error conectando con n8n" }, { status: 500 })
    }

    return NextResponse.json({
      message: "Lead enviado a n8n exitosamente",
      success: true,
    })
  } catch (error) {
    console.error("Error processing lead:", error)
    return NextResponse.json({ error: "Error procesando la solicitud" }, { status: 500 })
  }
}
