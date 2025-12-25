"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("inicio")} className="flex items-center">
          <Image
            src="/images/mb-logo.png"
            alt="MB World Trading"
            width={160}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("catalogo")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Catálogo
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
          <Button
            onClick={() => scrollToSection("contacto")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Hablar ahora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("catalogo")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              Hablar ahora
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
