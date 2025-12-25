import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CatalogSection } from "@/components/catalog-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { VirtualAssistant } from "@/components/virtual-assistant"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <VirtualAssistant />
    </main>
  )
}
