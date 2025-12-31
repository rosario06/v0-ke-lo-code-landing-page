"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    whatsapp: "",
    servicio: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ nombre: "", empresa: "", email: "", whatsapp: "", servicio: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-4 neon-text">
          {">"} Inicia_tu_Transformación_Digital
        </h2>
        <p className="text-center text-gray-400 mb-12">Completa el formulario y te contactaremos pronto</p>

        <Card className="bg-[#1a1a1a] border-[#262626] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-gray-300">
                Nombre Completo
              </Label>
              <Input
                id="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="bg-[#0a0a0a] border-[#262626] text-white focus:border-[#39ff14]"
                placeholder="Tu nombre"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-gray-300">
                Empresa
              </Label>
              <Input
                id="empresa"
                type="text"
                required
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="bg-[#0a0a0a] border-[#262626] text-white focus:border-[#39ff14]"
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#0a0a0a] border-[#262626] text-white focus:border-[#39ff14]"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-gray-300">
                WhatsApp
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="bg-[#0a0a0a] border-[#262626] text-white focus:border-[#39ff14]"
                placeholder="+1 (809) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="servicio" className="text-gray-300">
                Tipo de Servicio
              </Label>
              <Select
                value={formData.servicio}
                onValueChange={(value) => setFormData({ ...formData, servicio: value })}
                required
              >
                <SelectTrigger className="bg-[#0a0a0a] border-[#262626] text-white focus:border-[#39ff14]">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-[#262626]">
                  <SelectItem value="lexcode">LexCode (Asistente Legal)</SelectItem>
                  <SelectItem value="pana-virtual">El Pana Virtual (Chatbots)</SelectItem>
                  <SelectItem value="cuadre-ai">El Cuadre.AI (Contabilidad)</SelectItem>
                  <SelectItem value="otro">Otro / Consultoría</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isSubmitting && <div className="text-center text-[#39ff14] font-mono">Procesando solicitud... {">"}_</div>}

            {submitStatus === "success" && (
              <div className="text-center text-[#39ff14] font-mono p-4 border border-[#39ff14] rounded-md neon-border">
                ✓ Solicitud Recibida. Te contactaremos pronto.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="text-center text-red-500 font-mono p-4 border border-red-500 rounded-md">
                ✗ Error al enviar. Por favor intenta de nuevo.
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#39ff14] text-[#0a0a0a] hover:bg-[#2ee00f] font-bold text-lg py-6 neon-glow"
            >
              {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
