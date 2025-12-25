"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Monitor, Shirt, Apple, Package } from "lucide-react"

const products = [
  // Tecnología
  {
    id: "tech-1",
    category: "tecnologia",
    name: "Smartphones y Tablets",
    image: "/modern-smartphones-and-tablets-on-white-background.jpg",
    description: "Dispositivos móviles de última generación",
  },
  {
    id: "tech-2",
    category: "tecnologia",
    name: "Laptops y Computadoras",
    image: "/sleek-modern-laptops-and-computers.jpg",
    description: "Equipos de cómputo de alto rendimiento",
  },
  {
    id: "tech-3",
    category: "tecnologia",
    name: "Accesorios Electrónicos",
    image: "/electronic-accessories-headphones-smartwatch-charg.jpg",
    description: "Auriculares, smartwatches y más",
  },
  {
    id: "tech-4",
    category: "tecnologia",
    name: "Componentes PC",
    image: "/computer-components-graphics-card-motherboard.jpg",
    description: "Tarjetas gráficas, procesadores y componentes",
  },
  {
    id: "tech-5",
    category: "tecnologia",
    name: "Cámaras y Fotografía",
    image: "/professional-cameras-and-photography-equipment.jpg",
    description: "Equipos fotográficos profesionales",
  },
  {
    id: "tech-6",
    category: "tecnologia",
    name: "Audio Profesional",
    image: "/professional-audio-equipment-speakers-microphones.jpg",
    description: "Sistemas de sonido y audio de alta calidad",
  },

  // Textil
  {
    id: "textil-1",
    category: "textil",
    name: "Ropa Deportiva",
    image: "/athletic-sportswear-clothing-on-display.jpg",
    description: "Prendas deportivas de alta tecnología",
  },
  {
    id: "textil-2",
    category: "textil",
    name: "Ropa Casual",
    image: "/casual-fashion-clothing-t-shirts-jeans.jpg",
    description: "Vestimenta casual de moda",
  },
  {
    id: "textil-3",
    category: "textil",
    name: "Telas y Tejidos",
    image: "/colorful-fabric-rolls-textile-materials.jpg",
    description: "Textiles de calidad para confección",
  },
  {
    id: "textil-4",
    category: "textil",
    name: "Ropa Infantil",
    image: "/children-clothing-kids-fashion.jpg",
    description: "Prendas para niños y bebés",
  },
  {
    id: "textil-5",
    category: "textil",
    name: "Calzado",
    image: "/modern-shoes-sneakers-footwear-display.jpg",
    description: "Zapatos y calzado de todas las categorías",
  },
  {
    id: "textil-6",
    category: "textil",
    name: "Accesorios de Moda",
    image: "/fashion-accessories-bags-belts-scarves.jpg",
    description: "Bolsos, cinturones y complementos",
  },

  // Alimentos
  {
    id: "alimentos-1",
    category: "alimentos",
    name: "Productos Orgánicos",
    image: "/organic-fresh-vegetables-and-fruits.jpg",
    description: "Alimentos orgánicos certificados",
  },
  {
    id: "alimentos-2",
    category: "alimentos",
    name: "Conservas Gourmet",
    image: "/gourmet-canned-food-products-premium.jpg",
    description: "Conservas y productos enlatados premium",
  },
  {
    id: "alimentos-3",
    category: "alimentos",
    name: "Bebidas Importadas",
    image: "/premium-imported-beverages-bottles.jpg",
    description: "Bebidas selectas de todo el mundo",
  },
  {
    id: "alimentos-4",
    category: "alimentos",
    name: "Snacks y Golosinas",
    image: "/international-snacks-and-candy-assortment.jpg",
    description: "Aperitivos y dulces internacionales",
  },
  {
    id: "alimentos-5",
    category: "alimentos",
    name: "Productos Lácteos",
    image: "/dairy-products-milk-cheese-yogurt.jpg",
    description: "Lácteos frescos y derivados",
  },
  {
    id: "alimentos-6",
    category: "alimentos",
    name: "Especias y Condimentos",
    image: "/premium-spices-and-condiments-collection.jpg",
    description: "Especias premium de diferentes países",
  },

  // Mercancía General
  {
    id: "general-1",
    category: "general",
    name: "Artículos del Hogar",
    image: "/home-decor-and-household-items.jpg",
    description: "Productos para el hogar y decoración",
  },
  {
    id: "general-2",
    category: "general",
    name: "Herramientas",
    image: "/professional-tools-and-hardware.jpg",
    description: "Herramientas profesionales y de uso general",
  },
  {
    id: "general-3",
    category: "general",
    name: "Juguetes",
    image: "/educational-toys-and-games.jpg",
    description: "Juguetes educativos y de entretenimiento",
  },
  {
    id: "general-4",
    category: "general",
    name: "Artículos de Oficina",
    image: "/office-supplies-and-stationery.jpg",
    description: "Suministros y mobiliario de oficina",
  },
  {
    id: "general-5",
    category: "general",
    name: "Productos de Belleza",
    image: "/beauty-products-cosmetics-skincare.jpg",
    description: "Cosméticos y productos de cuidado personal",
  },
  {
    id: "general-6",
    category: "general",
    name: "Artículos Deportivos",
    image: "/sports-equipment-fitness-gear.jpg",
    description: "Equipamiento deportivo y fitness",
  },
]

const categories = [
  { id: "tecnologia", name: "Tecnología", icon: Monitor },
  { id: "textil", name: "Textil", icon: Shirt },
  { id: "alimentos", name: "Alimentos", icon: Apple },
  { id: "general", name: "Mercancía General", icon: Package },
]

export function CatalogSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

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

  const filteredProducts = activeFilter === "all" ? products : products.filter((prod) => prod.category === activeFilter)

  return (
    <section id="catalogo" ref={sectionRef} className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Nuestro Catálogo</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Productos de excelencia mundial
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Amplia variedad de productos importados de la más alta calidad
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => {
              return (
                <Card
                  key={product.id}
                  className={`group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative aspect-square overflow-hidden bg-background">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-primary/95 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                        hoveredCard === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h4 className="text-xl font-bold text-primary-foreground mb-3 text-center">{product.name}</h4>
                      <p className="text-primary-foreground/90 text-center text-sm">{product.description}</p>
                    </div>
                  </div>
                  <div className="p-5 bg-background">
                    <h4 className="text-lg font-semibold text-foreground">{product.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
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
