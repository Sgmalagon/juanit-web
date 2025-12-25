"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Import, TrendingUp, ShoppingBag, Package, Truck, FileCheck } from "lucide-react"

const services = [
  {
    icon: Import,
    title: "Importación Internacional",
    description: "Gestión completa de importaciones desde cualquier parte del mundo con garantías de calidad.",
  },
  {
    icon: TrendingUp,
    title: "Exportación Internacional",
    description: "Expansión global de su negocio con nuestra red internacional de distribución y logística.",
  },
  {
    icon: ShoppingBag,
    title: "Comercio de Alimentos",
    description: "Especialistas en importación y exportación de productos alimenticios con certificación.",
  },
  {
    icon: Package,
    title: "Mercancía General",
    description: "Amplio catálogo de productos para satisfacer todas las necesidades comerciales.",
  },
  {
    icon: Truck,
    title: "Gestión Logística",
    description: "Soluciones logísticas integrales con seguimiento en tiempo real y optimización de rutas.",
  },
  {
    icon: FileCheck,
    title: "Asesoría Comercial",
    description: "Consultoría especializada en regulaciones internacionales y documentación aduanera.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="servicios" ref={sectionRef} className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Nuestros Servicios</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Soluciones completas para su negocio
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className={`p-8 group hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
