import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
