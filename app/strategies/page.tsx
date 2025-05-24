import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function Strategies() {
  const strategies = [
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize understanding and addressing the needs of our customers, placing their satisfaction and success at the forefront of everything we do.",
      icon: "👥",
    },
    {
      title: "Innovation and Technology",
      description:
        "We embrace innovation and leverage cutting-edge technologies to stay ahead of the curve and drive efficiency, productivity and competitiveness.",
      icon: "🚀",
    },
    {
      title: "Diversification and Expansion",
      description:
        "We pursue strategic diversification and expansion initiatives to capture new opportunities and mitigate risks.",
      icon: "🌍",
    },
    {
      title: "Operational Excellence",
      description:
        "We are committed to operational excellence in all aspects of our business, striving for efficiency, quality and reliability.",
      icon: "⚡",
    },
    {
      title: "Sustainability and Corporate Responsibility",
      description: "We recognize our responsibility to contribute positively to society and the environment.",
      icon: "🌱",
    },
    {
      title: "Talent Development and Empowerment",
      description:
        "We invest in our people, nurturing talent, fostering diversity and empowering employees to reach their full potential.",
      icon: "💡",
    },
    {
      title: "Stakeholder Engagement and Collaboration",
      description: "We value collaboration and partnership, recognizing that collective efforts yield greater results.",
      icon: "🤝",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-black via-neutral-100 to-zinc-100 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/commercial-complex.jpg"
            alt="Our strategies"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-zinc-900/90"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider text-white mb-8">Our Strategies</h1>
          <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Seven strategic pillars that guide our growth and success
          </p>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="group">
                <div className="bg-neutral-900 p-8 rounded-lg h-full hover:bg-neutral-800 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">{strategy.icon}</span>
                    <span className="text-2xl font-light text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">{strategy.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{strategy.description}</p>
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
