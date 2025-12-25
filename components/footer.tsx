export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MB World Trading</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Conectando mercados, impulsando negocios a nivel internacional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a href="#inicio" className="hover:text-secondary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-secondary-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-secondary-foreground transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-secondary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-secondary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a
                  href="mailto:info.mbworldtrading@gmail.com"
                  className="hover:text-secondary-foreground transition-colors"
                >
                  info.mbworldtrading@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+34620964928" className="hover:text-secondary-foreground transition-colors">
                  +34 620 964 928
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>© {currentYear} MB World Trading S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
