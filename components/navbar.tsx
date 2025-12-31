"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#262626]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-mono text-xl font-bold neon-text">{">"} KeLoCode_</span>
            <span className="font-sans text-xs italic text-gray-400 ml-4">Agencia de AI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-300 hover:text-[#39ff14] transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-gray-300 hover:text-[#39ff14] transition-colors font-medium"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-300 hover:text-[#39ff14] transition-colors font-medium"
            >
              Nosotros
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("contacto")}
            variant="outline"
            className="border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14] hover:text-[#0a0a0a] transition-all duration-300 font-medium"
          >
            Cotizar Proyecto
          </Button>
        </div>
      </div>
    </nav>
  )
}
