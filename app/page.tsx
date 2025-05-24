import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"
import CompanyOverview from "./components/CompanyOverview"
import Navigation from "./components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <CompanyOverview />
    </main>
  )
}
