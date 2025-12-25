"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Globe, Shield, Users, Star, Handshake } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Profesionalismo",
    description: "Equipo experto con años de experiencia en comercio internacional",
  },
  {
    icon: Globe,
    title: "Alcance Internacional",
    description: "Presencia global en los principales mercados del mundo",
  },
  {
    icon: Shield,
    title: "Transparencia",
    description: "Operaciones claras y seguimiento detallado de cada proceso",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Servicio adaptado a las necesidades específicas de cada cliente",
  },
  {
    icon: Star,
    title: "Confianza",
    description: "Relaciones duraderas basadas en resultados comprobados",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description: "Dedicación total al éxito de su negocio",
  },
]

export function WhyChooseUsSection() {
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
    <section ref={sectionRef} className="py-24 px-4">
      <div className="container mx-auto">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">¿Por Qué Elegirnos?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Su socio de confianza en comercio global
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`text-center space-y-4 p-6 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
