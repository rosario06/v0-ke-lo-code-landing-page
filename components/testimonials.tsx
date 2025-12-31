import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos M.",
      role: "Dueño de Retail",
      content: "Desde que usamos KeLoCode, el WhatsApp de la tienda se responde solo. Una vaina bien.",
      image: "/dominican-male-business-owner-smiling-professional.jpg",
    },
    {
      name: "Dra. Elena R.",
      role: "Abogada",
      content: "La redacción de contratos legales bajó de 3 horas a 15 minutos.",
      image: "/dominican-female-lawyer-professional-portrait.jpg",
    },
    {
      name: "Miguel A.",
      role: "Contador",
      content: "El Cuadre.AI eliminó los errores humanos en nuestros reportes. Ahora todo cuadra perfecto.",
      image: "/dominican-male-accountant-professional-portrait.jpg",
    },
  ]

  return (
    <section id="testimonios" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12 neon-text">
          {">"} Lo_Que_Dicen_Nuestros_Clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#1a1a1a] border-[#262626] p-6 space-y-4">
              <Quote className="w-8 h-8 text-[#39ff14] opacity-50" />

              <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-4 pt-4 border-t border-[#262626]">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#39ff14]/30"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
