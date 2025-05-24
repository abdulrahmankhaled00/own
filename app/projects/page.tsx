import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function Projects() {
  const projects = [
    {
      title: "Waterfront Residences",
      location: "New Cairo, Egypt",
      type: "Residential",
      status: "Completed",
      image: "/images/waterfront-development.jpg",
      description: "Luxury waterfront living with modern amenities and stunning views of the Nile.",
      units: "250 Units",
      area: "15,000 sqm",
    },
    {
      title: "Business District Tower",
      location: "Downtown Cairo, Egypt",
      type: "Commercial",
      status: "Under Construction",
      image: "/images/commercial-complex.jpg",
      description: "State-of-the-art commercial complex in the heart of Cairo's business district.",
      units: "120 Offices",
      area: "25,000 sqm",
    },
    {
      title: "Green Valley Compound",
      location: "6th October City, Egypt",
      type: "Mixed-Use",
      status: "Planning",
      image: "/images/luxury-compound.jpg",
      description: "Sustainable mixed-use development with green spaces and modern facilities.",
      units: "400 Units",
      area: "50,000 sqm",
    },
    {
      title: "Heritage Plaza",
      location: "Alexandria, Egypt",
      type: "Commercial",
      status: "Completed",
      image: "/images/modern-apartments.jpg",
      description: "Modern commercial plaza blending contemporary design with local heritage.",
      units: "80 Shops",
      area: "12,000 sqm",
    },
    {
      title: "Skyline Towers",
      location: "New Administrative Capital, Egypt",
      type: "Residential",
      status: "Under Construction",
      image: "/images/residential-towers.jpg",
      description: "Luxury high-rise towers offering panoramic city views and premium amenities.",
      units: "300 Units",
      area: "20,000 sqm",
    },
    {
      title: "Innovation Hub",
      location: "Smart Village, Egypt",
      type: "Commercial",
      status: "Planning",
      image: "/images/construction-site.jpg",
      description: "Technology and innovation center for startups and enterprises.",
      units: "150 Offices",
      area: "18,000 sqm",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-black via-neutral-100 to-zinc-100 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/skyline-view.jpg"
            alt="Projects overview"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-zinc-900/90"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider text-white mb-8">Our Projects</h1>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover our portfolio of exceptional developments across Egypt
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-neutral-900 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === "Completed"
                            ? "bg-emerald-900/30 text-emerald-400 border border-emerald-700/50"
                            : project.status === "Under Construction"
                              ? "bg-amber-900/30 text-amber-400 border border-amber-700/50"
                              : "bg-stone-800/50 text-stone-300 border border-stone-600/50"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">{project.type}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-3">{project.location}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{project.units}</span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
