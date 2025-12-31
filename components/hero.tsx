"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Inteligencia Artificial que habla tu idioma."
  const [showCursor, setShowCursor] = useState(true)

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

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
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

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#39ff14]/30">
              <img
                src="/professional-dominican-businesswoman-executive-in-.jpg"
                alt="Ejecutiva dominicana profesional"
                className="w-full h-auto object-cover"
              />
              {/* Neon accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
