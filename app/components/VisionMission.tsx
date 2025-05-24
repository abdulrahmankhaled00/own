export default function VisionMission() {
  const values = [
    {
      title: "Visionary Thinking",
      description: "It's about going beyond current trends to deliver long-term values",
    },
    {
      title: "Integrity",
      description: "We uphold honesty, transparency and ethical practices in every step",
    },
    {
      title: "Design Excellence",
      description: "We create innovative functional and high quality spaces that elevate community experience",
    },
    {
      title: "Community-Centric",
      description:
        "Creating thoughtful spaces that enrich lives, strengthen connections, and contribute positively to the communities we serve",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Vision */}
          <div className="bg-stone-50 p-8 rounded-lg">
            <h3 className="text-2xl font-light text-stone-800 mb-6">Vision</h3>
            <p className="text-stone-700 leading-relaxed">
              Our vision is to become a defining force in modern real estate, fusing aesthetic brilliance, functionality
              excellence and community values into every project.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-stone-50 p-8 rounded-lg">
            <h3 className="text-2xl font-light text-stone-800 mb-6">Mission</h3>
            <p className="text-stone-700 leading-relaxed">
              Our mission at OWN developments is to deliver excellence in all our endeavors, guided by integrity,
              professionalism and a relentless pursuit of innovation.
            </p>
          </div>

          {/* Values Preview */}
          <div className="bg-stone-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-light mb-6">Our Values</h3>
            <p className="text-stone-300 leading-relaxed">
              Four core principles guide everything we do, from visionary thinking to community-centric development.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-12 text-center">Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="border border-stone-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-medium text-stone-800 mb-4">{value.title}</h4>
                <p className="text-stone-600 leading-relaxed">"{value.description}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
