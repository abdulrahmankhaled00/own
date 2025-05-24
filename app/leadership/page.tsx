import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function Leadership() {
  const directors = [
    { name: "Mr. Reda Own", position: "Chairman", image: "/placeholder.svg?height=300&width=300" },
    { name: "Mr. Ahmed Own", position: "Vice-President", image: "/placeholder.svg?height=300&width=300" },
    { name: "Mr. Mohamed Own", position: "Board Member", image: "/placeholder.svg?height=300&width=300" },
    { name: "Mr. Ehab Own", position: "Board Member", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-black via-neutral-100 to-zinc-100 relative">
        <div className="absolute inset-0 z-0">
          <img src="/images/skyline-view.jpg" alt="Leadership" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-zinc-900/90"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider text-white mb-8">Leadership</h1>
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-8">Chairman's Message</h2>
            <div className="w-16 h-px bg-gray-400 mx-auto"></div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-gray-300">
            <p>
              As a testament to our journey of growth, innovation and commitment to excellence. For over three decades,
              we have honed our expertise across diverse industries and geographies, culminating in our establishment as
              a formidable presence in the Egyptian market.
            </p>
            <p>
              Since 2017, with the inception of AL Qima constructions, we have endeavored to bring world-class services
              to Egypt, setting the stage for a multitude of ventures across various sectors.
            </p>
            <p>
              At the core of our endeavors lies a steadfast dedication to integrity, professionalism and customer
              satisfaction. We recognize that our achievements are a reflection of the trust and confidence placed in us
              by our valued partners, clients and stakeholders.
            </p>
            <p className="text-gray-400 italic">
              As we navigate the dynamic landscape of the Egyptian market, we remain steadfast in our commitment to
              advancing the nation's progress while delivering tangible value to our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-8">Board of Directors</h2>
            <div className="w-16 h-px bg-gray-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {directors.map((director, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-8 rounded-lg text-center hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <img
                  src={director.image || "/placeholder.svg"}
                  alt={director.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-neutral-700"
                />
                <h3 className="text-xl font-medium text-white mb-2">{director.name}</h3>
                <p className="text-gray-400">{director.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
