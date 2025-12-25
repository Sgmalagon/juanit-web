"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const messages = [
  {
    section: "inicio",
    text: "¡Bienvenido a MB World Trading! Soy Juanito, su asistente virtual. ¿Le gustaría conocer más sobre nuestros servicios?",
  },
  {
    section: "nosotros",
    text: "¿Necesita ayuda?",
  },
  {
    section: "catalogo",
    text: "¡Excelente! Este es nuestro catálogo de productos. ¿Le interesa alguna categoría en particular?",
  },
  {
    section: "servicios",
    text: "Estos son nuestros servicios especializados. ¿Necesita ayuda con importación o exportación?",
  },
  {
    section: "contacto",
    text: "¿Listo para dar el siguiente paso? Puede contactarnos directamente por WhatsApp.",
  },
]

export function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(messages[0])
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "nosotros", "catalogo", "servicios", "contacto"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const bottom = top + element.offsetHeight

          if (scrollPosition >= top && scrollPosition <= bottom) {
            const message = messages.find((m) => m.section === section)
            if (message && message.text !== currentMessage.text) {
              setCurrentMessage(message)
              setShowMessage(true)
              setTimeout(() => setShowMessage(false), 5000)
            }
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [currentMessage])

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-16 w-16 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl animate-float"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>

        {/* Indicador de pulso */}
        {!isOpen && <div className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full animate-pulse-subtle" />}
      </div>

      {/* Panel del asistente */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 z-50 shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
                J
              </div>
              <div>
                <h3 className="font-bold">Juanito</h3>
                <p className="text-xs opacity-90">Asistente Virtual</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-foreground leading-relaxed">{currentMessage.text}</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase">¿Cómo puedo ayudarle?</p>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const element = document.getElementById("catalogo")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Ver catálogo de productos
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const element = document.getElementById("servicios")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Conocer nuestros servicios
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const element = document.getElementById("contacto")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Obtener más información
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
              <a
                href="https://wa.me/34620964928"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </Card>
      )}

      {/* Mensaje flotante */}
      {showMessage && !isOpen && (
        <Card className="fixed bottom-24 right-24 max-w-xs z-40 p-4 shadow-xl animate-in slide-in-from-right-5 duration-300">
          <p className="text-sm text-foreground">{currentMessage.text}</p>
          <button
            onClick={() => setShowMessage(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </Card>
      )}
    </>
  )
}
