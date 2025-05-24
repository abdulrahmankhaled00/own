import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-black via-neutral-100 to-zinc-100 relative">
        <div className="absolute inset-0 z-0">
          <img src="/images/luxury-compound.jpg" alt="About OWN" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-zinc-900/90"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider text-white mb-8">About OWN</h1>
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-white mb-12">Introduction</h2>
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-gray-300">
              It seems only a short while since 1990 when we made our first small steps into the growing place of KSA.
              In fact, we were indeed very much newcomers. Many of the prestigious companies were already represented
              and feeling the benefits of the "industrial revolution" in the Gulf.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Through the untiring efforts and dedication of both the management and workforce, we have nevertheless
              been able to achieve rapid progress by the introduction of new business models.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-white mb-8">Company History</h2>
              <div className="w-16 h-px bg-gray-400 mb-8"></div>
              <p className="text-lg leading-relaxed text-gray-300">
                With over 30 years of experience spanning the GCC, across multiple sectors and industries, we have
                leveraged our expertise to establish a formidable presence in the Egyptian market. Our journey began in
                2017 with AL Qima constructions, paving the way for numerous other companies operating in diverse
                sectors and industries.
              </p>
            </div>
            <div className="bg-neutral-800 p-12 rounded-lg shadow-xl">
              <img
                src="/images/construction-site.jpg"
                alt="Company timeline"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-300 text-center font-medium">30+ Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="bg-neutral-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-light text-white mb-6">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to become a defining force in modern real estate, fusing aesthetic brilliance,
                functionality excellence and community values into every project.
              </p>
            </div>
            <div className="bg-neutral-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-light text-white mb-6">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Our mission at OWN developments is to deliver excellence in all our endeavors, guided by integrity,
                professionalism and a relentless pursuit of innovation.
              </p>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-light mb-6">Our Values</h3>
              <p className="leading-relaxed">
                Four core principles guide everything we do, from visionary thinking to community-centric development.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Visionary Thinking",
                desc: "It's about going beyond current trends to deliver long-term values",
              },
              { title: "Integrity", desc: "We uphold honesty, transparency and ethical practices in every step" },
              { title: "Design Excellence", desc: "We create innovative functional and high quality spaces" },
              {
                title: "Community-Centric",
                desc: "Creating thoughtful spaces that enrich lives and strengthen connections",
              },
            ].map((value, index) => (
              <div key={index} className="border border-neutral-700 bg-neutral-900 p-8 rounded-lg shadow-xl">
                <h4 className="text-xl font-medium text-white mb-4">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">"{value.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
