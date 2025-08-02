import Hero from "./components/Hero"
import About from "./components/About"
import FeaturedProject from "./components/FeaturedProject"
import Footer from "./components/Footer"
import TechStack from "./components/TechStack"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <FeaturedProject />
      <Footer />
    </div>
  )
}

