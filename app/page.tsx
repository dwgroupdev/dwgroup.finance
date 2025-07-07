import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
