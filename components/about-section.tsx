"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section id="nosotros" ref={sectionRef} className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Sobre Nosotros</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Líderes en comercio internacional
            </h3>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              <strong className="text-foreground">MB World Trading S.L.</strong> es una empresa especializada en la{" "}
              <strong className="text-foreground">importación y exportación de alimentos y productos en general</strong>
              , con un fuerte compromiso hacia la calidad, el cumplimiento normativo y la excelencia en el servicio.
            </p>

            <p className="text-pretty">
              Ofrecemos soluciones comerciales eficientes a nivel internacional, conectando mercados y facilitando el
              crecimiento de negocios en todo el mundo. Nuestra experiencia y red global nos permiten garantizar
              operaciones seguras, transparentes y rentables.
            </p>

            <p className="text-pretty">
              Con un equipo de profesionales altamente capacitados, nos adaptamos a las necesidades específicas de cada
              cliente, brindando un servicio personalizado que garantiza resultados excepcionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
