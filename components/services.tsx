import { Card } from "@/components/ui/card"
import { Scale, MessageCircle, Calculator } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: "LexCode",
      description: "Asistente legal que redacta y revisa contratos en segundos.",
    },
    {
      icon: MessageCircle,
      title: "El Pana Virtual",
      description: "Chatbots que responden con naturalidad y cierran ventas.",
    },
    {
      icon: Calculator,
      title: "El Cuadre.AI",
      description: "Automatización de facturas y reportes contables sin errores.",
    },
  ]

  return (
    <section id="servicios" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12 neon-text">
          {">"} Nuestros_Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-[#1a1a1a] border-[#262626] hover:border-[#39ff14] transition-all duration-300 p-6 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#262626] group-hover:bg-[#39ff14]/10 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[#39ff14]" />
                  </div>

                  <h3 className="text-xl font-mono font-bold text-white group-hover:text-[#39ff14] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
