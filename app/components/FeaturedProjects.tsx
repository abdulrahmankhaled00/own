import Link from "next/link"

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Waterfront Residences",
      location: "New Cairo",
      image: "/images/waterfront-development.jpg",
      status: "Completed",
      description: "Luxury waterfront living with panoramic views and premium amenities",
    },
    {
      title: "Business District Tower",
      location: "Downtown Cairo",
      image: "/images/commercial-complex.jpg",
      status: "Under Construction",
      description: "State-of-the-art commercial complex in the heart of Cairo",
    },
    {
      title: "Green Valley Compound",
      location: "6th October City",
      image: "/images/luxury-compound.jpg",
      status: "Planning",
      description: "Sustainable mixed-use development with green spaces",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Featured Projects</h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our latest developments that showcase innovation, quality, and sustainable design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-neutral-900 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Completed"
                          ? "bg-neutral-800/50 text-neutral-300 border border-neutral-600/50"
                          : project.status === "Under Construction"
                            ? "bg-neutral-800/50 text-neutral-300 border border-neutral-600/50"
                            : "bg-stone-800/50 text-stone-300 border border-stone-600/50"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3">{project.location}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
