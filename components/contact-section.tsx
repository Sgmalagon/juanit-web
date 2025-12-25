"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, User, Building2 } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirigir a WhatsApp con mensaje predefinido
    const message = `Hola, mi nombre es ${formData.name}. ${formData.message}`
    window.open(`https://wa.me/34620964928?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Hablemos de su proyecto</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <Card className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Building2 className="h-5 w-5" />
                    <span className="font-semibold">Empresa</span>
                  </div>
                  <p className="text-foreground font-medium">MB World Trading S.L.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <User className="h-5 w-5" />
                    <span className="font-semibold">Director</span>
                  </div>
                  <p className="text-foreground">Juan Carlos Muñoz Bastida</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Mail className="h-5 w-5" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <a href="mailto:info.mbworldtrading@gmail.com" className="text-primary hover:underline">
                    info.mbworldtrading@gmail.com
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Teléfono</span>
                  </div>
                  <a href="tel:+34620964928" className="text-primary hover:underline">
                    +34 620 964 928
                  </a>
                </div>
              </Card>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <h4 className="text-2xl font-bold mb-4">¿Listo para empezar?</h4>
                <p className="mb-6 leading-relaxed">
                  Contáctenos hoy mismo y descubra cómo podemos ayudarle a expandir su negocio internacionalmente.
                </p>
                <Button asChild variant="secondary" size="lg" className="w-full">
                  <a href="https://wa.me/34620964928" target="_blank" rel="noopener noreferrer">
                    Hablar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Formulario */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Su nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="su@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+34 000 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntenos sobre su proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Enviar mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
