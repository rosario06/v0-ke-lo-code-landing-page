"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Inteligencia Artificial que habla tu idioma."
  const [showCursor, setShowCursor] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const employeeImages = ["/team-member-1.jpg", "/team-member-2.jpg", "/team-member-3.jpg"]

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % employeeImages.length)
    }, 3000)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
      clearInterval(imageInterval)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white leading-tight">
              {displayedText}
              <span className={`neon-text ${showCursor ? "opacity-100" : "opacity-0"}`}>_</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Automatizamos lo aburrido para que tú factures lo importante. Asistentes legales, contables y de servicio
              al cliente que trabajan 24/7.
            </p>

            <Button
              onClick={scrollToContact}
              className="bg-[#39ff14] text-[#0a0a0a] hover:bg-[#2ee00f] font-bold text-lg px-8 py-6 neon-glow"
            >
              Empezar Automatización
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#39ff14]/30">
              {employeeImages.map((image, index) => (
                <img
                  key={image}
                  src={image || "/placeholder.svg"}
                  alt={`Equipo KeLoCode ${index + 1}`}
                  className={`w-full h-auto object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                />
              ))}
              {/* Neon accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Slider indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {employeeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-[#39ff14] w-8" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
