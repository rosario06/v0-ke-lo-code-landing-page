import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#39ff14]/20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="font-mono text-lg font-bold text-[#39ff14] mb-4">&gt; KeLoCode_</h3>
            <p className="font-mono text-sm text-gray-400 italic mb-2">Agencia de AI</p>
            <p className="text-sm leading-relaxed text-gray-400">
              Inteligencia Artificial que habla tu idioma. Soluciones de IA diseñadas para empresas dominicanas.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono text-sm font-bold text-[#39ff14] mb-4">&gt; Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="font-mono">
                <span className="text-[#39ff14]">$</span> República Dominicana
              </li>
              <li className="font-mono">
                <span className="text-[#39ff14]">$</span>{" "}
                <a href="mailto:info@kelocode.com" className="hover:text-[#39ff14] transition-colors">
                  info@kelocode.com
                </a>
              </li>
              <li className="font-mono">
                <span className="text-[#39ff14]">$</span>{" "}
                <a href="tel:+1809000000" className="hover:text-[#39ff14] transition-colors">
                  +1 (809) 000-0000
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-mono text-sm font-bold text-[#39ff14] mb-4">&gt; Síguenos</h4>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com/kelocode"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Facebook"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#39ff14]/30 bg-black/50 transition-all group-hover:border-[#39ff14] group-hover:bg-[#39ff14]/10 group-hover:shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                  <Facebook className="h-5 w-5 text-[#39ff14]" />
                </div>
              </Link>
              <Link
                href="https://instagram.com/kelocode"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#39ff14]/30 bg-black/50 transition-all group-hover:border-[#39ff14] group-hover:bg-[#39ff14]/10 group-hover:shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                  <Instagram className="h-5 w-5 text-[#39ff14]" />
                </div>
              </Link>
              <Link
                href="https://linkedin.com/company/kelocode"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#39ff14]/30 bg-black/50 transition-all group-hover:border-[#39ff14] group-hover:bg-[#39ff14]/10 group-hover:shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                  <Linkedin className="h-5 w-5 text-[#39ff14]" />
                </div>
              </Link>
              <Link
                href="https://twitter.com/kelocode"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Twitter"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#39ff14]/30 bg-black/50 transition-all group-hover:border-[#39ff14] group-hover:bg-[#39ff14]/10 group-hover:shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                  <Twitter className="h-5 w-5 text-[#39ff14]" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-[#39ff14]/20 pt-8 text-center">
          <p className="font-mono text-sm text-gray-500">
            <span className="text-[#39ff14]">©</span> {new Date().getFullYear()} KeLoCode. Todos los derechos
            reservados. <span className="text-[#39ff14]">|</span> Hecho con <span className="text-[#39ff14]">♥</span> en
            República Dominicana
          </p>
        </div>
      </div>
    </footer>
  )
}
