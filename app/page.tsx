import Hero from "./components/Hero"
import About from "./components/About"
import FeaturedProject from "./components/FeaturedProject"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FeaturedProject />
      <Footer />
    </div>
  )
}

